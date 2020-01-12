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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/cny2020/constants.js\");\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid */ \"./src/cny2020/grid.js\");\n/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tile */ \"./src/cny2020/tile.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar CNY2020 =\n/*#__PURE__*/\nfunction () {\n  function CNY2020() {\n    _classCallCheck(this, CNY2020);\n\n    this.html = {\n      app: document.getElementById('app'),\n      canvas: document.getElementById('canvas'),\n      console: document.getElementById('console')\n    };\n    this.canvas2d = this.html.canvas.getContext('2d');\n    this.canvasWidth = _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] * _constants__WEBPACK_IMPORTED_MODULE_0__[\"GRID_WIDTH\"];\n    this.canvasHeight = _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] * _constants__WEBPACK_IMPORTED_MODULE_0__[\"GRID_HEIGHT\"];\n    this.messages = [];\n    this.html.canvas.width = this.canvasWidth;\n    this.html.canvas.height = this.canvasHeight;\n    this.html.canvas.addEventListener('pointerdown', this.onPointerDown.bind(this));\n    this.tileMovingCounter = 0;\n    this.tileMovingDuration = 100;\n    this.isTileMoving = false;\n    this.ratMovingCounter = 0;\n    this.ratMovingDuration = 1000;\n    this.grid = new _grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.loadLevel();\n    this.prevTime = null;\n    this.nextFrame = window.requestAnimationFrame(this.main.bind(this));\n  }\n\n  _createClass(CNY2020, [{\n    key: \"main\",\n    value: function main(time) {\n      var timeStep = this.prevTime ? time - this.prevTime : time;\n      this.prevTime = time;\n      this.play(timeStep);\n      this.paint();\n      this.nextFrame = window.requestAnimationFrame(this.main.bind(this));\n    }\n  }, {\n    key: \"loadLevel\",\n    value: function loadLevel() {\n      this.clearMovingTile();\n      this.grid = new _grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        width: 3,\n        height: 3,\n        tiles: [[new _tile__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n          south: true\n        }), new _tile__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({}), new _tile__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n          south: true,\n          goal: true\n        })], [null, new _tile__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n          south: true,\n          north: true\n        }), new _tile__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n          south: true,\n          east: true\n        })], [new _tile__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n          north: true,\n          east: true\n        }), new _tile__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n          west: true,\n          north: true\n        }), new _tile__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n          west: true,\n          north: true\n        })]],\n        rat: {\n          x: 0,\n          y: 0,\n          direction: _constants__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTIONS\"].SOUTH\n        }\n      });\n    }\n  }, {\n    key: \"play\",\n    value: function play(timeStep) {\n      if (this.isTileMoving) {\n        // If there is an active moving tile, move it.\n        this.tileMovingCounter = this.tileMovingCounter + timeStep;\n        this.grid.movePercentage = this.tileMovingCounter / this.tileMovingDuration; // When the duration is up, clear the active moving tile, so the player can move another one.\n\n        if (this.tileMovingCounter >= this.tileMovingDuration) {\n          this.grid.tiles[this.grid.moveToY][this.grid.moveToX] = this.grid.movingTile;\n          this.clearMovingTile();\n        }\n      }\n\n      var rat = this.grid.rat;\n\n      if (rat.toX !== null && rat.toY !== null) {\n        // If the rat has a destination, move it.\n        this.ratMovingCounter = this.ratMovingCounter + timeStep;\n        rat.movePercentage = this.ratMovingCounter / this.ratMovingDuration; // When the duration is up, stop the rat.\n\n        if (this.ratMovingCounter >= this.ratMovingDuration) {\n          rat.x = rat.toX;\n          rat.y = rat.toY;\n          rat.toX = null;\n          rat.toY = null;\n          rat.movePercentage = 0;\n        }\n      } else {\n        // Are we at the exit goal yet?\n        var tile = this.grid.getTile(rat.x, rat.y);\n\n        if (tile && tile.goal) {\n          console.log('WIN'); // TODO\n        } // Otherwise, decide what to do with the rat.\n\n\n        this.doRatLogic();\n      }\n    }\n  }, {\n    key: \"paint\",\n    value: function paint() {\n      this.canvas2d.clearRect(0, 0, this.canvasWidth, this.canvasHeight);\n      this.grid.paint(this.canvas2d);\n    }\n  }, {\n    key: \"print\",\n    value: function print(text) {\n      this.messages.unshift(text);\n\n      while (this.messages.length > 3) {\n        this.messages.pop();\n      }\n\n      this.html.console.textContent = this.messages.join('\\n');\n    }\n  }, {\n    key: \"onPointerDown\",\n    value: function onPointerDown(e) {\n      var coords = getEventCoords(e, this.html.canvas);\n      var x = Math.floor(coords.x / _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"]) - this.grid.leftPadding;\n      var y = Math.floor(coords.y / _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"]) - this.grid.topPadding;\n      this.print(\"Clicked on COL \".concat(x, \" ROW \").concat(y));\n      this.moveTile(x, y);\n    }\n  }, {\n    key: \"moveTile\",\n    value: function moveTile(x, y) {\n      // There can only be one active moving tile at a time.\n      if (this.isTileMoving) return;\n      var tile = this.grid.getTile(x, y);\n      var rat = this.grid.rat;\n      if (!tile) return; // If the rat is moving to/from a tile, that tile can't be moved.\n\n      var isRatOnTile = rat.x === x && rat.y === y || rat.toX === x && rat.toY === y && rat.toX !== null && rat.toY !== null;\n      if (isRatOnTile) return; // Check all adjacent tiles.\n\n      var eTile = this.grid.getTile(x + 1, y);\n      var wTile = this.grid.getTile(x - 1, y);\n      var sTile = this.grid.getTile(x, y + 1);\n      var nTile = this.grid.getTile(x, y - 1); // If the adjacent tile is empty AND within the bounds of the grid, move the tile to the empty space\n\n      if (!eTile && x + 1 < this.grid.width) {\n        this.setMovingTile(tile, x, y, x + 1, y);\n      } else if (!wTile && x - 1 >= 0) {\n        this.setMovingTile(tile, x, y, x - 1, y);\n      } else if (!sTile && y + 1 < this.grid.height) {\n        this.setMovingTile(tile, x, y, x, y + 1);\n      } else if (!nTile && y - 1 >= 0) {\n        this.setMovingTile(tile, x, y, x, y - 1);\n      }\n    }\n  }, {\n    key: \"setMovingTile\",\n    value: function setMovingTile(tile, fromX, fromY, toX, toY) {\n      this.grid.tiles[toY][toX] = null;\n      this.grid.tiles[fromY][fromX] = null;\n      this.grid.movingTile = tile;\n      this.grid.moveToX = toX;\n      this.grid.moveToY = toY;\n      this.grid.moveFromX = fromX;\n      this.grid.moveFromY = fromY;\n      this.grid.movePercentage = 0;\n      this.isTileMoving = true;\n      this.tileMovingCounter = 0;\n    }\n  }, {\n    key: \"clearMovingTile\",\n    value: function clearMovingTile() {\n      this.grid.movingTile = null;\n      this.isTileMoving = false;\n      this.tileMovingCounter = 0;\n    }\n  }, {\n    key: \"doRatLogic\",\n    value: function doRatLogic() {\n      var rat = this.grid.rat;\n      var curTile = this.grid.getTile(rat.x, rat.y); // Figure out where the rat needs to move to next\n      // The rat moves forward whenever possible, then turns right, or left, in that order.\n      // The rat never moves backwards\n\n      switch (rat.direction) {\n        case _constants__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTIONS\"].SOUTH:\n          if (curTile.south) {\n            rat.direction = _constants__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTIONS\"].SOUTH;\n            break;\n          }\n\n          if (curTile.west) {\n            rat.direction = _constants__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTIONS\"].WEST;\n            break;\n          }\n\n          if (curTile.east) {\n            rat.direction = _constants__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTIONS\"].EAST;\n            break;\n          }\n\n          break;\n\n        case _constants__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTIONS\"].EAST:\n          if (curTile.east) {\n            rat.direction = _constants__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTIONS\"].EAST;\n            break;\n          }\n\n          if (curTile.south) {\n            rat.direction = _constants__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTIONS\"].SOUTH;\n            break;\n          }\n\n          if (curTile.north) {\n            rat.direction = _constants__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTIONS\"].NORTH;\n            break;\n          }\n\n          break;\n\n        case _constants__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTIONS\"].NORTH:\n          if (curTile.north) {\n            rat.direction = _constants__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTIONS\"].NORTH;\n            break;\n          }\n\n          if (curTile.east) {\n            rat.direction = _constants__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTIONS\"].EAST;\n            break;\n          }\n\n          if (curTile.west) {\n            rat.direction = _constants__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTIONS\"].WEST;\n            break;\n          }\n\n          break;\n\n        case _constants__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTIONS\"].WEST:\n          if (curTile.west) {\n            rat.direction = _constants__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTIONS\"].WEST;\n            break;\n          }\n\n          if (curTile.north) {\n            rat.direction = _constants__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTIONS\"].NORTH;\n            break;\n          }\n\n          if (curTile.south) {\n            rat.direction = _constants__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTIONS\"].SOUTH;\n            break;\n          }\n\n          break;\n      }\n\n      var nextTile = this.grid.getTile(rat.x, rat.y, rat.direction); // Now, can the rat move forward?\n\n      if (nextTile) {\n        if (rat.direction === _constants__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTIONS\"].SOUTH && nextTile.north) {\n          rat.toX = rat.x;\n          rat.toY = rat.y + 1;\n          rat.movePercentage = 0;\n          this.ratMovingCounter = 0;\n        } else if (rat.direction === _constants__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTIONS\"].EAST && nextTile.west) {\n          rat.toX = rat.x + 1;\n          rat.toY = rat.y;\n          rat.movePercentage = 0;\n          this.ratMovingCounter = 0;\n        } else if (rat.direction === _constants__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTIONS\"].NORTH && nextTile.south) {\n          rat.toX = rat.x;\n          rat.toY = rat.y - 1;\n          rat.movePercentage = 0;\n          this.ratMovingCounter = 0;\n        } else if (rat.direction === _constants__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTIONS\"].WEST && nextTile.east) {\n          rat.toX = rat.x - 1;\n          rat.toY = rat.y;\n          rat.movePercentage = 0;\n          this.ratMovingCounter = 0;\n        }\n      }\n    }\n  }]);\n\n  return CNY2020;\n}();\n\n;\n\nfunction getEventCoords(event, element) {\n  var xRatio = element.width && element.offsetWidth ? element.width / element.offsetWidth : 1;\n  var yRatio = element.height && element.offsetHeight ? element.height / element.offsetHeight : 1;\n  var x = event.offsetX * xRatio;\n  var y = event.offsetY * yRatio;\n  return {\n    x: x,\n    y: y\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CNY2020);\n\n//# sourceURL=webpack:///./src/cny2020/cny2020.js?");

