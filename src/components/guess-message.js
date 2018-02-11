import React from 'react';

export default function GuessMessage(props) {
    return (
        <div className={props.className}>
            <h2>Make your Guess (between 1-100)!</h2>
            <p>{props.message}</p>
        </div>
    );
}

GuessMessage.defaultProps = {
    message: ''
}
