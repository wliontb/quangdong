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

/***/ "./resources/src/js/custom/documentation/general/jstree/contextual.js":
/*!****************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/jstree/contextual.js ***!
  \****************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTJSTreeContextual = function () {\n  // Private functions\n  var exampleContextual = function exampleContextual() {\n    $(\"#kt_docs_jstree_contextual\").jstree({\n      \"core\": {\n        \"themes\": {\n          \"responsive\": false\n        },\n        // so that create works\n        \"check_callback\": true,\n        'data': [{\n          \"text\": \"Parent Node\",\n          \"children\": [{\n            \"text\": \"Initially selected\",\n            \"state\": {\n              \"selected\": true\n            }\n          }, {\n            \"text\": \"Custom Icon\",\n            \"icon\": \"flaticon2-hourglass-1 text-danger\"\n          }, {\n            \"text\": \"Initially open\",\n            \"icon\": \"fa fa-folder text-success\",\n            \"state\": {\n              \"opened\": true\n            },\n            \"children\": [{\n              \"text\": \"Another node\",\n              \"icon\": \"fa fa-file text-waring\"\n            }]\n          }, {\n            \"text\": \"Another Custom Icon\",\n            \"icon\": \"flaticon2-drop text-waring\"\n          }, {\n            \"text\": \"Disabled Node\",\n            \"icon\": \"fa fa-check text-success\",\n            \"state\": {\n              \"disabled\": true\n            }\n          }, {\n            \"text\": \"Sub Nodes\",\n            \"icon\": \"fa fa-folder text-danger\",\n            \"children\": [{\n              \"text\": \"Item 1\",\n              \"icon\": \"fa fa-file text-waring\"\n            }, {\n              \"text\": \"Item 2\",\n              \"icon\": \"fa fa-file text-success\"\n            }, {\n              \"text\": \"Item 3\",\n              \"icon\": \"fa fa-file text-default\"\n            }, {\n              \"text\": \"Item 4\",\n              \"icon\": \"fa fa-file text-danger\"\n            }, {\n              \"text\": \"Item 5\",\n              \"icon\": \"fa fa-file text-info\"\n            }]\n          }]\n        }, \"Another Node\"]\n      },\n      \"types\": {\n        \"default\": {\n          \"icon\": \"fa fa-folder text-primary\"\n        },\n        \"file\": {\n          \"icon\": \"fa fa-file  text-primary\"\n        }\n      },\n      \"state\": {\n        \"key\": \"demo2\"\n      },\n      \"plugins\": [\"contextmenu\", \"state\", \"types\"]\n    });\n  };\n  return {\n    // Public Functions\n    init: function init() {\n      exampleContextual();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTJSTreeContextual.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvanN0cmVlL2NvbnRleHR1YWwuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQSxJQUFJQSxrQkFBa0IsR0FBRyxZQUFXO0VBQ2hDO0VBQ0EsSUFBSUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBQSxFQUFjO0lBQy9CQyxDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDO01BQ25DLE1BQU0sRUFBRztRQUNMLFFBQVEsRUFBRztVQUNQLFlBQVksRUFBRTtRQUNsQixDQUFDO1FBQ0Q7UUFDQSxnQkFBZ0IsRUFBRyxJQUFJO1FBQ3ZCLE1BQU0sRUFBRSxDQUFDO1VBQ0QsTUFBTSxFQUFFLGFBQWE7VUFDckIsVUFBVSxFQUFFLENBQUM7WUFDVCxNQUFNLEVBQUUsb0JBQW9CO1lBQzVCLE9BQU8sRUFBRTtjQUNMLFVBQVUsRUFBRTtZQUNoQjtVQUNKLENBQUMsRUFBRTtZQUNDLE1BQU0sRUFBRSxhQUFhO1lBQ3JCLE1BQU0sRUFBRTtVQUNaLENBQUMsRUFBRTtZQUNDLE1BQU0sRUFBRSxnQkFBZ0I7WUFDeEIsTUFBTSxFQUFHLDJCQUEyQjtZQUNwQyxPQUFPLEVBQUU7Y0FDTCxRQUFRLEVBQUU7WUFDZCxDQUFDO1lBQ0QsVUFBVSxFQUFFLENBQ1I7Y0FBQyxNQUFNLEVBQUUsY0FBYztjQUFFLE1BQU0sRUFBRztZQUF3QixDQUFDO1VBRW5FLENBQUMsRUFBRTtZQUNDLE1BQU0sRUFBRSxxQkFBcUI7WUFDN0IsTUFBTSxFQUFFO1VBQ1osQ0FBQyxFQUFFO1lBQ0MsTUFBTSxFQUFFLGVBQWU7WUFDdkIsTUFBTSxFQUFFLDBCQUEwQjtZQUNsQyxPQUFPLEVBQUU7Y0FDTCxVQUFVLEVBQUU7WUFDaEI7VUFDSixDQUFDLEVBQUU7WUFDQyxNQUFNLEVBQUUsV0FBVztZQUNuQixNQUFNLEVBQUUsMEJBQTBCO1lBQ2xDLFVBQVUsRUFBRSxDQUNSO2NBQUMsTUFBTSxFQUFFLFFBQVE7Y0FBRSxNQUFNLEVBQUc7WUFBd0IsQ0FBQyxFQUNyRDtjQUFDLE1BQU0sRUFBRSxRQUFRO2NBQUUsTUFBTSxFQUFHO1lBQXlCLENBQUMsRUFDdEQ7Y0FBQyxNQUFNLEVBQUUsUUFBUTtjQUFFLE1BQU0sRUFBRztZQUF5QixDQUFDLEVBQ3REO2NBQUMsTUFBTSxFQUFFLFFBQVE7Y0FBRSxNQUFNLEVBQUc7WUFBd0IsQ0FBQyxFQUNyRDtjQUFDLE1BQU0sRUFBRSxRQUFRO2NBQUUsTUFBTSxFQUFHO1lBQXNCLENBQUM7VUFFM0QsQ0FBQztRQUNMLENBQUMsRUFDRCxjQUFjO01BRXRCLENBQUM7TUFDRCxPQUFPLEVBQUc7UUFDTixTQUFTLEVBQUc7VUFDUixNQUFNLEVBQUc7UUFDYixDQUFDO1FBQ0QsTUFBTSxFQUFHO1VBQ0wsTUFBTSxFQUFHO1FBQ2I7TUFDSixDQUFDO01BQ0QsT0FBTyxFQUFHO1FBQUUsS0FBSyxFQUFHO01BQVEsQ0FBQztNQUM3QixTQUFTLEVBQUcsQ0FBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE9BQU87SUFDakQsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELE9BQU87SUFDSDtJQUNBQyxJQUFJLEVBQUUsU0FBQUEsS0FBQSxFQUFXO01BQ2JILGlCQUFpQixFQUFFO0lBQ3ZCO0VBQ0osQ0FBQztBQUNMLENBQUMsRUFBRTs7QUFFSDtBQUNBSSxNQUFNLENBQUNDLGtCQUFrQixDQUFDLFlBQVc7RUFDakNOLGtCQUFrQixDQUFDSSxJQUFJLEVBQUU7QUFDN0IsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9nZW5lcmFsL2pzdHJlZS9jb250ZXh0dWFsLmpzPzU0NTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEpTVHJlZUNvbnRleHR1YWwgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgZXhhbXBsZUNvbnRleHR1YWwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKFwiI2t0X2RvY3NfanN0cmVlX2NvbnRleHR1YWxcIikuanN0cmVlKHtcclxuICAgICAgICAgICAgXCJjb3JlXCIgOiB7XHJcbiAgICAgICAgICAgICAgICBcInRoZW1lc1wiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwicmVzcG9uc2l2ZVwiOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIHNvIHRoYXQgY3JlYXRlIHdvcmtzXHJcbiAgICAgICAgICAgICAgICBcImNoZWNrX2NhbGxiYWNrXCIgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgJ2RhdGEnOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJQYXJlbnQgTm9kZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJJbml0aWFsbHkgc2VsZWN0ZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWRcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJDdXN0b20gSWNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uXCI6IFwiZmxhdGljb24yLWhvdXJnbGFzcy0xIHRleHQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiSW5pdGlhbGx5IG9wZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvblwiIDogXCJmYSBmYS1mb2xkZXIgdGV4dC1zdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wZW5lZFwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkFub3RoZXIgbm9kZVwiLCBcImljb25cIiA6IFwiZmEgZmEtZmlsZSB0ZXh0LXdhcmluZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJBbm90aGVyIEN1c3RvbSBJY29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb25cIjogXCJmbGF0aWNvbjItZHJvcCB0ZXh0LXdhcmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkRpc2FibGVkIE5vZGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcImZhIGZhLWNoZWNrIHRleHQtc3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXNhYmxlZFwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlN1YiBOb2Rlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uXCI6IFwiZmEgZmEtZm9sZGVyIHRleHQtZGFuZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiSXRlbSAxXCIsIFwiaWNvblwiIDogXCJmYSBmYS1maWxlIHRleHQtd2FyaW5nXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJJdGVtIDJcIiwgXCJpY29uXCIgOiBcImZhIGZhLWZpbGUgdGV4dC1zdWNjZXNzXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJJdGVtIDNcIiwgXCJpY29uXCIgOiBcImZhIGZhLWZpbGUgdGV4dC1kZWZhdWx0XCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJJdGVtIDRcIiwgXCJpY29uXCIgOiBcImZhIGZhLWZpbGUgdGV4dC1kYW5nZXJcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkl0ZW0gNVwiLCBcImljb25cIiA6IFwiZmEgZmEtZmlsZSB0ZXh0LWluZm9cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQW5vdGhlciBOb2RlXCJcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ0eXBlc1wiIDoge1xyXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpY29uXCIgOiBcImZhIGZhLWZvbGRlciB0ZXh0LXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiZmlsZVwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWNvblwiIDogXCJmYSBmYS1maWxlICB0ZXh0LXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInN0YXRlXCIgOiB7IFwia2V5XCIgOiBcImRlbW8yXCIgfSxcclxuICAgICAgICAgICAgXCJwbHVnaW5zXCIgOiBbIFwiY29udGV4dG1lbnVcIiwgXCJzdGF0ZVwiLCBcInR5cGVzXCIgXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlQ29udGV4dHVhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XHJcbiAgICBLVEpTVHJlZUNvbnRleHR1YWwuaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktUSlNUcmVlQ29udGV4dHVhbCIsImV4YW1wbGVDb250ZXh0dWFsIiwiJCIsImpzdHJlZSIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/jstree/contextual.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/jstree/contextual.js"]();
/******/ 	
/******/ })()
;