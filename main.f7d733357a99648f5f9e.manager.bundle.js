(globalThis.webpackChunk_ringcentral_juno_monorepo=globalThis.webpackChunk_ringcentral_juno_monorepo||[]).push([[179],{4138:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var esm=__webpack_require__(1173),dist_esm=__webpack_require__(50114),create=__webpack_require__(64363),brandTitle='\n<div style="display: flex; align-items: center;">\n  <img src="./assets/logo.png" style="width: 50px; margin-right: 1em;">\n  <br />\n  <div>\n    <h1>Juno</h1>\n  </div>\n</div>\n',customThemes={light:(0,create.U)({base:"light",brandTitle}),dark:(0,create.U)({base:"dark",brandTitle}),highContrast:(0,create.U)({base:"dark",brandTitle})},getTheme=function(type){return customThemes[type]};function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var _getThemeValue=function getThemeValue(){try{var theme=getTheme(localStorage.getItem("storybook-themeId"))||getTheme(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");if(theme)return[theme.base,theme]}catch(error){}return["light",{}]}(),theme=function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(_getThemeValue,2)[1];esm.KP.setConfig({theme}),esm.KP.register("theme-switcher",(function(api){esm.KP.getChannel().on(dist_esm.UPDATE_GLOBALS,(function(args){var type=args.globals.themeId,themeVars=getTheme(type);!function setThemeValue(type){localStorage.setItem("storybook-themeId",type)}(themeVars.base),api.setOptions({theme:themeVars})}))}))},24654:()=>{}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[777],(()=>(__webpack_exec__(37707),__webpack_exec__(4138),__webpack_exec__(19024),__webpack_exec__(52852),__webpack_exec__(11307),__webpack_exec__(57821),__webpack_exec__(58300),__webpack_exec__(13072),__webpack_exec__(31675),__webpack_exec__(59567),__webpack_exec__(22755),__webpack_exec__(98963),__webpack_exec__(9544),__webpack_exec__(9993))));__webpack_require__.O()}]);