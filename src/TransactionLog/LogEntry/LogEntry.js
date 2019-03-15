import React from 'react'; 
import './LogEntry.css'

const logEntry = (props) => {
    return(
        <div className="EntryContainer">
            <div className="LogInfo">
                <p className="valueBox">{props.date}</p>
                <p className="valueBox">{props.val}</p>
                <p className="valueBox">{props.description}</p>
            </div>
            <div className="LogButtons">
                <button className="DeleteButton" onClick={props.deleteClick}>DELETE ENTRY</button> 
            </div>
        </div>
    );
};

export default logEntry;