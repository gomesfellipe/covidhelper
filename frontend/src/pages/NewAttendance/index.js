import React, { useState } from 'react';
import api from '../../services/api';

import './styles.css'

import HeaderApp from '../../components/HeaderApp'

export default function NewAttendance() {
    const [userid, setUserid] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(0);
    const [height, setHeight] = useState(0);
    const [readOnly, setReadOnly] = useState(false);

    const token = localStorage.getItem('token');

    function handleUserClear(e) {
        e.preventDefault();
        setUserid('');
        setName('');
        setGender('');
        setReadOnly(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            name: name,
            gender: gender,
            age: age,
            height: height,
        }
        console.log(data);
    }

    async function handleSearchUser(e) {
        e.preventDefault();

        const headers = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        try {
            const response = await api.get(`users?userid=${userid}`, headers);
            const users = response.data.items;
            if (users.length === 1) {
                const user = users[0];
                setName(user.name);
                setGender(user.gender);
                setReadOnly(true);
            } else {
                alert("Paciente nao encontrado.");
            }
        } catch (error) {
            alert(error);
        }
    }
    return (
        <div>
            <HeaderApp />
            <div className="new-attendance-box">
                <h1>NOVO ATENDIMENTO</h1>
                <h2>IDENTIFICAÇÃO DO PACIENTE</h2>
                <p>
                    SE O PACIENTE JÁ ESTIVER CADASTRADO NO SISTEMA, AO CLICAR EM BUSCAR O SISTEMA ATRIBUIRÁ
                    ESTA CONSULTA A ELE. CASO ELE AINDA NÃO SEJA CADASTRADO, BASTA
                    SEGUIR NORMALMENTE QUE ELE SERÁ CADASTRADO AUTOMATICAMENTE.
                </p>
                <div className="new-attendance-item">
                    <div className="label-float">
                        <input form="submitForm"
                            placeholder=" "
                            required
                            value={userid}
                            onChange={e => setUserid(e.target.value)}
                            readOnly={readOnly}
                        />
                        <label>ID DO PACIENTE</label>
                    </div>

                    <button className="button" onClick={handleSearchUser}>BUSCAR</button>
                    <button className="button" onClick={handleUserClear}>LIMPAR</button>
                </div>

                <h2>INFORMAÇÕES GERAIS</h2>

                <div className="new-attendance-item">
                    <div className="label-float">
                        <input form="submitForm"
                            placeholder=" "
                            required
                            value={name}
                            onChange={e => setName(e.target.value)}
                            readOnly={readOnly}
                        />
                        <label>NOME</label>
                    </div>
                    <div className="label-float">
                        <select form="submitForm"
                            onChange={e => setGender(e.target.value)}>
                            <option value="indefinido">Indefinido</option>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                        </select>
                        <label>GÊNERO</label>
                    </div>
                    <div className="label-float">
                        <input form="submitForm"
                            type="number"
                            min="0"
                            max="130"
                            step="1"
                            value={age}
                            onChange={e => setAge(e.target.value)}
                            placeholder=" "
                        />
                        <label>IDADE (anos)</label>
                    </div>
                    <div className="label-float">
                        <input form="submitForm"
                            type="number"
                            min="0"
                            max="250"
                            step="1"
                            value={height}
                            onChange={e => setHeight(e.target.value)}
                            placeholder=" "
                        />
                        <label>ALTURA (cm)</label>
                    </div>
                </div>

                <h2>PRESENÇA DE OUTRAS DOENÇAS</h2>
                <p>
                    ESTA PARTE DO FORMULÁRIO É OPCIONAL. ELA NÃO É REQUERIDA PARA A ANÁLISE SER FEITA,
                    ENTRETANTO, O FORNECIMENTO DESTAS INFORMAÇÕES (QUANDO DISPONÍVEIS) PODEM AUMENTAR
                    SIGNIFICATIVAMENTE A PRECISÃO DAS ANÁLISES.
                </p>
                <div className="new-attendance-item">

                    <div className="label-float">
                        <input form="submitForm"
                            placeholder=" "
                        />
                        <label>INFLUENZA</label>
                    </div>
                    <div className="label-float">
                        <input form="submitForm"
                            placeholder=" "
                        />
                        <label>PARAINFLUENZA</label>
                    </div>
                    <div className="label-float">
                        <input form="submitForm"
                            placeholder=" "
                        />
                        <label>H1N1</label>
                    </div>
                    <div className="label-float">
                        <input form="submitForm"
                            placeholder=" "
                        />
                        <label>CHLAMYDOPHILA PNEUMONIAE</label>
                    </div>
                    <div className="label-float">
                        <input form="submitForm"
                            placeholder=" "
                        />
                        <label>RHINOVIRUS/ENTEROVIRUS</label>
                    </div>
                    <div className="label-float">
                        <input form="submitForm"
                            placeholder=" "
                        />
                        <label>VÍRUS SINCICIAL RESPIRATÓRIO</label>
                    </div>
                    <div className="label-float">
                        <input form="submitForm"
                            placeholder=" "
                        />
                        <label>OUTROS CORONAVÍRUS (EXCETO SARS-COV-2)</label>
                    </div>
                    <div className="label-float">
                        <input form="submitForm"
                            placeholder=" "
                        />
                        <label>OUTRAS INFECÇÕES RESPIRATÓRIAS</label>
                    </div>

                </div>
                <h2>HEMOGRAMA</h2>
                <div>
                    <h2>ERITOGRAMA</h2>
                    <div className="new-attendance-item">

                        <div className="label-float">
                            <input form="submitForm"
                                placeholder=" "
                            />
                            <label>HEMÁCIAS (tera/L)</label>
                        </div>
                        <div className="label-float">
                            <input form="submitForm"
                                placeholder=" "
                            />
                            <label>HEMATÓCRITO (%)</label>
                        </div>
                        <div className="label-float">
                            <input form="submitForm"
                                placeholder=" "
                            />
                            <label>HEMOGLOBINAS (g/dL)</label>
                        </div>
                        <div className="label-float">
                            <input form="submitForm"
                                placeholder=" "
                            />
                            <label>VCM (fL)</label>
                        </div>
                        <div className="label-float">
                            <input form="submitForm"
                                placeholder=" "
                            />
                            <label>HCM (pg)</label>
                        </div>
                        <div className="label-float">
                            <input form="submitForm"
                                placeholder=" "
                            />
                            <label>CHCM (g/dL)</label>
                        </div>
                        <div className="label-float">
                            <input form="submitForm"
                                placeholder=" "
                            />
                            <label>RDW (%)</label>
                        </div>
                        <div className="label-float">
                            <input form="submitForm"
                                placeholder=" "
                            />
                            <label>ERITOBLASTOS (/100 leuco)</label>
                        </div>

                    </div>
                    <h2>LEUCOGRAMA + PCR</h2>
                    <div className="new-attendance-item">

                        <div className="label-float">
                            <input form="submitForm"
                                placeholder=" "
                            />
                            <label>LEUCÓCITOS (/mm3)</label>
                        </div>
                        <div className="label-float">
                            <input form="submitForm"
                                placeholder=" "
                            />
                            <label>MIELÓCITOS (/mm3)</label>
                        </div>
                        <div className="label-float">
                            <input form="submitForm"
                                placeholder=" "
                            />
                            <label>METAMIELÓCITOS (/mm3)</label>
                        </div>
                        <div className="label-float">
                            <input form="submitForm"
                                placeholder=" "
                            />
                            <label>BASTONETES (/mm3)</label>
                        </div>
                        <div className="label-float">
                            <input form="submitForm"
                                placeholder=" "
                            />
                            <label>SEGMENTADOS (/mm3)</label>
                        </div>
                        <div className="label-float">
                            <input form="submitForm"
                                placeholder=" "
                            />
                            <label>NEUTRÓCITOS TOTAIS (/mm3)</label>
                        </div>
                        <div className="label-float">
                            <input form="submitForm"
                                placeholder=" "
                            />
                            <label>EOSINÓFILOS (/mm3)</label>
                        </div>
                        <div className="label-float">
                            <input form="submitForm"
                                placeholder=" "
                            />
                            <label>BASÓFILOS (/mm3)</label>
                        </div>
                        <div className="label-float">
                            <input form="submitForm"
                                placeholder=" "
                            />
                            <label>LINFÓCITOS (/mm3)</label>
                        </div>
                        <div className="label-float">
                            <input form="submitForm"
                                placeholder=" "
                            />
                            <label>MONÓCITOS (/mm3)</label>
                        </div>
                        <div className="label-float">
                            <input form="submitForm"
                                placeholder=" "
                            />
                            <label>PLASMÓCITOS (/mm3)</label>
                        </div>
                        <div className="label-float">
                            <input form="submitForm"
                                placeholder=" "
                            />
                            <label>PCR (mg/L)</label>
                        </div>

                    </div>

                    <h2>PLAQUETOGRAMA</h2>
                    <div className="new-attendance-item">

                        <div className="label-float">
                            <input form="submitForm"
                                placeholder=" "
                            />
                            <label>PLAQUETAS (/103 mm3)</label>
                        </div>
                        <div className="label-float">
                            <input form="submitForm"
                                placeholder=" "
                            />
                            <label>VMP (fL)</label>
                        </div>

                    </div>

                </div>
                <form id="submitForm" onSubmit={(e) => handleSubmit(e)}>
                    <input className="button-full-width" type="submit" value="ANALISAR" >

                    </input>
                </form>

            </div>
        </div>
    )
}