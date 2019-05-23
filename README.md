# print-kit
web打印工具，为页面添加页眉页脚页码，正确将页面分页。
思路是将某dom内的所有节点重新按照符合A4纸大小的页面排版。

## USAGE
1. 引入package
```js
import PrintLayouter from 'print-kit';
```
2. 为groupContainer内的dom指定角色（这将决定layout重排时如何对待dom）

3. 执行排版函数：
```js
  PrintLayouter.layout(
    'div[data-paged="group-container"]',
    '#layoutedContainer',
    true,
    () => {
      window.print();
    },
  );
```
layout函数参数解释
```
  /**
   *
   * @param {指定print-kit要重排的dom容器data-paged="group-container"} groupContainer
   * @param {指定重排后的dom放置在哪里} layoutedContainer
   * @param {重排后的回调} callback
   * @param {打印方向} mode 横向-horizontal 纵向-vertical
   */
  layout(groupContainer, layoutedContainer, isPagedByGroup, callback) {
  	// ...
  }
```

## dom角色解释
- group
  组，一次打印可以只有一组页面，也可以有多组页面。每组页面具有独立的页眉页脚分页等部件。
- page-header
	页眉，需放在group中指定
- page-footer
	页脚，需放在group中指定
- mini-block
	不会被分页拆分的最小单位块，当前页面空间不容纳mini-block时，会整体放在下一页
- mini-block-tail
	最小单位块的尾巴，总会与最小单位块同页展示
- group-header
	组信息块的头部，需放在group中指定。不同于page-header，group-header是组的标题
- page-table
	页面中的表格，会对表格元素做特殊处理，如跨页的表格拆分等问题
- page-table-tail
	表格的尾巴，总会与表格同页展示，若page-table的tr正好占满了某一页导致page-table-tail必须分页时，此时page-table-tail会将table的最后几行tr放在第二页显示


## 分页页码添加方式
在打印页面时，希望能够标注出页码信息，结合实际业务场景，页码的标注方式有两类，一类是按照总体纸张数量标注页码，另一类是按照group来分开标注页码，（或者两者同时都需标注）

在group节点内，书写具有规定属性的节点即可：
```html
  <div
    data-page-info
    style={{
      textAlign: 'right',
      position: 'relative',
      bottom: 0,
      right: 0,
    }}
  >
    当前组页码：
    <span data-page-group-cur />
    /
    <span data-page-group-total />
    <span className="mr20" />
    总页码：
    <span data-page-cur />
    /
    <span data-page-total />
  </div>
```
打印工具会自动将页码信息显示在对应的位置。

## 由于内部排版计算高度的问题，需设置指定样式
@page {
  size: auto;   /* auto is the initial value */
  margin: 5mm;  /* this affects the margin in the printer settings */
}
打印区域的宽度设置为：
width: 200mm;