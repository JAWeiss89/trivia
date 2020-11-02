import React from 'react';
import './styles/MessageBoard.css'

const MessageBoard = ({message}) => {
    return (
        <div className="MessageBoard">
            <p className="MessageBoard-message">{message}</p>
        </div>
    )
}

export default MessageBoard;