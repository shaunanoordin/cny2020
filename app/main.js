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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cny2020/cny2020.js":
/*!********************************!*\
  !*** ./src/cny2020/cny2020.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/cny2020/constants.js\");\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid */ \"./src/cny2020/grid.js\");\n/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tile */ \"./src/cny2020/tile.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar CNY2020 =\n/*#__PURE__*/\nfunction () {\n  function CNY2020() {\n    _classCallCheck(this, CNY2020);\n\n    this.html = {\n      app: document.getElementById('app'),\n      canvas: document.getElementById('canvas'),\n      console: document.getElementById('console')\n    };\n    this.canvas2d = this.html.canvas.getContext('2d');\n    this.canvasWidth = _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] * _constants__WEBPACK_IMPORTED_MODULE_0__[\"GRID_WIDTH\"];\n    this.canvasHeight = _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] * _constants__WEBPACK_IMPORTED_MODULE_0__[\"GRID_HEIGHT\"];\n    this.messages = [];\n    this.html.canvas.width = this.canvasWidth;\n    this.html.canvas.height = this.canvasHeight;\n    this.html.canvas.addEventListener('pointerdown', this.onPointerDown.bind(this));\n    this.tileMovingCounter = 0;\n    this.tileMovingDuration = 100;\n    this.isTileMoving = false;\n    this.grid = new _grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.loadLevel();\n    this.prevTime = null;\n    this.nextFrame = window.requestAnimationFrame(this.main.bind(this));\n  }\n\n  _createClass(CNY2020, [{\n    key: \"main\",\n    value: function main(time) {\n      var timeStep = this.prevTime ? time - this.prevTime : time;\n      this.prevTime = time;\n      this.play(timeStep);\n      this.paint();\n      this.nextFrame = window.requestAnimationFrame(this.main.bind(this));\n    }\n  }, {\n    key: \"loadLevel\",\n    value: function loadLevel() {\n      this.clearMovingTile();\n      this.grid = new _grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        width: 3,\n        height: 3,\n        tiles: [[new _tile__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n          north: true,\n          south: true\n        }), new _tile__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n          north: true,\n          west: true\n        }), new _tile__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n          west: true,\n          east: true\n        })], [new _tile__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n          south: true,\n          west: true\n        }), null, new _tile__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n          south: true,\n          east: true\n        })], [new _tile__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n          north: true,\n          south: true\n        }), new _tile__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n          north: true,\n          east: true\n        }), new _tile__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n          west: true,\n          east: true\n        })]]\n      });\n    }\n  }, {\n    key: \"play\",\n    value: function play(timeStep) {\n      if (this.isTileMoving) {\n        this.tileMovingCounter = this.tileMovingCounter + timeStep;\n        this.grid.movePercentage = this.tileMovingCounter / this.tileMovingDuration;\n\n        if (this.tileMovingCounter > this.tileMovingDuration) {\n          console.log(this.grid.movingTile, ' > ', this.grid.moveToX, this.grid.moveToY, ' > ', this.grid.tiles);\n          this.grid.tiles[this.grid.moveToY][this.grid.moveToX] = this.grid.movingTile;\n          this.clearMovingTile();\n        }\n      }\n    }\n  }, {\n    key: \"paint\",\n    value: function paint() {\n      this.canvas2d.clearRect(0, 0, this.canvasWidth, this.canvasHeight);\n      this.grid.paint(this.canvas2d);\n    }\n  }, {\n    key: \"print\",\n    value: function print(text) {\n      this.messages.unshift(text);\n\n      while (this.messages.length > 3) {\n        this.messages.pop();\n      }\n\n      this.html.console.textContent = this.messages.join('\\n');\n    }\n  }, {\n    key: \"onPointerDown\",\n    value: function onPointerDown(e) {\n      var coords = getEventCoords(e, this.html.canvas);\n      var x = Math.floor(coords.x / _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"]) - this.grid.leftPadding;\n      var y = Math.floor(coords.y / _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"]) - this.grid.topPadding;\n      this.print(\"Clicked on COL \".concat(x, \" ROW \").concat(y));\n      this.moveTile(x, y);\n    }\n  }, {\n    key: \"onPointerUp\",\n    value: function onPointerUp(e) {}\n  }, {\n    key: \"moveTile\",\n    value: function moveTile(x, y) {\n      if (this.isTileMoving) return;\n      var tile = this.grid.getTile(x, y);\n      if (!tile) return;\n      var eTile = this.grid.getTile(x + 1, y);\n      var wTile = this.grid.getTile(x - 1, y);\n      var sTile = this.grid.getTile(x, y + 1);\n      var nTile = this.grid.getTile(x, y - 1);\n\n      if (!eTile && x + 1 < this.grid.width) {\n        this.setMovingTile(tile, x, y, x + 1, y);\n      } else if (!wTile && x - 1 >= 0) {\n        this.setMovingTile(tile, x, y, x - 1, y);\n      } else if (!sTile && y + 1 < this.grid.height) {\n        this.setMovingTile(tile, x, y, x, y + 1);\n      } else if (!nTile && y - 1 >= 0) {\n        this.setMovingTile(tile, x, y, x, y - 1);\n      }\n    }\n  }, {\n    key: \"setMovingTile\",\n    value: function setMovingTile(tile, fromX, fromY, toX, toY) {\n      this.grid.tiles[toY][toX] = null;\n      this.grid.tiles[fromY][fromX] = null;\n      this.grid.movingTile = tile;\n      this.grid.moveToX = toX;\n      this.grid.moveToY = toY;\n      this.grid.moveFromX = fromX;\n      this.grid.moveFromY = fromY;\n      this.grid.movePercentage = 0;\n      this.isTileMoving = true;\n      this.tileMovingCounter = 0;\n    }\n  }, {\n    key: \"clearMovingTile\",\n    value: function clearMovingTile() {\n      this.grid.movingTile = null;\n      this.isTileMoving = false;\n      this.tileMovingCounter = 0;\n    }\n  }]);\n\n  return CNY2020;\n}();\n\n;\n\nfunction getEventCoords(event, element) {\n  var xRatio = element.width && element.offsetWidth ? element.width / element.offsetWidth : 1;\n  var yRatio = element.height && element.offsetHeight ? element.height / element.offsetHeight : 1;\n  var x = event.offsetX * xRatio;\n  var y = event.offsetY * yRatio;\n  return {\n    x: x,\n    y: y\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CNY2020);\n\n//# sourceURL=webpack:///./src/cny2020/cny2020.js?");

