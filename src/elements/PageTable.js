import GroupItem from './GroupItem';
import PageTableTail from './PageTableTail';
import { getEl, cloneChildrenTo } from '../util';
import { FULL_FILL, SOME_FILL, NOTHING_FILL } from '../FillMode';


class PageTable extends GroupItem {
  static create(element) {
    return new PageTable(element);
  }

  constructor(element) {
    super(element);

    this.typeName = 'PageTable';

    this.parse();
  }

  // 解析 table
  parse() {
    // 解析wrapper
    let wrappersNode = null;
    let nowElement = null;
    let loopEl = this.element;
    while (loopEl) {
      if (loopEl.nodeName && loopEl.nodeName.toLowerCase() === 'table') {
        this.tableElement = loopEl;
        break;
      }

      const newLoopEl = loopEl.cloneNode();
      if (wrappersNode === null) {
        wrappersNode = newLoopEl;
        nowElement = wrappersNode;
      } else {
        nowElement = nowElement.appendChild(newLoopEl);
      }

      loopEl = loopEl.firstElementChild;
    }
    this.wrappersNode = wrappersNode;

    // 获得表格所有的子元素

    // 解析 colgroup
    this.colgroup = null;
    const colgroup = getEl('colgroup', this.tableElement);
    if (colgroup) this.colgroup = colgroup;

    // 解析 thead
    this.tHead = null;
    this.tHeadHeight = 0;
    if (this.tableElement.tHead) {
      this.tHead = this.tableElement.tHead;
      this.tHeadHeight = this.tHead.offsetHeight;
    }

    // 解析 tbody
    this.validRowIndex = 0; // 还没有被分配的行编号
    this.rows = [];
    this.rowHeights = [];
    this.rowSpans = [
      // [
      //   {
      //     start: 0,
      //     end: 100,
      //     element: null,
      //   },
      // ]
    ];
    // TODO: 这里写死了只获取第一个 tBody，可以改进
    const rows = this.tableElement.tBodies[0].rows;
    for (let i = 0, il = rows.length; i < il; i += 1) {
      const row = rows[i];
      // 识别 rowSpan信息
      // TODO: 暂时只支持识别第一行，以后需要支持更多
      this.rowSpans[i] = [];
      const cells = row.cells;
      for (let j = 0, jl = cells.length; j < jl; j += 1) {
        const cell = cells[j];
        const rowSpan = cell.rowSpan;
        if (rowSpan && rowSpan > 1) {
          if (!this.rowSpans[i][j]) {
            this.rowSpans[i][j] = [];
          }
          this.rowSpans[i][j].push({
            start: i,
            end: (i + rowSpan) - 1,
            element: cell,
          });
        }
      }
      this.rows.push(row);
      this.rowHeights.push(row.offsetHeight);
    }
  }

