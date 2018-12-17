import GroupItem from './GroupItem';


class PageHeader extends GroupItem {
  static create(element) {
    return new PageHeader(element);
  }

  constructor(element) {
    super(element);

    this.typeName = 'PageHeader';
  }
}

export default PageHeader;
