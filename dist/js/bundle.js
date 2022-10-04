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
    this.width = options.width;
    console.log(this.width);
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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _coin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coin */ "./src/coin.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text */ "./src/text.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lang */ "./src/lang.js");
/* harmony import */ var _get_random_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get_random_int */ "./src/get_random_int.js");






var coin;
var coins = [];
var coinsText; // должен быть именно обьект а не переменная типа let coinsCounter = 0;
// удалить эти строки через несколько коммитов)

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
  coinsText = new _text__WEBPACK_IMPORTED_MODULE_3__["default"]("".concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[localStorage.getItem('langSelected')].coinsTxt, " ").concat(coinsCounter.counter), 350, 25, 'right', '#212121', '20');
  coinsText.Draw();

  if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % 200 === 0) {
    randTime = (0,_get_random_int__WEBPACK_IMPORTED_MODULE_5__["default"])(20, 100);
    randTime += 200;
    coinY = randY[(0,_get_random_int__WEBPACK_IMPORTED_MODULE_5__["default"])(0, 3)];
  }

  if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % randTime === 0) {
    coin = new _coin__WEBPACK_IMPORTED_MODULE_2__["default"]({
      x: _index__WEBPACK_IMPORTED_MODULE_1__.canvas.width,
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
  return Math.floor(Math.random() * (max - min)) + min; // Максимум не включается, минимум включается
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
    } // gravity
    // gravityGo() {
    //   console.log(this.test)
    //   this.y += this.dy;
    //   if (this.y + this.height < canvas.height) {
    //     this.dy += this.gravity;
    //     this.grounded = false;
    //   } else {
    //     this.dy = 0;
    //     this.grounded = true;
    //     this.y = canvas.height - this.height;
    //   }
    // }

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
    } // jump

  }, {
    key: "getReadyToJump",
    value: function getReadyToJump() {
      if (_start_game__WEBPACK_IMPORTED_MODULE_1__.keys.Space || _start_game__WEBPACK_IMPORTED_MODULE_1__.keys.KeyW || _start_game__WEBPACK_IMPORTED_MODULE_1__.keys.ArrowUp) {
        this.sound.jumpUp();
        this.Jump();
      } else {
        this.jumpTimer = 0;
      }

      if (_start_game__WEBPACK_IMPORTED_MODULE_1__.keys.KeyM || _start_game__WEBPACK_IMPORTED_MODULE_1__.keys.ArrowRight) {
        if (this.dx < _index__WEBPACK_IMPORTED_MODULE_0__.canvas.width - 100) this.dx += 5;
        this.sx = 0;
        this.isLeft = false;
        this.numberOfFrames = 6;
      }

      if (_start_game__WEBPACK_IMPORTED_MODULE_1__.keys.KeyN || _start_game__WEBPACK_IMPORTED_MODULE_1__.keys.ArrowLeft) {
        if (this.dx > 0) this.dx -= 5;
        this.sx = 100;
        this.isLeft = true;
        this.numberOfFrames = 6;
      }

      if (_start_game__WEBPACK_IMPORTED_MODULE_1__.keys.Escape) {
        window.location.reload();
      }
    }
  }, {
    key: "Jump",
    value: function Jump() {
      if (this.grounded && this.jumpTimer === 0) {
        this.jumpTimer = 1;
        this.dy = -this.jumpForce;
        this.sound.jumpDown();
      } else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
        this.jumpTimer += 1;
        this.dy = -this.jumpForce - this.jumpTimer / 50;
        this.numberOfFrames = 1;

        if (this.isLeft) {
          this.sx = 200;
        } else {
          this.sx = 500;
        }
      }
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
  page.classList.add('page', 'page-image');
  page.innerHTML = "\n<a class=\"btnflip start-main start\" href=\"#\">\n  <span class=\"btnflip-item btnflip__front\">".concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].startGameBtn, "</span>\n  <span class=\"btnflip-item btnflip__center\"></span>\n  <span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].startGameBtn, "</span>\n</a>\n\n<a class=\"btnflip options-main options\" href=\"#\">\n  <span class=\"btnflip-item btnflip__front\">").concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].optionsBtn, "</span>\n  <span class=\"btnflip-item btnflip__center\"></span>\n  <span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].optionsBtn, "</span>\n</a>\n\n<a class=\"btnflip help-main help\" href=\"#\">  \n  <span class=\"btnflip-item btnflip__front\">").concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].helpBtn, "</span>\n  <span class=\"btnflip-item btnflip__center\"></span>\n  <span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].helpBtn, "</span>\n</a>\n<footer class=\"footer\">\n<strong>\n<a href=\"https://github.com/SergRudovich\" target=\"blank\">Sergey Rudovich</a>\n&nbsp|&nbsp\n<a href=\"https://github.com/conservativ007\" target=\"blank\">Maks conservativ007</a>\n<p style=\"text-align: center\">\n<a href=\"https://rs.school/js/\" target=\"blank\">\n<img src=\"https://rs.school/images/rs_school_js.svg\" alt=\"RS School\" style=\"width: 50px\"></a>\n<span class=\"footer__year\">\xA9 2021</span>\n</p>\n</strong>\n</footer>\n  ");

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












 // let lives;

var score;
var highScore;
var highCoins;
var scoreText;
var hightScoreText;
var hightCoinsText;
var livesText;
var gameSpeed;
var player;
var obstacles = [];
var coins = [];
var keys = {};
var coinImage;
var playSound = new _game_sound__WEBPACK_IMPORTED_MODULE_5__["default"]();

