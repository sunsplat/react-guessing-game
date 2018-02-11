import React from 'react';

export default function GuessCount(props) {
    return (
        <div
            className={props.className}
            value={props.value}>
            Guess No: {props.value}
        </div>

    );
}

GuessCount.defaultProps = {
  value: 0
};
