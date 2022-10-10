/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Platform.js":
/*!*************************!*\
  !*** ./src/Platform.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Platform)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Platform = /*#__PURE__*/function () {
  function Platform(options) {
    _classCallCheck(this, Platform);

    this.x = options.x;
    this.y = options.y;
    this.width = options.width;
    this.height = options.height;
    this.flightAltitude = options.flightAltitude;
    this.gameSpeed = options.gameSpeed;
    this.dx = -this.gameSpeed;
    this.image = new Image();
    this.image.src = options.imageSrc;
  }

  _createClass(Platform, [{
    key: "update",
    value: function update() {
      this.x += this.dx;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      _index__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(this.image, this.x, _index__WEBPACK_IMPORTED_MODULE_0__.canvas.height - this.flightAltitude);
    }
  }]);

  return Platform;
}();



/***/ }),

/***/ "./src/cloud.js":
/*!**********************!*\
  !*** ./src/cloud.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cloud)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start_game */ "./src/start_game.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var Cloud = /*#__PURE__*/function () {
  function Cloud(options) {
    _classCallCheck(this, Cloud);

    this.x = _index_js__WEBPACK_IMPORTED_MODULE_0__.canvas.width;
    this.sx = options.sx;
    this.sy = options.sy;
    this.sWidth = options.sWidth;
    this.sHeight = options.sHeight;
    this.dy = options.dy;
    this.dWidth = options.sWidth;
    this.dHeight = options.sHeight;
    this.dx = -_start_game__WEBPACK_IMPORTED_MODULE_1__.gameSpeed / _start_game__WEBPACK_IMPORTED_MODULE_1__.gameSpeed;
    this.image = new Image();
    this.image.src = options.src;
  }

  _createClass(Cloud, [{
    key: "update",
    value: function update() {
      this.x += this.dx;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      _index_js__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.x, this.dy, this.dWidth, this.dHeight);
    }
  }]);

  return Cloud;
}();



/***/ }),

/***/ "./src/coin.js":
/*!*********************!*\
  !*** ./src/coin.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Coin)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Coin = /*#__PURE__*/function () {
  function Coin(options) {
    _classCallCheck(this, Coin);

    this.x = options.x;
    this.y = options.y;
    this.width = options.width; // console.log(this.width);

    this.height = options.height;
    this.ticksPerFrame = options.ticksPerFrame || 0;
    this.numberOfFrames = options.numberOfFrames || 1;
    this.gameSpeed = options.gameSpeed;
    this.frameIndex = 0;
    this.tickCount = 0;
    this.dx = -this.gameSpeed;
    this.image = new Image();
    this.image.src = './images/coin.png';
    this.audioObj = new Audio('./sound/coin2.mp3');
  }

  _createClass(Coin, [{
    key: "update",
    value: function update() {
      this.x += this.dx;
      this.tickCount++;

      if (this.tickCount > this.ticksPerFrame) {
        this.tickCount = 0;

        if (this.frameIndex < this.numberOfFrames - 1) {
          this.frameIndex += 1;
        } else {
          this.frameIndex = 0;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      _index__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(this.image, this.frameIndex * this.width / this.numberOfFrames, 0, this.width / this.numberOfFrames, this.height, this.x, this.y, this.width / this.numberOfFrames, this.height);
    }
  }, {
    key: "playCoinSound",
    value: function playCoinSound() {
      this.audioObj.play();
    }
  }, {
    key: "start",
    value: function start() {
      this.update();
      this.render();
    }
  }]);

  return Coin;
}();



/***/ }),

/***/ "./src/functions/functions.js":
/*!************************************!*\
  !*** ./src/functions/functions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "informForDesktop": () => (/* binding */ informForDesktop)
/* harmony export */ });
var informForDesktop = {
  hightScoreTextTop: 25,
  hightScoreTextLeft: 20,
  scoreTop: 50,
  scoreLeft: 20,
  hightCoinsTextTop: 75,
  hightCoinsTextLeft: 20,
  actualCoinsTextTop: 100,
  actualCoinsTextLeft: 20,
  livesTextTop: 125,
  livesTextLeft: 20
};

/***/ }),

/***/ "./src/game-sound.js":
/*!***************************!*\
  !*** ./src/game-sound.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameSound)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* eslint-disable linebreak-style */
var GameSound = /*#__PURE__*/function () {
  function GameSound() {
    _classCallCheck(this, GameSound);

    // this.url = window.gameState.soundUrl;
    // this.num = 1;
    this.fonSound = new Audio('sound/fon1.mp3');
    document.body.appendChild(this.fonSound);
    this.fonSound.volume = 0.1;
    this.deadSound = new Audio('sound/dead.mp3');
    document.body.appendChild(this.deadSound);
  }

  _createClass(GameSound, [{
    key: "playFon",
    value: function playFon() {
      this.fonSound.loop = true;
      this.fonSound.play();
    }
  }, {
    key: "stopFon",
    value: function stopFon() {
      this.fonSound.pause();
    }
  }, {
    key: "playDead",
    value: function playDead() {
      this.deadSound.play();
    }
  }]);

  return GameSound;
}();



/***/ }),

/***/ "./src/getControlsToMobile.js":
/*!************************************!*\
  !*** ./src/getControlsToMobile.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getControlsToMobile": () => (/* binding */ getControlsToMobile)
/* harmony export */ });
function getControlsToMobile(player) {
  var bodyWidth = document.body.getBoundingClientRect().width;
  var isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent); // if (bodyWidth >= 700) return;

  if (isMobile !== true) return;
  var timerId = null;
  var startMove = false;
  var controls = document.querySelector(".controls");
  var item = document.querySelector(".circle");
  item.addEventListener("touchstart", handleTouchStart, false);
  item.addEventListener("touchmove", handleTouchMove, false);
  item.addEventListener("touchend", handleTouchEnd, false);
  var x1 = null;
  var y1 = null;
  document.querySelector(".controls").style.display = "block";

  function handleTouchStart(e) {
    var firstTouch = e.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
  }

  function handleTouchMove(e) {
    if (!x1 || !y1) return false;
    var firstTouch = e.touches[0];
    var x2 = firstTouch.clientX;
    var y2 = firstTouch.clientY;
    var containerX = controls.getBoundingClientRect().x;
    var containerY = controls.getBoundingClientRect().y;
    var diffX = x2 - containerX;
    var diffY = y2 - containerY;
    moveCircle(diffX, diffY);
    prepareForTheMove(x2 - x1, y2 - y1);
  }

  function prepareForTheMove(x, y) {
    if (x < -20 && y <= 10 && y >= -20 && startMove === false) {
      startMove = true;
      moveToHero("move left");
    } else if (x < -20 && y <= -21 && startMove === false) {
      startMove = true;
      moveToHero("move left and up");
    } else if (x >= -19 && x <= 19 && y < -29 && startMove === false) {
      startMove = true;
      moveToHero("move up");
    } else if (x >= 20 && x <= 49 && y < -29 && startMove === false) {
      startMove = true;
      moveToHero("move up and right");
    } else if (x >= 30 && y >= -20 && y <= 20 && startMove === false) {
      startMove = true;
      moveToHero("move right");
    }
  }

  function moveCircle(x, y) {
    item.style.left = x + "px";
    item.style.top = y + "px";
  }

  function moveToHero(move) {
    if (move === "move up") {
      timerId = setInterval(function () {
        player.y = player.y - 7;
      }, 1);
    }

    if (move === "move right") {
      timerId = setInterval(function () {
        player.dx = player.dx += 4;
      }, 10);
    }

    if (move === "move left") {
      timerId = setInterval(function () {
        player.dx = player.dx -= 4;
        player.sx = 100;
      }, 10);
    }

    if (move === "move up and right") {
      timerId = setInterval(function () {
        player.dx = player.dx += 2;
        player.y = player.y - 7;
      }, 1);
    }

    if (move === "move left and up") {
      timerId = setInterval(function () {
        player.dx = player.dx -= 2;
        player.y = player.y - 7;
      }, 1);
    }
  }

  function handleTouchEnd() {
    item.style = "transition: 0.2s";
    var styleId = setTimeout(function () {
      item.style = "";
      clearInterval(styleId);
    }, 200);
    clearInterval(timerId);
    startMove = false;
  }
}

/***/ }),

/***/ "./src/get_clouds.js":
/*!***************************!*\
  !*** ./src/get_clouds.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getClouds)
/* harmony export */ });
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start_game */ "./src/start_game.js");
/* harmony import */ var _cloud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cloud */ "./src/cloud.js");
/* harmony import */ var _get_random_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get_random_int */ "./src/get_random_int.js");



var cloudsSet = [{
  src: 'images/clouds.png',
  sx: 0,
  sy: 0,
  sWidth: 220,
  sHeight: 160,
  dy: 150,
  dWidth: 220,
  dHeight: 160
}, {
  src: 'images/clouds.png',
  sx: 250,
  sy: 0,
  sWidth: 220,
  sHeight: 160,
  dy: 100,
  dWidth: 220,
  dHeight: 160
}];
var cloud;
var clouds = [];
var random;
function getClouds() {
  if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % 500 === 0) {
    random = cloudsSet[(0,_get_random_int__WEBPACK_IMPORTED_MODULE_2__["default"])(0, 2)];
    cloud = new _cloud__WEBPACK_IMPORTED_MODULE_1__["default"](random);
    clouds.push(cloud);
  }

  clouds.map(function (cloud) {
    cloud.update();
  });
}

/***/ }),

/***/ "./src/get_coin.js":
/*!*************************!*\
  !*** ./src/get_coin.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coinsCounter": () => (/* binding */ coinsCounter),
/* harmony export */   "getCoin": () => (/* binding */ getCoin)
/* harmony export */ });
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start_game */ "./src/start_game.js");
/* harmony import */ var _functions_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/functions.js */ "./src/functions/functions.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _coin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coin */ "./src/coin.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./text */ "./src/text.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lang */ "./src/lang.js");
/* harmony import */ var _get_random_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get_random_int */ "./src/get_random_int.js");







var coin;
var coins = [];
var coinsText;
var coinsCounter = {
  counter: 0
};
var randTime;
var arrCoinRandY = [100, 150, 200, 250];

function getCoin() {
  coinsText = new _text__WEBPACK_IMPORTED_MODULE_4__["default"]("".concat(_lang__WEBPACK_IMPORTED_MODULE_5__.lang[localStorage.getItem('langSelected')].coinsTxt, " ").concat(coinsCounter.counter), _functions_functions_js__WEBPACK_IMPORTED_MODULE_1__.informForDesktop.actualCoinsTextLeft, _functions_functions_js__WEBPACK_IMPORTED_MODULE_1__.informForDesktop.actualCoinsTextTop, 'left', '#212121', '20');
  coinsText.Draw();

  if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % 200 === 0) {
    randTime = (0,_get_random_int__WEBPACK_IMPORTED_MODULE_6__["default"])(20, 100);
    randTime += 200;
  }

  if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % randTime === 0) {
    coin = new _coin__WEBPACK_IMPORTED_MODULE_3__["default"]({
      x: _index__WEBPACK_IMPORTED_MODULE_2__.canvas.width,
      y: arrCoinRandY[(0,_get_random_int__WEBPACK_IMPORTED_MODULE_6__["default"])(0, 4)],
      width: 504,
      height: 84,
      numberOfFrames: 6,
      ticksPerFrame: 4,
      gameSpeed: _start_game__WEBPACK_IMPORTED_MODULE_0__.gameSpeed
    });
    coins.push(coin);
  }

  if (coins.length > 0) {
    coins.forEach(function (coin) {
      coin.start();

      if (_start_game__WEBPACK_IMPORTED_MODULE_0__.player.dx < coin.x + coin.width / 6 && _start_game__WEBPACK_IMPORTED_MODULE_0__.player.dx + _start_game__WEBPACK_IMPORTED_MODULE_0__.player.width / 10 - 10 > coin.x && _start_game__WEBPACK_IMPORTED_MODULE_0__.player.y < coin.y + coin.height && _start_game__WEBPACK_IMPORTED_MODULE_0__.player.y + _start_game__WEBPACK_IMPORTED_MODULE_0__.player.height >= coin.y) {
        coin.y = 10000;
        coin.playCoinSound();
        coinsCounter.counter += 1;
      }

      if (coin.x < -50) {
        coin.y = 10000;
      }
    });
  }
}



/***/ }),

/***/ "./src/get_platform.js":
/*!*****************************!*\
  !*** ./src/get_platform.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getPlatform)
/* harmony export */ });
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start_game */ "./src/start_game.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _Platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Platform */ "./src/Platform.js");
/* harmony import */ var _get_random_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get_random_int */ "./src/get_random_int.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);
var platform;
var randTime;
var platformRandTime = [200, 220, 250, 300];
var platforms = [];
var platformsOptionsForDesktop = [{
  src: 'images/platforma1.png',
  width: 495,
  height: 115,
  flightAltitude: 250
}, {
  src: 'images/platforma2.png',
  width: 280,
  height: 115,
  flightAltitude: 300
}];
var platformsOptionsForMobile = [{
  src: 'images/platforma1_for_mobile.png',
  width: 330,
  height: 77,
  flightAltitude: 250
}, {
  src: 'images/platforma2_for_mobile.png',
  width: 187,
  height: 77,
  flightAltitude: 300
}];
function getPlatform() {
  if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % 200 === 0) {
    randTime = platformRandTime[(0,_get_random_int__WEBPACK_IMPORTED_MODULE_3__["default"])(0, 4)];
  }

  if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % randTime === 0) {
    var type = (0,_get_random_int__WEBPACK_IMPORTED_MODULE_3__["default"])(0, 2);

    if (isMobile === true) {
      type = platformsOptionsForMobile[type];
    }

    if (isMobile === false) {
      type = platformsOptionsForDesktop[type];
    }

    platform = new _Platform__WEBPACK_IMPORTED_MODULE_2__["default"]({
      x: _index__WEBPACK_IMPORTED_MODULE_1__.canvas.width,
      y: _index__WEBPACK_IMPORTED_MODULE_1__.canvas.height,
      flightAltitude: type.flightAltitude,
      width: type.width,
      height: type.height,
      gameSpeed: _start_game__WEBPACK_IMPORTED_MODULE_0__.gameSpeed,
      imageSrc: type.src
    });
    platforms.push(platform);
  }

  var flag = false;

  var _iterator = _createForOfIteratorHelper(platforms),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _platform = _step.value;

      _platform.update();

      if (_start_game__WEBPACK_IMPORTED_MODULE_0__.player.dx > _platform.x && _start_game__WEBPACK_IMPORTED_MODULE_0__.player.dx < _platform.x + _platform.width - 40 && _start_game__WEBPACK_IMPORTED_MODULE_0__.player.y < _index__WEBPACK_IMPORTED_MODULE_1__.canvas.height - _platform.flightAltitude) {
        _start_game__WEBPACK_IMPORTED_MODULE_0__.player.test = _index__WEBPACK_IMPORTED_MODULE_1__.canvas.height - _platform.flightAltitude + 2;
        flag = true;
      } else if (!flag) {
        _start_game__WEBPACK_IMPORTED_MODULE_0__.player.test = _index__WEBPACK_IMPORTED_MODULE_1__.canvas.height;
        flag = false;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

/***/ }),

/***/ "./src/get_random_int.js":
/*!*******************************!*\
  !*** ./src/get_random_int.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getRandomInt)
/* harmony export */ });
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start_game */ "./src/start_game.js");
/* harmony import */ var _player_sound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player-sound */ "./src/player-sound.js");
/* harmony import */ var _pages_dead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/dead */ "./src/pages/dead.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }






var Hero = /*#__PURE__*/function () {
  function Hero(options) {
    _classCallCheck(this, Hero);

    this.image = options.image;
    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = options.ticksPerFrame || 0;
    this.numberOfFrames = options.numberOfFrames || 1;
    this.width = options.width;
    this.height = options.height;
    this.dy = options.dy || 0;
    this.dx = 0;
    this.sx = 0;
    this.jumpForce = 15;
    this.grounded = false;
    this.jumpTimer = 0;
    this.y = options.y;
    this.x = options.x;
    this.gravity = 1;
    this.isLeft = false; // platform

    this.test = options.test;
    this.sound = new _player_sound__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.counter = 0;
  }

  _createClass(Hero, [{
    key: "update",
    value: function update() {
      this.tickCount += 1;

      if (this.tickCount > this.ticksPerFrame) {
        this.tickCount = 0;

        if (this.frameIndex < this.numberOfFrames - 1) {
          this.frameIndex += 1;
        } else {
          this.frameIndex = 0;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      _index__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(this.image, this.frameIndex * this.width / this.numberOfFrames, this.sx, this.width / this.numberOfFrames, this.height, this.dx, this.y, this.width / this.numberOfFrames, this.height);
    }
  }, {
    key: "gravityGo",
    value: function gravityGo() {
      this.y += this.dy;

      if (this.y + this.height < this.test) {
        this.dy += this.gravity;
        this.grounded = false;

        if (this.dy > 0) {
          this.numberOfFrames = 1;

          if (this.isLeft) {
            this.sx = 300;
          } else {
            this.sx = 400;
          }
        }
      } else {
        this.dy = 0;
        this.grounded = true; // dead.hide();

        this.numberOfFrames = 6;

        if (this.isLeft) {
          this.sx = 100;
        } else {
          this.sx = 0;
        }

        this.y = this.test - this.height;
      }
    }
  }, {
    key: "moveToRight",
    value: function moveToRight() {
      if (this.dx < _index__WEBPACK_IMPORTED_MODULE_0__.canvas.width - 100) this.dx += 5;
      this.sx = 0;
      this.isLeft = false;
      this.numberOfFrames = 6;
    }
  }, {
    key: "moveToLeft",
    value: function moveToLeft() {
      if (this.dx > 0) this.dx -= 5;
      this.sx = 100;
      this.isLeft = true;
      this.numberOfFrames = 6;
    }
  }, {
    key: "prepareForJump",
    value: function prepareForJump() {
      // console.log("prepare for jump");
      if (this.grounded && this.jumpTimer === 0) {
        this.sound.jumpUp();
        this.jumpTimer = 1;
        this.dy = -this.jumpForce;
        this.sound.jumpDown();
      }
    }
  }, {
    key: "heroJump",
    value: function heroJump() {
      // console.log("hero jump");
      if (this.jumpTimer > 0 && this.jumpTimer < 15) {
        this.jumpTimer += 1;
        this.dy = -this.jumpForce - this.jumpTimer / 50;
        this.numberOfFrames = 1;

        if (this.isLeft) {
          this.sx = 200;
        } else {
          this.sx = 500;
        }
      }
    } // jump

  }, {
    key: "getReadyToJump",
    value: function getReadyToJump() {
      var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (_start_game__WEBPACK_IMPORTED_MODULE_1__.keys.Space || _start_game__WEBPACK_IMPORTED_MODULE_1__.keys.KeyW || _start_game__WEBPACK_IMPORTED_MODULE_1__.keys.ArrowUp || bool === true) {
        // this.counter += 1;
        // console.log("get ready to jump", this.counter);
        this.jump();
      } else {
        this.jumpTimer = 0;
      }

      if (_start_game__WEBPACK_IMPORTED_MODULE_1__.keys.KeyM || _start_game__WEBPACK_IMPORTED_MODULE_1__.keys.ArrowRight) {
        this.moveToRight();
      }

      if (_start_game__WEBPACK_IMPORTED_MODULE_1__.keys.KeyN || _start_game__WEBPACK_IMPORTED_MODULE_1__.keys.ArrowLeft) {
        this.moveToLeft();
      }

      if (_start_game__WEBPACK_IMPORTED_MODULE_1__.keys.Escape) {
        window.location.reload();
      }
    }
  }, {
    key: "jump",
    value: function jump() {
      this.prepareForJump();
      this.heroJump();
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      var loop = function loop() {
        _this.update();

        _this.render();

        _this.gravityGo();

        _this.getReadyToJump();

        if (localStorage.getItem('animate') === 'true') window.requestAnimationFrame(loop);
      };

      this.image.onload = function () {
        window.requestAnimationFrame(loop);
      };
    }
  }]);

  return Hero;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canvas": () => (/* binding */ canvas),
/* harmony export */   "ctx": () => (/* binding */ ctx)
/* harmony export */ });
/* harmony import */ var _pages_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/main */ "./src/pages/main.js");
/* eslint-disable linebreak-style */

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
localStorage.setItem('animate', 'true');
localStorage.setItem('lives', 3);
if (!localStorage.getItem('langSelected')) localStorage.setItem('langSelected', 'en');
if (!localStorage.getItem('SpriteImage')) localStorage.setItem('SpriteImage', 'images/sprite2.png');
(0,_pages_main__WEBPACK_IMPORTED_MODULE_0__["default"])();


