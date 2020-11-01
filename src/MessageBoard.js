import React from 'react';

const MessageBoard = ({message}) => {
    return (
        <div className="MessageBoard">
            <p>{message}</p>
        </div>
    )
}

export default MessageBoard;