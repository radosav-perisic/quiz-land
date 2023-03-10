import { shuffleArray } from "./Utils";

export type Question = {
  category: string;
  correctAnswers: string;
  difficulty: string;
  incorrectAnswers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api/php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answer: shuffleArray([...question.incorrectAnswers, question.correctAnswers]),
  }));
};
