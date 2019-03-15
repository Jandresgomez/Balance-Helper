import React, { Component } from 'react';
import LogList from './TransactionLog/LogList/LogList.js'

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
        <button onClick={this.toggleLogHandler}>Show Log</button>
        {log}
      </div>
    );
  }
}

export default App;
