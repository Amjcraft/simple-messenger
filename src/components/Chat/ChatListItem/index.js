import React from 'react';
import './ChatListItem.scss';

import {Avatar} from './../../Common';


function ChatListItem( { message, user }) {
    const isUserChat = () => {
        if(message.userId === 3) {
            return true;
        }
        return false
    }
    
    return (
        <li className={`chat__listItem ${isUserChat() ? "chat__listItem--user" : ""}`}>
            <span className="listItem__avatar">
                <Avatar { ...user } />
            </span>
            <span className="listItem__text">
                {message.text}
            </span>
            <span className="listItem__status">
                
            </span>
        </li>
    );
}

export default ChatListItem;
