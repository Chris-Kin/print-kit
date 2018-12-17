import GroupItem from './GroupItem';


class PageTableTail extends GroupItem {
  static create(element) {
    return new PageTableTail(element);
  }

  constructor(element) {
    super(element);

    this.typeName = 'PageTableTail';
  }
}

export default PageTableTail;
