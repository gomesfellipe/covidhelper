import React from 'react';

import './styles.css'

export default function Title(props) {
    return(
        <p className={`full-width text-${props.color} padding-top-bottom-big text-big`}>{props.children}</p>
    );
}