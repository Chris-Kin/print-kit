import GroupItem from './GroupItem';


class GroupFooter extends GroupItem {
  static create(element) {
    return new GroupFooter(element);
  }

  constructor(element) {
    super(element);

    this.typeName = 'GroupFooter';
  }
}

export default GroupFooter;
