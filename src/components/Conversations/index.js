import React from 'react';
import './Conversations.scss';

import ConversationsList from './ConversationsList'; 


//Temp Convos
const TEMP_CONVOS = [
  {
    id: Math.floor(Math.random() * Math.floor(99999999)),
    users: [{
      id: 1,
      name: 'John Doe'
    },
    {
      id: 3,
      name: 'Jane Smith'
    }],
    messages: [
      {
        id:  Math.floor(Math.random() * Math.floor(99999999)),
        userId: 1,
        text: "Some Message Text",
        timeStamp: new Date()
      },
      {
        id:  Math.floor(Math.random() * Math.floor(99999999)),
        userId: 1,
        text: "Some More text about stuff",
        timeStamp: new Date()
      },
      {
        id:  Math.floor(Math.random() * Math.floor(99999999)),
        userId: 3,
        text: "Hell yeah lets do it",
        timeStamp: new Date()
      },
      {
        id:  Math.floor(Math.random() * Math.floor(99999999)),
        userId: 1,
        text: "Cool Beans",
        timeStamp: new Date()
      }
    ]
  }
]

function Conversations() {
  return (
    <div className="Conversations">
      <ConversationsList 
        items = {TEMP_CONVOS}
      />
    </div>
  );
}

export default Conversations;
