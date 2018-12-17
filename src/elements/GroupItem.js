import { FULL_FILL, NOTHING_FILL } from '../FillMode';


class GroupItem {
  constructor(element) {
    this.element = element;

    this.typeName = 'GroupItem';
  }

  // 获得元素的高度
  getHeight() {
    return this.element.offsetHeight;
  }

  // 尝试把当前对象添加到容器中
  put2container(container, { validHeight }) {
    const elementHeight = this.element.offsetHeight;

    // 元素高度 > 有效高度，放不下了
    if (elementHeight > validHeight) {
      return {
        fillMode: NOTHING_FILL,
        filledHeight: 0,
      };
    }

    // 可以放下，那就放置吧
    const nodes = [
      container.appendChild(this.element.cloneNode(true)),
    ];

    return {
      fillMode: FULL_FILL,
      filledHeight: elementHeight,
      nodes,
    };
  }
}

export default GroupItem;
