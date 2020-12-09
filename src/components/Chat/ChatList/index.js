import React from 'react';
import './ChatList.scss';

import ChatListItem from './../ChatListItem'
import {ChatTimeStamp} from './../../Common'


function ChatList( { messages, users }) {

    const calcTimeDiff = (datetime1, datetime2) => {
        let diffInMilliSeconds = Math.abs(Date.parse(datetime1) - Date.parse(datetime2)) / 1000;
        const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
        return minutes;
    }

    const findUser = (userId) => {
        return users.find((user) => user.id === userId)
    }

    const chatItems = () => {
        const itemCollection = [];
        let lastChatDate = messages[messages.length-1].timeStamp;
        itemCollection.push(<ChatTimeStamp dateTime={messages[0].timeStamp}></ChatTimeStamp>)
        messages.forEach((item) => {
            if(calcTimeDiff(lastChatDate, item.timeStamp) > 5) {
                itemCollection.push(<ChatTimeStamp dateTime={item.timeStamp}></ChatTimeStamp>)
            }
            lastChatDate = item.timeStamp;
            itemCollection.push(<ChatListItem message={item} user={findUser(item.userId)}/>);
        })
        
        return itemCollection; 
    }

    return (
        <ul className="c-chat_List">
            { chatItems() }
        </ul>
    );
}

export default ChatList;
