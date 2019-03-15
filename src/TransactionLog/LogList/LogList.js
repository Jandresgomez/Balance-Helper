import React, { Component } from 'react';
import LogEntry from '../LogEntry/LogEntry.js';
import EntryCreator from '../EntryCreator/EntryCreator.js';
import './LogList.css';

class LogList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entries: [
                { id: "ENT001", date: "11/03/2019" , val: 2400, description: "Transporte (SITP)" },
                { id: "ENT002", date: "11/03/2019" , val: 11000, description: "N/A" },
                { id: "ENT003", date: "11/03/2019" , val: 17500, description: "Almuerzo" }
            ]
        };
    };

    deleteEntryHandler = (index) => {
        const list = [...this.state.entries];
        list.splice(index, 1);

        this.setState({
            entries: list
        })
    };

    valChangedHandler = (event, index) =>{

    };

    addEntryHandler = (date, val, description) => {
        let entry = {
            date,
            val,
            description
        };

        const list = [...this.state.entries];
        list.push(entry);

        this.setState({
            entries: list
        })
    };
    

    render() {
        const entries = this.state.entries.filter(
            (entry) => {
                return true;
            }  
        ).map(
            (entry, index) => {
                return (
                <LogEntry 
                val={entry.val}
                date={entry.date}
                description={entry.description}
                deleteClick={() => this.deleteEntryHandler(index)}
                key={entry.id}
                />
            );
        });

        return(
            <div>
                <div className="LogList">
                    {entries}
                </div>
                <div>
                    <EntryCreator/>
                </div>
            </div>
        );
    };
}

export default LogList;