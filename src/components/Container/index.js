import React from 'react';
import './Container.scss';

import { useAppContext}  from '../../utilities/ContextProvider'

import Chat from '../Chat';
import Conversations from './../Conversations';
import Toolbar from './../Toolbar'

function Container() {
  const {
    state: {activeView}
  } = useAppContext();

  
  return (
   
    <div className="c-container light">
        <Toolbar>
          
        </Toolbar>
        <div className="c-container__activeView">
          { activeView === "chat"
              ? <Chat /> 
              : <Conversations />
          }
        </div>
    </div>
  );
}

export default Container;