  // 创建一个新table
  wrapInANewTable(nextPageRowIndex) {
    // 先创建一个新表格
    const newTable = this.tableElement.cloneNode();

    // 如果存在列配置，那就添加之
    if (this.colgroup) {
      newTable.appendChild(this.colgroup.cloneNode(true));
    }

    // 拷贝tbody
    const tBody = newTable.appendChild(this.tableElement.tBodies[0].cloneNode());

    // 拷贝thead
    if (this.tHead) {
      // 注意：这里特意把 thead中的行复制到tbody中，是因为 windows 360浏览器的chrome模式打印，会把thead错位打印两次
      cloneChildrenTo(this.tHead, tBody);
      // newTable.appendChild(this.tHead.cloneNode(true));
    }
    // 逐个添加行
    for (let i = this.validRowIndex; i < nextPageRowIndex; i += 1) {
      const newRow = this.rows[i].cloneNode(true);

      // 如果存在匹配的 合并单元格信息，那就增加合并信息
      // TODO: 暂时只在第一行做此判断，以及存在的话设置成通栏。以后需要改成完整的方式
      if (i === this.validRowIndex) {
        const arr = this.rowSpans[i].length ? this.rowSpans[i] : [...this.rowSpans.slice(0, this.validRowIndex)].reverse().find(el => el.length);
        arr && arr.length && arr.forEach((spans, colIndex) => {
          spans.some(({ start, end, element }) => {
            // i是循环到新分页的tr索引，如果i===start意味着某个具有rowSpan的tr正好是从新页开始渲染的，此时并不需要该包做插入sowSpan td的工作
            if (i > start && i <= end) {
              // 这个合并信息对于这个单元格是生效的
              const newCell = newRow.insertCell(colIndex);
              newCell.className = element.className;
              newCell.rowSpan = end - i + 1;
              cloneChildrenTo(element, newCell);
            }
            return null;
          });
        });
      }
      tBody.appendChild(newRow);
    }
    // TODO: 这里还没有考虑 合并单元格 的情况

    // 把当前表格用用原来的一堆div包裹下，那就继续包裹之
    if (this.wrappersNode) {
      const newTableWrapper = this.wrappersNode.cloneNode(true);
      let loopEl = newTableWrapper;
      while (loopEl.firstElementChild) {
        loopEl = loopEl.firstElementChild;
      }
      loopEl.appendChild(newTable);

      return newTableWrapper;
    }
    return newTable;
  }

  // 尝试把当前对象添加到容器中
  put2container(container, { validHeight, nextItem }) {
    // 表格标题的高度大于有效高度，放不下了
    if (this.tHeadHeight > validHeight) {
      return {
        fillMode: NOTHING_FILL,
      };
    }

    // 高度肯定是能放下表头的

    // 如果整个表格只有表头，那其就是一个不可分页的单元
    if (this.rows.length === 0) {
      const tableHeight = this.tableElement.offsetHeight;

      // 可以放得下整个表格
      if (tableHeight <= validHeight) {
        const newTable = container.appendChild(this.element.cloneNode(true));
        return {
          fillMode: FULL_FILL,
          filledHeight: tableHeight,
          nodes: [newTable],
        };
      }

      // 放不下了
      return {
        fillMode: NOTHING_FILL,
      };
    }

    // 现在肯定是有行的

    // 排除表头之后剩下的有效高度
    const validHeightWithoutTHead = validHeight - this.tHeadHeight;

    // 看看现在的高度最多能放下多少
    let heightNow = 0;
    let nextPageRowIndex = this.validRowIndex;
    for (; nextPageRowIndex < this.rows.length; nextPageRowIndex += 1) {
      heightNow += this.rowHeights[nextPageRowIndex];

      // 如果高度超了，那就不用再往后查了
      if (heightNow > validHeightWithoutTHead) {
        heightNow -= this.rowHeights[nextPageRowIndex];
        break;
      }
    }

    // 如果已经都能放下了，那还需要判断下一个元素是不是 小尾巴（PageTableTail），如果是的话还需要连带计算
    if (nextPageRowIndex >= this.rows.length) {
      if (nextItem && nextItem.constructor === PageTableTail) {
        const nextItemHeight = nextItem.getHeight();
        if (heightNow + nextItemHeight > validHeightWithoutTHead) {
          // 带上小尾巴就超了，只能再往前减一个了，把最后一行
          nextPageRowIndex -= 1;
        }
      }
    }

    // 如果放在下一页的index不超过起始index，说明这页已经放不下了
    if (nextPageRowIndex <= this.validRowIndex) {
      return {
        fillMode: NOTHING_FILL,
      };
    }

    // 说明还是能否放得下某些行，那就安放之

    let newTable = this.wrapInANewTable(nextPageRowIndex);
    this.validRowIndex = nextPageRowIndex;

    // 放置整个表格
    newTable = container.appendChild(newTable);
    if (nextPageRowIndex >= this.rows.length) {
      // 都放完了
      return {
        fillMode: FULL_FILL,
        nodes: [newTable],
      };
    }

    // 没有完全放完
    return {
      fillMode: SOME_FILL,
      nodes: [newTable],
    };
  }
}

export default PageTable;
