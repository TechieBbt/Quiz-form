import "../App.css";
import { Questions } from "../helpers/Questions";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(15);

  const { score, setScore, setGameState } = useContext(
    GameStateContext
  );

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    resetTimer();
    setOptionChosen(""); // Clear the selected option for the next question
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  const resetTimer = () => {
    setTimeRemaining(15); // Reset the timer to 15 seconds
  };

  useEffect(() => {
    // Create a timer that decrements the timeRemaining every second
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      } else {
        // Time's up, move to the next question or finish the quiz
        if (currentQuestion === Questions.length - 1) {
          finishQuiz();
        } else {
          nextQuestion();
        }
      }
    }, 1000);

    // Clean up the timer when the component unmounts or when moving to the next question
    return () => {
      clearInterval(timer);
    }; //eslint-disable-next-line
  }, [currentQuestion, timeRemaining]);

  return (
    <div className="Quiz">
      <h2>Time remaining: {timeRemaining} sec</h2>
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <button
          className={optionChosen === "optionA" ? "selected" : ""}
          onClick={() => {
            chooseOption("optionA");
          }}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          className={optionChosen === "optionB" ? "selected" : ""}
          onClick={() => {
            chooseOption("optionB");
          }}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          className={optionChosen === "optionC" ? "selected" : ""}
          onClick={() => {
            chooseOption("optionC");
          }}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button
          className={optionChosen === "optionD" ? "selected" : ""}
          onClick={() => {
            chooseOption("optionD");
          }}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;
