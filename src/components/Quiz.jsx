import { useState } from "react";
import QUESTIONS from "../questions";
import ImgQuizComplete from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevState) => [...prevState, selectedAnswer]);
  }

  if (quizIsCompleted) {
    return (
      <div id="summary">
        <img src={ImgQuizComplete} alt="Quiz completed image" />
        <h2>Quiz Completed</h2>
      </div>
    )
  }

  const shuffleAnswers = [...QUESTIONS[activeQuestionIndex].answers].sort(
    () => Math.random() - 0.5
  )

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffleAnswers.map((answer) => (
            <li
              key={answer}
              className="answer"
              onClick={() => handleSelectAnswer(answer)}
            >
              <button>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
