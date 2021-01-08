/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

const accBtn = document.querySelectorAll(".acc-btn");
const accItem = document.querySelectorAll(".accordion-item");


// FAQ Accordion
accBtn.forEach((ele) => {
  ele.addEventListener("click", () => {
    let content = ele.nextElementSibling;
    let icon = ele.firstChild.nextElementSibling;
    let active = document.querySelector(".accordion-item.active");
    let iconActive = document.querySelector(".icon.active");
    if (active) {
      if (ele.parentElement.classList.contains("active")) {
        ele.parentElement.classList.remove("active");
        // remove active from icon
        icon.classList.remove("active");
        active.lastElementChild.style.maxHeight = "0";
      } else {
        active.classList.remove("active");
        active.lastElementChild.style.maxHeight = "0";
        // remove icon active
        iconActive.classList.remove("active");
        ele.parentElement.classList.add("active");
        // add active to icon
        icon.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    } else {
      ele.parentElement.classList.add("active");
      // add active to icon
      icon.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// import "/src/scss/styles.scss";



/***/ }),

/***/ "./src/quiz.js":
/*!*********************!*\
  !*** ./src/quiz.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
  1. Hide the test splash screen on test btn click
      * Show the quiz-container (already pre-hidden)
  2. Populate a new question (on each slide) with 4 possible answers
     * Loop through the questions and answers
  3. Add a submit your name for results
  4. Show results and the best option for a course based on score
      * A way to keep score
*/

const startBtn = document.querySelector(".start-test-btn");
const testSplash = document.querySelector(".test-splash");
const quizContainer = document.querySelector(".quiz-container");
const resultsContainer = document.querySelector(".results-container");
const pageList = document.querySelector(".page-list");
const pagination = document.querySelector(".pagination");
const nextBtn = document.querySelector(".next-btn");
const inputName = document.querySelector(".input-name");
const nameForm = document.querySelector(".name-form");
const results = document.querySelector(".results");
let questionAsked = document.getElementById("question");
let options = document.querySelectorAll(".answer-btn");
let letterOpt = document.querySelectorAll(".letter");
let pageNum = document.querySelectorAll(".page-num");
let finalScore = document.querySelector(".final-score");
let courseSuggestion = document.querySelector(".course-suggestion");
let score = 0;
let int = 0;

startBtn.addEventListener("click", startQuiz);

// Starts the quiz
function startQuiz() {
  testSplash.classList.add("hide");
  pagination.classList.remove("hide");
  quizContainer.classList.remove("hide");
  populateQuestion();
}

// Populates the question and answers
function populateQuestion() {
  if (int < questions.length) {
    questionAsked.innerText = questions[int].question;
    pageNum[int].classList.add("active");
    for (let i = 0; i < questions.length; i++) {
      options[
        i
      ].innerHTML = `<span class="letter">${letterOpt[i].innerHTML}</span> ${questions[int].choices[i]}`;
      options[i].addEventListener("click", rightAnswer);
    }
  } else {
    quizContainer.classList.add("hide");
    resultsContainer.classList.remove("hide");
    pageNum[int].classList.add("active");
    nextBtn.addEventListener("click", validateInput);
    inputName.addEventListener("keypress", (e) => {
      let keyCode = e.code;
      if (keyCode === "Enter") {
        validateInput();
      }
    });
  }
}

// Tests to see if the answer is correct
function rightAnswer(e) {
  const target = e.target.textContent;
  questions.forEach((answer, index) => {
    if (target.includes(answer.answer)) {
      score++;
    }
  });
  int++;
  populateQuestion();
}

function resultReveal() {
  pageList.classList.add("hide");
  nameForm.classList.add("hide");
  results.classList.remove("hide");
  let name = document.querySelector(".name-value");
  name.textContent = inputName.value.toLowerCase();
  finalScore.textContent = score;
  if (score === 4) {
    courseSuggestion.textContent = "Product Executive Certificate";
  } else if (score === 3) {
    courseSuggestion.textContent = "Product Leader Certificate";
  } else {
    courseSuggestion.textContent = "Product Manager Certificate";
  }
}

// Checks the input to validate if the string is only letters
function validateInput() {
  const inputValue = inputName.value;
  const validLetters = /^[A-Za-z]+$/;
  if (inputValue !== "" && inputValue.match(validLetters)) {
    resultReveal();
  } else {
    const invalid = document.querySelector(".invalid");
    invalid.innerHTML = "Please enter your name";
    return false;
  }
}

// All of the questions and answers
const questions = [
  {
    question: "Which of these is not one of the constraints of a project?",
    choices: ["Scope", "Resources", "Team", "Budget"],
    answer: "Team"
  },
  {
    question: "Root Cause Analysis relates to?",
    choices: [
      "Process Analysis",
      "Quality Audits",
      "Quality Control Measurments",
      "Hierarchical Analysis"
    ],
    answer: "Process Analysis"
  },
  {
    question: "Process Analysis is a function of?",
    choices: [
      "Performance Analysis",
      "Quality Metrics",
      "Process Improvement Plan",
      "Quality Improvement Plan"
    ],
    answer: "Process Improvement Plan"
  },
  {
    question:
      "A schedule activity may begin 10 days before the predecessor activity finishes. This is an example of?",
    choices: [
      "Finish-to-Start",
      "Start-to-Finish",
      "Start-to-Start",
      "Finish-to-Finish"
    ],
    answer: "Finish-to-Start"
  }
];


/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi ./src/app.js ./src/index.js ./src/quiz.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/admin/Desktop/Projects/apex_pmc/src/app.js */"./src/app.js");
__webpack_require__(/*! /Users/admin/Desktop/Projects/apex_pmc/src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! /Users/admin/Desktop/Projects/apex_pmc/src/quiz.js */"./src/quiz.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1aXouanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7OztBQ2xDRDs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBLDRDQUE0Qyx1QkFBdUIsVUFBVSwwQkFBMEI7QUFDdkc7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiY29uc3QgYWNjQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY2MtYnRuXCIpO1xuY29uc3QgYWNjSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWNjb3JkaW9uLWl0ZW1cIik7XG5cblxuLy8gRkFRIEFjY29yZGlvblxuYWNjQnRuLmZvckVhY2goKGVsZSkgPT4ge1xuICBlbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgY29udGVudCA9IGVsZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgbGV0IGljb24gPSBlbGUuZmlyc3RDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgbGV0IGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3JkaW9uLWl0ZW0uYWN0aXZlXCIpO1xuICAgIGxldCBpY29uQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pY29uLmFjdGl2ZVwiKTtcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBpZiAoZWxlLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgIGVsZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIC8vIHJlbW92ZSBhY3RpdmUgZnJvbSBpY29uXG4gICAgICAgIGljb24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgYWN0aXZlLmxhc3RFbGVtZW50Q2hpbGQuc3R5bGUubWF4SGVpZ2h0ID0gXCIwXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgYWN0aXZlLmxhc3RFbGVtZW50Q2hpbGQuc3R5bGUubWF4SGVpZ2h0ID0gXCIwXCI7XG4gICAgICAgIC8vIHJlbW92ZSBpY29uIGFjdGl2ZVxuICAgICAgICBpY29uQWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIGVsZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIC8vIGFkZCBhY3RpdmUgdG8gaWNvblxuICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAvLyBhZGQgYWN0aXZlIHRvIGljb25cbiAgICAgIGljb24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgfVxuICB9KTtcbn0pO1xuIiwiLy8gaW1wb3J0IFwiL3NyYy9zY3NzL3N0eWxlcy5zY3NzXCI7XG5cbiIsIi8qXG4gIDEuIEhpZGUgdGhlIHRlc3Qgc3BsYXNoIHNjcmVlbiBvbiB0ZXN0IGJ0biBjbGlja1xuICAgICAgKiBTaG93IHRoZSBxdWl6LWNvbnRhaW5lciAoYWxyZWFkeSBwcmUtaGlkZGVuKVxuICAyLiBQb3B1bGF0ZSBhIG5ldyBxdWVzdGlvbiAob24gZWFjaCBzbGlkZSkgd2l0aCA0IHBvc3NpYmxlIGFuc3dlcnNcbiAgICAgKiBMb29wIHRocm91Z2ggdGhlIHF1ZXN0aW9ucyBhbmQgYW5zd2Vyc1xuICAzLiBBZGQgYSBzdWJtaXQgeW91ciBuYW1lIGZvciByZXN1bHRzXG4gIDQuIFNob3cgcmVzdWx0cyBhbmQgdGhlIGJlc3Qgb3B0aW9uIGZvciBhIGNvdXJzZSBiYXNlZCBvbiBzY29yZVxuICAgICAgKiBBIHdheSB0byBrZWVwIHNjb3JlXG4qL1xuXG5jb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtdGVzdC1idG5cIik7XG5jb25zdCB0ZXN0U3BsYXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZXN0LXNwbGFzaFwiKTtcbmNvbnN0IHF1aXpDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1aXotY29udGFpbmVyXCIpO1xuY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0cy1jb250YWluZXJcIik7XG5jb25zdCBwYWdlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS1saXN0XCIpO1xuY29uc3QgcGFnaW5hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnaW5hdGlvblwiKTtcbmNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5leHQtYnRuXCIpO1xuY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC1uYW1lXCIpO1xuY29uc3QgbmFtZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hbWUtZm9ybVwiKTtcbmNvbnN0IHJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdHNcIik7XG5sZXQgcXVlc3Rpb25Bc2tlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVlc3Rpb25cIik7XG5sZXQgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYW5zd2VyLWJ0blwiKTtcbmxldCBsZXR0ZXJPcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxldHRlclwiKTtcbmxldCBwYWdlTnVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wYWdlLW51bVwiKTtcbmxldCBmaW5hbFNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maW5hbC1zY29yZVwiKTtcbmxldCBjb3Vyc2VTdWdnZXN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3Vyc2Utc3VnZ2VzdGlvblwiKTtcbmxldCBzY29yZSA9IDA7XG5sZXQgaW50ID0gMDtcblxuc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0UXVpeik7XG5cbi8vIFN0YXJ0cyB0aGUgcXVpelxuZnVuY3Rpb24gc3RhcnRRdWl6KCkge1xuICB0ZXN0U3BsYXNoLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICBwYWdpbmF0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICBxdWl6Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICBwb3B1bGF0ZVF1ZXN0aW9uKCk7XG59XG5cbi8vIFBvcHVsYXRlcyB0aGUgcXVlc3Rpb24gYW5kIGFuc3dlcnNcbmZ1bmN0aW9uIHBvcHVsYXRlUXVlc3Rpb24oKSB7XG4gIGlmIChpbnQgPCBxdWVzdGlvbnMubGVuZ3RoKSB7XG4gICAgcXVlc3Rpb25Bc2tlZC5pbm5lclRleHQgPSBxdWVzdGlvbnNbaW50XS5xdWVzdGlvbjtcbiAgICBwYWdlTnVtW2ludF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgb3B0aW9uc1tcbiAgICAgICAgaVxuICAgICAgXS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJsZXR0ZXJcIj4ke2xldHRlck9wdFtpXS5pbm5lckhUTUx9PC9zcGFuPiAke3F1ZXN0aW9uc1tpbnRdLmNob2ljZXNbaV19YDtcbiAgICAgIG9wdGlvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJpZ2h0QW5zd2VyKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcXVpekNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICByZXN1bHRzQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIHBhZ2VOdW1baW50XS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHZhbGlkYXRlSW5wdXQpO1xuICAgIGlucHV0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcbiAgICAgIGxldCBrZXlDb2RlID0gZS5jb2RlO1xuICAgICAgaWYgKGtleUNvZGUgPT09IFwiRW50ZXJcIikge1xuICAgICAgICB2YWxpZGF0ZUlucHV0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gVGVzdHMgdG8gc2VlIGlmIHRoZSBhbnN3ZXIgaXMgY29ycmVjdFxuZnVuY3Rpb24gcmlnaHRBbnN3ZXIoZSkge1xuICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgcXVlc3Rpb25zLmZvckVhY2goKGFuc3dlciwgaW5kZXgpID0+IHtcbiAgICBpZiAodGFyZ2V0LmluY2x1ZGVzKGFuc3dlci5hbnN3ZXIpKSB7XG4gICAgICBzY29yZSsrO1xuICAgIH1cbiAgfSk7XG4gIGludCsrO1xuICBwb3B1bGF0ZVF1ZXN0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIHJlc3VsdFJldmVhbCgpIHtcbiAgcGFnZUxpc3QuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gIG5hbWVGb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICByZXN1bHRzLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICBsZXQgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmFtZS12YWx1ZVwiKTtcbiAgbmFtZS50ZXh0Q29udGVudCA9IGlucHV0TmFtZS52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICBmaW5hbFNjb3JlLnRleHRDb250ZW50ID0gc2NvcmU7XG4gIGlmIChzY29yZSA9PT0gNCkge1xuICAgIGNvdXJzZVN1Z2dlc3Rpb24udGV4dENvbnRlbnQgPSBcIlByb2R1Y3QgRXhlY3V0aXZlIENlcnRpZmljYXRlXCI7XG4gIH0gZWxzZSBpZiAoc2NvcmUgPT09IDMpIHtcbiAgICBjb3Vyc2VTdWdnZXN0aW9uLnRleHRDb250ZW50ID0gXCJQcm9kdWN0IExlYWRlciBDZXJ0aWZpY2F0ZVwiO1xuICB9IGVsc2Uge1xuICAgIGNvdXJzZVN1Z2dlc3Rpb24udGV4dENvbnRlbnQgPSBcIlByb2R1Y3QgTWFuYWdlciBDZXJ0aWZpY2F0ZVwiO1xuICB9XG59XG5cbi8vIENoZWNrcyB0aGUgaW5wdXQgdG8gdmFsaWRhdGUgaWYgdGhlIHN0cmluZyBpcyBvbmx5IGxldHRlcnNcbmZ1bmN0aW9uIHZhbGlkYXRlSW5wdXQoKSB7XG4gIGNvbnN0IGlucHV0VmFsdWUgPSBpbnB1dE5hbWUudmFsdWU7XG4gIGNvbnN0IHZhbGlkTGV0dGVycyA9IC9eW0EtWmEtel0rJC87XG4gIGlmIChpbnB1dFZhbHVlICE9PSBcIlwiICYmIGlucHV0VmFsdWUubWF0Y2godmFsaWRMZXR0ZXJzKSkge1xuICAgIHJlc3VsdFJldmVhbCgpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGludmFsaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmludmFsaWRcIik7XG4gICAgaW52YWxpZC5pbm5lckhUTUwgPSBcIlBsZWFzZSBlbnRlciB5b3VyIG5hbWVcIjtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLy8gQWxsIG9mIHRoZSBxdWVzdGlvbnMgYW5kIGFuc3dlcnNcbmNvbnN0IHF1ZXN0aW9ucyA9IFtcbiAge1xuICAgIHF1ZXN0aW9uOiBcIldoaWNoIG9mIHRoZXNlIGlzIG5vdCBvbmUgb2YgdGhlIGNvbnN0cmFpbnRzIG9mIGEgcHJvamVjdD9cIixcbiAgICBjaG9pY2VzOiBbXCJTY29wZVwiLCBcIlJlc291cmNlc1wiLCBcIlRlYW1cIiwgXCJCdWRnZXRcIl0sXG4gICAgYW5zd2VyOiBcIlRlYW1cIlxuICB9LFxuICB7XG4gICAgcXVlc3Rpb246IFwiUm9vdCBDYXVzZSBBbmFseXNpcyByZWxhdGVzIHRvP1wiLFxuICAgIGNob2ljZXM6IFtcbiAgICAgIFwiUHJvY2VzcyBBbmFseXNpc1wiLFxuICAgICAgXCJRdWFsaXR5IEF1ZGl0c1wiLFxuICAgICAgXCJRdWFsaXR5IENvbnRyb2wgTWVhc3VybWVudHNcIixcbiAgICAgIFwiSGllcmFyY2hpY2FsIEFuYWx5c2lzXCJcbiAgICBdLFxuICAgIGFuc3dlcjogXCJQcm9jZXNzIEFuYWx5c2lzXCJcbiAgfSxcbiAge1xuICAgIHF1ZXN0aW9uOiBcIlByb2Nlc3MgQW5hbHlzaXMgaXMgYSBmdW5jdGlvbiBvZj9cIixcbiAgICBjaG9pY2VzOiBbXG4gICAgICBcIlBlcmZvcm1hbmNlIEFuYWx5c2lzXCIsXG4gICAgICBcIlF1YWxpdHkgTWV0cmljc1wiLFxuICAgICAgXCJQcm9jZXNzIEltcHJvdmVtZW50IFBsYW5cIixcbiAgICAgIFwiUXVhbGl0eSBJbXByb3ZlbWVudCBQbGFuXCJcbiAgICBdLFxuICAgIGFuc3dlcjogXCJQcm9jZXNzIEltcHJvdmVtZW50IFBsYW5cIlxuICB9LFxuICB7XG4gICAgcXVlc3Rpb246XG4gICAgICBcIkEgc2NoZWR1bGUgYWN0aXZpdHkgbWF5IGJlZ2luIDEwIGRheXMgYmVmb3JlIHRoZSBwcmVkZWNlc3NvciBhY3Rpdml0eSBmaW5pc2hlcy4gVGhpcyBpcyBhbiBleGFtcGxlIG9mP1wiLFxuICAgIGNob2ljZXM6IFtcbiAgICAgIFwiRmluaXNoLXRvLVN0YXJ0XCIsXG4gICAgICBcIlN0YXJ0LXRvLUZpbmlzaFwiLFxuICAgICAgXCJTdGFydC10by1TdGFydFwiLFxuICAgICAgXCJGaW5pc2gtdG8tRmluaXNoXCJcbiAgICBdLFxuICAgIGFuc3dlcjogXCJGaW5pc2gtdG8tU3RhcnRcIlxuICB9XG5dO1xuIl0sInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OWliMjkwYzNSeVlYQWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMkZ3Y0M1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZhVzVrWlhndWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMM0YxYVhvdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdFJRVUZCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHM3VVVGRlFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUczdVVUZGUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPenM3VVVGSFFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUdFJRVU5CTzFGQlEwRXNNRU5CUVRCRExHZERRVUZuUXp0UlFVTXhSVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdVVUZEUVR0UlFVTkJMSGRFUVVGM1JDeHJRa0ZCYTBJN1VVRkRNVVU3VVVGRFFTeHBSRUZCYVVRc1kwRkJZenRSUVVNdlJEczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFc2VVTkJRWGxETEdsRFFVRnBRenRSUVVNeFJTeG5TRUZCWjBnc2JVSkJRVzFDTEVWQlFVVTdVVUZEY2trN1VVRkRRVHM3VVVGRlFUdFJRVU5CTzFGQlEwRTdVVUZEUVN3eVFrRkJNa0lzTUVKQlFUQkNMRVZCUVVVN1VVRkRka1FzYVVOQlFXbERMR1ZCUVdVN1VVRkRhRVE3VVVGRFFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFc2MwUkJRWE5FTEN0RVFVRXJSRHM3VVVGRmNrZzdVVUZEUVRzN08xRkJSMEU3VVVGRFFUczdPenM3T3pzN096czdPMEZEYkVaQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVDBGQlR6dEJRVU5RTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTEVOQlFVTTdPenM3T3pzN096czdPenRCUTJ4RFJEczdPenM3T3pzN096czdPenRCUTBGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEcxQ1FVRnRRaXh6UWtGQmMwSTdRVUZEZWtNN1FVRkRRVHRCUVVOQkxEUkRRVUUwUXl4MVFrRkJkVUlzVlVGQlZTd3dRa0ZCTUVJN1FVRkRka2M3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVpTENKbWFXeGxJam9pTjJKall6SmtZVFV6Tnpka1lXTmlZV0ZsWXpNdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlnWEhRdkx5QlVhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFIyWVhJZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3lBOUlIdDlPMXh1WEc0Z1hIUXZMeUJVYUdVZ2NtVnhkV2x5WlNCbWRXNWpkR2x2Ymx4dUlGeDBablZ1WTNScGIyNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWh0YjJSMWJHVkpaQ2tnZTF4dVhHNGdYSFJjZEM4dklFTm9aV05ySUdsbUlHMXZaSFZzWlNCcGN5QnBiaUJqWVdOb1pWeHVJRngwWEhScFppaHBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTa2dlMXh1SUZ4MFhIUmNkSEpsZEhWeWJpQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTNWxlSEJ2Y25Sek8xeHVJRngwWEhSOVhHNGdYSFJjZEM4dklFTnlaV0YwWlNCaElHNWxkeUJ0YjJSMWJHVWdLR0Z1WkNCd2RYUWdhWFFnYVc1MGJ5QjBhR1VnWTJGamFHVXBYRzRnWEhSY2RIWmhjaUJ0YjJSMWJHVWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU0E5SUh0Y2JpQmNkRngwWEhScE9pQnRiMlIxYkdWSlpDeGNiaUJjZEZ4MFhIUnNPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmxlSEJ2Y25Sek9pQjdmVnh1SUZ4MFhIUjlPMXh1WEc0Z1hIUmNkQzh2SUVWNFpXTjFkR1VnZEdobElHMXZaSFZzWlNCbWRXNWpkR2x2Ymx4dUlGeDBYSFJ0YjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVqWVd4c0tHMXZaSFZzWlM1bGVIQnZjblJ6TENCdGIyUjFiR1VzSUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS1R0Y2JseHVJRngwWEhRdkx5QkdiR0ZuSUhSb1pTQnRiMlIxYkdVZ1lYTWdiRzloWkdWa1hHNGdYSFJjZEcxdlpIVnNaUzVzSUQwZ2RISjFaVHRjYmx4dUlGeDBYSFF2THlCU1pYUjFjbTRnZEdobElHVjRjRzl5ZEhNZ2IyWWdkR2hsSUcxdlpIVnNaVnh1SUZ4MFhIUnlaWFIxY200Z2JXOWtkV3hsTG1WNGNHOXlkSE03WEc0Z1hIUjlYRzVjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1Z6SUc5aWFtVmpkQ0FvWDE5M1pXSndZV05yWDIxdlpIVnNaWE5mWHlsY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YlNBOUlHMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbU1nUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWjJWMGRHVnlJR1oxYm1OMGFXOXVJR1p2Y2lCb1lYSnRiMjU1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ0E5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1zSUc1aGJXVXNJR2RsZEhSbGNpa2dlMXh1SUZ4MFhIUnBaaWdoWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHVjRjRzl5ZEhNc0lHNWhiV1VwS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRzVoYldVc0lIc2daVzUxYldWeVlXSnNaVG9nZEhKMVpTd2daMlYwT2lCblpYUjBaWElnZlNrN1hHNGdYSFJjZEgxY2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdSbFptbHVaU0JmWDJWelRXOWtkV3hsSUc5dUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y2lBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNcElIdGNiaUJjZEZ4MGFXWW9kSGx3Wlc5bUlGTjViV0p2YkNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ1UzbHRZbTlzTG5SdlUzUnlhVzVuVkdGbktTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUZONWJXSnZiQzUwYjFOMGNtbHVaMVJoWnl3Z2V5QjJZV3gxWlRvZ0owMXZaSFZzWlNjZ2ZTazdYRzRnWEhSY2RIMWNiaUJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJQ2RmWDJWelRXOWtkV3hsSnl3Z2V5QjJZV3gxWlRvZ2RISjFaU0I5S1R0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdOeVpXRjBaU0JoSUdaaGEyVWdibUZ0WlhOd1lXTmxJRzlpYW1WamRGeHVJRngwTHk4Z2JXOWtaU0FtSURFNklIWmhiSFZsSUdseklHRWdiVzlrZFd4bElHbGtMQ0J5WlhGMWFYSmxJR2wwWEc0Z1hIUXZMeUJ0YjJSbElDWWdNam9nYldWeVoyVWdZV3hzSUhCeWIzQmxjblJwWlhNZ2IyWWdkbUZzZFdVZ2FXNTBieUIwYUdVZ2JuTmNiaUJjZEM4dklHMXZaR1VnSmlBME9pQnlaWFIxY200Z2RtRnNkV1VnZDJobGJpQmhiSEpsWVdSNUlHNXpJRzlpYW1WamRGeHVJRngwTHk4Z2JXOWtaU0FtSURoOE1Ub2dZbVZvWVhabElHeHBhMlVnY21WeGRXbHlaVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NTBJRDBnWm5WdVkzUnBiMjRvZG1Gc2RXVXNJRzF2WkdVcElIdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlERXBJSFpoYkhWbElEMGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWgyWVd4MVpTazdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQTRLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEdsbUtDaHRiMlJsSUNZZ05Da2dKaVlnZEhsd1pXOW1JSFpoYkhWbElEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMllXeDFaU0FtSmlCMllXeDFaUzVmWDJWelRXOWtkV3hsS1NCeVpYUjFjbTRnZG1Gc2RXVTdYRzRnWEhSY2RIWmhjaUJ1Y3lBOUlFOWlhbVZqZEM1amNtVmhkR1VvYm5Wc2JDazdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaWh1Y3lrN1hHNGdYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaHVjeXdnSjJSbFptRjFiSFFuTENCN0lHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc0lIWmhiSFZsT2lCMllXeDFaU0I5S1R0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURJZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUNFOUlDZHpkSEpwYm1jbktTQm1iM0lvZG1GeUlHdGxlU0JwYmlCMllXeDFaU2tnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHNXpMQ0JyWlhrc0lHWjFibU4wYVc5dUtHdGxlU2tnZXlCeVpYUjFjbTRnZG1Gc2RXVmJhMlY1WFRzZ2ZTNWlhVzVrS0c1MWJHd3NJR3RsZVNrcE8xeHVJRngwWEhSeVpYUjFjbTRnYm5NN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCblpYUkVaV1poZFd4MFJYaHdiM0owSUdaMWJtTjBhVzl1SUdadmNpQmpiMjF3WVhScFltbHNhWFI1SUhkcGRHZ2dibTl1TFdoaGNtMXZibmtnYlc5a2RXeGxjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXVJRDBnWm5WdVkzUnBiMjRvYlc5a2RXeGxLU0I3WEc0Z1hIUmNkSFpoY2lCblpYUjBaWElnUFNCdGIyUjFiR1VnSmlZZ2JXOWtkV3hsTGw5ZlpYTk5iMlIxYkdVZ1AxeHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRVJsWm1GMWJIUW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVmJKMlJsWm1GMWJIUW5YVHNnZlNBNlhHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBUVzlrZFd4bFJYaHdiM0owY3lncElIc2djbVYwZFhKdUlHMXZaSFZzWlRzZ2ZUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLR2RsZEhSbGNpd2dKMkVuTENCblpYUjBaWElwTzF4dUlGeDBYSFJ5WlhSMWNtNGdaMlYwZEdWeU8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c1hHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04Z1BTQm1kVzVqZEdsdmJpaHZZbXBsWTNRc0lIQnliM0JsY25SNUtTQjdJSEpsZEhWeWJpQlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iMkpxWldOMExDQndjbTl3WlhKMGVTazdJSDA3WEc1Y2JpQmNkQzh2SUY5ZmQyVmljR0ZqYTE5d2RXSnNhV05mY0dGMGFGOWZYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuQWdQU0JjSWx3aU8xeHVYRzVjYmlCY2RDOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1SUZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXpJRDBnTUNrN1hHNGlMQ0pqYjI1emRDQmhZMk5DZEc0Z1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tGd2lMbUZqWXkxaWRHNWNJaWs3WEc1amIyNXpkQ0JoWTJOSmRHVnRJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2hjSWk1aFkyTnZjbVJwYjI0dGFYUmxiVndpS1R0Y2JseHVYRzR2THlCR1FWRWdRV05qYjNKa2FXOXVYRzVoWTJOQ2RHNHVabTl5UldGamFDZ29aV3hsS1NBOVBpQjdYRzRnSUdWc1pTNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtGd2lZMnhwWTJ0Y0lpd2dLQ2tnUFQ0Z2UxeHVJQ0FnSUd4bGRDQmpiMjUwWlc1MElEMGdaV3hsTG01bGVIUkZiR1Z0Wlc1MFUybGliR2x1Wnp0Y2JpQWdJQ0JzWlhRZ2FXTnZiaUE5SUdWc1pTNW1hWEp6ZEVOb2FXeGtMbTVsZUhSRmJHVnRaVzUwVTJsaWJHbHVaenRjYmlBZ0lDQnNaWFFnWVdOMGFYWmxJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpaGNJaTVoWTJOdmNtUnBiMjR0YVhSbGJTNWhZM1JwZG1WY0lpazdYRzRnSUNBZ2JHVjBJR2xqYjI1QlkzUnBkbVVnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLRndpTG1samIyNHVZV04wYVhabFhDSXBPMXh1SUNBZ0lHbG1JQ2hoWTNScGRtVXBJSHRjYmlBZ0lDQWdJR2xtSUNobGJHVXVjR0Z5Wlc1MFJXeGxiV1Z1ZEM1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb1hDSmhZM1JwZG1WY0lpa3BJSHRjYmlBZ0lDQWdJQ0FnWld4bExuQmhjbVZ1ZEVWc1pXMWxiblF1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2hjSW1GamRHbDJaVndpS1R0Y2JpQWdJQ0FnSUNBZ0x5OGdjbVZ0YjNabElHRmpkR2wyWlNCbWNtOXRJR2xqYjI1Y2JpQWdJQ0FnSUNBZ2FXTnZiaTVqYkdGemMweHBjM1F1Y21WdGIzWmxLRndpWVdOMGFYWmxYQ0lwTzF4dUlDQWdJQ0FnSUNCaFkzUnBkbVV1YkdGemRFVnNaVzFsYm5SRGFHbHNaQzV6ZEhsc1pTNXRZWGhJWldsbmFIUWdQU0JjSWpCY0lqdGNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lHRmpkR2wyWlM1amJHRnpjMHhwYzNRdWNtVnRiM1psS0Z3aVlXTjBhWFpsWENJcE8xeHVJQ0FnSUNBZ0lDQmhZM1JwZG1VdWJHRnpkRVZzWlcxbGJuUkRhR2xzWkM1emRIbHNaUzV0WVhoSVpXbG5hSFFnUFNCY0lqQmNJanRjYmlBZ0lDQWdJQ0FnTHk4Z2NtVnRiM1psSUdsamIyNGdZV04wYVhabFhHNGdJQ0FnSUNBZ0lHbGpiMjVCWTNScGRtVXVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTaGNJbUZqZEdsMlpWd2lLVHRjYmlBZ0lDQWdJQ0FnWld4bExuQmhjbVZ1ZEVWc1pXMWxiblF1WTJ4aGMzTk1hWE4wTG1Ga1pDaGNJbUZqZEdsMlpWd2lLVHRjYmlBZ0lDQWdJQ0FnTHk4Z1lXUmtJR0ZqZEdsMlpTQjBieUJwWTI5dVhHNGdJQ0FnSUNBZ0lHbGpiMjR1WTJ4aGMzTk1hWE4wTG1Ga1pDaGNJbUZqZEdsMlpWd2lLVHRjYmlBZ0lDQWdJQ0FnWTI5dWRHVnVkQzV6ZEhsc1pTNXRZWGhJWldsbmFIUWdQU0JqYjI1MFpXNTBMbk5qY205c2JFaGxhV2RvZENBcklGd2ljSGhjSWp0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdaV3hsTG5CaGNtVnVkRVZzWlcxbGJuUXVZMnhoYzNOTWFYTjBMbUZrWkNoY0ltRmpkR2wyWlZ3aUtUdGNiaUFnSUNBZ0lDOHZJR0ZrWkNCaFkzUnBkbVVnZEc4Z2FXTnZibHh1SUNBZ0lDQWdhV052Ymk1amJHRnpjMHhwYzNRdVlXUmtLRndpWVdOMGFYWmxYQ0lwTzF4dUlDQWdJQ0FnWTI5dWRHVnVkQzV6ZEhsc1pTNXRZWGhJWldsbmFIUWdQU0JqYjI1MFpXNTBMbk5qY205c2JFaGxhV2RvZENBcklGd2ljSGhjSWp0Y2JpQWdJQ0I5WEc0Z0lIMHBPMXh1ZlNrN1hHNGlMQ0l2THlCcGJYQnZjblFnWENJdmMzSmpMM05qYzNNdmMzUjViR1Z6TG5OamMzTmNJanRjYmx4dUlpd2lMeXBjYmlBZ01TNGdTR2xrWlNCMGFHVWdkR1Z6ZENCemNHeGhjMmdnYzJOeVpXVnVJRzl1SUhSbGMzUWdZblJ1SUdOc2FXTnJYRzRnSUNBZ0lDQXFJRk5vYjNjZ2RHaGxJSEYxYVhvdFkyOXVkR0ZwYm1WeUlDaGhiSEpsWVdSNUlIQnlaUzFvYVdSa1pXNHBYRzRnSURJdUlGQnZjSFZzWVhSbElHRWdibVYzSUhGMVpYTjBhVzl1SUNodmJpQmxZV05vSUhOc2FXUmxLU0IzYVhSb0lEUWdjRzl6YzJsaWJHVWdZVzV6ZDJWeWMxeHVJQ0FnSUNBcUlFeHZiM0FnZEdoeWIzVm5hQ0IwYUdVZ2NYVmxjM1JwYjI1eklHRnVaQ0JoYm5OM1pYSnpYRzRnSURNdUlFRmtaQ0JoSUhOMVltMXBkQ0I1YjNWeUlHNWhiV1VnWm05eUlISmxjM1ZzZEhOY2JpQWdOQzRnVTJodmR5QnlaWE4xYkhSeklHRnVaQ0IwYUdVZ1ltVnpkQ0J2Y0hScGIyNGdabTl5SUdFZ1kyOTFjbk5sSUdKaGMyVmtJRzl1SUhOamIzSmxYRzRnSUNBZ0lDQXFJRUVnZDJGNUlIUnZJR3RsWlhBZ2MyTnZjbVZjYmlvdlhHNWNibU52Ym5OMElITjBZWEowUW5SdUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2loY0lpNXpkR0Z5ZEMxMFpYTjBMV0owYmx3aUtUdGNibU52Ym5OMElIUmxjM1JUY0d4aGMyZ2dQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtGd2lMblJsYzNRdGMzQnNZWE5vWENJcE8xeHVZMjl1YzNRZ2NYVnBla052Ym5SaGFXNWxjaUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9YQ0l1Y1hWcGVpMWpiMjUwWVdsdVpYSmNJaWs3WEc1amIyNXpkQ0J5WlhOMWJIUnpRMjl1ZEdGcGJtVnlJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpaGNJaTV5WlhOMWJIUnpMV052Ym5SaGFXNWxjbHdpS1R0Y2JtTnZibk4wSUhCaFoyVk1hWE4wSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWhjSWk1d1lXZGxMV3hwYzNSY0lpazdYRzVqYjI1emRDQndZV2RwYm1GMGFXOXVJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpaGNJaTV3WVdkcGJtRjBhVzl1WENJcE8xeHVZMjl1YzNRZ2JtVjRkRUowYmlBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvWENJdWJtVjRkQzFpZEc1Y0lpazdYRzVqYjI1emRDQnBibkIxZEU1aGJXVWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtGd2lMbWx1Y0hWMExXNWhiV1ZjSWlrN1hHNWpiMjV6ZENCdVlXMWxSbTl5YlNBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvWENJdWJtRnRaUzFtYjNKdFhDSXBPMXh1WTI5dWMzUWdjbVZ6ZFd4MGN5QTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb1hDSXVjbVZ6ZFd4MGMxd2lLVHRjYm14bGRDQnhkV1Z6ZEdsdmJrRnphMlZrSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvWENKeGRXVnpkR2x2Ymx3aUtUdGNibXhsZENCdmNIUnBiMjV6SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNoY0lpNWhibk4zWlhJdFluUnVYQ0lwTzF4dWJHVjBJR3hsZEhSbGNrOXdkQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvWENJdWJHVjBkR1Z5WENJcE8xeHViR1YwSUhCaFoyVk9kVzBnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0Z3aUxuQmhaMlV0Ym5WdFhDSXBPMXh1YkdWMElHWnBibUZzVTJOdmNtVWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtGd2lMbVpwYm1Gc0xYTmpiM0psWENJcE8xeHViR1YwSUdOdmRYSnpaVk4xWjJkbGMzUnBiMjRnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLRndpTG1OdmRYSnpaUzF6ZFdkblpYTjBhVzl1WENJcE8xeHViR1YwSUhOamIzSmxJRDBnTUR0Y2JteGxkQ0JwYm5RZ1BTQXdPMXh1WEc1emRHRnlkRUowYmk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0Z3aVkyeHBZMnRjSWl3Z2MzUmhjblJSZFdsNktUdGNibHh1THk4Z1UzUmhjblJ6SUhSb1pTQnhkV2w2WEc1bWRXNWpkR2x2YmlCemRHRnlkRkYxYVhvb0tTQjdYRzRnSUhSbGMzUlRjR3hoYzJndVkyeGhjM05NYVhOMExtRmtaQ2hjSW1ocFpHVmNJaWs3WEc0Z0lIQmhaMmx1WVhScGIyNHVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTaGNJbWhwWkdWY0lpazdYRzRnSUhGMWFYcERiMjUwWVdsdVpYSXVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTaGNJbWhwWkdWY0lpazdYRzRnSUhCdmNIVnNZWFJsVVhWbGMzUnBiMjRvS1R0Y2JuMWNibHh1THk4Z1VHOXdkV3hoZEdWeklIUm9aU0J4ZFdWemRHbHZiaUJoYm1RZ1lXNXpkMlZ5YzF4dVpuVnVZM1JwYjI0Z2NHOXdkV3hoZEdWUmRXVnpkR2x2YmlncElIdGNiaUFnYVdZZ0tHbHVkQ0E4SUhGMVpYTjBhVzl1Y3k1c1pXNW5kR2dwSUh0Y2JpQWdJQ0J4ZFdWemRHbHZia0Z6YTJWa0xtbHVibVZ5VkdWNGRDQTlJSEYxWlhOMGFXOXVjMXRwYm5SZExuRjFaWE4wYVc5dU8xeHVJQ0FnSUhCaFoyVk9kVzFiYVc1MFhTNWpiR0Z6YzB4cGMzUXVZV1JrS0Z3aVlXTjBhWFpsWENJcE8xeHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2NYVmxjM1JwYjI1ekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0J2Y0hScGIyNXpXMXh1SUNBZ0lDQWdJQ0JwWEc0Z0lDQWdJQ0JkTG1sdWJtVnlTRlJOVENBOUlHQThjM0JoYmlCamJHRnpjejFjSW14bGRIUmxjbHdpUGlSN2JHVjBkR1Z5VDNCMFcybGRMbWx1Ym1WeVNGUk5USDA4TDNOd1lXNCtJQ1I3Y1hWbGMzUnBiMjV6VzJsdWRGMHVZMmh2YVdObGMxdHBYWDFnTzF4dUlDQWdJQ0FnYjNCMGFXOXVjMXRwWFM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0Z3aVkyeHBZMnRjSWl3Z2NtbG5hSFJCYm5OM1pYSXBPMXh1SUNBZ0lIMWNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQnhkV2w2UTI5dWRHRnBibVZ5TG1Oc1lYTnpUR2x6ZEM1aFpHUW9YQ0pvYVdSbFhDSXBPMXh1SUNBZ0lISmxjM1ZzZEhORGIyNTBZV2x1WlhJdVkyeGhjM05NYVhOMExuSmxiVzkyWlNoY0ltaHBaR1ZjSWlrN1hHNGdJQ0FnY0dGblpVNTFiVnRwYm5SZExtTnNZWE56VEdsemRDNWhaR1FvWENKaFkzUnBkbVZjSWlrN1hHNGdJQ0FnYm1WNGRFSjBiaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLRndpWTJ4cFkydGNJaXdnZG1Gc2FXUmhkR1ZKYm5CMWRDazdYRzRnSUNBZ2FXNXdkWFJPWVcxbExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb1hDSnJaWGx3Y21WemMxd2lMQ0FvWlNrZ1BUNGdlMXh1SUNBZ0lDQWdiR1YwSUd0bGVVTnZaR1VnUFNCbExtTnZaR1U3WEc0Z0lDQWdJQ0JwWmlBb2EyVjVRMjlrWlNBOVBUMGdYQ0pGYm5SbGNsd2lLU0I3WEc0Z0lDQWdJQ0FnSUhaaGJHbGtZWFJsU1c1d2RYUW9LVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlLVHRjYmlBZ2ZWeHVmVnh1WEc0dkx5QlVaWE4wY3lCMGJ5QnpaV1VnYVdZZ2RHaGxJR0Z1YzNkbGNpQnBjeUJqYjNKeVpXTjBYRzVtZFc1amRHbHZiaUJ5YVdkb2RFRnVjM2RsY2lobEtTQjdYRzRnSUdOdmJuTjBJSFJoY21kbGRDQTlJR1V1ZEdGeVoyVjBMblJsZUhSRGIyNTBaVzUwTzF4dUlDQnhkV1Z6ZEdsdmJuTXVabTl5UldGamFDZ29ZVzV6ZDJWeUxDQnBibVJsZUNrZ1BUNGdlMXh1SUNBZ0lHbG1JQ2gwWVhKblpYUXVhVzVqYkhWa1pYTW9ZVzV6ZDJWeUxtRnVjM2RsY2lrcElIdGNiaUFnSUNBZ0lITmpiM0psS3lzN1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYmlBZ2FXNTBLeXM3WEc0Z0lIQnZjSFZzWVhSbFVYVmxjM1JwYjI0b0tUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z2NtVnpkV3gwVW1WMlpXRnNLQ2tnZTF4dUlDQndZV2RsVEdsemRDNWpiR0Z6YzB4cGMzUXVZV1JrS0Z3aWFHbGtaVndpS1R0Y2JpQWdibUZ0WlVadmNtMHVZMnhoYzNOTWFYTjBMbUZrWkNoY0ltaHBaR1ZjSWlrN1hHNGdJSEpsYzNWc2RITXVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTaGNJbWhwWkdWY0lpazdYRzRnSUd4bGRDQnVZVzFsSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWhjSWk1dVlXMWxMWFpoYkhWbFhDSXBPMXh1SUNCdVlXMWxMblJsZUhSRGIyNTBaVzUwSUQwZ2FXNXdkWFJPWVcxbExuWmhiSFZsTG5SdlRHOTNaWEpEWVhObEtDazdYRzRnSUdacGJtRnNVMk52Y21VdWRHVjRkRU52Ym5SbGJuUWdQU0J6WTI5eVpUdGNiaUFnYVdZZ0tITmpiM0psSUQwOVBTQTBLU0I3WEc0Z0lDQWdZMjkxY25ObFUzVm5aMlZ6ZEdsdmJpNTBaWGgwUTI5dWRHVnVkQ0E5SUZ3aVVISnZaSFZqZENCRmVHVmpkWFJwZG1VZ1EyVnlkR2xtYVdOaGRHVmNJanRjYmlBZ2ZTQmxiSE5sSUdsbUlDaHpZMjl5WlNBOVBUMGdNeWtnZTF4dUlDQWdJR052ZFhKelpWTjFaMmRsYzNScGIyNHVkR1Y0ZEVOdmJuUmxiblFnUFNCY0lsQnliMlIxWTNRZ1RHVmhaR1Z5SUVObGNuUnBabWxqWVhSbFhDSTdYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdZMjkxY25ObFUzVm5aMlZ6ZEdsdmJpNTBaWGgwUTI5dWRHVnVkQ0E5SUZ3aVVISnZaSFZqZENCTllXNWhaMlZ5SUVObGNuUnBabWxqWVhSbFhDSTdYRzRnSUgxY2JuMWNibHh1THk4Z1EyaGxZMnR6SUhSb1pTQnBibkIxZENCMGJ5QjJZV3hwWkdGMFpTQnBaaUIwYUdVZ2MzUnlhVzVuSUdseklHOXViSGtnYkdWMGRHVnljMXh1Wm5WdVkzUnBiMjRnZG1Gc2FXUmhkR1ZKYm5CMWRDZ3BJSHRjYmlBZ1kyOXVjM1FnYVc1d2RYUldZV3gxWlNBOUlHbHVjSFYwVG1GdFpTNTJZV3gxWlR0Y2JpQWdZMjl1YzNRZ2RtRnNhV1JNWlhSMFpYSnpJRDBnTDE1YlFTMWFZUzE2WFNza0x6dGNiaUFnYVdZZ0tHbHVjSFYwVm1Gc2RXVWdJVDA5SUZ3aVhDSWdKaVlnYVc1d2RYUldZV3gxWlM1dFlYUmphQ2gyWVd4cFpFeGxkSFJsY25NcEtTQjdYRzRnSUNBZ2NtVnpkV3gwVW1WMlpXRnNLQ2s3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnWTI5dWMzUWdhVzUyWVd4cFpDQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb1hDSXVhVzUyWVd4cFpGd2lLVHRjYmlBZ0lDQnBiblpoYkdsa0xtbHVibVZ5U0ZSTlRDQTlJRndpVUd4bFlYTmxJR1Z1ZEdWeUlIbHZkWElnYm1GdFpWd2lPMXh1SUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjYmlBZ2ZWeHVmVnh1WEc0dkx5QkJiR3dnYjJZZ2RHaGxJSEYxWlhOMGFXOXVjeUJoYm1RZ1lXNXpkMlZ5YzF4dVkyOXVjM1FnY1hWbGMzUnBiMjV6SUQwZ1cxeHVJQ0I3WEc0Z0lDQWdjWFZsYzNScGIyNDZJRndpVjJocFkyZ2diMllnZEdobGMyVWdhWE1nYm05MElHOXVaU0J2WmlCMGFHVWdZMjl1YzNSeVlXbHVkSE1nYjJZZ1lTQndjbTlxWldOMFAxd2lMRnh1SUNBZ0lHTm9iMmxqWlhNNklGdGNJbE5qYjNCbFhDSXNJRndpVW1WemIzVnlZMlZ6WENJc0lGd2lWR1ZoYlZ3aUxDQmNJa0oxWkdkbGRGd2lYU3hjYmlBZ0lDQmhibk4zWlhJNklGd2lWR1ZoYlZ3aVhHNGdJSDBzWEc0Z0lIdGNiaUFnSUNCeGRXVnpkR2x2YmpvZ1hDSlNiMjkwSUVOaGRYTmxJRUZ1WVd4NWMybHpJSEpsYkdGMFpYTWdkRzgvWENJc1hHNGdJQ0FnWTJodmFXTmxjem9nVzF4dUlDQWdJQ0FnWENKUWNtOWpaWE56SUVGdVlXeDVjMmx6WENJc1hHNGdJQ0FnSUNCY0lsRjFZV3hwZEhrZ1FYVmthWFJ6WENJc1hHNGdJQ0FnSUNCY0lsRjFZV3hwZEhrZ1EyOXVkSEp2YkNCTlpXRnpkWEp0Wlc1MGMxd2lMRnh1SUNBZ0lDQWdYQ0pJYVdWeVlYSmphR2xqWVd3Z1FXNWhiSGx6YVhOY0lseHVJQ0FnSUYwc1hHNGdJQ0FnWVc1emQyVnlPaUJjSWxCeWIyTmxjM01nUVc1aGJIbHphWE5jSWx4dUlDQjlMRnh1SUNCN1hHNGdJQ0FnY1hWbGMzUnBiMjQ2SUZ3aVVISnZZMlZ6Y3lCQmJtRnNlWE5wY3lCcGN5QmhJR1oxYm1OMGFXOXVJRzltUDF3aUxGeHVJQ0FnSUdOb2IybGpaWE02SUZ0Y2JpQWdJQ0FnSUZ3aVVHVnlabTl5YldGdVkyVWdRVzVoYkhsemFYTmNJaXhjYmlBZ0lDQWdJRndpVVhWaGJHbDBlU0JOWlhSeWFXTnpYQ0lzWEc0Z0lDQWdJQ0JjSWxCeWIyTmxjM01nU1cxd2NtOTJaVzFsYm5RZ1VHeGhibHdpTEZ4dUlDQWdJQ0FnWENKUmRXRnNhWFI1SUVsdGNISnZkbVZ0Wlc1MElGQnNZVzVjSWx4dUlDQWdJRjBzWEc0Z0lDQWdZVzV6ZDJWeU9pQmNJbEJ5YjJObGMzTWdTVzF3Y205MlpXMWxiblFnVUd4aGJsd2lYRzRnSUgwc1hHNGdJSHRjYmlBZ0lDQnhkV1Z6ZEdsdmJqcGNiaUFnSUNBZ0lGd2lRU0J6WTJobFpIVnNaU0JoWTNScGRtbDBlU0J0WVhrZ1ltVm5hVzRnTVRBZ1pHRjVjeUJpWldadmNtVWdkR2hsSUhCeVpXUmxZMlZ6YzI5eUlHRmpkR2wyYVhSNUlHWnBibWx6YUdWekxpQlVhR2x6SUdseklHRnVJR1Y0WVcxd2JHVWdiMlkvWENJc1hHNGdJQ0FnWTJodmFXTmxjem9nVzF4dUlDQWdJQ0FnWENKR2FXNXBjMmd0ZEc4dFUzUmhjblJjSWl4Y2JpQWdJQ0FnSUZ3aVUzUmhjblF0ZEc4dFJtbHVhWE5vWENJc1hHNGdJQ0FnSUNCY0lsTjBZWEowTFhSdkxWTjBZWEowWENJc1hHNGdJQ0FnSUNCY0lrWnBibWx6YUMxMGJ5MUdhVzVwYzJoY0lseHVJQ0FnSUYwc1hHNGdJQ0FnWVc1emQyVnlPaUJjSWtacGJtbHphQzEwYnkxVGRHRnlkRndpWEc0Z0lIMWNibDA3WEc0aVhTd2ljMjkxY21ObFVtOXZkQ0k2SWlKOSJ9
