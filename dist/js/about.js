/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/footer.js":
/*!**********************!*\
  !*** ./js/footer.js ***!
  \**********************/
/***/ (function() {

var accordionBtn = document.querySelector('.footer__global');
var accordionContent = document.querySelector('.footer__global-list');
accordionBtn.addEventListener('click', function () {
  accordionContent.classList.toggle('active');
  accordionBtn.classList.toggle('active');
});

/***/ }),

/***/ "./js/header.js":
/*!**********************!*\
  !*** ./js/header.js ***!
  \**********************/
/***/ (function() {

var burgerMenu = document.querySelector('.menu');
var burgerBtn = document.querySelector('.menu__burger');
var burgerWrapper = document.querySelector('.burger-wrapper');
var body = document.querySelector('body');
var headerWrapper = document.querySelector('.header__wrapper');
burgerBtn.addEventListener('click', function (e) {
  e.preventDefault();
  openMenu();
});
burgerWrapper.addEventListener('click', function () {
  closeMenu();
});
var openMenu = function openMenu() {
  burgerMenu.classList.toggle('active');
  burgerWrapper.classList.toggle('active');
  body.classList.toggle('scroll-lock');
};
var closeMenu = function closeMenu() {
  burgerMenu.classList.remove('active');
  burgerWrapper.classList.remove('active');
  body.classList.remove('scroll-lock');
};
document.addEventListener('scroll', function (e) {});

/***/ }),

