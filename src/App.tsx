import { QuestionCard } from "./components/Question-Card";

function App() {
  
  const startQuiz = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
  <div className="App">
   <h1>QuizLand</h1> 
   <button className="start" onClick={startQuiz}>Start</button>
   <p className="score">Score:</p>
   <p>Loading questions ... </p>
   <QuestionCard />
   <button className="next-question" onClick={nextQuestion}>Next Question</button>
    </div>);
}

export default App;
