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

/***/ "./resources/src/js/custom/apps/ecommerce/customers/details/update-profile.js":
/*!************************************************************************************!*\
  !*** ./resources/src/js/custom/apps/ecommerce/customers/details/update-profile.js ***!
  \************************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTEcommerceUpdateProfile = function () {\n  var submitButton;\n  var validator;\n  var form;\n\n  // Init form inputs\n  var handleForm = function handleForm() {\n    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n    validator = FormValidation.formValidation(form, {\n      fields: {\n        'name': {\n          validators: {\n            notEmpty: {\n              message: 'Name is required'\n            }\n          }\n        },\n        'gen_email': {\n          validators: {\n            notEmpty: {\n              message: 'General Email is required'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    });\n\n    // Action buttons\n    submitButton.addEventListener('click', function (e) {\n      e.preventDefault();\n\n      // Validate form before submit\n      if (validator) {\n        validator.validate().then(function (status) {\n          console.log('validated!');\n          if (status == 'Valid') {\n            submitButton.setAttribute('data-kt-indicator', 'on');\n\n            // Disable submit button whilst loading\n            submitButton.disabled = true;\n            setTimeout(function () {\n              submitButton.removeAttribute('data-kt-indicator');\n              Swal.fire({\n                text: \"Your profile has been saved!\",\n                icon: \"success\",\n                buttonsStyling: false,\n                confirmButtonText: \"Ok, got it!\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\"\n                }\n              }).then(function (result) {\n                if (result.isConfirmed) {\n                  // Enable submit button after loading\n                  submitButton.disabled = false;\n                }\n              });\n            }, 2000);\n          } else {\n            Swal.fire({\n              text: \"Sorry, looks like there are some errors detected, please try again.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn btn-primary\"\n              }\n            });\n          }\n        });\n      }\n    });\n  };\n  return {\n    // Public functions\n    init: function init() {\n      // Elements\n      form = document.querySelector('#kt_ecommerce_customer_profile');\n      submitButton = form.querySelector('#kt_ecommerce_customer_profile_submit');\n      handleForm();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTEcommerceUpdateProfile.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hcHBzL2Vjb21tZXJjZS9jdXN0b21lcnMvZGV0YWlscy91cGRhdGUtcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBLElBQUlBLHdCQUF3QixHQUFHLFlBQVk7RUFDdkMsSUFBSUMsWUFBWTtFQUNoQixJQUFJQyxTQUFTO0VBQ2IsSUFBSUMsSUFBSTs7RUFFUjtFQUNBLElBQUlDLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQWU7SUFDekI7SUFDTkYsU0FBUyxHQUFHRyxjQUFjLENBQUNDLGNBQWMsQ0FDeENILElBQUksRUFDSjtNQUNDSSxNQUFNLEVBQUU7UUFDUSxNQUFNLEVBQUU7VUFDdEJDLFVBQVUsRUFBRTtZQUNYQyxRQUFRLEVBQUU7Y0FDVEMsT0FBTyxFQUFFO1lBQ1Y7VUFDRDtRQUNELENBQUM7UUFDRCxXQUFXLEVBQUU7VUFDWkYsVUFBVSxFQUFFO1lBQ1hDLFFBQVEsRUFBRTtjQUNUQyxPQUFPLEVBQUU7WUFDVjtVQUNEO1FBQ0Q7TUFDRCxDQUFDO01BQ0RDLE9BQU8sRUFBRTtRQUNSQyxPQUFPLEVBQUUsSUFBSVAsY0FBYyxDQUFDTSxPQUFPLENBQUNFLE9BQU8sRUFBRTtRQUM3Q0MsU0FBUyxFQUFFLElBQUlULGNBQWMsQ0FBQ00sT0FBTyxDQUFDSSxVQUFVLENBQUM7VUFDaERDLFdBQVcsRUFBRSxTQUFTO1VBQ0pDLGVBQWUsRUFBRSxFQUFFO1VBQ25CQyxhQUFhLEVBQUU7UUFDbEMsQ0FBQztNQUNGO0lBQ0QsQ0FBQyxDQUNEOztJQUVEO0lBQ0FqQixZQUFZLENBQUNrQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVUMsQ0FBQyxFQUFFO01BQ25EQSxDQUFDLENBQUNDLGNBQWMsRUFBRTs7TUFFbEI7TUFDQSxJQUFJbkIsU0FBUyxFQUFFO1FBQ2RBLFNBQVMsQ0FBQ29CLFFBQVEsRUFBRSxDQUFDQyxJQUFJLENBQUMsVUFBVUMsTUFBTSxFQUFFO1VBQzNDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7VUFFekIsSUFBSUYsTUFBTSxJQUFJLE9BQU8sRUFBRTtZQUN0QnZCLFlBQVksQ0FBQzBCLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUM7O1lBRXBEO1lBQ0ExQixZQUFZLENBQUMyQixRQUFRLEdBQUcsSUFBSTtZQUU1QkMsVUFBVSxDQUFDLFlBQVc7Y0FDckI1QixZQUFZLENBQUM2QixlQUFlLENBQUMsbUJBQW1CLENBQUM7Y0FFakRDLElBQUksQ0FBQ0MsSUFBSSxDQUFDO2dCQUNUQyxJQUFJLEVBQUUsOEJBQThCO2dCQUNwQ0MsSUFBSSxFQUFFLFNBQVM7Z0JBQ2ZDLGNBQWMsRUFBRSxLQUFLO2dCQUNyQkMsaUJBQWlCLEVBQUUsYUFBYTtnQkFDaENDLFdBQVcsRUFBRTtrQkFDWkMsYUFBYSxFQUFFO2dCQUNoQjtjQUNELENBQUMsQ0FBQyxDQUFDZixJQUFJLENBQUMsVUFBVWdCLE1BQU0sRUFBRTtnQkFDekIsSUFBSUEsTUFBTSxDQUFDQyxXQUFXLEVBQUU7a0JBQ3ZCO2tCQUNBdkMsWUFBWSxDQUFDMkIsUUFBUSxHQUFHLEtBQUs7Z0JBQzlCO2NBQ0QsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQztVQUNULENBQUMsTUFBTTtZQUNORyxJQUFJLENBQUNDLElBQUksQ0FBQztjQUNUQyxJQUFJLEVBQUUscUVBQXFFO2NBQzNFQyxJQUFJLEVBQUUsT0FBTztjQUNiQyxjQUFjLEVBQUUsS0FBSztjQUNyQkMsaUJBQWlCLEVBQUUsYUFBYTtjQUNoQ0MsV0FBVyxFQUFFO2dCQUNaQyxhQUFhLEVBQUU7Y0FDaEI7WUFDRCxDQUFDLENBQUM7VUFDSDtRQUNELENBQUMsQ0FBQztNQUNIO0lBQ0QsQ0FBQyxDQUFDO0VBQ0EsQ0FBQztFQUVELE9BQU87SUFDSDtJQUNBRyxJQUFJLEVBQUUsU0FBQUEsS0FBQSxFQUFZO01BQ2Q7TUFDQXRDLElBQUksR0FBR3VDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdDQUFnQyxDQUFDO01BQy9EMUMsWUFBWSxHQUFHRSxJQUFJLENBQUN3QyxhQUFhLENBQUMsdUNBQXVDLENBQUM7TUFFMUV2QyxVQUFVLEVBQUU7SUFDaEI7RUFDSixDQUFDO0FBQ0wsQ0FBQyxFQUFFOztBQUVIO0FBQ0F3QyxNQUFNLENBQUNDLGtCQUFrQixDQUFDLFlBQVk7RUFDckM3Qyx3QkFBd0IsQ0FBQ3lDLElBQUksRUFBRTtBQUNoQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hcHBzL2Vjb21tZXJjZS9jdXN0b21lcnMvZGV0YWlscy91cGRhdGUtcHJvZmlsZS5qcz9lZGFkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RFY29tbWVyY2VVcGRhdGVQcm9maWxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHN1Ym1pdEJ1dHRvbjtcclxuICAgIHZhciB2YWxpZGF0b3I7XHJcbiAgICB2YXIgZm9ybTtcclxuXHJcbiAgICAvLyBJbml0IGZvcm0gaW5wdXRzXHJcbiAgICB2YXIgaGFuZGxlRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBJbml0IGZvcm0gdmFsaWRhdGlvbiBydWxlcy4gRm9yIG1vcmUgaW5mbyBjaGVjayB0aGUgRm9ybVZhbGlkYXRpb24gcGx1Z2luJ3Mgb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbjpodHRwczovL2Zvcm12YWxpZGF0aW9uLmlvL1xyXG5cdFx0dmFsaWRhdG9yID0gRm9ybVZhbGlkYXRpb24uZm9ybVZhbGlkYXRpb24oXHJcblx0XHRcdGZvcm0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6IHtcclxuXHRcdFx0XHRcdFx0dmFsaWRhdG9yczoge1xyXG5cdFx0XHRcdFx0XHRcdG5vdEVtcHR5OiB7XHJcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnTmFtZSBpcyByZXF1aXJlZCdcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQnZ2VuX2VtYWlsJzoge1xyXG5cdFx0XHRcdFx0XHR2YWxpZGF0b3JzOiB7XHJcblx0XHRcdFx0XHRcdFx0bm90RW1wdHk6IHtcclxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdHZW5lcmFsIEVtYWlsIGlzIHJlcXVpcmVkJ1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cGx1Z2luczoge1xyXG5cdFx0XHRcdFx0dHJpZ2dlcjogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuVHJpZ2dlcigpLFxyXG5cdFx0XHRcdFx0Ym9vdHN0cmFwOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5Cb290c3RyYXA1KHtcclxuXHRcdFx0XHRcdFx0cm93U2VsZWN0b3I6ICcuZnYtcm93JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlSW52YWxpZENsYXNzOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlVmFsaWRDbGFzczogJydcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHRcdC8vIEFjdGlvbiBidXR0b25zXHJcblx0XHRzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHQvLyBWYWxpZGF0ZSBmb3JtIGJlZm9yZSBzdWJtaXRcclxuXHRcdFx0aWYgKHZhbGlkYXRvcikge1xyXG5cdFx0XHRcdHZhbGlkYXRvci52YWxpZGF0ZSgpLnRoZW4oZnVuY3Rpb24gKHN0YXR1cykge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ3ZhbGlkYXRlZCEnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoc3RhdHVzID09ICdWYWxpZCcpIHtcclxuXHRcdFx0XHRcdFx0c3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1rdC1pbmRpY2F0b3InLCAnb24nKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIERpc2FibGUgc3VibWl0IGJ1dHRvbiB3aGlsc3QgbG9hZGluZ1xyXG5cdFx0XHRcdFx0XHRzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRzdWJtaXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicpO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFN3YWwuZmlyZSh7XHJcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBcIllvdXIgcHJvZmlsZSBoYXMgYmVlbiBzYXZlZCFcIixcclxuXHRcdFx0XHRcdFx0XHRcdGljb246IFwic3VjY2Vzc1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0YnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcclxuXHRcdFx0XHRcdFx0XHRcdGN1c3RvbUNsYXNzOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gRW5hYmxlIHN1Ym1pdCBidXR0b24gYWZ0ZXIgbG9hZGluZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KTtcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9LCAyMDAwKTsgICBcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFN3YWwuZmlyZSh7XHJcblx0XHRcdFx0XHRcdFx0dGV4dDogXCJTb3JyeSwgbG9va3MgbGlrZSB0aGVyZSBhcmUgc29tZSBlcnJvcnMgZGV0ZWN0ZWQsIHBsZWFzZSB0cnkgYWdhaW4uXCIsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogXCJlcnJvclwiLFxyXG5cdFx0XHRcdFx0XHRcdGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxyXG5cdFx0XHRcdFx0XHRcdGN1c3RvbUNsYXNzOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBQdWJsaWMgZnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBFbGVtZW50c1xyXG4gICAgICAgICAgICBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X2Vjb21tZXJjZV9jdXN0b21lcl9wcm9maWxlJyk7XHJcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcignI2t0X2Vjb21tZXJjZV9jdXN0b21lcl9wcm9maWxlX3N1Ym1pdCcpO1xyXG5cclxuICAgICAgICAgICAgaGFuZGxlRm9ybSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xyXG5cdEtURWNvbW1lcmNlVXBkYXRlUHJvZmlsZS5pbml0KCk7XHJcbn0pOyJdLCJuYW1lcyI6WyJLVEVjb21tZXJjZVVwZGF0ZVByb2ZpbGUiLCJzdWJtaXRCdXR0b24iLCJ2YWxpZGF0b3IiLCJmb3JtIiwiaGFuZGxlRm9ybSIsIkZvcm1WYWxpZGF0aW9uIiwiZm9ybVZhbGlkYXRpb24iLCJmaWVsZHMiLCJ2YWxpZGF0b3JzIiwibm90RW1wdHkiLCJtZXNzYWdlIiwicGx1Z2lucyIsInRyaWdnZXIiLCJUcmlnZ2VyIiwiYm9vdHN0cmFwIiwiQm9vdHN0cmFwNSIsInJvd1NlbGVjdG9yIiwiZWxlSW52YWxpZENsYXNzIiwiZWxlVmFsaWRDbGFzcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0ZSIsInRoZW4iLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwic2V0QXR0cmlidXRlIiwiZGlzYWJsZWQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQXR0cmlidXRlIiwiU3dhbCIsImZpcmUiLCJ0ZXh0IiwiaWNvbiIsImJ1dHRvbnNTdHlsaW5nIiwiY29uZmlybUJ1dHRvblRleHQiLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsImluaXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/apps/ecommerce/customers/details/update-profile.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/apps/ecommerce/customers/details/update-profile.js"]();
/******/ 	
/******/ })()
;