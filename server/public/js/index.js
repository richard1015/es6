!function(e){var t={};function o(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(n,l,function(t){return e[t]}.bind(null,l));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){e.exports=o(1)},function(e,t,o){"use strict";o.r(t);o(2)},function(e,t){{let e=new Set;e.add(5),e.add(6),e.add(6),console.log("size",e.size,e)}{let e=new Set([1,2,3,4,4,4,5,5]);console.log("size",e.size,e)}{let e=new Set(["add","delete","clear","has"]);console.log("has",e.has("add")),console.log("delete",e.delete("add")),e.clear(),console.log("size",e.size,e)}{let e=new Set(["add","delete","clear","has"]);for(let[t,o]of e.entries())console.log("entries",t,o);e.forEach(e=>console.log("foreach",e))}{let e=new WeakSet;e.add({}),console.log("weakList",e)}{let e=new Map,t=["123"];e.set(t,"3333"),console.log("map",e,e.get(t))}{let e=new Map([["a",123],["b",456]]);console.log("size",e.size,e),console.log("delete",e.delete("a")),console.log("size",e.size,e),e.clear(),console.log("size",e.size,e)}{let e=new WeakMap,t={};e.set(t,123),console.log(e)}{let e=new Map,t=new Array;e.set("t",1),t.push({t:1}),console.info("map array add",e,t);let o=e.has("t"),n=t.find(e=>"t");console.info("map array find",o,n),e.set("t",2),t.forEach(e=>e.t?e.t=2:""),console.info("map array modify",e,t),e.delete("t"),t.splice(t.findIndex(e=>e.t),1),console.info("map array delete",e,t)}{let e=new Set,t=new Array,o={t:1};e.add(o),t.push({t:1}),console.info("set array add",e,t);let n=e.has(o),l=t.find(e=>"t");console.info("set array find",n,l),e.forEach(e=>e.t?e.t=2:""),t.forEach(e=>e.t?e.t=2:""),console.info("set array modify",e,t),e.forEach(t=>t.t?e.delete(t):""),t.splice(t.findIndex(e=>e.t),1),console.info("set array delete",e,t)}{let e={t:1},t=new Map,o=new Set,n={};t.set("t",1),o.add(e),n.t=1,console.info("add",t,o,n),console.info({map_exist:t.has("t"),set_exist:o.has(e),obj_exist:"t"in n}),t.set("t",2),e.t=2,n.t=2,console.info("modify",t,o,n),t.delete("t"),o.delete(e),delete n.t,console.info("delete",t,o,n)}}]);