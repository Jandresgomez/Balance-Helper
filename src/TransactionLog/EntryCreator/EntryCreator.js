import React, {Component} from 'react';
import './EntryCreator.css';

class EntryCreator extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            newDate: "",
            newVal: 0,
            newDescription: ""
        }
    }

    valChangedHandler = (event) => {
        this.setState({
            newVal: event.target.value
        });
    };

    dateChangedHandler = (event) => {
        this.setState({
            newDate: event.target.value
        });
    }

    descriptionChangedHandler = (event) => {
        this.setState({
            newDescription: event.target.value
        });
    }

    render() {
        const sumbitCallback = () => this.props.submitAction(this.state.newDate, this.state.newVal, this.state.newDescription);

        return(
            <div className="EntryCreatorContainer">
                <div className="EntryCreatorFields">
                    <div className="InputContainer">
                        <label>Date:</label>
                        <input
                        type="text"
                        onChange={this.dateChangedHandler}
                        value={this.state.newDate}
                        />
                    </div>
                    <div className="InputContainer">
                        <label>Value:</label>
                        <input 
                        type="text"
                        onChange={this.valChangedHandler}
                        value={this.state.newVal}
                        />
                    </div>
                    <div className="InputContainer">
                        <label>Description:</label>
                        <input
                        type="text"
                        onChange={this.descriptionChangedHandler}
                        value={this.state.newDescription}
                        />
                    </div>
                </div>
                <button
                className="SubmitEntryButton"
                onClick={sumbitCallback}
                >
                Submit
                </button>
            </div>
        );
    }
};

export default EntryCreator;