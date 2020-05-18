import React, { useEffect, useState} from 'react';

import alertImg from '../../assets/alert.png'

import './styles.css'

export default function ResultBox(props) {
    const [resultado_label, setResultadolabel] = useState('ANALISANDO');
    
    if (props.result == 0){
        setResultadolabel("NEGATIVO");
    }else{
        setResultadolabel("POSITIVO");
    }
    return (
        
        <div className={`plot-box-status ${resultado_label}`}>
            <div className="alert-icon">
                <img src={alertImg}></img>
            </div>
            <div className="model_output">
                <span class="model-class">{resultado_label}</span>
                <span class="model-proba">Probabilidade: {props.proba}%</span>
            </div>
        </div>
    )
}