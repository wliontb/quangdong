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

/***/ "./resources/src/js/custom/documentation/general/jstree/ajax.js":
/*!**********************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/jstree/ajax.js ***!
  \**********************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTJSTreeAjax = function () {\n  // Private functions\n  var exampleAjax = function exampleAjax() {\n    $(\"#kt_docs_jstree_ajax\").jstree({\n      \"core\": {\n        \"themes\": {\n          \"responsive\": false\n        },\n        // so that create works\n        \"check_callback\": true,\n        'data': {\n          'url': function url(node) {\n            return 'https://preview.keenthemes.com/api/jstree/ajax_data.php'; // Demo API endpoint -- Replace this URL with your set endpoint\n          },\n\n          'data': function data(node) {\n            return {\n              'parent': node.id\n            };\n          }\n        }\n      },\n      \"types\": {\n        \"default\": {\n          \"icon\": \"fa fa-folder text-primary\"\n        },\n        \"file\": {\n          \"icon\": \"fa fa-file  text-primary\"\n        }\n      },\n      \"state\": {\n        \"key\": \"demo3\"\n      },\n      \"plugins\": [\"dnd\", \"state\", \"types\"]\n    });\n  };\n  return {\n    // Public Functions\n    init: function init() {\n      exampleAjax();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTJSTreeAjax.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvanN0cmVlL2FqYXguanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQSxJQUFJQSxZQUFZLEdBQUcsWUFBVztFQUMxQjtFQUNBLElBQUlDLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQWM7SUFDekJDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDQyxNQUFNLENBQUM7TUFDN0IsTUFBTSxFQUFFO1FBQ0osUUFBUSxFQUFFO1VBQ04sWUFBWSxFQUFFO1FBQ2xCLENBQUM7UUFDRDtRQUNBLGdCQUFnQixFQUFFLElBQUk7UUFDdEIsTUFBTSxFQUFFO1VBQ0osS0FBSyxFQUFFLFNBQUFDLElBQVNDLElBQUksRUFBRTtZQUNsQixPQUFPLHlEQUF5RCxDQUFDLENBQUM7VUFDdEUsQ0FBQzs7VUFDRCxNQUFNLEVBQUUsU0FBQUMsS0FBU0QsSUFBSSxFQUFFO1lBQ25CLE9BQU87Y0FDSCxRQUFRLEVBQUVBLElBQUksQ0FBQ0U7WUFDbkIsQ0FBQztVQUNMO1FBQ0o7TUFDSixDQUFDO01BQ0QsT0FBTyxFQUFFO1FBQ0wsU0FBUyxFQUFFO1VBQ1AsTUFBTSxFQUFFO1FBQ1osQ0FBQztRQUNELE1BQU0sRUFBRTtVQUNKLE1BQU0sRUFBRTtRQUNaO01BQ0osQ0FBQztNQUNELE9BQU8sRUFBRTtRQUNMLEtBQUssRUFBRTtNQUNYLENBQUM7TUFDRCxTQUFTLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU87SUFDdkMsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELE9BQU87SUFDSDtJQUNBQyxJQUFJLEVBQUUsU0FBQUEsS0FBQSxFQUFXO01BQ2JQLFdBQVcsRUFBRTtJQUNqQjtFQUNKLENBQUM7QUFDTCxDQUFDLEVBQUU7O0FBRUg7QUFDQVEsTUFBTSxDQUFDQyxrQkFBa0IsQ0FBQyxZQUFXO0VBQ2pDVixZQUFZLENBQUNRLElBQUksRUFBRTtBQUN2QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvanN0cmVlL2FqYXguanM/Yjg2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtUSlNUcmVlQWpheCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBleGFtcGxlQWpheCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoXCIja3RfZG9jc19qc3RyZWVfYWpheFwiKS5qc3RyZWUoe1xyXG4gICAgICAgICAgICBcImNvcmVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJ0aGVtZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwicmVzcG9uc2l2ZVwiOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIHNvIHRoYXQgY3JlYXRlIHdvcmtzXHJcbiAgICAgICAgICAgICAgICBcImNoZWNrX2NhbGxiYWNrXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAnZGF0YSc6IHtcclxuICAgICAgICAgICAgICAgICAgICAndXJsJzogZnVuY3Rpb24obm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2h0dHBzOi8vcHJldmlldy5rZWVudGhlbWVzLmNvbS9hcGkvanN0cmVlL2FqYXhfZGF0YS5waHAnOyAvLyBEZW1vIEFQSSBlbmRwb2ludCAtLSBSZXBsYWNlIHRoaXMgVVJMIHdpdGggeW91ciBzZXQgZW5kcG9pbnRcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICdkYXRhJzogZnVuY3Rpb24obm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BhcmVudCc6IG5vZGUuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwidHlwZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImljb25cIjogXCJmYSBmYS1mb2xkZXIgdGV4dC1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcImZpbGVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcImZhIGZhLWZpbGUgIHRleHQtcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic3RhdGVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJrZXlcIjogXCJkZW1vM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwicGx1Z2luc1wiOiBbXCJkbmRcIiwgXCJzdGF0ZVwiLCBcInR5cGVzXCJdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGV4YW1wbGVBamF4KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcclxuICAgIEtUSlNUcmVlQWpheC5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1RKU1RyZWVBamF4IiwiZXhhbXBsZUFqYXgiLCIkIiwianN0cmVlIiwidXJsIiwibm9kZSIsImRhdGEiLCJpZCIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/jstree/ajax.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/jstree/ajax.js"]();
/******/ 	
/******/ })()
;