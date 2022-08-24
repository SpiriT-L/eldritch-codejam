/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/menu.js":
/*!********************!*\
  !*** ./js/menu.js ***!
  \********************/
/***/ (() => {



var menuIcon = document.querySelector('.menu__icon');
var myMenu = document.querySelector('.menu');
var menuList = document.querySelector('.menu__list');
var myBody = document.querySelector('.body');
var closeMenu = document.querySelector('.menu__close');
var overlayMenu = document.querySelector('.menu__overlay');
var menuItem = document.querySelector('.menu__item');
var menuItemAccount = document.querySelector('.menu__item-account');

var addLinckMenu = function addLinckMenu() {
  if (!menuList.classList.contains('menu__item-account')) {
    var account = document.createElement('li');
    var socialMedia = document.createElement('li');
    var accountLinck = document.createElement('a');
    var socialMediaLinck = document.createElement('a');
    account.classList.add('menu__item', 'menu__item-account', 'login__btn');
    socialMedia.classList.add('menu__item', 'menu__item-account', '_social');
    accountLinck.classList.add('menu__link');
    socialMediaLinck.classList.add('menu__link');
    document.querySelector('ul').appendChild(account);
    document.querySelector('ul').appendChild(socialMedia);
    account.append(accountLinck);
    socialMedia.append(socialMediaLinck);
    accountLinck.href = '#';
    socialMediaLinck.href = '#';
    accountLinck.appendChild(document.createTextNode('Account'));
    socialMediaLinck.appendChild(document.createTextNode('Social Media'));
  } else {
    menuItemAccount.parentNode.removeChild(menuItemAccount);
    menuItemAccount.remove(menuItemAccount);
  }

  console.log(menuList.classList);
};

var menuActive = function menuActive(event) {
  if (myMenu.classList.contains('menu__active')) {
    myMenu.classList.remove('menu-active');
    menuList.classList.remove('menu__list-active');
    menuItemAccount.parentNode.removeChild(menuItemAccount);
    menuItemAccount.remove();
  } else {
    myMenu.classList.toggle('menu-active');
    menuList.classList.toggle('menu__list-active');
  }
};

var addLincksMenu = function addLincksMenu(event) {
  if (!menuItem.classList.contains('menu__item-account')) {
    addLinckMenu();
  }
};

menuIcon.addEventListener('click', menuActive);
menuIcon.addEventListener('click', addLincksMenu);
closeMenu.addEventListener('click', menuActive);
overlayMenu.addEventListener('click', menuActive);

/***/ }),

/***/ "./js/pop-up.js":
/*!**********************!*\
  !*** ./js/pop-up.js ***!
  \**********************/
/***/ (() => {



var btnLogin = document.querySelector('.login__btn');
var popup = document.querySelector('.pop-up');
var form = document.getElementById('login');
var create = document.getElementById('create');
var userEmail = document.getElementById('userEmail');
var submitBtn = document.querySelector('.pop-up__btn-submit');
var registr = document.querySelector('.pop-up__registr-block');
var login = document.querySelector('.pop-up__login-block');
var wrapperLogin = document.querySelector('.pop-up__wrapper-login');
var wrapperCreate = document.querySelector('.pop-up__wrapper-create');

var btnLoginClick = function btnLoginClick(event) {
  popup.classList.toggle('hiden');
};

var closePopup = function closePopup(event) {
  if (event.target.classList.contains('pop-up')) {
    popup.classList.toggle('hiden');
  }
};

var sabmitAlert = function sabmitAlert(event) {
  event.preventDefault();
  var emailInput = document.getElementById('userEmail').value;
  var passInput = document.getElementById('userPass').value;
  console.log(emailInput);
  alert('Email: ' + "".concat(emailInput) + '\n' + 'Password: ' + "".concat(passInput));
};

var registrPopup = function registrPopup(event) {
  if (wrapperCreate.classList.contains('hide')) {
    wrapperCreate.classList.remove('hide');
    wrapperLogin.classList.add('hide');
  }
};

var loginPopup = function loginPopup(event) {
  if (wrapperLogin.classList.contains('hide')) {
    wrapperLogin.classList.remove('hide');
    wrapperCreate.classList.add('hide');
  }
};

btnLogin.addEventListener('click', btnLoginClick); // btnLoginMob.addEventListener('click', btnLoginClick);

popup.addEventListener('click', closePopup);
form.addEventListener('submit', sabmitAlert);
create.addEventListener('submit', sabmitAlert);
registr.addEventListener('click', registrPopup);
login.addEventListener('click', loginPopup);

/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/***/ (() => {



var BTN_LEFT = document.querySelector('#btn-left');
var BTN_RIGHT = document.querySelector('#btn-right');
var CAROUSEL = document.querySelector('#carousel');
var ITEM_LEFT = document.querySelector('#item-left');
var ITEM_RIGHT = document.querySelector('#item-right');

var createCardTemplate = function createCardTemplate() {
  var sliders__items = document.createElement('img');
  sliders__items.classList.add('sliders__items');
  return sliders__items;
};

var moveLeft = function moveLeft() {
  CAROUSEL.classList.add('transition-left');
  BTN_LEFT.removeEventListener('click', moveLeft);
  BTN_RIGHT.removeEventListener('click', moveRight);
};

var moveRight = function moveRight() {
  CAROUSEL.classList.add('transition-right');
  BTN_LEFT.removeEventListener('click', moveLeft);
  BTN_RIGHT.removeEventListener('click', moveRight);
};

BTN_LEFT.addEventListener('click', moveLeft);
BTN_RIGHT.addEventListener('click', moveRight);
CAROUSEL.addEventListener('animationend', function (animationEvent) {
  var changedItem;

  if (animationEvent.animationName === 'move-left') {
    CAROUSEL.classList.remove('transition-left');
    changedItem = ITEM_LEFT;
    document.querySelector('#item-active').innerHTML = ITEM_LEFT.innerHTML;
  } else {
    CAROUSEL.classList.remove('transition-right');
    changedItem = ITEM_RIGHT;
    document.querySelector('#item-active').innerHTML = ITEM_RIGHT.innerHTML;
  } // changedItem.innerHTML = "";
  // for (let i = 0; i < 3; i++) {
  //   const card = createCardTemplate();
  //   card.innerText = Math.floor(Math.random() * 8);
  //   changedItem.appendChild(card);
  // }


  BTN_LEFT.addEventListener('click', moveLeft);
  BTN_RIGHT.addEventListener('click', moveRight);
});

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ "./assets/favicon.ico"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/x-icon\" />\r\n    <title>Eldritch Horror</title>\r\n  </head>\r\n  <body class=\"body\">\r\n    <div class=\"wrapper\">\r\n      <header class=\"header\">\r\n        <div class=\"header__bg\">\r\n          <div class=\"_container\">\r\n          </div>\r\n        </div>\r\n      </header>\r\n      <main class=\"main\">\r\n\r\n      </main>\r\n      <footer class=\"footer\">\r\n        <div class=\"_container\">\r\n        </div>\r\n      </footer>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {



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

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/favicon.ico":
/*!****************************!*\
  !*** ./assets/favicon.ico ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/favicon.ico";

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./js/menu.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pop_up__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pop-up */ "./js/pop-up.js");
/* harmony import */ var _pop_up__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pop_up__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider */ "./js/slider.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_4__);
 // import '../scss/style.scss';


 // import './task';



 // import '../pets.html';
// import './slider'
})();

/******/ })()
;
//# sourceMappingURL=main.js.map