import React, { useState } from 'react';
import Question from './Question.js';
import questions from './helpers/Apprentice_TandemFor400_Data.json'
import randomChoice from './helpers/randomChoice';

const TriviaGame = () => {
    let [score, setScore] = useState(0);
    let [attemps, setAttempts] = useState(0);
    let [questionsUsed, setQuestionsUsed] = useState([]);
    let [currentQuestion, setCurrentQuestion] = useState(randomChoice(questions));
    
    
    const getNewQuestion = () => {
        // sets new question and checks to make sure it's not a repeated one.
        let numberOfQuestionsUsed = questionsUsed.length;
        while (questionsUsed.length === numberOfQuestionsUsed) {
            let newQuestion = randomChoice(questions);
            if (!questionsUsed.includes(newQuestion)) { // if random question not already used
                setQuestionsUsed(questionsUsed => [...questionsUsed, newQuestion]); // add new question to used list
                setCurrentQuestion(newQuestion);
            }
        }
    }
    
    const addQuestionToUsedArr = (question) => {
        questionsUsed.push(question);
    }
   
    const increaseScore = () => {
        setScore(score++);
        console.log({score})
    }
    const increaseAttempts = () => {
        setAttempts(attemps++);
        console.log({attemps})
    }
    console.log("Component rendered")
    
    addQuestionToUsedArr(currentQuestion);
    

    return (
        <div className="TriviaGame">
            
            < Question question={currentQuestion} increaseScore={increaseScore} increaseAttempts={increaseAttempts}/>

        </div>
    )
}

export default TriviaGame;