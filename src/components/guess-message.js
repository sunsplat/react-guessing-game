import React from 'react';
import Guesses from './guesses';

export default function GuessMessage(props) {
    return (
        <div className={props.className}>
            <h2>{props.message}</h2>
            <Guesses allGuesses={props.value} className="ui teal header"/>
        </div>
    );
}

GuessMessage.defaultProps = {
    message: ''
}