function start() {
  _index__WEBPACK_IMPORTED_MODULE_3__.canvas.width = window.innerWidth;
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

  coinImage = new Image();
  coinImage.src = localStorage.getItem('SpriteImage');
  player = new _hero__WEBPACK_IMPORTED_MODULE_0__["default"]({
    image: coinImage,
    width: 600,
    height: 100,
    numberOfFrames: 6,
    ticksPerFrame: 4,
    x: 50,
    y: 50,
    test: _index__WEBPACK_IMPORTED_MODULE_3__.canvas.height
  });
  player.start();
  scoreText = new _text__WEBPACK_IMPORTED_MODULE_1__["default"]("".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].scoreTxt, " ").concat(score), 25, 25, 'left', '#212121', '20');
  livesText = new _text__WEBPACK_IMPORTED_MODULE_1__["default"]("".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].livesTxt, " ").concat(localStorage.getItem('lives')), 500, 25, 'right', '#212121', '20');
  hightScoreText = new _text__WEBPACK_IMPORTED_MODULE_1__["default"]("".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].bestScoreTxt, " ").concat(highScore), _index__WEBPACK_IMPORTED_MODULE_3__.canvas.width - 150, 25, 'right', '#212121', '20');
  hightCoinsText = new _text__WEBPACK_IMPORTED_MODULE_1__["default"]("".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].coinsTxt, " ").concat(highCoins), _index__WEBPACK_IMPORTED_MODULE_3__.canvas.width - 25, 25, 'right', '#212121', '20');
  (0,_snow_flakes__WEBPACK_IMPORTED_MODULE_4__.createSnowFlakes)(); // playSound.playFon();

  requestAnimationFrame(Update);
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
    hightCoinsText.t = "".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].coinsTxt, " ").concat(highCoins);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDRDs7Ozs7Ozs7Ozs7O1VDcEJIO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9QbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL2Nsb3VkLmpzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvLi9zcmMvY29pbi5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL2dhbWUtc291bmQuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9nZXRfY2xvdWRzLmpzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvLi9zcmMvZ2V0X2NvaW4uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9nZXRfcGxhdGZvcm0uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9nZXRfcmFuZG9tX2ludC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL2hlcm8uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL2xhbmcuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9vYnN0YWNsZS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL3BhZ2VzL2RlYWQuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9wYWdlcy9nYW1lLW92ZXIuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9wYWdlcy9oZWxwLmpzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvLi9zcmMvcGFnZXMvbWFpbi5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL3BhZ2VzL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9wbGF5ZXItc291bmQuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9zbm93X2ZsYWtlcy5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL3NwYXduX29ic3RhY2xlLmpzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvLi9zcmMvc3RhcnRfZ2FtZS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL3RleHQuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm0ge1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHRoaXMueCA9IG9wdGlvbnMueDtcclxuICAgIHRoaXMueSA9IG9wdGlvbnMueTtcclxuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcclxuICAgIHRoaXMuZmxpZ2h0QWx0aXR1ZGUgPSBvcHRpb25zLmZsaWdodEFsdGl0dWRlO1xyXG4gICAgdGhpcy5nYW1lU3BlZWQgPSBvcHRpb25zLmdhbWVTcGVlZDtcclxuXHJcbiAgICB0aGlzLmR4ID0gLXRoaXMuZ2FtZVNwZWVkO1xyXG5cclxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1hZ2Uuc3JjID0gb3B0aW9ucy5pbWFnZVNyYztcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMueCArPSB0aGlzLmR4O1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgIHRoaXMueCxcclxuICAgICAgY2FudmFzLmhlaWdodCAtIHRoaXMuZmxpZ2h0QWx0aXR1ZGUsXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gJy4vaW5kZXguanMnO1xyXG5pbXBvcnQgeyBnYW1lU3BlZWQgfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvdWQge1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aDtcclxuICAgIHRoaXMuc3ggPSBvcHRpb25zLnN4O1xyXG4gICAgdGhpcy5zeSA9IG9wdGlvbnMuc3k7XHJcbiAgICB0aGlzLnNXaWR0aCA9IG9wdGlvbnMuc1dpZHRoO1xyXG4gICAgdGhpcy5zSGVpZ2h0ID0gb3B0aW9ucy5zSGVpZ2h0O1xyXG4gICAgdGhpcy5keSA9IG9wdGlvbnMuZHk7XHJcbiAgICB0aGlzLmRXaWR0aCA9IG9wdGlvbnMuc1dpZHRoO1xyXG4gICAgdGhpcy5kSGVpZ2h0ID0gb3B0aW9ucy5zSGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuZHggPSAtZ2FtZVNwZWVkIC8gZ2FtZVNwZWVkO1xyXG5cclxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1hZ2Uuc3JjID0gb3B0aW9ucy5zcmM7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLnggKz0gdGhpcy5keDtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICB0aGlzLmltYWdlLFxyXG4gICAgICB0aGlzLnN4LFxyXG4gICAgICB0aGlzLnN5LFxyXG4gICAgICB0aGlzLnNXaWR0aCxcclxuICAgICAgdGhpcy5zSGVpZ2h0LFxyXG4gICAgICB0aGlzLngsXHJcbiAgICAgIHRoaXMuZHksXHJcbiAgICAgIHRoaXMuZFdpZHRoLFxyXG4gICAgICB0aGlzLmRIZWlnaHQsXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29pbiB7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgdGhpcy54ID0gb3B0aW9ucy54O1xyXG4gICAgdGhpcy55ID0gb3B0aW9ucy55O1xyXG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy53aWR0aCk7XHJcblxyXG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcclxuXHJcbiAgICB0aGlzLnRpY2tzUGVyRnJhbWUgPSBvcHRpb25zLnRpY2tzUGVyRnJhbWUgfHwgMDtcclxuICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSBvcHRpb25zLm51bWJlck9mRnJhbWVzIHx8IDE7XHJcblxyXG4gICAgdGhpcy5nYW1lU3BlZWQgPSBvcHRpb25zLmdhbWVTcGVlZDtcclxuXHJcbiAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xyXG4gICAgdGhpcy50aWNrQ291bnQgPSAwO1xyXG5cclxuICAgIHRoaXMuZHggPSAtdGhpcy5nYW1lU3BlZWQ7XHJcblxyXG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWFnZS5zcmMgPSAnLi9pbWFnZXMvY29pbi5wbmcnO1xyXG5cclxuICAgIHRoaXMuYXVkaW9PYmogPSBuZXcgQXVkaW8oJy4vc291bmQvY29pbjIubXAzJyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLnggKz0gdGhpcy5keDtcclxuXHJcbiAgICB0aGlzLnRpY2tDb3VudCsrO1xyXG5cclxuICAgIGlmICh0aGlzLnRpY2tDb3VudCA+IHRoaXMudGlja3NQZXJGcmFtZSkge1xyXG4gICAgICB0aGlzLnRpY2tDb3VudCA9IDA7XHJcbiAgICAgIGlmICh0aGlzLmZyYW1lSW5kZXggPCB0aGlzLm51bWJlck9mRnJhbWVzIC0gMSkge1xyXG4gICAgICAgIHRoaXMuZnJhbWVJbmRleCArPSAxO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgICh0aGlzLmZyYW1lSW5kZXggKiB0aGlzLndpZHRoKSAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXHJcbiAgICAgIDAsXHJcbiAgICAgIHRoaXMud2lkdGggLyB0aGlzLm51bWJlck9mRnJhbWVzLFxyXG4gICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgdGhpcy54LFxyXG4gICAgICB0aGlzLnksXHJcbiAgICAgIHRoaXMud2lkdGggLyB0aGlzLm51bWJlck9mRnJhbWVzLFxyXG4gICAgICB0aGlzLmhlaWdodCxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwbGF5Q29pblNvdW5kKCkge1xyXG4gICAgdGhpcy5hdWRpb09iai5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTb3VuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyB0aGlzLnVybCA9IHdpbmRvdy5nYW1lU3RhdGUuc291bmRVcmw7XHJcbiAgICAvLyB0aGlzLm51bSA9IDE7XHJcbiAgICB0aGlzLmZvblNvdW5kID0gbmV3IEF1ZGlvKCdzb3VuZC9mb24xLm1wMycpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmZvblNvdW5kKTtcclxuICAgIHRoaXMuZm9uU291bmQudm9sdW1lID0gMC4xO1xyXG4gICAgdGhpcy5kZWFkU291bmQgPSBuZXcgQXVkaW8oJ3NvdW5kL2RlYWQubXAzJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZGVhZFNvdW5kKTtcclxuICB9XHJcblxyXG4gIHBsYXlGb24oKSB7XHJcbiAgICB0aGlzLmZvblNvdW5kLmxvb3AgPSB0cnVlO1xyXG4gICAgdGhpcy5mb25Tb3VuZC5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICBzdG9wRm9uKCkge1xyXG4gICAgdGhpcy5mb25Tb3VuZC5wYXVzZSgpO1xyXG4gIH1cclxuXHJcbiAgcGxheURlYWQoKSB7XHJcbiAgICB0aGlzLmRlYWRTb3VuZC5wbGF5KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHNjb3JlIH0gZnJvbSAnLi9zdGFydF9nYW1lJztcclxuaW1wb3J0IENsb3VkIGZyb20gJy4vY2xvdWQnO1xyXG5pbXBvcnQgZ2V0UmFuZG9tSW50IGZyb20gJy4vZ2V0X3JhbmRvbV9pbnQnO1xyXG5cclxuY29uc3QgY2xvdWRzU2V0ID0gW1xyXG4gIHtcclxuICAgIHNyYzogJ2ltYWdlcy9jbG91ZHMucG5nJyxcclxuICAgIHN4OiAwLFxyXG4gICAgc3k6IDAsXHJcbiAgICBzV2lkdGg6IDIyMCxcclxuICAgIHNIZWlnaHQ6IDE2MCxcclxuICAgIGR5OiAxNTAsXHJcbiAgICBkV2lkdGg6IDIyMCxcclxuICAgIGRIZWlnaHQ6IDE2MCxcclxuICB9LFxyXG4gIHtcclxuICAgIHNyYzogJ2ltYWdlcy9jbG91ZHMucG5nJyxcclxuICAgIHN4OiAyNTAsXHJcbiAgICBzeTogMCxcclxuICAgIHNXaWR0aDogMjIwLFxyXG4gICAgc0hlaWdodDogMTYwLFxyXG4gICAgZHk6IDEwMCxcclxuICAgIGRXaWR0aDogMjIwLFxyXG4gICAgZEhlaWdodDogMTYwLFxyXG4gIH0sXHJcbl07XHJcblxyXG5sZXQgY2xvdWQ7XHJcbmNvbnN0IGNsb3VkcyA9IFtdO1xyXG5sZXQgcmFuZG9tO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q2xvdWRzKCkge1xyXG4gIGlmIChzY29yZSAlIDUwMCA9PT0gMCkge1xyXG4gICAgcmFuZG9tID0gY2xvdWRzU2V0W2dldFJhbmRvbUludCgwLCAyKV07XHJcbiAgICBjbG91ZCA9IG5ldyBDbG91ZChyYW5kb20pO1xyXG5cclxuICAgIGNsb3Vkcy5wdXNoKGNsb3VkKTtcclxuICB9XHJcblxyXG4gIGNsb3Vkcy5tYXAoKGNsb3VkKSA9PiB7XHJcbiAgICBjbG91ZC51cGRhdGUoKTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBzY29yZSwgcGxheWVyLCBnYW1lU3BlZWQgfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xyXG5pbXBvcnQgeyBjYW52YXMgfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IENvaW4gZnJvbSAnLi9jb2luJztcclxuXHJcbmltcG9ydCBUZXh0IGZyb20gJy4vdGV4dCc7XHJcbmltcG9ydCB7IGxhbmcgfSBmcm9tICcuL2xhbmcnO1xyXG5pbXBvcnQgZ2V0UmFuZG9tSW50IGZyb20gJy4vZ2V0X3JhbmRvbV9pbnQnO1xyXG5cclxubGV0IGNvaW47XHJcbmNvbnN0IGNvaW5zID0gW107XHJcblxyXG5sZXQgY29pbnNUZXh0O1xyXG4vLyDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0LjQvNC10L3QvdC+INC+0LHRjNC10LrRgiDQsCDQvdC1INC/0LXRgNC10LzQtdC90L3QsNGPINGC0LjQv9CwIGxldCBjb2luc0NvdW50ZXIgPSAwO1xyXG4vLyDRg9C00LDQu9C40YLRjCDRjdGC0Lgg0YHRgtGA0L7QutC4INGH0LXRgNC10Lcg0L3QtdGB0LrQvtC70YzQutC+INC60L7QvNC80LjRgtC+0LIpXHJcbmV4cG9ydCBjb25zdCBjb2luc0NvdW50ZXIgPSB7XHJcbiAgY291bnRlcjogMCxcclxufTtcclxuXHJcbmxldCBjb2luWTtcclxubGV0IHJhbmRUaW1lO1xyXG5jb25zdCByYW5kWSA9IFtcclxuICB7XHJcbiAgICB5OiAzNTAsXHJcbiAgfSxcclxuICB7XHJcbiAgICB5OiA2MDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICB5OiAzMDAsXHJcbiAgfSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGdldENvaW4oKSB7XHJcbiAgY29pbnNUZXh0ID0gbmV3IFRleHQoXHJcbiAgICBgJHtsYW5nW2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKV0uY29pbnNUeHR9ICR7Y29pbnNDb3VudGVyLmNvdW50ZXJ9YCwgMzUwLCAyNSwgJ3JpZ2h0JywgJyMyMTIxMjEnLCAnMjAnLFxyXG4gICk7XHJcblxyXG4gIGNvaW5zVGV4dC5EcmF3KCk7XHJcblxyXG4gIGlmIChzY29yZSAlIDIwMCA9PT0gMCkge1xyXG4gICAgcmFuZFRpbWUgPSBnZXRSYW5kb21JbnQoMjAsIDEwMCk7XHJcbiAgICByYW5kVGltZSArPSAyMDA7XHJcbiAgICBjb2luWSA9IHJhbmRZW2dldFJhbmRvbUludCgwLCAzKV07XHJcbiAgfVxyXG5cclxuICBpZiAoc2NvcmUgJSByYW5kVGltZSA9PT0gMCkge1xyXG4gICAgY29pbiA9IG5ldyBDb2luKHtcclxuICAgICAgeDogY2FudmFzLndpZHRoLFxyXG4gICAgICB5OiBjb2luWS55LFxyXG4gICAgICB3aWR0aDogNTA0LFxyXG4gICAgICBoZWlnaHQ6IDg0LFxyXG4gICAgICBudW1iZXJPZkZyYW1lczogNixcclxuICAgICAgdGlja3NQZXJGcmFtZTogNCxcclxuICAgICAgZ2FtZVNwZWVkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29pbnMucHVzaChjb2luKTtcclxuICB9XHJcblxyXG4gIGlmIChjb2lucy5sZW5ndGggPiAwKSB7XHJcbiAgICBjb2lucy5mb3JFYWNoKChjb2luKSA9PiB7XHJcbiAgICAgIGNvaW4uc3RhcnQoKTtcclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICBwbGF5ZXIuZHggPCBjb2luLnggKyAoY29pbi53aWR0aCAvIDYpXHJcbiAgICAgICAgJiYgcGxheWVyLmR4ICsgKHBsYXllci53aWR0aCAvIDEwKSAtIDEwID4gY29pbi54XHJcbiAgICAgICAgJiYgcGxheWVyLnkgPCBjb2luLnkgKyBjb2luLmhlaWdodFxyXG4gICAgICAgICYmIHBsYXllci55ICsgcGxheWVyLmhlaWdodCA+PSBjb2luLnlcclxuICAgICAgKSB7XHJcbiAgICAgICAgY29pbi55ID0gMTAwMDA7XHJcbiAgICAgICAgY29pbi5wbGF5Q29pblNvdW5kKCk7XHJcbiAgICAgICAgY29pbnNDb3VudGVyLmNvdW50ZXIgKz0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvaW4ueCA8IC01MCkge1xyXG4gICAgICAgIGNvaW4ueSA9IDEwMDAwO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldENvaW4gfTtcclxuIiwiaW1wb3J0IHsgc2NvcmUsIHBsYXllciwgZ2FtZVNwZWVkIH0gZnJvbSAnLi9zdGFydF9nYW1lJztcclxuaW1wb3J0IHsgY2FudmFzIH0gZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCBQbGF0Zm9ybSBmcm9tICcuL1BsYXRmb3JtJztcclxuaW1wb3J0IGdldFJhbmRvbUludCBmcm9tICcuL2dldF9yYW5kb21faW50JztcclxuXHJcbmxldCBwbGF0Zm9ybTtcclxuXHJcbmxldCByYW5kVGltZTtcclxuY29uc3QgcGxhdGZvcm1SYW5kVGltZSA9IFsyMDAsIDIyMCwgMjUwLCAzMDBdO1xyXG5cclxuY29uc3QgcGxhdGZvcm1zID0gW107XHJcbmNvbnN0IHBsYXRmb3Jtc09wdGlvbnMgPSBbXHJcbiAge1xyXG4gICAgc3JjOiAnaW1hZ2VzL3BsYXRmb3JtYTEucG5nJyxcclxuICAgIHdpZHRoOiA0OTUsXHJcbiAgICBoZWlnaHQ6IDExNSxcclxuICAgIGZsaWdodEFsdGl0dWRlOiAyNTAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzcmM6ICdpbWFnZXMvcGxhdGZvcm1hMi5wbmcnLFxyXG4gICAgd2lkdGg6IDI4MCxcclxuICAgIGhlaWdodDogMTE1LFxyXG4gICAgZmxpZ2h0QWx0aXR1ZGU6IDMwMCxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UGxhdGZvcm0oKSB7XHJcbiAgaWYgKHNjb3JlICUgMjAwID09PSAwKSB7XHJcbiAgICByYW5kVGltZSA9IHBsYXRmb3JtUmFuZFRpbWVbZ2V0UmFuZG9tSW50KDAsIDQpXTtcclxuICB9XHJcblxyXG4gIGlmIChzY29yZSAlIHJhbmRUaW1lID09PSAwKSB7XHJcbiAgICBsZXQgdHlwZSA9IGdldFJhbmRvbUludCgwLCAyKTtcclxuICAgIHR5cGUgPSBwbGF0Zm9ybXNPcHRpb25zW3R5cGVdO1xyXG5cclxuICAgIHBsYXRmb3JtID0gbmV3IFBsYXRmb3JtKHtcclxuICAgICAgeDogY2FudmFzLndpZHRoLFxyXG4gICAgICB5OiBjYW52YXMuaGVpZ2h0LFxyXG4gICAgICBmbGlnaHRBbHRpdHVkZTogdHlwZS5mbGlnaHRBbHRpdHVkZSxcclxuICAgICAgd2lkdGg6IHR5cGUud2lkdGgsXHJcbiAgICAgIGhlaWdodDogdHlwZS5oZWlnaHQsXHJcbiAgICAgIGdhbWVTcGVlZCxcclxuICAgICAgaW1hZ2VTcmM6IHR5cGUuc3JjLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcGxhdGZvcm1zLnB1c2gocGxhdGZvcm0pO1xyXG4gIH1cclxuXHJcbiAgbGV0IGZsYWcgPSBmYWxzZTtcclxuXHJcbiAgZm9yIChjb25zdCBwbGF0Zm9ybSBvZiBwbGF0Zm9ybXMpIHtcclxuICAgIHBsYXRmb3JtLnVwZGF0ZSgpO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgKHBsYXllci5keCA+IHBsYXRmb3JtLnggJiYgcGxheWVyLmR4IDwgcGxhdGZvcm0ueCArIHBsYXRmb3JtLndpZHRoIC0gNDApXHJcbiAgICAgICYmIHBsYXllci55IDwgY2FudmFzLmhlaWdodCAtIHBsYXRmb3JtLmZsaWdodEFsdGl0dWRlXHJcbiAgICApIHtcclxuICAgICAgcGxheWVyLnRlc3QgPSBjYW52YXMuaGVpZ2h0IC0gcGxhdGZvcm0uZmxpZ2h0QWx0aXR1ZGUgKyAyO1xyXG4gICAgICBmbGFnID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAoIWZsYWcpIHtcclxuICAgICAgcGxheWVyLnRlc3QgPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xyXG4gIG1pbiA9IE1hdGguY2VpbChtaW4pO1xyXG4gIG1heCA9IE1hdGguZmxvb3IobWF4KTtcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluOyAvLyDQnNCw0LrRgdC40LzRg9C8INC90LUg0LLQutC70Y7Rh9Cw0LXRgtGB0Y8sINC80LjQvdC40LzRg9C8INCy0LrQu9GO0YfQsNC10YLRgdGPXHJcbn0iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyBrZXlzIH0gZnJvbSAnLi9zdGFydF9nYW1lJztcclxuaW1wb3J0IFBsYXllclNvdW5kIGZyb20gJy4vcGxheWVyLXNvdW5kJztcclxuaW1wb3J0IHsgZGVhZCB9IGZyb20gJy4vcGFnZXMvZGVhZCc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlcm8ge1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHRoaXMuaW1hZ2UgPSBvcHRpb25zLmltYWdlO1xyXG5cclxuICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XHJcbiAgICB0aGlzLnRpY2tDb3VudCA9IDA7XHJcbiAgICB0aGlzLnRpY2tzUGVyRnJhbWUgPSBvcHRpb25zLnRpY2tzUGVyRnJhbWUgfHwgMDtcclxuICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSBvcHRpb25zLm51bWJlck9mRnJhbWVzIHx8IDE7XHJcblxyXG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuZHkgPSBvcHRpb25zLmR5IHx8IDA7XHJcbiAgICB0aGlzLmR4ID0gMDtcclxuICAgIHRoaXMuc3ggPSAwO1xyXG4gICAgdGhpcy5qdW1wRm9yY2UgPSAxNTtcclxuICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuanVtcFRpbWVyID0gMDtcclxuXHJcbiAgICB0aGlzLnkgPSBvcHRpb25zLnk7XHJcbiAgICB0aGlzLnggPSBvcHRpb25zLng7XHJcbiAgICB0aGlzLmdyYXZpdHkgPSAxO1xyXG5cclxuICAgIHRoaXMuaXNMZWZ0ID0gZmFsc2U7XHJcblxyXG4gICAgLy8gcGxhdGZvcm1cclxuICAgIHRoaXMudGVzdCA9IG9wdGlvbnMudGVzdDtcclxuXHJcbiAgICB0aGlzLnNvdW5kID0gbmV3IFBsYXllclNvdW5kKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLnRpY2tDb3VudCArPSAxO1xyXG5cclxuICAgIGlmICh0aGlzLnRpY2tDb3VudCA+IHRoaXMudGlja3NQZXJGcmFtZSkge1xyXG4gICAgICB0aGlzLnRpY2tDb3VudCA9IDA7XHJcbiAgICAgIGlmICh0aGlzLmZyYW1lSW5kZXggPCB0aGlzLm51bWJlck9mRnJhbWVzIC0gMSkge1xyXG4gICAgICAgIHRoaXMuZnJhbWVJbmRleCArPSAxO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgICh0aGlzLmZyYW1lSW5kZXggKiB0aGlzLndpZHRoKSAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXHJcbiAgICAgIHRoaXMuc3gsXHJcbiAgICAgIHRoaXMud2lkdGggLyB0aGlzLm51bWJlck9mRnJhbWVzLFxyXG4gICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgdGhpcy5keCxcclxuICAgICAgdGhpcy55LFxyXG4gICAgICB0aGlzLndpZHRoIC8gdGhpcy5udW1iZXJPZkZyYW1lcyxcclxuICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gZ3Jhdml0eVxyXG4gIC8vIGdyYXZpdHlHbygpIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMudGVzdClcclxuICAvLyAgIHRoaXMueSArPSB0aGlzLmR5O1xyXG5cclxuICAvLyAgIGlmICh0aGlzLnkgKyB0aGlzLmhlaWdodCA8IGNhbnZhcy5oZWlnaHQpIHtcclxuICAvLyAgICAgdGhpcy5keSArPSB0aGlzLmdyYXZpdHk7XHJcbiAgLy8gICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIHRoaXMuZHkgPSAwO1xyXG4gIC8vICAgICB0aGlzLmdyb3VuZGVkID0gdHJ1ZTtcclxuICAvLyAgICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAtIHRoaXMuaGVpZ2h0O1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgZ3Jhdml0eUdvKCkge1xyXG4gICAgdGhpcy55ICs9IHRoaXMuZHk7XHJcblxyXG4gICAgaWYgKHRoaXMueSArIHRoaXMuaGVpZ2h0IDwgdGhpcy50ZXN0KSB7XHJcbiAgICAgIHRoaXMuZHkgKz0gdGhpcy5ncmF2aXR5O1xyXG4gICAgICB0aGlzLmdyb3VuZGVkID0gZmFsc2U7XHJcbiAgICAgIGlmICh0aGlzLmR5ID4gMCkge1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTGVmdCkge1xyXG4gICAgICAgICAgdGhpcy5zeCA9IDMwMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zeCA9IDQwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZHkgPSAwO1xyXG4gICAgICB0aGlzLmdyb3VuZGVkID0gdHJ1ZTtcclxuICAgICAgLy8gZGVhZC5oaWRlKCk7XHJcbiAgICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSA2O1xyXG4gICAgICBpZiAodGhpcy5pc0xlZnQpIHtcclxuICAgICAgICB0aGlzLnN4ID0gMTAwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc3ggPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMueSA9IHRoaXMudGVzdCAtIHRoaXMuaGVpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8ganVtcFxyXG4gIGdldFJlYWR5VG9KdW1wKCkge1xyXG4gICAgaWYgKGtleXMuU3BhY2UgfHwga2V5cy5LZXlXIHx8IGtleXMuQXJyb3dVcCkge1xyXG4gICAgICB0aGlzLnNvdW5kLmp1bXBVcCgpO1xyXG4gICAgICB0aGlzLkp1bXAoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuanVtcFRpbWVyID0gMDtcclxuICAgIH1cclxuICAgIGlmIChrZXlzLktleU0gfHwga2V5cy5BcnJvd1JpZ2h0KSB7XHJcbiAgICAgIGlmICh0aGlzLmR4IDwgY2FudmFzLndpZHRoIC0gMTAwKSB0aGlzLmR4ICs9IDU7XHJcbiAgICAgIHRoaXMuc3ggPSAwO1xyXG4gICAgICB0aGlzLmlzTGVmdCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gNjtcclxuICAgIH1cclxuICAgIGlmIChrZXlzLktleU4gfHwga2V5cy5BcnJvd0xlZnQpIHtcclxuICAgICAgaWYgKHRoaXMuZHggPiAwKSB0aGlzLmR4IC09IDU7XHJcbiAgICAgIHRoaXMuc3ggPSAxMDA7XHJcbiAgICAgIHRoaXMuaXNMZWZ0ID0gdHJ1ZTtcclxuICAgICAgdGhpcy5udW1iZXJPZkZyYW1lcyA9IDY7XHJcbiAgICB9XHJcbiAgICBpZiAoa2V5cy5Fc2NhcGUpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgSnVtcCgpIHtcclxuICAgIGlmICh0aGlzLmdyb3VuZGVkICYmIHRoaXMuanVtcFRpbWVyID09PSAwKSB7XHJcbiAgICAgIHRoaXMuanVtcFRpbWVyID0gMTtcclxuICAgICAgdGhpcy5keSA9IC10aGlzLmp1bXBGb3JjZTtcclxuICAgICAgdGhpcy5zb3VuZC5qdW1wRG93bigpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmp1bXBUaW1lciA+IDAgJiYgdGhpcy5qdW1wVGltZXIgPCAxNSkge1xyXG4gICAgICB0aGlzLmp1bXBUaW1lciArPSAxO1xyXG4gICAgICB0aGlzLmR5ID0gLXRoaXMuanVtcEZvcmNlIC0gKHRoaXMuanVtcFRpbWVyIC8gNTApO1xyXG4gICAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gMTtcclxuICAgICAgaWYgKHRoaXMuaXNMZWZ0KSB7XHJcbiAgICAgICAgdGhpcy5zeCA9IDIwMDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnN4ID0gNTAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIGNvbnN0IGxvb3AgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgIHRoaXMuZ3Jhdml0eUdvKCk7XHJcbiAgICAgIHRoaXMuZ2V0UmVhZHlUb0p1bXAoKTtcclxuXHJcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW5pbWF0ZScpID09PSAndHJ1ZScpIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5pbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuXHJcbmltcG9ydCBtYWluIGZyb20gJy4vcGFnZXMvbWFpbic7XHJcblxyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYW5pbWF0ZScsICd0cnVlJyk7XHJcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXZlcycsIDMpO1xyXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmdTZWxlY3RlZCcsICdlbicpO1xyXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdTcHJpdGVJbWFnZScpKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnU3ByaXRlSW1hZ2UnLCAnaW1hZ2VzL3Nwcml0ZTIucG5nJyk7XHJcblxyXG5tYWluKCk7XHJcblxyXG5leHBvcnQgeyBjYW52YXMsIGN0eCB9O1xyXG4iLCJjb25zdCBsYW5nID0ge1xyXG4gIGVuOiB7XHJcbiAgICBzY29yZVR4dDogJ1Njb3JlOicsXHJcbiAgICBjb2luc1R4dDogJ0NvaW5zOicsXHJcbiAgICBsaXZlc1R4dDogJ0xpdmVzOicsXHJcbiAgICBiZXN0U2NvcmVUeHQ6ICdCZXN0IHNjb3JlOicsXHJcbiAgICBzdGFydEdhbWVCdG46ICdTdGFydCBHYW1lJyxcclxuICAgIG9wdGlvbnNCdG46ICdPcHRpb25zJyxcclxuICAgIHNlbGVjdExuZzogJ1NlbGVjdCBsYW5ndWFnZTonLFxyXG4gICAgc2VsZWN0UGxheWVyOiAnU2VsZWN0IHBsYXllcjonLFxyXG4gICAgZ2FtZU92ZXI6ICdZb3UgbG9zdC4gQ2xpY2sgdG8gY29udGludWUuJyxcclxuICAgIGhlbHBCdG46ICdIZWxwJyxcclxuICAgIGhlbHBUeHQxOiAnWW91ciBtaXNzaW9uIGlzIHRvIGNvbGxlY3QgYWxsIHRoZSBjb2lucy4gVG8gZG8gdGhpcyB5b3Ugb25seSBoYXZlIGEgY2VydGFpbiBudW1iZXIgIG9mIGxpdmVzLiBZb3UgY2FuIGp1bXAsIG1vdmUgbGVmdCBhbmQgcmlnaHQgd2l0aGluIHNjcmVlbi4nLFxyXG4gICAgaGVscFR4dDI6ICdLZXlib2FyZCBDb250cm9sOicsXHJcbiAgICBoZWxwVHh0MzogJ1csIFNwYWNlLCBeIC0gSlVNUCcsXHJcbiAgICBoZWxwVHh0NDogJ00sID4gLSBNT1ZFIFJJR0hUJyxcclxuICAgIGhlbHBUeHQ1OiAnTiwgPCAtIE1PVkUgTEVGVCcsXHJcbiAgICBoZWxwVHh0NjogJ0EgLSBNVVNJQyBPTicsXHJcbiAgICBoZWxwVHh0NzogJ1EgLSBNVVNJQyBPRkYnLFxyXG4gICAgaGVscFR4dDg6ICdFc2MgLSBNQUlOIE1FTlUnLFxyXG4gIH0sXHJcbiAgcnU6IHtcclxuICAgIHNjb3JlVHh0OiAn0KDQtdC30YPQu9GM0YLQsNGCOicsXHJcbiAgICBjb2luc1R4dDogJ9Cc0L7QvdC10YLRizonLFxyXG4gICAgbGl2ZXNUeHQ6ICfQltC40LfQvdC4OicsXHJcbiAgICBiZXN0U2NvcmVUeHQ6ICfQm9GD0YfRiNC40Lkg0YDQtdC30YPQu9GM0YLQsNGCOicsXHJcbiAgICBzdGFydEdhbWVCdG46ICfQndCw0YfQsNGC0Ywg0LjQs9GA0YMnLFxyXG4gICAgb3B0aW9uc0J0bjogJ9Cd0LDRgdGC0YDQvtC50LrQuCcsXHJcbiAgICBzZWxlY3RMbmc6ICfQktGL0LHQtdGA0LjRgtC1INGP0LfRi9C6OicsXHJcbiAgICBzZWxlY3RQbGF5ZXI6ICfQktGL0LHQtdGA0LjRgtC1INC40LPRgNC+0LrQsDonLFxyXG4gICAgZ2FtZU92ZXI6ICfQktGLINC/0YDQvtC40LPRgNCw0LvQuC4g0JrQu9C40LrQvdC4INGH0YLQvtCx0Ysg0L/RgNC+0LTQvtC70LbQuNGC0YwuJyxcclxuICAgIGhlbHBCdG46ICfQn9C+0LzQvtGJ0YwnLFxyXG4gICAgaGVscFR4dDE6ICfQktCw0YjQsCDQt9Cw0LTQsNGH0LAg0YHQvtCx0YDQsNGC0Ywg0LLRgdC1INC80L7QvdC10YLRiy4g0JTQu9GPINGN0YLQvtCz0L4g0YMg0LLQsNGBINC10YHRgtGMINC+0L/RgNC10LTQtdC70LXQvdC90L7QuSDQutC+0LvQuNGH0LXRgdGC0LLQviDQttC40LfQvdC10LkuINCS0Ysg0LzQvtC20LXRgtC1INC/0YDRi9Cz0LDRgtGMLCDQuNC00YLQuCDQstC70LXQstC+INC4INCy0L/RgNCw0LLQviDQsiDQv9GA0LXQtNC10LvQsNGFINGN0LrRgNCw0L3QsC4nLFxyXG4gICAgaGVscFR4dDI6ICfQmtC70LDQstC40YjQuCDRg9C/0YDQsNCy0LvQtdC90LjRjzonLFxyXG4gICAgaGVscFR4dDM6ICdXLCBTcGFjZSwgXiAtINCf0YDRi9C20L7QuicsXHJcbiAgICBoZWxwVHh0NDogJ00sID4gLSDQmNC00YLQuCDQstC/0YDQsNCy0L4nLFxyXG4gICAgaGVscFR4dDU6ICdOLCA8IC0g0JjQtNGC0Lgg0LLQu9C10LLQvicsXHJcbiAgICBoZWxwVHh0NjogJ0EgLSDQktC60LvRjtGH0LjRgtGMINC80YPQt9GL0LrRgycsXHJcbiAgICBoZWxwVHh0NzogJ1EgLSDQktGL0LrQu9GO0YfQuNGC0Ywg0LzRg9C30YvQutGDJyxcclxuICAgIGhlbHBUeHQ4OiAnRXNjIC0g0JPQu9Cw0LLQvdC+0LUg0LzQtdC90Y4nLFxyXG4gIH0sXHJcbiAgYnI6IHtcclxuICAgIHNjb3JlVHh0OiAn0JLRi9C90ZbQujonLFxyXG4gICAgY29pbnNUeHQ6ICfQnNCw0L3QtdGC0Ys6JyxcclxuICAgIGxpdmVzVHh0OiAn0JbRi9GG0YbRjzonLFxyXG4gICAgYmVzdFNjb3JlVHh0OiAn0JvQtdC/0YjRiyDQstGL0L3RltC6OicsXHJcbiAgICBzdGFydEdhbWVCdG46ICfQn9Cw0YfQsNGC0Ywg0ZbQs9GA0YMnLFxyXG4gICAgb3B0aW9uc0J0bjogJ9Ce0L/RhtGL0ZYnLFxyXG4gICAgc2VsZWN0TG5nOiAn0JLRi9Cx0LXRgNGL0YbQtSDQvNC+0LLRgzonLFxyXG4gICAgc2VsZWN0UGxheWVyOiAn0JLRi9Cx0LXRgNGL0YbQtSDQv9C10YDRgdCw0L3QsNC20LA6JyxcclxuICAgIGdhbWVPdmVyOiAn0JLRiyDQv9GA0LDQudCz0YDQsNC70ZYuINCa0LvRltC60L3RliDQutCw0LEg0L/RgNCw0YbRj9Cz0L3Rg9GG0YwuJyxcclxuICAgIGhlbHBCdG46ICfQlNCw0L/QsNC80L7Qs9CwJyxcclxuICAgIGhlbHBUeHQxOiAn0JLQsNGI0LAg0LfQsNC00LDRh9CwINGB0LDQsdGA0LDRhtGMINGD0YHQtSDQvNCw0L3QtdGC0YsuINCU0LvRjyDQs9GN0YLQsNCz0LAg0Z4g0LLQsNGBINGR0YHRhtGMINC/0Y3RntC90LDQuSDQutC+0LvRjNC60LDRgdGG0Ywg0LbRi9GG0YbRj9GeLiDQktGLINC80L7QttCw0YbQtSDRgdC60LDQutCw0YbRjCwg0ZbRgdGG0ZYg0L3QsNC70LXQstCwINGWINC90LDQv9GA0LDQstCwINGeINC80LXQttCw0YUg0Y3QutGA0LDQvdCwLicsXHJcbiAgICBoZWxwVHh0MjogJ9Ca0LvQsNCy0ZbRiNGLINC60ZbRgNCw0LLQsNC90L3RjzonLFxyXG4gICAgaGVscFR4dDM6ICdXLCBTcGFjZSwgXiAtINCf0YDRi9C20L7QuicsXHJcbiAgICBoZWxwVHh0NDogJ00sID4gLSBJ0YHRhtGWINC90LDQu9C10LLQsCcsXHJcbiAgICBoZWxwVHh0NTogJ04sIDwgLSBJ0YHRhtGWINC90LDQv9GA0LDQstCwJyxcclxuICAgIGhlbHBUeHQ2OiAnQSAtINCj0LrQu9GO0YfRi9GG0Ywg0LzRg9C30YvQutGDJyxcclxuICAgIGhlbHBUeHQ3OiAnUSAtINCS0YvQutC70Y7Rh9GL0YbRjCDQvNGD0LfRi9C60YMnLFxyXG4gICAgaGVscFR4dDg6ICdFc2MgLSDQk9Cw0LvQvtGe0L3QsNC1INC80LXQvdGOJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IHsgbGFuZyB9O1xyXG4iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gJy4vaW5kZXguanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JzdGFjbGUge1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHRoaXMueCA9IG9wdGlvbnMueDtcclxuICAgIHRoaXMueSA9IG9wdGlvbnMueTtcclxuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcclxuICAgIHRoaXMuZ2FtZVNwZWVkID0gb3B0aW9ucy5nYW1lU3BlZWQ7XHJcblxyXG4gICAgdGhpcy5keCA9IC10aGlzLmdhbWVTcGVlZDtcclxuXHJcbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltYWdlLnNyYyA9IG9wdGlvbnMuaW1hZ2VTcmM7XHJcbiAgfVxyXG5cclxuICBVcGRhdGUoKSB7XHJcbiAgICB0aGlzLnggKz0gdGhpcy5keDtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICB0aGlzLmltYWdlLFxyXG4gICAgICB0aGlzLngsXHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgLSA1NSxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5pbXBvcnQgeyBsYW5nIH0gZnJvbSAnLi4vbGFuZyc7XHJcbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSAnLi4vc3RhcnRfZ2FtZSc7XHJcblxyXG5jb25zdCBkZWFkID0ge1xyXG4gIHNob3coKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYW5pbWF0ZScsICdmYWxzZScpO1xyXG4gICAgY29uc3QgbGcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyk7XHJcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBhZ2UuY2xhc3NMaXN0LmFkZCgnemluZGV4Jyk7XHJcbiAgICBwYWdlLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiaGVscC10eHQtd3JhcHBlclwiPlxyXG7QktGLINC/0L7RgtC10YDRj9C70Lgg0LbQuNC30L3RjC5cclxuPGJyPtCa0LvQuNC60L3QuCDRh9GC0L7QsdGLINC/0YDQvtC00L7Qu9C20LjRgtGMLlxyXG4gIDwvZGl2PlxyXG4gIGA7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2UpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocGFnZSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbmltYXRlJywgJ3RydWUnKTtcclxuICAgICAgc3RhcnQoKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgaGlkZSgpIHtcclxuICAgIGNvbnN0IHBhZ2UxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKTtcclxuICAgIHBhZ2UxLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgeyBkZWFkIH07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5pbXBvcnQgeyBsYW5nIH0gZnJvbSAnLi4vbGFuZyc7XHJcbmltcG9ydCB7IGNhbnZhcyB9IGZyb20gJy4uL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVPdmVyKCkge1xyXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2FudmFzKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYW5pbWF0ZScsICdmYWxzZScpO1xyXG4gIGNvbnN0IGxnID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpO1xyXG4gIGNvbnN0IHBhZ2VXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2Utd3JhcHBlcicpO1xyXG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZScpIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZScsICdnYW1lLW92ZXItaW1hZ2UnKTtcclxuICBwYWdlLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJnYW1lLW92ZXJcIj5cclxuICAgICR7bGFuZ1tsZ10uZ2FtZU92ZXJ9XHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgcGFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQocGFnZSk7XHJcbiAgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfSk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmltcG9ydCB7IGNhbnZhcyB9IGZyb20gJy4uL2luZGV4JztcclxuaW1wb3J0IHsgc3RhcnQgfSBmcm9tICcuLi9zdGFydF9nYW1lJztcclxuaW1wb3J0IHsgbGFuZyB9IGZyb20gJy4uL2xhbmcnO1xyXG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVscCgpIHtcclxuICBjYW52YXMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgY29uc3QgbGcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyk7XHJcbiAgY29uc3QgcGFnZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS13cmFwcGVyJyk7XHJcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJykgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlJywgJ3BhZ2UtaW1hZ2UnKTtcclxuICBwYWdlLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiaGVscC10eHQtd3JhcHBlclwiPlxyXG4gICR7bGFuZ1tsZ10uaGVscFR4dDF9XHJcbiAgPHA+JHtsYW5nW2xnXS5oZWxwVHh0Mn08L3A+XHJcbiAgJHtsYW5nW2xnXS5oZWxwVHh0M31cclxuICA8YnI+JHtsYW5nW2xnXS5oZWxwVHh0NH1cclxuICA8YnI+JHtsYW5nW2xnXS5oZWxwVHh0NX1cclxuICA8YnI+JHtsYW5nW2xnXS5oZWxwVHh0Nn1cclxuICA8YnI+JHtsYW5nW2xnXS5oZWxwVHh0N31cclxuICA8YnI+JHtsYW5nW2xnXS5oZWxwVHh0OH1cclxuICA8L2Rpdj5cclxuICA8YSBjbGFzcz1cImJ0bmZsaXAgc3RhcnQtaGVscCBzdGFydFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19mcm9udFwiPiR7bGFuZ1tsZ10uc3RhcnRHYW1lQnRufTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2NlbnRlclwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2JhY2tcIj4ke2xhbmdbbGddLnN0YXJ0R2FtZUJ0bn08L3NwYW4+XHJcbiAgPC9hPlxyXG4gIFxyXG4gIDxhIGNsYXNzPVwiYnRuZmxpcCBvcHRpb25zLWhlbHAgb3B0aW9uc1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19mcm9udFwiPiR7bGFuZ1tsZ10ub3B0aW9uc0J0bn08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19jZW50ZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19iYWNrXCI+JHtsYW5nW2xnXS5vcHRpb25zQnRufTwvc3Bhbj5cclxuICA8L2E+XHJcbiAgYDtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xyXG4gICAgcGFnZVdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBwYWdlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIGNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIHN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBwYWdlV3JhcHBlci5hcHBlbmRDaGlsZChwYWdlKTtcclxuICBwYWdlV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpO1xyXG4gIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9uc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zJyk7XHJcbiAgb3B0aW9uc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG9wdGlvbnMoKTtcclxuICB9KTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuaW1wb3J0IHsgY2FudmFzIH0gZnJvbSAnLi4vaW5kZXgnO1xyXG5pbXBvcnQgeyBzdGFydCB9IGZyb20gJy4uL3N0YXJ0X2dhbWUnO1xyXG5pbXBvcnQgaGVscCBmcm9tICcuL2hlbHAnO1xyXG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xyXG5pbXBvcnQgeyBsYW5nIH0gZnJvbSAnLi4vbGFuZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluKCkge1xyXG4gIGNhbnZhcy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICBjb25zdCBsZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKTtcclxuICBjb25zdCBwYWdlV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLXdyYXBwZXInKTtcclxuICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2UnLCAncGFnZS1pbWFnZScpO1xyXG4gIHBhZ2UuaW5uZXJIVE1MID0gYFxyXG48YSBjbGFzcz1cImJ0bmZsaXAgc3RhcnQtbWFpbiBzdGFydFwiIGhyZWY9XCIjXCI+XHJcbiAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj4ke2xhbmdbbGddLnN0YXJ0R2FtZUJ0bn08L3NwYW4+XHJcbiAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fY2VudGVyXCI+PC9zcGFuPlxyXG4gIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2JhY2tcIj4ke2xhbmdbbGddLnN0YXJ0R2FtZUJ0bn08L3NwYW4+XHJcbjwvYT5cclxuXHJcbjxhIGNsYXNzPVwiYnRuZmxpcCBvcHRpb25zLW1haW4gb3B0aW9uc1wiIGhyZWY9XCIjXCI+XHJcbiAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj4ke2xhbmdbbGddLm9wdGlvbnNCdG59PC9zcGFuPlxyXG4gIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2NlbnRlclwiPjwvc3Bhbj5cclxuICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19iYWNrXCI+JHtsYW5nW2xnXS5vcHRpb25zQnRufTwvc3Bhbj5cclxuPC9hPlxyXG5cclxuPGEgY2xhc3M9XCJidG5mbGlwIGhlbHAtbWFpbiBoZWxwXCIgaHJlZj1cIiNcIj4gIFxyXG4gIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2Zyb250XCI+JHtsYW5nW2xnXS5oZWxwQnRufTwvc3Bhbj5cclxuICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19jZW50ZXJcIj48L3NwYW4+XHJcbiAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPiR7bGFuZ1tsZ10uaGVscEJ0bn08L3NwYW4+XHJcbjwvYT5cclxuPGZvb3RlciBjbGFzcz1cImZvb3RlclwiPlxyXG48c3Ryb25nPlxyXG48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1NlcmdSdWRvdmljaFwiIHRhcmdldD1cImJsYW5rXCI+U2VyZ2V5IFJ1ZG92aWNoPC9hPlxyXG4mbmJzcHwmbmJzcFxyXG48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2NvbnNlcnZhdGl2MDA3XCIgdGFyZ2V0PVwiYmxhbmtcIj5NYWtzIGNvbnNlcnZhdGl2MDA3PC9hPlxyXG48cCBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlclwiPlxyXG48YSBocmVmPVwiaHR0cHM6Ly9ycy5zY2hvb2wvanMvXCIgdGFyZ2V0PVwiYmxhbmtcIj5cclxuPGltZyBzcmM9XCJodHRwczovL3JzLnNjaG9vbC9pbWFnZXMvcnNfc2Nob29sX2pzLnN2Z1wiIGFsdD1cIlJTIFNjaG9vbFwiIHN0eWxlPVwid2lkdGg6IDUwcHhcIj48L2E+XHJcbjxzcGFuIGNsYXNzPVwiZm9vdGVyX195ZWFyXCI+wqkgMjAyMTwvc3Bhbj5cclxuPC9wPlxyXG48L3N0cm9uZz5cclxuPC9mb290ZXI+XHJcbiAgYDtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xyXG4gICAgcGFnZVdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBwYWdlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIGNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIHN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBwYWdlV3JhcHBlci5hcHBlbmRDaGlsZChwYWdlKTtcclxuICBwYWdlV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHJcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcclxuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XHJcblxyXG4gIGNvbnN0IGhlbHBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVscCcpO1xyXG4gIGhlbHBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBoZWxwKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucycpO1xyXG4gIG9wdGlvbnNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBvcHRpb25zKCk7XHJcbiAgfSk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmltcG9ydCB7IGNhbnZhcyB9IGZyb20gJy4uL2luZGV4JztcclxuaW1wb3J0IHsgc3RhcnQgfSBmcm9tICcuLi9zdGFydF9nYW1lJztcclxuaW1wb3J0IGhlbHAgZnJvbSAnLi9oZWxwJztcclxuaW1wb3J0IHsgbGFuZyB9IGZyb20gJy4uL2xhbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3B0aW9ucygpIHtcclxuICBjYW52YXMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgY29uc3QgbGcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyk7XHJcbiAgY29uc3QgcGFnZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS13cmFwcGVyJyk7XHJcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJykgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlJywgJ3BhZ2UtaW1hZ2UnKTtcclxuICBwYWdlLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiaGVscC10eHQtd3JhcHBlclwiPlxyXG4gIDxwIGNsYXNzPVwibWVudUl0ZW1cIiBpZD0nbWVudUZpZWxkU2l6ZSc+XHJcbiAgPGxhYmVsPiR7bGFuZ1tsZ10uc2VsZWN0TG5nfTwvbGFiZWw+XHJcbiAgPHNlbGVjdCBpZD1cInNlbGVjdExhbmdcIj5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImVuXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPmVuZ2xpc2g8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cInJ1XCI+0YDRg9GB0YHQutC40Lk8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImJyXCI+0LHQtdC70LDRgNGD0YHQutCw0Y88L29wdGlvbj5cclxuICA8L3NlbGVjdD5cclxuICA8L3A+XHJcbiAgPGJyPjxwPiR7bGFuZ1tsZ10uc2VsZWN0UGxheWVyfTwvcD5cclxuICA8YnI+XHJcbiAgPGltZyBzcmM9XCJpbWcvc3ByaXRlMl9pY29uLnBuZ1wiIGNsYXNzPVwicGxheWVyMlwiIGFsdD1cInBsYXllcjJcIj5cclxuICA8aW1nIHNyYz1cImltZy9zcHJpdGUxX2ljb24ucG5nXCIgY2xhc3M9XCJwbGF5ZXIxXCIgYWx0PVwicGxheWVyMVwiPlxyXG4gIDwvZGl2PlxyXG4gIDxhIGNsYXNzPVwiYnRuZmxpcCBzdGFydC1oZWxwIHN0YXJ0XCIgaHJlZj1cIiNcIj5cclxuICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19mcm9udFwiPiR7bGFuZ1tsZ10uc3RhcnRHYW1lQnRufTwvc3Bhbj5cclxuICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19jZW50ZXJcIj48L3NwYW4+XHJcbiAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPiR7bGFuZ1tsZ10uc3RhcnRHYW1lQnRufTwvc3Bhbj5cclxuPC9hPlxyXG5cclxuPGEgY2xhc3M9XCJidG5mbGlwIG9wdGlvbnMtaGVscCBoZWxwXCIgaHJlZj1cIiNcIj5cclxuICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19mcm9udFwiPiR7bGFuZ1tsZ10uaGVscEJ0bn08L3NwYW4+XHJcbiAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fY2VudGVyXCI+PC9zcGFuPlxyXG4gIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2JhY2tcIj4ke2xhbmdbbGddLmhlbHBCdG59PC9zcGFuPlxyXG48L2E+XHJcbiAgYDtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0TGFuZyA+IG9wdGlvbltzZWxlY3RlZF0nKS5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NlbGVjdExhbmcgPiBvcHRpb25bdmFsdWU9JHtsZ31dYCkuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XHJcbiAgICBwYWdlV3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxuICAgIHBhZ2VXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIC8vINCy0YvQsdC+0YAg0Y/Qt9GL0LrQsFxyXG4gIHBhZ2VXcmFwcGVyLmFwcGVuZENoaWxkKHBhZ2UpO1xyXG4gIHBhZ2VXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0Jyk7XHJcbiAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xyXG5cclxuICBjb25zdCBoZWxwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlbHAnKTtcclxuICBoZWxwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaGVscCgpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBzZWxlY3RMYW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdExhbmcnKTtcclxuICBzZWxlY3RMYW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYW5nU2VsZWN0ZWQnLCBzZWxlY3RMYW5nLnZhbHVlKTtcclxuICAgIG9wdGlvbnMoKTtcclxuICB9KTtcclxuXHJcbiAgLy8g0LLRi9Cx0L7RgCDQuNCz0YDQvtC60LBcclxuICBjb25zdCBwbGF5ZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjEnKTtcclxuICBjb25zdCBwbGF5ZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjInKTtcclxuICBjb25zdCBwbGF5ZXJTZWxlY3RlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdTcHJpdGVJbWFnZScpO1xyXG4gIGlmIChwbGF5ZXJTZWxlY3RlZCA9PT0gJ2ltYWdlcy9zcHJpdGUyLnBuZycpIHtcclxuICAgIHBsYXllcjIuY2xhc3NMaXN0LmFkZCgncGxheWVyLWljb24tc2VsZWN0ZWQnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcGxheWVyMS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItaWNvbi1zZWxlY3RlZCcpO1xyXG4gIH1cclxuICBwbGF5ZXIxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Nwcml0ZUltYWdlJywgJ2ltYWdlcy9zcHJpdGUxLnBuZycpO1xyXG4gICAgcGxheWVyMS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItaWNvbi1zZWxlY3RlZCcpO1xyXG4gICAgcGxheWVyMi5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5ZXItaWNvbi1zZWxlY3RlZCcpO1xyXG4gICAgb3B0aW9ucygpO1xyXG4gIH0pO1xyXG4gIHBsYXllcjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnU3ByaXRlSW1hZ2UnLCAnaW1hZ2VzL3Nwcml0ZTIucG5nJyk7XHJcbiAgICBwbGF5ZXIyLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1pY29uLXNlbGVjdGVkJyk7XHJcbiAgICBwbGF5ZXIxLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXllci1pY29uLXNlbGVjdGVkJyk7XHJcbiAgICBvcHRpb25zKCk7XHJcbiAgfSk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJTb3VuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyB0aGlzLnVybCA9IHdpbmRvdy5nYW1lU3RhdGUuc291bmRVcmw7XHJcbiAgICB0aGlzLnNvdW5kVXAgPSBuZXcgQXVkaW8oJ3NvdW5kL2p1bXBVcC5tcDMnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zb3VuZFVwKTtcclxuICAgIHRoaXMuc291bmREb3duID0gbmV3IEF1ZGlvKCdzb3VuZC9ncmF2aXR5RG93bi5tcDMnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zb3VuZERvd24pO1xyXG4gICAgdGhpcy5pc0dyYXZpdHlEb3duID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzSnVtcFVwID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBqdW1wVXAoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNKdW1wVXApIHtcclxuICAgICAgdGhpcy5zb3VuZFVwLnBsYXkoKTtcclxuICAgICAgdGhpcy5pc0p1bXBVcCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBqdW1wRG93bigpIHtcclxuICAgIHRoaXMuc291bmRVcC5wYXVzZSgpO1xyXG4gICAgdGhpcy5zb3VuZFVwLmN1cnJlbnRUaW1lID0gMC4wO1xyXG4gICAgdGhpcy5pc0p1bXBVcCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ3Jhdml0eURvd24oKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNHcmF2aXR5RG93bikge1xyXG4gICAgICB0aGlzLnNvdW5kRG93bi5wbGF5KCk7XHJcbiAgICAgIHRoaXMuaXNHcmF2aXR5RG93biA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBncmF2aXR5VXAoKSB7XHJcbiAgICB0aGlzLnNvdW5kRG93bi5wYXVzZSgpO1xyXG4gICAgdGhpcy5zb3VuZERvd24uY3VycmVudFRpbWUgPSAwLjA7XHJcbiAgICB0aGlzLmlzR3Jhdml0eURvd24gPSBmYWxzZTtcclxuICB9XHJcbn1cclxuIiwiY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUnKTtcclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG5jb25zdCBwYXJ0aWNsZXNPblNjcmVlbiA9IDI0NTtcclxubGV0IHc7XHJcbmxldCBoO1xyXG5jb25zdCBwYXJ0aWNsZXNBcnJheSA9IFtdO1xyXG5cclxuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbncgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbmZ1bmN0aW9uIHJhbmRvbShtaW4sIG1heCkge1xyXG4gIHJldHVybiBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGllbnRSZXNpemUoZXYpIHtcclxuICB3ID0gY2FudmFzLndpZHRoO1xyXG4gIGggPSBjYW52YXMuaGVpZ2h0O1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY2xpZW50UmVzaXplKTtcclxuXHJcbi8vIGNyZWF0ZVNub3dGbGFrZXMoKTtcclxuZnVuY3Rpb24gY3JlYXRlU25vd0ZsYWtlcygpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRpY2xlc09uU2NyZWVuOyBpKyspIHtcclxuICAgIHBhcnRpY2xlc0FycmF5LnB1c2goe1xyXG4gICAgICB4OiBNYXRoLnJhbmRvbSgpICogdyxcclxuICAgICAgeTogTWF0aC5yYW5kb20oKSAqIGgsXHJcbiAgICAgIG9wYWNpdHk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgIHNwZWVkWDogcmFuZG9tKC0xLCAxKSxcclxuICAgICAgc3BlZWRZOiByYW5kb20oMSwgMiksXHJcbiAgICAgIHJhZGl1czogcmFuZG9tKDAuNSwgNC4yKSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd1Nub3dGbGFrZXMoKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZXNBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgZ3JhZGllbnQgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoXHJcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLngsXHJcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLnksXHJcbiAgICAgIDAsXHJcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLngsXHJcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLnksXHJcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLnJhZGl1cyxcclxuICAgICk7XHJcblxyXG4gICAgLy8gZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDMwLCAxNDQsIDI1NSwgJHtwYXJ0aWNsZXNBcnJheVtpXS5vcGFjaXR5fSlgICk7XHJcbiAgICAvLyBncmFkaWVudC5hZGRDb2xvclN0b3AoMC44LCBgcmdiYSgxMDAsIDE0OSwgMjM3LCAke3BhcnRpY2xlc0FycmF5W2ldLm9wYWNpdHl9KWAgKTtcclxuICAgIC8vIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBgcmdiYSg2NSwgMTA1LCAyMjUsICR7cGFydGljbGVzQXJyYXlbaV0ub3BhY2l0eX0pYCApO1xyXG5cclxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBgcmdiYSgyNTUsIDI1NSwgMjU1LCR7cGFydGljbGVzQXJyYXlbaV0ub3BhY2l0eX0pYCk7IC8vIHdoaXRlXHJcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMC44LCBgcmdiYSgyMTAsIDIzNiwgMjQyLCR7cGFydGljbGVzQXJyYXlbaV0ub3BhY2l0eX0pYCk7IC8vIGJsdWlzaFxyXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKDIzNywgMjQ3LCAyNDksJHtwYXJ0aWNsZXNBcnJheVtpXS5vcGFjaXR5fSlgKTtcclxuXHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKFxyXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS54LFxyXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS55LFxyXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS5yYWRpdXMsXHJcbiAgICAgIDAsXHJcbiAgICAgIE1hdGguUEkgKiAyLFxyXG4gICAgICBmYWxzZSxcclxuICAgICk7XHJcblxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG4gICAgY3R4LmZpbGwoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdmVTbm93Rmxha2VzKCkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydGljbGVzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgIHBhcnRpY2xlc0FycmF5W2ldLnggKz0gcGFydGljbGVzQXJyYXlbaV0uc3BlZWRYO1xyXG4gICAgcGFydGljbGVzQXJyYXlbaV0ueSArPSBwYXJ0aWNsZXNBcnJheVtpXS5zcGVlZFk7XHJcblxyXG4gICAgaWYgKHBhcnRpY2xlc0FycmF5W2ldLnkgPiBoKSB7XHJcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLnggPSBNYXRoLnJhbmRvbSgpICogdyAqIDEuNTtcclxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueSA9IC01MDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVNub3dGYWxsKCkge1xyXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XHJcbiAgZHJhd1Nub3dGbGFrZXMoKTtcclxuICBtb3ZlU25vd0ZsYWtlcygpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVTbm93Rmxha2VzLCB1cGRhdGVTbm93RmFsbCB9O1xyXG4iLCJpbXBvcnQgT2JzdGFjbGUgZnJvbSAnLi9vYnN0YWNsZSc7XHJcbmltcG9ydCB7IGNhbnZhcyB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyBnYW1lU3BlZWQsIG9ic3RhY2xlcyB9IGZyb20gJy4vc3RhcnRfZ2FtZSc7XHJcblxyXG5mdW5jdGlvbiBTcGF3bk9ic3RhY2xlKCkge1xyXG4gIC8vIGxldCBzaXplID0gUmFuZG9tSW50UmFuZ2UoMjAsIDcwKTtcclxuICBjb25zdCB0eXBlID0gUmFuZG9tSW50UmFuZ2UoMywgNCk7XHJcblxyXG4gIGNvbnN0IG9ic3RhY2xlID0gbmV3IE9ic3RhY2xlKHtcclxuICAgIHg6IGNhbnZhcy53aWR0aCxcclxuICAgIHk6IGNhbnZhcy5oZWlnaHQsXHJcbiAgICB3aWR0aDogNTAsXHJcbiAgICBoZWlnaHQ6IDUwLFxyXG4gICAgZ2FtZVNwZWVkLFxyXG4gICAgaW1hZ2VTcmM6IGBpbWFnZXMvb2JzdGFjbGUke3R5cGV9LnBuZ2AsXHJcbiAgfSk7XHJcblxyXG4gIG9ic3RhY2xlcy5wdXNoKG9ic3RhY2xlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUmFuZG9tSW50UmFuZ2UobWluLCBtYXgpIHtcclxuICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xyXG59XHJcblxyXG5leHBvcnQgeyBTcGF3bk9ic3RhY2xlIH07XHJcbiIsImltcG9ydCBIZXJvIGZyb20gJy4vaGVybyc7XHJcbmltcG9ydCBUZXh0IGZyb20gJy4vdGV4dCc7XHJcbmltcG9ydCB7IFNwYXduT2JzdGFjbGUgfSBmcm9tICcuL3NwYXduX29ic3RhY2xlJztcclxuaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IHsgY3JlYXRlU25vd0ZsYWtlcywgdXBkYXRlU25vd0ZhbGwgfSBmcm9tICcuL3Nub3dfZmxha2VzJztcclxuaW1wb3J0IEdhbWVTb3VuZCBmcm9tICcuL2dhbWUtc291bmQnO1xyXG5pbXBvcnQgeyBnZXRDb2luLCBjb2luc0NvdW50ZXIgfSBmcm9tICcuL2dldF9jb2luJztcclxuaW1wb3J0IGdldENsb3VkcyBmcm9tICcuL2dldF9jbG91ZHMnO1xyXG5pbXBvcnQgeyBsYW5nIH0gZnJvbSAnLi9sYW5nJztcclxuaW1wb3J0IGdldFBsYXRmb3JtIGZyb20gJy4vZ2V0X3BsYXRmb3JtJztcclxuaW1wb3J0IG1haW4gZnJvbSAnLi9wYWdlcy9tYWluJztcclxuaW1wb3J0IHsgZGVhZCB9IGZyb20gJy4vcGFnZXMvZGVhZCc7XHJcbmltcG9ydCBnYW1lT3ZlciBmcm9tICcuL3BhZ2VzL2dhbWUtb3Zlcic7XHJcblxyXG4vLyBsZXQgbGl2ZXM7XHJcbmxldCBzY29yZTtcclxubGV0IGhpZ2hTY29yZTtcclxubGV0IGhpZ2hDb2lucztcclxubGV0IHNjb3JlVGV4dDtcclxubGV0IGhpZ2h0U2NvcmVUZXh0O1xyXG5sZXQgaGlnaHRDb2luc1RleHQ7XHJcbmxldCBsaXZlc1RleHQ7XHJcbmxldCBnYW1lU3BlZWQ7XHJcbmxldCBwbGF5ZXI7XHJcbmxldCBvYnN0YWNsZXMgPSBbXTtcclxuY29uc3QgY29pbnMgPSBbXTtcclxuXHJcbmNvbnN0IGtleXMgPSB7fTtcclxubGV0IGNvaW5JbWFnZTtcclxuY29uc3QgcGxheVNvdW5kID0gbmV3IEdhbWVTb3VuZCgpO1xyXG5cclxuZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDIwNTtcclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcbiAgICBrZXlzW2UuY29kZV0gPSB0cnVlO1xyXG4gIH0pO1xyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XHJcbiAgICBrZXlzW2UuY29kZV0gPSBmYWxzZTtcclxuICB9KTtcclxuXHJcbiAgY3R4LmZvbnQgPSAnMjBweCBzYW5zLXNlcmlmJztcclxuXHJcbiAgZ2FtZVNwZWVkID0gMztcclxuICAvLyBsaXZlcyA9IDM7XHJcbiAgc2NvcmUgPSAwO1xyXG4gIGhpZ2hTY29yZSA9IDA7XHJcbiAgaGlnaENvaW5zID0gMDtcclxuXHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaWdoc2NvcmUnKSkge1xyXG4gICAgaGlnaFNjb3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hzY29yZScpO1xyXG4gIH1cclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hDb2lucycpKSB7XHJcbiAgICBoaWdoQ29pbnMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaENvaW5zJyk7XHJcbiAgfVxyXG5cclxuICBjb2luSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBjb2luSW1hZ2Uuc3JjID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Nwcml0ZUltYWdlJyk7XHJcblxyXG4gIHBsYXllciA9IG5ldyBIZXJvKHtcclxuICAgIGltYWdlOiBjb2luSW1hZ2UsXHJcbiAgICB3aWR0aDogNjAwLFxyXG4gICAgaGVpZ2h0OiAxMDAsXHJcbiAgICBudW1iZXJPZkZyYW1lczogNixcclxuICAgIHRpY2tzUGVyRnJhbWU6IDQsXHJcbiAgICB4OiA1MCxcclxuICAgIHk6IDUwLFxyXG4gICAgdGVzdDogY2FudmFzLmhlaWdodCxcclxuICB9KTtcclxuXHJcbiAgcGxheWVyLnN0YXJ0KCk7XHJcblxyXG4gIHNjb3JlVGV4dCA9IG5ldyBUZXh0KFxyXG4gICAgYCR7bGFuZ1tsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyldLnNjb3JlVHh0fSAke3Njb3JlfWAsIDI1LCAyNSwgJ2xlZnQnLCAnIzIxMjEyMScsICcyMCcsXHJcbiAgKTtcclxuICBsaXZlc1RleHQgPSBuZXcgVGV4dChcclxuICAgIGAke2xhbmdbbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpXS5saXZlc1R4dH0gJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGl2ZXMnKX1gLCA1MDAsIDI1LCAncmlnaHQnLCAnIzIxMjEyMScsICcyMCcsXHJcbiAgKTtcclxuICBoaWdodFNjb3JlVGV4dCA9IG5ldyBUZXh0KFxyXG4gICAgYCR7bGFuZ1tsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyldLmJlc3RTY29yZVR4dH0gJHtoaWdoU2NvcmV9YCwgY2FudmFzLndpZHRoIC0gMTUwLCAyNSwgJ3JpZ2h0JywgJyMyMTIxMjEnLCAnMjAnLFxyXG4gICk7XHJcbiAgaGlnaHRDb2luc1RleHQgPSBuZXcgVGV4dChcclxuICAgIGAke2xhbmdbbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpXS5jb2luc1R4dH0gJHtoaWdoQ29pbnN9YCwgY2FudmFzLndpZHRoIC0gMjUsIDI1LCAncmlnaHQnLCAnIzIxMjEyMScsICcyMCcsXHJcbiAgKTtcclxuICBjcmVhdGVTbm93Rmxha2VzKCk7XHJcbiAgLy8gcGxheVNvdW5kLnBsYXlGb24oKTtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoVXBkYXRlKTtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFNwYXduVGltZXIgPSAyMDA7XHJcbmxldCBzcGF3blRpbWVyID0gaW5pdGlhbFNwYXduVGltZXI7XHJcblxyXG5mdW5jdGlvbiBVcGRhdGUoKSB7XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbmltYXRlJykgPT09ICd0cnVlJykgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKFVwZGF0ZSk7XHJcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAvLyDQstGL0LrQu9GO0YfQuNGC0Ywg0YTQvtC90L7QstGD0Y4g0LzRg9C30YvQutGDXHJcbiAgaWYgKGtleXMuS2V5USkge1xyXG4gICAgcGxheVNvdW5kLnN0b3BGb24oKTtcclxuICB9XHJcblxyXG4gIC8vINCy0LrQu9GO0YfQuNGC0Ywg0YTQvtC90L7QstGD0Y4g0LzRg9C30YvQutGDXHJcbiAgaWYgKGtleXMuS2V5QSkge1xyXG4gICAgcGxheVNvdW5kLnBsYXlGb24oKTtcclxuICB9XHJcblxyXG4gIC8vIHNwYXduIG9ic3RhY2xlc1xyXG4gIHNwYXduVGltZXIgLT0gMTtcclxuICBpZiAoc3Bhd25UaW1lciA8PSAwKSB7XHJcbiAgICBTcGF3bk9ic3RhY2xlKCk7XHJcbiAgICBzcGF3blRpbWVyID0gaW5pdGlhbFNwYXduVGltZXIgLSBnYW1lU3BlZWQgKiA4O1xyXG5cclxuICAgIGlmIChzcGF3blRpbWVyIDwgNjApIHtcclxuICAgICAgc3Bhd25UaW1lciA9IDYwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlU25vd0ZhbGwoKTtcclxuXHJcbiAgLy8gc3Bhd24gZW5lbWllc1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb2JzdGFjbGVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBvID0gb2JzdGFjbGVzW2ldO1xyXG5cclxuICAgIGlmIChvLnggKyBvLndpZHRoIDwgMCkge1xyXG4gICAgICBvYnN0YWNsZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINC/0LXRgNC10LfQsNCz0YDRg9C30LrQsCDQuNCz0YDRiyDQv9GA0Lgg0YHRgtC+0LvQutC90L7QstC10L3QuNC4XHJcbiAgICBpZiAoXHJcbiAgICAgIHBsYXllci5keCA8IG8ueCArIG8ud2lkdGhcclxuICAgICAgJiYgcGxheWVyLmR4ICsgKHBsYXllci53aWR0aCAvIDEwKSAtIDEwID4gby54XHJcbiAgICAgICYmIHBsYXllci55IDwgby55ICsgby5oZWlnaHRcclxuICAgICAgJiYgcGxheWVyLnkgKyBwbGF5ZXIuaGVpZ2h0ID49IG8ueVxyXG4gICAgKSB7XHJcbiAgICAgIHBsYXlTb3VuZC5wbGF5RGVhZCgpO1xyXG4gICAgICBvYnN0YWNsZXMgPSBbXTtcclxuICAgICAgZ2FtZVNwZWVkID0gMztcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpdmVzJywgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpdmVzJykgLSAxKTtcclxuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXZlcycpID09IDApIHtcclxuICAgICAgICBnYW1lT3ZlcigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGRlYWQuc2hvdygpO1xyXG4gICAgICB9XHJcbiAgICAgIGxpdmVzVGV4dC50ID0gYCR7bGFuZ1tsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyldLmxpdmVzVHh0fSAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXZlcycpfWA7XHJcbiAgICAgIHNjb3JlID0gMDtcclxuICAgICAgcGxheWVyLmR4ID0gMDtcclxuICAgICAgcGxheWVyLnkgPSAwO1xyXG4gICAgICBjb2luc0NvdW50ZXIuY291bnRlciA9IDA7XHJcbiAgICAgIHNwYXduVGltZXIgPSBpbml0aWFsU3Bhd25UaW1lcjtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaWdoc2NvcmUnLCBoaWdoU2NvcmUpO1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZ2hDb2lucycsIGhpZ2hDb2lucyk7XHJcbiAgICB9XHJcbiAgICBvLlVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc2NvcmUgKz0gMTtcclxuICBzY29yZVRleHQudCA9IGAke2xhbmdbbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpXS5zY29yZVR4dH0gJHtzY29yZX1gO1xyXG5cclxuICBzY29yZVRleHQuRHJhdygpO1xyXG5cclxuICBpZiAoc2NvcmUgPiBoaWdoU2NvcmUpIHtcclxuICAgIGhpZ2hTY29yZSA9IHNjb3JlO1xyXG4gICAgaGlnaHRTY29yZVRleHQudCA9IGAke2xhbmdbbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpXS5iZXN0U2NvcmVUeHR9ICR7aGlnaFNjb3JlfWA7XHJcbiAgfVxyXG5cclxuICBpZiAoY29pbnNDb3VudGVyLmNvdW50ZXIgPiBoaWdoQ29pbnMpIHtcclxuICAgIGhpZ2hDb2lucyA9IGNvaW5zQ291bnRlci5jb3VudGVyO1xyXG4gICAgaGlnaHRDb2luc1RleHQudCA9IGAke2xhbmdbbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpXS5jb2luc1R4dH0gJHtoaWdoQ29pbnN9YDtcclxuICB9XHJcblxyXG4gIGdhbWVTcGVlZCArPSAwLjAwMztcclxuICBoaWdodFNjb3JlVGV4dC5EcmF3KCk7XHJcbiAgaGlnaHRDb2luc1RleHQuRHJhdygpO1xyXG4gIGxpdmVzVGV4dC5EcmF3KCk7XHJcblxyXG4gIC8vIHNwYXduIHBsYXRmb3JtXHJcbiAgZ2V0UGxhdGZvcm0oKTtcclxuXHJcbiAgLy8gc3Bhd24gY29pblxyXG4gIGdldENvaW4oKTtcclxuXHJcbiAgLy8gc3Bhd24gY2xvdWRzXHJcbiAgZ2V0Q2xvdWRzKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgc3RhcnQsIFVwZGF0ZSwgZ2FtZVNwZWVkLCBvYnN0YWNsZXMsIGtleXMsIHNjb3JlLCBwbGF5ZXIsIGNvaW5zLFxyXG59O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuaW1wb3J0IHsgY3R4IH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IHtcclxuICBjb25zdHJ1Y3Rvcih0LCB4LCB5LCBhLCBjLCBzKSB7XHJcbiAgICB0aGlzLnQgPSB0O1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLmEgPSBhO1xyXG4gICAgdGhpcy5jID0gYztcclxuICAgIHRoaXMucyA9IHM7XHJcbiAgfVxyXG5cclxuICBEcmF3KCkge1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuYztcclxuICAgIGN0eC5mb250ID0gYCR7dGhpcy5zfXB4IHNhbnMtc2VyaWZgO1xyXG4gICAgY3R4LnRleHRBbGlnbiA9IHRoaXMuYTtcclxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnQsIHRoaXMueCwgdGhpcy55KTtcclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJjYW52YXMiLCJjdHgiLCJQbGF0Zm9ybSIsIm9wdGlvbnMiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiZmxpZ2h0QWx0aXR1ZGUiLCJnYW1lU3BlZWQiLCJkeCIsImltYWdlIiwiSW1hZ2UiLCJzcmMiLCJpbWFnZVNyYyIsInJlbmRlciIsImRyYXdJbWFnZSIsIkNsb3VkIiwic3giLCJzeSIsInNXaWR0aCIsInNIZWlnaHQiLCJkeSIsImRXaWR0aCIsImRIZWlnaHQiLCJDb2luIiwiY29uc29sZSIsImxvZyIsInRpY2tzUGVyRnJhbWUiLCJudW1iZXJPZkZyYW1lcyIsImZyYW1lSW5kZXgiLCJ0aWNrQ291bnQiLCJhdWRpb09iaiIsIkF1ZGlvIiwicGxheSIsInVwZGF0ZSIsIkdhbWVTb3VuZCIsImZvblNvdW5kIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ2b2x1bWUiLCJkZWFkU291bmQiLCJsb29wIiwicGF1c2UiLCJzY29yZSIsImdldFJhbmRvbUludCIsImNsb3Vkc1NldCIsImNsb3VkIiwiY2xvdWRzIiwicmFuZG9tIiwiZ2V0Q2xvdWRzIiwicHVzaCIsIm1hcCIsInBsYXllciIsIlRleHQiLCJsYW5nIiwiY29pbiIsImNvaW5zIiwiY29pbnNUZXh0IiwiY29pbnNDb3VudGVyIiwiY291bnRlciIsImNvaW5ZIiwicmFuZFRpbWUiLCJyYW5kWSIsImdldENvaW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29pbnNUeHQiLCJEcmF3IiwibGVuZ3RoIiwiZm9yRWFjaCIsInN0YXJ0IiwicGxheUNvaW5Tb3VuZCIsInBsYXRmb3JtIiwicGxhdGZvcm1SYW5kVGltZSIsInBsYXRmb3JtcyIsInBsYXRmb3Jtc09wdGlvbnMiLCJnZXRQbGF0Zm9ybSIsInR5cGUiLCJmbGFnIiwidGVzdCIsIm1pbiIsIm1heCIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJrZXlzIiwiUGxheWVyU291bmQiLCJkZWFkIiwiSGVybyIsImp1bXBGb3JjZSIsImdyb3VuZGVkIiwianVtcFRpbWVyIiwiZ3Jhdml0eSIsImlzTGVmdCIsInNvdW5kIiwiU3BhY2UiLCJLZXlXIiwiQXJyb3dVcCIsImp1bXBVcCIsIkp1bXAiLCJLZXlNIiwiQXJyb3dSaWdodCIsIktleU4iLCJBcnJvd0xlZnQiLCJFc2NhcGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImp1bXBEb3duIiwiZ3Jhdml0eUdvIiwiZ2V0UmVhZHlUb0p1bXAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvbmxvYWQiLCJtYWluIiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJzZXRJdGVtIiwiZW4iLCJzY29yZVR4dCIsImxpdmVzVHh0IiwiYmVzdFNjb3JlVHh0Iiwic3RhcnRHYW1lQnRuIiwib3B0aW9uc0J0biIsInNlbGVjdExuZyIsInNlbGVjdFBsYXllciIsImdhbWVPdmVyIiwiaGVscEJ0biIsImhlbHBUeHQxIiwiaGVscFR4dDIiLCJoZWxwVHh0MyIsImhlbHBUeHQ0IiwiaGVscFR4dDUiLCJoZWxwVHh0NiIsImhlbHBUeHQ3IiwiaGVscFR4dDgiLCJydSIsImJyIiwiT2JzdGFjbGUiLCJzaG93IiwibGciLCJwYWdlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVDaGlsZCIsImhpZGUiLCJwYWdlMSIsInBhZ2VXcmFwcGVyIiwicmVtb3ZlIiwiaGVscCIsInN0YXJ0R2FtZSIsInN0YXJ0QnRuIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwic2VsZWN0TGFuZyIsInZhbHVlIiwicGxheWVyMSIsInBsYXllcjIiLCJwbGF5ZXJTZWxlY3RlZCIsInNvdW5kVXAiLCJzb3VuZERvd24iLCJpc0dyYXZpdHlEb3duIiwiaXNKdW1wVXAiLCJjdXJyZW50VGltZSIsInBhcnRpY2xlc09uU2NyZWVuIiwidyIsImgiLCJwYXJ0aWNsZXNBcnJheSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImNsaWVudFJlc2l6ZSIsImV2IiwiY3JlYXRlU25vd0ZsYWtlcyIsImkiLCJvcGFjaXR5Iiwic3BlZWRYIiwic3BlZWRZIiwicmFkaXVzIiwiZHJhd1Nub3dGbGFrZXMiLCJncmFkaWVudCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJmaWxsU3R5bGUiLCJmaWxsIiwibW92ZVNub3dGbGFrZXMiLCJ1cGRhdGVTbm93RmFsbCIsImNsZWFyUmVjdCIsIm9ic3RhY2xlcyIsIlNwYXduT2JzdGFjbGUiLCJSYW5kb21JbnRSYW5nZSIsIm9ic3RhY2xlIiwicm91bmQiLCJoaWdoU2NvcmUiLCJoaWdoQ29pbnMiLCJzY29yZVRleHQiLCJoaWdodFNjb3JlVGV4dCIsImhpZ2h0Q29pbnNUZXh0IiwibGl2ZXNUZXh0IiwiY29pbkltYWdlIiwicGxheVNvdW5kIiwiZSIsImNvZGUiLCJmb250IiwiVXBkYXRlIiwiaW5pdGlhbFNwYXduVGltZXIiLCJzcGF3blRpbWVyIiwiS2V5USIsInN0b3BGb24iLCJLZXlBIiwicGxheUZvbiIsIm8iLCJzcGxpY2UiLCJwbGF5RGVhZCIsInQiLCJhIiwiYyIsInMiLCJ0ZXh0QWxpZ24iLCJmaWxsVGV4dCIsImNsb3NlUGF0aCJdLCJzb3VyY2VSb290IjoiIn0=