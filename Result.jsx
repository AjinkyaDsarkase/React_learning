import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

function Result() {

    let correct = useSelector((state) => state.test.correct)
    let incorrect = useSelector((state) => state.test.incorrect)
    let [counter, setCounter] = useState(5)

    let navigate = useNavigate()

    let intervalId;
  useEffect(()=>{

    function redirectingToTest(){
      // intervalId = setInterval(() => {
      //   setCounter(counter - 1)
      // }, 1000)
      intervalId = setInterval(() => {
        setCounter((prevCounter) => {
          if (prevCounter === 1) {
            clearInterval(intervalId); 
            navigate('/')
            return 0;
          }
          return prevCounter - 1;
        });
      }, 1000);
    
    }
    redirectingToTest();

    return () => clearInterval(intervalId);
    
  },[counter])
  
  // function redirectingToTest(){
  //   intervalId = setInterval(() => {
  //     setCounter(counter - 1)
  //   }, 1000)
  // }

  // setTimeout(() => {
  //   clearInterval(intervalId)
  //   navigate('/')
  // }, 5000);

  // useEffect(() => { 
  //   redirectingToTest()
  // }, [counter])
  
  

    

  return (
    <div>
      <p>Correct Answers : {correct}</p>
      <p>Incorrect Answers : {incorrect}</p>

      <p>You have failed the exam.</p>
      <p>You need to give the test again in {counter}</p>
    </div>
  )
}

export default Result
