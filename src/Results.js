import React from 'react';
import './styles/Results.css'

const Results = ({score, name}) => {
    return (
        <div className="Results">
            <p className="Results-gameover">game over</p>
            <p className="Results-name">Great game, <span className="tandem">{name}</span>!</p>
            <p className="Results-score">Your score is {score}</p>

        </div>
    )
}

export default Results;