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

/***/ "./resources/src/js/custom/documentation/general/jkanban/color.js":
/*!************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/jkanban/color.js ***!
  \************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTJKanbanDemoColor = function () {\n  // Private functions\n  var exampleColor = function exampleColor() {\n    var kanban = new jKanban({\n      element: '#kt_docs_jkanban_color',\n      gutter: '0',\n      widthBoard: '250px',\n      boards: [{\n        'id': '_inprocess',\n        'title': 'In Process',\n        'class': 'primary',\n        'item': [{\n          'title': '<span class=\"fw-bold\">You can drag me too</span>',\n          'class': 'light-primary'\n        }, {\n          'title': '<span class=\"fw-bold\">Buy Milk</span>',\n          'class': 'light-primary'\n        }]\n      }, {\n        'id': '_working',\n        'title': 'Working',\n        'class': 'success',\n        'item': [{\n          'title': '<span class=\"fw-bold\">Do Something!</span>',\n          'class': 'light-success'\n        }, {\n          'title': '<span class=\"fw-bold\">Run?</span>',\n          'class': 'light-success'\n        }]\n      }, {\n        'id': '_done',\n        'title': 'Done',\n        'class': 'danger',\n        'item': [{\n          'title': '<span class=\"fw-bold\">All right</span>',\n          'class': 'light-danger'\n        }, {\n          'title': '<span class=\"fw-bold\">Ok!</span>',\n          'class': 'light-danger'\n        }]\n      }]\n    });\n  };\n  return {\n    // Public Functions\n    init: function init() {\n      exampleColor();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTJKanbanDemoColor.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvamthbmJhbi9jb2xvci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBLElBQUlBLGtCQUFrQixHQUFHLFlBQVc7RUFDaEM7RUFDQSxJQUFJQyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQSxFQUFjO0lBQzFCLElBQUlDLE1BQU0sR0FBRyxJQUFJQyxPQUFPLENBQUM7TUFDckJDLE9BQU8sRUFBRSx3QkFBd0I7TUFDakNDLE1BQU0sRUFBRSxHQUFHO01BQ1hDLFVBQVUsRUFBRSxPQUFPO01BQ25CQyxNQUFNLEVBQUUsQ0FBQztRQUNELElBQUksRUFBRSxZQUFZO1FBQ2xCLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLE1BQU0sRUFBRSxDQUFDO1VBQ0QsT0FBTyxFQUFFLGtEQUFrRDtVQUMzRCxPQUFPLEVBQUU7UUFDYixDQUFDLEVBQ0Q7VUFDSSxPQUFPLEVBQUUsdUNBQXVDO1VBQ2hELE9BQU8sRUFBRTtRQUNiLENBQUM7TUFFVCxDQUFDLEVBQUU7UUFDQyxJQUFJLEVBQUUsVUFBVTtRQUNoQixPQUFPLEVBQUUsU0FBUztRQUNsQixPQUFPLEVBQUUsU0FBUztRQUNsQixNQUFNLEVBQUUsQ0FBQztVQUNELE9BQU8sRUFBRSw0Q0FBNEM7VUFDckQsT0FBTyxFQUFFO1FBQ2IsQ0FBQyxFQUNEO1VBQ0ksT0FBTyxFQUFFLG1DQUFtQztVQUM1QyxPQUFPLEVBQUU7UUFDYixDQUFDO01BRVQsQ0FBQyxFQUFFO1FBQ0MsSUFBSSxFQUFFLE9BQU87UUFDYixPQUFPLEVBQUUsTUFBTTtRQUNmLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLE1BQU0sRUFBRSxDQUFDO1VBQ0QsT0FBTyxFQUFFLHdDQUF3QztVQUNqRCxPQUFPLEVBQUU7UUFDYixDQUFDLEVBQ0Q7VUFDSSxPQUFPLEVBQUUsa0NBQWtDO1VBQzNDLE9BQU8sRUFBRTtRQUNiLENBQUM7TUFFVCxDQUFDO0lBRVQsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELE9BQU87SUFDSDtJQUNBQyxJQUFJLEVBQUUsU0FBQUEsS0FBQSxFQUFXO01BQ2JQLFlBQVksRUFBRTtJQUNsQjtFQUNKLENBQUM7QUFDTCxDQUFDLEVBQUU7O0FBRUg7QUFDQVEsTUFBTSxDQUFDQyxrQkFBa0IsQ0FBQyxZQUFXO0VBQ2pDVixrQkFBa0IsQ0FBQ1EsSUFBSSxFQUFFO0FBQzdCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9qa2FuYmFuL2NvbG9yLmpzP2IwZDQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEpLYW5iYW5EZW1vQ29sb3IgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgZXhhbXBsZUNvbG9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGthbmJhbiA9IG5ldyBqS2FuYmFuKHtcclxuICAgICAgICAgICAgZWxlbWVudDogJyNrdF9kb2NzX2prYW5iYW5fY29sb3InLFxyXG4gICAgICAgICAgICBndXR0ZXI6ICcwJyxcclxuICAgICAgICAgICAgd2lkdGhCb2FyZDogJzI1MHB4JyxcclxuICAgICAgICAgICAgYm9hcmRzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdfaW5wcm9jZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnSW4gUHJvY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3ByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgICAgICdpdGVtJzogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICc8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5Zb3UgY2FuIGRyYWcgbWUgdG9vPC9zcGFuPicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnbGlnaHQtcHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICc8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5CdXkgTWlsazwvc3Bhbj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2xpZ2h0LXByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdfd29ya2luZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ1dvcmtpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAnaXRlbSc6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+RG8gU29tZXRoaW5nITwvc3Bhbj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2xpZ2h0LXN1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+UnVuPzwvc3Bhbj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2xpZ2h0LXN1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdfZG9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0RvbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdkYW5nZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdpdGVtJzogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICc8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5BbGwgcmlnaHQ8L3NwYW4+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdsaWdodC1kYW5nZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+T2shPC9zcGFuPicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnbGlnaHQtZGFuZ2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlQ29sb3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgS1RKS2FuYmFuRGVtb0NvbG9yLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVEpLYW5iYW5EZW1vQ29sb3IiLCJleGFtcGxlQ29sb3IiLCJrYW5iYW4iLCJqS2FuYmFuIiwiZWxlbWVudCIsImd1dHRlciIsIndpZHRoQm9hcmQiLCJib2FyZHMiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/jkanban/color.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/jkanban/color.js"]();
/******/ 	
/******/ })()
;