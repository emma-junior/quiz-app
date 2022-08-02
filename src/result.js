import React from 'react'
import { useGlobalContext } from "./context";

const Result = () => {
    const { userResult, setUserResult } = useGlobalContext();
  return (
    <div className="text-center mt-16 font-bold">
      <h2 className="">Submitted succesfully</h2>
      <p>Your result is</p> <h2 className='text-blue-600'>{userResult}</h2>
    </div>
  );
}

export default Result