import React from 'react';

const Results = ({score, name}) => {
    return (
        <div className="Results">
            <p>Game Over</p>
            <p>great game, {name}!</p>
            <p>Your score is {score}</p>

        </div>
    )
}

export default Results;