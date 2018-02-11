import React from 'react';

// import './guesses.css';

export default function Guesses(props) {
    return (
        <div>
            <h3 className={props.className}>Your Guesses: {props.allGuesses} </h3>
        </div>
    );
}
