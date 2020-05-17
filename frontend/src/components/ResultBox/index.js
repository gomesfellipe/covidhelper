import React from 'react';

import alertImg from '../../assets/alert.png'

import './styles.css'

export default function ResultBox(props) {
    return (
        <div className={`plot-box-status ${props.result}`}>
            <div className="alert-icon">
                <img src={alertImg}></img>
            </div>
            <div className="model_output">
                <span class="model-class">{props.result}</span>
                <span class="model-proba">Probabilidade: 87%</span>
            </div>
        </div>
    )
}