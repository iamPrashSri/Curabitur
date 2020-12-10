import React from 'react';
import './ChatMessage.css';

function ChatMessage({ message, timestamp, user, userImage }) {
    return (
        <div className="chatMessage">
            <img src={userImage} alt=""/>
            <div className="chatMessage__info">
                <h4>
                    {user}{" "} 
                    <span className="chatMessage__timestamp">
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default ChatMessage;