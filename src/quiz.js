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
