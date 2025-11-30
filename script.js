import { LANDMARKS, GEOGRAPHY_DATA } from "./landmarks.js";

import * as utils from "./utils.js";

// Check status of loaded objects
console.log("Landmarks loaded:", LANDMARKS.length);
console.log("Geography data loaded:", Object.keys(GEOGRAPHY_DATA).length);

// Set initial game options
var GAME = {
  score: 0,
  gameLength: 10,
  hadGameEnded: false,
  questionsList: [],
  gameProgress: 0,
  answer: "",
  question: {},
  questionPhase: 1,
};

console.table(GAME);

// Get document objects
const imgElement = document.getElementById("locationImg"); // Image of location
const currentLandmarkP = document.getElementById("currentLandmark"); // Landmark Progress Paragraph
// The 4 multiple choice buttons
const multipleChoiceOptionBtns = document.querySelectorAll(
  ".multipleChoiceOption"
);
const answerContainer = document.getElementById("answer-container"); // Contains the quiz with image and MC options
const gameOverDiv = document.getElementById("gameOver"); // Game Over screen
const startButton = document.getElementById("startButton"); // Start button
const quizContainer = document.getElementById("quizContainer"); // Container for everything
const startScreen = document.getElementById("startScreen"); // Start Screen div
const feedBackContainer = document.getElementById("feedback-container"); // Contains the feedback to the user
const feedbacktxt = document.getElementById("feedback-h2"); // The feedback text
const leveltxt = document.getElementById("level"); // The level txt
const prompttxt = document.getElementById("prompt"); // Prompt text

// Hide everything except start screen
gameOverDiv.style.display = "none";
quizContainer.style.display = "none";
feedBackContainer.style.display = "none";

// Set initial string for current landmark progress paragraph
currentLandmarkP.innerHTML =
  "Landmark " + GAME.gameProgress + " of " + GAME.gameLength;

// Enter anything to start
document.addEventListener("keydown", startGame);
document.addEventListener("mousedown", startGame);

// Starts game if start button is clicked
startButton.addEventListener("click", startGame);

// Adds effect when the mouse is moved
document.addEventListener("mousemove", (e) => {
  const angle = (e.clientX / window.innerWidth) * 360 - 180;
  document.documentElement.style.setProperty("--angle", angle + "deg");
});

/**
 * Get initial list of quiz questions
 * # of questions depends on game length
 */
function getListOfQuestions() {
  let listOfQuestions = utils.shuffleArray(LANDMARKS);
  GAME.questionsList = listOfQuestions.slice(0, GAME.gameLength);
  console.log("Chosen list of questions:", GAME.questionsList);
}

/**
 * Hides main screen and displays game over screen
 */
function endGame() {
  GAME.hadGameEnded = true;
  answerContainer.hidden = true;
  // Display Game Over Screen
  gameOverDiv.style.display = "block";
  const score = document.getElementById("game-over-score");
  score.innerHTML = "You scored: " + GAME.score;

  quizContainer.style.display = "none";
}

/**
 * Gets another random question and updates the screen
 * unless the ended has ended
 */
function getNextQuestion() {
  if (GAME.gameProgress >= GAME.gameLength) {
    endGame();
  } else {
    GAME.questionPhase = 1;
    GAME.question = GAME.questionsList[GAME.gameProgress];
    console.log("Next Question:", GAME.question);

    currentLandmarkP.innerHTML =
      "Landmark " + ++GAME.gameProgress + " of " + GAME.gameLength;

    leveltxt.innerHTML = "Level 1: Continent";
    prompttxt.innerHTML = "Which continent is this landmark located in?";

    GAME.answer = GAME.question.continent;
    imgElement.src = GAME.question.img;
    const options = utils.getContinentOptions(GAME.question.continent);
    setMCBtnOptions(options, GAME.question.continent);
  }
}

/**
 * Handles quiz logic based on the current phase:
 * Phase 2 → sets up a country question with multiple-choice options
 * Phase 3 → sets up a city question with multiple-choice options
 */
function getNextPhaseOfQuestion() {
  if (GAME.questionPhase === 2) {
    // Get countries
    GAME.answer = GAME.question.country;
    const options = utils.getCountryOptions(
      GAME.question.continent,
      GAME.question.country
    );
    setMCBtnOptions(options);

    leveltxt.innerHTML = "Level 2: Country";
    prompttxt.innerHTML = "Which country is this landmark located in?";
  } else if (GAME.questionPhase === 3) {
    // Get cities
    GAME.answer = GAME.question.city;
    const options = utils.getCityOptions(
      GAME.question.continent,
      GAME.question.country,
      GAME.question.city
    );
    setMCBtnOptions(options);

    leveltxt.innerHTML = "Level 3: City";
    prompttxt.innerHTML =
      "Which city is this landmark located in or closest to?";
  } else {
    getNextQuestion();
  }
}

/**
 * Sets mc button labels to given list.
 * @param {*} options List of 4 mc options including correct answer
 */
function setMCBtnOptions(options) {
  const letters = ["A. ", "B. ", "C. ", "D. "];
  for (let i = 0; i < multipleChoiceOptionBtns.length; i++) {
    multipleChoiceOptionBtns[i].innerHTML = letters[i] + options[i];
    multipleChoiceOptionBtns[i].dataset.answer = options[i];
  }
}

/**
 * Hides the feedback text & unhides the MC
 */
function hideFeedback() {
  answerContainer.style.display = "block";
  feedBackContainer.style.display = "none";
}

/**
 * Displays feedback to the user as to whether they are correct or not
 * @param {*} chosenOption What the user chose; to be compared to correct answer
 */
function displayFeedback(isCorrect = false) {
  // Hide answer section and display feedback text instead
  answerContainer.style.display = "none";
  feedBackContainer.style.display = "block";
  feedbacktxt.innerHTML = isCorrect
    ? "You're correct +" + GAME.questionPhase * 10 + " points!"
    : "You're Wrong! The correct answer was " + GAME.answer + "!";

  console.log("is correct", isCorrect);
  console.log("game answer", GAME.answer);
}

/**
 * Starts the game by
 * 1) Hiding the start screen and revealing the quiz container
 * 2) Removing the press anything events from document
 * 3) Get initial question at random and populate screen
 */
function startGame() {
  startScreen.style.display = "none";
  quizContainer.style.display = "block";
  document.removeEventListener("keydown", startGame);
  document.removeEventListener("mousedown", startGame);

  multipleChoiceOptionBtns.forEach((btn) =>
    btn.addEventListener("click", updateGameStatus)
  );

  // Configure the initial list of quiz questions
  getListOfQuestions();
  //Get initial question at random
  getNextQuestion();
}

/**
 * Evaluates the player's selected answer and updates feedback/score.
 * If correct, progresses to the next phase; otherwise, loads a new question.
 * @param {*} event contains details about the target element, such as dataset attributes.
 */
function updateGameStatus(event) {
  // Check to see if user is correct
  const chosenOption = event.target.dataset.answer;
  const isCorrect = GAME.answer === chosenOption;
  displayFeedback(isCorrect);
  updateScore(isCorrect);

  setTimeout(() => {
    if (isCorrect && GAME.questionPhase < 3) {
      GAME.questionPhase++;
      getNextPhaseOfQuestion();
    } else {
      getNextQuestion();
    }

    hideFeedback();
  }, 1500);
}

/**
 * If correct update score proportional to question phase.
 */
function updateScore(isCorrect = false) {
  if (isCorrect) {
    GAME.score += 10 * GAME.questionPhase;

    const score = document.getElementById("score");
    score.innerHTML = GAME.score;
  }
}
