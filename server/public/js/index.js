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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/class/lesson17.js":
/*!**********************************!*\
  !*** ./app/js/class/lesson17.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// export let A = 123;\n// export function test() {\n//     console.log('test');\n// }\n// export class Hello {\n//     test() {\n//         console.log('class')\n//     }\n// }\n\n\n\nlet A = 123;\nlet test = function () {\n    console.log('test');\n}\nclass Hello {\n    test() {\n        console.log('class')\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    A,\n    test,\n    Hello\n});\n\n\n\n//# sourceURL=webpack:///./app/js/class/lesson17.js?");

/***/ }),

/***/ "./app/js/index.js":
/*!*************************!*\
  !*** ./app/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class_lesson17_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/lesson17.js */ \"./app/js/class/lesson17.js\");\n// class Test{\n//     constructor(){\n//         this.a='hello world 1'\n//     }\n// }\n\n// let test=new Test();\n\n// document.body.innerHTML=test.a;\n\n\n\n\n// import \"./class/lesson1.js\";\n// import \"./class/lesson2.js\";\n// import \"./class/lesson3.js\";\n\n// 兼容包\n// import 'babel-polyfill';\n// import \"./class/lesson4.js\";\n// import \"./class/lesson5.js\";\n// import \"./class/lesson6.js\";\n//不需要兼容包\n// import \"./class/lesson7.js\";\n// import \"./class/lesson8.js\";\n// import \"./class/lesson9.js\";\n// import \"./class/lesson10.js\";\n// import \"./class/lesson11.js\";\n// import \"./class/lesson12.js\";\n// import \"./class/lesson13.js\";\n// import \"./class/lesson14.js\";\n// import \"./class/lesson15.js\";\n\n// 兼容包\n// import 'babel-polyfill';\n// import \"./class/lesson16.js\";\n\n//不需要兼容包\n// import { A, test, Hello } from \"./class/lesson17.js\";\n// import { A } from \"./class/lesson17.js\";\n// import * as lesson from \"./class/lesson17.js\";\n\n\nconsole.log(_class_lesson17_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n\n\n//# sourceURL=webpack:///./app/js/index.js?");

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./app/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/richard/github/es6/app/js/index.js */\"./app/js/index.js\");\n\n\n//# sourceURL=webpack:///multi_./app/js/index.js?");

/***/ })

/******/ });