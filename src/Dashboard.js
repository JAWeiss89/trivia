import React from 'react';
import Timer from './Timer';
import './styles/Dashboard.css';

const Dashboard = ({score, seconds, questionsLeft, increaseAttempts, revealAnswer, answer, setMessage, setTimeOutKey, setIntervalKey}) => {
    return (
        <div className="Dashboard">
            <div className="Dashboard-questionsLeft">
                <p>{questionsLeft} Questions Left</p>
            </div>
            <div className="Dashboard-timer">
                < Timer seconds={seconds} increaseAttempts={increaseAttempts} questionsLeft={questionsLeft} revealAnswer={revealAnswer} answer={answer} setMessage={setMessage} setTimeOutKey={setTimeOutKey} setIntervalKey={setIntervalKey}/>
            </div>
            <div className="Dashboard-score">
                <p>Score: {score}</p>
            </div>

        </div>
    )
}

export default Dashboard;