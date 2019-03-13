import React from 'react'; 
import './LogEntry.css'

const logEntry = (props) => {
    return(
        <div className="LogEntry">
            <p className="valueBox">{props.val}</p>
            <p className="valueBox">{props.val}</p>
            <p className="valueBox">{props.val}</p>
        </div>
    );
};


export default logEntry;