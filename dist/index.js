module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ \"./src/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_src_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/FillMode.js":
/*!*************************!*\
  !*** ./src/FillMode.js ***!
  \*************************/
/*! exports provided: FULL_FILL, SOME_FILL, NOTHING_FILL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FULL_FILL\", function() { return FULL_FILL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SOME_FILL\", function() { return SOME_FILL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NOTHING_FILL\", function() { return NOTHING_FILL; });\nconst FULL_FILL = 1; // 全部填充了\nconst SOME_FILL = 2; // 部分填充了\nconst NOTHING_FILL = 3; // 没有填充任何东西\n\n//# sourceURL=webpack:///./src/FillMode.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  // A4纸可用空间高度 1080\n  PageHeight: 1080,\n  // A4纸的宽高数据\n  height: 1080,\n  width: 751\n});\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/elements/GroupHeader.js":
/*!*************************************!*\
  !*** ./src/elements/GroupHeader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GroupItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupItem */ \"./src/elements/GroupItem.js\");\n\n\nclass GroupHeader extends _GroupItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create(element) {\n    return new GroupHeader(element);\n  }\n\n  constructor(element) {\n    super(element);\n\n    this.typeName = 'GroupHeader';\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GroupHeader);\n\n//# sourceURL=webpack:///./src/elements/GroupHeader.js?");

/***/ }),

/***/ "./src/elements/GroupItem.js":
/*!***********************************!*\
  !*** ./src/elements/GroupItem.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FillMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FillMode */ \"./src/FillMode.js\");\n\n\nclass GroupItem {\n  constructor(element) {\n    this.element = element;\n\n    this.typeName = 'GroupItem';\n  }\n\n  // 获得元素的高度\n  getHeight() {\n    return this.element.offsetHeight;\n  }\n\n  // 尝试把当前对象添加到容器中\n  put2container(container, { validHeight }) {\n    const elementHeight = this.element.offsetHeight;\n\n    // 元素高度 > 有效高度，放不下了\n    if (elementHeight > validHeight) {\n      return {\n        fillMode: _FillMode__WEBPACK_IMPORTED_MODULE_0__[\"NOTHING_FILL\"],\n        filledHeight: 0\n      };\n    }\n\n    // 可以放下，那就放置吧\n    const nodes = [container.appendChild(this.element.cloneNode(true))];\n\n    return {\n      fillMode: _FillMode__WEBPACK_IMPORTED_MODULE_0__[\"FULL_FILL\"],\n      filledHeight: elementHeight,\n      nodes\n    };\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GroupItem);\n\n//# sourceURL=webpack:///./src/elements/GroupItem.js?");

/***/ }),

/***/ "./src/elements/MiniBlock.js":
/*!***********************************!*\
  !*** ./src/elements/MiniBlock.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FillMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FillMode */ \"./src/FillMode.js\");\n/* harmony import */ var _GroupItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupItem */ \"./src/elements/GroupItem.js\");\n/* harmony import */ var _MiniBlockTail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MiniBlockTail */ \"./src/elements/MiniBlockTail.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\n\n\n\n\n\nclass MiniBlock extends _GroupItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  static create(element) {\n    return new MiniBlock(element);\n  }\n  constructor(element) {\n    super(element);\n\n    this.typeName = 'MiniBlock';\n  }\n\n  // 尝试把当前对象添加到容器中\n  put2container(container, { validHeight, nextItem }) {\n    const elementHeight = this.element.offsetHeight;\n\n    // 元素高度 > 有效高度，放不下了\n    if (elementHeight > validHeight) {\n      return {\n        fillMode: _FillMode__WEBPACK_IMPORTED_MODULE_0__[\"NOTHING_FILL\"],\n        filledHeight: 0\n      };\n    }\n\n    if (nextItem && nextItem.constructor === _MiniBlockTail__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n      const nextItemHeight = nextItem.getHeight();\n      if (elementHeight + nextItemHeight > validHeight) {\n        if (elementHeight + nextItemHeight <= _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].PageHeight) {\n          return {\n            fillMode: _FillMode__WEBPACK_IMPORTED_MODULE_0__[\"NOTHING_FILL\"]\n          };\n        }\n      }\n    }\n\n    // 可以放下，那就放置吧\n    const nodes = [container.appendChild(this.element.cloneNode(true))];\n\n    return {\n      fillMode: _FillMode__WEBPACK_IMPORTED_MODULE_0__[\"FULL_FILL\"],\n      filledHeight: elementHeight,\n      nodes\n    };\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MiniBlock);\n\n//# sourceURL=webpack:///./src/elements/MiniBlock.js?");

