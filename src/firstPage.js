import React from 'react'
import { Link } from "react-router-dom";

const FirstPage = () => {
  return (
    <div className="text-center mt-32">
      <h2 className="font-bold">Welcome</h2>
      <p className="my-4">Click start to begin quiz, Goodluck!!!</p>
      <button className="bg-blue-500 py-3 px-5 text-white rounded-md mt-16">
       <Link to="/quiz">
        Start
      </Link>
        </button>
    </div>
  );
}

export default FirstPage