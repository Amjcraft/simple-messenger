import * as React from 'react'

const TEMP_CONVOS = [
  {
    id: Math.floor(Math.random() * Math.floor(99999999)),
    users: [{
      id: 1,
      name: 'Me John Doe'
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
        timeStamp: 'December 6, 2020 03:24:00'
      },
      {
        id:  Math.floor(Math.random() * Math.floor(99999999)),
        userId: 1,
        text: "Some More text about stuff",
        timeStamp: 'December 6, 2020 03:24:30'
      },
      {
        id:  Math.floor(Math.random() * Math.floor(99999999)),
        userId: 3,
        text: "Hell yeah lets do it",
        timeStamp: 'December 6, 2020 03:26:00'
      },
      {
        id:  Math.floor(Math.random() * Math.floor(99999999)),
        userId: 1,
        text: "Cool Beans",
        timeStamp: 'December 6, 2020 03:26:30'
      },
      {
        id:  Math.floor(Math.random() * Math.floor(99999999)),
        userId: 3,
        text: "Some More Convo",
        timeStamp: 'December 8, 2020 11:26:00'
      },
      {
        id:  Math.floor(Math.random() * Math.floor(99999999)),
        userId: 1,
        text: "And an answer",
        timeStamp: 'December 8, 2020 13:22:30'
      }
    ]
  }
]

const DEFAULT_STATE = {
    activeView: "conversations",
    activeConversation: TEMP_CONVOS[0]
}

const AppContext = React.createContext();


function appReducer(state, action) {
    switch (action.type) {
      case 'ACTIVE_VIEW_CHAT': {
        return Object.assign({...state}, { activeView: "chat"})
      }
      case 'ACTIVE_VIEW_CONVERSATIONS': {
        return Object.assign({...state}, {activeView: "conversations"})
      }
      case 'CHANGE_ACTIVE_CONVERSATION' :{
        return Object.assign({...state}, {
          'activeView': 'chat',
          'activeConversation': action.data
        });
      }
      case 'ADD_MESSAGE': {
        state.activeConversation.messages.push(action.data)
        return state
      }
      default: {
        throw new Error(`Unsupported action type: ${action.type}`)
      }
    }
  }

function ContextProvider(props) {
  const [state, dispatch] = React.useReducer(appReducer, DEFAULT_STATE)
  const value = React.useMemo(() => [state, dispatch], [state])
  return <AppContext.Provider value={value} {...props} />
}

function useAppContext() {
  const context = React.useContext(AppContext)
  if (!context) {
    throw new Error(`No Context Set`);
  }
  
  const [state, dispatch] = context

  return {
    state,
    dispatch
  }
}



export {ContextProvider, useAppContext};