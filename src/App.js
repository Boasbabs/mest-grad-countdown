import React, { Component } from 'react';
import logo from './logo2.png';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: "August 12, 2018",
            newDeadline: ""
        }
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
                    <h3>Graduation Date: {this.state.deadline}</h3>
                </header>
                <div className="App-intro">
                    <div className="Countdown-meter">
                        <div>31 days</div>
                        <div>15 hours</div>
                        <div>24 minutes</div>
                        <div>24 seconds</div>
                    </div>
                    <div className="Countdown-input">
                        <input
                            type="text"
                            placeholder={'enter date'}
                            onChange={(event) => this.setState({newDeadline: event.target.value})}
                        />
                        <button onClick={() => this.changeDeadline()}>Submit</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