/***/ }),

/***/ "./src/cny2020/constants.js":
/*!**********************************!*\
  !*** ./src/cny2020/constants.js ***!
  \**********************************/
/*! exports provided: TILE_SIZE, GRID_WIDTH, GRID_HEIGHT, DIRECTIONS, NO_DIRECTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TILE_SIZE\", function() { return TILE_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GRID_WIDTH\", function() { return GRID_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GRID_HEIGHT\", function() { return GRID_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DIRECTIONS\", function() { return DIRECTIONS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NO_DIRECTION\", function() { return NO_DIRECTION; });\nvar TILE_SIZE = 64;\nvar GRID_WIDTH = 7;\nvar GRID_HEIGHT = 9;\nvar DIRECTIONS = {\n  SOUTH: 0,\n  EAST: 1,\n  NORTH: 2,\n  WEST: 3\n};\nvar NO_DIRECTION = -1;\n\n//# sourceURL=webpack:///./src/cny2020/constants.js?");

/***/ }),

/***/ "./src/cny2020/grid.js":
/*!*****************************!*\
  !*** ./src/cny2020/grid.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ \"./src/cny2020/tile.js\");\n/* harmony import */ var _rat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rat */ \"./src/cny2020/rat.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/cny2020/constants.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Grid =\n/*#__PURE__*/\nfunction () {\n  function Grid(config) {\n    _classCallCheck(this, Grid);\n\n    this.width = config && config.width || 1;\n    this.height = config && config.height || 1;\n    var ratConfig = config && config.rat || {};\n    this.rat = new _rat__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ratConfig);\n    this.tiles = config && config.tiles || [[null]];\n    this.movingTile = null;\n    this.moveFromX = null;\n    this.moveFromY = null;\n    this.moveToX = null;\n    this.moveToY = null;\n    this.movePercentage = 0;\n    this.leftPadding = Math.floor((_constants__WEBPACK_IMPORTED_MODULE_2__[\"GRID_WIDTH\"] - this.width) / 2);\n    this.rightPadding = Math.ceil((_constants__WEBPACK_IMPORTED_MODULE_2__[\"GRID_WIDTH\"] - this.width) / 2);\n    this.topPadding = Math.floor((_constants__WEBPACK_IMPORTED_MODULE_2__[\"GRID_HEIGHT\"] - this.height) / 2);\n    this.bottomPadding = Math.ceil((_constants__WEBPACK_IMPORTED_MODULE_2__[\"GRID_HEIGHT\"] - this.height) / 2);\n  }\n\n  _createClass(Grid, [{\n    key: \"paint\",\n    value: function paint(canvas2d) {\n      for (var y = 0; y < _constants__WEBPACK_IMPORTED_MODULE_2__[\"GRID_HEIGHT\"]; y++) {\n        for (var x = 0; x < _constants__WEBPACK_IMPORTED_MODULE_2__[\"GRID_WIDTH\"]; x++) {\n          this.paint_staticTile(canvas2d, x, y);\n        }\n      }\n\n      this.paint_movingTile(canvas2d);\n      this.rat.paint(canvas2d, this.leftPadding, this.topPadding);\n    }\n  }, {\n    key: \"paint_staticTile\",\n    value: function paint_staticTile(canvas2d, x, y) {\n      if (!(x >= this.leftPadding && x < _constants__WEBPACK_IMPORTED_MODULE_2__[\"GRID_WIDTH\"] - this.rightPadding && y >= this.topPadding && y < _constants__WEBPACK_IMPORTED_MODULE_2__[\"GRID_HEIGHT\"] - this.bottomPadding)) {\n        this.paint_blankTile(canvas2d, x, y);\n      } else {\n        var xIndex = x - this.leftPadding;\n        var yIndex = y - this.topPadding;\n        var tile = this.getTile(xIndex, yIndex);\n\n        if (!tile || tile === this.movingTile) {\n          this.paint_blankTile(canvas2d, x, y);\n        } else {\n          tile.paint(canvas2d, x, y);\n        }\n      }\n    }\n  }, {\n    key: \"paint_blankTile\",\n    value: function paint_blankTile(canvas2d, x, y) {\n      canvas2d.fillStyle = '#eee';\n      canvas2d.fillRect(x * _constants__WEBPACK_IMPORTED_MODULE_2__[\"TILE_SIZE\"], y * _constants__WEBPACK_IMPORTED_MODULE_2__[\"TILE_SIZE\"], _constants__WEBPACK_IMPORTED_MODULE_2__[\"TILE_SIZE\"], _constants__WEBPACK_IMPORTED_MODULE_2__[\"TILE_SIZE\"]);\n    }\n  }, {\n    key: \"paint_movingTile\",\n    value: function paint_movingTile(canvas2d) {\n      var tile = this.movingTile;\n      if (!tile) return;\n      var offsetX = _constants__WEBPACK_IMPORTED_MODULE_2__[\"TILE_SIZE\"] * this.movePercentage * (this.moveToX - this.moveFromX);\n      var offsetY = _constants__WEBPACK_IMPORTED_MODULE_2__[\"TILE_SIZE\"] * this.movePercentage * (this.moveToY - this.moveFromY);\n      tile.paint(canvas2d, this.moveFromX + this.leftPadding, this.moveFromY + this.topPadding, offsetX, offsetY);\n    }\n  }, {\n    key: \"getTile\",\n    value: function getTile(x, y) {\n      var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants__WEBPACK_IMPORTED_MODULE_2__[\"NO_DIRECTION\"];\n      var offsetX = 0;\n      var offsetY = 0;\n\n      switch (direction) {\n        case _constants__WEBPACK_IMPORTED_MODULE_2__[\"DIRECTIONS\"].SOUTH:\n          offsetY = 1;\n          break;\n\n        case _constants__WEBPACK_IMPORTED_MODULE_2__[\"DIRECTIONS\"].EAST:\n          offsetX = 1;\n          break;\n\n        case _constants__WEBPACK_IMPORTED_MODULE_2__[\"DIRECTIONS\"].NORTH:\n          offsetY = -1;\n          break;\n\n        case _constants__WEBPACK_IMPORTED_MODULE_2__[\"DIRECTIONS\"].WEST:\n          offsetX = -1;\n          break;\n      }\n\n      var actualX = x + offsetX;\n      var actualY = y + offsetY;\n      return this.tiles && this.tiles[actualY] && this.tiles[actualY][actualX] ? this.tiles[actualY][actualX] : null;\n    }\n  }]);\n\n  return Grid;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grid);\n\n//# sourceURL=webpack:///./src/cny2020/grid.js?");

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

