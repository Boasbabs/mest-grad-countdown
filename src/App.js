import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo2.png';
import './App.css';
import Clock from './Clock'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: "August 12, 2018",
            newDeadline: ""
        }
    }

    static propTypes = {
        deadline: PropTypes.number,
    }

    changeDeadline() {
        this.setState({
            deadline: this.state.newDeadline,
        })
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Countdown to 2018 EIT's Graduation</h1>
                    <h3><strong>Date:</strong> {this.state.deadline}</h3>
                </header>
                <div className="App-intro title-container">
                    <Clock deadline={this.state.deadline}/>
                    <h4>You Can Check New Dates</h4>
                    <div className="Countdown-input">
                        <input
                            type="text"
                            placeholder={'eg: December 25, 2018'}
                            onChange={(event) => this.setState({newDeadline: event.target.value})}
                        />
                        <button onClick={() => this.changeDeadline()}>Check Days Left</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
