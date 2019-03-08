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
   * @param {是否按group提供分页信息（false：只用一组连贯的页码；true：每一个group都有各自的页码）} isPagedByGroup
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