/***/ }),

/***/ "./src/elements/MiniBlockTail.js":
/*!***************************************!*\
  !*** ./src/elements/MiniBlockTail.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GroupItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupItem */ \"./src/elements/GroupItem.js\");\n\n\nclass MiniBlockTail extends _GroupItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create(element) {\n    return new MiniBlockTail(element);\n  }\n\n  constructor(element) {\n    super(element);\n\n    this.typeName = 'MiniBlockTail';\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MiniBlockTail);\n\n//# sourceURL=webpack:///./src/elements/MiniBlockTail.js?");

/***/ }),

/***/ "./src/elements/PageFooter.js":
/*!************************************!*\
  !*** ./src/elements/PageFooter.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GroupItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupItem */ \"./src/elements/GroupItem.js\");\n\n\nclass PageFooter extends _GroupItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create(element) {\n    return new PageFooter(element);\n  }\n\n  constructor(element) {\n    super(element);\n\n    this.typeName = 'PageFooter';\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageFooter);\n\n//# sourceURL=webpack:///./src/elements/PageFooter.js?");

/***/ }),

/***/ "./src/elements/PageHeader.js":
/*!************************************!*\
  !*** ./src/elements/PageHeader.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GroupItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupItem */ \"./src/elements/GroupItem.js\");\n\n\nclass PageHeader extends _GroupItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create(element) {\n    return new PageHeader(element);\n  }\n\n  constructor(element) {\n    super(element);\n\n    this.typeName = 'PageHeader';\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageHeader);\n\n//# sourceURL=webpack:///./src/elements/PageHeader.js?");

/***/ }),

