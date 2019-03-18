import React, { Component } from 'react';
import './MainMenu.css';

class MainMenu extends Component {
    render() {
        return (
            <div className="MainMenu">
                <div className="TitleContainer">
                    <h1 className="MenuTitle">Balance Helper</h1>
                </div>
                <div className="MenuBar">
                    <button 
                    className="MenuBarButton"
                    onClick={this.props.toggleLogHandler}>
                    Show Log
                    </button>
                    <button 
                    className="MenuBarButton"
                    onClick={this.props.toggleCreatorHandler}>
                    Show Creator
                    </button>
                </div>
            </div>
        );
    }
}

export default MainMenu;