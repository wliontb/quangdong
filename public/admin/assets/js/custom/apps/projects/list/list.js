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

/***/ "./resources/src/js/custom/apps/projects/list/list.js":
/*!************************************************************!*\
  !*** ./resources/src/js/custom/apps/projects/list/list.js ***!
  \************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTProjectList = function () {\n  var initChart = function initChart() {\n    // init chart\n    var element = document.getElementById(\"kt_project_list_chart\");\n    if (!element) {\n      return;\n    }\n    var config = {\n      type: 'doughnut',\n      data: {\n        datasets: [{\n          data: [30, 45, 25],\n          backgroundColor: ['#00A3FF', '#50CD89', '#E4E6EF']\n        }],\n        labels: ['Active', 'Completed', 'Yet to start']\n      },\n      options: {\n        chart: {\n          fontFamily: 'inherit'\n        },\n        cutout: '75%',\n        cutoutPercentage: 65,\n        responsive: true,\n        maintainAspectRatio: false,\n        title: {\n          display: false\n        },\n        animation: {\n          animateScale: true,\n          animateRotate: true\n        },\n        tooltips: {\n          enabled: true,\n          intersect: false,\n          mode: 'nearest',\n          bodySpacing: 5,\n          yPadding: 10,\n          xPadding: 10,\n          caretPadding: 0,\n          displayColors: false,\n          backgroundColor: '#20D489',\n          titleFontColor: '#ffffff',\n          cornerRadius: 4,\n          footerSpacing: 0,\n          titleSpacing: 0\n        },\n        plugins: {\n          legend: {\n            display: false\n          }\n        }\n      }\n    };\n    var ctx = element.getContext('2d');\n    var myDoughnut = new Chart(ctx, config);\n  };\n\n  // Public methods\n  return {\n    init: function init() {\n      initChart();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTProjectList.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hcHBzL3Byb2plY3RzL2xpc3QvbGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBLElBQUlBLGFBQWEsR0FBRyxZQUFZO0VBQzVCLElBQUlDLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBLEVBQWU7SUFDeEI7SUFDQSxJQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLHVCQUF1QixDQUFDO0lBRTlELElBQUksQ0FBQ0YsT0FBTyxFQUFFO01BQ1Y7SUFDSjtJQUVBLElBQUlHLE1BQU0sR0FBRztNQUNUQyxJQUFJLEVBQUUsVUFBVTtNQUNoQkMsSUFBSSxFQUFFO1FBQ0ZDLFFBQVEsRUFBRSxDQUFDO1VBQ1BELElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1VBQ2xCRSxlQUFlLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7UUFDckQsQ0FBQyxDQUFDO1FBQ0ZDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsY0FBYztNQUNsRCxDQUFDO01BQ0RDLE9BQU8sRUFBRTtRQUNMQyxLQUFLLEVBQUU7VUFDSEMsVUFBVSxFQUFFO1FBQ2hCLENBQUM7UUFDREMsTUFBTSxFQUFFLEtBQUs7UUFDYkMsZ0JBQWdCLEVBQUUsRUFBRTtRQUNwQkMsVUFBVSxFQUFFLElBQUk7UUFDaEJDLG1CQUFtQixFQUFFLEtBQUs7UUFDMUJDLEtBQUssRUFBRTtVQUNIQyxPQUFPLEVBQUU7UUFDYixDQUFDO1FBQ0RDLFNBQVMsRUFBRTtVQUNQQyxZQUFZLEVBQUUsSUFBSTtVQUNsQkMsYUFBYSxFQUFFO1FBQ25CLENBQUM7UUFDREMsUUFBUSxFQUFFO1VBQ05DLE9BQU8sRUFBRSxJQUFJO1VBQ2JDLFNBQVMsRUFBRSxLQUFLO1VBQ2hCQyxJQUFJLEVBQUUsU0FBUztVQUNmQyxXQUFXLEVBQUUsQ0FBQztVQUNkQyxRQUFRLEVBQUUsRUFBRTtVQUNaQyxRQUFRLEVBQUUsRUFBRTtVQUNaQyxZQUFZLEVBQUUsQ0FBQztVQUNmQyxhQUFhLEVBQUUsS0FBSztVQUNwQnRCLGVBQWUsRUFBRSxTQUFTO1VBQzFCdUIsY0FBYyxFQUFFLFNBQVM7VUFDekJDLFlBQVksRUFBRSxDQUFDO1VBQ2ZDLGFBQWEsRUFBRSxDQUFDO1VBQ2hCQyxZQUFZLEVBQUU7UUFDbEIsQ0FBQztRQUNEQyxPQUFPLEVBQUU7VUFDTEMsTUFBTSxFQUFFO1lBQ0psQixPQUFPLEVBQUU7VUFDYjtRQUNKO01BQ0o7SUFDSixDQUFDO0lBRUQsSUFBSW1CLEdBQUcsR0FBR3BDLE9BQU8sQ0FBQ3FDLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDbEMsSUFBSUMsVUFBVSxHQUFHLElBQUlDLEtBQUssQ0FBQ0gsR0FBRyxFQUFFakMsTUFBTSxDQUFDO0VBQzNDLENBQUM7O0VBRUQ7RUFDQSxPQUFPO0lBQ0hxQyxJQUFJLEVBQUUsU0FBQUEsS0FBQSxFQUFZO01BQ2R6QyxTQUFTLEVBQUU7SUFDZjtFQUNKLENBQUM7QUFDTCxDQUFDLEVBQUU7O0FBRUg7QUFDQTBDLE1BQU0sQ0FBQ0Msa0JBQWtCLENBQUMsWUFBVztFQUNqQzVDLGFBQWEsQ0FBQzBDLElBQUksRUFBRTtBQUN4QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hcHBzL3Byb2plY3RzL2xpc3QvbGlzdC5qcz8wYTViIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RQcm9qZWN0TGlzdCA9IGZ1bmN0aW9uICgpIHsgICAgXHJcbiAgICB2YXIgaW5pdENoYXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGluaXQgY2hhcnRcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia3RfcHJvamVjdF9saXN0X2NoYXJ0XCIpO1xyXG5cclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ2RvdWdobnV0JyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWzMwLCA0NSwgMjVdLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogWycjMDBBM0ZGJywgJyM1MENEODknLCAnI0U0RTZFRiddXHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgIGxhYmVsczogWydBY3RpdmUnLCAnQ29tcGxldGVkJywgJ1lldCB0byBzdGFydCddXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ2luaGVyaXQnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY3V0b3V0OiAnNzUlJyxcclxuICAgICAgICAgICAgICAgIGN1dG91dFBlcmNlbnRhZ2U6IDY1LFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVTY2FsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlUm90YXRlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGludGVyc2VjdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogJ25lYXJlc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHlTcGFjaW5nOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIHlQYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICB4UGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZXRQYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlDb2xvcnM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyMEQ0ODknLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlRm9udENvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgY29ybmVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIGZvb3RlclNwYWNpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVTcGFjaW5nOiAwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY3R4ID0gZWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHZhciBteURvdWdobnV0ID0gbmV3IENoYXJ0KGN0eCwgY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGluaXRDaGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcclxuICAgIEtUUHJvamVjdExpc3QuaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktUUHJvamVjdExpc3QiLCJpbml0Q2hhcnQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbmZpZyIsInR5cGUiLCJkYXRhIiwiZGF0YXNldHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsYWJlbHMiLCJvcHRpb25zIiwiY2hhcnQiLCJmb250RmFtaWx5IiwiY3V0b3V0IiwiY3V0b3V0UGVyY2VudGFnZSIsInJlc3BvbnNpdmUiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwidGl0bGUiLCJkaXNwbGF5IiwiYW5pbWF0aW9uIiwiYW5pbWF0ZVNjYWxlIiwiYW5pbWF0ZVJvdGF0ZSIsInRvb2x0aXBzIiwiZW5hYmxlZCIsImludGVyc2VjdCIsIm1vZGUiLCJib2R5U3BhY2luZyIsInlQYWRkaW5nIiwieFBhZGRpbmciLCJjYXJldFBhZGRpbmciLCJkaXNwbGF5Q29sb3JzIiwidGl0bGVGb250Q29sb3IiLCJjb3JuZXJSYWRpdXMiLCJmb290ZXJTcGFjaW5nIiwidGl0bGVTcGFjaW5nIiwicGx1Z2lucyIsImxlZ2VuZCIsImN0eCIsImdldENvbnRleHQiLCJteURvdWdobnV0IiwiQ2hhcnQiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/apps/projects/list/list.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/apps/projects/list/list.js"]();
/******/ 	
/******/ })()
;