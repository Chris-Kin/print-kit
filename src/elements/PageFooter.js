import GroupItem from './GroupItem';


class PageFooter extends GroupItem {
  static create(element) {
    return new PageFooter(element);
  }

  constructor(element) {
    super(element);

    this.typeName = 'PageFooter';
  }
}

export default PageFooter;
