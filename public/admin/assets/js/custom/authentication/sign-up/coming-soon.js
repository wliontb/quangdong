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

/***/ "./resources/src/js/custom/authentication/sign-up/coming-soon.js":
/*!***********************************************************************!*\
  !*** ./resources/src/js/custom/authentication/sign-up/coming-soon.js ***!
  \***********************************************************************/
/***/ (() => {

eval("\n\n// Class Definition\nvar KTSignupComingSoon = function () {\n  // Elements\n  var form;\n  var submitButton;\n  var validator;\n  var counterDays;\n  var counterHours;\n  var counterMinutes;\n  var counterSeconds;\n  var handleForm = function handleForm(e) {\n    var validation;\n\n    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n    validator = FormValidation.formValidation(form, {\n      fields: {\n        'email': {\n          validators: {\n            notEmpty: {\n              message: 'Email address is required'\n            },\n            emailAddress: {\n              message: 'The value is not a valid email address'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    });\n    submitButton.addEventListener('click', function (e) {\n      e.preventDefault();\n\n      // Validate form\n      validator.validate().then(function (status) {\n        if (status == 'Valid') {\n          // Show loading indication\n          submitButton.setAttribute('data-kt-indicator', 'on');\n\n          // Disable button to avoid multiple click \n          submitButton.disabled = true;\n\n          // Simulate ajax request\n          setTimeout(function () {\n            // Hide loading indication\n            submitButton.removeAttribute('data-kt-indicator');\n\n            // Enable button\n            submitButton.disabled = false;\n\n            // Show message popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n            Swal.fire({\n              text: \"You have successfully subscribed !\",\n              icon: \"success\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn btn-primary\"\n              }\n            }).then(function (result) {\n              if (result.isConfirmed) {\n                form.querySelector('[name=\"email\"]').value = \"\";\n                //form.submit();\n              }\n            });\n          }, 2000);\n        } else {\n          // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n          Swal.fire({\n            text: \"Sorry, looks like there are some errors detected, please try again.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\"\n            }\n          });\n        }\n      });\n    });\n  };\n  var initCounter = function initCounter() {\n    // Set the date we're counting down to\n    var currentTime = new Date();\n    var countDownDate = new Date(currentTime.getTime() + 1000 * 60 * 60 * 24 * 15 + 1000 * 60 * 60 * 10 + 1000 * 60 * 15).getTime();\n    var count = function count() {\n      // Get todays date and time\n      var now = new Date().getTime();\n\n      // Find the distance between now an the count down date\n      var distance = countDownDate - now;\n\n      // Time calculations for days, hours, minutes and seconds\n      var days = Math.floor(distance / (1000 * 60 * 60 * 24));\n      var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n      var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));\n      var seconds = Math.floor(distance % (1000 * 60) / 1000);\n\n      // Display the result\n      counterDays.innerHTML = days;\n      counterHours.innerHTML = hours;\n      counterMinutes.innerHTML = minutes;\n      counterSeconds.innerHTML = seconds;\n    };\n\n    // Update the count down every 1 second\n    var x = setInterval(count, 1000);\n\n    // Initial count\n    count();\n  };\n\n  // Public Functions\n  return {\n    // public functions\n    init: function init() {\n      form = document.querySelector('#kt_coming_soon_form');\n      submitButton = document.querySelector('#kt_coming_soon_submit');\n      counterDays = document.querySelector('#kt_coming_soon_counter_days');\n      counterHours = document.querySelector('#kt_coming_soon_counter_hours');\n      counterMinutes = document.querySelector('#kt_coming_soon_counter_minutes');\n      counterSeconds = document.querySelector('#kt_coming_soon_counter_seconds');\n      handleForm();\n      initCounter();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTSignupComingSoon.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hdXRoZW50aWNhdGlvbi9zaWduLXVwL2NvbWluZy1zb29uLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0EsSUFBSUEsa0JBQWtCLEdBQUcsWUFBVztFQUNoQztFQUNBLElBQUlDLElBQUk7RUFDUixJQUFJQyxZQUFZO0VBQ25CLElBQUlDLFNBQVM7RUFFVixJQUFJQyxXQUFXO0VBQ2YsSUFBSUMsWUFBWTtFQUNoQixJQUFJQyxjQUFjO0VBQ2xCLElBQUlDLGNBQWM7RUFFbEIsSUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQVlDLENBQUMsRUFBRTtJQUN6QixJQUFJQyxVQUFVOztJQUVkO0lBQ0FQLFNBQVMsR0FBR1EsY0FBYyxDQUFDQyxjQUFjLENBQzlDWCxJQUFJLEVBQ0o7TUFDQ1ksTUFBTSxFQUFFO1FBQ1AsT0FBTyxFQUFFO1VBQ1VDLFVBQVUsRUFBRTtZQUM3QkMsUUFBUSxFQUFFO2NBQ1RDLE9BQU8sRUFBRTtZQUNWLENBQUM7WUFDb0JDLFlBQVksRUFBRTtjQUNsQ0QsT0FBTyxFQUFFO1lBQ1Y7VUFDRDtRQUNEO01BQ0QsQ0FBQztNQUNERSxPQUFPLEVBQUU7UUFDUkMsT0FBTyxFQUFFLElBQUlSLGNBQWMsQ0FBQ08sT0FBTyxDQUFDRSxPQUFPLEVBQUU7UUFDN0NDLFNBQVMsRUFBRSxJQUFJVixjQUFjLENBQUNPLE9BQU8sQ0FBQ0ksVUFBVSxDQUFDO1VBQzlCQyxXQUFXLEVBQUUsU0FBUztVQUN0QkMsZUFBZSxFQUFFLEVBQUU7VUFDbkJDLGFBQWEsRUFBRTtRQUNuQixDQUFDO01BQ2pCO0lBQ0QsQ0FBQyxDQUNEO0lBRUt2QixZQUFZLENBQUN3QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVWpCLENBQUMsRUFBRTtNQUNoREEsQ0FBQyxDQUFDa0IsY0FBYyxFQUFFOztNQUVsQjtNQUNBeEIsU0FBUyxDQUFDeUIsUUFBUSxFQUFFLENBQUNDLElBQUksQ0FBQyxVQUFVQyxNQUFN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SCxLQUFLO01BQzlCcEQsY0FBYyxDQUFDdUQsU0FBUyxHQUFHRixPQUFPO01BQ2xDcEQsY0FBYyxDQUFDc0QsU0FBUyxHQUFHRCxPQUFPO0lBQ3RDLENBQUM7O0lBRUQ7SUFDQSxJQUFJRSxDQUFDLEdBQUdDLFdBQVcsQ0FBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQzs7SUFFaEM7SUFDQUEsS0FBSyxFQUFFO0VBQ1gsQ0FBQzs7RUFFRDtFQUNBLE9BQU87SUFDSDtJQUNBWSxJQUFJLEVBQUUsU0FBQUEsS0FBQSxFQUFXO01BQ2IvRCxJQUFJLEdBQUdnRSxRQUFRLENBQUNwQixhQUFhLENBQUMsc0JBQXNCLENBQUM7TUFDckQzQyxZQUFZLEdBQUcrRCxRQUFRLENBQUNwQixhQUFhLENBQUMsd0JBQXdCLENBQUM7TUFDL0R6QyxXQUFXLEdBQUc2RCxRQUFRLENBQUNwQixhQUFhLENBQUMsOEJBQThCLENBQUM7TUFDcEV4QyxZQUFZLEdBQUc0RCxRQUFRLENBQUNwQixhQUFhLENBQUMsK0JBQStCLENBQUM7TUFDdEV2QyxjQUFjLEdBQUcyRCxRQUFRLENBQUNwQixhQUFhLENBQUMsaUNBQWlDLENBQUM7TUFDMUV0QyxjQUFjLEdBQUcwRCxRQUFRLENBQUNwQixhQUFhLENBQUMsaUNBQWlDLENBQUM7TUFFMUVyQyxVQUFVLEVBQUU7TUFDWnVDLFdBQVcsRUFBRTtJQUNqQjtFQUNKLENBQUM7QUFDTCxDQUFDLEVBQUU7O0FBRUg7QUFDQW1CLE1BQU0sQ0FBQ0Msa0JBQWtCLENBQUMsWUFBVztFQUNqQ25FLGtCQUFrQixDQUFDZ0UsSUFBSSxFQUFFO0FBQzdCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2F1dGhlbnRpY2F0aW9uL3NpZ24tdXAvY29taW5nLXNvb24uanM/NjU0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIERlZmluaXRpb25cclxudmFyIEtUU2lnbnVwQ29taW5nU29vbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gRWxlbWVudHNcclxuICAgIHZhciBmb3JtO1xyXG4gICAgdmFyIHN1Ym1pdEJ1dHRvbjtcclxuXHR2YXIgdmFsaWRhdG9yOyBcclxuXHJcbiAgICB2YXIgY291bnRlckRheXM7XHJcbiAgICB2YXIgY291bnRlckhvdXJzO1xyXG4gICAgdmFyIGNvdW50ZXJNaW51dGVzO1xyXG4gICAgdmFyIGNvdW50ZXJTZWNvbmRzO1xyXG5cclxuICAgIHZhciBoYW5kbGVGb3JtID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHZhciB2YWxpZGF0aW9uO1x0XHQgXHJcblxyXG4gICAgICAgIC8vIEluaXQgZm9ybSB2YWxpZGF0aW9uIHJ1bGVzLiBGb3IgbW9yZSBpbmZvIGNoZWNrIHRoZSBGb3JtVmFsaWRhdGlvbiBwbHVnaW4ncyBvZmZpY2lhbCBkb2N1bWVudGF0aW9uOmh0dHBzOi8vZm9ybXZhbGlkYXRpb24uaW8vXHJcbiAgICAgICAgdmFsaWRhdG9yID0gRm9ybVZhbGlkYXRpb24uZm9ybVZhbGlkYXRpb24oXHJcblx0XHRcdGZvcm0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmaWVsZHM6IHtcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQnZW1haWwnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcclxuXHRcdFx0XHRcdFx0XHRub3RFbXB0eToge1xyXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ0VtYWlsIGFkZHJlc3MgaXMgcmVxdWlyZWQnXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsQWRkcmVzczoge1xyXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1RoZSB2YWx1ZSBpcyBub3QgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJ1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHBsdWdpbnM6IHtcclxuXHRcdFx0XHRcdHRyaWdnZXI6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLlRyaWdnZXIoKSxcclxuXHRcdFx0XHRcdGJvb3RzdHJhcDogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuQm9vdHN0cmFwNSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdG9yOiAnLmZ2LXJvdycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZUludmFsaWRDbGFzczogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZVZhbGlkQ2xhc3M6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdCk7XHRcdFxyXG5cclxuICAgICAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBWYWxpZGF0ZSBmb3JtXHJcbiAgICAgICAgICAgIHZhbGlkYXRvci52YWxpZGF0ZSgpLnRoZW4oZnVuY3Rpb24gKHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSAnVmFsaWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBsb2FkaW5nIGluZGljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicsICdvbicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIGJ1dHRvbiB0byBhdm9pZCBtdWx0aXBsZSBjbGljayBcclxuICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBTaW11bGF0ZSBhamF4IHJlcXVlc3RcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIaWRlIGxvYWRpbmcgaW5kaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW5hYmxlIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgbWVzc2FnZSBwb3B1cC4gRm9yIG1vcmUgaW5mbyBjaGVjayB0aGUgcGx1Z2luJ3Mgb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSBzdWJzY3JpYmVkICFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImVtYWlsXCJdJykudmFsdWU9IFwiXCI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZm9ybS5zdWJtaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7ICAgXHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3cgZXJyb3IgcG9wdXAuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246IGh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvL1xyXG4gICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiU29ycnksIGxvb2tzIGxpa2UgdGhlcmUgYXJlIHNvbWUgZXJyb3JzIGRldGVjdGVkLCBwbGVhc2UgdHJ5IGFnYWluLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHRcdH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpbml0Q291bnRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIFNldCB0aGUgZGF0ZSB3ZSdyZSBjb3VudGluZyBkb3duIHRvXHJcbiAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTsgXHJcbiAgICAgICAgdmFyIGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZShjdXJyZW50VGltZS5nZXRUaW1lKCkgKyAxMDAwICogNjAgKiA2MCAqIDI0ICogMTUgKyAxMDAwICogNjAgKiA2MCAqIDEwICsgMTAwMCAqIDYwICogMTUpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgICAgdmFyIGNvdW50ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIEdldCB0b2RheXMgZGF0ZSBhbmQgdGltZVxyXG4gICAgICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIG5vdyBhbiB0aGUgY291bnQgZG93biBkYXRlXHJcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XHJcblxyXG4gICAgICAgICAgICAvLyBUaW1lIGNhbGN1bGF0aW9ucyBmb3IgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHNcclxuICAgICAgICAgICAgdmFyIGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgICAgICAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XHJcbiAgICAgICAgICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcclxuICAgICAgICAgICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgLy8gRGlzcGxheSB0aGUgcmVzdWx0XHJcbiAgICAgICAgICAgIGNvdW50ZXJEYXlzLmlubmVySFRNTCA9IGRheXM7XHJcbiAgICAgICAgICAgIGNvdW50ZXJIb3Vycy5pbm5lckhUTUwgPSBob3VycztcclxuICAgICAgICAgICAgY291bnRlck1pbnV0ZXMuaW5uZXJIVE1MID0gbWludXRlcztcclxuICAgICAgICAgICAgY291bnRlclNlY29uZHMuaW5uZXJIVE1MID0gc2Vjb25kcztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgdGhlIGNvdW50IGRvd24gZXZlcnkgMSBzZWNvbmRcclxuICAgICAgICB2YXIgeCA9IHNldEludGVydmFsKGNvdW50LCAxMDAwKTtcclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbCBjb3VudFxyXG4gICAgICAgIGNvdW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBwdWJsaWMgZnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfY29taW5nX3Nvb25fZm9ybScpO1xyXG4gICAgICAgICAgICBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfY29taW5nX3Nvb25fc3VibWl0Jyk7XHJcbiAgICAgICAgICAgIGNvdW50ZXJEYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X2NvbWluZ19zb29uX2NvdW50ZXJfZGF5cycpO1xyXG4gICAgICAgICAgICBjb3VudGVySG91cnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfY29taW5nX3Nvb25fY291bnRlcl9ob3VycycpO1xyXG4gICAgICAgICAgICBjb3VudGVyTWludXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9jb21pbmdfc29vbl9jb3VudGVyX21pbnV0ZXMnKTtcclxuICAgICAgICAgICAgY291bnRlclNlY29uZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfY29taW5nX3Nvb25fY291bnRlcl9zZWNvbmRzJyk7XHJcblxyXG4gICAgICAgICAgICBoYW5kbGVGb3JtKCk7XHJcbiAgICAgICAgICAgIGluaXRDb3VudGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcclxuICAgIEtUU2lnbnVwQ29taW5nU29vbi5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1RTaWdudXBDb21pbmdTb29uIiwiZm9ybSIsInN1Ym1pdEJ1dHRvbiIsInZhbGlkYXRvciIsImNvdW50ZXJEYXlzIiwiY291bnRlckhvdXJzIiwiY291bnRlck1pbnV0ZXMiLCJjb3VudGVyU2Vjb25kcyIsImhhbmRsZUZvcm0iLCJlIiwidmFsaWRhdGlvbiIsIkZvcm1WYWxpZGF0aW9uIiwiZm9ybVZhbGlkYXRpb24iLCJmaWVsZHMiLCJ2YWxpZGF0b3JzIiwibm90RW1wdHkiLCJtZXNzYWdlIiwiZW1haWxBZGRyZXNzIiwicGx1Z2lucyIsInRyaWdnZXIiLCJUcmlnZ2VyIiwiYm9vdHN0cmFwIiwiQm9vdHN0cmFwNSIsInJvd1NlbGVjdG9yIiwiZWxlSW52YWxpZENsYXNzIiwiZWxlVmFsaWRDbGFzcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmV2ZW50RGVmYXVsdCIsInZhbGlkYXRlIiwidGhlbiIsInN0YXR1cyIsInNldEF0dHJpYnV0ZSIsImRpc2FibGVkIiwic2V0VGltZW91dCIsInJlbW92ZUF0dHJpYnV0ZSIsIlN3YWwiLCJmaXJlIiwidGV4dCIsImljb24iLCJidXR0b25zU3R5bGluZyIsImNvbmZpcm1CdXR0b25UZXh0IiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwicmVzdWx0IiwiaXNDb25maXJtZWQiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJpbml0Q291bnRlciIsImN1cnJlbnRUaW1lIiwiRGF0ZSIsImNvdW50RG93bkRhdGUiLCJnZXRUaW1lIiwiY291bnQiLCJub3ciLCJkaXN0YW5jZSIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiaW5uZXJIVE1MIiwieCIsInNldEludGVydmFsIiwiaW5pdCIsImRvY3VtZW50IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/authentication/sign-up/coming-soon.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/authentication/sign-up/coming-soon.js"]();
/******/ 	
/******/ })()
;