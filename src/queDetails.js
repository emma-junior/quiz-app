const Question = [
  {
    id: 0,
    question: "Who discovered river Niger?",
    answerId: 0,
  },
  {
    id: 1,
    question: "What is a verb?",
    answerId: 1,
  },
  {
    id: 2,
    question: "What is the capital of England?",
    answerId: 2,
  },
  {
    id: 3,
    question: "How many month do we have in a year?",
    answerId: 3,
  },
];

export const Answer = [
  {
    id: 0,
    text: "Mongo park",
  },
  {
    id: 1,
    text: "An action or doing word",
  },
  {
    id: 2,
    text: "London",
  },
  {
    id: 3,
    text: 12,
  },
];

const Options = [
  {
    id: 0,
    questionId: 0,
    option: "Ahmed musa",
  },
  {
    id: 1,
    questionId: 0,
    option: "Mongo park",
  },
  {
    id: 2,
    questionId: 0,
    option: "Davido",
  },
  {
    id: 3,
    questionId: 0,
    option: "Mr john",
  },
  {
    id: 4,
    questionId: 1,
    option: "An action or doing word",
  },
  {
    id: 5,
    questionId: 1,
    option: "An amimal name",
  },
  {
    id: 6,
    questionId: 1,
    option: "Someone from Nigeria",
  },
  {
    id: 7,
    questionId: 1,
    option: "A device",
  },
  {
    id: 8,
    questionId: 2,
    option: "Nigeria",
  },
  {
    id: 9,
    questionId: 2,
    option: "Canada",
  },
  {
    id: 10,
    questionId: 2,
    option: "London",
  },
  {
    id: 11,
    questionId: 2,
    option: "Mushin",
  },
  {
    id: 12,
    questionId: 3,
    option: 5,
  },
  {
    id: 13,
    questionId: 3,
    option: 9,
  },
  {
    id: 14,
    questionId: 3,
    option: 12,
  },
  {
    id: 15,
    questionId: 3,
    option: 6,
  },
];

export const questions = Question.map((q) => {
    const { id: questionId, answerId, question  } = q
  const answer = Answer[q.answerId];
//   console.log(q);
  const options = Options.filter((o) => questionId === o.questionId);
  return { questionId, question, answer, options };
});
