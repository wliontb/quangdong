/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/charts/flotcharts/dynamic.js":
/*!****************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/charts/flotcharts/dynamic.js ***!
  \****************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar KTFlotDemoDynamic = function () {\n  // Private functions\n  var exampleDynamic = function exampleDynamic() {\n    var _options;\n    var data = [];\n    var totalPoints = 250;\n\n    // random data generator for plot charts\n\n    function getRandomData() {\n      if (data.length > 0) data = data.slice(1);\n      // do a random walk\n      while (data.length < totalPoints) {\n        var prev = data.length > 0 ? data[data.length - 1] : 50;\n        var y = prev + Math.random() * 10 - 5;\n        if (y < 0) y = 0;\n        if (y > 100) y = 100;\n        data.push(y);\n      }\n      // zip the generated y values with the x values\n      var res = [];\n      for (var i = 0; i < data.length; ++i) {\n        res.push([i, data[i]]);\n      }\n      return res;\n    }\n\n    //server load\n    var options = (_options = {\n      colors: [KTUtil.getCssVariableValue('--bs-active-danger'), KTUtil.getCssVariableValue('--bs-active-primary')],\n      series: {\n        shadowSize: 1\n      },\n      lines: {\n        show: true,\n        lineWidth: 0.5,\n        fill: true,\n        fillColor: {\n          colors: [{\n            opacity: 0.1\n          }, {\n            opacity: 1\n          }]\n        }\n      },\n      yaxis: {\n        min: 0,\n        max: 100,\n        tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),\n        tickFormatter: function tickFormatter(v) {\n          return v + \"%\";\n        }\n      },\n      xaxis: {\n        show: false\n      }\n    }, _defineProperty(_options, \"colors\", [KTUtil.getCssVariableValue('--bs-active-primary')]), _defineProperty(_options, \"grid\", {\n      tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),\n      borderWidth: 0\n    }), _options);\n    var updateInterval = 30;\n    var plot = $.plot($(\"#kt_docs_flot_dynamic\"), [getRandomData()], options);\n    function update() {\n      plot.setData([getRandomData()]);\n      plot.draw();\n      setTimeout(update, updateInterval);\n    }\n    update();\n  };\n  return {\n    // Public Functions\n    init: function init() {\n      exampleDynamic();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTFlotDemoDynamic.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9mbG90Y2hhcnRzL2R5bmFtaWMuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFBQSxTQUFBQSxRQUFBQyxHQUFBLHNDQUFBRCxPQUFBLHdCQUFBRSxNQUFBLHVCQUFBQSxNQUFBLENBQUFDLFFBQUEsYUFBQUYsR0FBQSxrQkFBQUEsR0FBQSxnQkFBQUEsR0FBQSxXQUFBQSxHQUFBLHlCQUFBQyxNQUFBLElBQUFELEdBQUEsQ0FBQUcsV0FBQSxLQUFBRixNQUFBLElBQUFELEdBQUEsS0FBQUMsTUFBQSxDQUFBRyxTQUFBLHFCQUFBSixHQUFBLEtBQUFELE9BQUEsQ0FBQUMsR0FBQTtBQUFBLFNBQUFLLGdCQUFBTCxHQUFBLEVBQUFNLEdBQUEsRUFBQUMsS0FBQSxJQUFBRCxHQUFBLEdBQUFFLGNBQUEsQ0FBQUYsR0FBQSxPQUFBQSxHQUFBLElBQUFOLEdBQUEsSUFBQVMsTUFBQSxDQUFBQyxjQUFBLENBQUFWLEdBQUEsRUFBQU0sR0FBQSxJQUFBQyxLQUFBLEVBQUFBLEtBQUEsRUFBQUksVUFBQSxRQUFBQyxZQUFBLFFBQUFDLFFBQUEsb0JBQUFiLEdBQUEsQ0FBQU0sR0FBQSxJQUFBQyxLQUFBLFdBQUFQLEdBQUE7QUFBQSxTQUFBUSxlQUFBTSxHQUFBLFFBQUFSLEdBQUEsR0FBQVMsWUFBQSxDQUFBRCxHQUFBLG9CQUFBZixPQUFBLENBQUFPLEdBQUEsaUJBQUFBLEdBQUEsR0FBQVUsTUFBQSxDQUFBVixHQUFBO0FBQUEsU0FBQVMsYUFBQUUsS0FBQSxFQUFBQyxJQUFBLFFBQUFuQixPQUFBLENBQUFrQixLQUFBLGtCQUFBQSxLQUFBLGtCQUFBQSxLQUFBLE1BQUFFLElBQUEsR0FBQUYsS0FBQSxDQUFBaEIsTUFBQSxDQUFBbUIsV0FBQSxPQUFBRCxJQUFBLEtBQUFFLFNBQUEsUUFBQUMsR0FBQSxHQUFBSCxJQUFBLENBQUFJLElBQUEsQ0FBQU4sS0FBQSxFQUFBQyxJ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QUlDLElBQUksR0FBR0MsQ0FBQyxDQUFDRCxJQUFJLENBQUNDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMvQixhQUFhLEVBQUUsQ0FBQyxFQUFFUyxPQUFPLENBQUM7SUFFekUsU0FBU3VCLE1BQU1BLENBQUEsRUFBRztNQUNqQkYsSUFBSSxDQUFDRyxPQUFPLENBQUMsQ0FBQ2pDLGFBQWEsRUFBRSxDQUFDLENBQUM7TUFDL0I4QixJQUFJLENBQUNJLElBQUksRUFBRTtNQUNYQyxVQUFVLENBQUNILE1BQU0sRUFBRUgsY0FBYyxDQUFDO0lBQ25DO0lBRUFHLE1BQU0sRUFBRTtFQUNOLENBQUM7RUFFRCxPQUFPO0lBQ0g7SUFDQUksSUFBSSxFQUFFLFNBQUFBLEtBQUEsRUFBWTtNQUNkeEMsY0FBYyxFQUFFO0lBQ3BCO0VBQ0osQ0FBQztBQUNMLENBQUMsRUFBRTs7QUFFSDtBQUNBZSxNQUFNLENBQUMwQixrQkFBa0IsQ0FBQyxZQUFZO0VBQ2xDMUMsaUJBQWlCLENBQUN5QyxJQUFJLEVBQUU7QUFDNUIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9jaGFydHMvZmxvdGNoYXJ0cy9keW5hbWljLmpzPzlkNDUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEZsb3REZW1vRHluYW1pYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgZXhhbXBsZUR5bmFtaWMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBbXTtcclxuXHRcdHZhciB0b3RhbFBvaW50cyA9IDI1MDtcclxuXHJcblx0XHQvLyByYW5kb20gZGF0YSBnZW5lcmF0b3IgZm9yIHBsb3QgY2hhcnRzXHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0UmFuZG9tRGF0YSgpIHtcclxuXHRcdFx0aWYgKGRhdGEubGVuZ3RoID4gMCkgZGF0YSA9IGRhdGEuc2xpY2UoMSk7XHJcblx0XHRcdC8vIGRvIGEgcmFuZG9tIHdhbGtcclxuXHRcdFx0d2hpbGUgKGRhdGEubGVuZ3RoIDwgdG90YWxQb2ludHMpIHtcclxuXHRcdFx0XHR2YXIgcHJldiA9IGRhdGEubGVuZ3RoID4gMCA/IGRhdGFbZGF0YS5sZW5ndGggLSAxXSA6IDUwO1xyXG5cdFx0XHRcdHZhciB5ID0gcHJldiArIE1hdGgucmFuZG9tKCkgKiAxMCAtIDU7XHJcblx0XHRcdFx0aWYgKHkgPCAwKSB5ID0gMDtcclxuXHRcdFx0XHRpZiAoeSA+IDEwMCkgeSA9IDEwMDtcclxuXHRcdFx0XHRkYXRhLnB1c2goeSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gemlwIHRoZSBnZW5lcmF0ZWQgeSB2YWx1ZXMgd2l0aCB0aGUgeCB2YWx1ZXNcclxuXHRcdFx0dmFyIHJlcyA9IFtdO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRyZXMucHVzaChbaSwgZGF0YVtpXV0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vc2VydmVyIGxvYWRcclxuXHRcdHZhciBvcHRpb25zID0ge1xyXG5cdFx0XHRjb2xvcnM6IFtLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1hY3RpdmUtZGFuZ2VyJyksIEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWFjdGl2ZS1wcmltYXJ5JyldLFxyXG5cdFx0XHRzZXJpZXM6IHtcclxuXHRcdFx0XHRzaGFkb3dTaXplOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdGxpbmVzOiB7XHJcblx0XHRcdFx0c2hvdzogdHJ1ZSxcclxuXHRcdFx0XHRsaW5lV2lkdGg6IDAuNSxcclxuXHRcdFx0XHRmaWxsOiB0cnVlLFxyXG5cdFx0XHRcdGZpbGxDb2xvcjoge1xyXG5cdFx0XHRcdFx0Y29sb3JzOiBbe1xyXG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAwLjFcclxuXHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0b3BhY2l0eTogMVxyXG5cdFx0XHRcdFx0fV1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHlheGlzOiB7XHJcblx0XHRcdFx0bWluOiAwLFxyXG5cdFx0XHRcdG1heDogMTAwLFxyXG5cdFx0XHRcdHRpY2tDb2xvcjogS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtbGlnaHQtZGFyaycpLFxyXG5cdFx0XHRcdHRpY2tGb3JtYXR0ZXI6IGZ1bmN0aW9uKHYpIHtcclxuXHRcdFx0XHRcdHJldHVybiB2ICsgXCIlXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR4YXhpczoge1xyXG5cdFx0XHRcdHNob3c6IGZhbHNlLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb2xvcnM6IFtLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1hY3RpdmUtcHJpbWFyeScpXSxcclxuXHRcdFx0Z3JpZDoge1xyXG5cdFx0XHRcdHRpY2tDb2xvcjogS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtbGlnaHQtZGFyaycpLFxyXG5cdFx0XHRcdGJvcmRlcldpZHRoOiAwLFxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciB1cGRhdGVJbnRlcnZhbCA9IDMwO1xyXG5cdFx0dmFyIHBsb3QgPSAkLnBsb3QoJChcIiNrdF9kb2NzX2Zsb3RfZHluYW1pY1wiKSwgW2dldFJhbmRvbURhdGEoKV0sIG9wdGlvbnMpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIHVwZGF0ZSgpIHtcclxuXHRcdFx0cGxvdC5zZXREYXRhKFtnZXRSYW5kb21EYXRhKCldKTtcclxuXHRcdFx0cGxvdC5kcmF3KCk7XHJcblx0XHRcdHNldFRpbWVvdXQodXBkYXRlLCB1cGRhdGVJbnRlcnZhbCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlRHluYW1pYygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgS1RGbG90RGVtb0R5bmFtaWMuaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIl90eXBlb2YiLCJvYmoiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX2RlZmluZVByb3BlcnR5Iiwia2V5IiwidmFsdWUiLCJfdG9Qcm9wZXJ0eUtleSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXJnIiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsInRvUHJpbWl0aXZlIiwidW5kZWZpbmVkIiwicmVzIiwiY2FsbCIsIlR5cGVFcnJvciIsIk51bWJlciIsIktURmxvdERlbW9EeW5hbWljIiwiZXhhbXBsZUR5bmFtaWMiLCJfb3B0aW9ucyIsImRhdGEiLCJ0b3RhbFBvaW50cyIsImdldFJhbmRvbURhdGEiLCJsZW5ndGgiLCJzbGljZSIsInByZXYiLCJ5IiwiTWF0aCIsInJhbmRvbSIsInB1c2giLCJpIiwib3B0aW9ucyIsImNvbG9ycyIsIktUVXRpbCIsImdldENzc1ZhcmlhYmxlVmFsdWUiLCJzZXJpZXMiLCJzaGFkb3dTaXplIiwibGluZXMiLCJzaG93IiwibGluZVdpZHRoIiwiZmlsbCIsImZpbGxDb2xvciIsIm9wYWNpdHkiLCJ5YXhpcyIsIm1pbiIsIm1heCIsInRpY2tDb2xvciIsInRpY2tGb3JtYXR0ZXIiLCJ2IiwieGF4aXMiLCJib3JkZXJXaWR0aCIsInVwZGF0ZUludGVydmFsIiwicGxvdCIsIiQiLCJ1cGRhdGUiLCJzZXREYXRhIiwiZHJhdyIsInNldFRpbWVvdXQiLCJpbml0Iiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/charts/flotcharts/dynamic.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/charts/flotcharts/dynamic.js"]();
/******/ 	
/******/ })()
;