/***/ }),

/***/ "./src/lang.js":
/*!*********************!*\
  !*** ./src/lang.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lang": () => (/* binding */ lang)
/* harmony export */ });
var lang = {
  en: {
    scoreTxt: 'Score:',
    coinsTxt: 'Coins:',
    bestCoinsTxt: 'Best coins:',
    livesTxt: 'Lives:',
    bestScoreTxt: 'Best score:',
    startGameBtn: 'Start Game',
    optionsBtn: 'Options',
    selectLng: 'Select language:',
    selectPlayer: 'Select player:',
    gameOver: 'You lost. Click to continue.',
    helpBtn: 'Help',
    helpTxt1: 'Your mission is to collect all the coins. To do this you only have a certain number  of lives. You can jump, move left and right within screen.',
    helpTxt2: 'Keyboard Control:',
    helpTxt3: 'W, Space, ^ - JUMP',
    helpTxt4: 'M, > - MOVE RIGHT',
    helpTxt5: 'N, < - MOVE LEFT',
    helpTxt6: 'A - MUSIC ON',
    helpTxt7: 'Q - MUSIC OFF',
    helpTxt8: 'Esc - MAIN MENU'
  },
  ru: {
    scoreTxt: 'Результат:',
    coinsTxt: 'Монеты:',
    livesTxt: 'Жизни:',
    bestScoreTxt: 'Лучший результат:',
    startGameBtn: 'Начать игру',
    optionsBtn: 'Настройки',
    selectLng: 'Выберите язык:',
    selectPlayer: 'Выберите игрока:',
    gameOver: 'Вы проиграли. Кликни чтобы продолжить.',
    helpBtn: 'Помощь',
    helpTxt1: 'Ваша задача собрать все монеты. Для этого у вас есть определенной количество жизней. Вы можете прыгать, идти влево и вправо в пределах экрана.',
    helpTxt2: 'Клавиши управления:',
    helpTxt3: 'W, Space, ^ - Прыжок',
    helpTxt4: 'M, > - Идти вправо',
    helpTxt5: 'N, < - Идти влево',
    helpTxt6: 'A - Включить музыку',
    helpTxt7: 'Q - Выключить музыку',
    helpTxt8: 'Esc - Главное меню'
  },
  br: {
    scoreTxt: 'Вынік:',
    coinsTxt: 'Манеты:',
    livesTxt: 'Жыцця:',
    bestScoreTxt: 'Лепшы вынік:',
    startGameBtn: 'Пачать ігру',
    optionsBtn: 'Опцыі',
    selectLng: 'Выберыце мову:',
    selectPlayer: 'Выберыце персанажа:',
    gameOver: 'Вы прайгралі. Клікні каб працягнуць.',
    helpBtn: 'Дапамога',
    helpTxt1: 'Ваша задача сабраць усе манеты. Для гэтага ў вас ёсць пэўнай колькасць жыццяў. Вы можаце скакаць, ісці налева і направа ў межах экрана.',
    helpTxt2: 'Клавішы кіравання:',
    helpTxt3: 'W, Space, ^ - Прыжок',
    helpTxt4: 'M, > - Iсці налева',
    helpTxt5: 'N, < - Iсці направа',
    helpTxt6: 'A - Уключыць музыку',
    helpTxt7: 'Q - Выключыць музыку',
    helpTxt8: 'Esc - Галоўнае меню'
  }
};


/***/ }),

/***/ "./src/obstacle.js":
/*!*************************!*\
  !*** ./src/obstacle.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Obstacle)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Obstacle = /*#__PURE__*/function () {
  function Obstacle(options) {
    _classCallCheck(this, Obstacle);

    this.x = options.x;
    this.y = options.y;
    this.width = options.width;
    this.height = options.height;
    this.gameSpeed = options.gameSpeed;
    this.dx = -this.gameSpeed;
    this.image = new Image();
    this.image.src = options.imageSrc;
  }

  _createClass(Obstacle, [{
    key: "Update",
    value: function Update() {
      this.x += this.dx;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      _index_js__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(this.image, this.x, _index_js__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 55);
    }
  }]);

  return Obstacle;
}();



/***/ }),

/***/ "./src/pages/dead.js":
/*!***************************!*\
  !*** ./src/pages/dead.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dead": () => (/* binding */ dead)
/* harmony export */ });
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang */ "./src/lang.js");
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../start_game */ "./src/start_game.js");
/* eslint-disable linebreak-style */


var dead = {
  show: function show() {
    localStorage.setItem('animate', 'false');
    var lg = localStorage.getItem('langSelected');
    var page = document.querySelector('.page') || document.createElement('div');
    page.classList.add('zindex');
    page.innerHTML = "\n  <div class=\"help-txt-wrapper\">\n\u0412\u044B \u043F\u043E\u0442\u0435\u0440\u044F\u043B\u0438 \u0436\u0438\u0437\u043D\u044C.\n<br>\u041A\u043B\u0438\u043A\u043D\u0438 \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C.\n  </div>\n  ";
    document.body.appendChild(page);
    document.addEventListener('click', function () {
      document.body.removeChild(page);
      localStorage.setItem('animate', 'true');
      (0,_start_game__WEBPACK_IMPORTED_MODULE_1__.start)();
    });
  },
  hide: function hide() {
    var page1 = document.querySelector('.page');
    page1.classList.add('hidden');
  }
};


/***/ }),

/***/ "./src/pages/game-over.js":
/*!********************************!*\
  !*** ./src/pages/game-over.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameOver)
/* harmony export */ });
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang */ "./src/lang.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* eslint-disable linebreak-style */


function gameOver() {
  document.body.removeChild(_index__WEBPACK_IMPORTED_MODULE_1__.canvas);
  document.querySelector(".controls").style.display = "none";
  localStorage.setItem('animate', 'false');
  var lg = localStorage.getItem('langSelected');
  var pageWrapper = document.querySelector('.page-wrapper');
  var page = document.querySelector('.page') || document.createElement('div');
  page.classList.add('page', 'game-over-image');
  page.innerHTML = "\n    <div class=\"game-over\">\n    ".concat(_lang__WEBPACK_IMPORTED_MODULE_0__.lang[lg].gameOver, "\n    </div>\n    ");
  pageWrapper.appendChild(page);
  pageWrapper.classList.remove('hidden');
  document.addEventListener('click', function () {
    window.location.reload();
  });
}

/***/ }),

/***/ "./src/pages/help.js":
/*!***************************!*\
  !*** ./src/pages/help.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ help)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../start_game */ "./src/start_game.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lang */ "./src/lang.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options */ "./src/pages/options.js");
/* eslint-disable linebreak-style */




function help() {
  _index__WEBPACK_IMPORTED_MODULE_0__.canvas.classList.add('hidden');
  var lg = localStorage.getItem('langSelected');
  var pageWrapper = document.querySelector('.page-wrapper');
  var page = document.querySelector('.page') || document.createElement('div');
  page.classList.add('page', 'page-image');
  page.innerHTML = "\n  <div class=\"help-txt-wrapper\">\n  ".concat(_lang__WEBPACK_IMPORTED_MODULE_2__.lang[lg].helpTxt1, "\n  <p>").concat(_lang__WEBPACK_IMPORTED_MODULE_2__.lang[lg].helpTxt2, "</p>\n  ").concat(_lang__WEBPACK_IMPORTED_MODULE_2__.lang[lg].helpTxt3, "\n  <br>").concat(_lang__WEBPACK_IMPORTED_MODULE_2__.lang[lg].helpTxt4, "\n  <br>").concat(_lang__WEBPACK_IMPORTED_MODULE_2__.lang[lg].helpTxt5, "\n  <br>").concat(_lang__WEBPACK_IMPORTED_MODULE_2__.lang[lg].helpTxt6, "\n  <br>").concat(_lang__WEBPACK_IMPORTED_MODULE_2__.lang[lg].helpTxt7, "\n  <br>").concat(_lang__WEBPACK_IMPORTED_MODULE_2__.lang[lg].helpTxt8, "\n  </div>\n  <a class=\"btnflip start-help start\" href=\"#\">\n          <span class=\"btnflip-item btnflip__front\">").concat(_lang__WEBPACK_IMPORTED_MODULE_2__.lang[lg].startGameBtn, "</span>\n          <span class=\"btnflip-item btnflip__center\"></span>\n          <span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_2__.lang[lg].startGameBtn, "</span>\n  </a>\n  \n  <a class=\"btnflip options-help options\" href=\"#\">\n          <span class=\"btnflip-item btnflip__front\">").concat(_lang__WEBPACK_IMPORTED_MODULE_2__.lang[lg].optionsBtn, "</span>\n          <span class=\"btnflip-item btnflip__center\"></span>\n          <span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_2__.lang[lg].optionsBtn, "</span>\n  </a>\n  ");

  function startGame() {
    pageWrapper.innerHTML = '';
    pageWrapper.classList.add('hidden');
    _index__WEBPACK_IMPORTED_MODULE_0__.canvas.classList.remove('hidden');
    (0,_start_game__WEBPACK_IMPORTED_MODULE_1__.start)();
  }

  pageWrapper.appendChild(page);
  pageWrapper.classList.remove('hidden');
  var startBtn = document.querySelector('.start');
  startBtn.addEventListener('click', startGame);
  var optionsBtn = document.querySelector('.options');
  optionsBtn.addEventListener('click', function () {
    (0,_options__WEBPACK_IMPORTED_MODULE_3__["default"])();
  });
}

/***/ }),

/***/ "./src/pages/main.js":
/*!***************************!*\
  !*** ./src/pages/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../start_game */ "./src/start_game.js");
/* harmony import */ var _help__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help */ "./src/pages/help.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options */ "./src/pages/options.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lang */ "./src/lang.js");
/* eslint-disable linebreak-style */





function main() {
  _index__WEBPACK_IMPORTED_MODULE_0__.canvas.classList.add('hidden');
  var lg = localStorage.getItem('langSelected');
  var pageWrapper = document.querySelector('.page-wrapper');
  var page = document.querySelector('.page') || document.createElement('div');
  page.classList.add('page');
  page.innerHTML = "\n\n    <img class=\"page-image\" src=\"./img/fon.jpg\" alt=\"blade-runner\" />\n    <a class=\"btnflip start-main start\" href=\"#\">\n      <span class=\"btnflip-item btnflip__front\">".concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].startGameBtn, "</span>\n      <span class=\"btnflip-item btnflip__center\"></span>\n      <span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].startGameBtn, "</span>\n    </a>\n\n    <a class=\"btnflip options-main options\" href=\"#\">\n      <span class=\"btnflip-item btnflip__front\">").concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].optionsBtn, "</span>\n      <span class=\"btnflip-item btnflip__center\"></span>\n      <span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].optionsBtn, "</span>\n    </a>\n\n    <a class=\"btnflip help-main help\" href=\"#\">  \n      <span class=\"btnflip-item btnflip__front\">").concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].helpBtn, "</span>\n      <span class=\"btnflip-item btnflip__center\"></span>\n      <span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].helpBtn, "</span>\n    </a>\n    \n    <footer class=\"footer\">\n      <div class=\"footer-authors\">\n        <a href=\"https://github.com/SergRudovich\" target=\"blank\">Sergey Rudovich</a>\n        <div class=\"footer-divider\"></div>\n        <a href=\"https://github.com/conservativ007\" target=\"blank\">conservativ007</a>\n      </div>\n      \n      <div style=\"text-align: center\">\n        <a href=\"https://rs.school/js/\" target=\"blank\">\n        <img src=\"https://rs.school/images/rs_school_js.svg\" alt=\"RS School\" style=\"width: 50px\"></a>\n        <span class=\"footer__year\">\xA9 2021</span>\n      </div>\n    \n    </footer>\n  ");

  function startGame() {
    pageWrapper.innerHTML = '';
    pageWrapper.classList.add('hidden');
    _index__WEBPACK_IMPORTED_MODULE_0__.canvas.classList.remove('hidden');
    (0,_start_game__WEBPACK_IMPORTED_MODULE_1__.start)();
  }

  pageWrapper.appendChild(page);
  pageWrapper.classList.remove('hidden');
  var startBtn = document.querySelector('.start');
  startBtn.addEventListener('click', startGame);
  var helpBtn = document.querySelector('.help');
  helpBtn.addEventListener('click', function () {
    (0,_help__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });
  var optionsBtn = document.querySelector('.options');
  optionsBtn.addEventListener('click', function () {
    (0,_options__WEBPACK_IMPORTED_MODULE_3__["default"])();
  });
}

/***/ }),

/***/ "./src/pages/options.js":
/*!******************************!*\
  !*** ./src/pages/options.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ options)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../start_game */ "./src/start_game.js");
/* harmony import */ var _help__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help */ "./src/pages/help.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lang */ "./src/lang.js");
/* eslint-disable linebreak-style */




function options() {
  _index__WEBPACK_IMPORTED_MODULE_0__.canvas.classList.add('hidden');
  var lg = localStorage.getItem('langSelected');
  var pageWrapper = document.querySelector('.page-wrapper');
  var page = document.querySelector('.page') || document.createElement('div');
  page.classList.add('page', 'page-image');
  page.innerHTML = "\n  <div class=\"help-txt-wrapper\">\n  <p class=\"menuItem\" id='menuFieldSize'>\n  <label>".concat(_lang__WEBPACK_IMPORTED_MODULE_3__.lang[lg].selectLng, "</label>\n  <select id=\"selectLang\">\n      <option value=\"en\" selected=\"selected\">english</option>\n      <option value=\"ru\">\u0440\u0443\u0441\u0441\u043A\u0438\u0439</option>\n      <option value=\"br\">\u0431\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F</option>\n  </select>\n  </p>\n  <br><p>").concat(_lang__WEBPACK_IMPORTED_MODULE_3__.lang[lg].selectPlayer, "</p>\n  <br>\n  <img src=\"img/sprite2_icon.png\" class=\"player2\" alt=\"player2\">\n  <img src=\"img/sprite1_icon.png\" class=\"player1\" alt=\"player1\">\n  </div>\n  <a class=\"btnflip start-help start\" href=\"#\">\n  <span class=\"btnflip-item btnflip__front\">").concat(_lang__WEBPACK_IMPORTED_MODULE_3__.lang[lg].startGameBtn, "</span>\n  <span class=\"btnflip-item btnflip__center\"></span>\n  <span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_3__.lang[lg].startGameBtn, "</span>\n</a>\n\n<a class=\"btnflip options-help help\" href=\"#\">\n  <span class=\"btnflip-item btnflip__front\">").concat(_lang__WEBPACK_IMPORTED_MODULE_3__.lang[lg].helpBtn, "</span>\n  <span class=\"btnflip-item btnflip__center\"></span>\n  <span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_3__.lang[lg].helpBtn, "</span>\n</a>\n  ");
  document.querySelector('#selectLang > option[selected]').removeAttribute('selected');
  document.querySelector("#selectLang > option[value=".concat(lg, "]")).setAttribute('selected', 'selected');

  function startGame() {
    pageWrapper.innerHTML = '';
    pageWrapper.classList.add('hidden');
    _index__WEBPACK_IMPORTED_MODULE_0__.canvas.classList.remove('hidden');
    (0,_start_game__WEBPACK_IMPORTED_MODULE_1__.start)();
  } // выбор языка


  pageWrapper.appendChild(page);
  pageWrapper.classList.remove('hidden');
  var startBtn = document.querySelector('.start');
  startBtn.addEventListener('click', startGame);
  var helpBtn = document.querySelector('.help');
  helpBtn.addEventListener('click', function () {
    (0,_help__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });
  var selectLang = document.querySelector('#selectLang');
  selectLang.addEventListener('change', function () {
    localStorage.setItem('langSelected', selectLang.value);
    options();
  }); // выбор игрока

  var player1 = document.querySelector('.player1');
  var player2 = document.querySelector('.player2');
  var playerSelected = localStorage.getItem('SpriteImage');

  if (playerSelected === 'images/sprite2.png') {
    player2.classList.add('player-icon-selected');
  } else {
    player1.classList.add('player-icon-selected');
  }

  player1.addEventListener('click', function () {
    localStorage.setItem('SpriteImage', 'images/sprite1.png');
    player1.classList.add('player-icon-selected');
    player2.classList.remove('player-icon-selected');
    options();
  });
  player2.addEventListener('click', function () {
    localStorage.setItem('SpriteImage', 'images/sprite2.png');
    player2.classList.add('player-icon-selected');
    player1.classList.remove('player-icon-selected');
    options();
  });
}

/***/ }),

