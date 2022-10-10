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
  if (bodyWidth >= 700) return;
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
var coinY;
var randTime;
var randY = [{
  y: 350
}, {
  y: 600
}, {
  y: 300
}];

function getCoin() {
  coinsText = new _text__WEBPACK_IMPORTED_MODULE_4__["default"]("".concat(_lang__WEBPACK_IMPORTED_MODULE_5__.lang[localStorage.getItem('langSelected')].coinsTxt, " ").concat(coinsCounter.counter), _functions_functions_js__WEBPACK_IMPORTED_MODULE_1__.informForDesktop.actualCoinsTextLeft, _functions_functions_js__WEBPACK_IMPORTED_MODULE_1__.informForDesktop.actualCoinsTextTop, 'left', '#212121', '20');
  coinsText.Draw();

  if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % 200 === 0) {
    randTime = (0,_get_random_int__WEBPACK_IMPORTED_MODULE_6__["default"])(20, 100);
    randTime += 200;
    coinY = randY[(0,_get_random_int__WEBPACK_IMPORTED_MODULE_6__["default"])(0, 3)];
  }

  if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % randTime === 0) {
    coin = new _coin__WEBPACK_IMPORTED_MODULE_3__["default"]({
      x: _index__WEBPACK_IMPORTED_MODULE_2__.canvas.width,
      y: coinY.y,
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





var platform;
var randTime;
var platformRandTime = [200, 220, 250, 300];
var platforms = [];
var platformsOptions = [{
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
function getPlatform() {
  if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % 200 === 0) {
    randTime = platformRandTime[(0,_get_random_int__WEBPACK_IMPORTED_MODULE_3__["default"])(0, 4)];
  }

  if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % randTime === 0) {
    var type = (0,_get_random_int__WEBPACK_IMPORTED_MODULE_3__["default"])(0, 2);
    type = platformsOptions[type];
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
localStorage.setItem('lives', 333);
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
  gameSpeed = 3; // lives = 3;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxDQXlGaEI7O0VBQ0FiLHVEQUFTO0FBR1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN01EO0FBQ0E7O0lBRXFCRztFQUNuQixjQUFZeUssQ0FBWixFQUFlMVEsQ0FBZixFQUFrQkMsQ0FBbEIsRUFBcUIwUSxDQUFyQixFQUF3QkMsQ0FBeEIsRUFBMkJDLENBQTNCLEVBQThCO0lBQUE7O0lBQzVCLEtBQUtILENBQUwsR0FBU0EsQ0FBVDtJQUNBLEtBQUsxUSxDQUFMLEdBQVNBLENBQVQ7SUFDQSxLQUFLQyxDQUFMLEdBQVNBLENBQVQ7SUFDQSxLQUFLMFEsQ0FBTCxHQUFTQSxDQUFUO0lBQ0EsS0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0lBQ0EsS0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0VBQ0Q7Ozs7V0FFRCxnQkFBTztNQUNMaFIsaURBQUE7TUFDQUEsaURBQUEsR0FBZ0IsS0FBSytRLENBQXJCO01BQ0EvUSw0Q0FBQSxhQUFjLEtBQUtnUixDQUFuQjtNQUNBaFIsaURBQUEsR0FBZ0IsS0FBSzhRLENBQXJCO01BQ0E5USxnREFBQSxDQUFhLEtBQUs2USxDQUFsQixFQUFxQixLQUFLMVEsQ0FBMUIsRUFBNkIsS0FBS0MsQ0FBbEM7TUFDQUosaURBQUE7SUFDRDs7Ozs7Ozs7Ozs7O1VDcEJIO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9QbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL2Nsb3VkLmpzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvLi9zcmMvY29pbi5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL2Z1bmN0aW9ucy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9nYW1lLXNvdW5kLmpzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvLi9zcmMvZ2V0Q29udHJvbHNUb01vYmlsZS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL2dldF9jbG91ZHMuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9nZXRfY29pbi5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL2dldF9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL2dldF9yYW5kb21faW50LmpzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvLi9zcmMvaGVyby5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvLi9zcmMvbGFuZy5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL29ic3RhY2xlLmpzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvLi9zcmMvcGFnZXMvZGVhZC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL3BhZ2VzL2dhbWUtb3Zlci5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL3BhZ2VzL2hlbHAuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9wYWdlcy9tYWluLmpzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvLi9zcmMvcGFnZXMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL3BsYXllci1zb3VuZC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL3Nub3dfZmxha2VzLmpzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvLi9zcmMvc3Bhd25fb2JzdGFjbGUuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9zdGFydF9nYW1lLmpzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvLi9zcmMvdGV4dC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybSB7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgdGhpcy54ID0gb3B0aW9ucy54O1xyXG4gICAgdGhpcy55ID0gb3B0aW9ucy55O1xyXG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xyXG4gICAgdGhpcy5mbGlnaHRBbHRpdHVkZSA9IG9wdGlvbnMuZmxpZ2h0QWx0aXR1ZGU7XHJcbiAgICB0aGlzLmdhbWVTcGVlZCA9IG9wdGlvbnMuZ2FtZVNwZWVkO1xyXG5cclxuICAgIHRoaXMuZHggPSAtdGhpcy5nYW1lU3BlZWQ7XHJcblxyXG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWFnZS5zcmMgPSBvcHRpb25zLmltYWdlU3JjO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy54ICs9IHRoaXMuZHg7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgdGhpcy54LFxyXG4gICAgICBjYW52YXMuaGVpZ2h0IC0gdGhpcy5mbGlnaHRBbHRpdHVkZSxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSAnLi9pbmRleC5qcyc7XHJcbmltcG9ydCB7IGdhbWVTcGVlZCB9IGZyb20gJy4vc3RhcnRfZ2FtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG91ZCB7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoO1xyXG4gICAgdGhpcy5zeCA9IG9wdGlvbnMuc3g7XHJcbiAgICB0aGlzLnN5ID0gb3B0aW9ucy5zeTtcclxuICAgIHRoaXMuc1dpZHRoID0gb3B0aW9ucy5zV2lkdGg7XHJcbiAgICB0aGlzLnNIZWlnaHQgPSBvcHRpb25zLnNIZWlnaHQ7XHJcbiAgICB0aGlzLmR5ID0gb3B0aW9ucy5keTtcclxuICAgIHRoaXMuZFdpZHRoID0gb3B0aW9ucy5zV2lkdGg7XHJcbiAgICB0aGlzLmRIZWlnaHQgPSBvcHRpb25zLnNIZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5keCA9IC1nYW1lU3BlZWQgLyBnYW1lU3BlZWQ7XHJcblxyXG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWFnZS5zcmMgPSBvcHRpb25zLnNyYztcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMueCArPSB0aGlzLmR4O1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgIHRoaXMuc3gsXHJcbiAgICAgIHRoaXMuc3ksXHJcbiAgICAgIHRoaXMuc1dpZHRoLFxyXG4gICAgICB0aGlzLnNIZWlnaHQsXHJcbiAgICAgIHRoaXMueCxcclxuICAgICAgdGhpcy5keSxcclxuICAgICAgdGhpcy5kV2lkdGgsXHJcbiAgICAgIHRoaXMuZEhlaWdodCxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2luIHtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICB0aGlzLnggPSBvcHRpb25zLng7XHJcbiAgICB0aGlzLnkgPSBvcHRpb25zLnk7XHJcbiAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aDtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLndpZHRoKTtcclxuXHJcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xyXG5cclxuICAgIHRoaXMudGlja3NQZXJGcmFtZSA9IG9wdGlvbnMudGlja3NQZXJGcmFtZSB8fCAwO1xyXG4gICAgdGhpcy5udW1iZXJPZkZyYW1lcyA9IG9wdGlvbnMubnVtYmVyT2ZGcmFtZXMgfHwgMTtcclxuXHJcbiAgICB0aGlzLmdhbWVTcGVlZCA9IG9wdGlvbnMuZ2FtZVNwZWVkO1xyXG5cclxuICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XHJcbiAgICB0aGlzLnRpY2tDb3VudCA9IDA7XHJcblxyXG4gICAgdGhpcy5keCA9IC10aGlzLmdhbWVTcGVlZDtcclxuXHJcbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltYWdlLnNyYyA9ICcuL2ltYWdlcy9jb2luLnBuZyc7XHJcblxyXG4gICAgdGhpcy5hdWRpb09iaiA9IG5ldyBBdWRpbygnLi9zb3VuZC9jb2luMi5tcDMnKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMueCArPSB0aGlzLmR4O1xyXG5cclxuICAgIHRoaXMudGlja0NvdW50Kys7XHJcblxyXG4gICAgaWYgKHRoaXMudGlja0NvdW50ID4gdGhpcy50aWNrc1BlckZyYW1lKSB7XHJcbiAgICAgIHRoaXMudGlja0NvdW50ID0gMDtcclxuICAgICAgaWYgKHRoaXMuZnJhbWVJbmRleCA8IHRoaXMubnVtYmVyT2ZGcmFtZXMgLSAxKSB7XHJcbiAgICAgICAgdGhpcy5mcmFtZUluZGV4ICs9IDE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5mcmFtZUluZGV4ID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgKHRoaXMuZnJhbWVJbmRleCAqIHRoaXMud2lkdGgpIC8gdGhpcy5udW1iZXJPZkZyYW1lcyxcclxuICAgICAgMCxcclxuICAgICAgdGhpcy53aWR0aCAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXHJcbiAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICB0aGlzLngsXHJcbiAgICAgIHRoaXMueSxcclxuICAgICAgdGhpcy53aWR0aCAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXHJcbiAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHBsYXlDb2luU291bmQoKSB7XHJcbiAgICB0aGlzLmF1ZGlvT2JqLnBsYXkoKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBsZXQgaW5mb3JtRm9yRGVza3RvcCA9IHtcclxuXHJcbiAgaGlnaHRTY29yZVRleHRUb3A6IDI1LFxyXG4gIGhpZ2h0U2NvcmVUZXh0TGVmdDogMjAsXHJcblxyXG4gIHNjb3JlVG9wOiA1MCxcclxuICBzY29yZUxlZnQ6IDIwLFxyXG5cclxuICBoaWdodENvaW5zVGV4dFRvcDogNzUsXHJcbiAgaGlnaHRDb2luc1RleHRMZWZ0OiAyMCxcclxuXHJcbiAgYWN0dWFsQ29pbnNUZXh0VG9wOiAxMDAsXHJcbiAgYWN0dWFsQ29pbnNUZXh0TGVmdDogMjAsXHJcblxyXG4gIGxpdmVzVGV4dFRvcDogMTI1LFxyXG4gIGxpdmVzVGV4dExlZnQ6IDIwLFxyXG59IiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU291bmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gdGhpcy51cmwgPSB3aW5kb3cuZ2FtZVN0YXRlLnNvdW5kVXJsO1xyXG4gICAgLy8gdGhpcy5udW0gPSAxO1xyXG4gICAgdGhpcy5mb25Tb3VuZCA9IG5ldyBBdWRpbygnc291bmQvZm9uMS5tcDMnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5mb25Tb3VuZCk7XHJcbiAgICB0aGlzLmZvblNvdW5kLnZvbHVtZSA9IDAuMTtcclxuICAgIHRoaXMuZGVhZFNvdW5kID0gbmV3IEF1ZGlvKCdzb3VuZC9kZWFkLm1wMycpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRlYWRTb3VuZCk7XHJcbiAgfVxyXG5cclxuICBwbGF5Rm9uKCkge1xyXG4gICAgdGhpcy5mb25Tb3VuZC5sb29wID0gdHJ1ZTtcclxuICAgIHRoaXMuZm9uU291bmQucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgc3RvcEZvbigpIHtcclxuICAgIHRoaXMuZm9uU291bmQucGF1c2UoKTtcclxuICB9XHJcblxyXG4gIHBsYXlEZWFkKCkge1xyXG4gICAgdGhpcy5kZWFkU291bmQucGxheSgpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Q29udHJvbHNUb01vYmlsZShwbGF5ZXIpIHtcclxuICBsZXQgYm9keVdpZHRoID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICBpZiAoYm9keVdpZHRoID49IDcwMCkgcmV0dXJuO1xyXG5cclxuICBsZXQgdGltZXJJZCA9IG51bGw7XHJcbiAgbGV0IHN0YXJ0TW92ZSA9IGZhbHNlO1xyXG5cclxuICBsZXQgY29udHJvbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRyb2xzXCIpO1xyXG4gIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXJjbGVcIik7XHJcblxyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgaGFuZGxlVG91Y2hTdGFydCwgZmFsc2UpO1xyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBoYW5kbGVUb3VjaE1vdmUsIGZhbHNlKTtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBoYW5kbGVUb3VjaEVuZCwgZmFsc2UpO1xyXG5cclxuICBsZXQgeDEgPSBudWxsO1xyXG4gIGxldCB5MSA9IG51bGw7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udHJvbHNcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydChlKSB7XHJcbiAgICBsZXQgZmlyc3RUb3VjaCA9IGUudG91Y2hlc1swXTtcclxuICAgIHgxID0gZmlyc3RUb3VjaC5jbGllbnRYO1xyXG4gICAgeTEgPSBmaXJzdFRvdWNoLmNsaWVudFk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoZSkge1xyXG4gICAgaWYgKCF4MSB8fCAheTEpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBsZXQgZmlyc3RUb3VjaCA9IGUudG91Y2hlc1swXTtcclxuXHJcbiAgICBsZXQgeDIgPSBmaXJzdFRvdWNoLmNsaWVudFg7XHJcbiAgICBsZXQgeTIgPSBmaXJzdFRvdWNoLmNsaWVudFk7XHJcblxyXG4gICAgbGV0IGNvbnRhaW5lclggPSBjb250cm9scy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54O1xyXG4gICAgbGV0IGNvbnRhaW5lclkgPSBjb250cm9scy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55O1xyXG5cclxuICAgIGxldCBkaWZmWCA9IHgyIC0gY29udGFpbmVyWDtcclxuICAgIGxldCBkaWZmWSA9IHkyIC0gY29udGFpbmVyWTtcclxuXHJcbiAgICBtb3ZlQ2lyY2xlKGRpZmZYLCBkaWZmWSk7XHJcbiAgICBwcmVwYXJlRm9yVGhlTW92ZSh4MiAtIHgxLCB5MiAtIHkxKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHByZXBhcmVGb3JUaGVNb3ZlKHgsIHkpIHtcclxuICAgIGlmICh4IDwgLTIwICYmICh5IDw9IDEwICYmIHkgPj0gLTIwKSAmJiBzdGFydE1vdmUgPT09IGZhbHNlKSB7XHJcbiAgICAgIHN0YXJ0TW92ZSA9IHRydWU7XHJcbiAgICAgIG1vdmVUb0hlcm8oXCJtb3ZlIGxlZnRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAoeCA8IC0yMCAmJiB5IDw9IC0yMSAmJiBzdGFydE1vdmUgPT09IGZhbHNlKSB7XHJcbiAgICAgIHN0YXJ0TW92ZSA9IHRydWU7XHJcbiAgICAgIG1vdmVUb0hlcm8oXCJtb3ZlIGxlZnQgYW5kIHVwXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYgKCh4ID49IC0xOSAmJiB4IDw9IDE5KSAmJiB5IDwgLTI5ICYmIHN0YXJ0TW92ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgc3RhcnRNb3ZlID0gdHJ1ZTtcclxuICAgICAgbW92ZVRvSGVybyhcIm1vdmUgdXBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAoKHggPj0gMjAgJiYgeCA8PSA0OSkgJiYgeSA8IC0yOSAmJiBzdGFydE1vdmUgPT09IGZhbHNlKSB7XHJcbiAgICAgIHN0YXJ0TW92ZSA9IHRydWU7XHJcbiAgICAgIG1vdmVUb0hlcm8oXCJtb3ZlIHVwIGFuZCByaWdodFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmICh4ID49IDMwICYmICh5ID49IC0yMCAmJiB5IDw9IDIwKSAmJiBzdGFydE1vdmUgPT09IGZhbHNlKSB7XHJcbiAgICAgIHN0YXJ0TW92ZSA9IHRydWU7XHJcbiAgICAgIG1vdmVUb0hlcm8oXCJtb3ZlIHJpZ2h0XCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZUNpcmNsZSh4LCB5KSB7XHJcbiAgICBpdGVtLnN0eWxlLmxlZnQgPSB4ICsgXCJweFwiO1xyXG4gICAgaXRlbS5zdHlsZS50b3AgPSB5ICsgXCJweFwiO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZVRvSGVybyhtb3ZlKSB7XHJcblxyXG4gICAgaWYgKG1vdmUgPT09IFwibW92ZSB1cFwiKSB7XHJcbiAgICAgIHRpbWVySWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgcGxheWVyLnkgPSBwbGF5ZXIueSAtIDc7XHJcbiAgICAgIH0sIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtb3ZlID09PSBcIm1vdmUgcmlnaHRcIikge1xyXG4gICAgICB0aW1lcklkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHBsYXllci5keCA9IHBsYXllci5keCArPSA0O1xyXG4gICAgICB9LCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1vdmUgPT09IFwibW92ZSBsZWZ0XCIpIHtcclxuICAgICAgdGltZXJJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBwbGF5ZXIuZHggPSBwbGF5ZXIuZHggLT0gNDtcclxuICAgICAgICBwbGF5ZXIuc3ggPSAxMDA7XHJcbiAgICAgIH0sIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobW92ZSA9PT0gXCJtb3ZlIHVwIGFuZCByaWdodFwiKSB7XHJcbiAgICAgIHRpbWVySWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgcGxheWVyLmR4ID0gcGxheWVyLmR4ICs9IDI7XHJcbiAgICAgICAgcGxheWVyLnkgPSBwbGF5ZXIueSAtIDc7XHJcbiAgICAgIH0sIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtb3ZlID09PSBcIm1vdmUgbGVmdCBhbmQgdXBcIikge1xyXG4gICAgICB0aW1lcklkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHBsYXllci5keCA9IHBsYXllci5keCAtPSAyO1xyXG4gICAgICAgIHBsYXllci55ID0gcGxheWVyLnkgLSA3O1xyXG4gICAgICB9LCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKCkge1xyXG4gICAgaXRlbS5zdHlsZSA9IFwidHJhbnNpdGlvbjogMC4yc1wiO1xyXG5cclxuICAgIGxldCBzdHlsZUlkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGl0ZW0uc3R5bGUgPSBcIlwiXHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoc3R5bGVJZCk7XHJcbiAgICB9LCAyMDApO1xyXG5cclxuICAgIGNsZWFySW50ZXJ2YWwodGltZXJJZCk7XHJcbiAgICBzdGFydE1vdmUgPSBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgc2NvcmUgfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xyXG5pbXBvcnQgQ2xvdWQgZnJvbSAnLi9jbG91ZCc7XHJcbmltcG9ydCBnZXRSYW5kb21JbnQgZnJvbSAnLi9nZXRfcmFuZG9tX2ludCc7XHJcblxyXG5jb25zdCBjbG91ZHNTZXQgPSBbXHJcbiAge1xyXG4gICAgc3JjOiAnaW1hZ2VzL2Nsb3Vkcy5wbmcnLFxyXG4gICAgc3g6IDAsXHJcbiAgICBzeTogMCxcclxuICAgIHNXaWR0aDogMjIwLFxyXG4gICAgc0hlaWdodDogMTYwLFxyXG4gICAgZHk6IDE1MCxcclxuICAgIGRXaWR0aDogMjIwLFxyXG4gICAgZEhlaWdodDogMTYwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc3JjOiAnaW1hZ2VzL2Nsb3Vkcy5wbmcnLFxyXG4gICAgc3g6IDI1MCxcclxuICAgIHN5OiAwLFxyXG4gICAgc1dpZHRoOiAyMjAsXHJcbiAgICBzSGVpZ2h0OiAxNjAsXHJcbiAgICBkeTogMTAwLFxyXG4gICAgZFdpZHRoOiAyMjAsXHJcbiAgICBkSGVpZ2h0OiAxNjAsXHJcbiAgfSxcclxuXTtcclxuXHJcbmxldCBjbG91ZDtcclxuY29uc3QgY2xvdWRzID0gW107XHJcbmxldCByYW5kb207XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDbG91ZHMoKSB7XHJcbiAgaWYgKHNjb3JlICUgNTAwID09PSAwKSB7XHJcbiAgICByYW5kb20gPSBjbG91ZHNTZXRbZ2V0UmFuZG9tSW50KDAsIDIpXTtcclxuICAgIGNsb3VkID0gbmV3IENsb3VkKHJhbmRvbSk7XHJcblxyXG4gICAgY2xvdWRzLnB1c2goY2xvdWQpO1xyXG4gIH1cclxuXHJcbiAgY2xvdWRzLm1hcCgoY2xvdWQpID0+IHtcclxuICAgIGNsb3VkLnVwZGF0ZSgpO1xyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IHNjb3JlLCBwbGF5ZXIsIGdhbWVTcGVlZCB9IGZyb20gJy4vc3RhcnRfZ2FtZSc7XHJcbmltcG9ydCB7IGluZm9ybUZvckRlc2t0b3AgfSBmcm9tIFwiLi9mdW5jdGlvbnMvZnVuY3Rpb25zLmpzXCI7XHJcbmltcG9ydCB7IGNhbnZhcyB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgQ29pbiBmcm9tICcuL2NvaW4nO1xyXG5cclxuaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0JztcclxuaW1wb3J0IHsgbGFuZyB9IGZyb20gJy4vbGFuZyc7XHJcbmltcG9ydCBnZXRSYW5kb21JbnQgZnJvbSAnLi9nZXRfcmFuZG9tX2ludCc7XHJcblxyXG5sZXQgY29pbjtcclxuY29uc3QgY29pbnMgPSBbXTtcclxuXHJcbmxldCBjb2luc1RleHQ7XHJcblxyXG5leHBvcnQgY29uc3QgY29pbnNDb3VudGVyID0ge1xyXG4gIGNvdW50ZXI6IDAsXHJcbn07XHJcblxyXG5sZXQgY29pblk7XHJcbmxldCByYW5kVGltZTtcclxuY29uc3QgcmFuZFkgPSBbXHJcbiAge1xyXG4gICAgeTogMzUwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgeTogNjAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgeTogMzAwLFxyXG4gIH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBnZXRDb2luKCkge1xyXG4gIGNvaW5zVGV4dCA9IG5ldyBUZXh0KFxyXG4gICAgYCR7bGFuZ1tsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyldLmNvaW5zVHh0fSAke2NvaW5zQ291bnRlci5jb3VudGVyfWAsIGluZm9ybUZvckRlc2t0b3AuYWN0dWFsQ29pbnNUZXh0TGVmdCwgaW5mb3JtRm9yRGVza3RvcC5hY3R1YWxDb2luc1RleHRUb3AsICdsZWZ0JywgJyMyMTIxMjEnLCAnMjAnLFxyXG4gICk7XHJcblxyXG4gIGNvaW5zVGV4dC5EcmF3KCk7XHJcblxyXG4gIGlmIChzY29yZSAlIDIwMCA9PT0gMCkge1xyXG4gICAgcmFuZFRpbWUgPSBnZXRSYW5kb21JbnQoMjAsIDEwMCk7XHJcbiAgICByYW5kVGltZSArPSAyMDA7XHJcbiAgICBjb2luWSA9IHJhbmRZW2dldFJhbmRvbUludCgwLCAzKV07XHJcbiAgfVxyXG5cclxuICBpZiAoc2NvcmUgJSByYW5kVGltZSA9PT0gMCkge1xyXG4gICAgY29pbiA9IG5ldyBDb2luKHtcclxuICAgICAgeDogY2FudmFzLndpZHRoLFxyXG4gICAgICB5OiBjb2luWS55LFxyXG4gICAgICB3aWR0aDogNTA0LFxyXG4gICAgICBoZWlnaHQ6IDg0LFxyXG4gICAgICBudW1iZXJPZkZyYW1lczogNixcclxuICAgICAgdGlja3NQZXJGcmFtZTogNCxcclxuICAgICAgZ2FtZVNwZWVkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29pbnMucHVzaChjb2luKTtcclxuICB9XHJcblxyXG4gIGlmIChjb2lucy5sZW5ndGggPiAwKSB7XHJcbiAgICBjb2lucy5mb3JFYWNoKChjb2luKSA9PiB7XHJcbiAgICAgIGNvaW4uc3RhcnQoKTtcclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICBwbGF5ZXIuZHggPCBjb2luLnggKyAoY29pbi53aWR0aCAvIDYpXHJcbiAgICAgICAgJiYgcGxheWVyLmR4ICsgKHBsYXllci53aWR0aCAvIDEwKSAtIDEwID4gY29pbi54XHJcbiAgICAgICAgJiYgcGxheWVyLnkgPCBjb2luLnkgKyBjb2luLmhlaWdodFxyXG4gICAgICAgICYmIHBsYXllci55ICsgcGxheWVyLmhlaWdodCA+PSBjb2luLnlcclxuICAgICAgKSB7XHJcbiAgICAgICAgY29pbi55ID0gMTAwMDA7XHJcbiAgICAgICAgY29pbi5wbGF5Q29pblNvdW5kKCk7XHJcbiAgICAgICAgY29pbnNDb3VudGVyLmNvdW50ZXIgKz0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvaW4ueCA8IC01MCkge1xyXG4gICAgICAgIGNvaW4ueSA9IDEwMDAwO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldENvaW4gfTtcclxuIiwiaW1wb3J0IHsgc2NvcmUsIHBsYXllciwgZ2FtZVNwZWVkIH0gZnJvbSAnLi9zdGFydF9nYW1lJztcclxuaW1wb3J0IHsgY2FudmFzIH0gZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCBQbGF0Zm9ybSBmcm9tICcuL1BsYXRmb3JtJztcclxuaW1wb3J0IGdldFJhbmRvbUludCBmcm9tICcuL2dldF9yYW5kb21faW50JztcclxuXHJcbmxldCBwbGF0Zm9ybTtcclxuXHJcbmxldCByYW5kVGltZTtcclxuY29uc3QgcGxhdGZvcm1SYW5kVGltZSA9IFsyMDAsIDIyMCwgMjUwLCAzMDBdO1xyXG5cclxuY29uc3QgcGxhdGZvcm1zID0gW107XHJcbmNvbnN0IHBsYXRmb3Jtc09wdGlvbnMgPSBbXHJcbiAge1xyXG4gICAgc3JjOiAnaW1hZ2VzL3BsYXRmb3JtYTEucG5nJyxcclxuICAgIHdpZHRoOiA0OTUsXHJcbiAgICBoZWlnaHQ6IDExNSxcclxuICAgIGZsaWdodEFsdGl0dWRlOiAyNTAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzcmM6ICdpbWFnZXMvcGxhdGZvcm1hMi5wbmcnLFxyXG4gICAgd2lkdGg6IDI4MCxcclxuICAgIGhlaWdodDogMTE1LFxyXG4gICAgZmxpZ2h0QWx0aXR1ZGU6IDMwMCxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UGxhdGZvcm0oKSB7XHJcbiAgaWYgKHNjb3JlICUgMjAwID09PSAwKSB7XHJcbiAgICByYW5kVGltZSA9IHBsYXRmb3JtUmFuZFRpbWVbZ2V0UmFuZG9tSW50KDAsIDQpXTtcclxuICB9XHJcblxyXG4gIGlmIChzY29yZSAlIHJhbmRUaW1lID09PSAwKSB7XHJcbiAgICBsZXQgdHlwZSA9IGdldFJhbmRvbUludCgwLCAyKTtcclxuICAgIHR5cGUgPSBwbGF0Zm9ybXNPcHRpb25zW3R5cGVdO1xyXG5cclxuICAgIHBsYXRmb3JtID0gbmV3IFBsYXRmb3JtKHtcclxuICAgICAgeDogY2FudmFzLndpZHRoLFxyXG4gICAgICB5OiBjYW52YXMuaGVpZ2h0LFxyXG4gICAgICBmbGlnaHRBbHRpdHVkZTogdHlwZS5mbGlnaHRBbHRpdHVkZSxcclxuICAgICAgd2lkdGg6IHR5cGUud2lkdGgsXHJcbiAgICAgIGhlaWdodDogdHlwZS5oZWlnaHQsXHJcbiAgICAgIGdhbWVTcGVlZCxcclxuICAgICAgaW1hZ2VTcmM6IHR5cGUuc3JjLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcGxhdGZvcm1zLnB1c2gocGxhdGZvcm0pO1xyXG4gIH1cclxuXHJcbiAgbGV0IGZsYWcgPSBmYWxzZTtcclxuXHJcbiAgZm9yIChjb25zdCBwbGF0Zm9ybSBvZiBwbGF0Zm9ybXMpIHtcclxuICAgIHBsYXRmb3JtLnVwZGF0ZSgpO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgKHBsYXllci5keCA+IHBsYXRmb3JtLnggJiYgcGxheWVyLmR4IDwgcGxhdGZvcm0ueCArIHBsYXRmb3JtLndpZHRoIC0gNDApXHJcbiAgICAgICYmIHBsYXllci55IDwgY2FudmFzLmhlaWdodCAtIHBsYXRmb3JtLmZsaWdodEFsdGl0dWRlXHJcbiAgICApIHtcclxuICAgICAgcGxheWVyLnRlc3QgPSBjYW52YXMuaGVpZ2h0IC0gcGxhdGZvcm0uZmxpZ2h0QWx0aXR1ZGUgKyAyO1xyXG4gICAgICBmbGFnID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAoIWZsYWcpIHtcclxuICAgICAgcGxheWVyLnRlc3QgPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xyXG4gIG1pbiA9IE1hdGguY2VpbChtaW4pO1xyXG4gIG1heCA9IE1hdGguZmxvb3IobWF4KTtcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xyXG59IiwiaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IHsga2V5cyB9IGZyb20gJy4vc3RhcnRfZ2FtZSc7XHJcbmltcG9ydCBQbGF5ZXJTb3VuZCBmcm9tICcuL3BsYXllci1zb3VuZCc7XHJcbmltcG9ydCB7IGRlYWQgfSBmcm9tICcuL3BhZ2VzL2RlYWQnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZXJvIHtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICB0aGlzLmltYWdlID0gb3B0aW9ucy5pbWFnZTtcclxuXHJcbiAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xyXG4gICAgdGhpcy50aWNrQ291bnQgPSAwO1xyXG4gICAgdGhpcy50aWNrc1BlckZyYW1lID0gb3B0aW9ucy50aWNrc1BlckZyYW1lIHx8IDA7XHJcbiAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gb3B0aW9ucy5udW1iZXJPZkZyYW1lcyB8fCAxO1xyXG5cclxuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcclxuXHJcbiAgICB0aGlzLmR5ID0gb3B0aW9ucy5keSB8fCAwO1xyXG4gICAgdGhpcy5keCA9IDA7XHJcbiAgICB0aGlzLnN4ID0gMDtcclxuICAgIHRoaXMuanVtcEZvcmNlID0gMTU7XHJcbiAgICB0aGlzLmdyb3VuZGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmp1bXBUaW1lciA9IDA7XHJcblxyXG4gICAgdGhpcy55ID0gb3B0aW9ucy55O1xyXG4gICAgdGhpcy54ID0gb3B0aW9ucy54O1xyXG4gICAgdGhpcy5ncmF2aXR5ID0gMTtcclxuXHJcbiAgICB0aGlzLmlzTGVmdCA9IGZhbHNlO1xyXG5cclxuICAgIC8vIHBsYXRmb3JtXHJcbiAgICB0aGlzLnRlc3QgPSBvcHRpb25zLnRlc3Q7XHJcblxyXG4gICAgdGhpcy5zb3VuZCA9IG5ldyBQbGF5ZXJTb3VuZCgpO1xyXG5cclxuICAgIHRoaXMuY291bnRlciA9IDA7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLnRpY2tDb3VudCArPSAxO1xyXG5cclxuICAgIGlmICh0aGlzLnRpY2tDb3VudCA+IHRoaXMudGlja3NQZXJGcmFtZSkge1xyXG4gICAgICB0aGlzLnRpY2tDb3VudCA9IDA7XHJcbiAgICAgIGlmICh0aGlzLmZyYW1lSW5kZXggPCB0aGlzLm51bWJlck9mRnJhbWVzIC0gMSkge1xyXG4gICAgICAgIHRoaXMuZnJhbWVJbmRleCArPSAxO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgICh0aGlzLmZyYW1lSW5kZXggKiB0aGlzLndpZHRoKSAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXHJcbiAgICAgIHRoaXMuc3gsXHJcbiAgICAgIHRoaXMud2lkdGggLyB0aGlzLm51bWJlck9mRnJhbWVzLFxyXG4gICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgdGhpcy5keCxcclxuICAgICAgdGhpcy55LFxyXG4gICAgICB0aGlzLndpZHRoIC8gdGhpcy5udW1iZXJPZkZyYW1lcyxcclxuICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ3Jhdml0eUdvKCkge1xyXG4gICAgdGhpcy55ICs9IHRoaXMuZHk7XHJcblxyXG4gICAgaWYgKHRoaXMueSArIHRoaXMuaGVpZ2h0IDwgdGhpcy50ZXN0KSB7XHJcbiAgICAgIHRoaXMuZHkgKz0gdGhpcy5ncmF2aXR5O1xyXG4gICAgICB0aGlzLmdyb3VuZGVkID0gZmFsc2U7XHJcbiAgICAgIGlmICh0aGlzLmR5ID4gMCkge1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTGVmdCkge1xyXG4gICAgICAgICAgdGhpcy5zeCA9IDMwMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zeCA9IDQwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZHkgPSAwO1xyXG4gICAgICB0aGlzLmdyb3VuZGVkID0gdHJ1ZTtcclxuICAgICAgLy8gZGVhZC5oaWRlKCk7XHJcbiAgICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSA2O1xyXG4gICAgICBpZiAodGhpcy5pc0xlZnQpIHtcclxuICAgICAgICB0aGlzLnN4ID0gMTAwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc3ggPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMueSA9IHRoaXMudGVzdCAtIHRoaXMuaGVpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW92ZVRvUmlnaHQoKSB7XHJcbiAgICBpZiAodGhpcy5keCA8IGNhbnZhcy53aWR0aCAtIDEwMCkgdGhpcy5keCArPSA1O1xyXG4gICAgdGhpcy5zeCA9IDA7XHJcbiAgICB0aGlzLmlzTGVmdCA9IGZhbHNlO1xyXG4gICAgdGhpcy5udW1iZXJPZkZyYW1lcyA9IDY7XHJcbiAgfVxyXG5cclxuICBtb3ZlVG9MZWZ0KCkge1xyXG4gICAgaWYgKHRoaXMuZHggPiAwKSB0aGlzLmR4IC09IDU7XHJcbiAgICB0aGlzLnN4ID0gMTAwO1xyXG4gICAgdGhpcy5pc0xlZnQgPSB0cnVlO1xyXG4gICAgdGhpcy5udW1iZXJPZkZyYW1lcyA9IDY7XHJcbiAgfVxyXG5cclxuICBwcmVwYXJlRm9ySnVtcCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwicHJlcGFyZSBmb3IganVtcFwiKTtcclxuICAgIGlmICh0aGlzLmdyb3VuZGVkICYmIHRoaXMuanVtcFRpbWVyID09PSAwKSB7XHJcbiAgICAgIHRoaXMuc291bmQuanVtcFVwKCk7XHJcbiAgICAgIHRoaXMuanVtcFRpbWVyID0gMTtcclxuICAgICAgdGhpcy5keSA9IC10aGlzLmp1bXBGb3JjZTtcclxuICAgICAgdGhpcy5zb3VuZC5qdW1wRG93bigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGVyb0p1bXAoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImhlcm8ganVtcFwiKTtcclxuICAgIGlmICh0aGlzLmp1bXBUaW1lciA+IDAgJiYgdGhpcy5qdW1wVGltZXIgPCAxNSkge1xyXG4gICAgICB0aGlzLmp1bXBUaW1lciArPSAxO1xyXG4gICAgICB0aGlzLmR5ID0gLXRoaXMuanVtcEZvcmNlIC0gKHRoaXMuanVtcFRpbWVyIC8gNTApO1xyXG4gICAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gMTtcclxuICAgICAgaWYgKHRoaXMuaXNMZWZ0KSB7XHJcbiAgICAgICAgdGhpcy5zeCA9IDIwMDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnN4ID0gNTAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBqdW1wXHJcblxyXG4gIGdldFJlYWR5VG9KdW1wKGJvb2wgPSBmYWxzZSkge1xyXG5cclxuICAgIGlmIChrZXlzLlNwYWNlIHx8IGtleXMuS2V5VyB8fCBrZXlzLkFycm93VXAgfHwgYm9vbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAvLyB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJnZXQgcmVhZHkgdG8ganVtcFwiLCB0aGlzLmNvdW50ZXIpO1xyXG4gICAgICB0aGlzLmp1bXAoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuanVtcFRpbWVyID0gMDtcclxuICAgIH1cclxuICAgIGlmIChrZXlzLktleU0gfHwga2V5cy5BcnJvd1JpZ2h0KSB7XHJcbiAgICAgIHRoaXMubW92ZVRvUmlnaHQoKTtcclxuICAgIH1cclxuICAgIGlmIChrZXlzLktleU4gfHwga2V5cy5BcnJvd0xlZnQpIHtcclxuICAgICAgdGhpcy5tb3ZlVG9MZWZ0KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoa2V5cy5Fc2NhcGUpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAganVtcCgpIHtcclxuICAgIHRoaXMucHJlcGFyZUZvckp1bXAoKTtcclxuICAgIHRoaXMuaGVyb0p1bXAoKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgY29uc3QgbG9vcCA9ICgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgdGhpcy5ncmF2aXR5R28oKTtcclxuICAgICAgdGhpcy5nZXRSZWFkeVRvSnVtcCgpO1xyXG5cclxuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbmltYXRlJykgPT09ICd0cnVlJykgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxuICAgIH07XHJcbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5cclxuaW1wb3J0IG1haW4gZnJvbSAnLi9wYWdlcy9tYWluJztcclxuXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xyXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbmltYXRlJywgJ3RydWUnKTtcclxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpdmVzJywgMzMzKTtcclxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJykpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYW5nU2VsZWN0ZWQnLCAnZW4nKTtcclxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU3ByaXRlSW1hZ2UnKSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Nwcml0ZUltYWdlJywgJ2ltYWdlcy9zcHJpdGUyLnBuZycpO1xyXG5cclxubWFpbigpO1xyXG5cclxuZXhwb3J0IHsgY2FudmFzLCBjdHggfTtcclxuIiwiY29uc3QgbGFuZyA9IHtcclxuICBlbjoge1xyXG4gICAgc2NvcmVUeHQ6ICdTY29yZTonLFxyXG4gICAgY29pbnNUeHQ6ICdDb2luczonLFxyXG4gICAgYmVzdENvaW5zVHh0OiAnQmVzdCBjb2luczonLFxyXG4gICAgbGl2ZXNUeHQ6ICdMaXZlczonLFxyXG4gICAgYmVzdFNjb3JlVHh0OiAnQmVzdCBzY29yZTonLFxyXG4gICAgc3RhcnRHYW1lQnRuOiAnU3RhcnQgR2FtZScsXHJcbiAgICBvcHRpb25zQnRuOiAnT3B0aW9ucycsXHJcbiAgICBzZWxlY3RMbmc6ICdTZWxlY3QgbGFuZ3VhZ2U6JyxcclxuICAgIHNlbGVjdFBsYXllcjogJ1NlbGVjdCBwbGF5ZXI6JyxcclxuICAgIGdhbWVPdmVyOiAnWW91IGxvc3QuIENsaWNrIHRvIGNvbnRpbnVlLicsXHJcbiAgICBoZWxwQnRuOiAnSGVscCcsXHJcbiAgICBoZWxwVHh0MTogJ1lvdXIgbWlzc2lvbiBpcyB0byBjb2xsZWN0IGFsbCB0aGUgY29pbnMuIFRvIGRvIHRoaXMgeW91IG9ubHkgaGF2ZSBhIGNlcnRhaW4gbnVtYmVyICBvZiBsaXZlcy4gWW91IGNhbiBqdW1wLCBtb3ZlIGxlZnQgYW5kIHJpZ2h0IHdpdGhpbiBzY3JlZW4uJyxcclxuICAgIGhlbHBUeHQyOiAnS2V5Ym9hcmQgQ29udHJvbDonLFxyXG4gICAgaGVscFR4dDM6ICdXLCBTcGFjZSwgXiAtIEpVTVAnLFxyXG4gICAgaGVscFR4dDQ6ICdNLCA+IC0gTU9WRSBSSUdIVCcsXHJcbiAgICBoZWxwVHh0NTogJ04sIDwgLSBNT1ZFIExFRlQnLFxyXG4gICAgaGVscFR4dDY6ICdBIC0gTVVTSUMgT04nLFxyXG4gICAgaGVscFR4dDc6ICdRIC0gTVVTSUMgT0ZGJyxcclxuICAgIGhlbHBUeHQ4OiAnRXNjIC0gTUFJTiBNRU5VJyxcclxuICB9LFxyXG4gIHJ1OiB7XHJcbiAgICBzY29yZVR4dDogJ9Cg0LXQt9GD0LvRjNGC0LDRgjonLFxyXG4gICAgY29pbnNUeHQ6ICfQnNC+0L3QtdGC0Ys6JyxcclxuICAgIGxpdmVzVHh0OiAn0JbQuNC30L3QuDonLFxyXG4gICAgYmVzdFNjb3JlVHh0OiAn0JvRg9GH0YjQuNC5INGA0LXQt9GD0LvRjNGC0LDRgjonLFxyXG4gICAgc3RhcnRHYW1lQnRuOiAn0J3QsNGH0LDRgtGMINC40LPRgNGDJyxcclxuICAgIG9wdGlvbnNCdG46ICfQndCw0YHRgtGA0L7QudC60LgnLFxyXG4gICAgc2VsZWN0TG5nOiAn0JLRi9Cx0LXRgNC40YLQtSDRj9C30YvQujonLFxyXG4gICAgc2VsZWN0UGxheWVyOiAn0JLRi9Cx0LXRgNC40YLQtSDQuNCz0YDQvtC60LA6JyxcclxuICAgIGdhbWVPdmVyOiAn0JLRiyDQv9GA0L7QuNCz0YDQsNC70LguINCa0LvQuNC60L3QuCDRh9GC0L7QsdGLINC/0YDQvtC00L7Qu9C20LjRgtGMLicsXHJcbiAgICBoZWxwQnRuOiAn0J/QvtC80L7RidGMJyxcclxuICAgIGhlbHBUeHQxOiAn0JLQsNGI0LAg0LfQsNC00LDRh9CwINGB0L7QsdGA0LDRgtGMINCy0YHQtSDQvNC+0L3QtdGC0YsuINCU0LvRjyDRjdGC0L7Qs9C+INGDINCy0LDRgSDQtdGB0YLRjCDQvtC/0YDQtdC00LXQu9C10L3QvdC+0Lkg0LrQvtC70LjRh9C10YHRgtCy0L4g0LbQuNC30L3QtdC5LiDQktGLINC80L7QttC10YLQtSDQv9GA0YvQs9Cw0YLRjCwg0LjQtNGC0Lgg0LLQu9C10LLQviDQuCDQstC/0YDQsNCy0L4g0LIg0L/RgNC10LTQtdC70LDRhSDRjdC60YDQsNC90LAuJyxcclxuICAgIGhlbHBUeHQyOiAn0JrQu9Cw0LLQuNGI0Lgg0YPQv9GA0LDQstC70LXQvdC40Y86JyxcclxuICAgIGhlbHBUeHQzOiAnVywgU3BhY2UsIF4gLSDQn9GA0YvQttC+0LonLFxyXG4gICAgaGVscFR4dDQ6ICdNLCA+IC0g0JjQtNGC0Lgg0LLQv9GA0LDQstC+JyxcclxuICAgIGhlbHBUeHQ1OiAnTiwgPCAtINCY0LTRgtC4INCy0LvQtdCy0L4nLFxyXG4gICAgaGVscFR4dDY6ICdBIC0g0JLQutC70Y7Rh9C40YLRjCDQvNGD0LfRi9C60YMnLFxyXG4gICAgaGVscFR4dDc6ICdRIC0g0JLRi9C60LvRjtGH0LjRgtGMINC80YPQt9GL0LrRgycsXHJcbiAgICBoZWxwVHh0ODogJ0VzYyAtINCT0LvQsNCy0L3QvtC1INC80LXQvdGOJyxcclxuICB9LFxyXG4gIGJyOiB7XHJcbiAgICBzY29yZVR4dDogJ9CS0YvQvdGW0Lo6JyxcclxuICAgIGNvaW5zVHh0OiAn0JzQsNC90LXRgtGLOicsXHJcbiAgICBsaXZlc1R4dDogJ9CW0YvRhtGG0Y86JyxcclxuICAgIGJlc3RTY29yZVR4dDogJ9Cb0LXQv9GI0Ysg0LLRi9C90ZbQujonLFxyXG4gICAgc3RhcnRHYW1lQnRuOiAn0J/QsNGH0LDRgtGMINGW0LPRgNGDJyxcclxuICAgIG9wdGlvbnNCdG46ICfQntC/0YbRi9GWJyxcclxuICAgIHNlbGVjdExuZzogJ9CS0YvQsdC10YDRi9GG0LUg0LzQvtCy0YM6JyxcclxuICAgIHNlbGVjdFBsYXllcjogJ9CS0YvQsdC10YDRi9GG0LUg0L/QtdGA0YHQsNC90LDQttCwOicsXHJcbiAgICBnYW1lT3ZlcjogJ9CS0Ysg0L/RgNCw0LnQs9GA0LDQu9GWLiDQmtC70ZbQutC90ZYg0LrQsNCxINC/0YDQsNGG0Y/Qs9C90YPRhtGMLicsXHJcbiAgICBoZWxwQnRuOiAn0JTQsNC/0LDQvNC+0LPQsCcsXHJcbiAgICBoZWxwVHh0MTogJ9CS0LDRiNCwINC30LDQtNCw0YfQsCDRgdCw0LHRgNCw0YbRjCDRg9GB0LUg0LzQsNC90LXRgtGLLiDQlNC70Y8g0LPRjdGC0LDQs9CwINGeINCy0LDRgSDRkdGB0YbRjCDQv9GN0Z7QvdCw0Lkg0LrQvtC70YzQutCw0YHRhtGMINC20YvRhtGG0Y/Rni4g0JLRiyDQvNC+0LbQsNGG0LUg0YHQutCw0LrQsNGG0YwsINGW0YHRhtGWINC90LDQu9C10LLQsCDRliDQvdCw0L/RgNCw0LLQsCDRniDQvNC10LbQsNGFINGN0LrRgNCw0L3QsC4nLFxyXG4gICAgaGVscFR4dDI6ICfQmtC70LDQstGW0YjRiyDQutGW0YDQsNCy0LDQvdC90Y86JyxcclxuICAgIGhlbHBUeHQzOiAnVywgU3BhY2UsIF4gLSDQn9GA0YvQttC+0LonLFxyXG4gICAgaGVscFR4dDQ6ICdNLCA+IC0gSdGB0YbRliDQvdCw0LvQtdCy0LAnLFxyXG4gICAgaGVscFR4dDU6ICdOLCA8IC0gSdGB0YbRliDQvdCw0L/RgNCw0LLQsCcsXHJcbiAgICBoZWxwVHh0NjogJ0EgLSDQo9C60LvRjtGH0YvRhtGMINC80YPQt9GL0LrRgycsXHJcbiAgICBoZWxwVHh0NzogJ1EgLSDQktGL0LrQu9GO0YfRi9GG0Ywg0LzRg9C30YvQutGDJyxcclxuICAgIGhlbHBUeHQ4OiAnRXNjIC0g0JPQsNC70L7RntC90LDQtSDQvNC10L3RjicsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB7IGxhbmcgfTtcclxuIiwiaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tICcuL2luZGV4LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic3RhY2xlIHtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICB0aGlzLnggPSBvcHRpb25zLng7XHJcbiAgICB0aGlzLnkgPSBvcHRpb25zLnk7XHJcbiAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XHJcbiAgICB0aGlzLmdhbWVTcGVlZCA9IG9wdGlvbnMuZ2FtZVNwZWVkO1xyXG5cclxuICAgIHRoaXMuZHggPSAtdGhpcy5nYW1lU3BlZWQ7XHJcblxyXG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWFnZS5zcmMgPSBvcHRpb25zLmltYWdlU3JjO1xyXG4gIH1cclxuXHJcbiAgVXBkYXRlKCkge1xyXG4gICAgdGhpcy54ICs9IHRoaXMuZHg7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgdGhpcy54LFxyXG4gICAgICBjYW52YXMuaGVpZ2h0IC0gNTUsXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuaW1wb3J0IHsgbGFuZyB9IGZyb20gJy4uL2xhbmcnO1xyXG5pbXBvcnQgeyBzdGFydCB9IGZyb20gJy4uL3N0YXJ0X2dhbWUnO1xyXG5cclxuY29uc3QgZGVhZCA9IHtcclxuICBzaG93KCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FuaW1hdGUnLCAnZmFsc2UnKTtcclxuICAgIGNvbnN0IGxnID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpO1xyXG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJykgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwYWdlLmNsYXNzTGlzdC5hZGQoJ3ppbmRleCcpO1xyXG4gICAgcGFnZS5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImhlbHAtdHh0LXdyYXBwZXJcIj5cclxu0JLRiyDQv9C+0YLQtdGA0Y/Qu9C4INC20LjQt9C90YwuXHJcbjxicj7QmtC70LjQutC90Lgg0YfRgtC+0LHRiyDQv9GA0L7QtNC+0LvQttC40YLRjC5cclxuICA8L2Rpdj5cclxuICBgO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHBhZ2UpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYW5pbWF0ZScsICd0cnVlJyk7XHJcbiAgICAgIHN0YXJ0KCk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGhpZGUoKSB7XHJcbiAgICBjb25zdCBwYWdlMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJyk7XHJcbiAgICBwYWdlMS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IHsgZGVhZCB9O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuaW1wb3J0IHsgbGFuZyB9IGZyb20gJy4uL2xhbmcnO1xyXG5pbXBvcnQgeyBjYW52YXMgfSBmcm9tICcuLi9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lT3ZlcigpIHtcclxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNhbnZhcyk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FuaW1hdGUnLCAnZmFsc2UnKTtcclxuICBjb25zdCBsZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKTtcclxuICBjb25zdCBwYWdlV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLXdyYXBwZXInKTtcclxuICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2UnLCAnZ2FtZS1vdmVyLWltYWdlJyk7XHJcbiAgcGFnZS5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiZ2FtZS1vdmVyXCI+XHJcbiAgICAke2xhbmdbbGddLmdhbWVPdmVyfVxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIHBhZ2VXcmFwcGVyLmFwcGVuZENoaWxkKHBhZ2UpO1xyXG4gIHBhZ2VXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH0pO1xyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5pbXBvcnQgeyBjYW52YXMgfSBmcm9tICcuLi9pbmRleCc7XHJcbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSAnLi4vc3RhcnRfZ2FtZSc7XHJcbmltcG9ydCB7IGxhbmcgfSBmcm9tICcuLi9sYW5nJztcclxuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlbHAoKSB7XHJcbiAgY2FudmFzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIGNvbnN0IGxnID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpO1xyXG4gIGNvbnN0IHBhZ2VXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2Utd3JhcHBlcicpO1xyXG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZScpIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZScsICdwYWdlLWltYWdlJyk7XHJcbiAgcGFnZS5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImhlbHAtdHh0LXdyYXBwZXJcIj5cclxuICAke2xhbmdbbGddLmhlbHBUeHQxfVxyXG4gIDxwPiR7bGFuZ1tsZ10uaGVscFR4dDJ9PC9wPlxyXG4gICR7bGFuZ1tsZ10uaGVscFR4dDN9XHJcbiAgPGJyPiR7bGFuZ1tsZ10uaGVscFR4dDR9XHJcbiAgPGJyPiR7bGFuZ1tsZ10uaGVscFR4dDV9XHJcbiAgPGJyPiR7bGFuZ1tsZ10uaGVscFR4dDZ9XHJcbiAgPGJyPiR7bGFuZ1tsZ10uaGVscFR4dDd9XHJcbiAgPGJyPiR7bGFuZ1tsZ10uaGVscFR4dDh9XHJcbiAgPC9kaXY+XHJcbiAgPGEgY2xhc3M9XCJidG5mbGlwIHN0YXJ0LWhlbHAgc3RhcnRcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj4ke2xhbmdbbGddLnN0YXJ0R2FtZUJ0bn08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19jZW50ZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19iYWNrXCI+JHtsYW5nW2xnXS5zdGFydEdhbWVCdG59PC9zcGFuPlxyXG4gIDwvYT5cclxuICBcclxuICA8YSBjbGFzcz1cImJ0bmZsaXAgb3B0aW9ucy1oZWxwIG9wdGlvbnNcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj4ke2xhbmdbbGddLm9wdGlvbnNCdG59PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fY2VudGVyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPiR7bGFuZ1tsZ10ub3B0aW9uc0J0bn08L3NwYW4+XHJcbiAgPC9hPlxyXG4gIGA7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcclxuICAgIHBhZ2VXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICBjYW52YXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICBzdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgcGFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQocGFnZSk7XHJcbiAgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcclxuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucycpO1xyXG4gIG9wdGlvbnNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBvcHRpb25zKCk7XHJcbiAgfSk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmltcG9ydCB7IGNhbnZhcyB9IGZyb20gJy4uL2luZGV4JztcclxuaW1wb3J0IHsgc3RhcnQgfSBmcm9tICcuLi9zdGFydF9nYW1lJztcclxuaW1wb3J0IGhlbHAgZnJvbSAnLi9oZWxwJztcclxuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcclxuaW1wb3J0IHsgbGFuZyB9IGZyb20gJy4uL2xhbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbigpIHtcclxuICBjYW52YXMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgY29uc3QgbGcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyk7XHJcbiAgY29uc3QgcGFnZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS13cmFwcGVyJyk7XHJcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJykgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlJyk7XHJcbiAgcGFnZS5pbm5lckhUTUwgPSBgXHJcblxyXG4gICAgPGltZyBjbGFzcz1cInBhZ2UtaW1hZ2VcIiBzcmM9XCIuL2ltZy9mb24uanBnXCIgYWx0PVwiYmxhZGUtcnVubmVyXCIgLz5cclxuICAgIDxhIGNsYXNzPVwiYnRuZmxpcCBzdGFydC1tYWluIHN0YXJ0XCIgaHJlZj1cIiNcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj4ke2xhbmdbbGddLnN0YXJ0R2FtZUJ0bn08L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2NlbnRlclwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPiR7bGFuZ1tsZ10uc3RhcnRHYW1lQnRufTwvc3Bhbj5cclxuICAgIDwvYT5cclxuXHJcbiAgICA8YSBjbGFzcz1cImJ0bmZsaXAgb3B0aW9ucy1tYWluIG9wdGlvbnNcIiBocmVmPVwiI1wiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19mcm9udFwiPiR7bGFuZ1tsZ10ub3B0aW9uc0J0bn08L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2NlbnRlclwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPiR7bGFuZ1tsZ10ub3B0aW9uc0J0bn08L3NwYW4+XHJcbiAgICA8L2E+XHJcblxyXG4gICAgPGEgY2xhc3M9XCJidG5mbGlwIGhlbHAtbWFpbiBoZWxwXCIgaHJlZj1cIiNcIj4gIFxyXG4gICAgICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19mcm9udFwiPiR7bGFuZ1tsZ10uaGVscEJ0bn08L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2NlbnRlclwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPiR7bGFuZ1tsZ10uaGVscEJ0bn08L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgICBcclxuICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlci1hdXRob3JzXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9TZXJnUnVkb3ZpY2hcIiB0YXJnZXQ9XCJibGFua1wiPlNlcmdleSBSdWRvdmljaDwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2NvbnNlcnZhdGl2MDA3XCIgdGFyZ2V0PVwiYmxhbmtcIj5jb25zZXJ2YXRpdjAwNzwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcnMuc2Nob29sL2pzL1wiIHRhcmdldD1cImJsYW5rXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3JzLnNjaG9vbC9pbWFnZXMvcnNfc2Nob29sX2pzLnN2Z1wiIGFsdD1cIlJTIFNjaG9vbFwiIHN0eWxlPVwid2lkdGg6IDUwcHhcIj48L2E+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmb290ZXJfX3llYXJcIj7CqSAyMDIxPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPC9mb290ZXI+XHJcbiAgYDtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xyXG4gICAgcGFnZVdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBwYWdlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIGNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIHN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBwYWdlV3JhcHBlci5hcHBlbmRDaGlsZChwYWdlKTtcclxuICBwYWdlV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHJcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcclxuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XHJcblxyXG4gIGNvbnN0IGhlbHBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVscCcpO1xyXG4gIGhlbHBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBoZWxwKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucycpO1xyXG4gIG9wdGlvbnNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBvcHRpb25zKCk7XHJcbiAgfSk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmltcG9ydCB7IGNhbnZhcyB9IGZyb20gJy4uL2luZGV4JztcclxuaW1wb3J0IHsgc3RhcnQgfSBmcm9tICcuLi9zdGFydF9nYW1lJztcclxuaW1wb3J0IGhlbHAgZnJvbSAnLi9oZWxwJztcclxuaW1wb3J0IHsgbGFuZyB9IGZyb20gJy4uL2xhbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3B0aW9ucygpIHtcclxuICBjYW52YXMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgY29uc3QgbGcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyk7XHJcbiAgY29uc3QgcGFnZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS13cmFwcGVyJyk7XHJcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJykgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlJywgJ3BhZ2UtaW1hZ2UnKTtcclxuICBwYWdlLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiaGVscC10eHQtd3JhcHBlclwiPlxyXG4gIDxwIGNsYXNzPVwibWVudUl0ZW1cIiBpZD0nbWVudUZpZWxkU2l6ZSc+XHJcbiAgPGxhYmVsPiR7bGFuZ1tsZ10uc2VsZWN0TG5nfTwvbGFiZWw+XHJcbiAgPHNlbGVjdCBpZD1cInNlbGVjdExhbmdcIj5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImVuXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPmVuZ2xpc2g8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cInJ1XCI+0YDRg9GB0YHQutC40Lk8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImJyXCI+0LHQtdC70LDRgNGD0YHQutCw0Y88L29wdGlvbj5cclxuICA8L3NlbGVjdD5cclxuICA8L3A+XHJcbiAgPGJyPjxwPiR7bGFuZ1tsZ10uc2VsZWN0UGxheWVyfTwvcD5cclxuICA8YnI+XHJcbiAgPGltZyBzcmM9XCJpbWcvc3ByaXRlMl9pY29uLnBuZ1wiIGNsYXNzPVwicGxheWVyMlwiIGFsdD1cInBsYXllcjJcIj5cclxuICA8aW1nIHNyYz1cImltZy9zcHJpdGUxX2ljb24ucG5nXCIgY2xhc3M9XCJwbGF5ZXIxXCIgYWx0PVwicGxheWVyMVwiPlxyXG4gIDwvZGl2PlxyXG4gIDxhIGNsYXNzPVwiYnRuZmxpcCBzdGFydC1oZWxwIHN0YXJ0XCIgaHJlZj1cIiNcIj5cclxuICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19mcm9udFwiPiR7bGFuZ1tsZ10uc3RhcnRHYW1lQnRufTwvc3Bhbj5cclxuICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19jZW50ZXJcIj48L3NwYW4+XHJcbiAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPiR7bGFuZ1tsZ10uc3RhcnRHYW1lQnRufTwvc3Bhbj5cclxuPC9hPlxyXG5cclxuPGEgY2xhc3M9XCJidG5mbGlwIG9wdGlvbnMtaGVscCBoZWxwXCIgaHJlZj1cIiNcIj5cclxuICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19mcm9udFwiPiR7bGFuZ1tsZ10uaGVscEJ0bn08L3NwYW4+XHJcbiAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fY2VudGVyXCI+PC9zcGFuPlxyXG4gIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2JhY2tcIj4ke2xhbmdbbGddLmhlbHBCdG59PC9zcGFuPlxyXG48L2E+XHJcbiAgYDtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0TGFuZyA+IG9wdGlvbltzZWxlY3RlZF0nKS5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NlbGVjdExhbmcgPiBvcHRpb25bdmFsdWU9JHtsZ31dYCkuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XHJcbiAgICBwYWdlV3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxuICAgIHBhZ2VXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIC8vINCy0YvQsdC+0YAg0Y/Qt9GL0LrQsFxyXG4gIHBhZ2VXcmFwcGVyLmFwcGVuZENoaWxkKHBhZ2UpO1xyXG4gIHBhZ2VXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0Jyk7XHJcbiAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xyXG5cclxuICBjb25zdCBoZWxwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlbHAnKTtcclxuICBoZWxwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaGVscCgpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBzZWxlY3RMYW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdExhbmcnKTtcclxuICBzZWxlY3RMYW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYW5nU2VsZWN0ZWQnLCBzZWxlY3RMYW5nLnZhbHVlKTtcclxuICAgIG9wdGlvbnMoKTtcclxuICB9KTtcclxuXHJcbiAgLy8g0LLRi9Cx0L7RgCDQuNCz0YDQvtC60LBcclxuICBjb25zdCBwbGF5ZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjEnKTtcclxuICBjb25zdCBwbGF5ZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjInKTtcclxuICBjb25zdCBwbGF5ZXJTZWxlY3RlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdTcHJpdGVJbWFnZScpO1xyXG4gIGlmIChwbGF5ZXJTZWxlY3RlZCA9PT0gJ2ltYWdlcy9zcHJpdGUyLnBuZycpIHtcclxuICAgIHBsYXllcjIuY2xhc3NMaXN0LmFkZCgncGxheWVyLWljb24tc2VsZWN0ZWQnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcGxheWVyMS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItaWNvbi1zZWxlY3RlZCcpO1xyXG4gIH1cclxuICBwbGF5ZXIxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Nwcml0ZUltYWdlJywgJ2ltYWdlcy9zcHJpdGUxLnBuZycpO1xyXG4gICAgcGxheWVyMS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItaWNvbi1zZWxlY3RlZCcpO1xyXG4gICAgcGxheWVyMi5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5ZXItaWNvbi1zZWxlY3RlZCcpO1xyXG4gICAgb3B0aW9ucygpO1xyXG4gIH0pO1xyXG4gIHBsYXllcjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnU3ByaXRlSW1hZ2UnLCAnaW1hZ2VzL3Nwcml0ZTIucG5nJyk7XHJcbiAgICBwbGF5ZXIyLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1pY29uLXNlbGVjdGVkJyk7XHJcbiAgICBwbGF5ZXIxLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXllci1pY29uLXNlbGVjdGVkJyk7XHJcbiAgICBvcHRpb25zKCk7XHJcbiAgfSk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJTb3VuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyB0aGlzLnVybCA9IHdpbmRvdy5nYW1lU3RhdGUuc291bmRVcmw7XHJcbiAgICB0aGlzLnNvdW5kVXAgPSBuZXcgQXVkaW8oJ3NvdW5kL2p1bXBVcC5tcDMnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zb3VuZFVwKTtcclxuICAgIHRoaXMuc291bmREb3duID0gbmV3IEF1ZGlvKCdzb3VuZC9ncmF2aXR5RG93bi5tcDMnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zb3VuZERvd24pO1xyXG4gICAgdGhpcy5pc0dyYXZpdHlEb3duID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzSnVtcFVwID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBqdW1wVXAoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNKdW1wVXApIHtcclxuICAgICAgdGhpcy5zb3VuZFVwLnBsYXkoKTtcclxuICAgICAgdGhpcy5pc0p1bXBVcCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBqdW1wRG93bigpIHtcclxuICAgIHRoaXMuc291bmRVcC5wYXVzZSgpO1xyXG4gICAgdGhpcy5zb3VuZFVwLmN1cnJlbnRUaW1lID0gMC4wO1xyXG4gICAgdGhpcy5pc0p1bXBVcCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ3Jhdml0eURvd24oKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNHcmF2aXR5RG93bikge1xyXG4gICAgICB0aGlzLnNvdW5kRG93bi5wbGF5KCk7XHJcbiAgICAgIHRoaXMuaXNHcmF2aXR5RG93biA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBncmF2aXR5VXAoKSB7XHJcbiAgICB0aGlzLnNvdW5kRG93bi5wYXVzZSgpO1xyXG4gICAgdGhpcy5zb3VuZERvd24uY3VycmVudFRpbWUgPSAwLjA7XHJcbiAgICB0aGlzLmlzR3Jhdml0eURvd24gPSBmYWxzZTtcclxuICB9XHJcbn1cclxuIiwiY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUnKTtcclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG5jb25zdCBwYXJ0aWNsZXNPblNjcmVlbiA9IDI0NTtcclxubGV0IHc7XHJcbmxldCBoO1xyXG5jb25zdCBwYXJ0aWNsZXNBcnJheSA9IFtdO1xyXG5cclxuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbncgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbmZ1bmN0aW9uIHJhbmRvbShtaW4sIG1heCkge1xyXG4gIHJldHVybiBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGllbnRSZXNpemUoZXYpIHtcclxuICB3ID0gY2FudmFzLndpZHRoO1xyXG4gIGggPSBjYW52YXMuaGVpZ2h0O1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY2xpZW50UmVzaXplKTtcclxuXHJcbi8vIGNyZWF0ZVNub3dGbGFrZXMoKTtcclxuZnVuY3Rpb24gY3JlYXRlU25vd0ZsYWtlcygpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRpY2xlc09uU2NyZWVuOyBpKyspIHtcclxuICAgIHBhcnRpY2xlc0FycmF5LnB1c2goe1xyXG4gICAgICB4OiBNYXRoLnJhbmRvbSgpICogdyxcclxuICAgICAgeTogTWF0aC5yYW5kb20oKSAqIGgsXHJcbiAgICAgIG9wYWNpdHk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgIHNwZWVkWDogcmFuZG9tKC0xLCAxKSxcclxuICAgICAgc3BlZWRZOiByYW5kb20oMSwgMiksXHJcbiAgICAgIHJhZGl1czogcmFuZG9tKDAuNSwgNC4yKSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd1Nub3dGbGFrZXMoKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZXNBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgZ3JhZGllbnQgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoXHJcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLngsXHJcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLnksXHJcbiAgICAgIDAsXHJcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLngsXHJcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLnksXHJcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLnJhZGl1cyxcclxuICAgICk7XHJcblxyXG4gICAgLy8gZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDMwLCAxNDQsIDI1NSwgJHtwYXJ0aWNsZXNBcnJheVtpXS5vcGFjaXR5fSlgICk7XHJcbiAgICAvLyBncmFkaWVudC5hZGRDb2xvclN0b3AoMC44LCBgcmdiYSgxMDAsIDE0OSwgMjM3LCAke3BhcnRpY2xlc0FycmF5W2ldLm9wYWNpdHl9KWAgKTtcclxuICAgIC8vIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBgcmdiYSg2NSwgMTA1LCAyMjUsICR7cGFydGljbGVzQXJyYXlbaV0ub3BhY2l0eX0pYCApO1xyXG5cclxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBgcmdiYSgyNTUsIDI1NSwgMjU1LCR7cGFydGljbGVzQXJyYXlbaV0ub3BhY2l0eX0pYCk7IC8vIHdoaXRlXHJcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMC44LCBgcmdiYSgyMTAsIDIzNiwgMjQyLCR7cGFydGljbGVzQXJyYXlbaV0ub3BhY2l0eX0pYCk7IC8vIGJsdWlzaFxyXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKDIzNywgMjQ3LCAyNDksJHtwYXJ0aWNsZXNBcnJheVtpXS5vcGFjaXR5fSlgKTtcclxuXHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKFxyXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS54LFxyXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS55LFxyXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS5yYWRpdXMsXHJcbiAgICAgIDAsXHJcbiAgICAgIE1hdGguUEkgKiAyLFxyXG4gICAgICBmYWxzZSxcclxuICAgICk7XHJcblxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG4gICAgY3R4LmZpbGwoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdmVTbm93Rmxha2VzKCkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydGljbGVzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgIHBhcnRpY2xlc0FycmF5W2ldLnggKz0gcGFydGljbGVzQXJyYXlbaV0uc3BlZWRYO1xyXG4gICAgcGFydGljbGVzQXJyYXlbaV0ueSArPSBwYXJ0aWNsZXNBcnJheVtpXS5zcGVlZFk7XHJcblxyXG4gICAgaWYgKHBhcnRpY2xlc0FycmF5W2ldLnkgPiBoKSB7XHJcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLnggPSBNYXRoLnJhbmRvbSgpICogdyAqIDEuNTtcclxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueSA9IC01MDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVNub3dGYWxsKCkge1xyXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XHJcbiAgZHJhd1Nub3dGbGFrZXMoKTtcclxuICBtb3ZlU25vd0ZsYWtlcygpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVTbm93Rmxha2VzLCB1cGRhdGVTbm93RmFsbCB9O1xyXG4iLCJpbXBvcnQgT2JzdGFjbGUgZnJvbSAnLi9vYnN0YWNsZSc7XHJcbmltcG9ydCB7IGNhbnZhcyB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyBnYW1lU3BlZWQsIG9ic3RhY2xlcyB9IGZyb20gJy4vc3RhcnRfZ2FtZSc7XHJcblxyXG5mdW5jdGlvbiBTcGF3bk9ic3RhY2xlKCkge1xyXG4gIC8vIGxldCBzaXplID0gUmFuZG9tSW50UmFuZ2UoMjAsIDcwKTtcclxuICBjb25zdCB0eXBlID0gUmFuZG9tSW50UmFuZ2UoMywgNCk7XHJcblxyXG4gIGNvbnN0IG9ic3RhY2xlID0gbmV3IE9ic3RhY2xlKHtcclxuICAgIHg6IGNhbnZhcy53aWR0aCxcclxuICAgIHk6IGNhbnZhcy5oZWlnaHQsXHJcbiAgICB3aWR0aDogNTAsXHJcbiAgICBoZWlnaHQ6IDUwLFxyXG4gICAgZ2FtZVNwZWVkLFxyXG4gICAgaW1hZ2VTcmM6IGBpbWFnZXMvb2JzdGFjbGUke3R5cGV9LnBuZ2AsXHJcbiAgfSk7XHJcblxyXG4gIG9ic3RhY2xlcy5wdXNoKG9ic3RhY2xlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUmFuZG9tSW50UmFuZ2UobWluLCBtYXgpIHtcclxuICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xyXG59XHJcblxyXG5leHBvcnQgeyBTcGF3bk9ic3RhY2xlIH07XHJcbiIsImltcG9ydCBIZXJvIGZyb20gJy4vaGVybyc7XHJcbmltcG9ydCBUZXh0IGZyb20gJy4vdGV4dCc7XHJcbmltcG9ydCB7IFNwYXduT2JzdGFjbGUgfSBmcm9tICcuL3NwYXduX29ic3RhY2xlJztcclxuaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IHsgY3JlYXRlU25vd0ZsYWtlcywgdXBkYXRlU25vd0ZhbGwgfSBmcm9tICcuL3Nub3dfZmxha2VzJztcclxuaW1wb3J0IEdhbWVTb3VuZCBmcm9tICcuL2dhbWUtc291bmQnO1xyXG5pbXBvcnQgeyBnZXRDb2luLCBjb2luc0NvdW50ZXIgfSBmcm9tICcuL2dldF9jb2luJztcclxuaW1wb3J0IGdldENsb3VkcyBmcm9tICcuL2dldF9jbG91ZHMnO1xyXG5pbXBvcnQgeyBsYW5nIH0gZnJvbSAnLi9sYW5nJztcclxuaW1wb3J0IGdldFBsYXRmb3JtIGZyb20gJy4vZ2V0X3BsYXRmb3JtJztcclxuaW1wb3J0IG1haW4gZnJvbSAnLi9wYWdlcy9tYWluJztcclxuaW1wb3J0IHsgZGVhZCB9IGZyb20gJy4vcGFnZXMvZGVhZCc7XHJcbmltcG9ydCBnYW1lT3ZlciBmcm9tICcuL3BhZ2VzL2dhbWUtb3Zlcic7XHJcblxyXG5pbXBvcnQgeyBpbmZvcm1Gb3JEZXNrdG9wIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2Z1bmN0aW9ucy5qc1wiO1xyXG5pbXBvcnQgeyBnZXRDb250cm9sc1RvTW9iaWxlIH0gZnJvbSAnLi9nZXRDb250cm9sc1RvTW9iaWxlLmpzJztcclxuXHJcbi8vIGxldCdzIG1ha2UgdGhlIGdhbWUgbWF4IHdpZHRoXHJcblxyXG5sZXQgc2NvcmU7XHJcbmxldCBoaWdoU2NvcmU7XHJcblxyXG5sZXQgaGlnaENvaW5zO1xyXG5sZXQgaGlnaHRDb2luc1RleHQ7XHJcblxyXG5sZXQgc2NvcmVUZXh0O1xyXG5sZXQgaGlnaHRTY29yZVRleHQ7XHJcblxyXG5sZXQgbGl2ZXNUZXh0O1xyXG5sZXQgZ2FtZVNwZWVkO1xyXG5sZXQgcGxheWVyO1xyXG5sZXQgb2JzdGFjbGVzID0gW107XHJcbmNvbnN0IGNvaW5zID0gW107XHJcblxyXG5jb25zdCBrZXlzID0ge307XHJcbmxldCBoZXJvSW1hZ2U7XHJcbmNvbnN0IHBsYXlTb3VuZCA9IG5ldyBHYW1lU291bmQoKTtcclxuXHJcbmZ1bmN0aW9uIHN0YXJ0KCkge1xyXG5cclxuICBsZXQgd2l0aE9mR2FtZSA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcblxyXG4gIGNhbnZhcy53aWR0aCA9IHdpdGhPZkdhbWU7XHJcbiAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDIwNTtcclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcbiAgICBrZXlzW2UuY29kZV0gPSB0cnVlO1xyXG4gIH0pO1xyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XHJcbiAgICBrZXlzW2UuY29kZV0gPSBmYWxzZTtcclxuICB9KTtcclxuXHJcbiAgY3R4LmZvbnQgPSAnMjBweCBzYW5zLXNlcmlmJztcclxuXHJcbiAgZ2FtZVNwZWVkID0gMztcclxuICAvLyBsaXZlcyA9IDM7XHJcbiAgc2NvcmUgPSAwO1xyXG4gIGhpZ2hTY29yZSA9IDA7XHJcbiAgaGlnaENvaW5zID0gMDtcclxuXHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaWdoc2NvcmUnKSkge1xyXG4gICAgaGlnaFNjb3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hzY29yZScpO1xyXG4gIH1cclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hDb2lucycpKSB7XHJcbiAgICBoaWdoQ29pbnMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaENvaW5zJyk7XHJcbiAgfVxyXG5cclxuICBoZXJvSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBoZXJvSW1hZ2Uuc3JjID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Nwcml0ZUltYWdlJyk7XHJcblxyXG4gIHBsYXllciA9IG5ldyBIZXJvKHtcclxuICAgIGltYWdlOiBoZXJvSW1hZ2UsXHJcbiAgICB3aWR0aDogNjAwLFxyXG4gICAgaGVpZ2h0OiAxMDAsXHJcbiAgICBudW1iZXJPZkZyYW1lczogNixcclxuICAgIHRpY2tzUGVyRnJhbWU6IDQsXHJcbiAgICB4OiA1MCxcclxuICAgIHk6IDUwLFxyXG4gICAgdGVzdDogY2FudmFzLmhlaWdodCxcclxuICB9KTtcclxuXHJcbiAgcGxheWVyLnN0YXJ0KCk7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKHBsYXllcilcclxuXHJcbiAgc2NvcmVUZXh0ID0gbmV3IFRleHQoXHJcbiAgICBgJHtsYW5nW2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKV0uc2NvcmVUeHR9ICR7c2NvcmV9YCwgaW5mb3JtRm9yRGVza3RvcC5zY29yZUxlZnQsIGluZm9ybUZvckRlc2t0b3Auc2NvcmVUb3AsICdsZWZ0JywgJyMyMTIxMjEnLCAnMjAnLFxyXG4gICk7XHJcbiAgbGl2ZXNUZXh0ID0gbmV3IFRleHQoXHJcbiAgICBgJHtsYW5nW2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKV0ubGl2ZXNUeHR9ICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpdmVzJyl9YCwgaW5mb3JtRm9yRGVza3RvcC5saXZlc1RleHRMZWZ0LCBpbmZvcm1Gb3JEZXNrdG9wLmxpdmVzVGV4dFRvcCwgJ2xlZnQnLCAnIzIxMjEyMScsICcyMCcsXHJcbiAgKTtcclxuICBoaWdodFNjb3JlVGV4dCA9IG5ldyBUZXh0KFxyXG4gICAgYCR7bGFuZ1tsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyldLmJlc3RTY29yZVR4dH0gJHtoaWdoU2NvcmV9YCwgaW5mb3JtRm9yRGVza3RvcC5oaWdodFNjb3JlVGV4dExlZnQsIGluZm9ybUZvckRlc2t0b3AuaGlnaHRTY29yZVRleHRUb3AsICdsZWZ0JywgJyMyMTIxMjEnLCAnMjAnLFxyXG4gICk7XHJcbiAgaGlnaHRDb2luc1RleHQgPSBuZXcgVGV4dChcclxuICAgIGAke2xhbmdbbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpXS5iZXN0Q29pbnNUeHR9ICR7aGlnaENvaW5zfWAsIGluZm9ybUZvckRlc2t0b3AuaGlnaHRDb2luc1RleHRMZWZ0LCBpbmZvcm1Gb3JEZXNrdG9wLmhpZ2h0Q29pbnNUZXh0VG9wLCAnbGVmdCcsICcjMjEyMTIxJywgJzIwJyxcclxuICApO1xyXG5cclxuXHJcblxyXG4gIGNyZWF0ZVNub3dGbGFrZXMoKTtcclxuICAvLyBwbGF5U291bmQucGxheUZvbigpO1xyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShVcGRhdGUpO1xyXG5cclxuICAvLyBnZXQgbW9iaWxlIGNvbnRyb2xzXHJcbiAgZ2V0Q29udHJvbHNUb01vYmlsZShwbGF5ZXIpO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3Bhd25UaW1lciA9IDIwMDtcclxubGV0IHNwYXduVGltZXIgPSBpbml0aWFsU3Bhd25UaW1lcjtcclxuXHJcbmZ1bmN0aW9uIFVwZGF0ZSgpIHtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FuaW1hdGUnKSA9PT0gJ3RydWUnKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoVXBkYXRlKTtcclxuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gIC8vINCy0YvQutC70Y7Rh9C40YLRjCDRhNC+0L3QvtCy0YPRjiDQvNGD0LfRi9C60YNcclxuICBpZiAoa2V5cy5LZXlRKSB7XHJcbiAgICBwbGF5U291bmQuc3RvcEZvbigpO1xyXG4gIH1cclxuXHJcbiAgLy8g0LLQutC70Y7Rh9C40YLRjCDRhNC+0L3QvtCy0YPRjiDQvNGD0LfRi9C60YNcclxuICBpZiAoa2V5cy5LZXlBKSB7XHJcbiAgICBwbGF5U291bmQucGxheUZvbigpO1xyXG4gIH1cclxuXHJcbiAgLy8gc3Bhd24gb2JzdGFjbGVzXHJcbiAgc3Bhd25UaW1lciAtPSAxO1xyXG4gIGlmIChzcGF3blRpbWVyIDw9IDApIHtcclxuICAgIFNwYXduT2JzdGFjbGUoKTtcclxuICAgIHNwYXduVGltZXIgPSBpbml0aWFsU3Bhd25UaW1lciAtIGdhbWVTcGVlZCAqIDg7XHJcblxyXG4gICAgaWYgKHNwYXduVGltZXIgPCA2MCkge1xyXG4gICAgICBzcGF3blRpbWVyID0gNjA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTbm93RmFsbCgpO1xyXG5cclxuICAvLyBzcGF3biBlbmVtaWVzXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYnN0YWNsZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IG8gPSBvYnN0YWNsZXNbaV07XHJcblxyXG4gICAgaWYgKG8ueCArIG8ud2lkdGggPCAwKSB7XHJcbiAgICAgIG9ic3RhY2xlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutCwINC40LPRgNGLINC/0YDQuCDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40LhcclxuICAgIGlmIChcclxuICAgICAgcGxheWVyLmR4IDwgby54ICsgby53aWR0aFxyXG4gICAgICAmJiBwbGF5ZXIuZHggKyAocGxheWVyLndpZHRoIC8gMTApIC0gMTAgPiBvLnhcclxuICAgICAgJiYgcGxheWVyLnkgPCBvLnkgKyBvLmhlaWdodFxyXG4gICAgICAmJiBwbGF5ZXIueSArIHBsYXllci5oZWlnaHQgPj0gby55XHJcbiAgICApIHtcclxuICAgICAgcGxheVNvdW5kLnBsYXlEZWFkKCk7XHJcbiAgICAgIG9ic3RhY2xlcyA9IFtdO1xyXG4gICAgICBnYW1lU3BlZWQgPSAzO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGl2ZXMnLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGl2ZXMnKSAtIDEpO1xyXG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpdmVzJykgPT0gMCkge1xyXG4gICAgICAgIGdhbWVPdmVyKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gZGVhZC5zaG93KCk7XHJcbiAgICAgIH1cclxuICAgICAgbGl2ZXNUZXh0LnQgPSBgJHtsYW5nW2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKV0ubGl2ZXNUeHR9ICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpdmVzJyl9YDtcclxuICAgICAgc2NvcmUgPSAwO1xyXG4gICAgICBwbGF5ZXIuZHggPSAwO1xyXG4gICAgICBwbGF5ZXIueSA9IDA7XHJcbiAgICAgIGNvaW5zQ291bnRlci5jb3VudGVyID0gMDtcclxuICAgICAgc3Bhd25UaW1lciA9IGluaXRpYWxTcGF3blRpbWVyO1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZ2hzY29yZScsIGhpZ2hTY29yZSk7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlnaENvaW5zJywgaGlnaENvaW5zKTtcclxuICAgIH1cclxuICAgIG8uVXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBzY29yZSArPSAxO1xyXG4gIHNjb3JlVGV4dC50ID0gYCR7bGFuZ1tsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyldLnNjb3JlVHh0fSAke3Njb3JlfWA7XHJcblxyXG4gIHNjb3JlVGV4dC5EcmF3KCk7XHJcblxyXG4gIGlmIChzY29yZSA+IGhpZ2hTY29yZSkge1xyXG4gICAgaGlnaFNjb3JlID0gc2NvcmU7XHJcbiAgICBoaWdodFNjb3JlVGV4dC50ID0gYCR7bGFuZ1tsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyldLmJlc3RTY29yZVR4dH0gJHtoaWdoU2NvcmV9YDtcclxuICB9XHJcblxyXG4gIGlmIChjb2luc0NvdW50ZXIuY291bnRlciA+IGhpZ2hDb2lucykge1xyXG4gICAgaGlnaENvaW5zID0gY29pbnNDb3VudGVyLmNvdW50ZXI7XHJcbiAgICBoaWdodENvaW5zVGV4dC50ID0gYCR7bGFuZ1tsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyldLmJlc3RDb2luc1R4dH0gJHtoaWdoQ29pbnN9YDtcclxuICB9XHJcblxyXG4gIGdhbWVTcGVlZCArPSAwLjAwMztcclxuICBoaWdodFNjb3JlVGV4dC5EcmF3KCk7XHJcbiAgaGlnaHRDb2luc1RleHQuRHJhdygpO1xyXG4gIGxpdmVzVGV4dC5EcmF3KCk7XHJcblxyXG4gIC8vIHNwYXduIHBsYXRmb3JtXHJcbiAgZ2V0UGxhdGZvcm0oKTtcclxuXHJcbiAgLy8gc3Bhd24gY29pblxyXG4gIGdldENvaW4oKTtcclxuXHJcbiAgLy8gc3Bhd24gY2xvdWRzXHJcbiAgZ2V0Q2xvdWRzKCk7XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBzdGFydCwgVXBkYXRlLCBnYW1lU3BlZWQsIG9ic3RhY2xlcywga2V5cywgc2NvcmUsIHBsYXllciwgY29pbnMsXHJcbn07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5pbXBvcnQgeyBjdHggfSBmcm9tICcuL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQge1xyXG4gIGNvbnN0cnVjdG9yKHQsIHgsIHksIGEsIGMsIHMpIHtcclxuICAgIHRoaXMudCA9IHQ7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMuYSA9IGE7XHJcbiAgICB0aGlzLmMgPSBjO1xyXG4gICAgdGhpcy5zID0gcztcclxuICB9XHJcblxyXG4gIERyYXcoKSB7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jO1xyXG4gICAgY3R4LmZvbnQgPSBgJHt0aGlzLnN9cHggc2Fucy1zZXJpZmA7XHJcbiAgICBjdHgudGV4dEFsaWduID0gdGhpcy5hO1xyXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMudCwgdGhpcy54LCB0aGlzLnkpO1xyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbImNhbnZhcyIsImN0eCIsIlBsYXRmb3JtIiwib3B0aW9ucyIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJmbGlnaHRBbHRpdHVkZSIsImdhbWVTcGVlZCIsImR4IiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsImltYWdlU3JjIiwicmVuZGVyIiwiZHJhd0ltYWdlIiwiQ2xvdWQiLCJzeCIsInN5Iiwic1dpZHRoIiwic0hlaWdodCIsImR5IiwiZFdpZHRoIiwiZEhlaWdodCIsIkNvaW4iLCJ0aWNrc1BlckZyYW1lIiwibnVtYmVyT2ZGcmFtZXMiLCJmcmFtZUluZGV4IiwidGlja0NvdW50IiwiYXVkaW9PYmoiLCJBdWRpbyIsInBsYXkiLCJ1cGRhdGUiLCJpbmZvcm1Gb3JEZXNrdG9wIiwiaGlnaHRTY29yZVRleHRUb3AiLCJoaWdodFNjb3JlVGV4dExlZnQiLCJzY29yZVRvcCIsInNjb3JlTGVmdCIsImhpZ2h0Q29pbnNUZXh0VG9wIiwiaGlnaHRDb2luc1RleHRMZWZ0IiwiYWN0dWFsQ29pbnNUZXh0VG9wIiwiYWN0dWFsQ29pbnNUZXh0TGVmdCIsImxpdmVzVGV4dFRvcCIsImxpdmVzVGV4dExlZnQiLCJHYW1lU291bmQiLCJmb25Tb3VuZCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwidm9sdW1lIiwiZGVhZFNvdW5kIiwibG9vcCIsInBhdXNlIiwiZ2V0Q29udHJvbHNUb01vYmlsZSIsInBsYXllciIsImJvZHlXaWR0aCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRpbWVySWQiLCJzdGFydE1vdmUiLCJjb250cm9scyIsInF1ZXJ5U2VsZWN0b3IiLCJpdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVRvdWNoU3RhcnQiLCJoYW5kbGVUb3VjaE1vdmUiLCJoYW5kbGVUb3VjaEVuZCIsIngxIiwieTEiLCJzdHlsZSIsImRpc3BsYXkiLCJlIiwiZmlyc3RUb3VjaCIsInRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsIngyIiwieTIiLCJjb250YWluZXJYIiwiY29udGFpbmVyWSIsImRpZmZYIiwiZGlmZlkiLCJtb3ZlQ2lyY2xlIiwicHJlcGFyZUZvclRoZU1vdmUiLCJtb3ZlVG9IZXJvIiwibGVmdCIsInRvcCIsIm1vdmUiLCJzZXRJbnRlcnZhbCIsInN0eWxlSWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJJbnRlcnZhbCIsInNjb3JlIiwiZ2V0UmFuZG9tSW50IiwiY2xvdWRzU2V0IiwiY2xvdWQiLCJjbG91ZHMiLCJyYW5kb20iLCJnZXRDbG91ZHMiLCJwdXNoIiwibWFwIiwiVGV4dCIsImxhbmciLCJjb2luIiwiY29pbnMiLCJjb2luc1RleHQiLCJjb2luc0NvdW50ZXIiLCJjb3VudGVyIiwiY29pblkiLCJyYW5kVGltZSIsInJhbmRZIiwiZ2V0Q29pbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb2luc1R4dCIsIkRyYXciLCJsZW5ndGgiLCJmb3JFYWNoIiwic3RhcnQiLCJwbGF5Q29pblNvdW5kIiwicGxhdGZvcm0iLCJwbGF0Zm9ybVJhbmRUaW1lIiwicGxhdGZvcm1zIiwicGxhdGZvcm1zT3B0aW9ucyIsImdldFBsYXRmb3JtIiwidHlwZSIsImZsYWciLCJ0ZXN0IiwibWluIiwibWF4IiwiTWF0aCIsImNlaWwiLCJmbG9vciIsImtleXMiLCJQbGF5ZXJTb3VuZCIsImRlYWQiLCJIZXJvIiwianVtcEZvcmNlIiwiZ3JvdW5kZWQiLCJqdW1wVGltZXIiLCJncmF2aXR5IiwiaXNMZWZ0Iiwic291bmQiLCJqdW1wVXAiLCJqdW1wRG93biIsImJvb2wiLCJTcGFjZSIsIktleVciLCJBcnJvd1VwIiwianVtcCIsIktleU0iLCJBcnJvd1JpZ2h0IiwibW92ZVRvUmlnaHQiLCJLZXlOIiwiQXJyb3dMZWZ0IiwibW92ZVRvTGVmdCIsIkVzY2FwZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwicHJlcGFyZUZvckp1bXAiLCJoZXJvSnVtcCIsImdyYXZpdHlHbyIsImdldFJlYWR5VG9KdW1wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib25sb2FkIiwibWFpbiIsImdldENvbnRleHQiLCJzZXRJdGVtIiwiZW4iLCJzY29yZVR4dCIsImJlc3RDb2luc1R4dCIsImxpdmVzVHh0IiwiYmVzdFNjb3JlVHh0Iiwic3RhcnRHYW1lQnRuIiwib3B0aW9uc0J0biIsInNlbGVjdExuZyIsInNlbGVjdFBsYXllciIsImdhbWVPdmVyIiwiaGVscEJ0biIsImhlbHBUeHQxIiwiaGVscFR4dDIiLCJoZWxwVHh0MyIsImhlbHBUeHQ0IiwiaGVscFR4dDUiLCJoZWxwVHh0NiIsImhlbHBUeHQ3IiwiaGVscFR4dDgiLCJydSIsImJyIiwiT2JzdGFjbGUiLCJzaG93IiwibGciLCJwYWdlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsInJlbW92ZUNoaWxkIiwiaGlkZSIsInBhZ2UxIiwicGFnZVdyYXBwZXIiLCJyZW1vdmUiLCJoZWxwIiwic3RhcnRHYW1lIiwic3RhcnRCdG4iLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJzZWxlY3RMYW5nIiwidmFsdWUiLCJwbGF5ZXIxIiwicGxheWVyMiIsInBsYXllclNlbGVjdGVkIiwic291bmRVcCIsInNvdW5kRG93biIsImlzR3Jhdml0eURvd24iLCJpc0p1bXBVcCIsImN1cnJlbnRUaW1lIiwicGFydGljbGVzT25TY3JlZW4iLCJ3IiwiaCIsInBhcnRpY2xlc0FycmF5IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiY2xpZW50UmVzaXplIiwiZXYiLCJjcmVhdGVTbm93Rmxha2VzIiwiaSIsIm9wYWNpdHkiLCJzcGVlZFgiLCJzcGVlZFkiLCJyYWRpdXMiLCJkcmF3U25vd0ZsYWtlcyIsImdyYWRpZW50IiwiY3JlYXRlUmFkaWFsR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsImZpbGxTdHlsZSIsImZpbGwiLCJtb3ZlU25vd0ZsYWtlcyIsInVwZGF0ZVNub3dGYWxsIiwiY2xlYXJSZWN0Iiwib2JzdGFjbGVzIiwiU3Bhd25PYnN0YWNsZSIsIlJhbmRvbUludFJhbmdlIiwib2JzdGFjbGUiLCJyb3VuZCIsImhpZ2hTY29yZSIsImhpZ2hDb2lucyIsImhpZ2h0Q29pbnNUZXh0Iiwic2NvcmVUZXh0IiwiaGlnaHRTY29yZVRleHQiLCJsaXZlc1RleHQiLCJoZXJvSW1hZ2UiLCJwbGF5U291bmQiLCJ3aXRoT2ZHYW1lIiwiY29kZSIsImZvbnQiLCJVcGRhdGUiLCJpbml0aWFsU3Bhd25UaW1lciIsInNwYXduVGltZXIiLCJLZXlRIiwic3RvcEZvbiIsIktleUEiLCJwbGF5Rm9uIiwibyIsInNwbGljZSIsInBsYXlEZWFkIiwidCIsImEiLCJjIiwicyIsInRleHRBbGlnbiIsImZpbGxUZXh0IiwiY2xvc2VQYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==