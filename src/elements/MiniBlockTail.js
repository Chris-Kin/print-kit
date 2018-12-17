import GroupItem from './GroupItem';


class MiniBlockTail extends GroupItem {
  static create(element) {
    return new MiniBlockTail(element);
  }

  constructor(element) {
    super(element);

    this.typeName = 'MiniBlockTail';
  }
}

export default MiniBlockTail;
