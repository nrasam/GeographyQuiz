import { LANDMARKS, CONTINENTS, AFRICAN_COUNTRIES } from "./landmarks.js";

console.log("Landmarks loaded:", LANDMARKS.length);
console.log("Continents loaded:", CONTINENTS.length);
console.log("African Countries loaded:", AFRICAN_COUNTRIES.length);

let score = 0;
const numOfLandmarks = LANDMARKS.length;
const gameLength = 10;
let currentLandmark = 1;
let hadGameEnded = false;

console.log("Starting Score:", score);
console.log("Game Length:", gameLength);

const imgElement = document.getElementById("locationImg");
const currentLandmarkP = document.getElementById("currentLandmark");
const option1Btn = document.getElementById("option1");
const option2Btn = document.getElementById("option2");
const option3Btn = document.getElementById("option3");
const option4Btn = document.getElementById("option4");
const multipleChoiceOptionBtns = document.querySelectorAll(
  ".multipleChoiceOption"
);
const gameDiv = document.getElementById("game");
const gameOverDiv = document.getElementById("gameOver");

function updateGameStatus() {
  if (currentLandmark >= gameLength) {
    hadGameEnded = true;
    gameDiv.hidden = true;

    // Display Game Over Screen
    gameOverDiv.style.display = "block";
  }

  console.log("Has Game Ended:", hadGameEnded);
}

function updateCurrentLandmark() {
  currentLandmark++;
  currentLandmarkP.innerHTML =
    "Landmark " + currentLandmark + " of " + gameLength;
}

function updateMutlipleChoiceOptions() {
  const letters = ["A. ", "B. ", "C. ", "D. "];
  for (let i = 0; i < multipleChoiceOptionBtns.length; i++) {
    multipleChoiceOptionBtns[i].innerHTML = letters[i] + CONTINENTS[i];
  }
}

currentLandmarkP.innerHTML =
  "Landmark " + currentLandmark + " of " + gameLength;

multipleChoiceOptionBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    updateMutlipleChoiceOptions();
    updateCurrentLandmark();
    updateGameStatus();

    const randomIndex = Math.floor(Math.random() * LANDMARKS.length);
    imgElement.src = LANDMARKS[randomIndex].img;
    imgElement.alt = LANDMARKS[randomIndex].name;
  })
);
