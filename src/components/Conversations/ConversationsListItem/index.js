import React from 'react';
import './ConversationsListItem.scss';

import {Avatar} from './../../Common'

function ConversationsListItem({id, users, lastMessage, onConversationClick}) {


  const listHeading = () => {
    return users.reduce((prev, curr, idx) => {
      if(idx === users.length -1){
        return prev + curr.name;
      }

      return prev + curr.name + ','
    }, "")
  }

  return (
    <div className="c-conversationsListItem" onClick={onConversationClick}>
        <span className="listItem__avatar">
          <Avatar
            name = {users[0].name}
            profileImage = ''
           />
        </span>
        <div className="listItem__heading">
            { listHeading() }
        </div>
        <div className="listItem__message">
            <span className="listItem__message message__text message__text--ellipsis">
              {lastMessage.text}
            </span>

            <span className="listItem__message message__timeStamp">
              {lastMessage.timeStamp.toDateString()}
            </span>
        </div>
    </div>
  );
}

export default ConversationsListItem;
