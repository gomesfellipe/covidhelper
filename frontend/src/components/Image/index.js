import React from 'react';

import './styles.css'

export default function Image(props) {
    return(
        <img src={props.src} className={`img-${props.size}`} alt={props.alt} />
    );
}