/***/ "./src/elements/PageTable.js":
/*!***********************************!*\
  !*** ./src/elements/PageTable.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GroupItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupItem */ \"./src/elements/GroupItem.js\");\n/* harmony import */ var _PageTableTail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageTableTail */ \"./src/elements/PageTableTail.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n/* harmony import */ var _FillMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FillMode */ \"./src/FillMode.js\");\n\n\n\n\n\nclass PageTable extends _GroupItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create(element) {\n    return new PageTable(element);\n  }\n\n  constructor(element) {\n    super(element);\n\n    this.typeName = 'PageTable';\n\n    this.parse();\n  }\n\n  // 解析 table\n  parse() {\n    // 解析wrapper\n    let wrappersNode = null;\n    let nowElement = null;\n    let loopEl = this.element;\n    while (loopEl) {\n      if (loopEl.nodeName && loopEl.nodeName.toLowerCase() === 'table') {\n        this.tableElement = loopEl;\n        break;\n      }\n\n      const newLoopEl = loopEl.cloneNode();\n      if (wrappersNode === null) {\n        wrappersNode = newLoopEl;\n        nowElement = wrappersNode;\n      } else {\n        nowElement = nowElement.appendChild(newLoopEl);\n      }\n\n      loopEl = loopEl.firstElementChild;\n    }\n    this.wrappersNode = wrappersNode;\n\n    // 获得表格所有的子元素\n\n    // 解析 colgroup\n    this.colgroup = null;\n    const colgroup = Object(_util__WEBPACK_IMPORTED_MODULE_2__[\"getEl\"])('colgroup', this.tableElement);\n    if (colgroup) this.colgroup = colgroup;\n\n    // 解析 thead\n    this.tHead = null;\n    this.tHeadHeight = 0;\n    if (this.tableElement.tHead) {\n      this.tHead = this.tableElement.tHead;\n      this.tHeadHeight = this.tHead.offsetHeight;\n    }\n\n    // 解析 tbody\n    this.validRowIndex = 0; // 还没有被分配的行编号\n    this.rows = [];\n    this.rowHeights = [];\n    this.rowSpans = [\n      // [\n      //   {\n      //     start: 0,\n      //     end: 100,\n      //     element: null,\n      //   },\n      // ]\n    ];\n    // TODO: 这里写死了只获取第一个 tBody，可以改进\n    const rows = this.tableElement.tBodies[0].rows;\n    for (let i = 0, il = rows.length; i < il; i += 1) {\n      const row = rows[i];\n      // 识别 rowSpan信息\n      // TODO: 暂时只支持识别第一行，以后需要支持更多\n      this.rowSpans[i] = [];\n      const cells = row.cells;\n      for (let j = 0, jl = cells.length; j < jl; j += 1) {\n        const cell = cells[j];\n        const rowSpan = cell.rowSpan;\n        if (rowSpan && rowSpan > 1) {\n          if (!this.rowSpans[i][j]) {\n            this.rowSpans[i][j] = [];\n          }\n          this.rowSpans[i][j].push({\n            start: i,\n            end: i + rowSpan - 1,\n            element: cell\n          });\n        }\n      }\n      this.rows.push(row);\n      this.rowHeights.push(row.offsetHeight);\n    }\n  }\n\n  // 创建一个新table\n  wrapInANewTable(nextPageRowIndex) {\n    // 先创建一个新表格\n    const newTable = this.tableElement.cloneNode();\n\n    // 如果存在列配置，那就添加之\n    if (this.colgroup) {\n      newTable.appendChild(this.colgroup.cloneNode(true));\n    }\n\n    // 拷贝tbody\n    const tBody = newTable.appendChild(this.tableElement.tBodies[0].cloneNode());\n\n    // 拷贝thead\n    if (this.tHead) {\n      // 注意：这里特意把 thead中的行复制到tbody中，是因为 windows 360浏览器的chrome模式打印，会把thead错位打印两次\n      Object(_util__WEBPACK_IMPORTED_MODULE_2__[\"cloneChildrenTo\"])(this.tHead, tBody);\n      // newTable.appendChild(this.tHead.cloneNode(true));\n    }\n    // 逐个添加行\n    for (let i = this.validRowIndex; i < nextPageRowIndex; i += 1) {\n      const newRow = this.rows[i].cloneNode(true);\n\n      // 如果存在匹配的 合并单元格信息，那就增加合并信息\n      // TODO: 暂时只在第一行做此判断，以及存在的话设置成通栏。以后需要改成完整的方式\n      if (i === this.validRowIndex) {\n        const arr = this.rowSpans[i].length ? this.rowSpans[i] : [...this.rowSpans.slice(0, this.validRowIndex)].reverse().find(el => el.length);\n        arr && arr.length && arr.forEach((spans, colIndex) => {\n          spans.some(({ start, end, element }) => {\n            // i是循环到新分页的tr索引，如果i===start意味着某个具有rowSpan的tr正好是从新页开始渲染的，此时并不需要该包做插入sowSpan td的工作\n            if (i > start && i <= end) {\n              // 这个合并信息对于这个单元格是生效的\n              const newCell = newRow.insertCell(colIndex);\n              newCell.className = element.className;\n              newCell.rowSpan = end - i + 1;\n              Object(_util__WEBPACK_IMPORTED_MODULE_2__[\"cloneChildrenTo\"])(element, newCell);\n            }\n            return null;\n          });\n        });\n      }\n      tBody.appendChild(newRow);\n    }\n    // TODO: 这里还没有考虑 合并单元格 的情况\n\n    // 把当前表格用用原来的一堆div包裹下，那就继续包裹之\n    if (this.wrappersNode) {\n      const newTableWrapper = this.wrappersNode.cloneNode(true);\n      let loopEl = newTableWrapper;\n      while (loopEl.firstElementChild) {\n        loopEl = loopEl.firstElementChild;\n      }\n      loopEl.appendChild(newTable);\n\n      return newTableWrapper;\n    }\n    return newTable;\n  }\n\n  // 尝试把当前对象添加到容器中\n  put2container(container, { validHeight, nextItem }) {\n    // 表格标题的高度大于有效高度，放不下了\n    if (this.tHeadHeight > validHeight) {\n      return {\n        fillMode: _FillMode__WEBPACK_IMPORTED_MODULE_3__[\"NOTHING_FILL\"]\n      };\n    }\n\n    // 高度肯定是能放下表头的\n\n    // 如果整个表格只有表头，那其就是一个不可分页的单元\n    if (this.rows.length === 0) {\n      const tableHeight = this.tableElement.offsetHeight;\n\n      // 可以放得下整个表格\n      if (tableHeight <= validHeight) {\n        const newTable = container.appendChild(this.element.cloneNode(true));\n        return {\n          fillMode: _FillMode__WEBPACK_IMPORTED_MODULE_3__[\"FULL_FILL\"],\n          filledHeight: tableHeight,\n          nodes: [newTable]\n        };\n      }\n\n      // 放不下了\n      return {\n        fillMode: _FillMode__WEBPACK_IMPORTED_MODULE_3__[\"NOTHING_FILL\"]\n      };\n    }\n\n    // 现在肯定是有行的\n\n    // 排除表头之后剩下的有效高度\n    const validHeightWithoutTHead = validHeight - this.tHeadHeight;\n\n    // 看看现在的高度最多能放下多少\n    let heightNow = 0;\n    let nextPageRowIndex = this.validRowIndex;\n    for (; nextPageRowIndex < this.rows.length; nextPageRowIndex += 1) {\n      heightNow += this.rowHeights[nextPageRowIndex];\n\n      // 如果高度超了，那就不用再往后查了\n      if (heightNow > validHeightWithoutTHead) {\n        heightNow -= this.rowHeights[nextPageRowIndex];\n        break;\n      }\n    }\n\n    // 如果已经都能放下了，那还需要判断下一个元素是不是 小尾巴（PageTableTail），如果是的话还需要连带计算\n    if (nextPageRowIndex >= this.rows.length) {\n      if (nextItem && nextItem.constructor === _PageTableTail__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n        const nextItemHeight = nextItem.getHeight();\n        if (heightNow + nextItemHeight > validHeightWithoutTHead) {\n          // 带上小尾巴就超了，只能再往前减一个了，把最后一行\n          nextPageRowIndex -= 1;\n        }\n      }\n    }\n\n    // 如果放在下一页的index不超过起始index，说明这页已经放不下了\n    if (nextPageRowIndex <= this.validRowIndex) {\n      return {\n        fillMode: _FillMode__WEBPACK_IMPORTED_MODULE_3__[\"NOTHING_FILL\"]\n      };\n    }\n\n    // 说明还是能否放得下某些行，那就安放之\n\n    let newTable = this.wrapInANewTable(nextPageRowIndex);\n    this.validRowIndex = nextPageRowIndex;\n\n    // 放置整个表格\n    newTable = container.appendChild(newTable);\n    if (nextPageRowIndex >= this.rows.length) {\n      // 都放完了\n      return {\n        fillMode: _FillMode__WEBPACK_IMPORTED_MODULE_3__[\"FULL_FILL\"],\n        nodes: [newTable]\n      };\n    }\n\n    // 没有完全放完\n    return {\n      fillMode: _FillMode__WEBPACK_IMPORTED_MODULE_3__[\"SOME_FILL\"],\n      nodes: [newTable]\n    };\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageTable);\n\n//# sourceURL=webpack:///./src/elements/PageTable.js?");

