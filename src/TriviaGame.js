import React, { useState } from 'react';
import Question from './Question';
import Dashboard from './Dashboard';
import Results from './Results';
import MessageBoard from './MessageBoard';
import questions from './helpers/Apprentice_TandemFor400_Data.json'
import randomChoice from './helpers/randomChoice';

const TriviaGame = ({name}) => {
    let [score, setScore] = useState(0);
    let [attempts, setAttempts] = useState(0);
    let [questionsUsed, setQuestionsUsed] = useState([]);
    let [currentQuestion, setCurrentQuestion] = useState(randomChoice(questions));
    let [gameOver, setGameOver] = useState(false);
    let [message, setMessage] = useState("");
    let [timeOutKey, setTimeOutKey] = useState(0);
    let [intervalKey, setIntervalKey] = useState(0);


    const getNewQuestion = () => {
        // first, current question gets added to list of questions that have been used already. 
        setQuestionsUsed(questionsUsed => [...questionsUsed, currentQuestion])
        // sets new question and checks to make sure it's not a repeated one.
        let newQuestionFound = false;
        while (!newQuestionFound) {  // keep checking random questions until a question has been found that hasn't been used. 
            let newQuestion = randomChoice(questions);
            if (!questionsUsed.includes(newQuestion)) { // if random question isn't one that has already been used,
                setCurrentQuestion(newQuestion); // update the current question
                newQuestionFound = true; // break out of while loop
            }
        }
    }

    const increaseScore = () => {
        setScore(score => score + 1);
    }
    const increaseAttempts = () => {
        if (attempts < 9 ) {
            getNewQuestion();
            setAttempts(attempts => attempts + 1);
            setMessage("")
        }
        else {
            setGameOver(true);
        }
    }

    const revealAnswer = () => {
        setTimeout(increaseAttempts, 2000)
        clearTimeout(timeOutKey);
        clearInterval(intervalKey);
    }


    

    return (
        <div className="TriviaGame">
            { !gameOver 
            ? <div> 
            < Dashboard score={score} questionsLeft={10-attempts} revealAnswer={revealAnswer} increaseAttempts={increaseAttempts} answer={currentQuestion.correct} setMessage={setMessage} setTimeOutKey={setTimeOutKey} setIntervalKey={setIntervalKey}/>
            < Question question={currentQuestion} increaseScore={increaseScore} increaseAttempts={increaseAttempts} setMessage={setMessage} revealAnswer={revealAnswer}/>
            < MessageBoard message={message} />
            </div>
            : 
            < Results name={name} score={score} />
            }
        </div>
  
    )
}

export default TriviaGame;