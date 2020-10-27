import React from 'react';
import shuffleArr from './helpers/shuffleArr';

const Question = ({question, increaseScore, increaseAttempts}) => {
    const answers = [question.correct, question.incorrect[0], question.incorrect[1], question.incorrect[2]];
    const shuffledAnswers = shuffleArr(answers);
    const checkIfCorrect = (e) => {
        if (e.target.innerText === question.correct) {
            console.log("Correct!")
            increaseScore();
            increaseAttempts();
        } else {
            console.log("Not Correct :( ")
            increaseAttempts();
        }
    }

return (
    <div>
        <h3>{question.question}</h3>
        <ul>
            {shuffledAnswers.map(answer => {
                return <li onClick={checkIfCorrect} key={answer}>{answer}</li>
            })}
        </ul>


    </div>
)
}

export default Question;