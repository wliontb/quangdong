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

/***/ "./resources/src/js/custom/account/settings/signin-methods.js":
/*!********************************************************************!*\
  !*** ./resources/src/js/custom/account/settings/signin-methods.js ***!
  \********************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTAccountSettingsSigninMethods = function () {\n  // Private functions\n  var initSettings = function initSettings() {\n    // UI elements\n    var signInMainEl = document.getElementById('kt_signin_email');\n    var signInEditEl = document.getElementById('kt_signin_email_edit');\n    var passwordMainEl = document.getElementById('kt_signin_password');\n    var passwordEditEl = document.getElementById('kt_signin_password_edit');\n\n    // button elements\n    var signInChangeEmail = document.getElementById('kt_signin_email_button');\n    var signInCancelEmail = document.getElementById('kt_signin_cancel');\n    var passwordChange = document.getElementById('kt_signin_password_button');\n    var passwordCancel = document.getElementById('kt_password_cancel');\n\n    // toggle UI\n    signInChangeEmail.querySelector('button').addEventListener('click', function () {\n      toggleChangeEmail();\n    });\n    signInCancelEmail.addEventListener('click', function () {\n      toggleChangeEmail();\n    });\n    passwordChange.querySelector('button').addEventListener('click', function () {\n      toggleChangePassword();\n    });\n    passwordCancel.addEventListener('click', function () {\n      toggleChangePassword();\n    });\n    var toggleChangeEmail = function toggleChangeEmail() {\n      signInMainEl.classList.toggle('d-none');\n      signInChangeEmail.classList.toggle('d-none');\n      signInEditEl.classList.toggle('d-none');\n    };\n    var toggleChangePassword = function toggleChangePassword() {\n      passwordMainEl.classList.toggle('d-none');\n      passwordChange.classList.toggle('d-none');\n      passwordEditEl.classList.toggle('d-none');\n    };\n  };\n  var handleChangeEmail = function handleChangeEmail(e) {\n    var validation;\n\n    // form elements\n    var signInForm = document.getElementById('kt_signin_change_email');\n    validation = FormValidation.formValidation(signInForm, {\n      fields: {\n        emailaddress: {\n          validators: {\n            notEmpty: {\n              message: 'Email is required'\n            },\n            emailAddress: {\n              message: 'The value is not a valid email address'\n            }\n          }\n        },\n        confirmemailpassword: {\n          validators: {\n            notEmpty: {\n              message: 'Password is required'\n            }\n          }\n        }\n      },\n      plugins: {\n        //Learn more: https://formvalidation.io/guide/plugins\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row'\n        })\n      }\n    });\n    signInForm.querySelector('#kt_signin_submit').addEventListener('click', function (e) {\n      e.preventDefault();\n      console.log('click');\n      validation.validate().then(function (status) {\n        if (status == 'Valid') {\n          swal.fire({\n            text: \"Sent password reset. Please check your email\",\n            icon: \"success\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn font-weight-bold btn-light-primary\"\n            }\n          }).then(function () {\n            signInForm.reset();\n            validation.resetForm(); // Reset formvalidation --- more info: https://formvalidation.io/guide/api/reset-form/\n          });\n        } else {\n          swal.fire({\n            text: \"Sorry, looks like there are some errors detected, please try again.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn font-weight-bold btn-light-primary\"\n            }\n          });\n        }\n      });\n    });\n  };\n  var handleChangePassword = function handleChangePassword(e) {\n    var validation;\n\n    // form elements\n    var passwordForm = document.getElementById('kt_signin_change_password');\n    validation = FormValidation.formValidation(passwordForm, {\n      fields: {\n        currentpassword: {\n          validators: {\n            notEmpty: {\n              message: 'Current Password is required'\n            }\n          }\n        },\n        newpassword: {\n          validators: {\n            notEmpty: {\n              message: 'New Password is required'\n            }\n          }\n        },\n        confirmpassword: {\n          validators: {\n            notEmpty: {\n              message: 'Confirm Password is required'\n            },\n            identical: {\n              compare: function compare() {\n                return passwordForm.querySelector('[name=\"newpassword\"]').value;\n              },\n              message: 'The password and its confirm are not the same'\n            }\n          }\n        }\n      },\n      plugins: {\n        //Learn more: https://formvalidation.io/guide/plugins\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row'\n        })\n      }\n    });\n    passwordForm.querySelector('#kt_password_submit').addEventListener('click', function (e) {\n      e.preventDefault();\n      console.log('click');\n      validation.validate().then(function (status) {\n        if (status == 'Valid') {\n          swal.fire({\n            text: \"Sent password reset. Please check your email\",\n            icon: \"success\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn font-weight-bold btn-light-primary\"\n            }\n          }).then(function () {\n            passwordForm.reset();\n            validation.resetForm(); // Reset formvalidation --- more info: https://formvalidation.io/guide/api/reset-form/\n          });\n        } else {\n          swal.fire({\n            text: \"Sorry, looks like there are some errors detected, please try again.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn font-weight-bold btn-light-primary\"\n            }\n          });\n        }\n      });\n    });\n  };\n\n  // Public methods\n  return {\n    init: function init() {\n      initSettings();\n      handleChangeEmail();\n      handleChangePassword();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTAccountSettingsSigninMethods.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hY2NvdW50L3NldHRpbmdzL3NpZ25pbi1tZXRob2RzLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0EsSUFBSUEsOEJBQThCLEdBQUcsWUFBWTtFQUM3QztFQUNBLElBQUlDLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQWU7SUFFM0I7SUFDQSxJQUFJQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGlCQUFpQixDQUFDO0lBQzdELElBQUlDLFlBQVksR0FBR0YsUUFBUSxDQUFDQyxjQUFjLENBQUMsc0JBQXNCLENBQUM7SUFDbEUsSUFBSUUsY0FBYyxHQUFHSCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQztJQUNsRSxJQUFJRyxjQUFjLEdBQUdKLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLHlCQUF5QixDQUFDOztJQUV2RTtJQUNBLElBQUlJLGlCQUFpQixHQUFHTCxRQUFRLENBQUNDLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQztJQUN6RSxJQUFJSyxpQkFBaUIsR0FBR04sUUFBUSxDQUFDQyxjQUFjLENBQUMsa0JBQWtCLENBQUM7SUFDbkUsSUFBSU0sY0FBYyxHQUFHUCxRQUFRLENBQUNDLGNBQWMsQ0FBQywyQkFBMkIsQ0FBQztJQUN6RSxJQUFJTyxjQUFjLEdBQUdSLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLG9CQUFvQixDQUFDOztJQUVsRTtJQUNBSSxpQkFBaUIsQ0FBQ0ksYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWTtNQUM1RUMsaUJBQWlCLEVBQUU7SUFDdkIsQ0FBQyxDQUFDO0lBRUZMLGlCQUFpQixDQUFDSSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWTtNQUNwREMsaUJBQWlCLEVBQUU7SUFDdkIsQ0FBQyxDQUFDO0lBRUZKLGNBQWMsQ0FBQ0UsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDQyxnQkFBZ0IsQ0FBQyxP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QUFDQyxrQkFBa0IsQ0FBQyxZQUFXO0VBQ2pDL0QsOEJBQThCLENBQUM2RCxJQUFJLEVBQUU7QUFDekMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vYWNjb3VudC9zZXR0aW5ncy9zaWduaW4tbWV0aG9kcy5qcz83NTMwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RBY2NvdW50U2V0dGluZ3NTaWduaW5NZXRob2RzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBpbml0U2V0dGluZ3MgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vIFVJIGVsZW1lbnRzXHJcbiAgICAgICAgdmFyIHNpZ25Jbk1haW5FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9zaWduaW5fZW1haWwnKTtcclxuICAgICAgICB2YXIgc2lnbkluRWRpdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X3NpZ25pbl9lbWFpbF9lZGl0Jyk7XHJcbiAgICAgICAgdmFyIHBhc3N3b3JkTWFpbkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X3NpZ25pbl9wYXNzd29yZCcpO1xyXG4gICAgICAgIHZhciBwYXNzd29yZEVkaXRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9zaWduaW5fcGFzc3dvcmRfZWRpdCcpO1xyXG5cclxuICAgICAgICAvLyBidXR0b24gZWxlbWVudHNcclxuICAgICAgICB2YXIgc2lnbkluQ2hhbmdlRW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3Rfc2lnbmluX2VtYWlsX2J1dHRvbicpO1xyXG4gICAgICAgIHZhciBzaWduSW5DYW5jZWxFbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9zaWduaW5fY2FuY2VsJyk7XHJcbiAgICAgICAgdmFyIHBhc3N3b3JkQ2hhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X3NpZ25pbl9wYXNzd29yZF9idXR0b24nKTtcclxuICAgICAgICB2YXIgcGFzc3dvcmRDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfcGFzc3dvcmRfY2FuY2VsJyk7XHJcblxyXG4gICAgICAgIC8vIHRvZ2dsZSBVSVxyXG4gICAgICAgIHNpZ25JbkNoYW5nZUVtYWlsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0b2dnbGVDaGFuZ2VFbWFpbCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzaWduSW5DYW5jZWxFbWFpbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdG9nZ2xlQ2hhbmdlRW1haWwoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcGFzc3dvcmRDaGFuZ2UucXVlcnlTZWxlY3RvcignYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZUNoYW5nZVBhc3N3b3JkKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHBhc3N3b3JkQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0b2dnbGVDaGFuZ2VQYXNzd29yZCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgdG9nZ2xlQ2hhbmdlRW1haWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNpZ25Jbk1haW5FbC5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgc2lnbkluQ2hhbmdlRW1haWwuY2xhc3NMaXN0LnRvZ2dsZSgnZC1ub25lJyk7XHJcbiAgICAgICAgICAgIHNpZ25JbkVkaXRFbC5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0b2dnbGVDaGFuZ2VQYXNzd29yZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcGFzc3dvcmRNYWluRWwuY2xhc3NMaXN0LnRvZ2dsZSgnZC1ub25lJyk7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkQ2hhbmdlLmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICBwYXNzd29yZEVkaXRFbC5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhhbmRsZUNoYW5nZUVtYWlsID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgdmFsaWRhdGlvbjtcclxuXHJcbiAgICAgICAgLy8gZm9ybSBlbGVtZW50c1xyXG4gICAgICAgIHZhciBzaWduSW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X3NpZ25pbl9jaGFuZ2VfZW1haWwnKTtcclxuXHJcbiAgICAgICAgdmFsaWRhdGlvbiA9IEZvcm1WYWxpZGF0aW9uLmZvcm1WYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICBzaWduSW5Gb3JtLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbGFkZHJlc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRW1haWwgaXMgcmVxdWlyZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxBZGRyZXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSB2YWx1ZSBpcyBub3QgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybWVtYWlscGFzc3dvcmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGFzc3dvcmQgaXMgcmVxdWlyZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHsgLy9MZWFybiBtb3JlOiBodHRwczovL2Zvcm12YWxpZGF0aW9uLmlvL2d1aWRlL3BsdWdpbnNcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5UcmlnZ2VyKCksXHJcbiAgICAgICAgICAgICAgICAgICAgYm9vdHN0cmFwOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5Cb290c3RyYXA1KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93U2VsZWN0b3I6ICcuZnYtcm93J1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBzaWduSW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoJyNrdF9zaWduaW5fc3VibWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xyXG5cclxuICAgICAgICAgICAgdmFsaWRhdGlvbi52YWxpZGF0ZSgpLnRoZW4oZnVuY3Rpb24gKHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSAnVmFsaWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJTZW50IHBhc3N3b3JkIHJlc2V0LiBQbGVhc2UgY2hlY2sgeW91ciBlbWFpbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZm9udC13ZWlnaHQtYm9sZCBidG4tbGlnaHQtcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25JbkZvcm0ucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbi5yZXNldEZvcm0oKTsgLy8gUmVzZXQgZm9ybXZhbGlkYXRpb24gLS0tIG1vcmUgaW5mbzogaHR0cHM6Ly9mb3JtdmFsaWRhdGlvbi5pby9ndWlkZS9hcGkvcmVzZXQtZm9ybS9cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJTb3JyeSwgbG9va3MgbGlrZSB0aGVyZSBhcmUgc29tZSBlcnJvcnMgZGV0ZWN0ZWQsIHBsZWFzZSB0cnkgYWdhaW4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZm9udC13ZWlnaHQtYm9sZCBidG4tbGlnaHQtcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhhbmRsZUNoYW5nZVBhc3N3b3JkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgdmFsaWRhdGlvbjtcclxuXHJcbiAgICAgICAgLy8gZm9ybSBlbGVtZW50c1xyXG4gICAgICAgIHZhciBwYXNzd29yZEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3Rfc2lnbmluX2NoYW5nZV9wYXNzd29yZCcpO1xyXG5cclxuICAgICAgICB2YWxpZGF0aW9uID0gRm9ybVZhbGlkYXRpb24uZm9ybVZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgIHBhc3N3b3JkRm9ybSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudHBhc3N3b3JkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0N1cnJlbnQgUGFzc3dvcmQgaXMgcmVxdWlyZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBuZXdwYXNzd29yZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbXB0eToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdOZXcgUGFzc3dvcmQgaXMgcmVxdWlyZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtcGFzc3dvcmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQ29uZmlybSBQYXNzd29yZCBpcyByZXF1aXJlZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZGVudGljYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYXJlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhc3N3b3JkRm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIm5ld3Bhc3N3b3JkXCJdJykudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhlIHBhc3N3b3JkIGFuZCBpdHMgY29uZmlybSBhcmUgbm90IHRoZSBzYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgcGx1Z2luczogeyAvL0xlYXJuIG1vcmU6IGh0dHBzOi8vZm9ybXZhbGlkYXRpb24uaW8vZ3VpZGUvcGx1Z2luc1xyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLlRyaWdnZXIoKSxcclxuICAgICAgICAgICAgICAgICAgICBib290c3RyYXA6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLkJvb3RzdHJhcDUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTZWxlY3RvcjogJy5mdi1yb3cnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHBhc3N3b3JkRm9ybS5xdWVyeVNlbGVjdG9yKCcja3RfcGFzc3dvcmRfc3VibWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xyXG5cclxuICAgICAgICAgICAgdmFsaWRhdGlvbi52YWxpZGF0ZSgpLnRoZW4oZnVuY3Rpb24gKHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSAnVmFsaWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJTZW50IHBhc3N3b3JkIHJlc2V0LiBQbGVhc2UgY2hlY2sgeW91ciBlbWFpbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZm9udC13ZWlnaHQtYm9sZCBidG4tbGlnaHQtcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkRm9ybS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uLnJlc2V0Rm9ybSgpOyAvLyBSZXNldCBmb3JtdmFsaWRhdGlvbiAtLS0gbW9yZSBpbmZvOiBodHRwczovL2Zvcm12YWxpZGF0aW9uLmlvL2d1aWRlL2FwaS9yZXNldC1mb3JtL1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlNvcnJ5LCBsb29rcyBsaWtlIHRoZXJlIGFyZSBzb21lIGVycm9ycyBkZXRlY3RlZCwgcGxlYXNlIHRyeSBhZ2Fpbi5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBmb250LXdlaWdodC1ib2xkIGJ0bi1saWdodC1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGluaXRTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2VFbWFpbCgpO1xyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2VQYXNzd29yZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcclxuICAgIEtUQWNjb3VudFNldHRpbmdzU2lnbmluTWV0aG9kcy5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1RBY2NvdW50U2V0dGluZ3NTaWduaW5NZXRob2RzIiwiaW5pdFNldHRpbmdzIiwic2lnbkluTWFpbkVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNpZ25JbkVkaXRFbCIsInBhc3N3b3JkTWFpbkVsIiwicGFzc3dvcmRFZGl0RWwiLCJzaWduSW5DaGFuZ2VFbWFpbCIsInNpZ25JbkNhbmNlbEVtYWlsIiwicGFzc3dvcmRDaGFuZ2UiLCJwYXNzd29yZENhbmNlbCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlQ2hhbmdlRW1haWwiLCJ0b2dnbGVDaGFuZ2VQYXNzd29yZCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImhhbmRsZUNoYW5nZUVtYWlsIiwiZSIsInZhbGlkYXRpb24iLCJzaWduSW5Gb3JtIiwiRm9ybVZhbGlkYXRpb24iLCJmb3JtVmFsaWRhdGlvbiIsImZpZWxkcyIsImVtYWlsYWRkcmVzcyIsInZhbGlkYXRvcnMiLCJub3RFbXB0eSIsIm1lc3NhZ2UiLCJlbWFpbEFkZHJlc3MiLCJjb25maXJtZW1haWxwYXNzd29yZCIsInBsdWdpbnMiLCJ0cmlnZ2VyIiwiVHJpZ2dlciIsImJvb3RzdHJhcCIsIkJvb3RzdHJhcDUiLCJyb3dTZWxlY3RvciIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInZhbGlkYXRlIiwidGhlbiIsInN0YXR1cyIsInN3YWwiLCJmaXJlIiwidGV4dCIsImljb24iLCJidXR0b25zU3R5bGluZyIsImNvbmZpcm1CdXR0b25UZXh0IiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwicmVzZXQiLCJyZXNldEZvcm0iLCJoYW5kbGVDaGFuZ2VQYXNzd29yZCIsInBhc3N3b3JkRm9ybSIsImN1cnJlbnRwYXNzd29yZCIsIm5ld3Bhc3N3b3JkIiwiY29uZmlybXBhc3N3b3JkIiwiaWRlbnRpY2FsIiwiY29tcGFyZSIsInZhbHVlIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/account/settings/signin-methods.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/account/settings/signin-methods.js"]();
/******/ 	
/******/ })()
;