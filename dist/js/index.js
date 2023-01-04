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

/***/ "./js/popups.js":
/*!**********************!*\
  !*** ./js/popups.js ***!
  \**********************/
/***/ (function() {

var popupEl = document.getElementById('popup');
console.log(popupEl);

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/header-bottom/01.jpg */ "./images/header-bottom/01.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/partners/01.svg */ "./images/partners/01.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/partners/02.svg */ "./images/partners/02.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/partners/03.svg */ "./images/partners/03.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/partners/04.svg */ "./images/partners/04.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/users/01.png */ "./images/users/01.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/users/02.png */ "./images/users/02.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/users/03.png */ "./images/users/03.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"UTF-8\">\n\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\t<title>Yogi</title>\n</head>\n\n<body>\n\t<div class=\"wrapper\">\n\t\t<header class=\"header\">\n\t\t\t<div class=\"header__container container\">\n\t\t\t\t<div class=\"header__wrapper\">\n\t\t\t\t\t<a href=\"#\" class=\"header__logo logo\">Yogi</a>\n\t\t\t\t\t<nav class=\"header__menu menu\">\n\t\t\t\t\t\t<ul class=\"menu__list\">\n\t\t\t\t\t\t\t<li class=\"menu__item\">\n\t\t\t\t\t\t\t\t<a href=\"pricing.html\" class=\"menu__link\">Pricing</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"menu__item\">\n\t\t\t\t\t\t\t\t<a href=\"about.html\" class=\"menu__link\">About Us</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"menu__item\">\n\t\t\t\t\t\t\t\t<a href=\"contact.html\" class=\"menu__link\">Contact</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<div class=\"header__btns\">\n\t\t\t\t\t\t\t<button class=\"header__btns-login\">Login</button>\n\t\t\t\t\t\t\t<button class=\"header__btns-signUp\">Sign Up</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</nav>\n\t\t\t\t\t<div class=\"burger-wrapper\"></div>\n\t\t\t\t\t<a href=\"#\" class=\"menu__burger\">\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t</header>\n\t\t<div class=\"login-popup id='popup' popup\">\n\t\t\t<form action=\"#\" class=\"login-popup__content\">\n\t\t\t\t<input type= \"email\" placeholder=\"Enter your email\" class=\"login-popup__email\">\n\t\t\t\t<input type=\"password\" placeholder=\"Enter your password\" class=\"login-popup__password\">\n\t\t\t\t<div class=\"login-popup__password-rem\"><p>Forgot the password?</p><a href=\"#\">Click here</a></div>\n\t\t\t\t<button class=\"login-popup__login-btn btn\">Sign in</button>\n\t\t\t</form>\n\t\t</div>\n\t\t<main class=\"page \">\n\t\t\t<section class=\"header__bottom\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"header__bottom-wrapper\">\n\t\t\t\t\t\t<div class=\"header__bottom-content\">\n\t\t\t\t\t\t\t<h1 class=\"header__bottom-title\">Keeping It All Together</h1>\n\t\t\t\t\t\t\t<p class=\"header__bottom-text\">Enjoy special design, development & advertising offers from Google, Microsoft Advertising, and other leading sites to help grow your business, - Start Today.</p>\n\t\t\t\t\t\t\t<div class=\"header__bottom-btnWrapper\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"header__bottom-btn btn\">Try for free</a>\n\t\t\t\t\t\t\t\t<span class=\"btn__info\">* No credit card required</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"header__bottom-image\">\n\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t\t<section class=\"partners\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"partners__wrapper\">\n\t\t\t\t\t\t<h6 class=\"partners__title\">Thousands of teams worldwide are using Hugi</h6>\n\t\t\t\t\t\t<div class=\"partners__logo\">\n\t\t\t\t\t\t\t<div class=\"partners__logo-item\">\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"partner\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"partners__logo-item\">\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"partner\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"partners__logo-item\">\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"partner\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"partners__logo-item\">\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"partner\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t\t<section class=\"pricing\">\n\t\t\t\t<div class=\"pricing__title-block\">\n\t\t\t\t\t<h2 class=\"pricing__title\">Our Pricing</h2>\n\t\t\t\t\t<h7 class=\"pricing__subtitle\">Shop, stream, bank and browse the web design & dev. by an industry-leader for all your devices.</h7>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"pricing__offers offers\">\n\t\t\t\t\t\t<div class=\"offers__item\">\n\t\t\t\t\t\t\t<div class=\"offers__item-price\">$50<span>/hr</span></div>\n\t\t\t\t\t\t\t<h4 class=\"offers__item-title\">App Design</h4>\n\t\t\t\t\t\t\t<div class=\"offers__item-subtitle\">Essential Services for a Startup App Design</div>\n\t\t\t\t\t\t\t<ul class=\"offers__item-list offers-list\">\n\t\t\t\t\t\t\t\t<li class=\"offers-list__item\">Only Androind App</li>\n\t\t\t\t\t\t\t\t<li class=\"offers-list__item\">Responsive Design</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"offers__item-btn btn\">Buy Now</a>\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"offers__item\">\n\t\t\t\t\t\t\t<div class=\"offers__item-price\">$499<span>/hr</span></div>\n\t\t\t\t\t\t\t<h4 class=\"offers__item-title\">Popular</h4>\n\t\t\t\t\t\t\t<div class=\"offers__item-subtitle\">Advanced Level Company App Design for Mobile</div>\n\t\t\t\t\t\t\t<ul class=\"offers__item-list offers-list\">\n\t\t\t\t\t\t\t\t<li class=\"offers-list__item\">Andoird Version App</li>\n\t\t\t\t\t\t\t\t<li class=\"offers-list__item\">iOS Version App</li>\n\t\t\t\t\t\t\t\t<li class=\"offers-list__item\">Landing Page Design</li>\n\t\t\t\t\t\t\t\t<li class=\"offers-list__item\">Responsive Designs</li>\n\t\t\t\t\t\t\t\t<li class=\"offers-list__item\">Advertising Designs</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"offers__item-btn btn\">Buy Now</a>\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"offers__item\">\n\t\t\t\t\t\t\t<div class=\"offers__item-price\">$999<span>/hr</span></div>\n\t\t\t\t\t\t\t<h4 class=\"offers__item-title\">Premium Suite</h4>\n\t\t\t\t\t\t\t<div class=\"offers__item-subtitle\">EVIP Level of Product Design Services</div>\n\t\t\t\t\t\t\t<ul class=\"offers__item-list offers-list\">\n\t\t\t\t\t\t\t\t<li class=\"offers-list__item\">Android App Version</li>\n\t\t\t\t\t\t\t\t<li class=\"offers-list__item\">iOS App Version</li>\n\t\t\t\t\t\t\t\t<li class=\"offers-list__item\">Landing Page Design</li>\n\t\t\t\t\t\t\t\t<li class=\"offers-list__item\">Web Application Design</li>\n\t\t\t\t\t\t\t\t<li class=\"offers-list__item\">Marketing Materials</li>\n\t\t\t\t\t\t\t\t<li class=\"offers-list__item\">Advertisement Design</li>\n\t\t\t\t\t\t\t\t<li class=\"offers-list__item\">Dashboard Design</li>\n\t\t\t\t\t\t\t\t<li class=\"offers-list__item\">Branding</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"offers__item-btn btn\">Buy Now</a>\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t\t<section class=\"users\">\n\t\t\t\t<h2 class=\"users__title\">Our Happy Users</h2>\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"users__items\">\n\t\t\t\t\t\t<div class=\"users__item users-item\">\n\t\t\t\t\t\t\t<h5 class=\"users-item__title\">Very Good <br> Design Services</h5>\n\t\t\t\t\t\t\t<p class=\"users-item__text\">\"Used for many years. Never have any problem in my computer.\"</p>\n\t\t\t\t\t\t\t<div class=\"users-item__stars\">\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"stars\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"users-item__author\">by Ugur D.</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"users__item users-item\">\n\t\t\t\t\t\t\t<h5 class=\"users-item__title\">Complete assistance with design & development</h5>\n\t\t\t\t\t\t\t<p class=\"users-item__text\">The reason I initially first went with Kaspersky a few years ago was that I heard it was not very heavy on my resources.</p>\n\t\t\t\t\t\t\t<div class=\"users-item__stars\">\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"stars\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"users-item__author\">by Ugur D.</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"users__item users-item\">\n\t\t\t\t\t\t\t<h5 class=\"users-item__title\">Awesome team collaboration</h5>\n\t\t\t\t\t\t\t<p class=\"users-item__text\">A great product for all, easy to use and gives you all round protection. I like the easy way it carries out updates and the fixing of errors</p>\n\t\t\t\t\t\t\t<div class=\"users-item__stars\">\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"stars\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"users-item__author\">by Ugur D.</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t</main>\n\t\t<footer class=\"footer\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"footer__wrapper\">\n\t\t\t\t\t<nav class=\"footer__menu\">\n\t\t\t\t\t\t<h6 class=\"footer__menu-title\">Company</h6>\n\t\t\t\t\t\t<ul class=\"footer__menu-list\">\n\t\t\t\t\t\t\t<li class=\"footer__menu-item\">\n\t\t\t\t\t\t\t\t<a href=\"№\" class=\"footer_menu-link\">About Us</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"footer__menu-item\">\n\t\t\t\t\t\t\t\t<a href=\"№\" class=\"footer_menu-link\">Partners</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"footer__menu-item\">\n\t\t\t\t\t\t\t\t<a href=\"№\" class=\"footer_menu-link\">Blog</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"footer__menu-item\">\n\t\t\t\t\t\t\t\t<a href=\"№\" class=\"footer_menu-link\">Careers</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</nav>\n\t\t\t\t\t<div class=\"footer_contacts\">\n\t\t\t\t\t\t<h6 class=\"footer__contacts-title\">Contact</h6>\n\t\t\t\t\t\t<ul class=\"footer__contacts-list\">\n\t\t\t\t\t\t\t<li class=\"footer__contacts-item\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"footer__contacts-link\">Terms of Use</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"footer__contacts-item\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"footer__contacts-link\">Privacy Policy</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"footer__contacts-item\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"footer__contacts-link\">F.A.Q</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"footer__accordion\">\n\t\t\t\t\t\t<div class=\"footer__global\">Global</div>\n\t\t\t\t\t\t<ul class=\"footer__global-list\">\n\t\t\t\t\t\t\t<li class=\"footer__global-item\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"footer__global-link\">Link-one</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"footer__global-item\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"footer__global-link\">Link-two</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"footer__global-item\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"footer__global-link\">Link-three</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</footer>\n\t</div>\n</body>\n\n</html>";
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

/***/ "./index.scss":
/*!********************!*\
  !*** ./index.scss ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./images/header-bottom/01.jpg":
/*!*************************************!*\
  !*** ./images/header-bottom/01.jpg ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/01.f7b6bfaca192fe110dd3.jpg";

/***/ }),

