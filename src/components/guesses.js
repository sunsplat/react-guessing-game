import React from 'react';

export default function Guesses(props) {
    return (
        <div>
            <h3 className={props.className}>Your Guesses: {props.allGuesses} </h3>
        </div>
    );
}
