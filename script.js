import { LANDMARKS, GEOGRAPHY_DATA, images } from "./landmarks.js";

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
};

console.table(GAME);

// Get document objects
const imgElement = document.getElementById("locationImg"); // Image of location
const currentLandmarkP = document.getElementById("currentLandmark"); // Landmark Progress Paragraph
// The 4 multiple choice buttons
const option1Btn = document.getElementById("option1");
const option2Btn = document.getElementById("option2");
const option3Btn = document.getElementById("option3");
const option4Btn = document.getElementById("option4");
const multipleChoiceOptionBtns = document.querySelectorAll(
  ".multipleChoiceOption"
);
const gameDiv = document.getElementById("game"); // Contains the quiz with image and MC options
const gameOverDiv = document.getElementById("gameOver"); // Game Over screen
const startButton = document.getElementById("startButton"); // Start button
const quizContainer = document.getElementById("quizContainer"); // Container for everything
const startScreen = document.getElementById("startScreen"); // Start Screen div

// Hide everything except start screen
gameOverDiv.style.display = "none";
quizContainer.style.display = "none";

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
  gameDiv.hidden = true;
  // Display Game Over Screen
  gameOverDiv.style.display = "block";
}

/**
 * Gets another random question and updates the screen
 * unless the ended has ended
 */
function getNextQuestion() {
  if (GAME.gameProgress >= GAME.gameLength) {
    endGame();
  } else {
    //let question = utils.getRandomElementFromArray(LANDMARKS);
    let question = GAME.questionsList[GAME.gameProgress];
    console.log("Next Question:", question);
    imgElement.src = question.img;
    console.log("Correct answer", question.continent);

    const options = utils.getContinentOptions(question.continent);
    setMCBtnOptions(options);

    currentLandmarkP.innerHTML =
      "Landmark " + ++GAME.gameProgress + " of " + GAME.gameLength;
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
  }
}

/**
 * Updates the 4 MC options with 1 correct answer and 3 random wrong answers
 * @param {*} phase 0 for continent phase; 1 for country phase; 2 for city phase
 */
function updateMutlipleChoiceOptions(phase = 0) {
  let options = [];
  switch (phase) {
    case 0:
      options = utils.optionsContinent(images["photo/london.jpeg"].continent);
      break;
    case 1:
      options = optionsContinent(images["photo/london.jpeg"].continent);
      break;
    case 2:
      options = optionsContinent(images["photo/london.jpeg"].continent);
      break;
    default:
      options = optionsContinent(images["photo/london.jpeg"].continent);
  }
  const letters = ["A. ", "B. ", "C. ", "D. "];
  for (let i = 0; i < multipleChoiceOptionBtns.length; i++) {
    multipleChoiceOptionBtns[i].innerHTML = letters[i] + options[i];
  }
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
    btn.addEventListener("click", () => {
      getNextQuestion();
    })
  );

  // Configure the initial list of quiz questions
  getListOfQuestions();
  //Get initial question at random
  getNextQuestion();
}
