import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import HelpRounded from '@material-ui/icons/HelpRounded';
import './styles.css'

import HeaderApp from '../../components/HeaderApp'

export default function Report() {
    return(
        <div>
            <HeaderApp/>
            <div className="report-box">
                <h1>Report</h1>


                <div id="test-result">

                </div>

                <div className="box-50">
                    <div className="report-item plot-box-50">
                        <div className="plot-header">
                            <h3>Como cada componente do exame contribuiu para o resultado:</h3>
                            <IconButton aria-label="delete"><HelpRounded /></IconButton>
                        </div>
                        <div className="plot-figure">
                            
                        </div>
                        <div className="plot-explanation-text">
                            <ul>
                                <li>O eixo x indica a contribuição de cada variável na probabilidade do paciente estar infectado. Este valor é chamado SHAP.</li>
                                <li> A cor vermelha indica que a contribuição é para diagnóstico de COVID, e azul para paciente saudável.</li>
                                <li>O eixo y está nome do exame (em ordem de importância de cima para baixo), 
                                    e sua contribuição para o resultado do SHAP.</li>
                            </ul>
                            <div className="clearer"></div>
                        </div>
                    </div>
                    <div className="report-item plot-box-50">
                    <h3>Teste 1</h3>
                        
                    </div>
                </div>

            </div>

            
            
        </div>
    )
}