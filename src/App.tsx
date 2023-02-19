import { useState } from "react";
import { fetchQuizQuestions, Difficulty } from "./API";
import { QuestionCard } from "./components/Question-Card";

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnwers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));
  

  const startQuiz = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className="App">
      <h1>QuizLand</h1>
      <button className="start" onClick={startQuiz}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading questions ... </p>
      {/* <QuestionCard
        questionNum={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next-question" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
