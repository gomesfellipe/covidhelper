import React from 'react';

import './styles.css';

export default function Flyer(props) {
    return(
        <div className={`session-container background-${props.background}`}>
            {props.children}
        </div>
    );
}