/***/ "./src/cny2020/rat.js":
/*!****************************!*\
  !*** ./src/cny2020/rat.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/cny2020/constants.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Rat =\n/*#__PURE__*/\nfunction () {\n  function Rat(config) {\n    _classCallCheck(this, Rat);\n\n    this.x = config && config.x || 0;\n    this.y = config && config.y || 0;\n    this.direction = config && config.direction || _constants__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTIONS\"].EAST;\n    this.toX = null;\n    this.toY = null;\n    this.movePercentage = 0;\n  }\n\n  _createClass(Rat, [{\n    key: \"paint\",\n    value: function paint(canvas2d, leftPadding, topPadding) {\n      // TODO\n      var offsetX = (this.toX - this.x) * this.movePercentage;\n      var offsetY = (this.toY - this.y) * this.movePercentage;\n      var x = this.x + offsetX + leftPadding + 0.5;\n      var y = this.y + offsetY + topPadding + 0.5;\n      canvas2d.fillStyle = '#c44';\n      canvas2d.beginPath();\n      canvas2d.arc(x * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"], y * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"], _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] / 3, 0, 2 * Math.PI);\n      canvas2d.fill();\n      canvas2d.strokeStyle = '#fcc';\n      canvas2d.lineWidth = 4;\n      canvas2d.beginPath();\n      canvas2d.moveTo(x * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"], y * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"]);\n\n      switch (this.direction) {\n        case _constants__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTIONS\"].SOUTH:\n          canvas2d.lineTo(x * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"], (y + 0.3) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"]);\n          break;\n\n        case _constants__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTIONS\"].EAST:\n          canvas2d.lineTo((x + 0.3) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"], y * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"]);\n          break;\n\n        case _constants__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTIONS\"].NORTH:\n          canvas2d.lineTo(x * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"], (y - 0.3) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"]);\n          break;\n\n        case _constants__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTIONS\"].WEST:\n          canvas2d.lineTo((x - 0.3) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"], y * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"]);\n          break;\n      }\n\n      canvas2d.stroke();\n    }\n  }]);\n\n  return Rat;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rat);\n\n//# sourceURL=webpack:///./src/cny2020/rat.js?");

