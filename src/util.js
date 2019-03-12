export const getEl = (elSelector, parentNode) => {
  // 这就是元素
  if (typeof elSelector === 'object' && elSelector.nodeType) return elSelector;

  // 通过选择选择器查找
  if (!parentNode) parentNode = document;
  return parentNode.querySelector(elSelector);
};

export const getEls = (elSelector, parentNode) => {
  // 这就是元素
  if (typeof elSelector === 'object' && elSelector.nodeType) return elSelector;

  // 通过选择选择器查找
  if (!parentNode) parentNode = document;
  return parentNode.querySelectorAll(elSelector);
};

// 把 fromParent 上的子节点都克隆到 toParent 中
export const cloneChildrenTo = (fromParent, toParent) => {
  const { childNodes } = fromParent;
  for (let i = 0, il = childNodes.length; i < il; i += 1) {
    const node = childNodes[i];
    if (node.nodeType === 1 || node.nodeType === 3) {
      toParent.appendChild(node.cloneNode(true));
    }
  }
};

/**
 * 添加分页信息
 * @param {已布局后的大dom} layoutedContainer
 * @param {每个group的页数信息} everyGroupsPage
 */
export const addPageInfo = (layoutedContainer, everyGroupsPage) => {
  // 打印的总页数
  let totalPage = 0;
  // 每一个group的页数信息
  // const everyGroupsPage = everyGroupsPage;
  // group累计求和信息
  const reduceGroupPageSum = [];

  // 添加分页页码信息
  totalPage = everyGroupsPage.reduce((pre, cur) => {
    reduceGroupPageSum.push(pre);
    return pre + cur;
  });
  reduceGroupPageSum.push(totalPage);
  const pageInfoDomArr = [...getEls('[data-page-info]', layoutedContainer)];
  // 依次处理每页中的页码节点
  pageInfoDomArr.forEach((pageInfoDom, i) => {
    const pageCurDom = getEl('[data-page-cur]', pageInfoDom);
    const pageTotalDom = getEl('[data-page-total]', pageInfoDom);
    const pageGroupCurDom = getEl('[data-page-group-cur]', pageInfoDom);
    const pageGroupTotalDom = getEl('[data-page-group-total]', pageInfoDom);
    const index = i + 1;
    let curIndex;
    let curTotal;
    // 获取子页码信息
    for (let j = 0; j < reduceGroupPageSum.length; j++) {
      if (reduceGroupPageSum[j] >= index && index > (reduceGroupPageSum[j - 1] || 0)) {
        curIndex = index - (reduceGroupPageSum[j - 1] || 0);
        curTotal = reduceGroupPageSum[j] - (reduceGroupPageSum[j - 1] || 0);
        break;
      }
    }
    // group当前页
    if (pageCurDom) {
      pageGroupCurDom.innerText = curIndex;
    }
    // group总页数
    if (pageTotalDom) {
      pageGroupTotalDom.innerText = curTotal;
    }
    // 当前页
    if (pageCurDom) {
      pageCurDom.innerText = i + 1;
    }
    // 总页数
    if (pageTotalDom) {
      pageTotalDom.innerText = totalPage;
    }
  });
}