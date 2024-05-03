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

/***/ "./resources/src/js/custom/utilities/modals/create-project/targets.js":
/*!****************************************************************************!*\
  !*** ./resources/src/js/custom/utilities/modals/create-project/targets.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\n// Class definition\nvar KTModalCreateProjectTargets = function () {\n  // Variables\n  var nextButton;\n  var previousButton;\n  var validator;\n  var form;\n  var stepper;\n\n  // Private functions\n  var initForm = function initForm() {\n    // Tags. For more info, please visit the official plugin site: https://yaireo.github.io/tagify/\n    var tags = new Tagify(form.querySelector('[name=\"target_tags\"]'), {\n      whitelist: [\"Important\", \"Urgent\", \"High\", \"Medium\", \"Low\"],\n      maxTags: 5,\n      dropdown: {\n        maxItems: 10,\n        // <- mixumum allowed rendered suggestions\n        enabled: 0,\n        // <- show suggestions on focus\n        closeOnSelect: false // <- do not hide the suggestions dropdown once an item has been selected\n      }\n    });\n\n    tags.on(\"change\", function () {\n      // Revalidate the field when an option is chosen\n      validator.revalidateField('tags');\n    });\n\n    // Due date. For more info, please visit the official plugin site: https://flatpickr.js.org/\n    var dueDate = $(form.querySelector('[name=\"target_due_date\"]'));\n    dueDate.flatpickr({\n      enableTime: true,\n      dateFormat: \"d, M Y, H:i\"\n    });\n\n    // Expiry year. For more info, plase visit the official plugin site: https://select2.org/\n    $(form.querySelector('[name=\"target_assign\"]')).on('change', function () {\n      // Revalidate the field when an option is chosen\n      validator.revalidateField('target_assign');\n    });\n  };\n  var initValidation = function initValidation() {\n    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n    validator = FormValidation.formValidation(form, {\n      fields: {\n        'target_title': {\n          validators: {\n            notEmpty: {\n              message: 'Target title is required'\n            }\n          }\n        },\n        'target_assign': {\n          validators: {\n            notEmpty: {\n              message: 'Customer is required'\n            }\n          }\n        },\n        'target_due_date': {\n          validators: {\n            notEmpty: {\n              message: 'Due date is required'\n            }\n          }\n        },\n        'target_tags': {\n          validators: {\n            notEmpty: {\n              message: 'Target tags are required'\n            }\n          }\n        },\n        'target_allow': {\n          validators: {\n            notEmpty: {\n              message: 'Allowing target is required'\n            }\n          }\n        },\n        'target_notifications[]': {\n          validators: {\n            notEmpty: {\n              message: 'Notifications are required'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    });\n  };\n  var handleForm = function handleForm() {\n    nextButton.addEventListener('click', function (e) {\n      // Prevent default button action\n      e.preventDefault();\n\n      // Disable button to avoid multiple click \n      nextButton.disabled = true;\n\n      // Validate form before submit\n      if (validator) {\n        validator.validate().then(function (status) {\n          console.log('validated!');\n          if (status == 'Valid') {\n            // Show loading indication\n            nextButton.setAttribute('data-kt-indicator', 'on');\n\n            // Simulate form submission\n            setTimeout(function () {\n              // Simulate form submission\n              nextButton.removeAttribute('data-kt-indicator');\n\n              // Enable button\n              nextButton.disabled = false;\n\n              // Go to next step\n              stepper.goNext();\n            }, 1500);\n          } else {\n            // Enable button\n            nextButton.disabled = false;\n\n            // Show popup warning. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n            Swal.fire({\n              text: \"Sorry, looks like there are some errors detected, please try again.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn btn-primary\"\n              }\n            });\n          }\n        });\n      }\n    });\n    previousButton.addEventListener('click', function () {\n      // Go to previous step\n      stepper.goPrevious();\n    });\n  };\n  return {\n    // Public functions\n    init: function init() {\n      form = KTModalCreateProject.getForm();\n      stepper = KTModalCreateProject.getStepperObj();\n      nextButton = KTModalCreateProject.getStepper().querySelector('[data-kt-element=\"targets-next\"]');\n      previousButton = KTModalCreateProject.getStepper().querySelector('[data-kt-element=\"targets-previous\"]');\n      initForm();\n      initValidation();\n      handleForm();\n    }\n  };\n}();\n\n// Webpack support\nif ( true && typeof module.exports !== 'undefined') {\n  window.KTModalCreateProjectTargets = module.exports = KTModalCreateProjectTargets;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS91dGlsaXRpZXMvbW9kYWxzL2NyZWF0ZS1wcm9qZWN0L3RhcmdldHMuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQSxJQUFJQSwyQkFBMkIsR0FBRyxZQUFZO0VBQzdDO0VBQ0EsSUFBSUMsVUFBVTtFQUNkLElBQUlDLGNBQWM7RUFDbEIsSUFBSUMsU0FBUztFQUNiLElBQUlDLElBQUk7RUFDUixJQUFJQyxPQUFPOztFQUVYO0VBQ0EsSUFBSUMsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBYztJQUN6QjtJQUNBLElBQUlDLElBQUksR0FBRyxJQUFJQyxNQUFNLENBQUNKLElBQUksQ0FBQ0ssYUFBYSxDQUFDLHNCQUFzQixDQUFDLEVBQUU7TUFDakVDLFNBQVMsRUFBRSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUM7TUFDM0RDLE9BQU8sRUFBRSxDQUFDO01BQ1ZDLFFBQVEsRUFBRTtRQUNUQyxRQUFRLEVBQUUsRUFBRTtRQUFZO1FBQ3hCQyxPQUFPLEVBQUUsQ0FBQztRQUFjO1FBQ3hCQyxhQUFhLEVBQUUsS0FBSyxDQUFJO01BQ3pCO0lBQ0QsQ0FBQyxDQUFDOztJQUNGUixJQUFJLENBQUNTLEVBQUUsQ0FBQyxRQUFRLEVBQUUsWUFBVTtNQUMzQjtNQUNTYixTQUFTLENBQUNjLGVBQWUsQ0FBQyxNQUFNLENBQUM7SUFDM0MsQ0FBQyxDQUFDOztJQUVGO0lBQ0EsSUFBSUMsT0FBTyxHQUFHQyxDQUFDLENBQUNmLElBQUksQ0FBQ0ssYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDL0RTLE9BQU8sQ0FBQ0UsU0FBUyxDQUFDO01BQ2pCQyxVQUFVLEVBQUUsSUFBSTtNQUNoQkMsVUFBVSxFQUFFO0lBQ2IsQ0FBQyxDQUFDOztJQUVGO0lBQ01ILENBQUMsQ0FBQ2YsSUFBSSxDQUFDSyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFD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LGNBQWMsQ0FBQ3FDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZO01BQ3BEO01BQ0FsQyxPQUFPLENBQUN1RCxVQUFVLEVBQUU7SUFDckIsQ0FBQyxDQUFDO0VBQ0gsQ0FBQztFQUVELE9BQU87SUFDTjtJQUNBQyxJQUFJLEVBQUUsU0FBQUEsS0FBQSxFQUFZO01BQ2pCekQsSUFBSSxHQUFHMEQsb0JBQW9CLENBQUNDLE9BQU8sRUFBRTtNQUNyQzFELE9BQU8sR0FBR3lELG9CQUFvQixDQUFDRSxhQUFhLEVBQUU7TUFDOUMvRCxVQUFVLEdBQUc2RCxvQkFBb0IsQ0FBQ0csVUFBVSxFQUFFLENBQUN4RCxhQUFhLENBQUMsa0NBQWtDLENBQUM7TUFDaEdQLGNBQWMsR0FBRzRELG9CQUFvQixDQUFDRyxVQUFVLEVBQUUsQ0FBQ3hELGFBQWEsQ0FBQyxzQ0FBc0MsQ0FBQztNQUV4R0gsUUFBUSxFQUFFO01BQ1ZpQixjQUFjLEVBQUU7TUFDaEJlLFVBQVUsRUFBRTtJQUNiO0VBQ0QsQ0FBQztBQUNGLENBQUMsRUFBRTs7QUFFSDtBQUNBLElBQUksS0FBNkIsSUFBSSxPQUFPNEIsTUFBTSxDQUFDQyxPQUFPLEtBQUssV0FBVyxFQUFFO0VBQzNFQyxNQUFNLENBQUNwRSwyQkFBMkIsR0FBR2tFLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHbkUsMkJBQTJCO0FBQ2xGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vdXRpbGl0aWVzL21vZGFscy9jcmVhdGUtcHJvamVjdC90YXJnZXRzLmpzP2NhNjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVE1vZGFsQ3JlYXRlUHJvamVjdFRhcmdldHMgPSBmdW5jdGlvbiAoKSB7XHJcblx0Ly8gVmFyaWFibGVzXHJcblx0dmFyIG5leHRCdXR0b247XHJcblx0dmFyIHByZXZpb3VzQnV0dG9uO1xyXG5cdHZhciB2YWxpZGF0b3I7XHJcblx0dmFyIGZvcm07XHJcblx0dmFyIHN0ZXBwZXI7XHJcblxyXG5cdC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcblx0dmFyIGluaXRGb3JtID0gZnVuY3Rpb24oKSB7XHJcblx0XHQvLyBUYWdzLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2UgdmlzaXQgdGhlIG9mZmljaWFsIHBsdWdpbiBzaXRlOiBodHRwczovL3lhaXJlby5naXRodWIuaW8vdGFnaWZ5L1xyXG5cdFx0dmFyIHRhZ3MgPSBuZXcgVGFnaWZ5KGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0YXJnZXRfdGFnc1wiXScpLCB7XHJcblx0XHRcdHdoaXRlbGlzdDogW1wiSW1wb3J0YW50XCIsIFwiVXJnZW50XCIsIFwiSGlnaFwiLCBcIk1lZGl1bVwiLCBcIkxvd1wiXSxcclxuXHRcdFx0bWF4VGFnczogNSxcclxuXHRcdFx0ZHJvcGRvd246IHtcclxuXHRcdFx0XHRtYXhJdGVtczogMTAsICAgICAgICAgICAvLyA8LSBtaXh1bXVtIGFsbG93ZWQgcmVuZGVyZWQgc3VnZ2VzdGlvbnNcclxuXHRcdFx0XHRlbmFibGVkOiAwLCAgICAgICAgICAgICAvLyA8LSBzaG93IHN1Z2dlc3Rpb25zIG9uIGZvY3VzXHJcblx0XHRcdFx0Y2xvc2VPblNlbGVjdDogZmFsc2UgICAgLy8gPC0gZG8gbm90IGhpZGUgdGhlIHN1Z2dlc3Rpb25zIGRyb3Bkb3duIG9uY2UgYW4gaXRlbSBoYXMgYmVlbiBzZWxlY3RlZFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHRhZ3Mub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKXtcclxuXHRcdFx0Ly8gUmV2YWxpZGF0ZSB0aGUgZmllbGQgd2hlbiBhbiBvcHRpb24gaXMgY2hvc2VuXHJcbiAgICAgICAgICAgIHZhbGlkYXRvci5yZXZhbGlkYXRlRmllbGQoJ3RhZ3MnKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIER1ZSBkYXRlLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2UgdmlzaXQgdGhlIG9mZmljaWFsIHBsdWdpbiBzaXRlOiBodHRwczovL2ZsYXRwaWNrci5qcy5vcmcvXHJcblx0XHR2YXIgZHVlRGF0ZSA9ICQoZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInRhcmdldF9kdWVfZGF0ZVwiXScpKTtcclxuXHRcdGR1ZURhdGUuZmxhdHBpY2tyKHtcclxuXHRcdFx0ZW5hYmxlVGltZTogdHJ1ZSxcclxuXHRcdFx0ZGF0ZUZvcm1hdDogXCJkLCBNIFksIEg6aVwiLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gRXhwaXJ5IHllYXIuIEZvciBtb3JlIGluZm8sIHBsYXNlIHZpc2l0IHRoZSBvZmZpY2lhbCBwbHVnaW4gc2l0ZTogaHR0cHM6Ly9zZWxlY3QyLm9yZy9cclxuICAgICAgICAkKGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0YXJnZXRfYXNzaWduXCJdJykpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gUmV2YWxpZGF0ZSB0aGUgZmllbGQgd2hlbiBhbiBvcHRpb24gaXMgY2hvc2VuXHJcbiAgICAgICAgICAgIHZhbGlkYXRvci5yZXZhbGlkYXRlRmllbGQoJ3RhcmdldF9hc3NpZ24nKTtcclxuICAgICAgICB9KTtcclxuXHR9XHJcblxyXG5cdHZhciBpbml0VmFsaWRhdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly8gSW5pdCBmb3JtIHZhbGlkYXRpb24gcnVsZXMuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIEZvcm1WYWxpZGF0aW9uIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246aHR0cHM6Ly9mb3JtdmFsaWRhdGlvbi5pby9cclxuXHRcdHZhbGlkYXRvciA9IEZvcm1WYWxpZGF0aW9uLmZvcm1WYWxpZGF0aW9uKFxyXG5cdFx0XHRmb3JtLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZmllbGRzOiB7XHJcblx0XHRcdFx0XHQndGFyZ2V0X3RpdGxlJzoge1xyXG5cdFx0XHRcdFx0XHR2YWxpZGF0b3JzOiB7XHJcblx0XHRcdFx0XHRcdFx0bm90RW1wdHk6IHtcclxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdUYXJnZXQgdGl0bGUgaXMgcmVxdWlyZWQnXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0J3RhcmdldF9hc3NpZ24nOiB7XHJcblx0XHRcdFx0XHRcdHZhbGlkYXRvcnM6IHtcclxuXHRcdFx0XHRcdFx0XHRub3RFbXB0eToge1xyXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ0N1c3RvbWVyIGlzIHJlcXVpcmVkJ1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdCd0YXJnZXRfZHVlX2RhdGUnOiB7XHJcblx0XHRcdFx0XHRcdHZhbGlkYXRvcnM6IHtcclxuXHRcdFx0XHRcdFx0XHRub3RFbXB0eToge1xyXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ0R1ZSBkYXRlIGlzIHJlcXVpcmVkJ1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdCd0YXJnZXRfdGFncyc6IHtcclxuXHRcdFx0XHRcdFx0dmFsaWRhdG9yczoge1xyXG5cdFx0XHRcdFx0XHRcdG5vdEVtcHR5OiB7XHJcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnVGFyZ2V0IHRhZ3MgYXJlIHJlcXVpcmVkJ1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdCd0YXJnZXRfYWxsb3cnOiB7XHJcblx0XHRcdFx0XHRcdHZhbGlkYXRvcnM6IHtcclxuXHRcdFx0XHRcdFx0XHRub3RFbXB0eToge1xyXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ0FsbG93aW5nIHRhcmdldCBpcyByZXF1aXJlZCdcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQndGFyZ2V0X25vdGlmaWNhdGlvbnNbXSc6IHtcclxuXHRcdFx0XHRcdFx0dmFsaWRhdG9yczoge1xyXG5cdFx0XHRcdFx0XHRcdG5vdEVtcHR5OiB7XHJcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnTm90aWZpY2F0aW9ucyBhcmUgcmVxdWlyZWQnXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRwbHVnaW5zOiB7XHJcblx0XHRcdFx0XHR0cmlnZ2VyOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5UcmlnZ2VyKCksXHJcblx0XHRcdFx0XHRib290c3RyYXA6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLkJvb3RzdHJhcDUoe1xyXG5cdFx0XHRcdFx0XHRyb3dTZWxlY3RvcjogJy5mdi1yb3cnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVJbnZhbGlkQ2xhc3M6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVWYWxpZENsYXNzOiAnJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHR2YXIgaGFuZGxlRm9ybSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdC8vIFByZXZlbnQgZGVmYXVsdCBidXR0b24gYWN0aW9uXHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdC8vIERpc2FibGUgYnV0dG9uIHRvIGF2b2lkIG11bHRpcGxlIGNsaWNrIFxyXG5cdFx0XHRuZXh0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcblx0XHRcdC8vIFZhbGlkYXRlIGZvcm0gYmVmb3JlIHN1Ym1pdFxyXG5cdFx0XHRpZiAodmFsaWRhdG9yKSB7XHJcblx0XHRcdFx0dmFsaWRhdG9yLnZhbGlkYXRlKCkudGhlbihmdW5jdGlvbiAoc3RhdHVzKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygndmFsaWRhdGVkIScpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChzdGF0dXMgPT0gJ1ZhbGlkJykge1xyXG5cdFx0XHRcdFx0XHQvLyBTaG93IGxvYWRpbmcgaW5kaWNhdGlvblxyXG5cdFx0XHRcdFx0XHRuZXh0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1rdC1pbmRpY2F0b3InLCAnb24nKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIFNpbXVsYXRlIGZvcm0gc3VibWlzc2lvblxyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdC8vIFNpbXVsYXRlIGZvcm0gc3VibWlzc2lvblxyXG5cdFx0XHRcdFx0XHRcdG5leHRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvLyBFbmFibGUgYnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0bmV4dEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdC8vIEdvIHRvIG5leHQgc3RlcFxyXG5cdFx0XHRcdFx0XHRcdHN0ZXBwZXIuZ29OZXh0KCk7XHJcblx0XHRcdFx0XHRcdH0sIDE1MDApOyAgIFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Ly8gRW5hYmxlIGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRuZXh0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQvLyBTaG93IHBvcHVwIHdhcm5pbmcuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246IGh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvL1xyXG5cdFx0XHRcdFx0XHRTd2FsLmZpcmUoe1xyXG5cdFx0XHRcdFx0XHRcdHRleHQ6IFwiU29ycnksIGxvb2tzIGxpa2UgdGhlcmUgYXJlIHNvbWUgZXJyb3JzIGRldGVjdGVkLCBwbGVhc2UgdHJ5IGFnYWluLlwiLFxyXG5cdFx0XHRcdFx0XHRcdGljb246IFwiZXJyb3JcIixcclxuXHRcdFx0XHRcdFx0XHRidXR0b25zU3R5bGluZzogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0Y29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcclxuXHRcdFx0XHRcdFx0XHRjdXN0b21DbGFzczoge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdH0pO1xyXG5cclxuXHRcdHByZXZpb3VzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHQvLyBHbyB0byBwcmV2aW91cyBzdGVwXHJcblx0XHRcdHN0ZXBwZXIuZ29QcmV2aW91cygpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Ly8gUHVibGljIGZ1bmN0aW9uc1xyXG5cdFx0aW5pdDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRmb3JtID0gS1RNb2RhbENyZWF0ZVByb2plY3QuZ2V0Rm9ybSgpO1xyXG5cdFx0XHRzdGVwcGVyID0gS1RNb2RhbENyZWF0ZVByb2plY3QuZ2V0U3RlcHBlck9iaigpO1xyXG5cdFx0XHRuZXh0QnV0dG9uID0gS1RNb2RhbENyZWF0ZVByb2plY3QuZ2V0U3RlcHBlcigpLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LWVsZW1lbnQ9XCJ0YXJnZXRzLW5leHRcIl0nKTtcclxuXHRcdFx0cHJldmlvdXNCdXR0b24gPSBLVE1vZGFsQ3JlYXRlUHJvamVjdC5nZXRTdGVwcGVyKCkucXVlcnlTZWxlY3RvcignW2RhdGEta3QtZWxlbWVudD1cInRhcmdldHMtcHJldmlvdXNcIl0nKTtcclxuXHJcblx0XHRcdGluaXRGb3JtKCk7XHJcblx0XHRcdGluaXRWYWxpZGF0aW9uKCk7XHJcblx0XHRcdGhhbmRsZUZvcm0oKTtcclxuXHRcdH1cclxuXHR9O1xyXG59KCk7XHJcblxyXG4vLyBXZWJwYWNrIHN1cHBvcnRcclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHR3aW5kb3cuS1RNb2RhbENyZWF0ZVByb2plY3RUYXJnZXRzID0gbW9kdWxlLmV4cG9ydHMgPSBLVE1vZGFsQ3JlYXRlUHJvamVjdFRhcmdldHM7XHJcbn0iXSwibmFtZXMiOlsiS1RNb2RhbENyZWF0ZVByb2plY3RUYXJnZXRzIiwibmV4dEJ1dHRvbiIsInByZXZpb3VzQnV0dG9uIiwidmFsaWRhdG9yIiwiZm9ybSIsInN0ZXBwZXIiLCJpbml0Rm9ybSIsInRhZ3MiLCJUYWdpZnkiLCJxdWVyeVNlbGVjdG9yIiwid2hpdGVsaXN0IiwibWF4VGFncyIsImRyb3Bkb3duIiwibWF4SXRlbXMiLCJlbmFibGVkIiwiY2xvc2VPblNlbGVjdCIsIm9uIiwicmV2YWxpZGF0ZUZpZWxkIiwiZHVlRGF0ZSIsIiQiLCJmbGF0cGlja3IiLCJlbmFibGVUaW1lIiwiZGF0ZUZvcm1hdCIsImluaXRWYWxpZGF0aW9uIiwiRm9ybVZhbGlkYXRpb24iLCJmb3JtVmFsaWRhdGlvbiIsImZpZWxkcyIsInZhbGlkYXRvcnMiLCJub3RFbXB0eSIsIm1lc3NhZ2UiLCJwbHVnaW5zIiwidHJpZ2dlciIsIlRyaWdnZXIiLCJib290c3RyYXAiLCJCb290c3RyYXA1Iiwicm93U2VsZWN0b3IiLCJlbGVJbnZhbGlkQ2xhc3MiLCJlbGVWYWxpZENsYXNzIiwiaGFuZGxlRm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJkaXNhYmxlZCIsInZhbGlkYXRlIiwidGhlbiIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJzZXRBdHRyaWJ1dGUiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQXR0cmlidXRlIiwiZ29OZXh0IiwiU3dhbCIsImZpcmUiLCJ0ZXh0IiwiaWNvbiIsImJ1dHRvbnNTdHlsaW5nIiwiY29uZmlybUJ1dHRvblRleHQiLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJnb1ByZXZpb3VzIiwiaW5pdCIsIktUTW9kYWxDcmVhdGVQcm9qZWN0IiwiZ2V0Rm9ybSIsImdldFN0ZXBwZXJPYmoiLCJnZXRTdGVwcGVyIiwibW9kdWxlIiwiZXhwb3J0cyIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/utilities/modals/create-project/targets.js\n");

/***/ })

/******/ 	});
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
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/src/js/custom/utilities/modals/create-project/targets.js");
/******/ 	
/******/ })()
;