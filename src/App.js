import React, { Component } from 'react';
import GuessCount from './components/guess-count';
import Guesses from './components/guesses';
import GuessInput from './components/guess-input';
import GuessMessage from './components/guess-message';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: '',
            guesses: [],
            answer: Math.floor(Math.random() * 101) + 1,
            message: ''
        };
        this.updateNumber = this.updateNumber.bind(this);
        this.numGuesses = 0;
    }

    updateNumber(e) {
        this.setState({
            number: e.target.value
        });
    }

    getDifference(guess, answer) {
        return answer - guess > 0 ? answer - guess : guess - answer;
    }

    getMessage(difference) {
        let message = this.state.message;
        if (difference === 0) {
            message = 'You guessed right!';
        } else if (difference <= 10 && difference > 5) {
            message = 'Warmer...';
        } else if (difference <= 20 && difference > 10) {
            message = 'You are getting warm';
        } else if (difference > 20) {
            message = 'You are cold';
        } else if (difference <= 5) {
            message = 'Hot!!';
        }
        return message;
    }

    validateNumber(e) {
        if (this.state.number > 100 || this.state.number < 1) {
            this.setState({
                message: 'Please pick a number between 1 - 100'
            });
        } else if (this.state.guesses.includes(this.state.number)) {
            this.setState({
                message: 'You already guessed that number!'
            });
        } else {
            this.updateGuesses(e);
        }
    }

    updateGuesses(e) {
        let difference = this.getDifference(this.state.number, this.state.answer);
        console.log('answer: ' + this.state.answer);
        console.log('guess: ' + this.state.number);
        console.log('difference: ' + difference);

        this.setState({
            guesses: this.state.guesses.concat([this.state.number]),
            message: this.getMessage(difference),
            number: ''
        });
        this.numGuesses++;
    }

    newGame(e) {
        this.setState({
            number: '',
            guesses: [],
            answer: Math.floor(Math.random() * 101) + 1,
            message: ''
        });
    }

    render() {
        let guesses = this.state.guesses + ' ';
        return (
          <div className="guessingApp">
            <button className="ui teal button newGame" onClick={e => this.newGame(e)}>+ New Game</button>
            <header>
              <h1 className="ui teal header">HOT or COLD</h1>
            </header>
            <form className="ui form guessForm">
                <GuessMessage className="ui positive message" message={this.state.message} />
                <GuessInput id="number" type="number" min={0} placeholder="Enter Your Guess" value={this.state.number} onChange={e => this.updateNumber(e)}/>
                <GuessInput className="ui teal button" id="submit" type="button" value="Guess" onClick={(e) => this.validateNumber(e)}/>
                <GuessCount className="ui teal bottom left attached label guess" value={this.numGuesses} />
            </form>
            <Guesses allGuesses={guesses} className="ui teal header"/>
          </div>
        );
    }
}

export default App;
