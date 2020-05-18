import React, { useEffect, useState} from 'react';

import alertImg from '../../assets/alert.png'

import './styles.css'

export default function ResultBox(props) {
    const [resultado_label, setResultadolabel] = useState('ANALISE');
    console.log(props.result)


    useEffect(() => {
        // Create an scoped async function in the hook
        function anyNameFunction() {    
            if (props.result == 0){
                setResultadolabel("NEGATIVO");
            } else if (props.result == 1){
                setResultadolabel("POSITIVO");
            }
  
        }    // Execute the created function directly
        anyNameFunction();
        
      }, [props.result]);
    

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