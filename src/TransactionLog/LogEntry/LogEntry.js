import React, {Component} from 'react'; 
import './LogEntry.css'

class LogEntry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showEditBar: false,
            val: props.val,
            date: props.date,
            description: props.description,
            newVal: props.val,
            newDate: props.date,
            newDescription: props.description
        };
    }

    saveEditHandler = () => {
        this.props.editAction(this.state.newDate, this.state.newVal, this.state.newDescription);
        this.toggleEditBarHandler();
    };

    toggleEditBarHandler = () => {
        this.setState({
            showEditBar: !this.state.showEditBar
        });
    };

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
        let editBar = (
            <div className="EditBar">
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
        );

        let infoTab = (
            <div className="LogInfo">
                <p className="valueBox">{this.state.date}</p>
                <p className="valueBox">{this.state.val}</p>
                <p className="valueBox">{this.state.description}</p>
            </div>
        );

        let deleteButton = (<button className="DeleteButton" onClick={this.props.deleteClick}>Delete Item</button>);
        let saveButton = (<button className="SaveEditButton" onClick={this.saveEditHandler}>Save</button>);
        let showEditBarButton = (<button className="ShowEditBarButton" onClick={this.toggleEditBarHandler}>Edit Item</button>);
        let cancelEditButton = (<button className="CancelEditButton" onClick={this.toggleEditBarHandler}>Cancel</button>);
        
        return(
            <div className="EntryContainer">
                {!this.state.showEditBar? infoTab : null}
                {this.state.showEditBar? editBar : null}
                <div className="LogButtons">
                    {!this.state.showEditBar? deleteButton : null}
                    {this.state.showEditBar? saveButton : null}
                    {this.state.showEditBar? cancelEditButton : null}
                    {!this.state.showEditBar? showEditBarButton : null}
                </div>
            </div>
        );
    }
};

export default LogEntry;