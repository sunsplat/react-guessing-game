import React, { Component } from 'react';
import GuessCount from './components/guess-count';
// import Guesses from './components/guesses';
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
            message: 'Guess a number between 1-100'
        };
        this.updateNumber = this.updateNumber.bind(this);
        this.numGuesses = 10;
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
            message += `<button className="ui teal button newGame" onClick={e => this.newGame(e)}>+ New Game</button>`;
        } else if (difference < 10 && difference >= 5) {
            message = 'Warm';
        } else if (difference < 15 && difference >= 10) {
            message = 'Cold';
        } else if (difference > 15) {
            message = 'Freezing';
        } else if (difference < 5) {
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

        this.setState({
            guesses: this.state.guesses.concat([this.state.number]),
            message: this.getMessage(difference),
            number: ''
        });
        this.numGuesses--;
    }

    checkGameStatus() {
        if (this.numGuesses > 0) {
            this.numGuesses--;
        } else {
            alert('GAME OVER! You lose!!');
            this.newGame();
        }
    }

    newGame(e) {
        this.setState({
            number: '',
            guesses: [],
            answer: Math.floor(Math.random() * 101) + 1,
            message: 'Guess a number between 1-100'
        });
    }

    render() {
        let guesses = this.state.guesses + ' ';
        return (
              <div className="guessingApp">
                <button className="ui teal button newGame" onClick={e => this.newGame(e)}>+ New Game</button>
                <header>
                  <h1 className="ui teal header">Guess Before You Die</h1>
                </header>
                <form className="ui form guessForm">
                    <GuessMessage className="ui positive message" message={this.state.message} value={guesses}/>
                    <GuessInput id="number" type="number" autoFocus="autofocus" placeholder="Enter Your Guess" value={this.state.number} onChange={e => this.updateNumber(e)}/>
                    <GuessInput className="ui teal button" type="button" value="Guess" onClick={(e) => this.validateNumber(e)}/>
                    <GuessCount className="ui teal bottom left attached label guess" value={this.numGuesses} />
                </form>
              </div>
        );
    }
}

export default App;
