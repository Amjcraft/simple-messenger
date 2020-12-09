import React from 'react';
import './Toolbar.scss';

import { useAppContext } from '../../utilities/ContextProvider';

function Toolbar({test}) {
    const {state, dispatch} = useAppContext();
    const ToggleButton = () => {
        const buttonText = 'View all Conversations';

        const onViewToggle = () => {
            if(state.activeView === "chat") {
                return dispatch({type: "ACTIVE_VIEW_CONVERSATIONS"});
            }
            return dispatch({type: "ACTIVE_VIEW_CHAT"})
        }

        return (
            <button onClick={onViewToggle}> 
                {buttonText}
            </button>
        )
    }
    
  return (
    <div className="c-toolbar">
        <div className="c-toolbar__btn">
            {(true) ? <ToggleButton /> : ''}
            
        </div>
    </div>
  );
}

export default Toolbar;
