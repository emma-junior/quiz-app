import { useState } from "react";
import { questions } from "./queDetails";
import {Answer} from "./queDetails"
import { useGlobalContext } from "./context";

import { Link } from "react-router-dom";

function App() {
  const [userAnswer, setUserAnswer] = useState([]);
  const {userResult, setUserResult } = useGlobalContext();
  const { setViewContent } = useGlobalContext();
  // console.log(questions)

  const handleUserResponse = (option) => {
    // console.log(option)
    const checkResponse = userAnswer.some((answer) => answer.questionId === option.questionId); 
    // console.log(checkResponse) 
      if (checkResponse){
          const newUserAnswer = userAnswer.map((answer) => {
            if (answer.questionId === option.questionId) {
              return { ...answer, text: option.option };
            } else {
              return answer;
            }
            
          })
          setUserAnswer(newUserAnswer)      
      }else {
        setUserAnswer([...userAnswer, {questionId:option.questionId, text: option.option}])
      }
      console.log(userAnswer);
  };
  // console.log(questions)

  const handleSubmit = () => {
    if (userAnswer.length < 4){
      alert("answer all question")
      return
    }
    

       const newUserAnswer = userAnswer.sort((a, b) => {
         return a.questionId - b.questionId;
       });
       
       let correctAnswers = 0
       for (let i = 0; i < newUserAnswer.length; i++) {
         if(Answer[i].text === newUserAnswer[i].text){
           correctAnswers += 1
         }
       }
       setUserResult(correctAnswers)
   
    // sort userAnswer by questionId
    // Loop through userAnswer or answer
    // answer[i].text === userAnswer[i].text
    console.log(userResult)
    
  }
  return (
    <div className="App">
      {questions.map((info) => {
        const { id, question, answer, options } = info;
        // console.log(options);
        return (
          <div className="m-10 lg:mr-72 xs:w-52 " key={id}>
            <div className="bg-slate-50 p-8 shadow-lg shadow-black-500/50">
              <h2 className="mb-5 font-bold">{question}</h2>
              {options.map((option) => (
                <p>
                  <input
                    className="mr-3"
                    onClick={() => handleUserResponse(option)}
                    name={option.questionId}
                    type="radio"
                  />
                  {option.option}
                </p>
              ))}
            </div>
          </div>
        );
      })}
      <button
        className="bg-blue-500 p-3 text-white rounded-md ml-10"
        onClick={
          handleSubmit
        }
      >
      <Link to ="/result">
        Submit
      </Link>
      </button>
      
    </div>
  );
}

export default App;