/***/ }),

/***/ "./src/cny2020/constants.js":
/*!**********************************!*\
  !*** ./src/cny2020/constants.js ***!
  \**********************************/
/*! exports provided: TILE_SIZE, GRID_WIDTH, GRID_HEIGHT, MODES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TILE_SIZE\", function() { return TILE_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GRID_WIDTH\", function() { return GRID_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GRID_HEIGHT\", function() { return GRID_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MODES\", function() { return MODES; });\nvar TILE_SIZE = 64;\nvar GRID_WIDTH = 7;\nvar GRID_HEIGHT = 9;\nvar MODES = {\n  IDLE: 'idle',\n  TILES_MOVING: 'tiles_moving'\n};\n\n//# sourceURL=webpack:///./src/cny2020/constants.js?");

/***/ }),

/***/ "./src/cny2020/grid.js":
/*!*****************************!*\
  !*** ./src/cny2020/grid.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ \"./src/cny2020/tile.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/cny2020/constants.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Grid =\n/*#__PURE__*/\nfunction () {\n  function Grid(config) {\n    _classCallCheck(this, Grid);\n\n    this.width = config && config.width || 1;\n    this.height = config && config.height || 1;\n    this.tiles = config && config.tiles || [[null]];\n    this.movingTile = null;\n    this.moveFromX = null;\n    this.moveFromY = null;\n    this.moveToX = null;\n    this.moveToY = null;\n    this.movePercentage = 0;\n    this.leftPadding = Math.floor((_constants__WEBPACK_IMPORTED_MODULE_1__[\"GRID_WIDTH\"] - this.width) / 2);\n    this.rightPadding = Math.ceil((_constants__WEBPACK_IMPORTED_MODULE_1__[\"GRID_WIDTH\"] - this.width) / 2);\n    this.topPadding = Math.floor((_constants__WEBPACK_IMPORTED_MODULE_1__[\"GRID_HEIGHT\"] - this.height) / 2);\n    this.bottomPadding = Math.ceil((_constants__WEBPACK_IMPORTED_MODULE_1__[\"GRID_HEIGHT\"] - this.height) / 2);\n  }\n\n  _createClass(Grid, [{\n    key: \"paint\",\n    value: function paint(canvas2d) {\n      for (var y = 0; y < _constants__WEBPACK_IMPORTED_MODULE_1__[\"GRID_HEIGHT\"]; y++) {\n        for (var x = 0; x < _constants__WEBPACK_IMPORTED_MODULE_1__[\"GRID_WIDTH\"]; x++) {\n          this.paint_staticTile(canvas2d, x, y);\n        }\n      }\n\n      this.paint_movingTile(canvas2d);\n    }\n  }, {\n    key: \"paint_staticTile\",\n    value: function paint_staticTile(canvas2d, x, y) {\n      if (!(x >= this.leftPadding && x < _constants__WEBPACK_IMPORTED_MODULE_1__[\"GRID_WIDTH\"] - this.rightPadding && y >= this.topPadding && y < _constants__WEBPACK_IMPORTED_MODULE_1__[\"GRID_HEIGHT\"] - this.bottomPadding)) {\n        this.paint_blankTile(canvas2d, x, y);\n      } else {\n        var xIndex = x - this.leftPadding;\n        var yIndex = y - this.topPadding;\n        var tile = this.getTile(xIndex, yIndex);\n\n        if (!tile || tile === this.movingTile) {\n          this.paint_blankTile(canvas2d, x, y);\n        } else {\n          tile.paint(canvas2d, x, y);\n        }\n      }\n    }\n  }, {\n    key: \"paint_blankTile\",\n    value: function paint_blankTile(canvas2d, x, y) {\n      canvas2d.fillStyle = '#eee';\n      canvas2d.fillRect(x * _constants__WEBPACK_IMPORTED_MODULE_1__[\"TILE_SIZE\"], y * _constants__WEBPACK_IMPORTED_MODULE_1__[\"TILE_SIZE\"], _constants__WEBPACK_IMPORTED_MODULE_1__[\"TILE_SIZE\"], _constants__WEBPACK_IMPORTED_MODULE_1__[\"TILE_SIZE\"]);\n    }\n  }, {\n    key: \"paint_movingTile\",\n    value: function paint_movingTile(canvas2d) {\n      var tile = this.movingTile;\n      if (!tile) return;\n      var offsetX = _constants__WEBPACK_IMPORTED_MODULE_1__[\"TILE_SIZE\"] * this.movePercentage * (this.moveToX - this.moveFromX);\n      var offsetY = _constants__WEBPACK_IMPORTED_MODULE_1__[\"TILE_SIZE\"] * this.movePercentage * (this.moveToY - this.moveFromY);\n      tile.paint(canvas2d, this.moveFromX + this.leftPadding, this.moveFromY + this.topPadding, offsetX, offsetY);\n    }\n  }, {\n    key: \"getTile\",\n    value: function getTile(x, y) {\n      return this.tiles && this.tiles[y] && this.tiles[y][x] ? this.tiles[y][x] : null;\n    }\n  }]);\n\n  return Grid;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grid);\n\n//# sourceURL=webpack:///./src/cny2020/grid.js?");

/***/ }),

/***/ "./src/cny2020/index.js":
/*!******************************!*\
  !*** ./src/cny2020/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cny2020__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cny2020 */ \"./src/cny2020/cny2020.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_cny2020__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/cny2020/index.js?");

/***/ }),