/***/ "./src/player-sound.js":
/*!*****************************!*\
  !*** ./src/player-sound.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayerSound)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* eslint-disable linebreak-style */
var PlayerSound = /*#__PURE__*/function () {
  function PlayerSound() {
    _classCallCheck(this, PlayerSound);

    // this.url = window.gameState.soundUrl;
    this.soundUp = new Audio('sound/jumpUp.mp3');
    document.body.appendChild(this.soundUp);
    this.soundDown = new Audio('sound/gravityDown.mp3');
    document.body.appendChild(this.soundDown);
    this.isGravityDown = false;
    this.isJumpUp = false;
  }

  _createClass(PlayerSound, [{
    key: "jumpUp",
    value: function jumpUp() {
      if (!this.isJumpUp) {
        this.soundUp.play();
        this.isJumpUp = true;
      }
    }
  }, {
    key: "jumpDown",
    value: function jumpDown() {
      this.soundUp.pause();
      this.soundUp.currentTime = 0.0;
      this.isJumpUp = false;
    }
  }, {
    key: "gravityDown",
    value: function gravityDown() {
      if (!this.isGravityDown) {
        this.soundDown.play();
        this.isGravityDown = true;
      }
    }
  }, {
    key: "gravityUp",
    value: function gravityUp() {
      this.soundDown.pause();
      this.soundDown.currentTime = 0.0;
      this.isGravityDown = false;
    }
  }]);

  return PlayerSound;
}();



/***/ }),

/***/ "./src/snow_flakes.js":
/*!****************************!*\
  !*** ./src/snow_flakes.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSnowFlakes": () => (/* binding */ createSnowFlakes),
/* harmony export */   "updateSnowFall": () => (/* binding */ updateSnowFall)
/* harmony export */ });
var canvas = document.querySelector('#game');
var ctx = canvas.getContext('2d');
var particlesOnScreen = 245;
var w;
var h;
var particlesArray = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
w = window.innerWidth;
h = window.innerHeight;

function random(min, max) {
  return min + Math.random() * (max - min + 1);
}

function clientResize(ev) {
  w = canvas.width;
  h = canvas.height;
}

window.addEventListener('resize', clientResize); // createSnowFlakes();

function createSnowFlakes() {
  for (var i = 0; i < particlesOnScreen; i++) {
    particlesArray.push({
      x: Math.random() * w,
      y: Math.random() * h,
      opacity: Math.random(),
      speedX: random(-1, 1),
      speedY: random(1, 2),
      radius: random(0.5, 4.2)
    });
  }
}

function drawSnowFlakes() {
  for (var i = 0; i < particlesArray.length; i++) {
    var gradient = ctx.createRadialGradient(particlesArray[i].x, particlesArray[i].y, 0, particlesArray[i].x, particlesArray[i].y, particlesArray[i].radius); // gradient.addColorStop(0, `rgba(30, 144, 255, ${particlesArray[i].opacity})` );
    // gradient.addColorStop(0.8, `rgba(100, 149, 237, ${particlesArray[i].opacity})` );
    // gradient.addColorStop(1, `rgba(65, 105, 225, ${particlesArray[i].opacity})` );

    gradient.addColorStop(0, "rgba(255, 255, 255,".concat(particlesArray[i].opacity, ")")); // white

    gradient.addColorStop(0.8, "rgba(210, 236, 242,".concat(particlesArray[i].opacity, ")")); // bluish

    gradient.addColorStop(1, "rgba(237, 247, 249,".concat(particlesArray[i].opacity, ")"));
    ctx.beginPath();
    ctx.arc(particlesArray[i].x, particlesArray[i].y, particlesArray[i].radius, 0, Math.PI * 2, false);
    ctx.fillStyle = gradient;
    ctx.fill();
  }
}

function moveSnowFlakes() {
  for (var i = 0; i < particlesArray.length; i++) {
    particlesArray[i].x += particlesArray[i].speedX;
    particlesArray[i].y += particlesArray[i].speedY;

    if (particlesArray[i].y > h) {
      particlesArray[i].x = Math.random() * w * 1.5;
      particlesArray[i].y = -50;
    }
  }
}

function updateSnowFall() {
  ctx.clearRect(0, 0, w, h);
  drawSnowFlakes();
  moveSnowFlakes();
}



/***/ }),

/***/ "./src/spawn_obstacle.js":
/*!*******************************!*\
  !*** ./src/spawn_obstacle.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpawnObstacle": () => (/* binding */ SpawnObstacle)
/* harmony export */ });
/* harmony import */ var _obstacle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obstacle */ "./src/obstacle.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start_game */ "./src/start_game.js");




function SpawnObstacle() {
  // let size = RandomIntRange(20, 70);
  var type = RandomIntRange(3, 4);
  var obstacle = new _obstacle__WEBPACK_IMPORTED_MODULE_0__["default"]({
    x: _index__WEBPACK_IMPORTED_MODULE_1__.canvas.width,
    y: _index__WEBPACK_IMPORTED_MODULE_1__.canvas.height,
    width: 50,
    height: 50,
    gameSpeed: _start_game__WEBPACK_IMPORTED_MODULE_2__.gameSpeed,
    imageSrc: "images/obstacle".concat(type, ".png")
  });
  _start_game__WEBPACK_IMPORTED_MODULE_2__.obstacles.push(obstacle);
}

function RandomIntRange(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}



/***/ }),

/***/ "./src/start_game.js":
/*!***************************!*\
  !*** ./src/start_game.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Update": () => (/* binding */ Update),
/* harmony export */   "coins": () => (/* binding */ coins),
/* harmony export */   "gameSpeed": () => (/* binding */ gameSpeed),
/* harmony export */   "keys": () => (/* binding */ keys),
/* harmony export */   "obstacles": () => (/* binding */ obstacles),
/* harmony export */   "player": () => (/* binding */ player),
/* harmony export */   "score": () => (/* binding */ score),
/* harmony export */   "start": () => (/* binding */ start)
/* harmony export */ });
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ "./src/hero.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ "./src/text.js");
/* harmony import */ var _spawn_obstacle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spawn_obstacle */ "./src/spawn_obstacle.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _snow_flakes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./snow_flakes */ "./src/snow_flakes.js");
/* harmony import */ var _game_sound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-sound */ "./src/game-sound.js");
/* harmony import */ var _get_coin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get_coin */ "./src/get_coin.js");
/* harmony import */ var _get_clouds__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./get_clouds */ "./src/get_clouds.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lang */ "./src/lang.js");
/* harmony import */ var _get_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./get_platform */ "./src/get_platform.js");
/* harmony import */ var _pages_main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/main */ "./src/pages/main.js");
/* harmony import */ var _pages_dead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/dead */ "./src/pages/dead.js");
/* harmony import */ var _pages_game_over__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/game-over */ "./src/pages/game-over.js");
/* harmony import */ var _functions_functions_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./functions/functions.js */ "./src/functions/functions.js");
/* harmony import */ var _getControlsToMobile_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./getControlsToMobile.js */ "./src/getControlsToMobile.js");














 // let's make the game max width

var score;
var highScore;
var highCoins;
var hightCoinsText;
var scoreText;
var hightScoreText;
var livesText;
var gameSpeed;
var player;
var obstacles = [];
var coins = [];
var keys = {};
var heroImage;
var playSound = new _game_sound__WEBPACK_IMPORTED_MODULE_5__["default"]();

function start() {
  var withOfGame = document.body.getBoundingClientRect().width;
  _index__WEBPACK_IMPORTED_MODULE_3__.canvas.width = withOfGame;
  _index__WEBPACK_IMPORTED_MODULE_3__.canvas.height = window.innerHeight - 205;
  document.addEventListener('keydown', function (e) {
    keys[e.code] = true;
  });
  document.addEventListener('keyup', function (e) {
    keys[e.code] = false;
  });
  _index__WEBPACK_IMPORTED_MODULE_3__.ctx.font = '20px sans-serif';
  gameSpeed = 3;
  score = 0;
  highScore = 0;
  highCoins = 0;

  if (localStorage.getItem('highscore')) {
    highScore = localStorage.getItem('highscore');
  }

  if (localStorage.getItem('highCoins')) {
    highCoins = localStorage.getItem('highCoins');
  }

  heroImage = new Image();
  heroImage.src = localStorage.getItem('SpriteImage');
  player = new _hero__WEBPACK_IMPORTED_MODULE_0__["default"]({
    image: heroImage,
    width: 600,
    height: 100,
    numberOfFrames: 6,
    ticksPerFrame: 4,
    x: 50,
    y: 50,
    test: _index__WEBPACK_IMPORTED_MODULE_3__.canvas.height
  });
  player.start(); // console.log(player)

  scoreText = new _text__WEBPACK_IMPORTED_MODULE_1__["default"]("".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].scoreTxt, " ").concat(score), _functions_functions_js__WEBPACK_IMPORTED_MODULE_13__.informForDesktop.scoreLeft, _functions_functions_js__WEBPACK_IMPORTED_MODULE_13__.informForDesktop.scoreTop, 'left', '#212121', '20');
  livesText = new _text__WEBPACK_IMPORTED_MODULE_1__["default"]("".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].livesTxt, " ").concat(localStorage.getItem('lives')), _functions_functions_js__WEBPACK_IMPORTED_MODULE_13__.informForDesktop.livesTextLeft, _functions_functions_js__WEBPACK_IMPORTED_MODULE_13__.informForDesktop.livesTextTop, 'left', '#212121', '20');
  hightScoreText = new _text__WEBPACK_IMPORTED_MODULE_1__["default"]("".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].bestScoreTxt, " ").concat(highScore), _functions_functions_js__WEBPACK_IMPORTED_MODULE_13__.informForDesktop.hightScoreTextLeft, _functions_functions_js__WEBPACK_IMPORTED_MODULE_13__.informForDesktop.hightScoreTextTop, 'left', '#212121', '20');
  hightCoinsText = new _text__WEBPACK_IMPORTED_MODULE_1__["default"]("".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].bestCoinsTxt, " ").concat(highCoins), _functions_functions_js__WEBPACK_IMPORTED_MODULE_13__.informForDesktop.hightCoinsTextLeft, _functions_functions_js__WEBPACK_IMPORTED_MODULE_13__.informForDesktop.hightCoinsTextTop, 'left', '#212121', '20');
  (0,_snow_flakes__WEBPACK_IMPORTED_MODULE_4__.createSnowFlakes)(); // playSound.playFon();

  requestAnimationFrame(Update); // get mobile controls

  (0,_getControlsToMobile_js__WEBPACK_IMPORTED_MODULE_14__.getControlsToMobile)(player);
}

var initialSpawnTimer = 200;
var spawnTimer = initialSpawnTimer;

function Update() {
  if (localStorage.getItem('animate') === 'true') requestAnimationFrame(Update);
  _index__WEBPACK_IMPORTED_MODULE_3__.ctx.clearRect(0, 0, _index__WEBPACK_IMPORTED_MODULE_3__.canvas.width, _index__WEBPACK_IMPORTED_MODULE_3__.canvas.height); // выключить фоновую музыку

  if (keys.KeyQ) {
    playSound.stopFon();
  } // включить фоновую музыку


  if (keys.KeyA) {
    playSound.playFon();
  } // spawn obstacles


  spawnTimer -= 1;

  if (spawnTimer <= 0) {
    (0,_spawn_obstacle__WEBPACK_IMPORTED_MODULE_2__.SpawnObstacle)();
    spawnTimer = initialSpawnTimer - gameSpeed * 8;

    if (spawnTimer < 60) {
      spawnTimer = 60;
    }
  }

  (0,_snow_flakes__WEBPACK_IMPORTED_MODULE_4__.updateSnowFall)(); // spawn enemies

  for (var i = 0; i < obstacles.length; i += 1) {
    var o = obstacles[i];

    if (o.x + o.width < 0) {
      obstacles.splice(i, 1);
    } // перезагрузка игры при столкновении


    if (player.dx < o.x + o.width && player.dx + player.width / 10 - 10 > o.x && player.y < o.y + o.height && player.y + player.height >= o.y) {
      playSound.playDead();
      obstacles = [];
      gameSpeed = 3;
      localStorage.setItem('lives', localStorage.getItem('lives') - 1);

      if (localStorage.getItem('lives') == 0) {
        (0,_pages_game_over__WEBPACK_IMPORTED_MODULE_12__["default"])();
      } else {// dead.show();
      }

      livesText.t = "".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].livesTxt, " ").concat(localStorage.getItem('lives'));
      score = 0;
      player.dx = 0;
      player.y = 0;
      _get_coin__WEBPACK_IMPORTED_MODULE_6__.coinsCounter.counter = 0;
      spawnTimer = initialSpawnTimer;
      window.localStorage.setItem('highscore', highScore);
      window.localStorage.setItem('highCoins', highCoins);
    }

    o.Update();
  }

  score += 1;
  scoreText.t = "".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].scoreTxt, " ").concat(score);
  scoreText.Draw();

  if (score > highScore) {
    highScore = score;
    hightScoreText.t = "".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].bestScoreTxt, " ").concat(highScore);
  }

  if (_get_coin__WEBPACK_IMPORTED_MODULE_6__.coinsCounter.counter > highCoins) {
    highCoins = _get_coin__WEBPACK_IMPORTED_MODULE_6__.coinsCounter.counter;
    hightCoinsText.t = "".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].bestCoinsTxt, " ").concat(highCoins);
  }

  gameSpeed += 0.003;
  hightScoreText.Draw();
  hightCoinsText.Draw();
  livesText.Draw(); // spawn platform

  (0,_get_platform__WEBPACK_IMPORTED_MODULE_9__["default"])(); // spawn coin

  (0,_get_coin__WEBPACK_IMPORTED_MODULE_6__.getCoin)(); // spawn clouds

  (0,_get_clouds__WEBPACK_IMPORTED_MODULE_7__["default"])();
}



/***/ }),

/***/ "./src/text.js":
/*!*********************!*\
  !*** ./src/text.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* eslint-disable linebreak-style */


