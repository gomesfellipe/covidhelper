import React from 'react';

import './styles.css';

export default function Box(props) {
    return (
        <div className="padding-top-bottom-big session-item">
            {props.children}
        </div>
    );
}