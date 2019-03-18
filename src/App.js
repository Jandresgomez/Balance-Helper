import React, { Component } from 'react';
import MainMenu from './MainMenu/MainMenu.js'
import LogList from './TransactionLog/LogList/LogList.js'
import EntryCreator from './EntryCreator/EntryCreator.js';
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

  toggleLogHandler = () => {
    this.setState({
      showLog: !this.state.showLog
    });
  };
  
  render() {
    let log = null;
    if(this.state.showLog) log = (<LogList/>);

    let creator = null;
    if(this.state.showCreator) creator = (<EntryCreator/>);

    return (
      <div className="App">
        <MainMenu
        toggleCreatorHandler={() => this.toggleCreatorHandler()}
        toggleLogHandler={() => this.toggleLogHandler()}
        />
        <div>{creator}</div>
        <div>{log}</div>
      </div>
    );
  }
}

export default App;
