import React from 'react';
import './ConversationsList.scss';


import ConversationsListItem from './../ConversationsListItem'; 

import { useAppContext } from '../../../utilities/ContextProvider';

function ConversationsList({items}) {
  const {state, dispatch} = useAppContext();

  const handleConversationSelect = (convo) => {
    return dispatch({type: "CHANGE_ACTIVE_CONVERSATION", data: convo});
  }

  const conversationsListItems = () => {
    return items.map(convo => {
      return (
        <ConversationsListItem
          key={convo.id} 
          id={convo.id}
          users={convo.users}
          lastMessage={convo.messages[convo.messages.length-1]}
          onConversationClick={handleConversationSelect.bind(this, convo)}
        />
      )
    })
  }

  return (
    <div className="ConversationsList">
        { conversationsListItems() }
    </div>
  );
}

export default ConversationsList;
