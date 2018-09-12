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

/***/ "./app/js/class/lesson11.js":
/*!**********************************!*\
  !*** ./app/js/class/lesson11.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* Proxy 对象代理 */\n\n{\n    let obj = {\n        time: '2018年09月12日',\n        name: 'net',\n        _r: 123\n    };\n\n    let monitor = new Proxy(obj, {\n        //拦截对象读取属性\n        get(target, key) {\n            return target[key].replace('2018', '2019')\n        },\n        //拦截对象设置属性\n        set(target, key, value) {\n            if (key === 'name') {\n                return target[key] = value;\n            } else {\n                return target[key];\n            }\n        },\n        // 拦截key in obj\n        has(target, key) {\n            if (key == 'name') {\n                return target[key];\n            } else {\n                return false;\n            }\n        },\n        // 拦截delete\n        deleteProperty(target, key) {\n            if (key.includes('_')) {\n                delete target[key];\n                return true;\n            } else {\n                return target[key];\n            }\n        },\n        // 拦截Object.keys,getOwnPropertySymbols,getOwnPropertyNames\n        ownKeys(target) {\n            return Object.keys(target).filter(item => item != 'time');\n        }\n    });\n    console.log('get', monitor.time);\n\n    monitor.time = '2088';\n    monitor.name = 'zzzz';\n    console.log('set', monitor);\n    console.log('has', 'name' in monitor, 'time' in monitor);\n\n\n    // delete monitor.time;\n    // delete monitor._r;\n    // console.log('delete', monitor);\n\n    console.log('ownKeys', Object.keys(monitor));\n\n}\n\n/* Reflect */\n{\n    let obj = {\n        time: '2018年09月12日',\n        name: 'net',\n        _r: 123\n    };\n\n    console.log('Reflect get', Reflect.get(obj, 'time'))\n    console.log('Reflect set', Reflect.set(obj, 'time', '2018年09月12日14:11:48'), obj)\n    console.log('Reflect has', Reflect.has(obj, 'name'))\n}\n\n/* 使用场景   数据校验 */\n{\n    function validator(target, validator) {\n        return new Proxy(target, {\n            _validator: validator,\n            set(target, key, value, proxy) {\n                if (target.hasOwnProperty(key)) {\n                    let v = this._validator[key];\n\n                    if (!v || v(value)) {\n                        return Reflect.set(target, key, value, proxy)\n                    } else {\n                        throw Error(`不能设置${key}到${value}`);\n                    }\n                } else {\n                    throw Error(`key ${key} 不存在`);\n                }\n            },\n\n        });\n    }\n\n    const personValidators = {\n        name(val) {\n            return typeof val === 'string';\n        },\n        age(val) {\n            return typeof val === 'number' && val >= 18;\n        }\n    }\n\n    class Person {\n        constructor(name, age) {\n            this.name = name;\n            this.age = age;\n            this.sex = 1;\n            return validator(this, personValidators)\n        }\n    }\n\n    const person = new Person('tt', 12)\n    console.info(person);\n    person.name = 'richard';\n    person.sex = 3;\n    console.info(person);\n\n}\n\n//# sourceURL=webpack:///./app/js/class/lesson11.js?");

/***/ }),

/***/ "./app/js/index.js":
/*!*************************!*\
  !*** ./app/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class_lesson11_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/lesson11.js */ \"./app/js/class/lesson11.js\");\n/* harmony import */ var _class_lesson11_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_class_lesson11_js__WEBPACK_IMPORTED_MODULE_0__);\n// class Test{\n//     constructor(){\n//         this.a='hello world 1'\n//     }\n// }\n\n// let test=new Test();\n\n// document.body.innerHTML=test.a;\n\n\n\n\n// import \"./class/lesson1.js\";\n// import \"./class/lesson2.js\";\n// import \"./class/lesson3.js\";\n\n// 兼容包\n// import 'babel-polyfill';\n// import \"./class/lesson4.js\";\n// import \"./class/lesson5.js\";\n// import \"./class/lesson6.js\";\n//不需要兼容包\n// import \"./class/lesson7.js\";\n// import \"./class/lesson8.js\";\n// import \"./class/lesson9.js\";\n// import \"./class/lesson10.js\";\n\n\n//# sourceURL=webpack:///./app/js/index.js?");

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