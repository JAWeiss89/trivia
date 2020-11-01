import React from 'react';
import './styles/MessageBoard.css'

const MessageBoard = ({message}) => {
    return (
        <div className="MessageBoard">
            <p>{message}</p>
        </div>
    )
}

export default MessageBoard;