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

/***/ "./resources/src/js/custom/documentation/general/search/basic.js":
/*!***********************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/search/basic.js ***!
  \***********************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTGeneralSearchBasicDemos = function () {\n  // Private variables\n  var element;\n  var suggestionsElement;\n  var resultsElement;\n  var wrapperElement;\n  var emptyElement;\n  var searchObject;\n  var modal;\n\n  // Private functions\n  var processs = function processs(search) {\n    var timeout = setTimeout(function () {\n      var number = KTUtil.getRandomInt(1, 6);\n\n      // Hide recently viewed\n      suggestionsElement.classList.add('d-none');\n      if (number === 3) {\n        // Hide results\n        resultsElement.classList.add('d-none');\n        // Show empty message \n        emptyElement.classList.remove('d-none');\n      } else {\n        // Show results\n        resultsElement.classList.remove('d-none');\n        // Hide empty message \n        emptyElement.classList.add('d-none');\n      }\n\n      // Complete search\n      search.complete();\n    }, 1500);\n  };\n  var clear = function clear(search) {\n    // Show recently viewed\n    suggestionsElement.classList.remove('d-none');\n    // Hide results\n    resultsElement.classList.add('d-none');\n    // Hide empty message \n    emptyElement.classList.add('d-none');\n  };\n\n  // Public methods\n  return {\n    init: function init() {\n      // Elements\n      element = document.querySelector('#kt_docs_search_handler_basic');\n      if (!element) {\n        return;\n      }\n      wrapperElement = element.querySelector('[data-kt-search-element=\"wrapper\"]');\n      suggestionsElement = element.querySelector('[data-kt-search-element=\"suggestions\"]');\n      resultsElement = element.querySelector('[data-kt-search-element=\"results\"]');\n      emptyElement = element.querySelector('[data-kt-search-element=\"empty\"]');\n\n      // Initialize search handler\n      searchObject = new KTSearch(element);\n\n      // Search handler\n      searchObject.on('kt.search.process', processs);\n\n      // Clear handler\n      searchObject.on('kt.search.clear', clear);\n\n      // Handle select\n      KTUtil.on(element, '[data-kt-search-element=\"customer\"]', 'click', function () {\n        //modal.hide();\n      });\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTGeneralSearchBasicDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvc2VhcmNoL2Jhc2ljLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0EsSUFBSUEseUJBQXlCLEdBQUcsWUFBVztFQUN2QztFQUNBLElBQUlDLE9BQU87RUFDWCxJQUFJQyxrQkFBa0I7RUFDdEIsSUFBSUMsY0FBYztFQUNsQixJQUFJQyxjQUFjO0VBQ2xCLElBQUlDLFlBQVk7RUFDaEIsSUFBSUMsWUFBWTtFQUVoQixJQUFJQyxLQUFLOztFQUVUO0VBQ0EsSUFBSUMsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQVlDLE1BQU0sRUFBRTtJQUM1QixJQUFJQyxPQUFPLEdBQUdDLFVBQVUsQ0FBQyxZQUFXO01BQ2hDLElBQUlDLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7TUFFdEM7TUFDQVosa0JBQWtCLENBQUNhLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztNQUUxQyxJQUFJSixNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ2Q7UUFDQVQsY0FBYyxDQUFDWSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFDdEM7UUFDQVgsWUFBWSxDQUFDVSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDM0MsQ0FBQyxNQUFNO1FBQ0g7UUFDQWQsY0FBYyxDQUFDWSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDekM7UUFDQVosWUFBWSxDQUFDVSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7TUFDeEM7O01BRUE7TUFDQVAsTUFBTSxDQUFDUyxRQUFRLEVBQUU7SUFDckIsQ0FBQyxFQUFFLElBQUksQ0FBQztFQUNaLENBQUM7RUFFRCxJQUFJQyxLQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBWVYsTUFBTSxFQUFFO0lBQ3pCO0lBQ0FQLGtCQUFrQixDQUFDYSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDN0M7SUFDQWQsY0FBYyxDQUFDWSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDdEM7SUFDQVgsWUFBWSxDQUFDVSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFDeEMsQ0FBQzs7RUFFRDtFQUNILE9BQU87SUFDTkksSUFBSSxFQUFFLFNBQUFBLEtBQUEsRUFBVztNQUNQO01BQ0FuQixPQUFPLEdBQUdvQixRQUFRLENBQUNDLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQztNQUVqRSxJQUFJLENBQUNyQixPQUFPLEVBQUU7UUFDVjtNQUNKO01BRUFHLGNBQWMsR0FBR0gsT0FBTyxDQUFDcUIsYUFBYSxDQUFDLG9DQUFvQyxDQUFDO01BQzVFcEIsa0JBQWtCLEdBQUdELE9BQU8sQ0FBQ3FCLGFBQWEsQ0FBQyx3Q0FBd0MsQ0FBQztNQUNwRm5CLGNBQWMsR0FBR0YsT0FBTyxDQUFDcUIsYUFBYSxDQUFDLG9DQUFvQyxDQUFDO01BQzVFakIsWUFBWSxHQUFHSixPQUFPLENBQUNxQixhQUFhLENBQUMsa0NBQWtDLENBQUM7O01BRXhFO01BQ0FoQixZQUFZLEdBQUcsSUFBSWlCLFFBQVEsQ0FBQ3RCLE9BQU8sQ0FBQzs7TUFFcEM7TUFDQUssWUFBWSxDQUFDa0IsRUFBRSxDQUFDLG1CQUFtQixFQUFFaEIsUUFBUSxDQUFDOztNQUU5QztNQUNBRixZQUFZLENBQUNrQixFQUFFLENBQUMsaUJBQWlCLEVBQUVMLEtBQUssQ0FBQzs7TUFFekM7TUFDQU4sTUFBTSxDQUFDVyxFQUFFLENBQUN2QixPQUFPLEVBQUUscUNBQXFDLEVBQUUsT0FBTyxFQUFFLFlBQVc7UUFDMUU7TUFBQSxDQUNILENBQUM7SUFDWjtFQUNELENBQUM7QUFDRixDQUFDLEVBQUU7O0FBRUg7QUFDQVksTUFBTSxDQUFDWSxrQkFBa0IsQ0FBQyxZQUFZO0VBQ2xDekIseUJBQXlCLENBQUNvQixJQUFJLEVBQUU7QUFDcEMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9nZW5lcmFsL3NlYXJjaC9iYXNpYy5qcz80MjY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RHZW5lcmFsU2VhcmNoQmFzaWNEZW1vcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gUHJpdmF0ZSB2YXJpYWJsZXNcclxuICAgIHZhciBlbGVtZW50O1xyXG4gICAgdmFyIHN1Z2dlc3Rpb25zRWxlbWVudDtcclxuICAgIHZhciByZXN1bHRzRWxlbWVudDtcclxuICAgIHZhciB3cmFwcGVyRWxlbWVudDtcclxuICAgIHZhciBlbXB0eUVsZW1lbnQ7XHJcbiAgICB2YXIgc2VhcmNoT2JqZWN0O1xyXG4gICAgXHJcbiAgICB2YXIgbW9kYWw7XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBwcm9jZXNzcyA9IGZ1bmN0aW9uKHNlYXJjaCkge1xyXG4gICAgICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIG51bWJlciA9IEtUVXRpbC5nZXRSYW5kb21JbnQoMSwgNik7XHJcblxyXG4gICAgICAgICAgICAvLyBIaWRlIHJlY2VudGx5IHZpZXdlZFxyXG4gICAgICAgICAgICBzdWdnZXN0aW9uc0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAobnVtYmVyID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBIaWRlIHJlc3VsdHNcclxuICAgICAgICAgICAgICAgIHJlc3VsdHNFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgLy8gU2hvdyBlbXB0eSBtZXNzYWdlIFxyXG4gICAgICAgICAgICAgICAgZW1wdHlFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gU2hvdyByZXN1bHRzXHJcbiAgICAgICAgICAgICAgICByZXN1bHRzRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgIC8vIEhpZGUgZW1wdHkgbWVzc2FnZSBcclxuICAgICAgICAgICAgICAgIGVtcHR5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgLy8gQ29tcGxldGUgc2VhcmNoXHJcbiAgICAgICAgICAgIHNlYXJjaC5jb21wbGV0ZSgpO1xyXG4gICAgICAgIH0sIDE1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjbGVhciA9IGZ1bmN0aW9uKHNlYXJjaCkge1xyXG4gICAgICAgIC8vIFNob3cgcmVjZW50bHkgdmlld2VkXHJcbiAgICAgICAgc3VnZ2VzdGlvbnNFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICAgIC8vIEhpZGUgcmVzdWx0c1xyXG4gICAgICAgIHJlc3VsdHNFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICAgIC8vIEhpZGUgZW1wdHkgbWVzc2FnZSBcclxuICAgICAgICBlbXB0eUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIC8vIFB1YmxpYyBtZXRob2RzXHJcblx0cmV0dXJuIHtcclxuXHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvLyBFbGVtZW50c1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X2RvY3Nfc2VhcmNoX2hhbmRsZXJfYmFzaWMnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB3cmFwcGVyRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3Qtc2VhcmNoLWVsZW1lbnQ9XCJ3cmFwcGVyXCJdJyk7XHJcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25zRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3Qtc2VhcmNoLWVsZW1lbnQ9XCJzdWdnZXN0aW9uc1wiXScpO1xyXG4gICAgICAgICAgICByZXN1bHRzRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3Qtc2VhcmNoLWVsZW1lbnQ9XCJyZXN1bHRzXCJdJyk7XHJcbiAgICAgICAgICAgIGVtcHR5RWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3Qtc2VhcmNoLWVsZW1lbnQ9XCJlbXB0eVwiXScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBzZWFyY2ggaGFuZGxlclxyXG4gICAgICAgICAgICBzZWFyY2hPYmplY3QgPSBuZXcgS1RTZWFyY2goZWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAvLyBTZWFyY2ggaGFuZGxlclxyXG4gICAgICAgICAgICBzZWFyY2hPYmplY3Qub24oJ2t0LnNlYXJjaC5wcm9jZXNzJywgcHJvY2Vzc3MpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2xlYXIgaGFuZGxlclxyXG4gICAgICAgICAgICBzZWFyY2hPYmplY3Qub24oJ2t0LnNlYXJjaC5jbGVhcicsIGNsZWFyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBzZWxlY3RcclxuICAgICAgICAgICAgS1RVdGlsLm9uKGVsZW1lbnQsICdbZGF0YS1rdC1zZWFyY2gtZWxlbWVudD1cImN1c3RvbWVyXCJdJywgJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAvL21vZGFsLmhpZGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcblx0XHR9XHJcblx0fTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICBLVEdlbmVyYWxTZWFyY2hCYXNpY0RlbW9zLmluaXQoKTtcclxufSk7Il0sIm5hbWVzIjpbIktUR2VuZXJhbFNlYXJjaEJhc2ljRGVtb3MiLCJlbGVtZW50Iiwic3VnZ2VzdGlvbnNFbGVtZW50IiwicmVzdWx0c0VsZW1lbnQiLCJ3cmFwcGVyRWxlbWVudCIsImVtcHR5RWxlbWVudCIsInNlYXJjaE9iamVjdCIsIm1vZGFsIiwicHJvY2Vzc3MiLCJzZWFyY2giLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsIm51bWJlciIsIktUVXRpbCIsImdldFJhbmRvbUludCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImNvbXBsZXRlIiwiY2xlYXIiLCJpbml0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiS1RTZWFyY2giLCJvbiIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/search/basic.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/search/basic.js"]();
/******/ 	
/******/ })()
;