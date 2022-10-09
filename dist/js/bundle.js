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
          /* harmony export */
});
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



        /***/
}),

/***/ "./src/cloud.js":
/*!**********************!*\
  !*** ./src/cloud.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cloud)
          /* harmony export */
});
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



        /***/
}),

/***/ "./src/coin.js":
/*!*********************!*\
  !*** ./src/coin.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Coin)
          /* harmony export */
});
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



        /***/
}),

/***/ "./src/functions/functions.js":
/*!************************************!*\
  !*** ./src/functions/functions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "informForDesktop": () => (/* binding */ informForDesktop)
          /* harmony export */
});
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

        /***/
}),

/***/ "./src/game-sound.js":
/*!***************************!*\
  !*** ./src/game-sound.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameSound)
          /* harmony export */
});
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



        /***/
}),

/***/ "./src/get_clouds.js":
/*!***************************!*\
  !*** ./src/get_clouds.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getClouds)
          /* harmony export */
});
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
            random = cloudsSet[(0, _get_random_int__WEBPACK_IMPORTED_MODULE_2__["default"])(0, 2)];
            cloud = new _cloud__WEBPACK_IMPORTED_MODULE_1__["default"](random);
            clouds.push(cloud);
          }

          clouds.map(function (cloud) {
            cloud.update();
          });
        }

        /***/
}),

/***/ "./src/get_coin.js":
/*!*************************!*\
  !*** ./src/get_coin.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coinsCounter": () => (/* binding */ coinsCounter),
/* harmony export */   "getCoin": () => (/* binding */ getCoin)
          /* harmony export */
});
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
            randTime = (0, _get_random_int__WEBPACK_IMPORTED_MODULE_6__["default"])(20, 100);
            randTime += 200;
            coinY = randY[(0, _get_random_int__WEBPACK_IMPORTED_MODULE_6__["default"])(0, 3)];
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



        /***/
}),

/***/ "./src/get_platform.js":
/*!*****************************!*\
  !*** ./src/get_platform.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getPlatform)
          /* harmony export */
});
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start_game */ "./src/start_game.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _Platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Platform */ "./src/Platform.js");
/* harmony import */ var _get_random_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get_random_int */ "./src/get_random_int.js");
        function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() { }; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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
            randTime = platformRandTime[(0, _get_random_int__WEBPACK_IMPORTED_MODULE_3__["default"])(0, 4)];
          }

          if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % randTime === 0) {
            var type = (0, _get_random_int__WEBPACK_IMPORTED_MODULE_3__["default"])(0, 2);
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

        /***/
}),

/***/ "./src/get_random_int.js":
/*!*******************************!*\
  !*** ./src/get_random_int.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getRandomInt)
          /* harmony export */
});
        function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min; // Максимум не включается, минимум включается
        }

        /***/
}),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hero)
          /* harmony export */
});
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
                this.jump();
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
            key: "jump",
            value: function jump() {
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



        /***/
}),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canvas": () => (/* binding */ canvas),
/* harmony export */   "ctx": () => (/* binding */ ctx)
          /* harmony export */
});
/* harmony import */ var _pages_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/main */ "./src/pages/main.js");
        /* eslint-disable linebreak-style */

        var canvas = document.querySelector('canvas');
        var ctx = canvas.getContext('2d');
        localStorage.setItem('animate', 'true');
        localStorage.setItem('lives', 333);
        if (!localStorage.getItem('langSelected')) localStorage.setItem('langSelected', 'en');
        if (!localStorage.getItem('SpriteImage')) localStorage.setItem('SpriteImage', 'images/sprite2.png');
        (0, _pages_main__WEBPACK_IMPORTED_MODULE_0__["default"])();


        /***/
}),

/***/ "./src/lang.js":
/*!*********************!*\
  !*** ./src/lang.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lang": () => (/* binding */ lang)
          /* harmony export */
});
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


        /***/
}),

/***/ "./src/obstacle.js":
/*!*************************!*\
  !*** ./src/obstacle.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Obstacle)
          /* harmony export */
});
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



        /***/
}),

/***/ "./src/pages/dead.js":
/*!***************************!*\
  !*** ./src/pages/dead.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dead": () => (/* binding */ dead)
          /* harmony export */
});
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
              (0, _start_game__WEBPACK_IMPORTED_MODULE_1__.start)();
            });
          },
          hide: function hide() {
            var page1 = document.querySelector('.page');
            page1.classList.add('hidden');
          }
        };


        /***/
}),

/***/ "./src/pages/game-over.js":
/*!********************************!*\
  !*** ./src/pages/game-over.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameOver)
          /* harmony export */
});
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

        /***/
}),

/***/ "./src/pages/help.js":
/*!***************************!*\
  !*** ./src/pages/help.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ help)
          /* harmony export */
});
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
            (0, _start_game__WEBPACK_IMPORTED_MODULE_1__.start)();
          }

          pageWrapper.appendChild(page);
          pageWrapper.classList.remove('hidden');
          var startBtn = document.querySelector('.start');
          startBtn.addEventListener('click', startGame);
          var optionsBtn = document.querySelector('.options');
          optionsBtn.addEventListener('click', function () {
            (0, _options__WEBPACK_IMPORTED_MODULE_3__["default"])();
          });
        }

        /***/
}),

/***/ "./src/pages/main.js":
/*!***************************!*\
  !*** ./src/pages/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ main)
          /* harmony export */
});
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
            (0, _start_game__WEBPACK_IMPORTED_MODULE_1__.start)();
          }

          pageWrapper.appendChild(page);
          pageWrapper.classList.remove('hidden');
          var startBtn = document.querySelector('.start');
          startBtn.addEventListener('click', startGame);
          var helpBtn = document.querySelector('.help');
          helpBtn.addEventListener('click', function () {
            (0, _help__WEBPACK_IMPORTED_MODULE_2__["default"])();
          });
          var optionsBtn = document.querySelector('.options');
          optionsBtn.addEventListener('click', function () {
            (0, _options__WEBPACK_IMPORTED_MODULE_3__["default"])();
          });
        }

        /***/
}),

/***/ "./src/pages/options.js":
/*!******************************!*\
  !*** ./src/pages/options.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ options)
          /* harmony export */
});
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
            (0, _start_game__WEBPACK_IMPORTED_MODULE_1__.start)();
          } // выбор языка


          pageWrapper.appendChild(page);
          pageWrapper.classList.remove('hidden');
          var startBtn = document.querySelector('.start');
          startBtn.addEventListener('click', startGame);
          var helpBtn = document.querySelector('.help');
          helpBtn.addEventListener('click', function () {
            (0, _help__WEBPACK_IMPORTED_MODULE_2__["default"])();
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

        /***/
}),

/***/ "./src/player-sound.js":
/*!*****************************!*\
  !*** ./src/player-sound.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayerSound)
          /* harmony export */
});
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



        /***/
}),

/***/ "./src/snow_flakes.js":
/*!****************************!*\
  !*** ./src/snow_flakes.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSnowFlakes": () => (/* binding */ createSnowFlakes),
/* harmony export */   "updateSnowFall": () => (/* binding */ updateSnowFall)
          /* harmony export */
});
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



        /***/
}),

/***/ "./src/spawn_obstacle.js":
/*!*******************************!*\
  !*** ./src/spawn_obstacle.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpawnObstacle": () => (/* binding */ SpawnObstacle)
          /* harmony export */
});
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



        /***/
}),

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
          /* harmony export */
});
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
        var coinImage;
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
          scoreText = new _text__WEBPACK_IMPORTED_MODULE_1__["default"]("".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].scoreTxt, " ").concat(score), _functions_functions_js__WEBPACK_IMPORTED_MODULE_13__.informForDesktop.scoreLeft, _functions_functions_js__WEBPACK_IMPORTED_MODULE_13__.informForDesktop.scoreTop, 'left', '#212121', '20');
          livesText = new _text__WEBPACK_IMPORTED_MODULE_1__["default"]("".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].livesTxt, " ").concat(localStorage.getItem('lives')), _functions_functions_js__WEBPACK_IMPORTED_MODULE_13__.informForDesktop.livesTextLeft, _functions_functions_js__WEBPACK_IMPORTED_MODULE_13__.informForDesktop.livesTextTop, 'left', '#212121', '20');
          hightScoreText = new _text__WEBPACK_IMPORTED_MODULE_1__["default"]("".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].bestScoreTxt, " ").concat(highScore), _functions_functions_js__WEBPACK_IMPORTED_MODULE_13__.informForDesktop.hightScoreTextLeft, _functions_functions_js__WEBPACK_IMPORTED_MODULE_13__.informForDesktop.hightScoreTextTop, 'left', '#212121', '20');
          hightCoinsText = new _text__WEBPACK_IMPORTED_MODULE_1__["default"]("".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].bestCoinsTxt, " ").concat(highCoins), _functions_functions_js__WEBPACK_IMPORTED_MODULE_13__.informForDesktop.hightCoinsTextLeft, _functions_functions_js__WEBPACK_IMPORTED_MODULE_13__.informForDesktop.hightCoinsTextTop, 'left', '#212121', '20');
          (0, _snow_flakes__WEBPACK_IMPORTED_MODULE_4__.createSnowFlakes)(); // playSound.playFon();

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
            (0, _spawn_obstacle__WEBPACK_IMPORTED_MODULE_2__.SpawnObstacle)();
            spawnTimer = initialSpawnTimer - gameSpeed * 8;

            if (spawnTimer < 60) {
              spawnTimer = 60;
            }
          }

          (0, _snow_flakes__WEBPACK_IMPORTED_MODULE_4__.updateSnowFall)(); // spawn enemies

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
                (0, _pages_game_over__WEBPACK_IMPORTED_MODULE_12__["default"])();
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

          (0, _get_platform__WEBPACK_IMPORTED_MODULE_9__["default"])(); // spawn coin

          (0, _get_coin__WEBPACK_IMPORTED_MODULE_6__.getCoin)(); // spawn clouds

          (0, _get_clouds__WEBPACK_IMPORTED_MODULE_7__["default"])();
        }



        /***/
}),

