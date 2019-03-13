import React, { Component } from 'react';
import LogEntry from '../LogEntry/LogEntry.js';
import './LogList.css';

class LogList extends Component {
    render() {
        return(
            <div className="LogList">
                <LogEntry val="17.50"/>
                <LogEntry val="21.50"/>
                <LogEntry val="199.99"/>
            </div>
        );
    }
}

export default LogList;