/***/ "./src/cny2020/tile.js":
/*!*****************************!*\
  !*** ./src/cny2020/tile.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/cny2020/constants.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Tile =\n/*#__PURE__*/\nfunction () {\n  function Tile(config) {\n    _classCallCheck(this, Tile);\n\n    this.south = config && config.south || false;\n    this.north = config && config.north || false;\n    this.east = config && config.east || false;\n    this.west = config && config.west || false;\n    this.goal = !!(config && config.goal) || false;\n    this.canMove = !!(config && config.canMove) || true;\n  }\n\n  _createClass(Tile, [{\n    key: \"paint\",\n    value: function paint(canvas2d, x, y) {\n      var offsetX = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n      var offsetY = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;\n      canvas2d.fillStyle = '#844';\n      canvas2d.fillRect(x * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetX, y * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetY, _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"], _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"]); // canvas2d.lineCap = \"round\";\n\n      canvas2d.lineWidth = 8;\n      canvas2d.strokeStyle = '#fff';\n\n      if (this.east) {\n        canvas2d.beginPath();\n        canvas2d.moveTo((x + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetX, (y + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetY);\n        canvas2d.lineTo((x + 1) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetX, (y + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetY);\n        canvas2d.stroke();\n      }\n\n      if (this.west) {\n        canvas2d.beginPath();\n        canvas2d.moveTo((x + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetX, (y + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetY);\n        canvas2d.lineTo((x + 0) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetX, (y + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetY);\n        canvas2d.stroke();\n      }\n\n      if (this.south) {\n        canvas2d.beginPath();\n        canvas2d.moveTo((x + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetX, (y + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetY);\n        canvas2d.lineTo((x + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetX, (y + 1) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetY);\n        canvas2d.stroke();\n      }\n\n      if (this.north) {\n        canvas2d.beginPath();\n        canvas2d.moveTo((x + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetX, (y + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetY);\n        canvas2d.lineTo((x + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetX, (y + 0) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetY);\n        canvas2d.stroke();\n      }\n    }\n  }]);\n\n  return Tile;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tile);\n\n//# sourceURL=webpack:///./src/cny2020/tile.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cny2020__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cny2020 */ \"./src/cny2020/index.js\");\n\n\nwindow.onload = function () {\n  window.app = new _cny2020__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n};\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });