import React from 'react';
import shuffleArr from './helpers/shuffleArr';
import './styles/Question.css'

const Question = ({question, increaseScore, increaseAttempts, revealAnswer, setMessage}) => {
    const answers = [question.correct, question.incorrect[0], question.incorrect[1], question.incorrect[2]];
    const shuffledAnswers = shuffleArr(answers);
    const checkIfCorrect = (e) => {
        if (e.target.innerText === question.correct) {
            console.log("Correct!")
            setMessage("Correct!")
            increaseScore();
            // increaseAttempts();
            revealAnswer();
        } else {
            console.log("Not Correct :( ")
            // increaseAttempts();
            setMessage(`Not Correct :( - The correct answer is ${question.correct}`)
            revealAnswer();
        }
    }
    // console.log("Question Component Rendered")

return (
    <div className="Question">
        <p>{question.question}</p>
        <ul>
            {shuffledAnswers.map(answer => {
                return <li onClick={checkIfCorrect} key={answer}>{answer}</li>
            })}
        </ul>

    </div>
)
}

export default Question;