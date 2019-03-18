import React, { Component } from 'react';
import './MainMenu.css';

class MainMenu extends Component {
    render() {
        return (
            <div className="MainMenu">
                <div className="TitleContainer">
                    <p>Balance - Helper</p>
                </div>
                <div className="MenuBar">
                    <button 
                    className="ShowLogButton"
                    onClick={this.props.toggleLogHandler}>
                    Show Log
                    </button>
                </div>
            </div>
        );
    }
}

export default MainMenu;