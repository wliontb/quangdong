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

/***/ "./resources/src/js/custom/documentation/general/draggable/restricted.js":
/*!*******************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/draggable/restricted.js ***!
  \*******************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTDraggableRestricted = function () {\n  // Private functions\n  var exampleRestricted = function exampleRestricted() {\n    var containers = document.querySelectorAll('.draggable-zone');\n    var restrcitedWrapper = document.querySelector('[data-kt-draggable-level=\"restricted\"]');\n    if (containers.length === 0) {\n      return false;\n    }\n    var droppable = new Droppable[\"default\"](containers, {\n      draggable: '.draggable',\n      dropzone: '.draggable-zone',\n      handle: '.draggable .draggable-handle',\n      mirror: {\n        //appendTo: selector,\n        appendTo: 'body',\n        constrainDimensions: true\n      }\n    });\n\n    // Define draggable element variable for permissions level\n    var droppableOrigin;\n\n    // Handle drag start event -- more info: https://shopify.github.io/draggable/docs/class/src/Draggable/DragEvent/DragEvent.js~DragEvent.html\n    droppable.on('drag:start', function (e) {\n      droppableOrigin = e.originalSource.getAttribute('data-kt-draggable-level');\n    });\n\n    // Handle drag over event -- more info: https://shopify.github.io/draggable/docs/class/src/Draggable/DragEvent/DragEvent.js~DragOverEvent.html\n    droppable.on('drag:over', function (e) {\n      var isRestricted = e.overContainer.closest('[data-kt-draggable-level=\"restricted\"]');\n      if (isRestricted) {\n        if (droppableOrigin !== 'admin') {\n          restrcitedWrapper.classList.add('bg-light-danger');\n        } else {\n          restrcitedWrapper.classList.remove('bg-light-danger');\n        }\n      } else {\n        restrcitedWrapper.classList.remove('bg-light-danger');\n      }\n    });\n\n    // Handle drag stop event -- more info: https://shopify.github.io/draggable/docs/class/src/Draggable/DragEvent/DragEvent.js~DragStopEvent.html\n    droppable.on('drag:stop', function (e) {\n      // remove all draggable occupied limit\n      containers.forEach(function (c) {\n        c.classList.remove('draggable-dropzone--occupied');\n      });\n\n      // Remove restricted alert\n      restrcitedWrapper.classList.remove('bg-light-danger');\n    });\n\n    // Handle drop event -- https://shopify.github.io/draggable/docs/class/src/Droppable/DroppableEvent/DroppableEvent.js~DroppableDroppedEvent.html\n    droppable.on('droppable:dropped', function (e) {\n      var isRestricted = e.dropzone.closest('[data-kt-draggable-level=\"restricted\"]');\n      // Detect if drop container is restricted\n      if (isRestricted) {\n        // Check if dragged element has permission level\n        if (droppableOrigin !== 'admin') {\n          restrcitedWrapper.classList.add('bg-light-danger');\n          e.cancel();\n        }\n      }\n    });\n  };\n  return {\n    // Public Functions\n    init: function init() {\n      exampleRestricted();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTDraggableRestricted.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvZHJhZ2dhYmxlL3Jlc3RyaWN0ZWQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQSxJQUFJQSxxQkFBcUIsR0FBRyxZQUFZO0VBQ3BDO0VBQ0EsSUFBSUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBQSxFQUFlO0lBQ2hDLElBQUlDLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQztJQUM3RCxJQUFNQyxpQkFBaUIsR0FBR0YsUUFBUSxDQUFDRyxhQUFhLENBQUMsd0NBQXdDLENBQUM7SUFFMUYsSUFBSUosVUFBVSxDQUFDSyxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQ3pCLE9BQU8sS0FBSztJQUNoQjtJQUVBLElBQUlDLFNBQVMsR0FBRyxJQUFJQyxTQUFTLFdBQVEsQ0FBQ1AsVUFBVSxFQUFFO01BQzlDUSxTQUFTLEVBQUUsWUFBWTtNQUN2QkMsUUFBUSxFQUFFLGlCQUFpQjtNQUMzQkMsTUFBTSxFQUFFLDhCQUE4QjtNQUN0Q0MsTUFBTSxFQUFFO1FBQ0o7UUFDQUMsUUFBUSxFQUFFLE1BQU07UUFDaEJDLG1CQUFtQixFQUFFO01BQ3pCO0lBQ0osQ0FBQyxDQUFDOztJQUVGO0lBQ0EsSUFBSUMsZUFBZTs7SUFFbkI7SUFDQVIsU0FBUyxDQUFDUyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQUNDLENBQUMsRUFBSztNQUM5QkYsZUFBZSxHQUFHRSxDQUFDLENBQUNDLGNBQWMsQ0FBQ0MsWUFBWSxDQUFDLHlCQUF5QixDQUFDO0lBQzlFLENBQUMsQ0FBQzs7SUFFRjtJQUNBWixTQUFTLENBQUNTLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQ0MsQ0FBQyxFQUFLO01BQzdCLElBQU1HLFlBQVksR0FBR0gsQ0FBQyxDQUFDSSxhQUFhLENBQUNDLE9BQU8sQ0FBQyx3Q0FBd0MsQ0FBQztNQUN0RixJQUFJRixZQUFZLEVBQUU7UUFDZCxJQUFJTCxlQUFlLEtBQUssT0FBTyxFQUFFO1VBQzdCWCxpQkFBaUIsQ0FBQ21CLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO1FBQ3RELENBQUMsTUFBTTtVQUNIcEIsaUJBQWlCLENBQUNtQixTQUFTLENBQUNFLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztRQUN6RDtNQUNKLENBQUMsTUFBTTtRQUNIckIsaUJBQWlCLENBQUNtQixTQUFTLENBQUNFLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztNQUN6RDtJQUNKLENBQUMsQ0FBQzs7SUFFRjtJQUNBbEIsU0FBUyxDQUFDUyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUNDLENBQUMsRUFBSztNQUM3QjtNQUNBaEIsVUFBVSxDQUFDeUIsT0FBTyxDQUFDLFVBQUFDLENBQUMsRUFBSTtRQUNwQkEsQ0FBQyxDQUFDSixTQUFTLENBQUNFLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQztNQUN0RCxDQUFDLENBQUM7O01BRUY7TUFDQXJCLGlCQUFpQixDQUFDbUIsU0FBUyxDQUFDRSxNQUFNLENBQUMsaUJBQWlCLENBQUM7SUFDekQsQ0FBQyxDQUFDOztJQUVGO0lBQ0FsQixTQUFTLENBQUNTLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxVQUFDQyxDQUFDLEVBQUs7TUFDckMsSUFBTUcsWUFBWSxHQUFHSCxDQUFDLENBQUNQLFFBQVEsQ0FBQ1ksT0FBTyxDQUFDLHdDQUF3QyxDQUFDO01BQ2pGO01BQ0EsSUFBSUYsWUFBWSxFQUFFO1FBQ2Q7UUFDQSxJQUFJTCxlQUFlLEtBQUssT0FBTyxFQUFFO1VBQzdCWCxpQkFBaUIsQ0FBQ21CLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO1VBQ2xEUCxDQUFDLENBQUNXLE1BQU0sRUFBRTtRQUNkO01BQ0o7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQsT0FBTztJQUNIO0lBQ0FDLElBQUksRUFBRSxTQUFBQSxLQUFBLEVBQVk7TUFDZDdCLGlCQUFpQixFQUFFO0lBQ3ZCO0VBQ0osQ0FBQztBQUNMLENBQUMsRUFBRTs7QUFFSDtBQUNBOEIsTUFBTSxDQUFDQyxrQkFBa0IsQ0FBQyxZQUFZO0VBQ2xDaEMscUJBQXFCLENBQUM4QixJQUFJLEVBQUU7QUFDaEMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9nZW5lcmFsL2RyYWdnYWJsZS9yZXN0cmljdGVkLmpzP2Y0OTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVERyYWdnYWJsZVJlc3RyaWN0ZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG4gICAgdmFyIGV4YW1wbGVSZXN0cmljdGVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYWdnYWJsZS16b25lJyk7XHJcbiAgICAgICAgY29uc3QgcmVzdHJjaXRlZFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1kcmFnZ2FibGUtbGV2ZWw9XCJyZXN0cmljdGVkXCJdJyk7XHJcblxyXG4gICAgICAgIGlmIChjb250YWluZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZHJvcHBhYmxlID0gbmV3IERyb3BwYWJsZS5kZWZhdWx0KGNvbnRhaW5lcnMsIHtcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiAnLmRyYWdnYWJsZScsXHJcbiAgICAgICAgICAgIGRyb3B6b25lOiAnLmRyYWdnYWJsZS16b25lJyxcclxuICAgICAgICAgICAgaGFuZGxlOiAnLmRyYWdnYWJsZSAuZHJhZ2dhYmxlLWhhbmRsZScsXHJcbiAgICAgICAgICAgIG1pcnJvcjoge1xyXG4gICAgICAgICAgICAgICAgLy9hcHBlbmRUbzogc2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICBhcHBlbmRUbzogJ2JvZHknLFxyXG4gICAgICAgICAgICAgICAgY29uc3RyYWluRGltZW5zaW9uczogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIERlZmluZSBkcmFnZ2FibGUgZWxlbWVudCB2YXJpYWJsZSBmb3IgcGVybWlzc2lvbnMgbGV2ZWxcclxuICAgICAgICBsZXQgZHJvcHBhYmxlT3JpZ2luO1xyXG5cclxuICAgICAgICAvLyBIYW5kbGUgZHJhZyBzdGFydCBldmVudCAtLSBtb3JlIGluZm86IGh0dHBzOi8vc2hvcGlmeS5naXRodWIuaW8vZHJhZ2dhYmxlL2RvY3MvY2xhc3Mvc3JjL0RyYWdnYWJsZS9EcmFnRXZlbnQvRHJhZ0V2ZW50LmpzfkRyYWdFdmVudC5odG1sXHJcbiAgICAgICAgZHJvcHBhYmxlLm9uKCdkcmFnOnN0YXJ0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgZHJvcHBhYmxlT3JpZ2luID0gZS5vcmlnaW5hbFNvdXJjZS5nZXRBdHRyaWJ1dGUoJ2RhdGEta3QtZHJhZ2dhYmxlLWxldmVsJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEhhbmRsZSBkcmFnIG92ZXIgZXZlbnQgLS0gbW9yZSBpbmZvOiBodHRwczovL3Nob3BpZnkuZ2l0aHViLmlvL2RyYWdnYWJsZS9kb2NzL2NsYXNzL3NyYy9EcmFnZ2FibGUvRHJhZ0V2ZW50L0RyYWdFdmVudC5qc35EcmFnT3ZlckV2ZW50Lmh0bWxcclxuICAgICAgICBkcm9wcGFibGUub24oJ2RyYWc6b3ZlcicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzUmVzdHJpY3RlZCA9IGUub3ZlckNvbnRhaW5lci5jbG9zZXN0KCdbZGF0YS1rdC1kcmFnZ2FibGUtbGV2ZWw9XCJyZXN0cmljdGVkXCJdJyk7XHJcbiAgICAgICAgICAgIGlmIChpc1Jlc3RyaWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkcm9wcGFibGVPcmlnaW4gIT09ICdhZG1pbicpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN0cmNpdGVkV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdiZy1saWdodC1kYW5nZXInKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdHJjaXRlZFdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnYmctbGlnaHQtZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmNpdGVkV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdiZy1saWdodC1kYW5nZXInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBIYW5kbGUgZHJhZyBzdG9wIGV2ZW50IC0tIG1vcmUgaW5mbzogaHR0cHM6Ly9zaG9waWZ5LmdpdGh1Yi5pby9kcmFnZ2FibGUvZG9jcy9jbGFzcy9zcmMvRHJhZ2dhYmxlL0RyYWdFdmVudC9EcmFnRXZlbnQuanN+RHJhZ1N0b3BFdmVudC5odG1sXHJcbiAgICAgICAgZHJvcHBhYmxlLm9uKCdkcmFnOnN0b3AnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyByZW1vdmUgYWxsIGRyYWdnYWJsZSBvY2N1cGllZCBsaW1pdFxyXG4gICAgICAgICAgICBjb250YWluZXJzLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnYWJsZS1kcm9wem9uZS0tb2NjdXBpZWQnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgcmVzdHJpY3RlZCBhbGVydFxyXG4gICAgICAgICAgICByZXN0cmNpdGVkV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdiZy1saWdodC1kYW5nZXInKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gSGFuZGxlIGRyb3AgZXZlbnQgLS0gaHR0cHM6Ly9zaG9waWZ5LmdpdGh1Yi5pby9kcmFnZ2FibGUvZG9jcy9jbGFzcy9zcmMvRHJvcHBhYmxlL0Ryb3BwYWJsZUV2ZW50L0Ryb3BwYWJsZUV2ZW50LmpzfkRyb3BwYWJsZURyb3BwZWRFdmVudC5odG1sXHJcbiAgICAgICAgZHJvcHBhYmxlLm9uKCdkcm9wcGFibGU6ZHJvcHBlZCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzUmVzdHJpY3RlZCA9IGUuZHJvcHpvbmUuY2xvc2VzdCgnW2RhdGEta3QtZHJhZ2dhYmxlLWxldmVsPVwicmVzdHJpY3RlZFwiXScpO1xyXG4gICAgICAgICAgICAvLyBEZXRlY3QgaWYgZHJvcCBjb250YWluZXIgaXMgcmVzdHJpY3RlZFxyXG4gICAgICAgICAgICBpZiAoaXNSZXN0cmljdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBkcmFnZ2VkIGVsZW1lbnQgaGFzIHBlcm1pc3Npb24gbGV2ZWxcclxuICAgICAgICAgICAgICAgIGlmIChkcm9wcGFibGVPcmlnaW4gIT09ICdhZG1pbicpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN0cmNpdGVkV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdiZy1saWdodC1kYW5nZXInKTtcclxuICAgICAgICAgICAgICAgICAgICBlLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlUmVzdHJpY3RlZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgS1REcmFnZ2FibGVSZXN0cmljdGVkLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVERyYWdnYWJsZVJlc3RyaWN0ZWQiLCJleGFtcGxlUmVzdHJpY3RlZCIsImNvbnRhaW5lcnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZXN0cmNpdGVkV3JhcHBlciIsInF1ZXJ5U2VsZWN0b3IiLCJsZW5ndGgiLCJkcm9wcGFibGUiLCJEcm9wcGFibGUiLCJkcmFnZ2FibGUiLCJkcm9wem9uZSIsImhhbmRsZSIsIm1pcnJvciIsImFwcGVuZFRvIiwiY29uc3RyYWluRGltZW5zaW9ucyIsImRyb3BwYWJsZU9yaWdpbiIsIm9uIiwiZSIsIm9yaWdpbmFsU291cmNlIiwiZ2V0QXR0cmlidXRlIiwiaXNSZXN0cmljdGVkIiwib3ZlckNvbnRhaW5lciIsImNsb3Nlc3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJmb3JFYWNoIiwiYyIsImNhbmNlbCIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/draggable/restricted.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/draggable/restricted.js"]();
/******/ 	
/******/ })()
;