/***/ "./html/about.html":
/*!*************************!*\
  !*** ./html/about.html ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/about-page/top/01.jpg */ "./images/about-page/top/01.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/about-page/happening/01.jpg */ "./images/about-page/happening/01.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/about-page/happening/02.jpg */ "./images/about-page/happening/02.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/about-page/happening/03.jpg */ "./images/about-page/happening/03.jpg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"UTF-8\">\n\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\t<title>About</title>\n</head>\n\n<body>\n\t<div class=\"wrapper\">\n\t\t<header class=\"header\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"header__wrapper\">\n\t\t\t\t\t<a href=\"index.html\" class=\"header__logo logo\">Yogi</a>\n\t\t\t\t\t<nav class=\"header__menu menu\">\n\t\t\t\t\t\t<ul class=\"menu__list\">\n\t\t\t\t\t\t\t<li class=\"menu__item\">\n\t\t\t\t\t\t\t\t<a href=\"pricing.html\" class=\"menu__link\">Pricing</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"menu__item active\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"menu__link\">About Us</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"menu__item\">\n\t\t\t\t\t\t\t\t<a href=\"contact.html\" class=\"menu__link\">Contact</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<div class=\"header__btns\">\n\t\t\t\t\t\t\t<button class=\"header__btns-login\">Login</button>\n\t\t\t\t\t\t\t<button class=\"header__btns-signUp\">Sign Up</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</nav>\n\t\t\t\t\t<div class=\"burger-wrapper\"></div>\n\t\t\t\t\t<a href=\"#\" class=\"menu__burger\">\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</header>\n\t\t<main class=\"page\">\n\t\t\t<section class=\"about\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"about__wrapper\">\n\t\t\t\t\t\t<div class=\"about__content\">\n\t\t\t\t\t\t\t<h2 class=\"about__title\">About Yogi</h2>\n\t\t\t\t\t\t\t<p class=\"about__text\">We free and empower consumers and families to confidently enjoy life\n\t\t\t\t\t\t\t\tonline.</p>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"about__btn btn\">Corporate Fact Sheet</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"about__image\">\n\t\t\t\t\t\t\t<div class=\"about__image-wrapper\">\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"img\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t\t<section class=\"happening\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"happening__wrapper\">\n\t\t\t\t\t\t<h3 class=\"happening__title\">What’s happening at Yogi ?</h3>\n\t\t\t\t\t\t<div class=\"happening__items\">\n\t\t\t\t\t\t\t<div class=\"happening__item happening-item\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"happening-item__img\">\n\t\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"img\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t<h5 class=\"happening-item__title\">Awards</h5>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<p class=\"happening-item__text\">See product evaluations from third-party analysts.</p>\n\t\t\t\t\t\t\t\t<div class=\"happening-item__date\">8 September, 2019</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"happening__item happening-item\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"happening-item__img\">\n\t\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"img\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t<h5 class=\"happening-item__title\">Company</h5>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<p class=\"happening-item__text\">Access the latest press releases and other resources for\n\t\t\t\t\t\t\t\t\tthe media.</p>\n\t\t\t\t\t\t\t\t<div class=\"happening-item__date\">8 September, 2019</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"happening__item happening-item\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"happening-item__img\">\n\t\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"img\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t<h5 class=\"happening-item__title\">Works</h5>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<p class=\"happening-item__text\">Inclusion at McAfee is about the power of working\n\t\t\t\t\t\t\t\t\ttogether and creating a culture where all voices are valued.</p>\n\t\t\t\t\t\t\t\t<div class=\"happening-item__date\">8 September, 2019</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t</main>\n\t\t<footer class=\"footer\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"footer__wrapper\">\n\t\t\t\t\t<nav class=\"footer__menu\">\n\t\t\t\t\t\t<h6 class=\"footer__menu-title\">Company</h6>\n\t\t\t\t\t\t<ul class=\"footer__menu-list\">\n\t\t\t\t\t\t\t<li class=\"footer__menu-item\">\n\t\t\t\t\t\t\t\t<a href=\"№\" class=\"footer_menu-link\">About Us</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"footer__menu-item\">\n\t\t\t\t\t\t\t\t<a href=\"№\" class=\"footer_menu-link\">Partners</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"footer__menu-item\">\n\t\t\t\t\t\t\t\t<a href=\"№\" class=\"footer_menu-link\">Blog</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"footer__menu-item\">\n\t\t\t\t\t\t\t\t<a href=\"№\" class=\"footer_menu-link\">Careers</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</nav>\n\t\t\t\t\t<div class=\"footer_contacts\">\n\t\t\t\t\t\t<h6 class=\"footer__contacts-title\">Contact</h6>\n\t\t\t\t\t\t<ul class=\"footer__contacts-list\">\n\t\t\t\t\t\t\t<li class=\"footer__contacts-item\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"footer__contacts-link\">Terms of Use</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"footer__contacts-item\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"footer__contacts-link\">Privacy Policy</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"footer__contacts-item\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"footer__contacts-link\">F.A.Q</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"footer__accordion\">\n\t\t\t\t\t\t<div class=\"footer__global\">Global</div>\n\t\t\t\t\t\t<ul class=\"footer__global-list\">\n\t\t\t\t\t\t\t<li class=\"footer__global-item\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"footer__global-link\">Link-one</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"footer__global-item\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"footer__global-link\">Link-two</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"footer__global-item\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"footer__global-link\">Link-three</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</footer>\n\t</div>\n</body>\n\n</html>";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./about.scss":
/*!********************!*\
  !*** ./about.scss ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./images/about-page/happening/01.jpg":
/*!********************************************!*\
  !*** ./images/about-page/happening/01.jpg ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/01.72b9d33f93db7e052ba9.jpg";

/***/ }),

/***/ "./images/about-page/happening/02.jpg":
/*!********************************************!*\
  !*** ./images/about-page/happening/02.jpg ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/02.6dfcd25c5a9bba7de8d6.jpg";

/***/ }),

/***/ "./images/about-page/happening/03.jpg":
/*!********************************************!*\
  !*** ./images/about-page/happening/03.jpg ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/03.541a0aa52ab58d44aca4.jpg";

/***/ }),

/***/ "./images/about-page/top/01.jpg":
/*!**************************************!*\
  !*** ./images/about-page/top/01.jpg ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/01.70cf66923911f1d393c3.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"about": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*********************!*\
  !*** ./js/about.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html_about_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../html/about.html */ "./html/about.html");
/* harmony import */ var _about_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../about.scss */ "./about.scss");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.js */ "./js/footer.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_footer_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./js/header.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_header__WEBPACK_IMPORTED_MODULE_3__);




}();
/******/ })()
;
//# sourceMappingURL=about.js.map