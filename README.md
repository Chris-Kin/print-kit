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
   */
  layout(groupContainer, layoutedContainer, isPagedByGroup, callback) {
  	// ...
  }
```

## dom角色解释
- page-header
	页眉
- page-footer
	页脚
- mini-block
	不会被分页拆分的最小单位块
- mini-block-tail
	最小单位块的尾巴，总会与最小单位块同页展示
- group-header
	组信息块的头部
- page-table
	页面中的表格
- page-table-tail
	表格的尾巴，总会与表格同页展示


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