/***/ "./images/partners/01.svg":
/*!********************************!*\
  !*** ./images/partners/01.svg ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/01.d6ab085bcba377a387a3.svg";

/***/ }),

/***/ "./images/partners/02.svg":
/*!********************************!*\
  !*** ./images/partners/02.svg ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/02.744626bda485690c6683.svg";

/***/ }),

/***/ "./images/partners/03.svg":
/*!********************************!*\
  !*** ./images/partners/03.svg ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/03.f96b6de2fbe21b026e25.svg";

/***/ }),

/***/ "./images/partners/04.svg":
/*!********************************!*\
  !*** ./images/partners/04.svg ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/04.f3e292f159e740d99bdb.svg";

/***/ }),

/***/ "./images/users/01.png":
/*!*****************************!*\
  !*** ./images/users/01.png ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/01.5091ed999b5ac2aec026.png";

/***/ }),

/***/ "./images/users/02.png":
/*!*****************************!*\
  !*** ./images/users/02.png ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/02.a982bbd0d8ca32278f70.png";

/***/ }),

/***/ "./images/users/03.png":
/*!*****************************!*\
  !*** ./images/users/03.png ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/03.423cb5f03e75b076bf94.png";

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
/******/ 			"index": 0
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
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./index.scss");
/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/header */ "./js/header.js");
/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_header__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/footer */ "./js/footer.js");
/* harmony import */ var _js_footer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_footer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_popups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/popups */ "./js/popups.js");
/* harmony import */ var _js_popups__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_popups__WEBPACK_IMPORTED_MODULE_4__);





}();
/******/ })()
;
//# sourceMappingURL=index.js.map