import React from 'react';

import './styles.css';
import Header from '../../components/Header';

import logoImg from '../../assets/logo.png'
import fingerImg from '../../assets/finger.png'
import magnifierImg from '../../assets/magnifier.png'
import graph1Img from '../../assets/graph1.png'
import graph2Img from '../../assets/graph2.png'
import cartImg from '../../assets/cart.png'
import p75Img from '../../assets/p75.png'
import p14Img from '../../assets/p14.png'
import fingerSmallImg from '../../assets/finger-small.png'
import lampImg from '../../assets/lamp.png'
import logoOrangeImg from '../../assets/logo-orange.png'
import computerImg from '../../assets/computer.png'
import smartphoneImg from '../../assets/smartphone.png'
import magnifierSmallImg from '../../assets/magnifier-small.png'
import fingerSmallBlueImg from '../../assets/finger-small-blue.png'
import speakerImg from '../../assets/speaker.png'
import xImg from '../../assets/x.png'
import circleImg from '../../assets/circle.png'
import agendaImg from '../../assets/agenda.png'
import stairsImg from '../../assets/stairs.png'
import barretosImg from '../../assets/barretos.png'
import eldoradoImg from '../../assets/eldorado.png'
import uspImg from '../../assets/usp.png'

export default function Index() {
    return (
        <div>
            <Header/>
            <div className="session-container background-blue">
                <div className="padding-top-bottom-big session-item">
                    <img src={logoImg} className="session-img-logo" alt="indicAI" />
                    <p className="padding-top-small">INDICADOR INTELIGENTE PARA DIAGNOSTICO DO CORONAVIRUS</p>
                </div>
                <div className="padding-top-bottom-big session-item">
                    <img src={fingerImg} className="session-img" alt="indicAI" />
                </div>
            </div>
            <div className="session-container background-orange">
                <div className="padding-top-bottom-big session-item">
                    <img src={magnifierImg} className="session-img" alt="indicAI" />
                </div>
                <div className="padding-top-bottom-big session-item">
                    <h1 className="text-big">Como o Brasil tem lidado com a pandemia?</h1>
                </div>
            </div>

            <div className="session-container background-blue">
                <p className="full-width"><h1 className="text-big margin-bottom-big">Um retrato do passado</h1></p>
                <div className="padding-top-bottom-big session-item">
                    <img src={graph1Img} className="session-img-small" alt="indicAI" />
                    <h1 className="text-big padding-top-small">Casos subnotificados</h1>
                    <span>Análises dos casos de internação por SRAG
                    apontam grande número de casos
                    subnotificados
                    </span>
                </div>
                <div className="padding-top-bottom-big session-item">
                    <img src={graph2Img} className="session-img-small" alt="indicAI" />
                    <h1 className="text-big padding-top-small">Fila de exames</h1>
                    <p>Milhares de exames esperando resultado</p>
                </div>
            </div>
            <div className="session-container background-blue">
                <div className="padding-top-bottom-big session-item">
                    <img src={cartImg} className="session-img" alt="indicAI" />
                </div>
                <div className="padding-top-bottom-big session-item">
                    <h1 className="text-big">Testes rapidos</h1>
                    <p>
                        Como estratégia para evitar o avanço da
                        doença, o governo disponibilizou testes
                        rápidos para a população
                    </p>
                </div>
            </div>
            <div className="session-container background-white">
                <p className="full-width text-black padding-top-big"><h1 className="text-big">Entretanto, testes rapidos apresentam
baixa precisão em estagios iniciais</h1></p>
                <div className="padding-top-bottom-big session-item">
                    <img src={p75Img} className="session-img-small" alt="indicAI" />
                    <p className="padding-top-small text-black">De chance de erro nos testes que apontam negativo,
                    ou seja, a pessoa pode estar com a doença mesmo com o resultado negativo
                    </p>
                </div>
                <div className="padding-top-bottom-big session-item">
                    <img src={p14Img} className="session-img-small" alt="indicAI" />
                    <p className="padding-top-small text-black">De chance de erro nos testes positivos, aqueles em que a
                    pessoa possui a infecção</p>
                </div>
                <div className="padding-top-bottom-big session-item">
                    <img src={fingerSmallImg} className="session-img-small" alt="indicAI" />
                    <p className="padding-top-small text-black">Essa taxa de erro pode impactar consideravelmente o
                        panorama da infecção.</p>
                </div>
            </div>
            <div className="session-container background-blue">
                <div className="padding-top-bottom-big">
                    <img src={lampImg} className="session-img" alt="indicAI" />
                </div>
                <div className="padding-top-bottom-big session-item">
                    <h1 className="text-big">Criação de outro indicador para
                    auxílio na decisão clínica</h1>
                    <p>
                        Uma vez que o teste rápido impõe limitações, surge a
                        possibilidade de se pensar em outros indicadores clínicos
                        para guiar os médicos e as estatísticas de notificação do vírus na população.
                    </p>
                </div>
            </div>
            <div className="session-container background-white">
                <div className="padding-top-bottom-big session-item">
                    <img src={logoOrangeImg} className="session-img" alt="indicAI" />
                </div>
                <div className="padding-top-bottom-big session-item">
                    <p className="text-medium text-black">Assim, criamos o <b>IndicAI</b>. Uma ferramenta para o auxílio de
                    diagnóstico de coronavírus baseado em algoritmos inteligentes, que utiliza técnicas de
                    Aprendizado de Máquina para criar um indicador com base em dados clínicos</p>

                </div>
            </div>
            <div className="session-container background-orange">
                <p className="full-width"><h1 className="text-big">Solução</h1></p>
                <div className="padding-top-bottom-big session-item">
                    <img src={computerImg} className="session-img-small" alt="indicAI" />
                    <p className="padding-top-small"><h1>Plataforma Web</h1></p>
                    <p>Direcionada para os centros médicos, o
                    objetivo da plataforma é auxiliar no diagnótico e prognóstico dos 
                    pacientes com suspeita de coronavírus
                    </p>
                </div>
                <div className="padding-top-bottom-big session-item">
                    <img src={smartphoneImg} className="session-img-small" alt="indicAI" />
                    <p className="padding-top-small"><h1>Aplicativo</h1></p>
                    <p>Com foco no usuário final, o aplicativo visa 
                    à realização de uma auto-triagem, disseminação de informações e dicas para 
                    buscar ajuda e evitar o contágio</p>
                </div>
            </div>
            <div className="session-container background-blue">
                <p className="full-width"><h1 className="text-big">Plataforma Web</h1></p>
                <div className="padding-top-bottom-big session-item">
                    <img src={magnifierSmallImg} className="session-img-small" alt="indicAI" />
                    <p className="padding-top-small"><h1>Calculo do Indicador</h1></p>
                    <p>Através de informações clínicas e de exames 
                    de imagem e laboratoriais, a plataforma 
                    calcula um escore para ser utilizado nas 
                    decisões médicas a serem tomadas para cada paciente
                    </p>
                </div>
                <div className="padding-top-bottom-big session-item">
                    <img src={graph2Img} className="session-img-small" alt="indicAI" />
                    <p className="padding-top-small"><h1>Avaliação do Prognostico</h1></p>
                    <p>Após o cálculo do indicador, o centro médico pode 
                    utilizar a plataforma para realizar a gestão deste 
                    paciente. Com a avaliação de prognóstico, o 
                    IndicAI calcula a probabilidade de utilização de 
                    recursos hospitalares (e.g. leito de UTI) e permite uma gestão da unidade mais eficaz e assertiva
                    </p>
                </div>
            </div>
            <div className="session-container background-orange">
                <p className="full-width"><h1 className="text-big">Aplicativo</h1></p>
                <div className="padding-top-bottom-big session-item">
                    <img src={fingerSmallBlueImg} className="session-img-small" alt="indicAI" />
                    <p className="padding-top-small"><h1>Auto-triagem</h1></p>
                    <p>Através do aplicativo, o usuário poderá realizar 
                    uma auto-avaliação (seguindo fluxogramas estabelecidos pela comunidade científica) 
                    e dessobrecarregar as unidades de saúde
                    </p>
                </div>
                <div className="padding-top-bottom-big session-item">
                    <img src={speakerImg} className="session-img-small" alt="indicAI" />
                    <p className="padding-top-small"><h1>Informações</h1></p>
                    <p>Além disso, o aplicativo também pode atuar como 
                    um canal de disseminação de informações importante no combate à 
                    pandemia. Contando com notícias, dicas para prevenção e cuidados e alertas para a população
                    </p>
                </div>
            </div>
            <div className="session-container background-blue">
                <p className="full-width"><h1 className="text-big">Diferenciais e Vantagens</h1></p>
                <div className="padding-top-bottom-big session-item">
                    <img src={xImg} alt="indicAI" />
                    <p className="padding-top-small"><h1>Sem dificuldade na logistica</h1></p>
                    <p>Não existe nenhuma mudança logística necessária, 
                    basta que a unidade de saúde se cadastre e comece a utilizar a plataforma
                    </p>
                    <p className="padding-top-small"><h1>Sem limitações de escalabilidade</h1></p>
                    <p>A IndicAI não possui nenhuma barreira no quesito 
                    escalabilidade, ela tem total capacidade de 
                    atender de centenas de pessoas até centenas de milhões
                    </p>
                </div>
                <div className="padding-top-bottom-big session-item">
                    <img src={circleImg} alt="indicAI" />
                    <p className="padding-top-small"><h1>Custo zero</h1></p>
                    <p>Os centros de saúde e os usuários não 
                    precisam pagar nada para utilizar o IndicAI. Os únicos gastos são 
                    relacionados a exames que o paciente já teria que fazer (e.g. hemograma ou CT)
                    </p>
                    <p className="padding-top-small"><h1>Solução completa e integrada</h1></p>
                    <p>A IndicAI é uma solução integrada e que 
                    auxilia tanto o usuário como as unidades de saúde. Dessa forma, as informações dentro da 
                    plataforma podem ser utilizadas para prover o melhor atendimento médico possível para o paciente
                    </p>
                </div>
            </div>
            <div className="session-container background-white">
                <p className="full-width text-black"><h1 className="text-big">Impacto na sociedade</h1></p>
                <div className="padding-top-bottom-big session-item">
                    <img src={graph2Img} className="session-img-small" alt="indicAI" />
                    <p className="padding-top-small text-black"><h1>Redução na mortalidade e expansão da pandemia</h1></p>
                    <p className="text-black">Ao fornecer um indicador de diagnóstico do 
                    coronavírus, a IndicAI pode ajudar os médicos a detectarem pacientes doentes previamente, 
                    adotando as devidas medidas de tratamento e isolamento
                    </p>
                </div>
                <div className="padding-top-bottom-big session-item">
                    <img src={agendaImg} className="session-img-small" alt="indicAI" />
                    <p className="padding-top-small text-black"><h1>Agilizar testes e diagnósticos</h1></p>
                    <p className="text-black">Por dar um resultado imediato, e também 
                    fornecer uma forma de auto-triagem, a solução apresentada reduz o tempo de 
                    espera para realizar os devidos encaminhamentos</p>
                </div>
                <div className="padding-top-bottom-big session-item">
                    <img src={stairsImg} className="session-img-small" alt="indicAI" />
                    <p className="padding-top-small text-black"><h1>Democratização dos testes</h1></p>
                    <p className="text-black">Dada a alta escalabilidade, a 
                    plataforma consegue democratizar o acesso aos testes, levando o indicador 
                    para populações que não tenha infraestrutura e possibilidade de ser testada. 
                    Além de disseminar informações importantes sobre o tema</p>
                </div>
            </div>
            <div className="session-container background-blue">
                <p className="full-width"><h1 className="text-big">Parceiros</h1></p>
                <div className="padding-top-bottom-big session-item">
                    <img src={barretosImg} className="session-img-small" alt="indicAI" />
                    <p className="padding-top-small"><h1>Parceiro médico-hospitalar</h1></p>
                    <p className="padding-top-small">Unidade responsável pelo enfrentamento do Covid-19 na cidade de Barretos
                    </p>
                </div>
                <div className="padding-top-bottom-big session-item">
                    <img src={eldoradoImg} className="session-img-small" alt="indicAI" />
                    <p className="padding-top-small"><h1>Parceiro de produto e desenvolvimento</h1></p>
                    <p className="padding-top-small">O Instituto Eldorado é um dos maiores centros de P,D&I do país, referência em
pesquisa, desenvolvimento e inovação nas áreas de Software, Hardware, sistemas e processos.</p>
                </div>
                <div className="padding-top-bottom-big session-item">
                    <img src={uspImg} className="session-img-small" alt="indicAI" />
                    <p className="padding-top-small"><h1>Parceiro tecnológico-científico</h1></p>
                    <p className="padding-top-small">O ICMC é considerado um dos mais importantes centros de formação nas áreas de 
                    matemática, matemática aplicada, computação e estatística.</p>
                </div>
            </div>
            <div className="session-container background-white">
                <p className="full-width text-black"><h1 className="text-big">Equipe</h1></p>
                <div className="padding-top-bottom-big session-item">
                    <img src={p75Img} className="session-img-small" alt="indicAI" />
                    <p className="padding-top-small text-black">De chance de erro nos testes que apontam negativo,
                    ou seja, a pessoa pode estar com a doença mesmo com o resultado negativo
                    </p>
                </div>
                <div className="padding-top-bottom-big session-item">
                    <img src={p14Img} className="session-img-small" alt="indicAI" />
                    <p className="padding-top-small text-black">De chance de erro nos testes positivos, aqueles em que a
                    pessoa possui a infecção</p>
                </div>
                <div className="padding-top-bottom-big session-item">
                    <img src={p14Img} className="session-img-small" alt="indicAI" />
                    <p className="padding-top-small text-black">De chance de erro nos testes positivos, aqueles em que a
                    pessoa possui a infecção</p>
                </div>
            </div>
        </div>
    );
}