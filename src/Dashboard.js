import React from 'react';
import Timer from './Timer';

const Dashboard = ({score, seconds, questionsLeft, increaseAttempts, revealAnswer, answer, setMessage, setTimeOutKey, setIntervalKey}) => {
    return (
        <div className="Dashboard">
            <div className="Dashboard-score">
                <h2>Score: {score}</h2>
            </div>
            <div className="Dashboard-questionsLeft">
                <h2>{questionsLeft} Questions Left</h2>
            </div>
            <div className="Dashboard-timer">
                < Timer seconds={seconds} increaseAttempts={increaseAttempts} questionsLeft={questionsLeft} revealAnswer={revealAnswer} answer={answer} setMessage={setMessage} setTimeOutKey={setTimeOutKey} setIntervalKey={setIntervalKey}/>
            </div>
        </div>
    )
}

export default Dashboard;