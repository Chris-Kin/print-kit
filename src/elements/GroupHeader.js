import GroupItem from './GroupItem';


class GroupHeader extends GroupItem {
  static create(element) {
    return new GroupHeader(element);
  }

  constructor(element) {
    super(element);

    this.typeName = 'GroupHeader';
  }
}

export default GroupHeader;