/***/ "./src/text.js":
/*!*********************!*\
  !*** ./src/text.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Text)
          /* harmony export */
});
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



        /***/
})

    /******/
});
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
      /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
      /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
    /******/
}
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
}
        /******/
}
      /******/
};
    /******/
})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    /******/
})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
      /******/
};
    /******/
})();
/******/
/************************************************************************/
/******/
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})()
  ;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TCxHQUFTQSxDQUFUO0lBQ0EsS0FBS3RPLENBQUwsR0FBU0EsQ0FBVDtJQUNBLEtBQUtDLENBQUwsR0FBU0EsQ0FBVDtJQUNBLEtBQUtzTyxDQUFMLEdBQVNBLENBQVQ7SUFDQSxLQUFLQyxDQUFMLEdBQVNBLENBQVQ7SUFDQSxLQUFLQyxDQUFMLEdBQVNBLENBQVQ7RUFDRDs7OztXQUVELGdCQUFPO01BQ0w1TyxpREFBQTtNQUNBQSxpREFBQSxHQUFnQixLQUFLMk8sQ0FBckI7TUFDQTNPLDRDQUFBLGFBQWMsS0FBSzRPLENBQW5CO01BQ0E1TyxpREFBQSxHQUFnQixLQUFLME8sQ0FBckI7TUFDQTFPLGdEQUFBLENBQWEsS0FBS3lPLENBQWxCLEVBQXFCLEtBQUt0TyxDQUExQixFQUE2QixLQUFLQyxDQUFsQztNQUNBSixpREFBQTtJQUNEOzs7Ozs7Ozs7Ozs7VUNwQkg7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL1BsYXRmb3JtLmpzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvLi9zcmMvY2xvdWQuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9jb2luLmpzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvLi9zcmMvZnVuY3Rpb25zL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL2dhbWUtc291bmQuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9nZXRfY2xvdWRzLmpzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvLi9zcmMvZ2V0X2NvaW4uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9nZXRfcGxhdGZvcm0uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9nZXRfcmFuZG9tX2ludC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL2hlcm8uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL2xhbmcuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9vYnN0YWNsZS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL3BhZ2VzL2RlYWQuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9wYWdlcy9nYW1lLW92ZXIuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9wYWdlcy9oZWxwLmpzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvLi9zcmMvcGFnZXMvbWFpbi5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL3BhZ2VzL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9wbGF5ZXItc291bmQuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi8uL3NyYy9zbm93X2ZsYWtlcy5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL3NwYXduX29ic3RhY2xlLmpzIiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvLi9zcmMvc3RhcnRfZ2FtZS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2Ly4vc3JjL3RleHQuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnNjbG9uZV9jb25zZXJ2YXRpdi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JzY2xvbmVfY29uc2VydmF0aXYvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yc2Nsb25lX2NvbnNlcnZhdGl2L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm0ge1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHRoaXMueCA9IG9wdGlvbnMueDtcclxuICAgIHRoaXMueSA9IG9wdGlvbnMueTtcclxuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcclxuICAgIHRoaXMuZmxpZ2h0QWx0aXR1ZGUgPSBvcHRpb25zLmZsaWdodEFsdGl0dWRlO1xyXG4gICAgdGhpcy5nYW1lU3BlZWQgPSBvcHRpb25zLmdhbWVTcGVlZDtcclxuXHJcbiAgICB0aGlzLmR4ID0gLXRoaXMuZ2FtZVNwZWVkO1xyXG5cclxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1hZ2Uuc3JjID0gb3B0aW9ucy5pbWFnZVNyYztcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMueCArPSB0aGlzLmR4O1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgIHRoaXMueCxcclxuICAgICAgY2FudmFzLmhlaWdodCAtIHRoaXMuZmxpZ2h0QWx0aXR1ZGUsXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gJy4vaW5kZXguanMnO1xyXG5pbXBvcnQgeyBnYW1lU3BlZWQgfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvdWQge1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aDtcclxuICAgIHRoaXMuc3ggPSBvcHRpb25zLnN4O1xyXG4gICAgdGhpcy5zeSA9IG9wdGlvbnMuc3k7XHJcbiAgICB0aGlzLnNXaWR0aCA9IG9wdGlvbnMuc1dpZHRoO1xyXG4gICAgdGhpcy5zSGVpZ2h0ID0gb3B0aW9ucy5zSGVpZ2h0O1xyXG4gICAgdGhpcy5keSA9IG9wdGlvbnMuZHk7XHJcbiAgICB0aGlzLmRXaWR0aCA9IG9wdGlvbnMuc1dpZHRoO1xyXG4gICAgdGhpcy5kSGVpZ2h0ID0gb3B0aW9ucy5zSGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuZHggPSAtZ2FtZVNwZWVkIC8gZ2FtZVNwZWVkO1xyXG5cclxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1hZ2Uuc3JjID0gb3B0aW9ucy5zcmM7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLnggKz0gdGhpcy5keDtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICB0aGlzLmltYWdlLFxyXG4gICAgICB0aGlzLnN4LFxyXG4gICAgICB0aGlzLnN5LFxyXG4gICAgICB0aGlzLnNXaWR0aCxcclxuICAgICAgdGhpcy5zSGVpZ2h0LFxyXG4gICAgICB0aGlzLngsXHJcbiAgICAgIHRoaXMuZHksXHJcbiAgICAgIHRoaXMuZFdpZHRoLFxyXG4gICAgICB0aGlzLmRIZWlnaHQsXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29pbiB7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgdGhpcy54ID0gb3B0aW9ucy54O1xyXG4gICAgdGhpcy55ID0gb3B0aW9ucy55O1xyXG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy53aWR0aCk7XHJcblxyXG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcclxuXHJcbiAgICB0aGlzLnRpY2tzUGVyRnJhbWUgPSBvcHRpb25zLnRpY2tzUGVyRnJhbWUgfHwgMDtcclxuICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSBvcHRpb25zLm51bWJlck9mRnJhbWVzIHx8IDE7XHJcblxyXG4gICAgdGhpcy5nYW1lU3BlZWQgPSBvcHRpb25zLmdhbWVTcGVlZDtcclxuXHJcbiAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xyXG4gICAgdGhpcy50aWNrQ291bnQgPSAwO1xyXG5cclxuICAgIHRoaXMuZHggPSAtdGhpcy5nYW1lU3BlZWQ7XHJcblxyXG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWFnZS5zcmMgPSAnLi9pbWFnZXMvY29pbi5wbmcnO1xyXG5cclxuICAgIHRoaXMuYXVkaW9PYmogPSBuZXcgQXVkaW8oJy4vc291bmQvY29pbjIubXAzJyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLnggKz0gdGhpcy5keDtcclxuXHJcbiAgICB0aGlzLnRpY2tDb3VudCsrO1xyXG5cclxuICAgIGlmICh0aGlzLnRpY2tDb3VudCA+IHRoaXMudGlja3NQZXJGcmFtZSkge1xyXG4gICAgICB0aGlzLnRpY2tDb3VudCA9IDA7XHJcbiAgICAgIGlmICh0aGlzLmZyYW1lSW5kZXggPCB0aGlzLm51bWJlck9mRnJhbWVzIC0gMSkge1xyXG4gICAgICAgIHRoaXMuZnJhbWVJbmRleCArPSAxO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgICh0aGlzLmZyYW1lSW5kZXggKiB0aGlzLndpZHRoKSAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXHJcbiAgICAgIDAsXHJcbiAgICAgIHRoaXMud2lkdGggLyB0aGlzLm51bWJlck9mRnJhbWVzLFxyXG4gICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgdGhpcy54LFxyXG4gICAgICB0aGlzLnksXHJcbiAgICAgIHRoaXMud2lkdGggLyB0aGlzLm51bWJlck9mRnJhbWVzLFxyXG4gICAgICB0aGlzLmhlaWdodCxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwbGF5Q29pblNvdW5kKCkge1xyXG4gICAgdGhpcy5hdWRpb09iai5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgbGV0IGluZm9ybUZvckRlc2t0b3AgPSB7XHJcblxyXG4gIGhpZ2h0U2NvcmVUZXh0VG9wOiAyNSxcclxuICBoaWdodFNjb3JlVGV4dExlZnQ6IDIwLFxyXG5cclxuICBzY29yZVRvcDogNTAsXHJcbiAgc2NvcmVMZWZ0OiAyMCxcclxuXHJcbiAgaGlnaHRDb2luc1RleHRUb3A6IDc1LFxyXG4gIGhpZ2h0Q29pbnNUZXh0TGVmdDogMjAsXHJcblxyXG4gIGFjdHVhbENvaW5zVGV4dFRvcDogMTAwLFxyXG4gIGFjdHVhbENvaW5zVGV4dExlZnQ6IDIwLFxyXG5cclxuICBsaXZlc1RleHRUb3A6IDEyNSxcclxuICBsaXZlc1RleHRMZWZ0OiAyMCxcclxufSIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNvdW5kIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIHRoaXMudXJsID0gd2luZG93LmdhbWVTdGF0ZS5zb3VuZFVybDtcclxuICAgIC8vIHRoaXMubnVtID0gMTtcclxuICAgIHRoaXMuZm9uU291bmQgPSBuZXcgQXVkaW8oJ3NvdW5kL2ZvbjEubXAzJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZm9uU291bmQpO1xyXG4gICAgdGhpcy5mb25Tb3VuZC52b2x1bWUgPSAwLjE7XHJcbiAgICB0aGlzLmRlYWRTb3VuZCA9IG5ldyBBdWRpbygnc291bmQvZGVhZC5tcDMnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kZWFkU291bmQpO1xyXG4gIH1cclxuXHJcbiAgcGxheUZvbigpIHtcclxuICAgIHRoaXMuZm9uU291bmQubG9vcCA9IHRydWU7XHJcbiAgICB0aGlzLmZvblNvdW5kLnBsYXkoKTtcclxuICB9XHJcblxyXG4gIHN0b3BGb24oKSB7XHJcbiAgICB0aGlzLmZvblNvdW5kLnBhdXNlKCk7XHJcbiAgfVxyXG5cclxuICBwbGF5RGVhZCgpIHtcclxuICAgIHRoaXMuZGVhZFNvdW5kLnBsYXkoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgc2NvcmUgfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xyXG5pbXBvcnQgQ2xvdWQgZnJvbSAnLi9jbG91ZCc7XHJcbmltcG9ydCBnZXRSYW5kb21JbnQgZnJvbSAnLi9nZXRfcmFuZG9tX2ludCc7XHJcblxyXG5jb25zdCBjbG91ZHNTZXQgPSBbXHJcbiAge1xyXG4gICAgc3JjOiAnaW1hZ2VzL2Nsb3Vkcy5wbmcnLFxyXG4gICAgc3g6IDAsXHJcbiAgICBzeTogMCxcclxuICAgIHNXaWR0aDogMjIwLFxyXG4gICAgc0hlaWdodDogMTYwLFxyXG4gICAgZHk6IDE1MCxcclxuICAgIGRXaWR0aDogMjIwLFxyXG4gICAgZEhlaWdodDogMTYwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc3JjOiAnaW1hZ2VzL2Nsb3Vkcy5wbmcnLFxyXG4gICAgc3g6IDI1MCxcclxuICAgIHN5OiAwLFxyXG4gICAgc1dpZHRoOiAyMjAsXHJcbiAgICBzSGVpZ2h0OiAxNjAsXHJcbiAgICBkeTogMTAwLFxyXG4gICAgZFdpZHRoOiAyMjAsXHJcbiAgICBkSGVpZ2h0OiAxNjAsXHJcbiAgfSxcclxuXTtcclxuXHJcbmxldCBjbG91ZDtcclxuY29uc3QgY2xvdWRzID0gW107XHJcbmxldCByYW5kb207XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDbG91ZHMoKSB7XHJcbiAgaWYgKHNjb3JlICUgNTAwID09PSAwKSB7XHJcbiAgICByYW5kb20gPSBjbG91ZHNTZXRbZ2V0UmFuZG9tSW50KDAsIDIpXTtcclxuICAgIGNsb3VkID0gbmV3IENsb3VkKHJhbmRvbSk7XHJcblxyXG4gICAgY2xvdWRzLnB1c2goY2xvdWQpO1xyXG4gIH1cclxuXHJcbiAgY2xvdWRzLm1hcCgoY2xvdWQpID0+IHtcclxuICAgIGNsb3VkLnVwZGF0ZSgpO1xyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IHNjb3JlLCBwbGF5ZXIsIGdhbWVTcGVlZCB9IGZyb20gJy4vc3RhcnRfZ2FtZSc7XHJcbmltcG9ydCB7IGluZm9ybUZvckRlc2t0b3AgfSBmcm9tIFwiLi9mdW5jdGlvbnMvZnVuY3Rpb25zLmpzXCI7XHJcbmltcG9ydCB7IGNhbnZhcyB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgQ29pbiBmcm9tICcuL2NvaW4nO1xyXG5cclxuaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0JztcclxuaW1wb3J0IHsgbGFuZyB9IGZyb20gJy4vbGFuZyc7XHJcbmltcG9ydCBnZXRSYW5kb21JbnQgZnJvbSAnLi9nZXRfcmFuZG9tX2ludCc7XHJcblxyXG5sZXQgY29pbjtcclxuY29uc3QgY29pbnMgPSBbXTtcclxuXHJcbmxldCBjb2luc1RleHQ7XHJcblxyXG5leHBvcnQgY29uc3QgY29pbnNDb3VudGVyID0ge1xyXG4gIGNvdW50ZXI6IDAsXHJcbn07XHJcblxyXG5sZXQgY29pblk7XHJcbmxldCByYW5kVGltZTtcclxuY29uc3QgcmFuZFkgPSBbXHJcbiAge1xyXG4gICAgeTogMzUwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgeTogNjAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgeTogMzAwLFxyXG4gIH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBnZXRDb2luKCkge1xyXG4gIGNvaW5zVGV4dCA9IG5ldyBUZXh0KFxyXG4gICAgYCR7bGFuZ1tsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyldLmNvaW5zVHh0fSAke2NvaW5zQ291bnRlci5jb3VudGVyfWAsIGluZm9ybUZvckRlc2t0b3AuYWN0dWFsQ29pbnNUZXh0TGVmdCwgaW5mb3JtRm9yRGVza3RvcC5hY3R1YWxDb2luc1RleHRUb3AsICdsZWZ0JywgJyMyMTIxMjEnLCAnMjAnLFxyXG4gICk7XHJcblxyXG4gIGNvaW5zVGV4dC5EcmF3KCk7XHJcblxyXG4gIGlmIChzY29yZSAlIDIwMCA9PT0gMCkge1xyXG4gICAgcmFuZFRpbWUgPSBnZXRSYW5kb21JbnQoMjAsIDEwMCk7XHJcbiAgICByYW5kVGltZSArPSAyMDA7XHJcbiAgICBjb2luWSA9IHJhbmRZW2dldFJhbmRvbUludCgwLCAzKV07XHJcbiAgfVxyXG5cclxuICBpZiAoc2NvcmUgJSByYW5kVGltZSA9PT0gMCkge1xyXG4gICAgY29pbiA9IG5ldyBDb2luKHtcclxuICAgICAgeDogY2FudmFzLndpZHRoLFxyXG4gICAgICB5OiBjb2luWS55LFxyXG4gICAgICB3aWR0aDogNTA0LFxyXG4gICAgICBoZWlnaHQ6IDg0LFxyXG4gICAgICBudW1iZXJPZkZyYW1lczogNixcclxuICAgICAgdGlja3NQZXJGcmFtZTogNCxcclxuICAgICAgZ2FtZVNwZWVkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29pbnMucHVzaChjb2luKTtcclxuICB9XHJcblxyXG4gIGlmIChjb2lucy5sZW5ndGggPiAwKSB7XHJcbiAgICBjb2lucy5mb3JFYWNoKChjb2luKSA9PiB7XHJcbiAgICAgIGNvaW4uc3RhcnQoKTtcclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICBwbGF5ZXIuZHggPCBjb2luLnggKyAoY29pbi53aWR0aCAvIDYpXHJcbiAgICAgICAgJiYgcGxheWVyLmR4ICsgKHBsYXllci53aWR0aCAvIDEwKSAtIDEwID4gY29pbi54XHJcbiAgICAgICAgJiYgcGxheWVyLnkgPCBjb2luLnkgKyBjb2luLmhlaWdodFxyXG4gICAgICAgICYmIHBsYXllci55ICsgcGxheWVyLmhlaWdodCA+PSBjb2luLnlcclxuICAgICAgKSB7XHJcbiAgICAgICAgY29pbi55ID0gMTAwMDA7XHJcbiAgICAgICAgY29pbi5wbGF5Q29pblNvdW5kKCk7XHJcbiAgICAgICAgY29pbnNDb3VudGVyLmNvdW50ZXIgKz0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvaW4ueCA8IC01MCkge1xyXG4gICAgICAgIGNvaW4ueSA9IDEwMDAwO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldENvaW4gfTtcclxuIiwiaW1wb3J0IHsgc2NvcmUsIHBsYXllciwgZ2FtZVNwZWVkIH0gZnJvbSAnLi9zdGFydF9nYW1lJztcclxuaW1wb3J0IHsgY2FudmFzIH0gZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCBQbGF0Zm9ybSBmcm9tICcuL1BsYXRmb3JtJztcclxuaW1wb3J0IGdldFJhbmRvbUludCBmcm9tICcuL2dldF9yYW5kb21faW50JztcclxuXHJcbmxldCBwbGF0Zm9ybTtcclxuXHJcbmxldCByYW5kVGltZTtcclxuY29uc3QgcGxhdGZvcm1SYW5kVGltZSA9IFsyMDAsIDIyMCwgMjUwLCAzMDBdO1xyXG5cclxuY29uc3QgcGxhdGZvcm1zID0gW107XHJcbmNvbnN0IHBsYXRmb3Jtc09wdGlvbnMgPSBbXHJcbiAge1xyXG4gICAgc3JjOiAnaW1hZ2VzL3BsYXRmb3JtYTEucG5nJyxcclxuICAgIHdpZHRoOiA0OTUsXHJcbiAgICBoZWlnaHQ6IDExNSxcclxuICAgIGZsaWdodEFsdGl0dWRlOiAyNTAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzcmM6ICdpbWFnZXMvcGxhdGZvcm1hMi5wbmcnLFxyXG4gICAgd2lkdGg6IDI4MCxcclxuICAgIGhlaWdodDogMTE1LFxyXG4gICAgZmxpZ2h0QWx0aXR1ZGU6IDMwMCxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UGxhdGZvcm0oKSB7XHJcbiAgaWYgKHNjb3JlICUgMjAwID09PSAwKSB7XHJcbiAgICByYW5kVGltZSA9IHBsYXRmb3JtUmFuZFRpbWVbZ2V0UmFuZG9tSW50KDAsIDQpXTtcclxuICB9XHJcblxyXG4gIGlmIChzY29yZSAlIHJhbmRUaW1lID09PSAwKSB7XHJcbiAgICBsZXQgdHlwZSA9IGdldFJhbmRvbUludCgwLCAyKTtcclxuICAgIHR5cGUgPSBwbGF0Zm9ybXNPcHRpb25zW3R5cGVdO1xyXG5cclxuICAgIHBsYXRmb3JtID0gbmV3IFBsYXRmb3JtKHtcclxuICAgICAgeDogY2FudmFzLndpZHRoLFxyXG4gICAgICB5OiBjYW52YXMuaGVpZ2h0LFxyXG4gICAgICBmbGlnaHRBbHRpdHVkZTogdHlwZS5mbGlnaHRBbHRpdHVkZSxcclxuICAgICAgd2lkdGg6IHR5cGUud2lkdGgsXHJcbiAgICAgIGhlaWdodDogdHlwZS5oZWlnaHQsXHJcbiAgICAgIGdhbWVTcGVlZCxcclxuICAgICAgaW1hZ2VTcmM6IHR5cGUuc3JjLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcGxhdGZvcm1zLnB1c2gocGxhdGZvcm0pO1xyXG4gIH1cclxuXHJcbiAgbGV0IGZsYWcgPSBmYWxzZTtcclxuXHJcbiAgZm9yIChjb25zdCBwbGF0Zm9ybSBvZiBwbGF0Zm9ybXMpIHtcclxuICAgIHBsYXRmb3JtLnVwZGF0ZSgpO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgKHBsYXllci5keCA+IHBsYXRmb3JtLnggJiYgcGxheWVyLmR4IDwgcGxhdGZvcm0ueCArIHBsYXRmb3JtLndpZHRoIC0gNDApXHJcbiAgICAgICYmIHBsYXllci55IDwgY2FudmFzLmhlaWdodCAtIHBsYXRmb3JtLmZsaWdodEFsdGl0dWRlXHJcbiAgICApIHtcclxuICAgICAgcGxheWVyLnRlc3QgPSBjYW52YXMuaGVpZ2h0IC0gcGxhdGZvcm0uZmxpZ2h0QWx0aXR1ZGUgKyAyO1xyXG4gICAgICBmbGFnID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAoIWZsYWcpIHtcclxuICAgICAgcGxheWVyLnRlc3QgPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xyXG4gIG1pbiA9IE1hdGguY2VpbChtaW4pO1xyXG4gIG1heCA9IE1hdGguZmxvb3IobWF4KTtcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluOyAvLyDQnNCw0LrRgdC40LzRg9C8INC90LUg0LLQutC70Y7Rh9Cw0LXRgtGB0Y8sINC80LjQvdC40LzRg9C8INCy0LrQu9GO0YfQsNC10YLRgdGPXHJcbn0iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyBrZXlzIH0gZnJvbSAnLi9zdGFydF9nYW1lJztcclxuaW1wb3J0IFBsYXllclNvdW5kIGZyb20gJy4vcGxheWVyLXNvdW5kJztcclxuaW1wb3J0IHsgZGVhZCB9IGZyb20gJy4vcGFnZXMvZGVhZCc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlcm8ge1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHRoaXMuaW1hZ2UgPSBvcHRpb25zLmltYWdlO1xyXG5cclxuICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XHJcbiAgICB0aGlzLnRpY2tDb3VudCA9IDA7XHJcbiAgICB0aGlzLnRpY2tzUGVyRnJhbWUgPSBvcHRpb25zLnRpY2tzUGVyRnJhbWUgfHwgMDtcclxuICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSBvcHRpb25zLm51bWJlck9mRnJhbWVzIHx8IDE7XHJcblxyXG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuZHkgPSBvcHRpb25zLmR5IHx8IDA7XHJcbiAgICB0aGlzLmR4ID0gMDtcclxuICAgIHRoaXMuc3ggPSAwO1xyXG4gICAgdGhpcy5qdW1wRm9yY2UgPSAxNTtcclxuICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuanVtcFRpbWVyID0gMDtcclxuXHJcbiAgICB0aGlzLnkgPSBvcHRpb25zLnk7XHJcbiAgICB0aGlzLnggPSBvcHRpb25zLng7XHJcbiAgICB0aGlzLmdyYXZpdHkgPSAxO1xyXG5cclxuICAgIHRoaXMuaXNMZWZ0ID0gZmFsc2U7XHJcblxyXG4gICAgLy8gcGxhdGZvcm1cclxuICAgIHRoaXMudGVzdCA9IG9wdGlvbnMudGVzdDtcclxuXHJcbiAgICB0aGlzLnNvdW5kID0gbmV3IFBsYXllclNvdW5kKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLnRpY2tDb3VudCArPSAxO1xyXG5cclxuICAgIGlmICh0aGlzLnRpY2tDb3VudCA+IHRoaXMudGlja3NQZXJGcmFtZSkge1xyXG4gICAgICB0aGlzLnRpY2tDb3VudCA9IDA7XHJcbiAgICAgIGlmICh0aGlzLmZyYW1lSW5kZXggPCB0aGlzLm51bWJlck9mRnJhbWVzIC0gMSkge1xyXG4gICAgICAgIHRoaXMuZnJhbWVJbmRleCArPSAxO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgICh0aGlzLmZyYW1lSW5kZXggKiB0aGlzLndpZHRoKSAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXHJcbiAgICAgIHRoaXMuc3gsXHJcbiAgICAgIHRoaXMud2lkdGggLyB0aGlzLm51bWJlck9mRnJhbWVzLFxyXG4gICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgdGhpcy5keCxcclxuICAgICAgdGhpcy55LFxyXG4gICAgICB0aGlzLndpZHRoIC8gdGhpcy5udW1iZXJPZkZyYW1lcyxcclxuICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gZ3Jhdml0eVxyXG4gIC8vIGdyYXZpdHlHbygpIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMudGVzdClcclxuICAvLyAgIHRoaXMueSArPSB0aGlzLmR5O1xyXG5cclxuICAvLyAgIGlmICh0aGlzLnkgKyB0aGlzLmhlaWdodCA8IGNhbnZhcy5oZWlnaHQpIHtcclxuICAvLyAgICAgdGhpcy5keSArPSB0aGlzLmdyYXZpdHk7XHJcbiAgLy8gICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIHRoaXMuZHkgPSAwO1xyXG4gIC8vICAgICB0aGlzLmdyb3VuZGVkID0gdHJ1ZTtcclxuICAvLyAgICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAtIHRoaXMuaGVpZ2h0O1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgZ3Jhdml0eUdvKCkge1xyXG4gICAgdGhpcy55ICs9IHRoaXMuZHk7XHJcblxyXG4gICAgaWYgKHRoaXMueSArIHRoaXMuaGVpZ2h0IDwgdGhpcy50ZXN0KSB7XHJcbiAgICAgIHRoaXMuZHkgKz0gdGhpcy5ncmF2aXR5O1xyXG4gICAgICB0aGlzLmdyb3VuZGVkID0gZmFsc2U7XHJcbiAgICAgIGlmICh0aGlzLmR5ID4gMCkge1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTGVmdCkge1xyXG4gICAgICAgICAgdGhpcy5zeCA9IDMwMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zeCA9IDQwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZHkgPSAwO1xyXG4gICAgICB0aGlzLmdyb3VuZGVkID0gdHJ1ZTtcclxuICAgICAgLy8gZGVhZC5oaWRlKCk7XHJcbiAgICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSA2O1xyXG4gICAgICBpZiAodGhpcy5pc0xlZnQpIHtcclxuICAgICAgICB0aGlzLnN4ID0gMTAwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc3ggPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMueSA9IHRoaXMudGVzdCAtIHRoaXMuaGVpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8ganVtcFxyXG4gIGdldFJlYWR5VG9KdW1wKCkge1xyXG4gICAgaWYgKGtleXMuU3BhY2UgfHwga2V5cy5LZXlXIHx8IGtleXMuQXJyb3dVcCkge1xyXG4gICAgICB0aGlzLnNvdW5kLmp1bXBVcCgpO1xyXG4gICAgICB0aGlzLkp1bXAoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuanVtcFRpbWVyID0gMDtcclxuICAgIH1cclxuICAgIGlmIChrZXlzLktleU0gfHwga2V5cy5BcnJvd1JpZ2h0KSB7XHJcbiAgICAgIGlmICh0aGlzLmR4IDwgY2FudmFzLndpZHRoIC0gMTAwKSB0aGlzLmR4ICs9IDU7XHJcbiAgICAgIHRoaXMuc3ggPSAwO1xyXG4gICAgICB0aGlzLmlzTGVmdCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gNjtcclxuICAgIH1cclxuICAgIGlmIChrZXlzLktleU4gfHwga2V5cy5BcnJvd0xlZnQpIHtcclxuICAgICAgaWYgKHRoaXMuZHggPiAwKSB0aGlzLmR4IC09IDU7XHJcbiAgICAgIHRoaXMuc3ggPSAxMDA7XHJcbiAgICAgIHRoaXMuaXNMZWZ0ID0gdHJ1ZTtcclxuICAgICAgdGhpcy5udW1iZXJPZkZyYW1lcyA9IDY7XHJcbiAgICB9XHJcbiAgICBpZiAoa2V5cy5Fc2NhcGUpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgSnVtcCgpIHtcclxuICAgIGlmICh0aGlzLmdyb3VuZGVkICYmIHRoaXMuanVtcFRpbWVyID09PSAwKSB7XHJcbiAgICAgIHRoaXMuanVtcFRpbWVyID0gMTtcclxuICAgICAgdGhpcy5keSA9IC10aGlzLmp1bXBGb3JjZTtcclxuICAgICAgdGhpcy5zb3VuZC5qdW1wRG93bigpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmp1bXBUaW1lciA+IDAgJiYgdGhpcy5qdW1wVGltZXIgPCAxNSkge1xyXG4gICAgICB0aGlzLmp1bXBUaW1lciArPSAxO1xyXG4gICAgICB0aGlzLmR5ID0gLXRoaXMuanVtcEZvcmNlIC0gKHRoaXMuanVtcFRpbWVyIC8gNTApO1xyXG4gICAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gMTtcclxuICAgICAgaWYgKHRoaXMuaXNMZWZ0KSB7XHJcbiAgICAgICAgdGhpcy5zeCA9IDIwMDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnN4ID0gNTAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIGNvbnN0IGxvb3AgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgIHRoaXMuZ3Jhdml0eUdvKCk7XHJcbiAgICAgIHRoaXMuZ2V0UmVhZHlUb0p1bXAoKTtcclxuXHJcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW5pbWF0ZScpID09PSAndHJ1ZScpIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5pbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuXHJcbmltcG9ydCBtYWluIGZyb20gJy4vcGFnZXMvbWFpbic7XHJcblxyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYW5pbWF0ZScsICd0cnVlJyk7XHJcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXZlcycsIDMzMyk7XHJcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFuZ1NlbGVjdGVkJywgJ2VuJyk7XHJcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Nwcml0ZUltYWdlJykpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdTcHJpdGVJbWFnZScsICdpbWFnZXMvc3ByaXRlMi5wbmcnKTtcclxuXHJcbm1haW4oKTtcclxuXHJcbmV4cG9ydCB7IGNhbnZhcywgY3R4IH07XHJcbiIsImNvbnN0IGxhbmcgPSB7XHJcbiAgZW46IHtcclxuICAgIHNjb3JlVHh0OiAnU2NvcmU6JyxcclxuICAgIGNvaW5zVHh0OiAnQ29pbnM6JyxcclxuICAgIGJlc3RDb2luc1R4dDogJ0Jlc3QgY29pbnM6JyxcclxuICAgIGxpdmVzVHh0OiAnTGl2ZXM6JyxcclxuICAgIGJlc3RTY29yZVR4dDogJ0Jlc3Qgc2NvcmU6JyxcclxuICAgIHN0YXJ0R2FtZUJ0bjogJ1N0YXJ0IEdhbWUnLFxyXG4gICAgb3B0aW9uc0J0bjogJ09wdGlvbnMnLFxyXG4gICAgc2VsZWN0TG5nOiAnU2VsZWN0IGxhbmd1YWdlOicsXHJcbiAgICBzZWxlY3RQbGF5ZXI6ICdTZWxlY3QgcGxheWVyOicsXHJcbiAgICBnYW1lT3ZlcjogJ1lvdSBsb3N0LiBDbGljayB0byBjb250aW51ZS4nLFxyXG4gICAgaGVscEJ0bjogJ0hlbHAnLFxyXG4gICAgaGVscFR4dDE6ICdZb3VyIG1pc3Npb24gaXMgdG8gY29sbGVjdCBhbGwgdGhlIGNvaW5zLiBUbyBkbyB0aGlzIHlvdSBvbmx5IGhhdmUgYSBjZXJ0YWluIG51bWJlciAgb2YgbGl2ZXMuIFlvdSBjYW4ganVtcCwgbW92ZSBsZWZ0IGFuZCByaWdodCB3aXRoaW4gc2NyZWVuLicsXHJcbiAgICBoZWxwVHh0MjogJ0tleWJvYXJkIENvbnRyb2w6JyxcclxuICAgIGhlbHBUeHQzOiAnVywgU3BhY2UsIF4gLSBKVU1QJyxcclxuICAgIGhlbHBUeHQ0OiAnTSwgPiAtIE1PVkUgUklHSFQnLFxyXG4gICAgaGVscFR4dDU6ICdOLCA8IC0gTU9WRSBMRUZUJyxcclxuICAgIGhlbHBUeHQ2OiAnQSAtIE1VU0lDIE9OJyxcclxuICAgIGhlbHBUeHQ3OiAnUSAtIE1VU0lDIE9GRicsXHJcbiAgICBoZWxwVHh0ODogJ0VzYyAtIE1BSU4gTUVOVScsXHJcbiAgfSxcclxuICBydToge1xyXG4gICAgc2NvcmVUeHQ6ICfQoNC10LfRg9C70YzRgtCw0YI6JyxcclxuICAgIGNvaW5zVHh0OiAn0JzQvtC90LXRgtGLOicsXHJcbiAgICBsaXZlc1R4dDogJ9CW0LjQt9C90Lg6JyxcclxuICAgIGJlc3RTY29yZVR4dDogJ9Cb0YPRh9GI0LjQuSDRgNC10LfRg9C70YzRgtCw0YI6JyxcclxuICAgIHN0YXJ0R2FtZUJ0bjogJ9Cd0LDRh9Cw0YLRjCDQuNCz0YDRgycsXHJcbiAgICBvcHRpb25zQnRuOiAn0J3QsNGB0YLRgNC+0LnQutC4JyxcclxuICAgIHNlbGVjdExuZzogJ9CS0YvQsdC10YDQuNGC0LUg0Y/Qt9GL0Lo6JyxcclxuICAgIHNlbGVjdFBsYXllcjogJ9CS0YvQsdC10YDQuNGC0LUg0LjQs9GA0L7QutCwOicsXHJcbiAgICBnYW1lT3ZlcjogJ9CS0Ysg0L/RgNC+0LjQs9GA0LDQu9C4LiDQmtC70LjQutC90Lgg0YfRgtC+0LHRiyDQv9GA0L7QtNC+0LvQttC40YLRjC4nLFxyXG4gICAgaGVscEJ0bjogJ9Cf0L7QvNC+0YnRjCcsXHJcbiAgICBoZWxwVHh0MTogJ9CS0LDRiNCwINC30LDQtNCw0YfQsCDRgdC+0LHRgNCw0YLRjCDQstGB0LUg0LzQvtC90LXRgtGLLiDQlNC70Y8g0Y3RgtC+0LPQviDRgyDQstCw0YEg0LXRgdGC0Ywg0L7Qv9GA0LXQtNC10LvQtdC90L3QvtC5INC60L7Qu9C40YfQtdGB0YLQstC+INC20LjQt9C90LXQuS4g0JLRiyDQvNC+0LbQtdGC0LUg0L/RgNGL0LPQsNGC0YwsINC40LTRgtC4INCy0LvQtdCy0L4g0Lgg0LLQv9GA0LDQstC+INCyINC/0YDQtdC00LXQu9Cw0YUg0Y3QutGA0LDQvdCwLicsXHJcbiAgICBoZWxwVHh0MjogJ9Ca0LvQsNCy0LjRiNC4INGD0L/RgNCw0LLQu9C10L3QuNGPOicsXHJcbiAgICBoZWxwVHh0MzogJ1csIFNwYWNlLCBeIC0g0J/RgNGL0LbQvtC6JyxcclxuICAgIGhlbHBUeHQ0OiAnTSwgPiAtINCY0LTRgtC4INCy0L/RgNCw0LLQvicsXHJcbiAgICBoZWxwVHh0NTogJ04sIDwgLSDQmNC00YLQuCDQstC70LXQstC+JyxcclxuICAgIGhlbHBUeHQ2OiAnQSAtINCS0LrQu9GO0YfQuNGC0Ywg0LzRg9C30YvQutGDJyxcclxuICAgIGhlbHBUeHQ3OiAnUSAtINCS0YvQutC70Y7Rh9C40YLRjCDQvNGD0LfRi9C60YMnLFxyXG4gICAgaGVscFR4dDg6ICdFc2MgLSDQk9C70LDQstC90L7QtSDQvNC10L3RjicsXHJcbiAgfSxcclxuICBicjoge1xyXG4gICAgc2NvcmVUeHQ6ICfQktGL0L3RltC6OicsXHJcbiAgICBjb2luc1R4dDogJ9Cc0LDQvdC10YLRizonLFxyXG4gICAgbGl2ZXNUeHQ6ICfQltGL0YbRhtGPOicsXHJcbiAgICBiZXN0U2NvcmVUeHQ6ICfQm9C10L/RiNGLINCy0YvQvdGW0Lo6JyxcclxuICAgIHN0YXJ0R2FtZUJ0bjogJ9Cf0LDRh9Cw0YLRjCDRltCz0YDRgycsXHJcbiAgICBvcHRpb25zQnRuOiAn0J7Qv9GG0YvRlicsXHJcbiAgICBzZWxlY3RMbmc6ICfQktGL0LHQtdGA0YvRhtC1INC80L7QstGDOicsXHJcbiAgICBzZWxlY3RQbGF5ZXI6ICfQktGL0LHQtdGA0YvRhtC1INC/0LXRgNGB0LDQvdCw0LbQsDonLFxyXG4gICAgZ2FtZU92ZXI6ICfQktGLINC/0YDQsNC50LPRgNCw0LvRli4g0JrQu9GW0LrQvdGWINC60LDQsSDQv9GA0LDRhtGP0LPQvdGD0YbRjC4nLFxyXG4gICAgaGVscEJ0bjogJ9CU0LDQv9Cw0LzQvtCz0LAnLFxyXG4gICAgaGVscFR4dDE6ICfQktCw0YjQsCDQt9Cw0LTQsNGH0LAg0YHQsNCx0YDQsNGG0Ywg0YPRgdC1INC80LDQvdC10YLRiy4g0JTQu9GPINCz0Y3RgtCw0LPQsCDRniDQstCw0YEg0ZHRgdGG0Ywg0L/RjdGe0L3QsNC5INC60L7Qu9GM0LrQsNGB0YbRjCDQttGL0YbRhtGP0Z4uINCS0Ysg0LzQvtC20LDRhtC1INGB0LrQsNC60LDRhtGMLCDRltGB0YbRliDQvdCw0LvQtdCy0LAg0ZYg0L3QsNC/0YDQsNCy0LAg0Z4g0LzQtdC20LDRhSDRjdC60YDQsNC90LAuJyxcclxuICAgIGhlbHBUeHQyOiAn0JrQu9Cw0LLRltGI0Ysg0LrRltGA0LDQstCw0L3QvdGPOicsXHJcbiAgICBoZWxwVHh0MzogJ1csIFNwYWNlLCBeIC0g0J/RgNGL0LbQvtC6JyxcclxuICAgIGhlbHBUeHQ0OiAnTSwgPiAtIEnRgdGG0ZYg0L3QsNC70LXQstCwJyxcclxuICAgIGhlbHBUeHQ1OiAnTiwgPCAtIEnRgdGG0ZYg0L3QsNC/0YDQsNCy0LAnLFxyXG4gICAgaGVscFR4dDY6ICdBIC0g0KPQutC70Y7Rh9GL0YbRjCDQvNGD0LfRi9C60YMnLFxyXG4gICAgaGVscFR4dDc6ICdRIC0g0JLRi9C60LvRjtGH0YvRhtGMINC80YPQt9GL0LrRgycsXHJcbiAgICBoZWxwVHh0ODogJ0VzYyAtINCT0LDQu9C+0Z7QvdCw0LUg0LzQtdC90Y4nLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgeyBsYW5nIH07XHJcbiIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSAnLi9pbmRleC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYnN0YWNsZSB7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgdGhpcy54ID0gb3B0aW9ucy54O1xyXG4gICAgdGhpcy55ID0gb3B0aW9ucy55O1xyXG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xyXG4gICAgdGhpcy5nYW1lU3BlZWQgPSBvcHRpb25zLmdhbWVTcGVlZDtcclxuXHJcbiAgICB0aGlzLmR4ID0gLXRoaXMuZ2FtZVNwZWVkO1xyXG5cclxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1hZ2Uuc3JjID0gb3B0aW9ucy5pbWFnZVNyYztcclxuICB9XHJcblxyXG4gIFVwZGF0ZSgpIHtcclxuICAgIHRoaXMueCArPSB0aGlzLmR4O1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgIHRoaXMueCxcclxuICAgICAgY2FudmFzLmhlaWdodCAtIDU1LFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmltcG9ydCB7IGxhbmcgfSBmcm9tICcuLi9sYW5nJztcclxuaW1wb3J0IHsgc3RhcnQgfSBmcm9tICcuLi9zdGFydF9nYW1lJztcclxuXHJcbmNvbnN0IGRlYWQgPSB7XHJcbiAgc2hvdygpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbmltYXRlJywgJ2ZhbHNlJyk7XHJcbiAgICBjb25zdCBsZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKTtcclxuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZScpIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGFnZS5jbGFzc0xpc3QuYWRkKCd6aW5kZXgnKTtcclxuICAgIHBhZ2UuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJoZWxwLXR4dC13cmFwcGVyXCI+XHJcbtCS0Ysg0L/QvtGC0LXRgNGP0LvQuCDQttC40LfQvdGMLlxyXG48YnI+0JrQu9C40LrQvdC4INGH0YLQvtCx0Ysg0L/RgNC+0LTQvtC70LbQuNGC0YwuXHJcbiAgPC9kaXY+XHJcbiAgYDtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChwYWdlKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FuaW1hdGUnLCAndHJ1ZScpO1xyXG4gICAgICBzdGFydCgpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBoaWRlKCkge1xyXG4gICAgY29uc3QgcGFnZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZScpO1xyXG4gICAgcGFnZTEuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB7IGRlYWQgfTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmltcG9ydCB7IGxhbmcgfSBmcm9tICcuLi9sYW5nJztcclxuaW1wb3J0IHsgY2FudmFzIH0gZnJvbSAnLi4vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZU92ZXIoKSB7XHJcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjYW52YXMpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbmltYXRlJywgJ2ZhbHNlJyk7XHJcbiAgY29uc3QgbGcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyk7XHJcbiAgY29uc3QgcGFnZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS13cmFwcGVyJyk7XHJcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJykgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlJywgJ2dhbWUtb3Zlci1pbWFnZScpO1xyXG4gIHBhZ2UuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImdhbWUtb3ZlclwiPlxyXG4gICAgJHtsYW5nW2xnXS5nYW1lT3Zlcn1cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICBwYWdlV3JhcHBlci5hcHBlbmRDaGlsZChwYWdlKTtcclxuICBwYWdlV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9KTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuaW1wb3J0IHsgY2FudmFzIH0gZnJvbSAnLi4vaW5kZXgnO1xyXG5pbXBvcnQgeyBzdGFydCB9IGZyb20gJy4uL3N0YXJ0X2dhbWUnO1xyXG5pbXBvcnQgeyBsYW5nIH0gZnJvbSAnLi4vbGFuZyc7XHJcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWxwKCkge1xyXG4gIGNhbnZhcy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICBjb25zdCBsZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKTtcclxuICBjb25zdCBwYWdlV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLXdyYXBwZXInKTtcclxuICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2UnLCAncGFnZS1pbWFnZScpO1xyXG4gIHBhZ2UuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJoZWxwLXR4dC13cmFwcGVyXCI+XHJcbiAgJHtsYW5nW2xnXS5oZWxwVHh0MX1cclxuICA8cD4ke2xhbmdbbGddLmhlbHBUeHQyfTwvcD5cclxuICAke2xhbmdbbGddLmhlbHBUeHQzfVxyXG4gIDxicj4ke2xhbmdbbGddLmhlbHBUeHQ0fVxyXG4gIDxicj4ke2xhbmdbbGddLmhlbHBUeHQ1fVxyXG4gIDxicj4ke2xhbmdbbGddLmhlbHBUeHQ2fVxyXG4gIDxicj4ke2xhbmdbbGddLmhlbHBUeHQ3fVxyXG4gIDxicj4ke2xhbmdbbGddLmhlbHBUeHQ4fVxyXG4gIDwvZGl2PlxyXG4gIDxhIGNsYXNzPVwiYnRuZmxpcCBzdGFydC1oZWxwIHN0YXJ0XCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2Zyb250XCI+JHtsYW5nW2xnXS5zdGFydEdhbWVCdG59PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fY2VudGVyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPiR7bGFuZ1tsZ10uc3RhcnRHYW1lQnRufTwvc3Bhbj5cclxuICA8L2E+XHJcbiAgXHJcbiAgPGEgY2xhc3M9XCJidG5mbGlwIG9wdGlvbnMtaGVscCBvcHRpb25zXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2Zyb250XCI+JHtsYW5nW2xnXS5vcHRpb25zQnRufTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2NlbnRlclwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2JhY2tcIj4ke2xhbmdbbGddLm9wdGlvbnNCdG59PC9zcGFuPlxyXG4gIDwvYT5cclxuICBgO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XHJcbiAgICBwYWdlV3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxuICAgIHBhZ2VXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIHBhZ2VXcmFwcGVyLmFwcGVuZENoaWxkKHBhZ2UpO1xyXG4gIHBhZ2VXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0Jyk7XHJcbiAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xyXG5cclxuICBjb25zdCBvcHRpb25zQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbnMnKTtcclxuICBvcHRpb25zQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgb3B0aW9ucygpO1xyXG4gIH0pO1xyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5pbXBvcnQgeyBjYW52YXMgfSBmcm9tICcuLi9pbmRleCc7XHJcbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSAnLi4vc3RhcnRfZ2FtZSc7XHJcbmltcG9ydCBoZWxwIGZyb20gJy4vaGVscCc7XHJcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IGxhbmcgfSBmcm9tICcuLi9sYW5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgY2FudmFzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIGNvbnN0IGxnID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpO1xyXG4gIGNvbnN0IHBhZ2VXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2Utd3JhcHBlcicpO1xyXG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZScpIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZScpO1xyXG4gIHBhZ2UuaW5uZXJIVE1MID0gYFxyXG5cclxuICAgIDxpbWcgY2xhc3M9XCJwYWdlLWltYWdlXCIgc3JjPVwiLi9pbWcvZm9uLmpwZ1wiIGFsdD1cImJsYWRlLXJ1bm5lclwiIC8+XHJcbiAgICA8YSBjbGFzcz1cImJ0bmZsaXAgc3RhcnQtbWFpbiBzdGFydFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2Zyb250XCI+JHtsYW5nW2xnXS5zdGFydEdhbWVCdG59PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19jZW50ZXJcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2JhY2tcIj4ke2xhbmdbbGddLnN0YXJ0R2FtZUJ0bn08L3NwYW4+XHJcbiAgICA8L2E+XHJcblxyXG4gICAgPGEgY2xhc3M9XCJidG5mbGlwIG9wdGlvbnMtbWFpbiBvcHRpb25zXCIgaHJlZj1cIiNcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj4ke2xhbmdbbGddLm9wdGlvbnNCdG59PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19jZW50ZXJcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2JhY2tcIj4ke2xhbmdbbGddLm9wdGlvbnNCdG59PC9zcGFuPlxyXG4gICAgPC9hPlxyXG5cclxuICAgIDxhIGNsYXNzPVwiYnRuZmxpcCBoZWxwLW1haW4gaGVscFwiIGhyZWY9XCIjXCI+ICBcclxuICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj4ke2xhbmdbbGddLmhlbHBCdG59PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19jZW50ZXJcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2JhY2tcIj4ke2xhbmdbbGddLmhlbHBCdG59PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICAgXHJcbiAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXItYXV0aG9yc1wiPlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vU2VyZ1J1ZG92aWNoXCIgdGFyZ2V0PVwiYmxhbmtcIj5TZXJnZXkgUnVkb3ZpY2g8L2E+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlci1kaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jb25zZXJ2YXRpdjAwN1wiIHRhcmdldD1cImJsYW5rXCI+Y29uc2VydmF0aXYwMDc8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlclwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JzLnNjaG9vbC9qcy9cIiB0YXJnZXQ9XCJibGFua1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9ycy5zY2hvb2wvaW1hZ2VzL3JzX3NjaG9vbF9qcy5zdmdcIiBhbHQ9XCJSUyBTY2hvb2xcIiBzdHlsZT1cIndpZHRoOiA1MHB4XCI+PC9hPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZm9vdGVyX195ZWFyXCI+wqkgMjAyMTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDwvZm9vdGVyPlxyXG4gIGA7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcclxuICAgIHBhZ2VXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICBjYW52YXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICBzdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgcGFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQocGFnZSk7XHJcbiAgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcblxyXG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0Jyk7XHJcbiAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xyXG5cclxuICBjb25zdCBoZWxwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlbHAnKTtcclxuICBoZWxwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaGVscCgpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvcHRpb25zQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbnMnKTtcclxuICBvcHRpb25zQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgb3B0aW9ucygpO1xyXG4gIH0pO1xyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5pbXBvcnQgeyBjYW52YXMgfSBmcm9tICcuLi9pbmRleCc7XHJcbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSAnLi4vc3RhcnRfZ2FtZSc7XHJcbmltcG9ydCBoZWxwIGZyb20gJy4vaGVscCc7XHJcbmltcG9ydCB7IGxhbmcgfSBmcm9tICcuLi9sYW5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wdGlvbnMoKSB7XHJcbiAgY2FudmFzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIGNvbnN0IGxnID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpO1xyXG4gIGNvbnN0IHBhZ2VXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2Utd3JhcHBlcicpO1xyXG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZScpIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZScsICdwYWdlLWltYWdlJyk7XHJcbiAgcGFnZS5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImhlbHAtdHh0LXdyYXBwZXJcIj5cclxuICA8cCBjbGFzcz1cIm1lbnVJdGVtXCIgaWQ9J21lbnVGaWVsZFNpemUnPlxyXG4gIDxsYWJlbD4ke2xhbmdbbGddLnNlbGVjdExuZ308L2xhYmVsPlxyXG4gIDxzZWxlY3QgaWQ9XCJzZWxlY3RMYW5nXCI+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJlblwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIj5lbmdsaXNoPC9vcHRpb24+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJydVwiPtGA0YPRgdGB0LrQuNC5PC9vcHRpb24+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJiclwiPtCx0LXQu9Cw0YDRg9GB0LrQsNGPPC9vcHRpb24+XHJcbiAgPC9zZWxlY3Q+XHJcbiAgPC9wPlxyXG4gIDxicj48cD4ke2xhbmdbbGddLnNlbGVjdFBsYXllcn08L3A+XHJcbiAgPGJyPlxyXG4gIDxpbWcgc3JjPVwiaW1nL3Nwcml0ZTJfaWNvbi5wbmdcIiBjbGFzcz1cInBsYXllcjJcIiBhbHQ9XCJwbGF5ZXIyXCI+XHJcbiAgPGltZyBzcmM9XCJpbWcvc3ByaXRlMV9pY29uLnBuZ1wiIGNsYXNzPVwicGxheWVyMVwiIGFsdD1cInBsYXllcjFcIj5cclxuICA8L2Rpdj5cclxuICA8YSBjbGFzcz1cImJ0bmZsaXAgc3RhcnQtaGVscCBzdGFydFwiIGhyZWY9XCIjXCI+XHJcbiAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj4ke2xhbmdbbGddLnN0YXJ0R2FtZUJ0bn08L3NwYW4+XHJcbiAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fY2VudGVyXCI+PC9zcGFuPlxyXG4gIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2JhY2tcIj4ke2xhbmdbbGddLnN0YXJ0R2FtZUJ0bn08L3NwYW4+XHJcbjwvYT5cclxuXHJcbjxhIGNsYXNzPVwiYnRuZmxpcCBvcHRpb25zLWhlbHAgaGVscFwiIGhyZWY9XCIjXCI+XHJcbiAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj4ke2xhbmdbbGddLmhlbHBCdG59PC9zcGFuPlxyXG4gIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2NlbnRlclwiPjwvc3Bhbj5cclxuICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19iYWNrXCI+JHtsYW5nW2xnXS5oZWxwQnRufTwvc3Bhbj5cclxuPC9hPlxyXG4gIGA7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdExhbmcgPiBvcHRpb25bc2VsZWN0ZWRdJykucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZWxlY3RMYW5nID4gb3B0aW9uW3ZhbHVlPSR7bGd9XWApLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xyXG4gICAgcGFnZVdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBwYWdlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIGNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIHN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICAvLyDQstGL0LHQvtGAINGP0LfRi9C60LBcclxuICBwYWdlV3JhcHBlci5hcHBlbmRDaGlsZChwYWdlKTtcclxuICBwYWdlV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpO1xyXG4gIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKTtcclxuXHJcbiAgY29uc3QgaGVscEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWxwJyk7XHJcbiAgaGVscEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGhlbHAoKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0TGFuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3RMYW5nJyk7XHJcbiAgc2VsZWN0TGFuZy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFuZ1NlbGVjdGVkJywgc2VsZWN0TGFuZy52YWx1ZSk7XHJcbiAgICBvcHRpb25zKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vINCy0YvQsdC+0YAg0LjQs9GA0L7QutCwXHJcbiAgY29uc3QgcGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIxJyk7XHJcbiAgY29uc3QgcGxheWVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIyJyk7XHJcbiAgY29uc3QgcGxheWVyU2VsZWN0ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU3ByaXRlSW1hZ2UnKTtcclxuICBpZiAocGxheWVyU2VsZWN0ZWQgPT09ICdpbWFnZXMvc3ByaXRlMi5wbmcnKSB7XHJcbiAgICBwbGF5ZXIyLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1pY29uLXNlbGVjdGVkJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBsYXllcjEuY2xhc3NMaXN0LmFkZCgncGxheWVyLWljb24tc2VsZWN0ZWQnKTtcclxuICB9XHJcbiAgcGxheWVyMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdTcHJpdGVJbWFnZScsICdpbWFnZXMvc3ByaXRlMS5wbmcnKTtcclxuICAgIHBsYXllcjEuY2xhc3NMaXN0LmFkZCgncGxheWVyLWljb24tc2VsZWN0ZWQnKTtcclxuICAgIHBsYXllcjIuY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyLWljb24tc2VsZWN0ZWQnKTtcclxuICAgIG9wdGlvbnMoKTtcclxuICB9KTtcclxuICBwbGF5ZXIyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Nwcml0ZUltYWdlJywgJ2ltYWdlcy9zcHJpdGUyLnBuZycpO1xyXG4gICAgcGxheWVyMi5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItaWNvbi1zZWxlY3RlZCcpO1xyXG4gICAgcGxheWVyMS5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5ZXItaWNvbi1zZWxlY3RlZCcpO1xyXG4gICAgb3B0aW9ucygpO1xyXG4gIH0pO1xyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyU291bmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gdGhpcy51cmwgPSB3aW5kb3cuZ2FtZVN0YXRlLnNvdW5kVXJsO1xyXG4gICAgdGhpcy5zb3VuZFVwID0gbmV3IEF1ZGlvKCdzb3VuZC9qdW1wVXAubXAzJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc291bmRVcCk7XHJcbiAgICB0aGlzLnNvdW5kRG93biA9IG5ldyBBdWRpbygnc291bmQvZ3Jhdml0eURvd24ubXAzJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc291bmREb3duKTtcclxuICAgIHRoaXMuaXNHcmF2aXR5RG93biA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0p1bXBVcCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAganVtcFVwKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzSnVtcFVwKSB7XHJcbiAgICAgIHRoaXMuc291bmRVcC5wbGF5KCk7XHJcbiAgICAgIHRoaXMuaXNKdW1wVXAgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAganVtcERvd24oKSB7XHJcbiAgICB0aGlzLnNvdW5kVXAucGF1c2UoKTtcclxuICAgIHRoaXMuc291bmRVcC5jdXJyZW50VGltZSA9IDAuMDtcclxuICAgIHRoaXMuaXNKdW1wVXAgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGdyYXZpdHlEb3duKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzR3Jhdml0eURvd24pIHtcclxuICAgICAgdGhpcy5zb3VuZERvd24ucGxheSgpO1xyXG4gICAgICB0aGlzLmlzR3Jhdml0eURvd24gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ3Jhdml0eVVwKCkge1xyXG4gICAgdGhpcy5zb3VuZERvd24ucGF1c2UoKTtcclxuICAgIHRoaXMuc291bmREb3duLmN1cnJlbnRUaW1lID0gMC4wO1xyXG4gICAgdGhpcy5pc0dyYXZpdHlEb3duID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lJyk7XHJcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuY29uc3QgcGFydGljbGVzT25TY3JlZW4gPSAyNDU7XHJcbmxldCB3O1xyXG5sZXQgaDtcclxuY29uc3QgcGFydGljbGVzQXJyYXkgPSBbXTtcclxuXHJcbmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG53ID0gd2luZG93LmlubmVyV2lkdGg7XHJcbmggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG5mdW5jdGlvbiByYW5kb20obWluLCBtYXgpIHtcclxuICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xpZW50UmVzaXplKGV2KSB7XHJcbiAgdyA9IGNhbnZhcy53aWR0aDtcclxuICBoID0gY2FudmFzLmhlaWdodDtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNsaWVudFJlc2l6ZSk7XHJcblxyXG4vLyBjcmVhdGVTbm93Rmxha2VzKCk7XHJcbmZ1bmN0aW9uIGNyZWF0ZVNub3dGbGFrZXMoKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZXNPblNjcmVlbjsgaSsrKSB7XHJcbiAgICBwYXJ0aWNsZXNBcnJheS5wdXNoKHtcclxuICAgICAgeDogTWF0aC5yYW5kb20oKSAqIHcsXHJcbiAgICAgIHk6IE1hdGgucmFuZG9tKCkgKiBoLFxyXG4gICAgICBvcGFjaXR5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICBzcGVlZFg6IHJhbmRvbSgtMSwgMSksXHJcbiAgICAgIHNwZWVkWTogcmFuZG9tKDEsIDIpLFxyXG4gICAgICByYWRpdXM6IHJhbmRvbSgwLjUsIDQuMiksXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXdTbm93Rmxha2VzKCkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydGljbGVzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGdyYWRpZW50ID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KFxyXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS54LFxyXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS55LFxyXG4gICAgICAwLFxyXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS54LFxyXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS55LFxyXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS5yYWRpdXMsXHJcbiAgICApO1xyXG5cclxuICAgIC8vIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBgcmdiYSgzMCwgMTQ0LCAyNTUsICR7cGFydGljbGVzQXJyYXlbaV0ub3BhY2l0eX0pYCApO1xyXG4gICAgLy8gZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuOCwgYHJnYmEoMTAwLCAxNDksIDIzNywgJHtwYXJ0aWNsZXNBcnJheVtpXS5vcGFjaXR5fSlgICk7XHJcbiAgICAvLyBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoNjUsIDEwNSwgMjI1LCAke3BhcnRpY2xlc0FycmF5W2ldLm9wYWNpdHl9KWAgKTtcclxuXHJcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMjU1LCAyNTUsIDI1NSwke3BhcnRpY2xlc0FycmF5W2ldLm9wYWNpdHl9KWApOyAvLyB3aGl0ZVxyXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuOCwgYHJnYmEoMjEwLCAyMzYsIDI0Miwke3BhcnRpY2xlc0FycmF5W2ldLm9wYWNpdHl9KWApOyAvLyBibHVpc2hcclxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBgcmdiYSgyMzcsIDI0NywgMjQ5LCR7cGFydGljbGVzQXJyYXlbaV0ub3BhY2l0eX0pYCk7XHJcblxyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmFyYyhcclxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueCxcclxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueSxcclxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ucmFkaXVzLFxyXG4gICAgICAwLFxyXG4gICAgICBNYXRoLlBJICogMixcclxuICAgICAgZmFsc2UsXHJcbiAgICApO1xyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuICAgIGN0eC5maWxsKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb3ZlU25vd0ZsYWtlcygpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRpY2xlc0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBwYXJ0aWNsZXNBcnJheVtpXS54ICs9IHBhcnRpY2xlc0FycmF5W2ldLnNwZWVkWDtcclxuICAgIHBhcnRpY2xlc0FycmF5W2ldLnkgKz0gcGFydGljbGVzQXJyYXlbaV0uc3BlZWRZO1xyXG5cclxuICAgIGlmIChwYXJ0aWNsZXNBcnJheVtpXS55ID4gaCkge1xyXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS54ID0gTWF0aC5yYW5kb20oKSAqIHcgKiAxLjU7XHJcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLnkgPSAtNTA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVTbm93RmFsbCgpIHtcclxuICBjdHguY2xlYXJSZWN0KDAsIDAsIHcsIGgpO1xyXG4gIGRyYXdTbm93Rmxha2VzKCk7XHJcbiAgbW92ZVNub3dGbGFrZXMoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlU25vd0ZsYWtlcywgdXBkYXRlU25vd0ZhbGwgfTtcclxuIiwiaW1wb3J0IE9ic3RhY2xlIGZyb20gJy4vb2JzdGFjbGUnO1xyXG5pbXBvcnQgeyBjYW52YXMgfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IHsgZ2FtZVNwZWVkLCBvYnN0YWNsZXMgfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xyXG5cclxuZnVuY3Rpb24gU3Bhd25PYnN0YWNsZSgpIHtcclxuICAvLyBsZXQgc2l6ZSA9IFJhbmRvbUludFJhbmdlKDIwLCA3MCk7XHJcbiAgY29uc3QgdHlwZSA9IFJhbmRvbUludFJhbmdlKDMsIDQpO1xyXG5cclxuICBjb25zdCBvYnN0YWNsZSA9IG5ldyBPYnN0YWNsZSh7XHJcbiAgICB4OiBjYW52YXMud2lkdGgsXHJcbiAgICB5OiBjYW52YXMuaGVpZ2h0LFxyXG4gICAgd2lkdGg6IDUwLFxyXG4gICAgaGVpZ2h0OiA1MCxcclxuICAgIGdhbWVTcGVlZCxcclxuICAgIGltYWdlU3JjOiBgaW1hZ2VzL29ic3RhY2xlJHt0eXBlfS5wbmdgLFxyXG4gIH0pO1xyXG5cclxuICBvYnN0YWNsZXMucHVzaChvYnN0YWNsZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJhbmRvbUludFJhbmdlKG1pbiwgbWF4KSB7XHJcbiAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcclxufVxyXG5cclxuZXhwb3J0IHsgU3Bhd25PYnN0YWNsZSB9O1xyXG4iLCJpbXBvcnQgSGVybyBmcm9tICcuL2hlcm8nO1xyXG5pbXBvcnQgVGV4dCBmcm9tICcuL3RleHQnO1xyXG5pbXBvcnQgeyBTcGF3bk9ic3RhY2xlIH0gZnJvbSAnLi9zcGF3bl9vYnN0YWNsZSc7XHJcbmltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCB7IGNyZWF0ZVNub3dGbGFrZXMsIHVwZGF0ZVNub3dGYWxsIH0gZnJvbSAnLi9zbm93X2ZsYWtlcyc7XHJcbmltcG9ydCBHYW1lU291bmQgZnJvbSAnLi9nYW1lLXNvdW5kJztcclxuaW1wb3J0IHsgZ2V0Q29pbiwgY29pbnNDb3VudGVyIH0gZnJvbSAnLi9nZXRfY29pbic7XHJcbmltcG9ydCBnZXRDbG91ZHMgZnJvbSAnLi9nZXRfY2xvdWRzJztcclxuaW1wb3J0IHsgbGFuZyB9IGZyb20gJy4vbGFuZyc7XHJcbmltcG9ydCBnZXRQbGF0Zm9ybSBmcm9tICcuL2dldF9wbGF0Zm9ybSc7XHJcbmltcG9ydCBtYWluIGZyb20gJy4vcGFnZXMvbWFpbic7XHJcbmltcG9ydCB7IGRlYWQgfSBmcm9tICcuL3BhZ2VzL2RlYWQnO1xyXG5pbXBvcnQgZ2FtZU92ZXIgZnJvbSAnLi9wYWdlcy9nYW1lLW92ZXInO1xyXG5cclxuaW1wb3J0IHsgaW5mb3JtRm9yRGVza3RvcCB9IGZyb20gXCIuL2Z1bmN0aW9ucy9mdW5jdGlvbnMuanNcIjtcclxuXHJcbi8vIGxldCdzIG1ha2UgdGhlIGdhbWUgbWF4IHdpZHRoXHJcblxyXG5sZXQgc2NvcmU7XHJcbmxldCBoaWdoU2NvcmU7XHJcblxyXG5sZXQgaGlnaENvaW5zO1xyXG5sZXQgaGlnaHRDb2luc1RleHQ7XHJcblxyXG5sZXQgc2NvcmVUZXh0O1xyXG5sZXQgaGlnaHRTY29yZVRleHQ7XHJcblxyXG5sZXQgbGl2ZXNUZXh0O1xyXG5sZXQgZ2FtZVNwZWVkO1xyXG5sZXQgcGxheWVyO1xyXG5sZXQgb2JzdGFjbGVzID0gW107XHJcbmNvbnN0IGNvaW5zID0gW107XHJcblxyXG5jb25zdCBrZXlzID0ge307XHJcbmxldCBjb2luSW1hZ2U7XHJcbmNvbnN0IHBsYXlTb3VuZCA9IG5ldyBHYW1lU291bmQoKTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc3RhcnQoKSB7XHJcblxyXG4gIGxldCB3aXRoT2ZHYW1lID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuXHJcbiAgY2FudmFzLndpZHRoID0gd2l0aE9mR2FtZTtcclxuICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gMjA1O1xyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgIGtleXNbZS5jb2RlXSA9IHRydWU7XHJcbiAgfSk7XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcclxuICAgIGtleXNbZS5jb2RlXSA9IGZhbHNlO1xyXG4gIH0pO1xyXG5cclxuICBjdHguZm9udCA9ICcyMHB4IHNhbnMtc2VyaWYnO1xyXG5cclxuICBnYW1lU3BlZWQgPSAzO1xyXG4gIC8vIGxpdmVzID0gMztcclxuICBzY29yZSA9IDA7XHJcbiAgaGlnaFNjb3JlID0gMDtcclxuICBoaWdoQ29pbnMgPSAwO1xyXG5cclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hzY29yZScpKSB7XHJcbiAgICBoaWdoU2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaHNjb3JlJyk7XHJcbiAgfVxyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaENvaW5zJykpIHtcclxuICAgIGhpZ2hDb2lucyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaWdoQ29pbnMnKTtcclxuICB9XHJcblxyXG4gIGNvaW5JbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGNvaW5JbWFnZS5zcmMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU3ByaXRlSW1hZ2UnKTtcclxuXHJcbiAgcGxheWVyID0gbmV3IEhlcm8oe1xyXG4gICAgaW1hZ2U6IGNvaW5JbWFnZSxcclxuICAgIHdpZHRoOiA2MDAsXHJcbiAgICBoZWlnaHQ6IDEwMCxcclxuICAgIG51bWJlck9mRnJhbWVzOiA2LFxyXG4gICAgdGlja3NQZXJGcmFtZTogNCxcclxuICAgIHg6IDUwLFxyXG4gICAgeTogNTAsXHJcbiAgICB0ZXN0OiBjYW52YXMuaGVpZ2h0LFxyXG4gIH0pO1xyXG5cclxuICBwbGF5ZXIuc3RhcnQoKTtcclxuXHJcbiAgc2NvcmVUZXh0ID0gbmV3IFRleHQoXHJcbiAgICBgJHtsYW5nW2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKV0uc2NvcmVUeHR9ICR7c2NvcmV9YCwgaW5mb3JtRm9yRGVza3RvcC5zY29yZUxlZnQsIGluZm9ybUZvckRlc2t0b3Auc2NvcmVUb3AsICdsZWZ0JywgJyMyMTIxMjEnLCAnMjAnLFxyXG4gICk7XHJcbiAgbGl2ZXNUZXh0ID0gbmV3IFRleHQoXHJcbiAgICBgJHtsYW5nW2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKV0ubGl2ZXNUeHR9ICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpdmVzJyl9YCwgaW5mb3JtRm9yRGVza3RvcC5saXZlc1RleHRMZWZ0LCBpbmZvcm1Gb3JEZXNrdG9wLmxpdmVzVGV4dFRvcCwgJ2xlZnQnLCAnIzIxMjEyMScsICcyMCcsXHJcbiAgKTtcclxuICBoaWdodFNjb3JlVGV4dCA9IG5ldyBUZXh0KFxyXG4gICAgYCR7bGFuZ1tsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyldLmJlc3RTY29yZVR4dH0gJHtoaWdoU2NvcmV9YCwgaW5mb3JtRm9yRGVza3RvcC5oaWdodFNjb3JlVGV4dExlZnQsIGluZm9ybUZvckRlc2t0b3AuaGlnaHRTY29yZVRleHRUb3AsICdsZWZ0JywgJyMyMTIxMjEnLCAnMjAnLFxyXG4gICk7XHJcbiAgaGlnaHRDb2luc1RleHQgPSBuZXcgVGV4dChcclxuICAgIGAke2xhbmdbbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpXS5iZXN0Q29pbnNUeHR9ICR7aGlnaENvaW5zfWAsIGluZm9ybUZvckRlc2t0b3AuaGlnaHRDb2luc1RleHRMZWZ0LCBpbmZvcm1Gb3JEZXNrdG9wLmhpZ2h0Q29pbnNUZXh0VG9wLCAnbGVmdCcsICcjMjEyMTIxJywgJzIwJyxcclxuICApO1xyXG5cclxuICBjcmVhdGVTbm93Rmxha2VzKCk7XHJcbiAgLy8gcGxheVNvdW5kLnBsYXlGb24oKTtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoVXBkYXRlKTtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFNwYXduVGltZXIgPSAyMDA7XHJcbmxldCBzcGF3blRpbWVyID0gaW5pdGlhbFNwYXduVGltZXI7XHJcblxyXG5mdW5jdGlvbiBVcGRhdGUoKSB7XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbmltYXRlJykgPT09ICd0cnVlJykgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKFVwZGF0ZSk7XHJcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAvLyDQstGL0LrQu9GO0YfQuNGC0Ywg0YTQvtC90L7QstGD0Y4g0LzRg9C30YvQutGDXHJcbiAgaWYgKGtleXMuS2V5USkge1xyXG4gICAgcGxheVNvdW5kLnN0b3BGb24oKTtcclxuICB9XHJcblxyXG4gIC8vINCy0LrQu9GO0YfQuNGC0Ywg0YTQvtC90L7QstGD0Y4g0LzRg9C30YvQutGDXHJcbiAgaWYgKGtleXMuS2V5QSkge1xyXG4gICAgcGxheVNvdW5kLnBsYXlGb24oKTtcclxuICB9XHJcblxyXG4gIC8vIHNwYXduIG9ic3RhY2xlc1xyXG4gIHNwYXduVGltZXIgLT0gMTtcclxuICBpZiAoc3Bhd25UaW1lciA8PSAwKSB7XHJcbiAgICBTcGF3bk9ic3RhY2xlKCk7XHJcbiAgICBzcGF3blRpbWVyID0gaW5pdGlhbFNwYXduVGltZXIgLSBnYW1lU3BlZWQgKiA4O1xyXG5cclxuICAgIGlmIChzcGF3blRpbWVyIDwgNjApIHtcclxuICAgICAgc3Bhd25UaW1lciA9IDYwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlU25vd0ZhbGwoKTtcclxuXHJcbiAgLy8gc3Bhd24gZW5lbWllc1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb2JzdGFjbGVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBvID0gb2JzdGFjbGVzW2ldO1xyXG5cclxuICAgIGlmIChvLnggKyBvLndpZHRoIDwgMCkge1xyXG4gICAgICBvYnN0YWNsZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINC/0LXRgNC10LfQsNCz0YDRg9C30LrQsCDQuNCz0YDRiyDQv9GA0Lgg0YHRgtC+0LvQutC90L7QstC10L3QuNC4XHJcbiAgICBpZiAoXHJcbiAgICAgIHBsYXllci5keCA8IG8ueCArIG8ud2lkdGhcclxuICAgICAgJiYgcGxheWVyLmR4ICsgKHBsYXllci53aWR0aCAvIDEwKSAtIDEwID4gby54XHJcbiAgICAgICYmIHBsYXllci55IDwgby55ICsgby5oZWlnaHRcclxuICAgICAgJiYgcGxheWVyLnkgKyBwbGF5ZXIuaGVpZ2h0ID49IG8ueVxyXG4gICAgKSB7XHJcbiAgICAgIHBsYXlTb3VuZC5wbGF5RGVhZCgpO1xyXG4gICAgICBvYnN0YWNsZXMgPSBbXTtcclxuICAgICAgZ2FtZVNwZWVkID0gMztcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpdmVzJywgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpdmVzJykgLSAxKTtcclxuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXZlcycpID09IDApIHtcclxuICAgICAgICBnYW1lT3ZlcigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGRlYWQuc2hvdygpO1xyXG4gICAgICB9XHJcbiAgICAgIGxpdmVzVGV4dC50ID0gYCR7bGFuZ1tsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyldLmxpdmVzVHh0fSAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXZlcycpfWA7XHJcbiAgICAgIHNjb3JlID0gMDtcclxuICAgICAgcGxheWVyLmR4ID0gMDtcclxuICAgICAgcGxheWVyLnkgPSAwO1xyXG4gICAgICBjb2luc0NvdW50ZXIuY291bnRlciA9IDA7XHJcbiAgICAgIHNwYXduVGltZXIgPSBpbml0aWFsU3Bhd25UaW1lcjtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaWdoc2NvcmUnLCBoaWdoU2NvcmUpO1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZ2hDb2lucycsIGhpZ2hDb2lucyk7XHJcbiAgICB9XHJcbiAgICBvLlVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc2NvcmUgKz0gMTtcclxuICBzY29yZVRleHQudCA9IGAke2xhbmdbbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpXS5zY29yZVR4dH0gJHtzY29yZX1gO1xyXG5cclxuICBzY29yZVRleHQuRHJhdygpO1xyXG5cclxuICBpZiAoc2NvcmUgPiBoaWdoU2NvcmUpIHtcclxuICAgIGhpZ2hTY29yZSA9IHNjb3JlO1xyXG4gICAgaGlnaHRTY29yZVRleHQudCA9IGAke2xhbmdbbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpXS5iZXN0U2NvcmVUeHR9ICR7aGlnaFNjb3JlfWA7XHJcbiAgfVxyXG5cclxuICBpZiAoY29pbnNDb3VudGVyLmNvdW50ZXIgPiBoaWdoQ29pbnMpIHtcclxuICAgIGhpZ2hDb2lucyA9IGNvaW5zQ291bnRlci5jb3VudGVyO1xyXG4gICAgaGlnaHRDb2luc1RleHQudCA9IGAke2xhbmdbbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpXS5iZXN0Q29pbnNUeHR9ICR7aGlnaENvaW5zfWA7XHJcbiAgfVxyXG5cclxuICBnYW1lU3BlZWQgKz0gMC4wMDM7XHJcbiAgaGlnaHRTY29yZVRleHQuRHJhdygpO1xyXG4gIGhpZ2h0Q29pbnNUZXh0LkRyYXcoKTtcclxuICBsaXZlc1RleHQuRHJhdygpO1xyXG5cclxuICAvLyBzcGF3biBwbGF0Zm9ybVxyXG4gIGdldFBsYXRmb3JtKCk7XHJcblxyXG4gIC8vIHNwYXduIGNvaW5cclxuICBnZXRDb2luKCk7XHJcblxyXG4gIC8vIHNwYXduIGNsb3Vkc1xyXG4gIGdldENsb3VkcygpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIHN0YXJ0LCBVcGRhdGUsIGdhbWVTcGVlZCwgb2JzdGFjbGVzLCBrZXlzLCBzY29yZSwgcGxheWVyLCBjb2lucyxcclxufTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmltcG9ydCB7IGN0eCB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCB7XHJcbiAgY29uc3RydWN0b3IodCwgeCwgeSwgYSwgYywgcykge1xyXG4gICAgdGhpcy50ID0gdDtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5hID0gYTtcclxuICAgIHRoaXMuYyA9IGM7XHJcbiAgICB0aGlzLnMgPSBzO1xyXG4gIH1cclxuXHJcbiAgRHJhdygpIHtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmM7XHJcbiAgICBjdHguZm9udCA9IGAke3RoaXMuc31weCBzYW5zLXNlcmlmYDtcclxuICAgIGN0eC50ZXh0QWxpZ24gPSB0aGlzLmE7XHJcbiAgICBjdHguZmlsbFRleHQodGhpcy50LCB0aGlzLngsIHRoaXMueSk7XHJcbiAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOlsiY2FudmFzIiwiY3R4IiwiUGxhdGZvcm0iLCJvcHRpb25zIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImZsaWdodEFsdGl0dWRlIiwiZ2FtZVNwZWVkIiwiZHgiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiaW1hZ2VTcmMiLCJyZW5kZXIiLCJkcmF3SW1hZ2UiLCJDbG91ZCIsInN4Iiwic3kiLCJzV2lkdGgiLCJzSGVpZ2h0IiwiZHkiLCJkV2lkdGgiLCJkSGVpZ2h0IiwiQ29pbiIsImNvbnNvbGUiLCJsb2ciLCJ0aWNrc1BlckZyYW1lIiwibnVtYmVyT2ZGcmFtZXMiLCJmcmFtZUluZGV4IiwidGlja0NvdW50IiwiYXVkaW9PYmoiLCJBdWRpbyIsInBsYXkiLCJ1cGRhdGUiLCJpbmZvcm1Gb3JEZXNrdG9wIiwiaGlnaHRTY29yZVRleHRUb3AiLCJoaWdodFNjb3JlVGV4dExlZnQiLCJzY29yZVRvcCIsInNjb3JlTGVmdCIsImhpZ2h0Q29pbnNUZXh0VG9wIiwiaGlnaHRDb2luc1RleHRMZWZ0IiwiYWN0dWFsQ29pbnNUZXh0VG9wIiwiYWN0dWFsQ29pbnNUZXh0TGVmdCIsImxpdmVzVGV4dFRvcCIsImxpdmVzVGV4dExlZnQiLCJHYW1lU291bmQiLCJmb25Tb3VuZCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwidm9sdW1lIiwiZGVhZFNvdW5kIiwibG9vcCIsInBhdXNlIiwic2NvcmUiLCJnZXRSYW5kb21JbnQiLCJjbG91ZHNTZXQiLCJjbG91ZCIsImNsb3VkcyIsInJhbmRvbSIsImdldENsb3VkcyIsInB1c2giLCJtYXAiLCJwbGF5ZXIiLCJUZXh0IiwibGFuZyIsImNvaW4iLCJjb2lucyIsImNvaW5zVGV4dCIsImNvaW5zQ291bnRlciIsImNvdW50ZXIiLCJjb2luWSIsInJhbmRUaW1lIiwicmFuZFkiLCJnZXRDb2luIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvaW5zVHh0IiwiRHJhdyIsImxlbmd0aCIsImZvckVhY2giLCJzdGFydCIsInBsYXlDb2luU291bmQiLCJwbGF0Zm9ybSIsInBsYXRmb3JtUmFuZFRpbWUiLCJwbGF0Zm9ybXMiLCJwbGF0Zm9ybXNPcHRpb25zIiwiZ2V0UGxhdGZvcm0iLCJ0eXBlIiwiZmxhZyIsInRlc3QiLCJtaW4iLCJtYXgiLCJNYXRoIiwiY2VpbCIsImZsb29yIiwia2V5cyIsIlBsYXllclNvdW5kIiwiZGVhZCIsIkhlcm8iLCJqdW1wRm9yY2UiLCJncm91bmRlZCIsImp1bXBUaW1lciIsImdyYXZpdHkiLCJpc0xlZnQiLCJzb3VuZCIsIlNwYWNlIiwiS2V5VyIsIkFycm93VXAiLCJqdW1wVXAiLCJKdW1wIiwiS2V5TSIsIkFycm93UmlnaHQiLCJLZXlOIiwiQXJyb3dMZWZ0IiwiRXNjYXBlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJqdW1wRG93biIsImdyYXZpdHlHbyIsImdldFJlYWR5VG9KdW1wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib25sb2FkIiwibWFpbiIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb250ZXh0Iiwic2V0SXRlbSIsImVuIiwic2NvcmVUeHQiLCJiZXN0Q29pbnNUeHQiLCJsaXZlc1R4dCIsImJlc3RTY29yZVR4dCIsInN0YXJ0R2FtZUJ0biIsIm9wdGlvbnNCdG4iLCJzZWxlY3RMbmciLCJzZWxlY3RQbGF5ZXIiLCJnYW1lT3ZlciIsImhlbHBCdG4iLCJoZWxwVHh0MSIsImhlbHBUeHQyIiwiaGVscFR4dDMiLCJoZWxwVHh0NCIsImhlbHBUeHQ1IiwiaGVscFR4dDYiLCJoZWxwVHh0NyIsImhlbHBUeHQ4IiwicnUiLCJiciIsIk9ic3RhY2xlIiwic2hvdyIsImxnIiwicGFnZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2hpbGQiLCJoaWRlIiwicGFnZTEiLCJwYWdlV3JhcHBlciIsInJlbW92ZSIsImhlbHAiLCJzdGFydEdhbWUiLCJzdGFydEJ0biIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInNlbGVjdExhbmciLCJ2YWx1ZSIsInBsYXllcjEiLCJwbGF5ZXIyIiwicGxheWVyU2VsZWN0ZWQiLCJzb3VuZFVwIiwic291bmREb3duIiwiaXNHcmF2aXR5RG93biIsImlzSnVtcFVwIiwiY3VycmVudFRpbWUiLCJwYXJ0aWNsZXNPblNjcmVlbiIsInciLCJoIiwicGFydGljbGVzQXJyYXkiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJjbGllbnRSZXNpemUiLCJldiIsImNyZWF0ZVNub3dGbGFrZXMiLCJpIiwib3BhY2l0eSIsInNwZWVkWCIsInNwZWVkWSIsInJhZGl1cyIsImRyYXdTbm93Rmxha2VzIiwiZ3JhZGllbnQiLCJjcmVhdGVSYWRpYWxHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwiZmlsbFN0eWxlIiwiZmlsbCIsIm1vdmVTbm93Rmxha2VzIiwidXBkYXRlU25vd0ZhbGwiLCJjbGVhclJlY3QiLCJvYnN0YWNsZXMiLCJTcGF3bk9ic3RhY2xlIiwiUmFuZG9tSW50UmFuZ2UiLCJvYnN0YWNsZSIsInJvdW5kIiwiaGlnaFNjb3JlIiwiaGlnaENvaW5zIiwiaGlnaHRDb2luc1RleHQiLCJzY29yZVRleHQiLCJoaWdodFNjb3JlVGV4dCIsImxpdmVzVGV4dCIsImNvaW5JbWFnZSIsInBsYXlTb3VuZCIsIndpdGhPZkdhbWUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlIiwiY29kZSIsImZvbnQiLCJVcGRhdGUiLCJpbml0aWFsU3Bhd25UaW1lciIsInNwYXduVGltZXIiLCJLZXlRIiwic3RvcEZvbiIsIktleUEiLCJwbGF5Rm9uIiwibyIsInNwbGljZSIsInBsYXlEZWFkIiwidCIsImEiLCJjIiwicyIsInRleHRBbGlnbiIsImZpbGxUZXh0IiwiY2xvc2VQYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==