/***/ }),

/***/ "./src/elements/PageTableTail.js":
/*!***************************************!*\
  !*** ./src/elements/PageTableTail.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GroupItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupItem */ \"./src/elements/GroupItem.js\");\n\n\nclass PageTableTail extends _GroupItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create(element) {\n    return new PageTableTail(element);\n  }\n\n  constructor(element) {\n    super(element);\n\n    this.typeName = 'PageTableTail';\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageTableTail);\n\n//# sourceURL=webpack:///./src/elements/PageTableTail.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _FillMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FillMode */ \"./src/FillMode.js\");\n/* harmony import */ var _elements_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/PageHeader */ \"./src/elements/PageHeader.js\");\n/* harmony import */ var _elements_PageFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/PageFooter */ \"./src/elements/PageFooter.js\");\n/* harmony import */ var _elements_MiniBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements/MiniBlock */ \"./src/elements/MiniBlock.js\");\n/* harmony import */ var _elements_GroupHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/GroupHeader */ \"./src/elements/GroupHeader.js\");\n/* harmony import */ var _elements_PageTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/PageTable */ \"./src/elements/PageTable.js\");\n/* harmony import */ var _elements_PageTableTail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elements/PageTableTail */ \"./src/elements/PageTableTail.js\");\n/* harmony import */ var _elements_MiniBlockTail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./elements/MiniBlockTail */ \"./src/elements/MiniBlockTail.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n// 每一个group的页数信息\nlet everyGroupsPage = [];\n\n// 元素属性到对应处理类的对应关系\nconst attr2class = {\n  'page-header': _elements_PageHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  'page-footer': _elements_PageFooter__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  'mini-block': _elements_MiniBlock__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  'group-header': _elements_GroupHeader__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  'page-table': _elements_PageTable__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  'page-table-tail': _elements_PageTableTail__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  'mini-block-tail': _elements_MiniBlockTail__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n};\n\n// 构建一个默认的 pagedItems对象\nfunction buildDefaultPagedItems() {\n  return {\n    // 当前group信息\n    Group: {\n      howManyPage: 1,\n      layoutedContainer: null // 布局结果要输出到的容器\n    },\n    // 页头\n    PageHeader: {\n      height: 0,\n      list: []\n    },\n    // 页尾\n    PageFooter: {\n      height: 0,\n      list: []\n    },\n    // 内容部分，包含 组头、组尾、核心内容等等\n    Content: {\n      list: []\n    }\n  };\n}\n// 往容器中增加一个分页符\nfunction addPageBreak(container) {\n  const pageBreakEl = document.createElement('div');\n  pageBreakEl.style.pageBreakAfter = 'always';\n  container.appendChild(pageBreakEl);\n\n  const pageBreakEl2 = document.createElement('div');\n  pageBreakEl2.style.pageBreakAfter = 'always';\n  container.appendChild(pageBreakEl2);\n}\n\n// 往容器中增加headers\nfunction addPageHeaders(container, pagedItems) {\n  pagedItems.PageHeader.list.map(listItem => listItem.element.cloneNode(true)).forEach(pageHeader => {\n    container.appendChild(pageHeader);\n  });\n}\n\n// 往容器中增加footers\nfunction addPageFooters(container, pagedItems, validHeight) {\n  pagedItems.PageFooter.list.map(listItem => listItem.element.cloneNode(true)).forEach(pageHeader => {\n    pageHeader.style.paddingTop = `${validHeight}px`;\n    container.appendChild(pageHeader);\n  });\n}\n\n// 把 pagedItems 数据结构转化为 pages\nfunction pagedItems2pages(pagedItems, isLastGroup) {\n  // content区域可利用高度 = A4纸总高度 - pagedItems的header高度 - pagedItems的footer高度\n  const validPageHeight = _config__WEBPACK_IMPORTED_MODULE_9__[\"default\"].PageHeight - pagedItems.PageHeader.height - pagedItems.PageFooter.height;\n  const { layoutedContainer } = pagedItems.Group;\n\n  const pageContainerDom = document.createElement('div');\n  pageContainerDom.setAttribute('role', 'container');\n  layoutedContainer.appendChild(pageContainerDom);\n  let validHeight = validPageHeight;\n  const { list } = pagedItems.Content;\n\n  let isFrom0 = false;\n  for (let i = 0; i < list.length; i += 1) {\n    // 第一页现增加页头\n    if (i === 0 && !isFrom0) {\n      addPageHeaders(layoutedContainer, pagedItems);\n    }\n\n    // 尝试往节点中填充\n    const item = list[i];\n    const nextItem = i < list.length - 1 ? list[i + 1] : null;\n    // 调用各个角色的put2container方法塞入dom\n    const result = item.put2container(layoutedContainer, {\n      validHeight,\n      nextItem\n    });\n\n    // 没有占用高度，而且有添加的节点，那就需要计算高度\n    let { filledHeight } = result;\n    if (typeof filledHeight !== 'number') {\n      if (Array.isArray(result.nodes) && result.nodes.length > 0) {\n        filledHeight = result.nodes.reduce((height, node) => {\n          return height + node.offsetHeight;\n        }, 0);\n      } else {\n        filledHeight = 0;\n      }\n    }\n\n    validHeight -= filledHeight;\n\n    // 还有内容没放，或者空间不足，那就需要开个新页面放\n    const { fillMode } = result;\n    if (fillMode === _FillMode__WEBPACK_IMPORTED_MODULE_1__[\"SOME_FILL\"] || fillMode === _FillMode__WEBPACK_IMPORTED_MODULE_1__[\"NOTHING_FILL\"] || validHeight <= 0 && i !== list.length - 1 // 没空间，而且不是最后一个\n    ) {\n        addPageFooters(layoutedContainer, pagedItems, validHeight);\n        pagedItems.Group.howManyPage++;\n\n        // 添加新页\n        addPageBreak(layoutedContainer);\n        const pageContainerDom = document.createElement('div');\n        pageContainerDom.setAttribute('role', 'container');\n        layoutedContainer.appendChild(pageContainerDom);\n        // 新页面\n        addPageHeaders(layoutedContainer, pagedItems);\n\n        // 重置部分数据\n        validHeight = validPageHeight;\n        if (fillMode !== _FillMode__WEBPACK_IMPORTED_MODULE_1__[\"FULL_FILL\"]) {\n          i -= 1;\n          // 解决问题：如果group的第一页不为FULL_FILL，那么会导致i仍然为0，导致99行代码重复执行\n          if (i === -1) {\n            isFrom0 = true;\n          }\n        };\n      }\n  }\n  addPageFooters(layoutedContainer, pagedItems, validHeight);\n  everyGroupsPage.push(pagedItems.Group.howManyPage);\n  // 如果不是最后一组group，则需要在该group后添加分页符\n  if (!isLastGroup) {\n    addPageBreak(layoutedContainer);\n  }\n}\n\n// 布局某个 group\n/**\n *\n * @param {要布局的group元素} groupEl\n * @param {布局后放置的目标位置} layoutedContainer\n * @param {是否是最后一个group} isLastGroup\n */\nfunction layoutGroup(groupEl, layoutedContainer, isLastGroup) {\n  // 生成group对象pagedItems，该对象包含了group的构成要素，之后的处理都是往该对象中塞数据\n  const pagedItems = buildDefaultPagedItems();\n  pagedItems.Group.layoutedContainer = layoutedContainer;\n  // 获得group下的所有角色，一一处理（将各个角色放在pagedItems中，供pagedItems2pages使用）\n  Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"getEls\"])('[data-paged]', groupEl).forEach(itemEl => {\n    // 当前角色具体是什么 [PageHeader, PageFooter, MiniBlock, GroupHeader, PageTable, PageTableTail, MiniBlockTail]其一\n    const Class = attr2class[itemEl.getAttribute('data-paged')];\n    const instance = Class.create(itemEl);\n    const typeName = instance.typeName;\n    // 如果Class类型属于pagedItems里预置类型，则往里塞，否则把这个陌生角色放在Content中。\n    if (pagedItems[typeName]) {\n      // 各种头或尾节点\n      const pagedItem = pagedItems[typeName];\n      pagedItem.height += instance.getHeight();\n      pagedItem.list.push(instance);\n    } else {\n      // 内容节点\n      pagedItems.Content.list.push(instance);\n    }\n  });\n  pagedItems2pages(pagedItems, isLastGroup);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  // 循环布局多个 Group\n  /**\n   * @param {*} groupContainer\n   * @param {*} layoutedContainer\n   * @param {*} callback\n   * @param {横向还是纵向布局} mode 'horizontal'/'vertical'\n   */\n  layout(groupContainer, layoutedContainer, callback, mode = 'vertical') {\n    // 根据打印方向设置可打印高度\n    if (mode === 'horizontal') {\n      // 横向打印时的高度为A4纸的宽度\n      _config__WEBPACK_IMPORTED_MODULE_9__[\"default\"].PageHeight = _config__WEBPACK_IMPORTED_MODULE_9__[\"default\"].width;\n    } else {\n      // 纵向打印时的高度为A4纸的高度\n      _config__WEBPACK_IMPORTED_MODULE_9__[\"default\"].PageHeight = _config__WEBPACK_IMPORTED_MODULE_9__[\"default\"].height;\n    }\n    groupContainer = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"getEl\"])(groupContainer);\n    layoutedContainer = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"getEl\"])(layoutedContainer);\n    // 获取目标区域里的所有group元素\n    const groupEls = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"getEls\"])('[data-paged=\"group\"]', groupContainer);\n\n    const lastGroupIndex = groupEls.length - 1;\n    groupEls.forEach((groupEl, i) => {\n      layoutGroup(groupEl, layoutedContainer, i === lastGroupIndex);\n    });\n\n    // 添加页码信息\n    Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"addPageInfo\"])(layoutedContainer, everyGroupsPage);\n    // 清空页码信息\n    everyGroupsPage = [];\n\n    setTimeout(() => typeof callback === 'function' && callback(), 0);\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: getEl, getEls, cloneChildrenTo, addPageInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEl\", function() { return getEl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEls\", function() { return getEls; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cloneChildrenTo\", function() { return cloneChildrenTo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPageInfo\", function() { return addPageInfo; });\nconst getEl = (elSelector, parentNode) => {\n  // 这就是元素\n  if (typeof elSelector === 'object' && elSelector.nodeType) return elSelector;\n\n  // 通过选择选择器查找\n  if (!parentNode) parentNode = document;\n  return parentNode.querySelector(elSelector);\n};\n\nconst getEls = (elSelector, parentNode) => {\n  // 这就是元素\n  if (typeof elSelector === 'object' && elSelector.nodeType) return elSelector;\n\n  // 通过选择选择器查找\n  if (!parentNode) parentNode = document;\n  return parentNode.querySelectorAll(elSelector);\n};\n\n// 把 fromParent 上的子节点都克隆到 toParent 中\nconst cloneChildrenTo = (fromParent, toParent) => {\n  const { childNodes } = fromParent;\n  for (let i = 0, il = childNodes.length; i < il; i += 1) {\n    const node = childNodes[i];\n    if (node.nodeType === 1 || node.nodeType === 3) {\n      toParent.appendChild(node.cloneNode(true));\n    }\n  }\n};\n\n/**\n * 添加分页信息\n * @param {已布局后的大dom} layoutedContainer\n * @param {每个group的页数信息} everyGroupsPage\n */\nconst addPageInfo = (layoutedContainer, everyGroupsPage) => {\n  // 打印的总页数\n  let totalPage = 0;\n  // 每一个group的页数信息\n  // const everyGroupsPage = everyGroupsPage;\n  // group累计求和信息\n  const reduceGroupPageSum = [];\n\n  // 添加分页页码信息\n  totalPage = everyGroupsPage.reduce((pre, cur) => {\n    reduceGroupPageSum.push(pre);\n    return pre + cur;\n  });\n  reduceGroupPageSum.push(totalPage);\n  const pageInfoDomArr = [...getEls('[data-page-info]', layoutedContainer)];\n  // 依次处理每页中的页码节点\n  pageInfoDomArr.forEach((pageInfoDom, i) => {\n    const pageCurDom = getEl('[data-page-cur]', pageInfoDom);\n    const pageTotalDom = getEl('[data-page-total]', pageInfoDom);\n    const pageGroupCurDom = getEl('[data-page-group-cur]', pageInfoDom);\n    const pageGroupTotalDom = getEl('[data-page-group-total]', pageInfoDom);\n    const index = i + 1;\n    let curIndex;\n    let curTotal;\n    // 获取子页码信息\n    for (let j = 0; j < reduceGroupPageSum.length; j++) {\n      if (reduceGroupPageSum[j] >= index && index > (reduceGroupPageSum[j - 1] || 0)) {\n        curIndex = index - (reduceGroupPageSum[j - 1] || 0);\n        curTotal = reduceGroupPageSum[j] - (reduceGroupPageSum[j - 1] || 0);\n        break;\n      }\n    }\n    // group当前页\n    if (pageGroupCurDom) {\n      pageGroupCurDom.innerText = curIndex;\n    }\n    // group总页数\n    if (pageGroupTotalDom) {\n      pageGroupTotalDom.innerText = curTotal;\n    }\n    // 当前页\n    if (pageCurDom) {\n      pageCurDom.innerText = i + 1;\n    }\n    // 总页数\n    if (pageTotalDom) {\n      pageTotalDom.innerText = totalPage;\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });