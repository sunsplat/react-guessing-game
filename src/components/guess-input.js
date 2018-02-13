import React from 'react';

export default function GuessInput(props) {
    return (
        <div className="ui input focus">
            <input className={props.className} type={props.type} placeholder={props.placeholder} id={props.id} value={props.value} onChange={props.onChange} onClick={props.onClick} autoFocus={props.autoFocus}/>
        </div>
    );
}
