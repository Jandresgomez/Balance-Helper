import React, { Component } from 'react';
import MainMenu from './MainMenu/MainMenu.js'
import LogContainer from './TransactionLog/LogContainer/LogContainer.js'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLog: false,
      showCreator: true
    };
  }

  toggleCreatorHandler = () => {
    this.setState({
      showCreator: !this.state.showCreator
    });
  };

  toggleLogListHandler = () => {
    this.setState({
      showLog: !this.state.showLog
    });
  };
  
  render() {

    return (
      <div className="App">
        <MainMenu
        toggleCreatorHandler={() => this.toggleCreatorHandler()}
        toggleLogListHandler={() => this.toggleLogListHandler()}
        />
        <LogContainer
        showLog={this.state.showLog}
        showCreator={this.state.showCreator}
        />
      </div>
    );
  }
}

export default App;
