import React from 'react';
import './Chat.scss';

import ChatList from './ChatList'

import { useAppContext } from '../../utilities/ContextProvider';

function Chat() {

  const {state, dispatch} = useAppContext();
  
  return (
    <div className="c-chat">
      <ChatList 
        messages={state.activeConversation.messages}
        users={state.activeConversation.users}
      />
    </div>
  );
}

export default Chat;
