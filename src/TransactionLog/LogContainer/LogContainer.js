import React, { Component } from 'react';
import LogEntry from '../LogEntry/LogEntry.js';
import EntryCreator from '../EntryCreator/EntryCreator.js';
import './LogContainer.css';

class LogContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entries: [
                { 
                    id: "ENT1",
                    date: "11/03/2019",
                    val: 2400,
                    description: "Transporte (SITP)"
                },
                { 
                    id: "ENT2",
                    date: "11/03/2019",
                    val: 11000,
                    description: "N/A"
                },
                {
                    id: "ENT3",
                    date: "11/03/2019",
                    val: 17500,
                    description: "Almuerzo"
                }
            ],
            idSequence: 10
        };
    };

    deleteEntryHandler = (index) => {
        const list = [...this.state.entries];
        list.splice(index, 1);

        this.setState({
            entries: list
        })
    };

    editEntryHandler = (date, val, description, index) => {
        let entry = {...this.state.entries[index]}
        entry.date = date;
        entry.val = val;
        entry.description = description;

        const list = [...this.state.entries];
        list[index] = entry;
        
        this.setState({
            entries: list
        })
    };

    addEntryHandler = (date, val, description) => {
        let entry = {
            id: "ENT" + this.state.idSequence,
            date,
            val,
            description
        };

        const list = [...this.state.entries];
        list.push(entry);

        this.setState({
            entries: list,
            idSequence: this.state.idSequence + 1
        })
    };
    

    render() {
        let entries = null;
        if(this.props.showLog) {
            entries = this.state.entries.filter(
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
                    editAction={(date, val, description) => this.editEntryHandler(date, val, description, index)}
                    key={entry.id}
                    />
                );
            });
        }

        let creator = null;
        if(this.props.showCreator) {
            creator = (
                <EntryCreator
                submitAction = {this.addEntryHandler}
                />
            );
        }

        return(
            <div>
                <div>
                    {creator}
                </div>
                <div className="LogList">
                    {entries}
                </div>
            </div>
        );
    };
}

export default LogContainer;