/***/ }),

/***/ "./src/cny2020/tile.js":
/*!*****************************!*\
  !*** ./src/cny2020/tile.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/cny2020/constants.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Tile =\n/*#__PURE__*/\nfunction () {\n  function Tile(config) {\n    _classCallCheck(this, Tile);\n\n    this.south = config && config.south || false;\n    this.north = config && config.north || false;\n    this.east = config && config.east || false;\n    this.west = config && config.west || false;\n    this.goal = !!(config && config.goal) || false;\n    this.canMove = !!(config && config.canMove) || true;\n  }\n\n  _createClass(Tile, [{\n    key: \"paint\",\n    value: function paint(canvas2d, x, y) {\n      var offsetX = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n      var offsetY = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;\n      canvas2d.fillStyle = '#844';\n      canvas2d.fillRect(x * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetX, y * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetY, _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"], _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"]); // canvas2d.lineCap = \"round\";\n\n      canvas2d.lineWidth = 8;\n      canvas2d.strokeStyle = '#fff';\n\n      if (this.east) {\n        canvas2d.beginPath();\n        canvas2d.moveTo((x + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetX, (y + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetY);\n        canvas2d.lineTo((x + 1) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetX, (y + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetY);\n        canvas2d.stroke();\n      }\n\n      if (this.west) {\n        canvas2d.beginPath();\n        canvas2d.moveTo((x + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetX, (y + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetY);\n        canvas2d.lineTo((x + 0) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetX, (y + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetY);\n        canvas2d.stroke();\n      }\n\n      if (this.south) {\n        canvas2d.beginPath();\n        canvas2d.moveTo((x + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetX, (y + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetY);\n        canvas2d.lineTo((x + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetX, (y + 1) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetY);\n        canvas2d.stroke();\n      }\n\n      if (this.north) {\n        canvas2d.beginPath();\n        canvas2d.moveTo((x + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetX, (y + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetY);\n        canvas2d.lineTo((x + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetX, (y + 0) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetY);\n        canvas2d.stroke();\n      }\n\n      if (this.north || this.south || this.east || this.west) {\n        canvas2d.fillStyle = '#fff';\n        canvas2d.beginPath();\n        canvas2d.arc((x + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetX, (y + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetY, 4, 0, 2 * Math.PI);\n        canvas2d.fill();\n      }\n\n      if (this.goal) {\n        canvas2d.strokeStyle = '#fff';\n        canvas2d.lineWidth = 4;\n        canvas2d.beginPath();\n        canvas2d.arc((x + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetX, (y + 0.5) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] + offsetY, _constants__WEBPACK_IMPORTED_MODULE_0__[\"TILE_SIZE\"] / 3, 0, 2 * Math.PI);\n        canvas2d.stroke();\n      }\n    }\n  }]);\n\n  return Tile;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tile);\n\n//# sourceURL=webpack:///./src/cny2020/tile.js?");

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