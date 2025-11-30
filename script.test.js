import { describe, it, expect } from "vitest";
import { LANDMARKS, GEOGRAPHY_DATA } from "./landmarks.js";
import * as utils from "./utils.js";
import {
  GAME,
  getListOfQuestions,
  setMCBtnOptions,
  updateScore,
  displayFeedback,
  endGame,
} from "./script.js";

describe("getListOfQuestions", () => {
  it("fills GAME.questionsList with shuffled landmarks limited to gameLength", () => {
    vi.spyOn(utils, "shuffleArray").mockReturnValue(LANDMARKS);
    GAME.gameLength = 5;
    getListOfQuestions();
    expect(GAME.questionsList.length).toBe(5);
    expect(GAME.questionsList).toEqual(LANDMARKS.slice(0, 5));
  });
});

describe("setMCBtnOptions", () => {
  it("sets innerHTML and dataset.answer for each button", () => {
    const buttons = Array.from({ length: 4 }, () => {
      const btn = document.createElement("button");
      btn.className = "multipleChoiceOption";
      document.body.appendChild(btn);
      return btn;
    });

    const options = ["Asia", "Europe", "Africa", "Oceania"];
    setMCBtnOptions(options);

    buttons.forEach((btn, i) => {
      expect(btn.innerHTML).toContain(options[i]);
      expect(btn.dataset.answer).toBe(options[i]);
    });
  });
});

describe("updateScore", () => {
  it("adds points proportional to questionPhase when correct", () => {
    GAME.score = 0;
    GAME.questionPhase = 2;
    const scoreEl = document.createElement("div");
    scoreEl.id = "score";
    document.body.appendChild(scoreEl);

    updateScore(true);
    expect(GAME.score).toBe(20);
    expect(scoreEl.innerHTML).toBe("20");
  });

  it("does not change score when incorrect", () => {
    GAME.score = 0;
    updateScore(false);
    expect(GAME.score).toBe(0);
  });
});

describe("displayFeedback", () => {
  it("shows correct feedback when answer is right", () => {
    GAME.questionPhase = 1;
    GAME.answer = "Asia";
    const feedbacktxt = document.createElement("h2");
    feedbacktxt.id = "feedback-h2";
    document.body.appendChild(feedbacktxt);

    const answerContainer = document.createElement("div");
    answerContainer.id = "answer-container";
    document.body.appendChild(answerContainer);

    const feedBackContainer = document.createElement("div");
    feedBackContainer.id = "feedback-container";
    document.body.appendChild(feedBackContainer);

    displayFeedback(true);
    expect(feedbacktxt.innerHTML).toContain("You're correct +10 points!");
    expect(answerContainer.style.display).toBe("none");
    expect(feedBackContainer.style.display).toBe("block");
  });
});

describe("endGame", () => {
  it("marks game ended and displays score", () => {
    GAME.score = 50;
    const answerContainer = document.createElement("div");
    answerContainer.id = "answer-container";
    document.body.appendChild(answerContainer);

    const gameOverDiv = document.createElement("div");
    gameOverDiv.id = "gameOver";
    document.body.appendChild(gameOverDiv);

    const quizContainer = document.createElement("div");
    quizContainer.id = "quizContainer";
    document.body.appendChild(quizContainer);

    const scoreEl = document.createElement("div");
    scoreEl.id = "game-over-score";
    document.body.appendChild(scoreEl);

    endGame();

    expect(GAME.hadGameEnded).toBe(true);
    expect(answerContainer.hidden).toBe(true);
    expect(gameOverDiv.style.display).toBe("block");
    expect(scoreEl.innerHTML).toContain("You scored: 50");
    expect(quizContainer.style.display).toBe("none");
  });
});
