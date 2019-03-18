import React, { Component } from 'react';
import MainMenu from './MainMenu/MainMenu.js'
import LogList from './TransactionLog/LogList/LogList.js'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLog: false
    };
  }

  toggleLogHandler = () => {
    this.setState({
      showLog: !this.state.showLog
    });
  };
  
  render() {
    let log = null;
    if(this.state.showLog) log = (<LogList/>);

    return (
      <div className="App">
        <MainMenu
        toggleLogHandler={() => this.toggleLogHandler()}
        />
        {log}
      </div>
    );
  }
}

export default App;
