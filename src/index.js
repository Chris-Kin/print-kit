import { getEl, getEls, addPageInfo } from './util';
import { FULL_FILL, SOME_FILL, NOTHING_FILL } from './FillMode';

import PageHeader from './elements/PageHeader';
import PageFooter from './elements/PageFooter';
import MiniBlock from './elements/MiniBlock';
import GroupHeader from './elements/GroupHeader';
import PageTable from './elements/PageTable';
import PageTableTail from './elements/PageTableTail';
import MiniBlockTail from './elements/MiniBlockTail';

import config from './config';
const PageHeight = config.PageHeight;

// 每一个group的页数信息
const everyGroupsPage = [];

// 元素属性到对应处理类的对应关系
const attr2class = {
  'page-header': PageHeader,
  'page-footer': PageFooter,
  'mini-block': MiniBlock,
  'group-header': GroupHeader,
  'page-table': PageTable,
  'page-table-tail': PageTableTail,
  'mini-block-tail': MiniBlockTail,
};

// 构建一个默认的 pagedItems对象
function buildDefaultPagedItems() {
  return {
    // 当前group信息
    Group: {
      howManyPage: 1,
      layoutedContainer: null, // 布局结果要输出到的容器
    },
    // 页头
    PageHeader: {
      height: 0,
      list: [],
    },
    // 页尾
    PageFooter: {
      height: 0,
      list: [],
    },
    // 内容部分，包含 组头、组尾、核心内容等等
    Content: {
      list: [],
    },
  };
}

// 往容器中增加一个分页符
function addPageBreak(container) {
  const pageBreakEl = document.createElement('div');
  pageBreakEl.style.pageBreakAfter = 'always';
  container.appendChild(pageBreakEl);

  const pageBreakEl2 = document.createElement('div');
  pageBreakEl2.style.pageBreakAfter = 'always';
  container.appendChild(pageBreakEl2);
}

// 往容器中增加headers
function addPageHeaders(container, pagedItems) {
  pagedItems.PageHeader.list.map(
    listItem => listItem.element.cloneNode(true)
  ).forEach((pageHeader) => {
    container.appendChild(pageHeader);
  });
}

// 往容器中增加footers
function addPageFooters(container, pagedItems, validHeight) {
  pagedItems.PageFooter.list.map(
    listItem => listItem.element.cloneNode(true)
  ).forEach((pageHeader) => {
    pageHeader.style.paddingTop = `${validHeight}px`;
    container.appendChild(pageHeader);
  });
}

// 把 pagedItems 数据结构转化为 pages
function pagedItems2pages(pagedItems, isLastGroup) {
  // content区域可利用高度 = A4纸总高度 - pagedItems的header高度 - pagedItems的footer高度
  const validPageHeight = PageHeight - pagedItems.PageHeader.height - pagedItems.PageFooter.height;
  const { layoutedContainer } = pagedItems.Group;

  const pageContainerDom = document.createElement('div');
  pageContainerDom.setAttribute('role', 'container');
  layoutedContainer.appendChild(pageContainerDom);
  let validHeight = validPageHeight;
  const { list } = pagedItems.Content;
  for (let i = 0; i < list.length; i += 1) {
    // 第一页现增加页头
    if (i === 0) {
      addPageHeaders(layoutedContainer, pagedItems);
    }

    // 尝试往节点中填充
    const item = list[i];
    const nextItem = i < list.length - 1 ? list[i + 1] : null;
    // 调用各个角色的put2container方法塞入dom
    const result = item.put2container(layoutedContainer, {
      validHeight,
      nextItem,
    });

    // 没有占用高度，而且有添加的节点，那就需要计算高度
    let { filledHeight } = result;
    if (typeof filledHeight !== 'number') {
      if (Array.isArray(result.nodes) && result.nodes.length > 0) {
        filledHeight = result.nodes.reduce((height, node) => {
          return height + node.offsetHeight;
        }, 0);
      } else {
        filledHeight = 0;
      }
    }

    validHeight -= filledHeight;

    // 还有内容没放，或者空间不足，那就需要开个新页面放
    const { fillMode } = result;
    if (
      fillMode === SOME_FILL
      || fillMode === NOTHING_FILL
      || (validHeight <= 0 && i !== list.length - 1) // 没空间，而且不是最后一个
    ) {
      addPageFooters(layoutedContainer, pagedItems, validHeight);
      pagedItems.Group.howManyPage++;

      // 添加新页
      addPageBreak(layoutedContainer);
      const pageContainerDom = document.createElement('div');
      pageContainerDom.setAttribute('role', 'container');
      layoutedContainer.appendChild(pageContainerDom);
      // 新页面
      addPageHeaders(layoutedContainer, pagedItems);

      // 重置部分数据
      validHeight = validPageHeight;
      if (fillMode !== FULL_FILL) i -= 1;
    }
  }
  addPageFooters(layoutedContainer, pagedItems, validHeight);
  everyGroupsPage.push(pagedItems.Group.howManyPage);
  // 如果不是最后一组group，则需要在该group后添加分页符
  if (!isLastGroup) {
    addPageBreak(layoutedContainer);
  }
}

// 布局某个 group
/**
 *
 * @param {要布局的group元素} groupEl
 * @param {布局后放置的目标位置} layoutedContainer
 * @param {是否是最后一个group} isLastGroup
 */
function layoutGroup(groupEl, layoutedContainer, isLastGroup) {
  // 生成group对象pagedItems，该对象包含了group的构成要素，之后的处理都是往该对象中塞数据
  const pagedItems = buildDefaultPagedItems();
  pagedItems.Group.layoutedContainer = layoutedContainer;
  // 获得group下的所有角色，一一处理（将各个角色放在pagedItems中，供pagedItems2pages使用）
  getEls('[data-paged]', groupEl).forEach((itemEl) => {
    // 当前角色具体是什么 [PageHeader, PageFooter, MiniBlock, GroupHeader, PageTable, PageTableTail, MiniBlockTail]其一
    const Class = attr2class[itemEl.getAttribute('data-paged')];
    const instance = Class.create(itemEl);
    const typeName = instance.typeName;
    // 如果Class类型属于pagedItems里预置类型，则往里塞，否则把这个陌生角色放在Content中。
    if (pagedItems[typeName]) {
      // 各种头或尾节点
      const pagedItem = pagedItems[typeName];
      pagedItem.height += instance.getHeight();
      pagedItem.list.push(instance);
    } else {
      // 内容节点
      pagedItems.Content.list.push(instance);
    }
  });
  pagedItems2pages(pagedItems, isLastGroup);
}

export default {
  // 循环布局多个 Group
  layout(groupContainer, layoutedContainer, isPagedByGroup, callback) {
    groupContainer = getEl(groupContainer);
    layoutedContainer = getEl(layoutedContainer);
    // 获取目标区域里的所有group元素
    const groupEls = getEls('[data-paged="group"]', groupContainer);

    const lastGroupIndex = groupEls.length - 1;
    groupEls.forEach((groupEl, i) => {
      layoutGroup(groupEl, layoutedContainer, i === lastGroupIndex);
    });

    // 添加页码信息
    addPageInfo(layoutedContainer, everyGroupsPage, isPagedByGroup);
    // 隐藏掉原来的节点
    groupContainer.style.display = 'none';

    setTimeout(() => typeof callback === 'function' && callback(), 0);
  },
};
