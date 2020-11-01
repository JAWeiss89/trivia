import React, { useState, useEffect } from "react";

const Timer = ({increaseAttempts, questionsLeft, revealAnswer, setMessage, answer, setTimeOutKey, setIntervalKey}) => {
    let [seconds, setSeconds] = useState(10);
  
    useEffect(() => {
      setSeconds(10);
      console.log("Timer has started")
      const intervalId = setInterval(() => {
          setSeconds(seconds => seconds - 1) // Begin timer at 10 seconds and subtract 1 each second.
          
      }, 1000)
      setIntervalKey(intervalId);
      const timeOutId = setTimeout(() => {          
          clearInterval(intervalId)
          console.log("Timer has been cleared after 10 secs")
        //   increaseAttempts();
        setMessage(`The correct answer was ${answer}`)
        revealAnswer();
      }, 10000)
      setTimeOutKey(timeOutId);
      return () => {
        console.log("Timer has been cleared after new question")
        clearTimeout(timeOutId);
        clearInterval(intervalId);
      }
    }, [questionsLeft])  
    return <h1>{seconds}</h1>
}

export default Timer;