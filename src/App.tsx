import { useState } from "react";
import { fetchQuizQuestions, Difficulty, QuestionState } from "./API";
import { QuestionCard } from "./components/Question-Card";

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correct_asnwer: string;
}

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnwers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);
  
   const startGame = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnwers([]);
    setNumber(0)
    setLoading(false)
   }


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
