import React from 'react';
import './ChatTimeStamp.scss';


function ChatTimeStamp({dateTime}) {
    //TO-DO imp date helper
    const formattedDateTime = () => {
        return new Date(dateTime).toString();
    }

    return (
        <span className="c-chatTimeStamp">
            {formattedDateTime()}
        </span>
    );
}

export default ChatTimeStamp;


