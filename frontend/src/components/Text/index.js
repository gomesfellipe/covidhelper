import React from 'react';

import './styles.css'

export default function Text(props) {
    return(
        <p className={`padding-top-small text-${props.color} text-${props.size}`}>
            {props.children}
        </p>
    );
}