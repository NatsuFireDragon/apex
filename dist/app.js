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

// Mobile Menu
const menuBars = document.querySelector(".menu-bars");
const mobileList = document
  .querySelector(".mobile-list")
  .querySelectorAll("li");
const mobileNav = document.querySelector(".mobile-menu");

menuBars.addEventListener("click", () => {
  mobileNav.style.width = "100%";
});

for (let i = 0; i < mobileList.length; i++) {
  mobileList[i].addEventListener("click", () => {
    mobileNav.style.width = "0%";
  });
}




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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1aXouanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7OztBQ2xDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsZUFBZSx1QkFBdUI7QUFDdEM7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQSw0Q0FBNEMsdUJBQXVCLFVBQVUsMEJBQTBCO0FBQ3ZHO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImNvbnN0IGFjY0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWNjLWJ0blwiKTtcbmNvbnN0IGFjY0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjY29yZGlvbi1pdGVtXCIpO1xuXG5cbi8vIEZBUSBBY2NvcmRpb25cbmFjY0J0bi5mb3JFYWNoKChlbGUpID0+IHtcbiAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IGNvbnRlbnQgPSBlbGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGxldCBpY29uID0gZWxlLmZpcnN0Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGxldCBhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY29yZGlvbi1pdGVtLmFjdGl2ZVwiKTtcbiAgICBsZXQgaWNvbkFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaWNvbi5hY3RpdmVcIik7XG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgaWYgKGVsZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICBlbGUucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAvLyByZW1vdmUgYWN0aXZlIGZyb20gaWNvblxuICAgICAgICBpY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIGFjdGl2ZS5sYXN0RWxlbWVudENoaWxkLnN0eWxlLm1heEhlaWdodCA9IFwiMFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIGFjdGl2ZS5sYXN0RWxlbWVudENoaWxkLnN0eWxlLm1heEhlaWdodCA9IFwiMFwiO1xuICAgICAgICAvLyByZW1vdmUgaWNvbiBhY3RpdmVcbiAgICAgICAgaWNvbkFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBlbGUucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAvLyBhZGQgYWN0aXZlIHRvIGljb25cbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGUucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgLy8gYWRkIGFjdGl2ZSB0byBpY29uXG4gICAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgIH1cbiAgfSk7XG59KTtcbiIsIi8vIE1vYmlsZSBNZW51XG5jb25zdCBtZW51QmFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1iYXJzXCIpO1xuY29uc3QgbW9iaWxlTGlzdCA9IGRvY3VtZW50XG4gIC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1saXN0XCIpXG4gIC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIik7XG5jb25zdCBtb2JpbGVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1tZW51XCIpO1xuXG5tZW51QmFycy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBtb2JpbGVOYXYuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbn0pO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IG1vYmlsZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgbW9iaWxlTGlzdFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1vYmlsZU5hdi5zdHlsZS53aWR0aCA9IFwiMCVcIjtcbiAgfSk7XG59XG5cblxuIiwiLypcbiAgMS4gSGlkZSB0aGUgdGVzdCBzcGxhc2ggc2NyZWVuIG9uIHRlc3QgYnRuIGNsaWNrXG4gICAgICAqIFNob3cgdGhlIHF1aXotY29udGFpbmVyIChhbHJlYWR5IHByZS1oaWRkZW4pXG4gIDIuIFBvcHVsYXRlIGEgbmV3IHF1ZXN0aW9uIChvbiBlYWNoIHNsaWRlKSB3aXRoIDQgcG9zc2libGUgYW5zd2Vyc1xuICAgICAqIExvb3AgdGhyb3VnaCB0aGUgcXVlc3Rpb25zIGFuZCBhbnN3ZXJzXG4gIDMuIEFkZCBhIHN1Ym1pdCB5b3VyIG5hbWUgZm9yIHJlc3VsdHNcbiAgNC4gU2hvdyByZXN1bHRzIGFuZCB0aGUgYmVzdCBvcHRpb24gZm9yIGEgY291cnNlIGJhc2VkIG9uIHNjb3JlXG4gICAgICAqIEEgd2F5IHRvIGtlZXAgc2NvcmVcbiovXG5cbmNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC10ZXN0LWJ0blwiKTtcbmNvbnN0IHRlc3RTcGxhc2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlc3Qtc3BsYXNoXCIpO1xuY29uc3QgcXVpekNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVpei1jb250YWluZXJcIik7XG5jb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRzLWNvbnRhaW5lclwiKTtcbmNvbnN0IHBhZ2VMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLWxpc3RcIik7XG5jb25zdCBwYWdpbmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdpbmF0aW9uXCIpO1xuY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV4dC1idG5cIik7XG5jb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LW5hbWVcIik7XG5jb25zdCBuYW1lRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmFtZS1mb3JtXCIpO1xuY29uc3QgcmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0c1wiKTtcbmxldCBxdWVzdGlvbkFza2VkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWVzdGlvblwiKTtcbmxldCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hbnN3ZXItYnRuXCIpO1xubGV0IGxldHRlck9wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGV0dGVyXCIpO1xubGV0IHBhZ2VOdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBhZ2UtbnVtXCIpO1xubGV0IGZpbmFsU2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbmFsLXNjb3JlXCIpO1xubGV0IGNvdXJzZVN1Z2dlc3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdXJzZS1zdWdnZXN0aW9uXCIpO1xubGV0IHNjb3JlID0gMDtcbmxldCBpbnQgPSAwO1xuXG5zdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRRdWl6KTtcblxuLy8gU3RhcnRzIHRoZSBxdWl6XG5mdW5jdGlvbiBzdGFydFF1aXooKSB7XG4gIHRlc3RTcGxhc2guY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gIHBhZ2luYXRpb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gIHF1aXpDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gIHBvcHVsYXRlUXVlc3Rpb24oKTtcbn1cblxuLy8gUG9wdWxhdGVzIHRoZSBxdWVzdGlvbiBhbmQgYW5zd2Vyc1xuZnVuY3Rpb24gcG9wdWxhdGVRdWVzdGlvbigpIHtcbiAgaWYgKGludCA8IHF1ZXN0aW9ucy5sZW5ndGgpIHtcbiAgICBxdWVzdGlvbkFza2VkLmlubmVyVGV4dCA9IHF1ZXN0aW9uc1tpbnRdLnF1ZXN0aW9uO1xuICAgIHBhZ2VOdW1baW50XS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvcHRpb25zW1xuICAgICAgICBpXG4gICAgICBdLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cImxldHRlclwiPiR7bGV0dGVyT3B0W2ldLmlubmVySFRNTH08L3NwYW4+ICR7cXVlc3Rpb25zW2ludF0uY2hvaWNlc1tpXX1gO1xuICAgICAgb3B0aW9uc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmlnaHRBbnN3ZXIpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBxdWl6Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIHJlc3VsdHNDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgcGFnZU51bVtpbnRdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdmFsaWRhdGVJbnB1dCk7XG4gICAgaW5wdXROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgICAgbGV0IGtleUNvZGUgPSBlLmNvZGU7XG4gICAgICBpZiAoa2V5Q29kZSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIHZhbGlkYXRlSW5wdXQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG4vLyBUZXN0cyB0byBzZWUgaWYgdGhlIGFuc3dlciBpcyBjb3JyZWN0XG5mdW5jdGlvbiByaWdodEFuc3dlcihlKSB7XG4gIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICBxdWVzdGlvbnMuZm9yRWFjaCgoYW5zd2VyLCBpbmRleCkgPT4ge1xuICAgIGlmICh0YXJnZXQuaW5jbHVkZXMoYW5zd2VyLmFuc3dlcikpIHtcbiAgICAgIHNjb3JlKys7XG4gICAgfVxuICB9KTtcbiAgaW50Kys7XG4gIHBvcHVsYXRlUXVlc3Rpb24oKTtcbn1cblxuZnVuY3Rpb24gcmVzdWx0UmV2ZWFsKCkge1xuICBwYWdlTGlzdC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgbmFtZUZvcm0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gIHJlc3VsdHMuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gIGxldCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYW1lLXZhbHVlXCIpO1xuICBuYW1lLnRleHRDb250ZW50ID0gaW5wdXROYW1lLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gIGZpbmFsU2NvcmUudGV4dENvbnRlbnQgPSBzY29yZTtcbiAgaWYgKHNjb3JlID09PSA0KSB7XG4gICAgY291cnNlU3VnZ2VzdGlvbi50ZXh0Q29udGVudCA9IFwiUHJvZHVjdCBFeGVjdXRpdmUgQ2VydGlmaWNhdGVcIjtcbiAgfSBlbHNlIGlmIChzY29yZSA9PT0gMykge1xuICAgIGNvdXJzZVN1Z2dlc3Rpb24udGV4dENvbnRlbnQgPSBcIlByb2R1Y3QgTGVhZGVyIENlcnRpZmljYXRlXCI7XG4gIH0gZWxzZSB7XG4gICAgY291cnNlU3VnZ2VzdGlvbi50ZXh0Q29udGVudCA9IFwiUHJvZHVjdCBNYW5hZ2VyIENlcnRpZmljYXRlXCI7XG4gIH1cbn1cblxuLy8gQ2hlY2tzIHRoZSBpbnB1dCB0byB2YWxpZGF0ZSBpZiB0aGUgc3RyaW5nIGlzIG9ubHkgbGV0dGVyc1xuZnVuY3Rpb24gdmFsaWRhdGVJbnB1dCgpIHtcbiAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0TmFtZS52YWx1ZTtcbiAgY29uc3QgdmFsaWRMZXR0ZXJzID0gL15bQS1aYS16XSskLztcbiAgaWYgKGlucHV0VmFsdWUgIT09IFwiXCIgJiYgaW5wdXRWYWx1ZS5tYXRjaCh2YWxpZExldHRlcnMpKSB7XG4gICAgcmVzdWx0UmV2ZWFsKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaW52YWxpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW52YWxpZFwiKTtcbiAgICBpbnZhbGlkLmlubmVySFRNTCA9IFwiUGxlYXNlIGVudGVyIHlvdXIgbmFtZVwiO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vLyBBbGwgb2YgdGhlIHF1ZXN0aW9ucyBhbmQgYW5zd2Vyc1xuY29uc3QgcXVlc3Rpb25zID0gW1xuICB7XG4gICAgcXVlc3Rpb246IFwiV2hpY2ggb2YgdGhlc2UgaXMgbm90IG9uZSBvZiB0aGUgY29uc3RyYWludHMgb2YgYSBwcm9qZWN0P1wiLFxuICAgIGNob2ljZXM6IFtcIlNjb3BlXCIsIFwiUmVzb3VyY2VzXCIsIFwiVGVhbVwiLCBcIkJ1ZGdldFwiXSxcbiAgICBhbnN3ZXI6IFwiVGVhbVwiXG4gIH0sXG4gIHtcbiAgICBxdWVzdGlvbjogXCJSb290IENhdXNlIEFuYWx5c2lzIHJlbGF0ZXMgdG8/XCIsXG4gICAgY2hvaWNlczogW1xuICAgICAgXCJQcm9jZXNzIEFuYWx5c2lzXCIsXG4gICAgICBcIlF1YWxpdHkgQXVkaXRzXCIsXG4gICAgICBcIlF1YWxpdHkgQ29udHJvbCBNZWFzdXJtZW50c1wiLFxuICAgICAgXCJIaWVyYXJjaGljYWwgQW5hbHlzaXNcIlxuICAgIF0sXG4gICAgYW5zd2VyOiBcIlByb2Nlc3MgQW5hbHlzaXNcIlxuICB9LFxuICB7XG4gICAgcXVlc3Rpb246IFwiUHJvY2VzcyBBbmFseXNpcyBpcyBhIGZ1bmN0aW9uIG9mP1wiLFxuICAgIGNob2ljZXM6IFtcbiAgICAgIFwiUGVyZm9ybWFuY2UgQW5hbHlzaXNcIixcbiAgICAgIFwiUXVhbGl0eSBNZXRyaWNzXCIsXG4gICAgICBcIlByb2Nlc3MgSW1wcm92ZW1lbnQgUGxhblwiLFxuICAgICAgXCJRdWFsaXR5IEltcHJvdmVtZW50IFBsYW5cIlxuICAgIF0sXG4gICAgYW5zd2VyOiBcIlByb2Nlc3MgSW1wcm92ZW1lbnQgUGxhblwiXG4gIH0sXG4gIHtcbiAgICBxdWVzdGlvbjpcbiAgICAgIFwiQSBzY2hlZHVsZSBhY3Rpdml0eSBtYXkgYmVnaW4gMTAgZGF5cyBiZWZvcmUgdGhlIHByZWRlY2Vzc29yIGFjdGl2aXR5IGZpbmlzaGVzLiBUaGlzIGlzIGFuIGV4YW1wbGUgb2Y/XCIsXG4gICAgY2hvaWNlczogW1xuICAgICAgXCJGaW5pc2gtdG8tU3RhcnRcIixcbiAgICAgIFwiU3RhcnQtdG8tRmluaXNoXCIsXG4gICAgICBcIlN0YXJ0LXRvLVN0YXJ0XCIsXG4gICAgICBcIkZpbmlzaC10by1GaW5pc2hcIlxuICAgIF0sXG4gICAgYW5zd2VyOiBcIkZpbmlzaC10by1TdGFydFwiXG4gIH1cbl07XG4iXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwyRndjQzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmFXNWtaWGd1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwzRjFhWG91YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0UlFVRkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk96czdVVUZIUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFc01FTkJRVEJETEdkRFFVRm5RenRSUVVNeFJUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxIZEVRVUYzUkN4clFrRkJhMEk3VVVGRE1VVTdVVUZEUVN4cFJFRkJhVVFzWTBGQll6dFJRVU12UkRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEVzZVVOQlFYbERMR2xEUVVGcFF6dFJRVU14UlN4blNFRkJaMGdzYlVKQlFXMUNMRVZCUVVVN1VVRkRja2s3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3d5UWtGQk1rSXNNRUpCUVRCQ0xFVkJRVVU3VVVGRGRrUXNhVU5CUVdsRExHVkJRV1U3VVVGRGFFUTdVVUZEUVR0UlFVTkJPenRSUVVWQk8xRkJRMEVzYzBSQlFYTkVMQ3RFUVVFclJEczdVVUZGY2tnN1VVRkRRVHM3TzFGQlIwRTdVVUZEUVRzN096czdPenM3T3pzN08wRkRiRVpCTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUMEZCVHp0QlFVTlFPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklMRU5CUVVNN096czdPenM3T3pzN096dEJRMnhEUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRU5CUVVNN08wRkJSVVFzWlVGQlpTeDFRa0ZCZFVJN1FVRkRkRU03UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0RzN096czdPenM3T3pzN096czdRVU5tUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h0UWtGQmJVSXNjMEpCUVhOQ08wRkJRM3BETzBGQlEwRTdRVUZEUVN3MFEwRkJORU1zZFVKQlFYVkNMRlZCUVZVc01FSkJRVEJDTzBGQlEzWkhPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJJaXdpWm1sc1pTSTZJalUyTmpVeU5HUmlPV0ppWVdFeFpEZ3pZelV6TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lJRngwTHk4Z1ZHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBkbUZ5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE1nUFNCN2ZUdGNibHh1SUZ4MEx5OGdWR2hsSUhKbGNYVnBjbVVnWm5WdVkzUnBiMjVjYmlCY2RHWjFibU4wYVc5dUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9iVzlrZFd4bFNXUXBJSHRjYmx4dUlGeDBYSFF2THlCRGFHVmpheUJwWmlCdGIyUjFiR1VnYVhNZ2FXNGdZMkZqYUdWY2JpQmNkRngwYVdZb2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwcElIdGNiaUJjZEZ4MFhIUnlaWFIxY200Z2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVpYaHdiM0owY3p0Y2JpQmNkRngwZlZ4dUlGeDBYSFF2THlCRGNtVmhkR1VnWVNCdVpYY2diVzlrZFd4bElDaGhibVFnY0hWMElHbDBJR2x1ZEc4Z2RHaGxJR05oWTJobEtWeHVJRngwWEhSMllYSWdiVzlrZFd4bElEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMGdQU0I3WEc0Z1hIUmNkRngwYVRvZ2JXOWtkV3hsU1dRc1hHNGdYSFJjZEZ4MGJEb2dabUZzYzJVc1hHNGdYSFJjZEZ4MFpYaHdiM0owY3pvZ2UzMWNiaUJjZEZ4MGZUdGNibHh1SUZ4MFhIUXZMeUJGZUdWamRYUmxJSFJvWlNCdGIyUjFiR1VnWm5WdVkzUnBiMjVjYmlCY2RGeDBiVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVZMkZzYkNodGIyUjFiR1V1Wlhod2IzSjBjeXdnYlc5a2RXeGxMQ0J0YjJSMWJHVXVaWGh3YjNKMGN5d2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWs3WEc1Y2JpQmNkRngwTHk4Z1JteGhaeUIwYUdVZ2JXOWtkV3hsSUdGeklHeHZZV1JsWkZ4dUlGeDBYSFJ0YjJSMWJHVXViQ0E5SUhSeWRXVTdYRzVjYmlCY2RGeDBMeThnVW1WMGRYSnVJSFJvWlNCbGVIQnZjblJ6SUc5bUlIUm9aU0J0YjJSMWJHVmNiaUJjZEZ4MGNtVjBkWEp1SUcxdlpIVnNaUzVsZUhCdmNuUnpPMXh1SUZ4MGZWeHVYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxjeUJ2WW1wbFkzUWdLRjlmZDJWaWNHRmphMTl0YjJSMWJHVnpYMThwWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTBnUFNCdGIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWpJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjenRjYmx4dUlGeDBMeThnWkdWbWFXNWxJR2RsZEhSbGNpQm1kVzVqZEdsdmJpQm1iM0lnYUdGeWJXOXVlU0JsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpMQ0J1WVcxbExDQm5aWFIwWlhJcElIdGNiaUJjZEZ4MGFXWW9JVjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlobGVIQnZjblJ6TENCdVlXMWxLU2tnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQnVZVzFsTENCN0lHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc0lHZGxkRG9nWjJWMGRHVnlJSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdYMTlsYzAxdlpIVnNaU0J2YmlCbGVIQnZjblJ6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbklnUFNCbWRXNWpkR2x2YmlobGVIQnZjblJ6S1NCN1hHNGdYSFJjZEdsbUtIUjVjR1Z2WmlCVGVXMWliMndnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUZONWJXSnZiQzUwYjFOMGNtbHVaMVJoWnlrZ2UxeHVJRngwWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0JUZVcxaWIyd3VkRzlUZEhKcGJtZFVZV2NzSUhzZ2RtRnNkV1U2SUNkTmIyUjFiR1VuSUgwcE8xeHVJRngwWEhSOVhHNGdYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQW5YMTlsYzAxdlpIVnNaU2NzSUhzZ2RtRnNkV1U2SUhSeWRXVWdmU2s3WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJqY21WaGRHVWdZU0JtWVd0bElHNWhiV1Z6Y0dGalpTQnZZbXBsWTNSY2JpQmNkQzh2SUcxdlpHVWdKaUF4T2lCMllXeDFaU0JwY3lCaElHMXZaSFZzWlNCcFpDd2djbVZ4ZFdseVpTQnBkRnh1SUZ4MEx5OGdiVzlrWlNBbUlESTZJRzFsY21kbElHRnNiQ0J3Y205d1pYSjBhV1Z6SUc5bUlIWmhiSFZsSUdsdWRHOGdkR2hsSUc1elhHNGdYSFF2THlCdGIyUmxJQ1lnTkRvZ2NtVjBkWEp1SUhaaGJIVmxJSGRvWlc0Z1lXeHlaV0ZrZVNCdWN5QnZZbXBsWTNSY2JpQmNkQzh2SUcxdlpHVWdKaUE0ZkRFNklHSmxhR0YyWlNCc2FXdGxJSEpsY1hWcGNtVmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWRDQTlJR1oxYm1OMGFXOXVLSFpoYkhWbExDQnRiMlJsS1NCN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBeEtTQjJZV3gxWlNBOUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9kbUZzZFdVcE8xeHVJRngwWEhScFppaHRiMlJsSUNZZ09Da2djbVYwZFhKdUlIWmhiSFZsTzF4dUlGeDBYSFJwWmlnb2JXOWtaU0FtSURRcElDWW1JSFI1Y0dWdlppQjJZV3gxWlNBOVBUMGdKMjlpYW1WamRDY2dKaVlnZG1Gc2RXVWdKaVlnZG1Gc2RXVXVYMTlsYzAxdlpIVnNaU2tnY21WMGRYSnVJSFpoYkhWbE8xeHVJRngwWEhSMllYSWdibk1nUFNCUFltcGxZM1F1WTNKbFlYUmxLRzUxYkd3cE8xeHVJRngwWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuSW9ibk1wTzF4dUlGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb2JuTXNJQ2RrWldaaGRXeDBKeXdnZXlCbGJuVnRaWEpoWW14bE9pQjBjblZsTENCMllXeDFaVG9nZG1Gc2RXVWdmU2s3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUF5SUNZbUlIUjVjR1Z2WmlCMllXeDFaU0FoUFNBbmMzUnlhVzVuSnlrZ1ptOXlLSFpoY2lCclpYa2dhVzRnZG1Gc2RXVXBJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNodWN5d2dhMlY1TENCbWRXNWpkR2x2YmloclpYa3BJSHNnY21WMGRYSnVJSFpoYkhWbFcydGxlVjA3SUgwdVltbHVaQ2h1ZFd4c0xDQnJaWGtwS1R0Y2JpQmNkRngwY21WMGRYSnVJRzV6TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnWjJWMFJHVm1ZWFZzZEVWNGNHOXlkQ0JtZFc1amRHbHZiaUJtYjNJZ1kyOXRjR0YwYVdKcGJHbDBlU0IzYVhSb0lHNXZiaTFvWVhKdGIyNTVJRzF2WkhWc1pYTmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJpQTlJR1oxYm1OMGFXOXVLRzF2WkhWc1pTa2dlMXh1SUZ4MFhIUjJZWElnWjJWMGRHVnlJRDBnYlc5a2RXeGxJQ1ltSUcxdlpIVnNaUzVmWDJWelRXOWtkV3hsSUQ5Y2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUkVaV1poZFd4MEtDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bFd5ZGtaV1poZFd4MEoxMDdJSDBnT2x4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFMXZaSFZzWlVWNGNHOXlkSE1vS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1U3SUgwN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDaG5aWFIwWlhJc0lDZGhKeXdnWjJWMGRHVnlLVHRjYmlCY2RGeDBjbVYwZFhKdUlHZGxkSFJsY2p0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2SUQwZ1puVnVZM1JwYjI0b2IySnFaV04wTENCd2NtOXdaWEowZVNrZ2V5QnlaWFIxY200Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcE95QjlPMXh1WEc0Z1hIUXZMeUJmWDNkbFluQmhZMnRmY0hWaWJHbGpYM0JoZEdoZlgxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1d0lEMGdYQ0pjSWp0Y2JseHVYRzRnWEhRdkx5Qk1iMkZrSUdWdWRISjVJRzF2WkhWc1pTQmhibVFnY21WMGRYSnVJR1Y0Y0c5eWRITmNiaUJjZEhKbGRIVnliaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0Y5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWN5QTlJREFwTzF4dUlpd2lZMjl1YzNRZ1lXTmpRblJ1SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNoY0lpNWhZMk10WW5SdVhDSXBPMXh1WTI5dWMzUWdZV05qU1hSbGJTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29YQ0l1WVdOamIzSmthVzl1TFdsMFpXMWNJaWs3WEc1Y2JseHVMeThnUmtGUklFRmpZMjl5WkdsdmJseHVZV05qUW5SdUxtWnZja1ZoWTJnb0tHVnNaU2tnUFQ0Z2UxeHVJQ0JsYkdVdVlXUmtSWFpsYm5STWFYTjBaVzVsY2loY0ltTnNhV05yWENJc0lDZ3BJRDArSUh0Y2JpQWdJQ0JzWlhRZ1kyOXVkR1Z1ZENBOUlHVnNaUzV1WlhoMFJXeGxiV1Z1ZEZOcFlteHBibWM3WEc0Z0lDQWdiR1YwSUdsamIyNGdQU0JsYkdVdVptbHljM1JEYUdsc1pDNXVaWGgwUld4bGJXVnVkRk5wWW14cGJtYzdYRzRnSUNBZ2JHVjBJR0ZqZEdsMlpTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb1hDSXVZV05qYjNKa2FXOXVMV2wwWlcwdVlXTjBhWFpsWENJcE8xeHVJQ0FnSUd4bGRDQnBZMjl1UVdOMGFYWmxJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpaGNJaTVwWTI5dUxtRmpkR2wyWlZ3aUtUdGNiaUFnSUNCcFppQW9ZV04wYVhabEtTQjdYRzRnSUNBZ0lDQnBaaUFvWld4bExuQmhjbVZ1ZEVWc1pXMWxiblF1WTJ4aGMzTk1hWE4wTG1OdmJuUmhhVzV6S0Z3aVlXTjBhWFpsWENJcEtTQjdYRzRnSUNBZ0lDQWdJR1ZzWlM1d1lYSmxiblJGYkdWdFpXNTBMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9YQ0poWTNScGRtVmNJaWs3WEc0Z0lDQWdJQ0FnSUM4dklISmxiVzkyWlNCaFkzUnBkbVVnWm5KdmJTQnBZMjl1WEc0Z0lDQWdJQ0FnSUdsamIyNHVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTaGNJbUZqZEdsMlpWd2lLVHRjYmlBZ0lDQWdJQ0FnWVdOMGFYWmxMbXhoYzNSRmJHVnRaVzUwUTJocGJHUXVjM1I1YkdVdWJXRjRTR1ZwWjJoMElEMGdYQ0l3WENJN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCaFkzUnBkbVV1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2hjSW1GamRHbDJaVndpS1R0Y2JpQWdJQ0FnSUNBZ1lXTjBhWFpsTG14aGMzUkZiR1Z0Wlc1MFEyaHBiR1F1YzNSNWJHVXViV0Y0U0dWcFoyaDBJRDBnWENJd1hDSTdYRzRnSUNBZ0lDQWdJQzh2SUhKbGJXOTJaU0JwWTI5dUlHRmpkR2wyWlZ4dUlDQWdJQ0FnSUNCcFkyOXVRV04wYVhabExtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb1hDSmhZM1JwZG1WY0lpazdYRzRnSUNBZ0lDQWdJR1ZzWlM1d1lYSmxiblJGYkdWdFpXNTBMbU5zWVhOelRHbHpkQzVoWkdRb1hDSmhZM1JwZG1WY0lpazdYRzRnSUNBZ0lDQWdJQzh2SUdGa1pDQmhZM1JwZG1VZ2RHOGdhV052Ymx4dUlDQWdJQ0FnSUNCcFkyOXVMbU5zWVhOelRHbHpkQzVoWkdRb1hDSmhZM1JwZG1WY0lpazdYRzRnSUNBZ0lDQWdJR052Ym5SbGJuUXVjM1I1YkdVdWJXRjRTR1ZwWjJoMElEMGdZMjl1ZEdWdWRDNXpZM0p2Ykd4SVpXbG5hSFFnS3lCY0luQjRYQ0k3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHVnNaUzV3WVhKbGJuUkZiR1Z0Wlc1MExtTnNZWE56VEdsemRDNWhaR1FvWENKaFkzUnBkbVZjSWlrN1hHNGdJQ0FnSUNBdkx5QmhaR1FnWVdOMGFYWmxJSFJ2SUdsamIyNWNiaUFnSUNBZ0lHbGpiMjR1WTJ4aGMzTk1hWE4wTG1Ga1pDaGNJbUZqZEdsMlpWd2lLVHRjYmlBZ0lDQWdJR052Ym5SbGJuUXVjM1I1YkdVdWJXRjRTR1ZwWjJoMElEMGdZMjl1ZEdWdWRDNXpZM0p2Ykd4SVpXbG5hSFFnS3lCY0luQjRYQ0k3WEc0Z0lDQWdmVnh1SUNCOUtUdGNibjBwTzF4dUlpd2lMeThnVFc5aWFXeGxJRTFsYm5WY2JtTnZibk4wSUcxbGJuVkNZWEp6SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWhjSWk1dFpXNTFMV0poY25OY0lpazdYRzVqYjI1emRDQnRiMkpwYkdWTWFYTjBJRDBnWkc5amRXMWxiblJjYmlBZ0xuRjFaWEo1VTJWc1pXTjBiM0lvWENJdWJXOWlhV3hsTFd4cGMzUmNJaWxjYmlBZ0xuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b1hDSnNhVndpS1R0Y2JtTnZibk4wSUcxdlltbHNaVTVoZGlBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvWENJdWJXOWlhV3hsTFcxbGJuVmNJaWs3WEc1Y2JtMWxiblZDWVhKekxtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb1hDSmpiR2xqYTF3aUxDQW9LU0E5UGlCN1hHNGdJRzF2WW1sc1pVNWhkaTV6ZEhsc1pTNTNhV1IwYUNBOUlGd2lNVEF3SlZ3aU8xeHVmU2s3WEc1Y2JtWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2diVzlpYVd4bFRHbHpkQzVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0J0YjJKcGJHVk1hWE4wVzJsZExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb1hDSmpiR2xqYTF3aUxDQW9LU0E5UGlCN1hHNGdJQ0FnYlc5aWFXeGxUbUYyTG5OMGVXeGxMbmRwWkhSb0lEMGdYQ0l3SlZ3aU8xeHVJQ0I5S1R0Y2JuMWNibHh1WEc0aUxDSXZLbHh1SUNBeExpQklhV1JsSUhSb1pTQjBaWE4wSUhOd2JHRnphQ0J6WTNKbFpXNGdiMjRnZEdWemRDQmlkRzRnWTJ4cFkydGNiaUFnSUNBZ0lDb2dVMmh2ZHlCMGFHVWdjWFZwZWkxamIyNTBZV2x1WlhJZ0tHRnNjbVZoWkhrZ2NISmxMV2hwWkdSbGJpbGNiaUFnTWk0Z1VHOXdkV3hoZEdVZ1lTQnVaWGNnY1hWbGMzUnBiMjRnS0c5dUlHVmhZMmdnYzJ4cFpHVXBJSGRwZEdnZ05DQndiM056YVdKc1pTQmhibk4zWlhKelhHNGdJQ0FnSUNvZ1RHOXZjQ0IwYUhKdmRXZG9JSFJvWlNCeGRXVnpkR2x2Ym5NZ1lXNWtJR0Z1YzNkbGNuTmNiaUFnTXk0Z1FXUmtJR0VnYzNWaWJXbDBJSGx2ZFhJZ2JtRnRaU0JtYjNJZ2NtVnpkV3gwYzF4dUlDQTBMaUJUYUc5M0lISmxjM1ZzZEhNZ1lXNWtJSFJvWlNCaVpYTjBJRzl3ZEdsdmJpQm1iM0lnWVNCamIzVnljMlVnWW1GelpXUWdiMjRnYzJOdmNtVmNiaUFnSUNBZ0lDb2dRU0IzWVhrZ2RHOGdhMlZsY0NCelkyOXlaVnh1S2k5Y2JseHVZMjl1YzNRZ2MzUmhjblJDZEc0Z1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0Z3aUxuTjBZWEowTFhSbGMzUXRZblJ1WENJcE8xeHVZMjl1YzNRZ2RHVnpkRk53YkdGemFDQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb1hDSXVkR1Z6ZEMxemNHeGhjMmhjSWlrN1hHNWpiMjV6ZENCeGRXbDZRMjl1ZEdGcGJtVnlJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpaGNJaTV4ZFdsNkxXTnZiblJoYVc1bGNsd2lLVHRjYm1OdmJuTjBJSEpsYzNWc2RITkRiMjUwWVdsdVpYSWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtGd2lMbkpsYzNWc2RITXRZMjl1ZEdGcGJtVnlYQ0lwTzF4dVkyOXVjM1FnY0dGblpVeHBjM1FnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLRndpTG5CaFoyVXRiR2x6ZEZ3aUtUdGNibU52Ym5OMElIQmhaMmx1WVhScGIyNGdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtGd2lMbkJoWjJsdVlYUnBiMjVjSWlrN1hHNWpiMjV6ZENCdVpYaDBRblJ1SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWhjSWk1dVpYaDBMV0owYmx3aUtUdGNibU52Ym5OMElHbHVjSFYwVG1GdFpTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb1hDSXVhVzV3ZFhRdGJtRnRaVndpS1R0Y2JtTnZibk4wSUc1aGJXVkdiM0p0SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWhjSWk1dVlXMWxMV1p2Y20xY0lpazdYRzVqYjI1emRDQnlaWE4xYkhSeklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2loY0lpNXlaWE4xYkhSelhDSXBPMXh1YkdWMElIRjFaWE4wYVc5dVFYTnJaV1FnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2hjSW5GMVpYTjBhVzl1WENJcE8xeHViR1YwSUc5d2RHbHZibk1nUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0Z3aUxtRnVjM2RsY2kxaWRHNWNJaWs3WEc1c1pYUWdiR1YwZEdWeVQzQjBJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2hjSWk1c1pYUjBaWEpjSWlrN1hHNXNaWFFnY0dGblpVNTFiU0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvWENJdWNHRm5aUzF1ZFcxY0lpazdYRzVzWlhRZ1ptbHVZV3hUWTI5eVpTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb1hDSXVabWx1WVd3dGMyTnZjbVZjSWlrN1hHNXNaWFFnWTI5MWNuTmxVM1ZuWjJWemRHbHZiaUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9YQ0l1WTI5MWNuTmxMWE4xWjJkbGMzUnBiMjVjSWlrN1hHNXNaWFFnYzJOdmNtVWdQU0F3TzF4dWJHVjBJR2x1ZENBOUlEQTdYRzVjYm5OMFlYSjBRblJ1TG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvWENKamJHbGphMXdpTENCemRHRnlkRkYxYVhvcE8xeHVYRzR2THlCVGRHRnlkSE1nZEdobElIRjFhWHBjYm1aMWJtTjBhVzl1SUhOMFlYSjBVWFZwZWlncElIdGNiaUFnZEdWemRGTndiR0Z6YUM1amJHRnpjMHhwYzNRdVlXUmtLRndpYUdsa1pWd2lLVHRjYmlBZ2NHRm5hVzVoZEdsdmJpNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtGd2lhR2xrWlZ3aUtUdGNiaUFnY1hWcGVrTnZiblJoYVc1bGNpNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtGd2lhR2xrWlZ3aUtUdGNiaUFnY0c5d2RXeGhkR1ZSZFdWemRHbHZiaWdwTzF4dWZWeHVYRzR2THlCUWIzQjFiR0YwWlhNZ2RHaGxJSEYxWlhOMGFXOXVJR0Z1WkNCaGJuTjNaWEp6WEc1bWRXNWpkR2x2YmlCd2IzQjFiR0YwWlZGMVpYTjBhVzl1S0NrZ2UxeHVJQ0JwWmlBb2FXNTBJRHdnY1hWbGMzUnBiMjV6TG14bGJtZDBhQ2tnZTF4dUlDQWdJSEYxWlhOMGFXOXVRWE5yWldRdWFXNXVaWEpVWlhoMElEMGdjWFZsYzNScGIyNXpXMmx1ZEYwdWNYVmxjM1JwYjI0N1hHNGdJQ0FnY0dGblpVNTFiVnRwYm5SZExtTnNZWE56VEdsemRDNWhaR1FvWENKaFkzUnBkbVZjSWlrN1hHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCeGRXVnpkR2x2Ym5NdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJRzl3ZEdsdmJuTmJYRzRnSUNBZ0lDQWdJR2xjYmlBZ0lDQWdJRjB1YVc1dVpYSklWRTFNSUQwZ1lEeHpjR0Z1SUdOc1lYTnpQVndpYkdWMGRHVnlYQ0krSkh0c1pYUjBaWEpQY0hSYmFWMHVhVzV1WlhKSVZFMU1mVHd2YzNCaGJqNGdKSHR4ZFdWemRHbHZibk5iYVc1MFhTNWphRzlwWTJWelcybGRmV0E3WEc0Z0lDQWdJQ0J2Y0hScGIyNXpXMmxkTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvWENKamJHbGphMXdpTENCeWFXZG9kRUZ1YzNkbGNpazdYRzRnSUNBZ2ZWeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lIRjFhWHBEYjI1MFlXbHVaWEl1WTJ4aGMzTk1hWE4wTG1Ga1pDaGNJbWhwWkdWY0lpazdYRzRnSUNBZ2NtVnpkV3gwYzBOdmJuUmhhVzVsY2k1amJHRnpjMHhwYzNRdWNtVnRiM1psS0Z3aWFHbGtaVndpS1R0Y2JpQWdJQ0J3WVdkbFRuVnRXMmx1ZEYwdVkyeGhjM05NYVhOMExtRmtaQ2hjSW1GamRHbDJaVndpS1R0Y2JpQWdJQ0J1WlhoMFFuUnVMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9YQ0pqYkdsamExd2lMQ0IyWVd4cFpHRjBaVWx1Y0hWMEtUdGNiaUFnSUNCcGJuQjFkRTVoYldVdVlXUmtSWFpsYm5STWFYTjBaVzVsY2loY0ltdGxlWEJ5WlhOelhDSXNJQ2hsS1NBOVBpQjdYRzRnSUNBZ0lDQnNaWFFnYTJWNVEyOWtaU0E5SUdVdVkyOWtaVHRjYmlBZ0lDQWdJR2xtSUNoclpYbERiMlJsSUQwOVBTQmNJa1Z1ZEdWeVhDSXBJSHRjYmlBZ0lDQWdJQ0FnZG1Gc2FXUmhkR1ZKYm5CMWRDZ3BPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHBPMXh1SUNCOVhHNTlYRzVjYmk4dklGUmxjM1J6SUhSdklITmxaU0JwWmlCMGFHVWdZVzV6ZDJWeUlHbHpJR052Y25KbFkzUmNibVoxYm1OMGFXOXVJSEpwWjJoMFFXNXpkMlZ5S0dVcElIdGNiaUFnWTI5dWMzUWdkR0Z5WjJWMElEMGdaUzUwWVhKblpYUXVkR1Y0ZEVOdmJuUmxiblE3WEc0Z0lIRjFaWE4wYVc5dWN5NW1iM0pGWVdOb0tDaGhibk4zWlhJc0lHbHVaR1Y0S1NBOVBpQjdYRzRnSUNBZ2FXWWdLSFJoY21kbGRDNXBibU5zZFdSbGN5aGhibk4zWlhJdVlXNXpkMlZ5S1NrZ2UxeHVJQ0FnSUNBZ2MyTnZjbVVyS3p0Y2JpQWdJQ0I5WEc0Z0lIMHBPMXh1SUNCcGJuUXJLenRjYmlBZ2NHOXdkV3hoZEdWUmRXVnpkR2x2YmlncE8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCeVpYTjFiSFJTWlhabFlXd29LU0I3WEc0Z0lIQmhaMlZNYVhOMExtTnNZWE56VEdsemRDNWhaR1FvWENKb2FXUmxYQ0lwTzF4dUlDQnVZVzFsUm05eWJTNWpiR0Z6YzB4cGMzUXVZV1JrS0Z3aWFHbGtaVndpS1R0Y2JpQWdjbVZ6ZFd4MGN5NWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtGd2lhR2xrWlZ3aUtUdGNiaUFnYkdWMElHNWhiV1VnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLRndpTG01aGJXVXRkbUZzZFdWY0lpazdYRzRnSUc1aGJXVXVkR1Y0ZEVOdmJuUmxiblFnUFNCcGJuQjFkRTVoYldVdWRtRnNkV1V1ZEc5TWIzZGxja05oYzJVb0tUdGNiaUFnWm1sdVlXeFRZMjl5WlM1MFpYaDBRMjl1ZEdWdWRDQTlJSE5qYjNKbE8xeHVJQ0JwWmlBb2MyTnZjbVVnUFQwOUlEUXBJSHRjYmlBZ0lDQmpiM1Z5YzJWVGRXZG5aWE4wYVc5dUxuUmxlSFJEYjI1MFpXNTBJRDBnWENKUWNtOWtkV04wSUVWNFpXTjFkR2wyWlNCRFpYSjBhV1pwWTJGMFpWd2lPMXh1SUNCOUlHVnNjMlVnYVdZZ0tITmpiM0psSUQwOVBTQXpLU0I3WEc0Z0lDQWdZMjkxY25ObFUzVm5aMlZ6ZEdsdmJpNTBaWGgwUTI5dWRHVnVkQ0E5SUZ3aVVISnZaSFZqZENCTVpXRmtaWElnUTJWeWRHbG1hV05oZEdWY0lqdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQmpiM1Z5YzJWVGRXZG5aWE4wYVc5dUxuUmxlSFJEYjI1MFpXNTBJRDBnWENKUWNtOWtkV04wSUUxaGJtRm5aWElnUTJWeWRHbG1hV05oZEdWY0lqdGNiaUFnZlZ4dWZWeHVYRzR2THlCRGFHVmphM01nZEdobElHbHVjSFYwSUhSdklIWmhiR2xrWVhSbElHbG1JSFJvWlNCemRISnBibWNnYVhNZ2IyNXNlU0JzWlhSMFpYSnpYRzVtZFc1amRHbHZiaUIyWVd4cFpHRjBaVWx1Y0hWMEtDa2dlMXh1SUNCamIyNXpkQ0JwYm5CMWRGWmhiSFZsSUQwZ2FXNXdkWFJPWVcxbExuWmhiSFZsTzF4dUlDQmpiMjV6ZENCMllXeHBaRXhsZEhSbGNuTWdQU0F2WGx0QkxWcGhMWHBkS3lRdk8xeHVJQ0JwWmlBb2FXNXdkWFJXWVd4MVpTQWhQVDBnWENKY0lpQW1KaUJwYm5CMWRGWmhiSFZsTG0xaGRHTm9LSFpoYkdsa1RHVjBkR1Z5Y3lrcElIdGNiaUFnSUNCeVpYTjFiSFJTWlhabFlXd29LVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0JqYjI1emRDQnBiblpoYkdsa0lEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2loY0lpNXBiblpoYkdsa1hDSXBPMXh1SUNBZ0lHbHVkbUZzYVdRdWFXNXVaWEpJVkUxTUlEMGdYQ0pRYkdWaGMyVWdaVzUwWlhJZ2VXOTFjaUJ1WVcxbFhDSTdYRzRnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh1SUNCOVhHNTlYRzVjYmk4dklFRnNiQ0J2WmlCMGFHVWdjWFZsYzNScGIyNXpJR0Z1WkNCaGJuTjNaWEp6WEc1amIyNXpkQ0J4ZFdWemRHbHZibk1nUFNCYlhHNGdJSHRjYmlBZ0lDQnhkV1Z6ZEdsdmJqb2dYQ0pYYUdsamFDQnZaaUIwYUdWelpTQnBjeUJ1YjNRZ2IyNWxJRzltSUhSb1pTQmpiMjV6ZEhKaGFXNTBjeUJ2WmlCaElIQnliMnBsWTNRL1hDSXNYRzRnSUNBZ1kyaHZhV05sY3pvZ1cxd2lVMk52Y0dWY0lpd2dYQ0pTWlhOdmRYSmpaWE5jSWl3Z1hDSlVaV0Z0WENJc0lGd2lRblZrWjJWMFhDSmRMRnh1SUNBZ0lHRnVjM2RsY2pvZ1hDSlVaV0Z0WENKY2JpQWdmU3hjYmlBZ2UxeHVJQ0FnSUhGMVpYTjBhVzl1T2lCY0lsSnZiM1FnUTJGMWMyVWdRVzVoYkhsemFYTWdjbVZzWVhSbGN5QjBiejljSWl4Y2JpQWdJQ0JqYUc5cFkyVnpPaUJiWEc0Z0lDQWdJQ0JjSWxCeWIyTmxjM01nUVc1aGJIbHphWE5jSWl4Y2JpQWdJQ0FnSUZ3aVVYVmhiR2wwZVNCQmRXUnBkSE5jSWl4Y2JpQWdJQ0FnSUZ3aVVYVmhiR2wwZVNCRGIyNTBjbTlzSUUxbFlYTjFjbTFsYm5SelhDSXNYRzRnSUNBZ0lDQmNJa2hwWlhKaGNtTm9hV05oYkNCQmJtRnNlWE5wYzF3aVhHNGdJQ0FnWFN4Y2JpQWdJQ0JoYm5OM1pYSTZJRndpVUhKdlkyVnpjeUJCYm1Gc2VYTnBjMXdpWEc0Z0lIMHNYRzRnSUh0Y2JpQWdJQ0J4ZFdWemRHbHZiam9nWENKUWNtOWpaWE56SUVGdVlXeDVjMmx6SUdseklHRWdablZ1WTNScGIyNGdiMlkvWENJc1hHNGdJQ0FnWTJodmFXTmxjem9nVzF4dUlDQWdJQ0FnWENKUVpYSm1iM0p0WVc1alpTQkJibUZzZVhOcGMxd2lMRnh1SUNBZ0lDQWdYQ0pSZFdGc2FYUjVJRTFsZEhKcFkzTmNJaXhjYmlBZ0lDQWdJRndpVUhKdlkyVnpjeUJKYlhCeWIzWmxiV1Z1ZENCUWJHRnVYQ0lzWEc0Z0lDQWdJQ0JjSWxGMVlXeHBkSGtnU1cxd2NtOTJaVzFsYm5RZ1VHeGhibHdpWEc0Z0lDQWdYU3hjYmlBZ0lDQmhibk4zWlhJNklGd2lVSEp2WTJWemN5QkpiWEJ5YjNabGJXVnVkQ0JRYkdGdVhDSmNiaUFnZlN4Y2JpQWdlMXh1SUNBZ0lIRjFaWE4wYVc5dU9seHVJQ0FnSUNBZ1hDSkJJSE5qYUdWa2RXeGxJR0ZqZEdsMmFYUjVJRzFoZVNCaVpXZHBiaUF4TUNCa1lYbHpJR0psWm05eVpTQjBhR1VnY0hKbFpHVmpaWE56YjNJZ1lXTjBhWFpwZEhrZ1ptbHVhWE5vWlhNdUlGUm9hWE1nYVhNZ1lXNGdaWGhoYlhCc1pTQnZaajljSWl4Y2JpQWdJQ0JqYUc5cFkyVnpPaUJiWEc0Z0lDQWdJQ0JjSWtacGJtbHphQzEwYnkxVGRHRnlkRndpTEZ4dUlDQWdJQ0FnWENKVGRHRnlkQzEwYnkxR2FXNXBjMmhjSWl4Y2JpQWdJQ0FnSUZ3aVUzUmhjblF0ZEc4dFUzUmhjblJjSWl4Y2JpQWdJQ0FnSUZ3aVJtbHVhWE5vTFhSdkxVWnBibWx6YUZ3aVhHNGdJQ0FnWFN4Y2JpQWdJQ0JoYm5OM1pYSTZJRndpUm1sdWFYTm9MWFJ2TFZOMFlYSjBYQ0pjYmlBZ2ZWeHVYVHRjYmlKZExDSnpiM1Z5WTJWU2IyOTBJam9pSW4wPSJ9
