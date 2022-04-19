/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Card)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\n\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } }\n\nvar _link = /*#__PURE__*/new WeakMap();\n\nvar _title = /*#__PURE__*/new WeakMap();\n\nvar _domNode = /*#__PURE__*/new WeakMap();\n\nvar _next = /*#__PURE__*/new WeakMap();\n\nvar Card = /*#__PURE__*/function () {\n  function Card(link, title) {\n    _classCallCheck(this, Card);\n\n    _classPrivateFieldInitSpec(this, _link, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldInitSpec(this, _title, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldInitSpec(this, _domNode, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldInitSpec(this, _next, {\n      writable: true,\n      value: void 0\n    });\n\n    _defineProperty(this, \"prev\", void 0);\n\n    _classPrivateFieldSet(this, _link, link);\n\n    _classPrivateFieldSet(this, _title, title);\n  }\n\n  _createClass(Card, [{\n    key: \"create\",\n    value: function create() {\n      var card = document.createElement('div');\n      card.classList.add('carousel-card');\n      card.classList.add('col');\n      card.style.display = 'none';\n      var img = document.createElement('img');\n      img.src = _classPrivateFieldGet(this, _link);\n      var title = document.createElement('h2');\n      title.innerText = _classPrivateFieldGet(this, _title);\n      card.appendChild(img);\n      card.appendChild(title);\n\n      _classPrivateFieldSet(this, _domNode, card);\n\n      return _classPrivateFieldGet(this, _domNode);\n    }\n  }, {\n    key: \"isVisible\",\n    value: function isVisible() {\n      return _classPrivateFieldGet(this, _domNode).style.display == 'block';\n    }\n  }, {\n    key: \"getTitle\",\n    value: function getTitle() {\n      return _classPrivateFieldGet(this, _title);\n    }\n  }, {\n    key: \"removeFromDom\",\n    value: function removeFromDom() {\n      return _classPrivateFieldGet(this, _domNode).parentNode.removeChild(_classPrivateFieldGet(this, _domNode));\n    }\n  }, {\n    key: \"visible\",\n    value: function visible() {\n      _classPrivateFieldGet(this, _domNode).style.display = 'block';\n    }\n  }, {\n    key: \"invisible\",\n    value: function invisible() {\n      _classPrivateFieldGet(this, _domNode).style.display = 'none';\n    }\n  }, {\n    key: \"getNext\",\n    value: function getNext() {\n      return _classPrivateFieldGet(this, _next);\n    }\n  }, {\n    key: \"setNext\",\n    value: function setNext(next) {\n      _classPrivateFieldSet(this, _next, next);\n\n      return _classPrivateFieldGet(this, _next);\n    }\n  }, {\n    key: \"addNext\",\n    value: function addNext(next) {\n      _classPrivateFieldSet(this, _next, next);\n    }\n  }]);\n\n  return Card;\n}();\n\n\n\n//# sourceURL=webpack://bootstrap-test/./src/card.js?");

/***/ }),

/***/ "./src/carousel.js":
/*!*************************!*\
  !*** ./src/carousel.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Carousel)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\n\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError(\"attempted to get private field on non-instance\"); } return fn; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } }\n\nvar _cards = /*#__PURE__*/new WeakMap();\n\nvar _carousel = /*#__PURE__*/new WeakMap();\n\nvar _range = /*#__PURE__*/new WeakMap();\n\nvar _getContainer = /*#__PURE__*/new WeakSet();\n\nvar Carousel = /*#__PURE__*/function () {\n  function Carousel(range, head) {\n    _classCallCheck(this, Carousel);\n\n    _classPrivateMethodInitSpec(this, _getContainer);\n\n    _classPrivateFieldInitSpec(this, _cards, {\n      writable: true,\n      value: []\n    });\n\n    _classPrivateFieldInitSpec(this, _carousel, {\n      writable: true,\n      value: null\n    });\n\n    _defineProperty(this, \"head\", null);\n\n    _classPrivateFieldInitSpec(this, _range, {\n      writable: true,\n      value: null\n    });\n\n    _classPrivateFieldSet(this, _range, range);\n\n    this.head = head;\n\n    _classPrivateMethodGet(this, _getContainer, _getContainer2).call(this);\n\n    this.events();\n  }\n\n  _createClass(Carousel, [{\n    key: \"events\",\n    value: function events() {\n      _classPrivateFieldGet(this, _carousel).addEventListener(\"click\", this.moveLeft.bind(this));\n    }\n  }, {\n    key: \"addCard\",\n    value: function addCard(card) {\n      _classPrivateFieldGet(this, _cards).push(card);\n\n      return this;\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      var lastNode = this.head;\n      var counter = 0;\n\n      while (lastNode.getNext()) {\n        var child = lastNode.create();\n\n        _classPrivateFieldGet(this, _carousel).appendChild(child);\n\n        if (counter < _classPrivateFieldGet(this, _range)) {\n          lastNode.visible();\n        }\n\n        lastNode = lastNode.getNext();\n        counter++;\n      }\n    }\n  }, {\n    key: \"getFirst\",\n    value: function getFirst() {\n      return this.head;\n    }\n  }, {\n    key: \"getLast\",\n    value: function getLast() {\n      var lastNode = this.head;\n\n      if (lastNode) {\n        while (lastNode.getNext()) {\n          lastNode = lastNode.getNext();\n          console.log(lastNode.getTitle());\n        }\n      }\n\n      return lastNode;\n    }\n  }, {\n    key: \"getLastVisible\",\n    value: function getLastVisible() {\n      var lastNode = this.head;\n\n      while (lastNode.isVisible() && lastNode.getNext()) {\n        console.log(lastNode.getTitle());\n        lastNode = lastNode.getNext();\n      }\n\n      return lastNode;\n    }\n  }, {\n    key: \"moveLeft\",\n    value: function moveLeft() {\n      var first = this.head;\n      first.invisible();\n      first.removeFromDom();\n      this.head = this.head.getNext();\n      var last = this.getLast();\n      last.addNext(first); // this.getLastVisible().visible();\n    }\n  }]);\n\n  return Carousel;\n}();\n\nfunction _getContainer2() {\n  _classPrivateFieldSet(this, _carousel, document.getElementById('carousel-row'));\n}\n\n\n\n//# sourceURL=webpack://bootstrap-test/./src/carousel.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel */ \"./src/carousel.js\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ \"./src/card.js\");\n\n\nvar head = new _card__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('https://random.imagecdn.app/100/100', 'title');\nvar carousel = new _carousel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5, head);\ncarousel.head.setNext(new _card__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('https://random.imagecdn.app/100/100', 'title1')).setNext(new _card__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('https://random.imagecdn.app/100/100', 'title2')).setNext(new _card__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('https://random.imagecdn.app/100/100', 'title3')).setNext(new _card__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('https://random.imagecdn.app/100/100', 'title4')).setNext(new _card__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('https://random.imagecdn.app/100/100', 'title5')).setNext(new _card__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('https://random.imagecdn.app/100/100', 'title6')).setNext(new _card__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('https://random.imagecdn.app/100/100', 'title7')).setNext(new _card__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('https://random.imagecdn.app/100/100', 'title8')).setNext(new _card__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('https://random.imagecdn.app/100/100', 'title9')).setNext(new _card__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('https://random.imagecdn.app/100/100', 'title10')).setNext(new _card__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('https://random.imagecdn.app/100/100', 'title11')).setNext(new _card__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('https://random.imagecdn.app/100/100', 'title12'));\ncarousel.draw();\n\n//# sourceURL=webpack://bootstrap-test/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;