var Text = /*#__PURE__*/function () {
  function Text(t, x, y, a, c, s) {
    _classCallCheck(this, Text);

    this.t = t;
    this.x = x;
    this.y = y;
    this.a = a;
    this.c = c;
    this.s = s;
  }

  _createClass(Text, [{
    key: "Draw",
    value: function Draw() {
      _index__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();
      _index__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = this.c;
      _index__WEBPACK_IMPORTED_MODULE_0__.ctx.font = "".concat(this.s, "px sans-serif");
      _index__WEBPACK_IMPORTED_MODULE_0__.ctx.textAlign = this.a;
      _index__WEBPACK_IMPORTED_MODULE_0__.ctx.fillText(this.t, this.x, this.y);
      _index__WEBPACK_IMPORTED_MODULE_0__.ctx.closePath();
    }
  }]);

  return Text;
}();



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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUttUixDQUFuQjtNQUNBblIsaURBQUEsR0FBZ0IsS0FBS2lSLENBQXJCO01BQ0FqUixnREFBQSxDQUFhLEtBQUtnUixDQUFsQixFQUFxQixLQUFLN1EsQ0FBMUIsRUFBNkIsS0FBS0MsQ0FBbEM7TUFDQUosaURBQUE7SUFDRDs7Ozs7Ozs7Ozs7O1VDcEJIO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9QbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL2Nsb3VkLmpzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvLi9zcmMvY29pbi5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL2Z1bmN0aW9ucy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9nYW1lLXNvdW5kLmpzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvLi9zcmMvZ2V0Q29udHJvbHNUb01vYmlsZS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL2dldF9jbG91ZHMuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9nZXRfY29pbi5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL2dldF9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL2dldF9yYW5kb21faW50LmpzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvLi9zcmMvaGVyby5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvLi9zcmMvbGFuZy5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL29ic3RhY2xlLmpzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvLi9zcmMvcGFnZXMvZGVhZC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL3BhZ2VzL2dhbWUtb3Zlci5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL3BhZ2VzL2hlbHAuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9wYWdlcy9tYWluLmpzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvLi9zcmMvcGFnZXMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL3BsYXllci1zb3VuZC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL3Nub3dfZmxha2VzLmpzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvLi9zcmMvc3Bhd25fb2JzdGFjbGUuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9zdGFydF9nYW1lLmpzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvLi9zcmMvdGV4dC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybSB7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgdGhpcy54ID0gb3B0aW9ucy54O1xyXG4gICAgdGhpcy55ID0gb3B0aW9ucy55O1xyXG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xyXG4gICAgdGhpcy5mbGlnaHRBbHRpdHVkZSA9IG9wdGlvbnMuZmxpZ2h0QWx0aXR1ZGU7XHJcbiAgICB0aGlzLmdhbWVTcGVlZCA9IG9wdGlvbnMuZ2FtZVNwZWVkO1xyXG5cclxuICAgIHRoaXMuZHggPSAtdGhpcy5nYW1lU3BlZWQ7XHJcblxyXG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWFnZS5zcmMgPSBvcHRpb25zLmltYWdlU3JjO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy54ICs9IHRoaXMuZHg7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgdGhpcy54LFxyXG4gICAgICBjYW52YXMuaGVpZ2h0IC0gdGhpcy5mbGlnaHRBbHRpdHVkZSxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSAnLi9pbmRleC5qcyc7XHJcbmltcG9ydCB7IGdhbWVTcGVlZCB9IGZyb20gJy4vc3RhcnRfZ2FtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG91ZCB7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoO1xyXG4gICAgdGhpcy5zeCA9IG9wdGlvbnMuc3g7XHJcbiAgICB0aGlzLnN5ID0gb3B0aW9ucy5zeTtcclxuICAgIHRoaXMuc1dpZHRoID0gb3B0aW9ucy5zV2lkdGg7XHJcbiAgICB0aGlzLnNIZWlnaHQgPSBvcHRpb25zLnNIZWlnaHQ7XHJcbiAgICB0aGlzLmR5ID0gb3B0aW9ucy5keTtcclxuICAgIHRoaXMuZFdpZHRoID0gb3B0aW9ucy5zV2lkdGg7XHJcbiAgICB0aGlzLmRIZWlnaHQgPSBvcHRpb25zLnNIZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5keCA9IC1nYW1lU3BlZWQgLyBnYW1lU3BlZWQ7XHJcblxyXG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWFnZS5zcmMgPSBvcHRpb25zLnNyYztcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMueCArPSB0aGlzLmR4O1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgIHRoaXMuc3gsXHJcbiAgICAgIHRoaXMuc3ksXHJcbiAgICAgIHRoaXMuc1dpZHRoLFxyXG4gICAgICB0aGlzLnNIZWlnaHQsXHJcbiAgICAgIHRoaXMueCxcclxuICAgICAgdGhpcy5keSxcclxuICAgICAgdGhpcy5kV2lkdGgsXHJcbiAgICAgIHRoaXMuZEhlaWdodCxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2luIHtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICB0aGlzLnggPSBvcHRpb25zLng7XHJcbiAgICB0aGlzLnkgPSBvcHRpb25zLnk7XHJcbiAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aDtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLndpZHRoKTtcclxuXHJcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xyXG5cclxuICAgIHRoaXMudGlja3NQZXJGcmFtZSA9IG9wdGlvbnMudGlja3NQZXJGcmFtZSB8fCAwO1xyXG4gICAgdGhpcy5udW1iZXJPZkZyYW1lcyA9IG9wdGlvbnMubnVtYmVyT2ZGcmFtZXMgfHwgMTtcclxuXHJcbiAgICB0aGlzLmdhbWVTcGVlZCA9IG9wdGlvbnMuZ2FtZVNwZWVkO1xyXG5cclxuICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XHJcbiAgICB0aGlzLnRpY2tDb3VudCA9IDA7XHJcblxyXG4gICAgdGhpcy5keCA9IC10aGlzLmdhbWVTcGVlZDtcclxuXHJcbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltYWdlLnNyYyA9ICcuL2ltYWdlcy9jb2luLnBuZyc7XHJcblxyXG4gICAgdGhpcy5hdWRpb09iaiA9IG5ldyBBdWRpbygnLi9zb3VuZC9jb2luMi5tcDMnKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMueCArPSB0aGlzLmR4O1xyXG5cclxuICAgIHRoaXMudGlja0NvdW50Kys7XHJcblxyXG4gICAgaWYgKHRoaXMudGlja0NvdW50ID4gdGhpcy50aWNrc1BlckZyYW1lKSB7XHJcbiAgICAgIHRoaXMudGlja0NvdW50ID0gMDtcclxuICAgICAgaWYgKHRoaXMuZnJhbWVJbmRleCA8IHRoaXMubnVtYmVyT2ZGcmFtZXMgLSAxKSB7XHJcbiAgICAgICAgdGhpcy5mcmFtZUluZGV4ICs9IDE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5mcmFtZUluZGV4ID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgKHRoaXMuZnJhbWVJbmRleCAqIHRoaXMud2lkdGgpIC8gdGhpcy5udW1iZXJPZkZyYW1lcyxcclxuICAgICAgMCxcclxuICAgICAgdGhpcy53aWR0aCAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXHJcbiAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICB0aGlzLngsXHJcbiAgICAgIHRoaXMueSxcclxuICAgICAgdGhpcy53aWR0aCAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXHJcbiAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHBsYXlDb2luU291bmQoKSB7XHJcbiAgICB0aGlzLmF1ZGlvT2JqLnBsYXkoKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBsZXQgaW5mb3JtRm9yRGVza3RvcCA9IHtcclxuXHJcbiAgaGlnaHRTY29yZVRleHRUb3A6IDI1LFxyXG4gIGhpZ2h0U2NvcmVUZXh0TGVmdDogMjAsXHJcblxyXG4gIHNjb3JlVG9wOiA1MCxcclxuICBzY29yZUxlZnQ6IDIwLFxyXG5cclxuICBoaWdodENvaW5zVGV4dFRvcDogNzUsXHJcbiAgaGlnaHRDb2luc1RleHRMZWZ0OiAyMCxcclxuXHJcbiAgYWN0dWFsQ29pbnNUZXh0VG9wOiAxMDAsXHJcbiAgYWN0dWFsQ29pbnNUZXh0TGVmdDogMjAsXHJcblxyXG4gIGxpdmVzVGV4dFRvcDogMTI1LFxyXG4gIGxpdmVzVGV4dExlZnQ6IDIwLFxyXG59IiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU291bmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gdGhpcy51cmwgPSB3aW5kb3cuZ2FtZVN0YXRlLnNvdW5kVXJsO1xyXG4gICAgLy8gdGhpcy5udW0gPSAxO1xyXG4gICAgdGhpcy5mb25Tb3VuZCA9IG5ldyBBdWRpbygnc291bmQvZm9uMS5tcDMnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5mb25Tb3VuZCk7XHJcbiAgICB0aGlzLmZvblNvdW5kLnZvbHVtZSA9IDAuMTtcclxuICAgIHRoaXMuZGVhZFNvdW5kID0gbmV3IEF1ZGlvKCdzb3VuZC9kZWFkLm1wMycpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRlYWRTb3VuZCk7XHJcbiAgfVxyXG5cclxuICBwbGF5Rm9uKCkge1xyXG4gICAgdGhpcy5mb25Tb3VuZC5sb29wID0gdHJ1ZTtcclxuICAgIHRoaXMuZm9uU291bmQucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgc3RvcEZvbigpIHtcclxuICAgIHRoaXMuZm9uU291bmQucGF1c2UoKTtcclxuICB9XHJcblxyXG4gIHBsYXlEZWFkKCkge1xyXG4gICAgdGhpcy5kZWFkU291bmQucGxheSgpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Q29udHJvbHNUb01vYmlsZShwbGF5ZXIpIHtcclxuICBsZXQgYm9keVdpZHRoID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICBjb25zdCBpc01vYmlsZSA9IC9Nb2JpbGV8d2ViT1N8QmxhY2tCZXJyeXxJRU1vYmlsZXxNZWVHb3xtaW5pfEZlbm5lY3xXaW5kb3dzIFBob25lfEFuZHJvaWR8aVAoYWR8b2R8aG9uZSkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxuICAvLyBpZiAoYm9keVdpZHRoID49IDcwMCkgcmV0dXJuO1xyXG4gIGlmIChpc01vYmlsZSAhPT0gdHJ1ZSkgcmV0dXJuO1xyXG5cclxuXHJcbiAgbGV0IHRpbWVySWQgPSBudWxsO1xyXG4gIGxldCBzdGFydE1vdmUgPSBmYWxzZTtcclxuXHJcbiAgbGV0IGNvbnRyb2xzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250cm9sc1wiKTtcclxuICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2lyY2xlXCIpO1xyXG5cclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGhhbmRsZVRvdWNoU3RhcnQsIGZhbHNlKTtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgaGFuZGxlVG91Y2hNb3ZlLCBmYWxzZSk7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgaGFuZGxlVG91Y2hFbmQsIGZhbHNlKTtcclxuXHJcbiAgbGV0IHgxID0gbnVsbDtcclxuICBsZXQgeTEgPSBudWxsO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRyb2xzXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnQoZSkge1xyXG4gICAgbGV0IGZpcnN0VG91Y2ggPSBlLnRvdWNoZXNbMF07XHJcbiAgICB4MSA9IGZpcnN0VG91Y2guY2xpZW50WDtcclxuICAgIHkxID0gZmlyc3RUb3VjaC5jbGllbnRZO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlKGUpIHtcclxuICAgIGlmICgheDEgfHwgIXkxKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgbGV0IGZpcnN0VG91Y2ggPSBlLnRvdWNoZXNbMF07XHJcblxyXG4gICAgbGV0IHgyID0gZmlyc3RUb3VjaC5jbGllbnRYO1xyXG4gICAgbGV0IHkyID0gZmlyc3RUb3VjaC5jbGllbnRZO1xyXG5cclxuICAgIGxldCBjb250YWluZXJYID0gY29udHJvbHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueDtcclxuICAgIGxldCBjb250YWluZXJZID0gY29udHJvbHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueTtcclxuXHJcbiAgICBsZXQgZGlmZlggPSB4MiAtIGNvbnRhaW5lclg7XHJcbiAgICBsZXQgZGlmZlkgPSB5MiAtIGNvbnRhaW5lclk7XHJcblxyXG4gICAgbW92ZUNpcmNsZShkaWZmWCwgZGlmZlkpO1xyXG4gICAgcHJlcGFyZUZvclRoZU1vdmUoeDIgLSB4MSwgeTIgLSB5MSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwcmVwYXJlRm9yVGhlTW92ZSh4LCB5KSB7XHJcbiAgICBpZiAoeCA8IC0yMCAmJiAoeSA8PSAxMCAmJiB5ID49IC0yMCkgJiYgc3RhcnRNb3ZlID09PSBmYWxzZSkge1xyXG4gICAgICBzdGFydE1vdmUgPSB0cnVlO1xyXG4gICAgICBtb3ZlVG9IZXJvKFwibW92ZSBsZWZ0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYgKHggPCAtMjAgJiYgeSA8PSAtMjEgJiYgc3RhcnRNb3ZlID09PSBmYWxzZSkge1xyXG4gICAgICBzdGFydE1vdmUgPSB0cnVlO1xyXG4gICAgICBtb3ZlVG9IZXJvKFwibW92ZSBsZWZ0IGFuZCB1cFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmICgoeCA+PSAtMTkgJiYgeCA8PSAxOSkgJiYgeSA8IC0yOSAmJiBzdGFydE1vdmUgPT09IGZhbHNlKSB7XHJcbiAgICAgIHN0YXJ0TW92ZSA9IHRydWU7XHJcbiAgICAgIG1vdmVUb0hlcm8oXCJtb3ZlIHVwXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYgKCh4ID49IDIwICYmIHggPD0gNDkpICYmIHkgPCAtMjkgJiYgc3RhcnRNb3ZlID09PSBmYWxzZSkge1xyXG4gICAgICBzdGFydE1vdmUgPSB0cnVlO1xyXG4gICAgICBtb3ZlVG9IZXJvKFwibW92ZSB1cCBhbmQgcmlnaHRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAoeCA+PSAzMCAmJiAoeSA+PSAtMjAgJiYgeSA8PSAyMCkgJiYgc3RhcnRNb3ZlID09PSBmYWxzZSkge1xyXG4gICAgICBzdGFydE1vdmUgPSB0cnVlO1xyXG4gICAgICBtb3ZlVG9IZXJvKFwibW92ZSByaWdodFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVDaXJjbGUoeCwgeSkge1xyXG4gICAgaXRlbS5zdHlsZS5sZWZ0ID0geCArIFwicHhcIjtcclxuICAgIGl0ZW0uc3R5bGUudG9wID0geSArIFwicHhcIjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVUb0hlcm8obW92ZSkge1xyXG5cclxuICAgIGlmIChtb3ZlID09PSBcIm1vdmUgdXBcIikge1xyXG4gICAgICB0aW1lcklkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHBsYXllci55ID0gcGxheWVyLnkgLSA3O1xyXG4gICAgICB9LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobW92ZSA9PT0gXCJtb3ZlIHJpZ2h0XCIpIHtcclxuICAgICAgdGltZXJJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBwbGF5ZXIuZHggPSBwbGF5ZXIuZHggKz0gNDtcclxuICAgICAgfSwgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtb3ZlID09PSBcIm1vdmUgbGVmdFwiKSB7XHJcbiAgICAgIHRpbWVySWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgcGxheWVyLmR4ID0gcGxheWVyLmR4IC09IDQ7XHJcbiAgICAgICAgcGxheWVyLnN4ID0gMTAwO1xyXG4gICAgICB9LCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1vdmUgPT09IFwibW92ZSB1cCBhbmQgcmlnaHRcIikge1xyXG4gICAgICB0aW1lcklkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHBsYXllci5keCA9IHBsYXllci5keCArPSAyO1xyXG4gICAgICAgIHBsYXllci55ID0gcGxheWVyLnkgLSA3O1xyXG4gICAgICB9LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobW92ZSA9PT0gXCJtb3ZlIGxlZnQgYW5kIHVwXCIpIHtcclxuICAgICAgdGltZXJJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBwbGF5ZXIuZHggPSBwbGF5ZXIuZHggLT0gMjtcclxuICAgICAgICBwbGF5ZXIueSA9IHBsYXllci55IC0gNztcclxuICAgICAgfSwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZCgpIHtcclxuICAgIGl0ZW0uc3R5bGUgPSBcInRyYW5zaXRpb246IDAuMnNcIjtcclxuXHJcbiAgICBsZXQgc3R5bGVJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpdGVtLnN0eWxlID0gXCJcIlxyXG4gICAgICBjbGVhckludGVydmFsKHN0eWxlSWQpO1xyXG4gICAgfSwgMjAwKTtcclxuXHJcbiAgICBjbGVhckludGVydmFsKHRpbWVySWQpO1xyXG4gICAgc3RhcnRNb3ZlID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7IHNjb3JlIH0gZnJvbSAnLi9zdGFydF9nYW1lJztcclxuaW1wb3J0IENsb3VkIGZyb20gJy4vY2xvdWQnO1xyXG5pbXBvcnQgZ2V0UmFuZG9tSW50IGZyb20gJy4vZ2V0X3JhbmRvbV9pbnQnO1xyXG5cclxuY29uc3QgY2xvdWRzU2V0ID0gW1xyXG4gIHtcclxuICAgIHNyYzogJ2ltYWdlcy9jbG91ZHMucG5nJyxcclxuICAgIHN4OiAwLFxyXG4gICAgc3k6IDAsXHJcbiAgICBzV2lkdGg6IDIyMCxcclxuICAgIHNIZWlnaHQ6IDE2MCxcclxuICAgIGR5OiAxNTAsXHJcbiAgICBkV2lkdGg6IDIyMCxcclxuICAgIGRIZWlnaHQ6IDE2MCxcclxuICB9LFxyXG4gIHtcclxuICAgIHNyYzogJ2ltYWdlcy9jbG91ZHMucG5nJyxcclxuICAgIHN4OiAyNTAsXHJcbiAgICBzeTogMCxcclxuICAgIHNXaWR0aDogMjIwLFxyXG4gICAgc0hlaWdodDogMTYwLFxyXG4gICAgZHk6IDEwMCxcclxuICAgIGRXaWR0aDogMjIwLFxyXG4gICAgZEhlaWdodDogMTYwLFxyXG4gIH0sXHJcbl07XHJcblxyXG5sZXQgY2xvdWQ7XHJcbmNvbnN0IGNsb3VkcyA9IFtdO1xyXG5sZXQgcmFuZG9tO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q2xvdWRzKCkge1xyXG4gIGlmIChzY29yZSAlIDUwMCA9PT0gMCkge1xyXG4gICAgcmFuZG9tID0gY2xvdWRzU2V0W2dldFJhbmRvbUludCgwLCAyKV07XHJcbiAgICBjbG91ZCA9IG5ldyBDbG91ZChyYW5kb20pO1xyXG5cclxuICAgIGNsb3Vkcy5wdXNoKGNsb3VkKTtcclxuICB9XHJcblxyXG4gIGNsb3Vkcy5tYXAoKGNsb3VkKSA9PiB7XHJcbiAgICBjbG91ZC51cGRhdGUoKTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBzY29yZSwgcGxheWVyLCBnYW1lU3BlZWQgfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xyXG5pbXBvcnQgeyBpbmZvcm1Gb3JEZXNrdG9wIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2Z1bmN0aW9ucy5qc1wiO1xyXG5pbXBvcnQgeyBjYW52YXMgfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IENvaW4gZnJvbSAnLi9jb2luJztcclxuXHJcbmltcG9ydCBUZXh0IGZyb20gJy4vdGV4dCc7XHJcbmltcG9ydCB7IGxhbmcgfSBmcm9tICcuL2xhbmcnO1xyXG5pbXBvcnQgZ2V0UmFuZG9tSW50IGZyb20gJy4vZ2V0X3JhbmRvbV9pbnQnO1xyXG5cclxubGV0IGNvaW47XHJcbmNvbnN0IGNvaW5zID0gW107XHJcblxyXG5sZXQgY29pbnNUZXh0O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvaW5zQ291bnRlciA9IHtcclxuICBjb3VudGVyOiAwLFxyXG59O1xyXG5cclxubGV0IHJhbmRUaW1lO1xyXG5jb25zdCBhcnJDb2luUmFuZFkgPSBbMTAwLCAxNTAsIDIwMCwgMjUwXTtcclxuXHJcbmZ1bmN0aW9uIGdldENvaW4oKSB7XHJcbiAgY29pbnNUZXh0ID0gbmV3IFRleHQoXHJcbiAgICBgJHtsYW5nW2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKV0uY29pbnNUeHR9ICR7Y29pbnNDb3VudGVyLmNvdW50ZXJ9YCwgaW5mb3JtRm9yRGVza3RvcC5hY3R1YWxDb2luc1RleHRMZWZ0LCBpbmZvcm1Gb3JEZXNrdG9wLmFjdHVhbENvaW5zVGV4dFRvcCwgJ2xlZnQnLCAnIzIxMjEyMScsICcyMCcsXHJcbiAgKTtcclxuXHJcbiAgY29pbnNUZXh0LkRyYXcoKTtcclxuXHJcbiAgaWYgKHNjb3JlICUgMjAwID09PSAwKSB7XHJcbiAgICByYW5kVGltZSA9IGdldFJhbmRvbUludCgyMCwgMTAwKTtcclxuICAgIHJhbmRUaW1lICs9IDIwMDtcclxuICB9XHJcblxyXG4gIGlmIChzY29yZSAlIHJhbmRUaW1lID09PSAwKSB7XHJcbiAgICBjb2luID0gbmV3IENvaW4oe1xyXG4gICAgICB4OiBjYW52YXMud2lkdGgsXHJcbiAgICAgIHk6IGFyckNvaW5SYW5kWVtnZXRSYW5kb21JbnQoMCwgNCldLFxyXG4gICAgICB3aWR0aDogNTA0LFxyXG4gICAgICBoZWlnaHQ6IDg0LFxyXG4gICAgICBudW1iZXJPZkZyYW1lczogNixcclxuICAgICAgdGlja3NQZXJGcmFtZTogNCxcclxuICAgICAgZ2FtZVNwZWVkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29pbnMucHVzaChjb2luKTtcclxuICB9XHJcblxyXG4gIGlmIChjb2lucy5sZW5ndGggPiAwKSB7XHJcbiAgICBjb2lucy5mb3JFYWNoKChjb2luKSA9PiB7XHJcbiAgICAgIGNvaW4uc3RhcnQoKTtcclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICBwbGF5ZXIuZHggPCBjb2luLnggKyAoY29pbi53aWR0aCAvIDYpXHJcbiAgICAgICAgJiYgcGxheWVyLmR4ICsgKHBsYXllci53aWR0aCAvIDEwKSAtIDEwID4gY29pbi54XHJcbiAgICAgICAgJiYgcGxheWVyLnkgPCBjb2luLnkgKyBjb2luLmhlaWdodFxyXG4gICAgICAgICYmIHBsYXllci55ICsgcGxheWVyLmhlaWdodCA+PSBjb2luLnlcclxuICAgICAgKSB7XHJcbiAgICAgICAgY29pbi55ID0gMTAwMDA7XHJcbiAgICAgICAgY29pbi5wbGF5Q29pblNvdW5kKCk7XHJcbiAgICAgICAgY29pbnNDb3VudGVyLmNvdW50ZXIgKz0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvaW4ueCA8IC01MCkge1xyXG4gICAgICAgIGNvaW4ueSA9IDEwMDAwO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldENvaW4gfTtcclxuIiwiaW1wb3J0IHsgc2NvcmUsIHBsYXllciwgZ2FtZVNwZWVkIH0gZnJvbSAnLi9zdGFydF9nYW1lJztcclxuaW1wb3J0IHsgY2FudmFzIH0gZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCBQbGF0Zm9ybSBmcm9tICcuL1BsYXRmb3JtJztcclxuaW1wb3J0IGdldFJhbmRvbUludCBmcm9tICcuL2dldF9yYW5kb21faW50JztcclxuXHJcbmNvbnN0IGlzTW9iaWxlID0gL01vYmlsZXx3ZWJPU3xCbGFja0JlcnJ5fElFTW9iaWxlfE1lZUdvfG1pbml8RmVubmVjfFdpbmRvd3MgUGhvbmV8QW5kcm9pZHxpUChhZHxvZHxob25lKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG5sZXQgcGxhdGZvcm07XHJcbmxldCByYW5kVGltZTtcclxuY29uc3QgcGxhdGZvcm1SYW5kVGltZSA9IFsyMDAsIDIyMCwgMjUwLCAzMDBdO1xyXG5cclxuY29uc3QgcGxhdGZvcm1zID0gW107XHJcbmNvbnN0IHBsYXRmb3Jtc09wdGlvbnNGb3JEZXNrdG9wID0gW1xyXG4gIHtcclxuICAgIHNyYzogJ2ltYWdlcy9wbGF0Zm9ybWExLnBuZycsXHJcbiAgICB3aWR0aDogNDk1LFxyXG4gICAgaGVpZ2h0OiAxMTUsXHJcbiAgICBmbGlnaHRBbHRpdHVkZTogMjUwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc3JjOiAnaW1hZ2VzL3BsYXRmb3JtYTIucG5nJyxcclxuICAgIHdpZHRoOiAyODAsXHJcbiAgICBoZWlnaHQ6IDExNSxcclxuICAgIGZsaWdodEFsdGl0dWRlOiAzMDAsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHBsYXRmb3Jtc09wdGlvbnNGb3JNb2JpbGUgPSBbXHJcbiAge1xyXG4gICAgc3JjOiAnaW1hZ2VzL3BsYXRmb3JtYTFfZm9yX21vYmlsZS5wbmcnLFxyXG4gICAgd2lkdGg6IDMzMCxcclxuICAgIGhlaWdodDogNzcsXHJcbiAgICBmbGlnaHRBbHRpdHVkZTogMjUwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc3JjOiAnaW1hZ2VzL3BsYXRmb3JtYTJfZm9yX21vYmlsZS5wbmcnLFxyXG4gICAgd2lkdGg6IDE4NyxcclxuICAgIGhlaWdodDogNzcsXHJcbiAgICBmbGlnaHRBbHRpdHVkZTogMzAwLFxyXG4gIH0sXHJcbl07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBsYXRmb3JtKCkge1xyXG4gIGlmIChzY29yZSAlIDIwMCA9PT0gMCkge1xyXG4gICAgcmFuZFRpbWUgPSBwbGF0Zm9ybVJhbmRUaW1lW2dldFJhbmRvbUludCgwLCA0KV07XHJcbiAgfVxyXG5cclxuICBpZiAoc2NvcmUgJSByYW5kVGltZSA9PT0gMCkge1xyXG4gICAgbGV0IHR5cGUgPSBnZXRSYW5kb21JbnQoMCwgMik7XHJcblxyXG4gICAgaWYgKGlzTW9iaWxlID09PSB0cnVlKSB7XHJcbiAgICAgIHR5cGUgPSBwbGF0Zm9ybXNPcHRpb25zRm9yTW9iaWxlW3R5cGVdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc01vYmlsZSA9PT0gZmFsc2UpIHtcclxuICAgICAgdHlwZSA9IHBsYXRmb3Jtc09wdGlvbnNGb3JEZXNrdG9wW3R5cGVdO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXRmb3JtID0gbmV3IFBsYXRmb3JtKHtcclxuICAgICAgeDogY2FudmFzLndpZHRoLFxyXG4gICAgICB5OiBjYW52YXMuaGVpZ2h0LFxyXG4gICAgICBmbGlnaHRBbHRpdHVkZTogdHlwZS5mbGlnaHRBbHRpdHVkZSxcclxuICAgICAgd2lkdGg6IHR5cGUud2lkdGgsXHJcbiAgICAgIGhlaWdodDogdHlwZS5oZWlnaHQsIGdhbWVTcGVlZCxcclxuICAgICAgaW1hZ2VTcmM6IHR5cGUuc3JjLFxyXG4gICAgfSk7XHJcbiAgICBwbGF0Zm9ybXMucHVzaChwbGF0Zm9ybSk7XHJcbiAgfVxyXG5cclxuICBsZXQgZmxhZyA9IGZhbHNlO1xyXG5cclxuICBmb3IgKGNvbnN0IHBsYXRmb3JtIG9mIHBsYXRmb3Jtcykge1xyXG4gICAgcGxhdGZvcm0udXBkYXRlKCk7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICAocGxheWVyLmR4ID4gcGxhdGZvcm0ueCAmJiBwbGF5ZXIuZHggPCBwbGF0Zm9ybS54ICsgcGxhdGZvcm0ud2lkdGggLSA0MClcclxuICAgICAgJiYgcGxheWVyLnkgPCBjYW52YXMuaGVpZ2h0IC0gcGxhdGZvcm0uZmxpZ2h0QWx0aXR1ZGVcclxuICAgICkge1xyXG4gICAgICBwbGF5ZXIudGVzdCA9IGNhbnZhcy5oZWlnaHQgLSBwbGF0Zm9ybS5mbGlnaHRBbHRpdHVkZSArIDI7XHJcbiAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmICghZmxhZykge1xyXG4gICAgICBwbGF5ZXIudGVzdCA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgIGZsYWcgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcbiAgbWluID0gTWF0aC5jZWlsKG1pbik7XHJcbiAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XHJcbn0iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyBrZXlzIH0gZnJvbSAnLi9zdGFydF9nYW1lJztcclxuaW1wb3J0IFBsYXllclNvdW5kIGZyb20gJy4vcGxheWVyLXNvdW5kJztcclxuaW1wb3J0IHsgZGVhZCB9IGZyb20gJy4vcGFnZXMvZGVhZCc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlcm8ge1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHRoaXMuaW1hZ2UgPSBvcHRpb25zLmltYWdlO1xyXG5cclxuICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XHJcbiAgICB0aGlzLnRpY2tDb3VudCA9IDA7XHJcbiAgICB0aGlzLnRpY2tzUGVyRnJhbWUgPSBvcHRpb25zLnRpY2tzUGVyRnJhbWUgfHwgMDtcclxuICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSBvcHRpb25zLm51bWJlck9mRnJhbWVzIHx8IDE7XHJcblxyXG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuZHkgPSBvcHRpb25zLmR5IHx8IDA7XHJcbiAgICB0aGlzLmR4ID0gMDtcclxuICAgIHRoaXMuc3ggPSAwO1xyXG4gICAgdGhpcy5qdW1wRm9yY2UgPSAxNTtcclxuICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuanVtcFRpbWVyID0gMDtcclxuXHJcbiAgICB0aGlzLnkgPSBvcHRpb25zLnk7XHJcbiAgICB0aGlzLnggPSBvcHRpb25zLng7XHJcbiAgICB0aGlzLmdyYXZpdHkgPSAxO1xyXG5cclxuICAgIHRoaXMuaXNMZWZ0ID0gZmFsc2U7XHJcblxyXG4gICAgLy8gcGxhdGZvcm1cclxuICAgIHRoaXMudGVzdCA9IG9wdGlvbnMudGVzdDtcclxuXHJcbiAgICB0aGlzLnNvdW5kID0gbmV3IFBsYXllclNvdW5kKCk7XHJcblxyXG4gICAgdGhpcy5jb3VudGVyID0gMDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMudGlja0NvdW50ICs9IDE7XHJcblxyXG4gICAgaWYgKHRoaXMudGlja0NvdW50ID4gdGhpcy50aWNrc1BlckZyYW1lKSB7XHJcbiAgICAgIHRoaXMudGlja0NvdW50ID0gMDtcclxuICAgICAgaWYgKHRoaXMuZnJhbWVJbmRleCA8IHRoaXMubnVtYmVyT2ZGcmFtZXMgLSAxKSB7XHJcbiAgICAgICAgdGhpcy5mcmFtZUluZGV4ICs9IDE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5mcmFtZUluZGV4ID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgKHRoaXMuZnJhbWVJbmRleCAqIHRoaXMud2lkdGgpIC8gdGhpcy5udW1iZXJPZkZyYW1lcyxcclxuICAgICAgdGhpcy5zeCxcclxuICAgICAgdGhpcy53aWR0aCAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXHJcbiAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICB0aGlzLmR4LFxyXG4gICAgICB0aGlzLnksXHJcbiAgICAgIHRoaXMud2lkdGggLyB0aGlzLm51bWJlck9mRnJhbWVzLFxyXG4gICAgICB0aGlzLmhlaWdodCxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBncmF2aXR5R28oKSB7XHJcbiAgICB0aGlzLnkgKz0gdGhpcy5keTtcclxuXHJcbiAgICBpZiAodGhpcy55ICsgdGhpcy5oZWlnaHQgPCB0aGlzLnRlc3QpIHtcclxuICAgICAgdGhpcy5keSArPSB0aGlzLmdyYXZpdHk7XHJcbiAgICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcclxuICAgICAgaWYgKHRoaXMuZHkgPiAwKSB7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZkZyYW1lcyA9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNMZWZ0KSB7XHJcbiAgICAgICAgICB0aGlzLnN4ID0gMzAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnN4ID0gNDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5keSA9IDA7XHJcbiAgICAgIHRoaXMuZ3JvdW5kZWQgPSB0cnVlO1xyXG4gICAgICAvLyBkZWFkLmhpZGUoKTtcclxuICAgICAgdGhpcy5udW1iZXJPZkZyYW1lcyA9IDY7XHJcbiAgICAgIGlmICh0aGlzLmlzTGVmdCkge1xyXG4gICAgICAgIHRoaXMuc3ggPSAxMDA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zeCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy55ID0gdGhpcy50ZXN0IC0gdGhpcy5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtb3ZlVG9SaWdodCgpIHtcclxuICAgIGlmICh0aGlzLmR4IDwgY2FudmFzLndpZHRoIC0gMTAwKSB0aGlzLmR4ICs9IDU7XHJcbiAgICB0aGlzLnN4ID0gMDtcclxuICAgIHRoaXMuaXNMZWZ0ID0gZmFsc2U7XHJcbiAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gNjtcclxuICB9XHJcblxyXG4gIG1vdmVUb0xlZnQoKSB7XHJcbiAgICBpZiAodGhpcy5keCA+IDApIHRoaXMuZHggLT0gNTtcclxuICAgIHRoaXMuc3ggPSAxMDA7XHJcbiAgICB0aGlzLmlzTGVmdCA9IHRydWU7XHJcbiAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gNjtcclxuICB9XHJcblxyXG4gIHByZXBhcmVGb3JKdW1wKCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJwcmVwYXJlIGZvciBqdW1wXCIpO1xyXG4gICAgaWYgKHRoaXMuZ3JvdW5kZWQgJiYgdGhpcy5qdW1wVGltZXIgPT09IDApIHtcclxuICAgICAgdGhpcy5zb3VuZC5qdW1wVXAoKTtcclxuICAgICAgdGhpcy5qdW1wVGltZXIgPSAxO1xyXG4gICAgICB0aGlzLmR5ID0gLXRoaXMuanVtcEZvcmNlO1xyXG4gICAgICB0aGlzLnNvdW5kLmp1bXBEb3duKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoZXJvSnVtcCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiaGVybyBqdW1wXCIpO1xyXG4gICAgaWYgKHRoaXMuanVtcFRpbWVyID4gMCAmJiB0aGlzLmp1bXBUaW1lciA8IDE1KSB7XHJcbiAgICAgIHRoaXMuanVtcFRpbWVyICs9IDE7XHJcbiAgICAgIHRoaXMuZHkgPSAtdGhpcy5qdW1wRm9yY2UgLSAodGhpcy5qdW1wVGltZXIgLyA1MCk7XHJcbiAgICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSAxO1xyXG4gICAgICBpZiAodGhpcy5pc0xlZnQpIHtcclxuICAgICAgICB0aGlzLnN4ID0gMjAwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc3ggPSA1MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGp1bXBcclxuXHJcbiAgZ2V0UmVhZHlUb0p1bXAoYm9vbCA9IGZhbHNlKSB7XHJcblxyXG4gICAgaWYgKGtleXMuU3BhY2UgfHwga2V5cy5LZXlXIHx8IGtleXMuQXJyb3dVcCB8fCBib29sID09PSB0cnVlKSB7XHJcbiAgICAgIC8vIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImdldCByZWFkeSB0byBqdW1wXCIsIHRoaXMuY291bnRlcik7XHJcbiAgICAgIHRoaXMuanVtcCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5qdW1wVGltZXIgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKGtleXMuS2V5TSB8fCBrZXlzLkFycm93UmlnaHQpIHtcclxuICAgICAgdGhpcy5tb3ZlVG9SaWdodCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGtleXMuS2V5TiB8fCBrZXlzLkFycm93TGVmdCkge1xyXG4gICAgICB0aGlzLm1vdmVUb0xlZnQoKTtcclxuICAgIH1cclxuICAgIGlmIChrZXlzLkVzY2FwZSkge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBqdW1wKCkge1xyXG4gICAgdGhpcy5wcmVwYXJlRm9ySnVtcCgpO1xyXG4gICAgdGhpcy5oZXJvSnVtcCgpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBjb25zdCBsb29wID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICB0aGlzLmdyYXZpdHlHbygpO1xyXG4gICAgICB0aGlzLmdldFJlYWR5VG9KdW1wKCk7XHJcblxyXG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FuaW1hdGUnKSA9PT0gJ3RydWUnKSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xyXG4gICAgfTtcclxuICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcblxyXG5pbXBvcnQgbWFpbiBmcm9tICcuL3BhZ2VzL21haW4nO1xyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XHJcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FuaW1hdGUnLCAndHJ1ZScpO1xyXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGl2ZXMnLCAzKTtcclxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJykpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYW5nU2VsZWN0ZWQnLCAnZW4nKTtcclxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU3ByaXRlSW1hZ2UnKSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Nwcml0ZUltYWdlJywgJ2ltYWdlcy9zcHJpdGUyLnBuZycpO1xyXG5cclxubWFpbigpO1xyXG5cclxuZXhwb3J0IHsgY2FudmFzLCBjdHggfTtcclxuIiwiY29uc3QgbGFuZyA9IHtcclxuICBlbjoge1xyXG4gICAgc2NvcmVUeHQ6ICdTY29yZTonLFxyXG4gICAgY29pbnNUeHQ6ICdDb2luczonLFxyXG4gICAgYmVzdENvaW5zVHh0OiAnQmVzdCBjb2luczonLFxyXG4gICAgbGl2ZXNUeHQ6ICdMaXZlczonLFxyXG4gICAgYmVzdFNjb3JlVHh0OiAnQmVzdCBzY29yZTonLFxyXG4gICAgc3RhcnRHYW1lQnRuOiAnU3RhcnQgR2FtZScsXHJcbiAgICBvcHRpb25zQnRuOiAnT3B0aW9ucycsXHJcbiAgICBzZWxlY3RMbmc6ICdTZWxlY3QgbGFuZ3VhZ2U6JyxcclxuICAgIHNlbGVjdFBsYXllcjogJ1NlbGVjdCBwbGF5ZXI6JyxcclxuICAgIGdhbWVPdmVyOiAnWW91IGxvc3QuIENsaWNrIHRvIGNvbnRpbnVlLicsXHJcbiAgICBoZWxwQnRuOiAnSGVscCcsXHJcbiAgICBoZWxwVHh0MTogJ1lvdXIgbWlzc2lvbiBpcyB0byBjb2xsZWN0IGFsbCB0aGUgY29pbnMuIFRvIGRvIHRoaXMgeW91IG9ubHkgaGF2ZSBhIGNlcnRhaW4gbnVtYmVyICBvZiBsaXZlcy4gWW91IGNhbiBqdW1wLCBtb3ZlIGxlZnQgYW5kIHJpZ2h0IHdpdGhpbiBzY3JlZW4uJyxcclxuICAgIGhlbHBUeHQyOiAnS2V5Ym9hcmQgQ29udHJvbDonLFxyXG4gICAgaGVscFR4dDM6ICdXLCBTcGFjZSwgXiAtIEpVTVAnLFxyXG4gICAgaGVscFR4dDQ6ICdNLCA+IC0gTU9WRSBSSUdIVCcsXHJcbiAgICBoZWxwVHh0NTogJ04sIDwgLSBNT1ZFIExFRlQnLFxyXG4gICAgaGVscFR4dDY6ICdBIC0gTVVTSUMgT04nLFxyXG4gICAgaGVscFR4dDc6ICdRIC0gTVVTSUMgT0ZGJyxcclxuICAgIGhlbHBUeHQ4OiAnRXNjIC0gTUFJTiBNRU5VJyxcclxuICB9LFxyXG4gIHJ1OiB7XHJcbiAgICBzY29yZVR4dDogJ9Cg0LXQt9GD0LvRjNGC0LDRgjonLFxyXG4gICAgY29pbnNUeHQ6ICfQnNC+0L3QtdGC0Ys6JyxcclxuICAgIGxpdmVzVHh0OiAn0JbQuNC30L3QuDonLFxyXG4gICAgYmVzdFNjb3JlVHh0OiAn0JvRg9GH0YjQuNC5INGA0LXQt9GD0LvRjNGC0LDRgjonLFxyXG4gICAgc3RhcnRHYW1lQnRuOiAn0J3QsNGH0LDRgtGMINC40LPRgNGDJyxcclxuICAgIG9wdGlvbnNCdG46ICfQndCw0YHRgtGA0L7QudC60LgnLFxyXG4gICAgc2VsZWN0TG5nOiAn0JLRi9Cx0LXRgNC40YLQtSDRj9C30YvQujonLFxyXG4gICAgc2VsZWN0UGxheWVyOiAn0JLRi9Cx0LXRgNC40YLQtSDQuNCz0YDQvtC60LA6JyxcclxuICAgIGdhbWVPdmVyOiAn0JLRiyDQv9GA0L7QuNCz0YDQsNC70LguINCa0LvQuNC60L3QuCDRh9GC0L7QsdGLINC/0YDQvtC00L7Qu9C20LjRgtGMLicsXHJcbiAgICBoZWxwQnRuOiAn0J/QvtC80L7RidGMJyxcclxuICAgIGhlbHBUeHQxOiAn0JLQsNGI0LAg0LfQsNC00LDRh9CwINGB0L7QsdGA0LDRgtGMINCy0YHQtSDQvNC+0L3QtdGC0YsuINCU0LvRjyDRjdGC0L7Qs9C+INGDINCy0LDRgSDQtdGB0YLRjCDQvtC/0YDQtdC00LXQu9C10L3QvdC+0Lkg0LrQvtC70LjRh9C10YHRgtCy0L4g0LbQuNC30L3QtdC5LiDQktGLINC80L7QttC10YLQtSDQv9GA0YvQs9Cw0YLRjCwg0LjQtNGC0Lgg0LLQu9C10LLQviDQuCDQstC/0YDQsNCy0L4g0LIg0L/RgNC10LTQtdC70LDRhSDRjdC60YDQsNC90LAuJyxcclxuICAgIGhlbHBUeHQyOiAn0JrQu9Cw0LLQuNGI0Lgg0YPQv9GA0LDQstC70LXQvdC40Y86JyxcclxuICAgIGhlbHBUeHQzOiAnVywgU3BhY2UsIF4gLSDQn9GA0YvQttC+0LonLFxyXG4gICAgaGVscFR4dDQ6ICdNLCA+IC0g0JjQtNGC0Lgg0LLQv9GA0LDQstC+JyxcclxuICAgIGhlbHBUeHQ1OiAnTiwgPCAtINCY0LTRgtC4INCy0LvQtdCy0L4nLFxyXG4gICAgaGVscFR4dDY6ICdBIC0g0JLQutC70Y7Rh9C40YLRjCDQvNGD0LfRi9C60YMnLFxyXG4gICAgaGVscFR4dDc6ICdRIC0g0JLRi9C60LvRjtGH0LjRgtGMINC80YPQt9GL0LrRgycsXHJcbiAgICBoZWxwVHh0ODogJ0VzYyAtINCT0LvQsNCy0L3QvtC1INC80LXQvdGOJyxcclxuICB9LFxyXG4gIGJyOiB7XHJcbiAgICBzY29yZVR4dDogJ9CS0YvQvdGW0Lo6JyxcclxuICAgIGNvaW5zVHh0OiAn0JzQsNC90LXRgtGLOicsXHJcbiAgICBsaXZlc1R4dDogJ9CW0YvRhtGG0Y86JyxcclxuICAgIGJlc3RTY29yZVR4dDogJ9Cb0LXQv9GI0Ysg0LLRi9C90ZbQujonLFxyXG4gICAgc3RhcnRHYW1lQnRuOiAn0J/QsNGH0LDRgtGMINGW0LPRgNGDJyxcclxuICAgIG9wdGlvbnNCdG46ICfQntC/0YbRi9GWJyxcclxuICAgIHNlbGVjdExuZzogJ9CS0YvQsdC10YDRi9GG0LUg0LzQvtCy0YM6JyxcclxuICAgIHNlbGVjdFBsYXllcjogJ9CS0YvQsdC10YDRi9GG0LUg0L/QtdGA0YHQsNC90LDQttCwOicsXHJcbiAgICBnYW1lT3ZlcjogJ9CS0Ysg0L/RgNCw0LnQs9GA0LDQu9GWLiDQmtC70ZbQutC90ZYg0LrQsNCxINC/0YDQsNGG0Y/Qs9C90YPRhtGMLicsXHJcbiAgICBoZWxwQnRuOiAn0JTQsNC/0LDQvNC+0LPQsCcsXHJcbiAgICBoZWxwVHh0MTogJ9CS0LDRiNCwINC30LDQtNCw0YfQsCDRgdCw0LHRgNCw0YbRjCDRg9GB0LUg0LzQsNC90LXRgtGLLiDQlNC70Y8g0LPRjdGC0LDQs9CwINGeINCy0LDRgSDRkdGB0YbRjCDQv9GN0Z7QvdCw0Lkg0LrQvtC70YzQutCw0YHRhtGMINC20YvRhtGG0Y/Rni4g0JLRiyDQvNC+0LbQsNGG0LUg0YHQutCw0LrQsNGG0YwsINGW0YHRhtGWINC90LDQu9C10LLQsCDRliDQvdCw0L/RgNCw0LLQsCDRniDQvNC10LbQsNGFINGN0LrRgNCw0L3QsC4nLFxyXG4gICAgaGVscFR4dDI6ICfQmtC70LDQstGW0YjRiyDQutGW0YDQsNCy0LDQvdC90Y86JyxcclxuICAgIGhlbHBUeHQzOiAnVywgU3BhY2UsIF4gLSDQn9GA0YvQttC+0LonLFxyXG4gICAgaGVscFR4dDQ6ICdNLCA+IC0gSdGB0YbRliDQvdCw0LvQtdCy0LAnLFxyXG4gICAgaGVscFR4dDU6ICdOLCA8IC0gSdGB0YbRliDQvdCw0L/RgNCw0LLQsCcsXHJcbiAgICBoZWxwVHh0NjogJ0EgLSDQo9C60LvRjtGH0YvRhtGMINC80YPQt9GL0LrRgycsXHJcbiAgICBoZWxwVHh0NzogJ1EgLSDQktGL0LrQu9GO0YfRi9GG0Ywg0LzRg9C30YvQutGDJyxcclxuICAgIGhlbHBUeHQ4OiAnRXNjIC0g0JPQsNC70L7RntC90LDQtSDQvNC10L3RjicsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB7IGxhbmcgfTtcclxuIiwiaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tICcuL2luZGV4LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic3RhY2xlIHtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICB0aGlzLnggPSBvcHRpb25zLng7XHJcbiAgICB0aGlzLnkgPSBvcHRpb25zLnk7XHJcbiAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XHJcbiAgICB0aGlzLmdhbWVTcGVlZCA9IG9wdGlvbnMuZ2FtZVNwZWVkO1xyXG5cclxuICAgIHRoaXMuZHggPSAtdGhpcy5nYW1lU3BlZWQ7XHJcblxyXG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWFnZS5zcmMgPSBvcHRpb25zLmltYWdlU3JjO1xyXG4gIH1cclxuXHJcbiAgVXBkYXRlKCkge1xyXG4gICAgdGhpcy54ICs9IHRoaXMuZHg7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgdGhpcy54LFxyXG4gICAgICBjYW52YXMuaGVpZ2h0IC0gNTUsXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuaW1wb3J0IHsgbGFuZyB9IGZyb20gJy4uL2xhbmcnO1xyXG5pbXBvcnQgeyBzdGFydCB9IGZyb20gJy4uL3N0YXJ0X2dhbWUnO1xyXG5cclxuY29uc3QgZGVhZCA9IHtcclxuICBzaG93KCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FuaW1hdGUnLCAnZmFsc2UnKTtcclxuICAgIGNvbnN0IGxnID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpO1xyXG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJykgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwYWdlLmNsYXNzTGlzdC5hZGQoJ3ppbmRleCcpO1xyXG4gICAgcGFnZS5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImhlbHAtdHh0LXdyYXBwZXJcIj5cclxu0JLRiyDQv9C+0YLQtdGA0Y/Qu9C4INC20LjQt9C90YwuXHJcbjxicj7QmtC70LjQutC90Lgg0YfRgtC+0LHRiyDQv9GA0L7QtNC+0LvQttC40YLRjC5cclxuICA8L2Rpdj5cclxuICBgO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHBhZ2UpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYW5pbWF0ZScsICd0cnVlJyk7XHJcbiAgICAgIHN0YXJ0KCk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGhpZGUoKSB7XHJcbiAgICBjb25zdCBwYWdlMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJyk7XHJcbiAgICBwYWdlMS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IHsgZGVhZCB9O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuaW1wb3J0IHsgbGFuZyB9IGZyb20gJy4uL2xhbmcnO1xyXG5pbXBvcnQgeyBjYW52YXMgfSBmcm9tICcuLi9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lT3ZlcigpIHtcclxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNhbnZhcyk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250cm9sc1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FuaW1hdGUnLCAnZmFsc2UnKTtcclxuICBjb25zdCBsZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKTtcclxuICBjb25zdCBwYWdlV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLXdyYXBwZXInKTtcclxuICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2UnLCAnZ2FtZS1vdmVyLWltYWdlJyk7XHJcbiAgcGFnZS5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiZ2FtZS1vdmVyXCI+XHJcbiAgICAke2xhbmdbbGddLmdhbWVPdmVyfVxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIHBhZ2VXcmFwcGVyLmFwcGVuZENoaWxkKHBhZ2UpO1xyXG4gIHBhZ2VXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH0pO1xyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5pbXBvcnQgeyBjYW52YXMgfSBmcm9tICcuLi9pbmRleCc7XHJcbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSAnLi4vc3RhcnRfZ2FtZSc7XHJcbmltcG9ydCB7IGxhbmcgfSBmcm9tICcuLi9sYW5nJztcclxuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlbHAoKSB7XHJcbiAgY2FudmFzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIGNvbnN0IGxnID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpO1xyXG4gIGNvbnN0IHBhZ2VXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2Utd3JhcHBlcicpO1xyXG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZScpIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZScsICdwYWdlLWltYWdlJyk7XHJcbiAgcGFnZS5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImhlbHAtdHh0LXdyYXBwZXJcIj5cclxuICAke2xhbmdbbGddLmhlbHBUeHQxfVxyXG4gIDxwPiR7bGFuZ1tsZ10uaGVscFR4dDJ9PC9wPlxyXG4gICR7bGFuZ1tsZ10uaGVscFR4dDN9XHJcbiAgPGJyPiR7bGFuZ1tsZ10uaGVscFR4dDR9XHJcbiAgPGJyPiR7bGFuZ1tsZ10uaGVscFR4dDV9XHJcbiAgPGJyPiR7bGFuZ1tsZ10uaGVscFR4dDZ9XHJcbiAgPGJyPiR7bGFuZ1tsZ10uaGVscFR4dDd9XHJcbiAgPGJyPiR7bGFuZ1tsZ10uaGVscFR4dDh9XHJcbiAgPC9kaXY+XHJcbiAgPGEgY2xhc3M9XCJidG5mbGlwIHN0YXJ0LWhlbHAgc3RhcnRcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj4ke2xhbmdbbGddLnN0YXJ0R2FtZUJ0bn08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19jZW50ZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19iYWNrXCI+JHtsYW5nW2xnXS5zdGFydEdhbWVCdG59PC9zcGFuPlxyXG4gIDwvYT5cclxuICBcclxuICA8YSBjbGFzcz1cImJ0bmZsaXAgb3B0aW9ucy1oZWxwIG9wdGlvbnNcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj4ke2xhbmdbbGddLm9wdGlvbnNCdG59PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fY2VudGVyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPiR7bGFuZ1tsZ10ub3B0aW9uc0J0bn08L3NwYW4+XHJcbiAgPC9hPlxyXG4gIGA7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcclxuICAgIHBhZ2VXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICBjYW52YXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICBzdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgcGFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQocGFnZSk7XHJcbiAgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcclxuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucycpO1xyXG4gIG9wdGlvbnNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBvcHRpb25zKCk7XHJcbiAgfSk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmltcG9ydCB7IGNhbnZhcyB9IGZyb20gJy4uL2luZGV4JztcclxuaW1wb3J0IHsgc3RhcnQgfSBmcm9tICcuLi9zdGFydF9nYW1lJztcclxuaW1wb3J0IGhlbHAgZnJvbSAnLi9oZWxwJztcclxuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcclxuaW1wb3J0IHsgbGFuZyB9IGZyb20gJy4uL2xhbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbigpIHtcclxuICBjYW52YXMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgY29uc3QgbGcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyk7XHJcbiAgY29uc3QgcGFnZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS13cmFwcGVyJyk7XHJcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJykgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlJyk7XHJcbiAgcGFnZS5pbm5lckhUTUwgPSBgXHJcblxyXG4gICAgPGltZyBjbGFzcz1cInBhZ2UtaW1hZ2VcIiBzcmM9XCIuL2ltZy9mb24uanBnXCIgYWx0PVwiYmxhZGUtcnVubmVyXCIgLz5cclxuICAgIDxhIGNsYXNzPVwiYnRuZmxpcCBzdGFydC1tYWluIHN0YXJ0XCIgaHJlZj1cIiNcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj4ke2xhbmdbbGddLnN0YXJ0R2FtZUJ0bn08L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2NlbnRlclwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPiR7bGFuZ1tsZ10uc3RhcnRHYW1lQnRufTwvc3Bhbj5cclxuICAgIDwvYT5cclxuXHJcbiAgICA8YSBjbGFzcz1cImJ0bmZsaXAgb3B0aW9ucy1tYWluIG9wdGlvbnNcIiBocmVmPVwiI1wiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19mcm9udFwiPiR7bGFuZ1tsZ10ub3B0aW9uc0J0bn08L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2NlbnRlclwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPiR7bGFuZ1tsZ10ub3B0aW9uc0J0bn08L3NwYW4+XHJcbiAgICA8L2E+XHJcblxyXG4gICAgPGEgY2xhc3M9XCJidG5mbGlwIGhlbHAtbWFpbiBoZWxwXCIgaHJlZj1cIiNcIj4gIFxyXG4gICAgICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19mcm9udFwiPiR7bGFuZ1tsZ10uaGVscEJ0bn08L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2NlbnRlclwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPiR7bGFuZ1tsZ10uaGVscEJ0bn08L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgICBcclxuICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlci1hdXRob3JzXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9TZXJnUnVkb3ZpY2hcIiB0YXJnZXQ9XCJibGFua1wiPlNlcmdleSBSdWRvdmljaDwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2NvbnNlcnZhdGl2MDA3XCIgdGFyZ2V0PVwiYmxhbmtcIj5jb25zZXJ2YXRpdjAwNzwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcnMuc2Nob29sL2pzL1wiIHRhcmdldD1cImJsYW5rXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3JzLnNjaG9vbC9pbWFnZXMvcnNfc2Nob29sX2pzLnN2Z1wiIGFsdD1cIlJTIFNjaG9vbFwiIHN0eWxlPVwid2lkdGg6IDUwcHhcIj48L2E+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmb290ZXJfX3llYXJcIj7CqSAyMDIxPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPC9mb290ZXI+XHJcbiAgYDtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xyXG4gICAgcGFnZVdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBwYWdlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIGNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIHN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBwYWdlV3JhcHBlci5hcHBlbmRDaGlsZChwYWdlKTtcclxuICBwYWdlV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHJcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcclxuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XHJcblxyXG4gIGNvbnN0IGhlbHBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVscCcpO1xyXG4gIGhlbHBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBoZWxwKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucycpO1xyXG4gIG9wdGlvbnNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBvcHRpb25zKCk7XHJcbiAgfSk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmltcG9ydCB7IGNhbnZhcyB9IGZyb20gJy4uL2luZGV4JztcclxuaW1wb3J0IHsgc3RhcnQgfSBmcm9tICcuLi9zdGFydF9nYW1lJztcclxuaW1wb3J0IGhlbHAgZnJvbSAnLi9oZWxwJztcclxuaW1wb3J0IHsgbGFuZyB9IGZyb20gJy4uL2xhbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3B0aW9ucygpIHtcclxuICBjYW52YXMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgY29uc3QgbGcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyk7XHJcbiAgY29uc3QgcGFnZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS13cmFwcGVyJyk7XHJcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJykgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlJywgJ3BhZ2UtaW1hZ2UnKTtcclxuICBwYWdlLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiaGVscC10eHQtd3JhcHBlclwiPlxyXG4gIDxwIGNsYXNzPVwibWVudUl0ZW1cIiBpZD0nbWVudUZpZWxkU2l6ZSc+XHJcbiAgPGxhYmVsPiR7bGFuZ1tsZ10uc2VsZWN0TG5nfTwvbGFiZWw+XHJcbiAgPHNlbGVjdCBpZD1cInNlbGVjdExhbmdcIj5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImVuXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPmVuZ2xpc2g8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cInJ1XCI+0YDRg9GB0YHQutC40Lk8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImJyXCI+0LHQtdC70LDRgNGD0YHQutCw0Y88L29wdGlvbj5cclxuICA8L3NlbGVjdD5cclxuICA8L3A+XHJcbiAgPGJyPjxwPiR7bGFuZ1tsZ10uc2VsZWN0UGxheWVyfTwvcD5cclxuICA8YnI+XHJcbiAgPGltZyBzcmM9XCJpbWcvc3ByaXRlMl9pY29uLnBuZ1wiIGNsYXNzPVwicGxheWVyMlwiIGFsdD1cInBsYXllcjJcIj5cclxuICA8aW1nIHNyYz1cImltZy9zcHJpdGUxX2ljb24ucG5nXCIgY2xhc3M9XCJwbGF5ZXIxXCIgYWx0PVwicGxheWVyMVwiPlxyXG4gIDwvZGl2PlxyXG4gIDxhIGNsYXNzPVwiYnRuZmxpcCBzdGFydC1oZWxwIHN0YXJ0XCIgaHJlZj1cIiNcIj5cclxuICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19mcm9udFwiPiR7bGFuZ1tsZ10uc3RhcnRHYW1lQnRufTwvc3Bhbj5cclxuICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19jZW50ZXJcIj48L3NwYW4+XHJcbiAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPiR7bGFuZ1tsZ10uc3RhcnRHYW1lQnRufTwvc3Bhbj5cclxuPC9hPlxyXG5cclxuPGEgY2xhc3M9XCJidG5mbGlwIG9wdGlvbnMtaGVscCBoZWxwXCIgaHJlZj1cIiNcIj5cclxuICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19mcm9udFwiPiR7bGFuZ1tsZ10uaGVscEJ0bn08L3NwYW4+XHJcbiAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fY2VudGVyXCI+PC9zcGFuPlxyXG4gIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2JhY2tcIj4ke2xhbmdbbGddLmhlbHBCdG59PC9zcGFuPlxyXG48L2E+XHJcbiAgYDtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0TGFuZyA+IG9wdGlvbltzZWxlY3RlZF0nKS5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NlbGVjdExhbmcgPiBvcHRpb25bdmFsdWU9JHtsZ31dYCkuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XHJcbiAgICBwYWdlV3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxuICAgIHBhZ2VXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIC8vINCy0YvQsdC+0YAg0Y/Qt9GL0LrQsFxyXG4gIHBhZ2VXcmFwcGVyLmFwcGVuZENoaWxkKHBhZ2UpO1xyXG4gIHBhZ2VXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0Jyk7XHJcbiAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xyXG5cclxuICBjb25zdCBoZWxwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlbHAnKTtcclxuICBoZWxwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaGVscCgpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBzZWxlY3RMYW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdExhbmcnKTtcclxuICBzZWxlY3RMYW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYW5nU2VsZWN0ZWQnLCBzZWxlY3RMYW5nLnZhbHVlKTtcclxuICAgIG9wdGlvbnMoKTtcclxuICB9KTtcclxuXHJcbiAgLy8g0LLRi9Cx0L7RgCDQuNCz0YDQvtC60LBcclxuICBjb25zdCBwbGF5ZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjEnKTtcclxuICBjb25zdCBwbGF5ZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjInKTtcclxuICBjb25zdCBwbGF5ZXJTZWxlY3RlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdTcHJpdGVJbWFnZScpO1xyXG4gIGlmIChwbGF5ZXJTZWxlY3RlZCA9PT0gJ2ltYWdlcy9zcHJpdGUyLnBuZycpIHtcclxuICAgIHBsYXllcjIuY2xhc3NMaXN0LmFkZCgncGxheWVyLWljb24tc2VsZWN0ZWQnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcGxheWVyMS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItaWNvbi1zZWxlY3RlZCcpO1xyXG4gIH1cclxuICBwbGF5ZXIxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Nwcml0ZUltYWdlJywgJ2ltYWdlcy9zcHJpdGUxLnBuZycpO1xyXG4gICAgcGxheWVyMS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItaWNvbi1zZWxlY3RlZCcpO1xyXG4gICAgcGxheWVyMi5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5ZXItaWNvbi1zZWxlY3RlZCcpO1xyXG4gICAgb3B0aW9ucygpO1xyXG4gIH0pO1xyXG4gIHBsYXllcjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnU3ByaXRlSW1hZ2UnLCAnaW1hZ2VzL3Nwcml0ZTIucG5nJyk7XHJcbiAgICBwbGF5ZXIyLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1pY29uLXNlbGVjdGVkJyk7XHJcbiAgICBwbGF5ZXIxLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXllci1pY29uLXNlbGVjdGVkJyk7XHJcbiAgICBvcHRpb25zKCk7XHJcbiAgfSk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJTb3VuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyB0aGlzLnVybCA9IHdpbmRvdy5nYW1lU3RhdGUuc291bmRVcmw7XHJcbiAgICB0aGlzLnNvdW5kVXAgPSBuZXcgQXVkaW8oJ3NvdW5kL2p1bXBVcC5tcDMnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zb3VuZFVwKTtcclxuICAgIHRoaXMuc291bmREb3duID0gbmV3IEF1ZGlvKCdzb3VuZC9ncmF2aXR5RG93bi5tcDMnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zb3VuZERvd24pO1xyXG4gICAgdGhpcy5pc0dyYXZpdHlEb3duID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzSnVtcFVwID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBqdW1wVXAoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNKdW1wVXApIHtcclxuICAgICAgdGhpcy5zb3VuZFVwLnBsYXkoKTtcclxuICAgICAgdGhpcy5pc0p1bXBVcCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBqdW1wRG93bigpIHtcclxuICAgIHRoaXMuc291bmRVcC5wYXVzZSgpO1xyXG4gICAgdGhpcy5zb3VuZFVwLmN1cnJlbnRUaW1lID0gMC4wO1xyXG4gICAgdGhpcy5pc0p1bXBVcCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ3Jhdml0eURvd24oKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNHcmF2aXR5RG93bikge1xyXG4gICAgICB0aGlzLnNvdW5kRG93bi5wbGF5KCk7XHJcbiAgICAgIHRoaXMuaXNHcmF2aXR5RG93biA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBncmF2aXR5VXAoKSB7XHJcbiAgICB0aGlzLnNvdW5kRG93bi5wYXVzZSgpO1xyXG4gICAgdGhpcy5zb3VuZERvd24uY3VycmVudFRpbWUgPSAwLjA7XHJcbiAgICB0aGlzLmlzR3Jhdml0eURvd24gPSBmYWxzZTtcclxuICB9XHJcbn1cclxuIiwiY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUnKTtcclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG5jb25zdCBwYXJ0aWNsZXNPblNjcmVlbiA9IDI0NTtcclxubGV0IHc7XHJcbmxldCBoO1xyXG5jb25zdCBwYXJ0aWNsZXNBcnJheSA9IFtdO1xyXG5cclxuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbncgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbmZ1bmN0aW9uIHJhbmRvbShtaW4sIG1heCkge1xyXG4gIHJldHVybiBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGllbnRSZXNpemUoZXYpIHtcclxuICB3ID0gY2FudmFzLndpZHRoO1xyXG4gIGggPSBjYW52YXMuaGVpZ2h0O1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY2xpZW50UmVzaXplKTtcclxuXHJcbi8vIGNyZWF0ZVNub3dGbGFrZXMoKTtcclxuZnVuY3Rpb24gY3JlYXRlU25vd0ZsYWtlcygpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRpY2xlc09uU2NyZWVuOyBpKyspIHtcclxuICAgIHBhcnRpY2xlc0FycmF5LnB1c2goe1xyXG4gICAgICB4OiBNYXRoLnJhbmRvbSgpICogdyxcclxuICAgICAgeTogTWF0aC5yYW5kb20oKSAqIGgsXHJcbiAgICAgIG9wYWNpdHk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgIHNwZWVkWDogcmFuZG9tKC0xLCAxKSxcclxuICAgICAgc3BlZWRZOiByYW5kb20oMSwgMiksXHJcbiAgICAgIHJhZGl1czogcmFuZG9tKDAuNSwgNC4yKSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd1Nub3dGbGFrZXMoKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZXNBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgZ3JhZGllbnQgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoXHJcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLngsXHJcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLnksXHJcbiAgICAgIDAsXHJcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLngsXHJcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLnksXHJcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLnJhZGl1cyxcclxuICAgICk7XHJcblxyXG4gICAgLy8gZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDMwLCAxNDQsIDI1NSwgJHtwYXJ0aWNsZXNBcnJheVtpXS5vcGFjaXR5fSlgICk7XHJcbiAgICAvLyBncmFkaWVudC5hZGRDb2xvclN0b3AoMC44LCBgcmdiYSgxMDAsIDE0OSwgMjM3LCAke3BhcnRpY2xlc0FycmF5W2ldLm9wYWNpdHl9KWAgKTtcclxuICAgIC8vIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBgcmdiYSg2NSwgMTA1LCAyMjUsICR7cGFydGljbGVzQXJyYXlbaV0ub3BhY2l0eX0pYCApO1xyXG5cclxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBgcmdiYSgyNTUsIDI1NSwgMjU1LCR7cGFydGljbGVzQXJyYXlbaV0ub3BhY2l0eX0pYCk7IC8vIHdoaXRlXHJcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMC44LCBgcmdiYSgyMTAsIDIzNiwgMjQyLCR7cGFydGljbGVzQXJyYXlbaV0ub3BhY2l0eX0pYCk7IC8vIGJsdWlzaFxyXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKDIzNywgMjQ3LCAyNDksJHtwYXJ0aWNsZXNBcnJheVtpXS5vcGFjaXR5fSlgKTtcclxuXHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKFxyXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS54LFxyXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS55LFxyXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS5yYWRpdXMsXHJcbiAgICAgIDAsXHJcbiAgICAgIE1hdGguUEkgKiAyLFxyXG4gICAgICBmYWxzZSxcclxuICAgICk7XHJcblxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG4gICAgY3R4LmZpbGwoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdmVTbm93Rmxha2VzKCkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydGljbGVzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgIHBhcnRpY2xlc0FycmF5W2ldLnggKz0gcGFydGljbGVzQXJyYXlbaV0uc3BlZWRYO1xyXG4gICAgcGFydGljbGVzQXJyYXlbaV0ueSArPSBwYXJ0aWNsZXNBcnJheVtpXS5zcGVlZFk7XHJcblxyXG4gICAgaWYgKHBhcnRpY2xlc0FycmF5W2ldLnkgPiBoKSB7XHJcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLnggPSBNYXRoLnJhbmRvbSgpICogdyAqIDEuNTtcclxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueSA9IC01MDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVNub3dGYWxsKCkge1xyXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XHJcbiAgZHJhd1Nub3dGbGFrZXMoKTtcclxuICBtb3ZlU25vd0ZsYWtlcygpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVTbm93Rmxha2VzLCB1cGRhdGVTbm93RmFsbCB9O1xyXG4iLCJpbXBvcnQgT2JzdGFjbGUgZnJvbSAnLi9vYnN0YWNsZSc7XHJcbmltcG9ydCB7IGNhbnZhcyB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyBnYW1lU3BlZWQsIG9ic3RhY2xlcyB9IGZyb20gJy4vc3RhcnRfZ2FtZSc7XHJcblxyXG5mdW5jdGlvbiBTcGF3bk9ic3RhY2xlKCkge1xyXG4gIC8vIGxldCBzaXplID0gUmFuZG9tSW50UmFuZ2UoMjAsIDcwKTtcclxuICBjb25zdCB0eXBlID0gUmFuZG9tSW50UmFuZ2UoMywgNCk7XHJcblxyXG4gIGNvbnN0IG9ic3RhY2xlID0gbmV3IE9ic3RhY2xlKHtcclxuICAgIHg6IGNhbnZhcy53aWR0aCxcclxuICAgIHk6IGNhbnZhcy5oZWlnaHQsXHJcbiAgICB3aWR0aDogNTAsXHJcbiAgICBoZWlnaHQ6IDUwLFxyXG4gICAgZ2FtZVNwZWVkLFxyXG4gICAgaW1hZ2VTcmM6IGBpbWFnZXMvb2JzdGFjbGUke3R5cGV9LnBuZ2AsXHJcbiAgfSk7XHJcblxyXG4gIG9ic3RhY2xlcy5wdXNoKG9ic3RhY2xlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUmFuZG9tSW50UmFuZ2UobWluLCBtYXgpIHtcclxuICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xyXG59XHJcblxyXG5leHBvcnQgeyBTcGF3bk9ic3RhY2xlIH07XHJcbiIsImltcG9ydCBIZXJvIGZyb20gJy4vaGVybyc7XHJcbmltcG9ydCBUZXh0IGZyb20gJy4vdGV4dCc7XHJcbmltcG9ydCB7IFNwYXduT2JzdGFjbGUgfSBmcm9tICcuL3NwYXduX29ic3RhY2xlJztcclxuaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IHsgY3JlYXRlU25vd0ZsYWtlcywgdXBkYXRlU25vd0ZhbGwgfSBmcm9tICcuL3Nub3dfZmxha2VzJztcclxuaW1wb3J0IEdhbWVTb3VuZCBmcm9tICcuL2dhbWUtc291bmQnO1xyXG5pbXBvcnQgeyBnZXRDb2luLCBjb2luc0NvdW50ZXIgfSBmcm9tICcuL2dldF9jb2luJztcclxuaW1wb3J0IGdldENsb3VkcyBmcm9tICcuL2dldF9jbG91ZHMnO1xyXG5pbXBvcnQgeyBsYW5nIH0gZnJvbSAnLi9sYW5nJztcclxuaW1wb3J0IGdldFBsYXRmb3JtIGZyb20gJy4vZ2V0X3BsYXRmb3JtJztcclxuaW1wb3J0IG1haW4gZnJvbSAnLi9wYWdlcy9tYWluJztcclxuaW1wb3J0IHsgZGVhZCB9IGZyb20gJy4vcGFnZXMvZGVhZCc7XHJcbmltcG9ydCBnYW1lT3ZlciBmcm9tICcuL3BhZ2VzL2dhbWUtb3Zlcic7XHJcblxyXG5pbXBvcnQgeyBpbmZvcm1Gb3JEZXNrdG9wIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2Z1bmN0aW9ucy5qc1wiO1xyXG5pbXBvcnQgeyBnZXRDb250cm9sc1RvTW9iaWxlIH0gZnJvbSAnLi9nZXRDb250cm9sc1RvTW9iaWxlLmpzJztcclxuXHJcbi8vIGxldCdzIG1ha2UgdGhlIGdhbWUgbWF4IHdpZHRoXHJcblxyXG5sZXQgc2NvcmU7XHJcbmxldCBoaWdoU2NvcmU7XHJcblxyXG5sZXQgaGlnaENvaW5zO1xyXG5sZXQgaGlnaHRDb2luc1RleHQ7XHJcblxyXG5sZXQgc2NvcmVUZXh0O1xyXG5sZXQgaGlnaHRTY29yZVRleHQ7XHJcblxyXG5sZXQgbGl2ZXNUZXh0O1xyXG5sZXQgZ2FtZVNwZWVkO1xyXG5sZXQgcGxheWVyO1xyXG5sZXQgb2JzdGFjbGVzID0gW107XHJcbmNvbnN0IGNvaW5zID0gW107XHJcblxyXG5jb25zdCBrZXlzID0ge307XHJcbmxldCBoZXJvSW1hZ2U7XHJcbmNvbnN0IHBsYXlTb3VuZCA9IG5ldyBHYW1lU291bmQoKTtcclxuXHJcbmZ1bmN0aW9uIHN0YXJ0KCkge1xyXG5cclxuICBsZXQgd2l0aE9mR2FtZSA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcblxyXG4gIGNhbnZhcy53aWR0aCA9IHdpdGhPZkdhbWU7XHJcbiAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDIwNTtcclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcbiAgICBrZXlzW2UuY29kZV0gPSB0cnVlO1xyXG4gIH0pO1xyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XHJcbiAgICBrZXlzW2UuY29kZV0gPSBmYWxzZTtcclxuICB9KTtcclxuXHJcbiAgY3R4LmZvbnQgPSAnMjBweCBzYW5zLXNlcmlmJztcclxuXHJcbiAgZ2FtZVNwZWVkID0gMztcclxuICBzY29yZSA9IDA7XHJcbiAgaGlnaFNjb3JlID0gMDtcclxuICBoaWdoQ29pbnMgPSAwO1xyXG5cclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hzY29yZScpKSB7XHJcbiAgICBoaWdoU2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaHNjb3JlJyk7XHJcbiAgfVxyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaENvaW5zJykpIHtcclxuICAgIGhpZ2hDb2lucyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaWdoQ29pbnMnKTtcclxuICB9XHJcblxyXG4gIGhlcm9JbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGhlcm9JbWFnZS5zcmMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU3ByaXRlSW1hZ2UnKTtcclxuXHJcbiAgcGxheWVyID0gbmV3IEhlcm8oe1xyXG4gICAgaW1hZ2U6IGhlcm9JbWFnZSxcclxuICAgIHdpZHRoOiA2MDAsXHJcbiAgICBoZWlnaHQ6IDEwMCxcclxuICAgIG51bWJlck9mRnJhbWVzOiA2LFxyXG4gICAgdGlja3NQZXJGcmFtZTogNCxcclxuICAgIHg6IDUwLFxyXG4gICAgeTogNTAsXHJcbiAgICB0ZXN0OiBjYW52YXMuaGVpZ2h0LFxyXG4gIH0pO1xyXG5cclxuICBwbGF5ZXIuc3RhcnQoKTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2cocGxheWVyKVxyXG5cclxuICBzY29yZVRleHQgPSBuZXcgVGV4dChcclxuICAgIGAke2xhbmdbbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpXS5zY29yZVR4dH0gJHtzY29yZX1gLCBpbmZvcm1Gb3JEZXNrdG9wLnNjb3JlTGVmdCwgaW5mb3JtRm9yRGVza3RvcC5zY29yZVRvcCwgJ2xlZnQnLCAnIzIxMjEyMScsICcyMCcsXHJcbiAgKTtcclxuICBsaXZlc1RleHQgPSBuZXcgVGV4dChcclxuICAgIGAke2xhbmdbbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpXS5saXZlc1R4dH0gJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGl2ZXMnKX1gLCBpbmZvcm1Gb3JEZXNrdG9wLmxpdmVzVGV4dExlZnQsIGluZm9ybUZvckRlc2t0b3AubGl2ZXNUZXh0VG9wLCAnbGVmdCcsICcjMjEyMTIxJywgJzIwJyxcclxuICApO1xyXG4gIGhpZ2h0U2NvcmVUZXh0ID0gbmV3IFRleHQoXHJcbiAgICBgJHtsYW5nW2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKV0uYmVzdFNjb3JlVHh0fSAke2hpZ2hTY29yZX1gLCBpbmZvcm1Gb3JEZXNrdG9wLmhpZ2h0U2NvcmVUZXh0TGVmdCwgaW5mb3JtRm9yRGVza3RvcC5oaWdodFNjb3JlVGV4dFRvcCwgJ2xlZnQnLCAnIzIxMjEyMScsICcyMCcsXHJcbiAgKTtcclxuICBoaWdodENvaW5zVGV4dCA9IG5ldyBUZXh0KFxyXG4gICAgYCR7bGFuZ1tsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyldLmJlc3RDb2luc1R4dH0gJHtoaWdoQ29pbnN9YCwgaW5mb3JtRm9yRGVza3RvcC5oaWdodENvaW5zVGV4dExlZnQsIGluZm9ybUZvckRlc2t0b3AuaGlnaHRDb2luc1RleHRUb3AsICdsZWZ0JywgJyMyMTIxMjEnLCAnMjAnLFxyXG4gICk7XHJcblxyXG5cclxuXHJcbiAgY3JlYXRlU25vd0ZsYWtlcygpO1xyXG4gIC8vIHBsYXlTb3VuZC5wbGF5Rm9uKCk7XHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKFVwZGF0ZSk7XHJcblxyXG4gIC8vIGdldCBtb2JpbGUgY29udHJvbHNcclxuICBnZXRDb250cm9sc1RvTW9iaWxlKHBsYXllcik7XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTcGF3blRpbWVyID0gMjAwO1xyXG5sZXQgc3Bhd25UaW1lciA9IGluaXRpYWxTcGF3blRpbWVyO1xyXG5cclxuZnVuY3Rpb24gVXBkYXRlKCkge1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW5pbWF0ZScpID09PSAndHJ1ZScpIHJlcXVlc3RBbmltYXRpb25GcmFtZShVcGRhdGUpO1xyXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgLy8g0LLRi9C60LvRjtGH0LjRgtGMINGE0L7QvdC+0LLRg9GOINC80YPQt9GL0LrRg1xyXG4gIGlmIChrZXlzLktleVEpIHtcclxuICAgIHBsYXlTb3VuZC5zdG9wRm9uKCk7XHJcbiAgfVxyXG5cclxuICAvLyDQstC60LvRjtGH0LjRgtGMINGE0L7QvdC+0LLRg9GOINC80YPQt9GL0LrRg1xyXG4gIGlmIChrZXlzLktleUEpIHtcclxuICAgIHBsYXlTb3VuZC5wbGF5Rm9uKCk7XHJcbiAgfVxyXG5cclxuICAvLyBzcGF3biBvYnN0YWNsZXNcclxuICBzcGF3blRpbWVyIC09IDE7XHJcbiAgaWYgKHNwYXduVGltZXIgPD0gMCkge1xyXG4gICAgU3Bhd25PYnN0YWNsZSgpO1xyXG4gICAgc3Bhd25UaW1lciA9IGluaXRpYWxTcGF3blRpbWVyIC0gZ2FtZVNwZWVkICogODtcclxuXHJcbiAgICBpZiAoc3Bhd25UaW1lciA8IDYwKSB7XHJcbiAgICAgIHNwYXduVGltZXIgPSA2MDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVNub3dGYWxsKCk7XHJcblxyXG4gIC8vIHNwYXduIGVuZW1pZXNcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9ic3RhY2xlcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgbyA9IG9ic3RhY2xlc1tpXTtcclxuXHJcbiAgICBpZiAoby54ICsgby53aWR0aCA8IDApIHtcclxuICAgICAgb2JzdGFjbGVzLnNwbGljZShpLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQv9C10YDQtdC30LDQs9GA0YPQt9C60LAg0LjQs9GA0Ysg0L/RgNC4INGB0YLQvtC70LrQvdC+0LLQtdC90LjQuFxyXG4gICAgaWYgKFxyXG4gICAgICBwbGF5ZXIuZHggPCBvLnggKyBvLndpZHRoXHJcbiAgICAgICYmIHBsYXllci5keCArIChwbGF5ZXIud2lkdGggLyAxMCkgLSAxMCA+IG8ueFxyXG4gICAgICAmJiBwbGF5ZXIueSA8IG8ueSArIG8uaGVpZ2h0XHJcbiAgICAgICYmIHBsYXllci55ICsgcGxheWVyLmhlaWdodCA+PSBvLnlcclxuICAgICkge1xyXG4gICAgICBwbGF5U291bmQucGxheURlYWQoKTtcclxuICAgICAgb2JzdGFjbGVzID0gW107XHJcbiAgICAgIGdhbWVTcGVlZCA9IDM7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXZlcycsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXZlcycpIC0gMSk7XHJcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGl2ZXMnKSA9PSAwKSB7XHJcbiAgICAgICAgZ2FtZU92ZXIoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBkZWFkLnNob3coKTtcclxuICAgICAgfVxyXG4gICAgICBsaXZlc1RleHQudCA9IGAke2xhbmdbbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpXS5saXZlc1R4dH0gJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGl2ZXMnKX1gO1xyXG4gICAgICBzY29yZSA9IDA7XHJcbiAgICAgIHBsYXllci5keCA9IDA7XHJcbiAgICAgIHBsYXllci55ID0gMDtcclxuICAgICAgY29pbnNDb3VudGVyLmNvdW50ZXIgPSAwO1xyXG4gICAgICBzcGF3blRpbWVyID0gaW5pdGlhbFNwYXduVGltZXI7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlnaHNjb3JlJywgaGlnaFNjb3JlKTtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaWdoQ29pbnMnLCBoaWdoQ29pbnMpO1xyXG4gICAgfVxyXG4gICAgby5VcGRhdGUoKTtcclxuICB9XHJcblxyXG4gIHNjb3JlICs9IDE7XHJcbiAgc2NvcmVUZXh0LnQgPSBgJHtsYW5nW2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKV0uc2NvcmVUeHR9ICR7c2NvcmV9YDtcclxuXHJcbiAgc2NvcmVUZXh0LkRyYXcoKTtcclxuXHJcbiAgaWYgKHNjb3JlID4gaGlnaFNjb3JlKSB7XHJcbiAgICBoaWdoU2NvcmUgPSBzY29yZTtcclxuICAgIGhpZ2h0U2NvcmVUZXh0LnQgPSBgJHtsYW5nW2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKV0uYmVzdFNjb3JlVHh0fSAke2hpZ2hTY29yZX1gO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvaW5zQ291bnRlci5jb3VudGVyID4gaGlnaENvaW5zKSB7XHJcbiAgICBoaWdoQ29pbnMgPSBjb2luc0NvdW50ZXIuY291bnRlcjtcclxuICAgIGhpZ2h0Q29pbnNUZXh0LnQgPSBgJHtsYW5nW2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKV0uYmVzdENvaW5zVHh0fSAke2hpZ2hDb2luc31gO1xyXG4gIH1cclxuXHJcbiAgZ2FtZVNwZWVkICs9IDAuMDAzO1xyXG4gIGhpZ2h0U2NvcmVUZXh0LkRyYXcoKTtcclxuICBoaWdodENvaW5zVGV4dC5EcmF3KCk7XHJcbiAgbGl2ZXNUZXh0LkRyYXcoKTtcclxuXHJcbiAgLy8gc3Bhd24gcGxhdGZvcm1cclxuICBnZXRQbGF0Zm9ybSgpO1xyXG5cclxuICAvLyBzcGF3biBjb2luXHJcbiAgZ2V0Q29pbigpO1xyXG5cclxuICAvLyBzcGF3biBjbG91ZHNcclxuICBnZXRDbG91ZHMoKTtcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIHN0YXJ0LCBVcGRhdGUsIGdhbWVTcGVlZCwgb2JzdGFjbGVzLCBrZXlzLCBzY29yZSwgcGxheWVyLCBjb2lucyxcclxufTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmltcG9ydCB7IGN0eCB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCB7XHJcbiAgY29uc3RydWN0b3IodCwgeCwgeSwgYSwgYywgcykge1xyXG4gICAgdGhpcy50ID0gdDtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5hID0gYTtcclxuICAgIHRoaXMuYyA9IGM7XHJcbiAgICB0aGlzLnMgPSBzO1xyXG4gIH1cclxuXHJcbiAgRHJhdygpIHtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmM7XHJcbiAgICBjdHguZm9udCA9IGAke3RoaXMuc31weCBzYW5zLXNlcmlmYDtcclxuICAgIGN0eC50ZXh0QWxpZ24gPSB0aGlzLmE7XHJcbiAgICBjdHguZmlsbFRleHQodGhpcy50LCB0aGlzLngsIHRoaXMueSk7XHJcbiAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOlsiY2FudmFzIiwiY3R4IiwiUGxhdGZvcm0iLCJvcHRpb25zIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImZsaWdodEFsdGl0dWRlIiwiZ2FtZVNwZWVkIiwiZHgiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiaW1hZ2VTcmMiLCJyZW5kZXIiLCJkcmF3SW1hZ2UiLCJDbG91ZCIsInN4Iiwic3kiLCJzV2lkdGgiLCJzSGVpZ2h0IiwiZHkiLCJkV2lkdGgiLCJkSGVpZ2h0IiwiQ29pbiIsInRpY2tzUGVyRnJhbWUiLCJudW1iZXJPZkZyYW1lcyIsImZyYW1lSW5kZXgiLCJ0aWNrQ291bnQiLCJhdWRpb09iaiIsIkF1ZGlvIiwicGxheSIsInVwZGF0ZSIsImluZm9ybUZvckRlc2t0b3AiLCJoaWdodFNjb3JlVGV4dFRvcCIsImhpZ2h0U2NvcmVUZXh0TGVmdCIsInNjb3JlVG9wIiwic2NvcmVMZWZ0IiwiaGlnaHRDb2luc1RleHRUb3AiLCJoaWdodENvaW5zVGV4dExlZnQiLCJhY3R1YWxDb2luc1RleHRUb3AiLCJhY3R1YWxDb2luc1RleHRMZWZ0IiwibGl2ZXNUZXh0VG9wIiwibGl2ZXNUZXh0TGVmdCIsIkdhbWVTb3VuZCIsImZvblNvdW5kIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ2b2x1bWUiLCJkZWFkU291bmQiLCJsb29wIiwicGF1c2UiLCJnZXRDb250cm9sc1RvTW9iaWxlIiwicGxheWVyIiwiYm9keVdpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaXNNb2JpbGUiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidGltZXJJZCIsInN0YXJ0TW92ZSIsImNvbnRyb2xzIiwicXVlcnlTZWxlY3RvciIsIml0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlVG91Y2hTdGFydCIsImhhbmRsZVRvdWNoTW92ZSIsImhhbmRsZVRvdWNoRW5kIiwieDEiLCJ5MSIsInN0eWxlIiwiZGlzcGxheSIsImUiLCJmaXJzdFRvdWNoIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwieDIiLCJ5MiIsImNvbnRhaW5lclgiLCJjb250YWluZXJZIiwiZGlmZlgiLCJkaWZmWSIsIm1vdmVDaXJjbGUiLCJwcmVwYXJlRm9yVGhlTW92ZSIsIm1vdmVUb0hlcm8iLCJsZWZ0IiwidG9wIiwibW92ZSIsInNldEludGVydmFsIiwic3R5bGVJZCIsInNldFRpbWVvdXQiLCJjbGVhckludGVydmFsIiwic2NvcmUiLCJnZXRSYW5kb21JbnQiLCJjbG91ZHNTZXQiLCJjbG91ZCIsImNsb3VkcyIsInJhbmRvbSIsImdldENsb3VkcyIsInB1c2giLCJtYXAiLCJUZXh0IiwibGFuZyIsImNvaW4iLCJjb2lucyIsImNvaW5zVGV4dCIsImNvaW5zQ291bnRlciIsImNvdW50ZXIiLCJyYW5kVGltZSIsImFyckNvaW5SYW5kWSIsImdldENvaW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29pbnNUeHQiLCJEcmF3IiwibGVuZ3RoIiwiZm9yRWFjaCIsInN0YXJ0IiwicGxheUNvaW5Tb3VuZCIsInBsYXRmb3JtIiwicGxhdGZvcm1SYW5kVGltZSIsInBsYXRmb3JtcyIsInBsYXRmb3Jtc09wdGlvbnNGb3JEZXNrdG9wIiwicGxhdGZvcm1zT3B0aW9uc0Zvck1vYmlsZSIsImdldFBsYXRmb3JtIiwidHlwZSIsImZsYWciLCJtaW4iLCJtYXgiLCJNYXRoIiwiY2VpbCIsImZsb29yIiwia2V5cyIsIlBsYXllclNvdW5kIiwiZGVhZCIsIkhlcm8iLCJqdW1wRm9yY2UiLCJncm91bmRlZCIsImp1bXBUaW1lciIsImdyYXZpdHkiLCJpc0xlZnQiLCJzb3VuZCIsImp1bXBVcCIsImp1bXBEb3duIiwiYm9vbCIsIlNwYWNlIiwiS2V5VyIsIkFycm93VXAiLCJqdW1wIiwiS2V5TSIsIkFycm93UmlnaHQiLCJtb3ZlVG9SaWdodCIsIktleU4iLCJBcnJvd0xlZnQiLCJtb3ZlVG9MZWZ0IiwiRXNjYXBlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJwcmVwYXJlRm9ySnVtcCIsImhlcm9KdW1wIiwiZ3Jhdml0eUdvIiwiZ2V0UmVhZHlUb0p1bXAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvbmxvYWQiLCJtYWluIiwiZ2V0Q29udGV4dCIsInNldEl0ZW0iLCJlbiIsInNjb3JlVHh0IiwiYmVzdENvaW5zVHh0IiwibGl2ZXNUeHQiLCJiZXN0U2NvcmVUeHQiLCJzdGFydEdhbWVCdG4iLCJvcHRpb25zQnRuIiwic2VsZWN0TG5nIiwic2VsZWN0UGxheWVyIiwiZ2FtZU92ZXIiLCJoZWxwQnRuIiwiaGVscFR4dDEiLCJoZWxwVHh0MiIsImhlbHBUeHQzIiwiaGVscFR4dDQiLCJoZWxwVHh0NSIsImhlbHBUeHQ2IiwiaGVscFR4dDciLCJoZWxwVHh0OCIsInJ1IiwiYnIiLCJPYnN0YWNsZSIsInNob3ciLCJsZyIsInBhZ2UiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwicmVtb3ZlQ2hpbGQiLCJoaWRlIiwicGFnZTEiLCJwYWdlV3JhcHBlciIsInJlbW92ZSIsImhlbHAiLCJzdGFydEdhbWUiLCJzdGFydEJ0biIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInNlbGVjdExhbmciLCJ2YWx1ZSIsInBsYXllcjEiLCJwbGF5ZXIyIiwicGxheWVyU2VsZWN0ZWQiLCJzb3VuZFVwIiwic291bmREb3duIiwiaXNHcmF2aXR5RG93biIsImlzSnVtcFVwIiwiY3VycmVudFRpbWUiLCJwYXJ0aWNsZXNPblNjcmVlbiIsInciLCJoIiwicGFydGljbGVzQXJyYXkiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJjbGllbnRSZXNpemUiLCJldiIsImNyZWF0ZVNub3dGbGFrZXMiLCJpIiwib3BhY2l0eSIsInNwZWVkWCIsInNwZWVkWSIsInJhZGl1cyIsImRyYXdTbm93Rmxha2VzIiwiZ3JhZGllbnQiLCJjcmVhdGVSYWRpYWxHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwiZmlsbFN0eWxlIiwiZmlsbCIsIm1vdmVTbm93Rmxha2VzIiwidXBkYXRlU25vd0ZhbGwiLCJjbGVhclJlY3QiLCJvYnN0YWNsZXMiLCJTcGF3bk9ic3RhY2xlIiwiUmFuZG9tSW50UmFuZ2UiLCJvYnN0YWNsZSIsInJvdW5kIiwiaGlnaFNjb3JlIiwiaGlnaENvaW5zIiwiaGlnaHRDb2luc1RleHQiLCJzY29yZVRleHQiLCJoaWdodFNjb3JlVGV4dCIsImxpdmVzVGV4dCIsImhlcm9JbWFnZSIsInBsYXlTb3VuZCIsIndpdGhPZkdhbWUiLCJjb2RlIiwiZm9udCIsIlVwZGF0ZSIsImluaXRpYWxTcGF3blRpbWVyIiwic3Bhd25UaW1lciIsIktleVEiLCJzdG9wRm9uIiwiS2V5QSIsInBsYXlGb24iLCJvIiwic3BsaWNlIiwicGxheURlYWQiLCJ0IiwiYSIsImMiLCJzIiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJjbG9zZVBhdGgiXSwic291cmNlUm9vdCI6IiJ9