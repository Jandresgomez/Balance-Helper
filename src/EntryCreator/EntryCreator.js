import React from 'react';
import './EntryCreator.css';

const entryCreator = (props) => {
    return(
        <div className="EntryCreatorContainer">
            <div className="EntryCreatorFields">
                <div className="InputContainer">
                    <label>Date:</label>
                    <input type="text"></input>
                </div>
                <div className="InputContainer">
                    <label>Value:</label>
                    <input type="text"></input>
                </div>
                <div className="InputContainer">
                    <label>Description:</label>
                    <input type="text"></input>
                </div>
            </div>
            <button
            className="SubmitEntryButton"
            onClick={null}
            >
            Submit
            </button>
        </div>
    );
};

export default entryCreator;