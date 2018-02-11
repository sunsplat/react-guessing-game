import React from 'react';
import './guess-form.css';
import GuessMessage from './guess-message';

export default function GuessForm(props) {
    return (
        <form className={props.className}>
            <GuessMessage className="ui top attached label" message={props.message} />
        </form>
    );
}
