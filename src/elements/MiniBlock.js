import { FULL_FILL, NOTHING_FILL } from '../FillMode';
import GroupItem from './GroupItem';
import MiniBlockTail from './MiniBlockTail';

import config from '../config';

class MiniBlock extends GroupItem {
  static create(element) {
    return new MiniBlock(element);
  }
  constructor(element) {
    super(element);

    this.typeName = 'MiniBlock';
  }

  // 尝试把当前对象添加到容器中
  put2container(container, { validHeight, nextItem }) {
    const elementHeight = this.element.offsetHeight;

    // 元素高度 > 有效高度，放不下了
    if (elementHeight > validHeight) {
      return {
        fillMode: NOTHING_FILL,
        filledHeight: 0,
      };
    }

    if (nextItem && nextItem.constructor === MiniBlockTail) {
      const nextItemHeight = nextItem.getHeight();
      if (elementHeight + nextItemHeight > validHeight) {
        if (elementHeight + nextItemHeight <= config.PageHeight) {
          return {
            fillMode: NOTHING_FILL,
          };
        }
      }
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

export default MiniBlock;
