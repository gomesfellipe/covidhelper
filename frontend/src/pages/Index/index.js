import React from 'react';

import './styles.css';
import Header from '../../components/Header';
import Flyer from '../../components/Flyer';
import Box from '../../components/Box';
import Image from '../../components/Image';
import Text from '../../components/Text';
import Title from '../../components/Title';

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
            <Header />
            <Flyer background="blue">
                <Box>
                    <Image src={logoImg} size="big" alt="indicAI" />
                    <Text color="white">
                        INDICADOR INTELIGENTE PARA DIAGNOSTICO DO CORONAVIRUS
                    </Text>
                </Box>
                <Box>
                    <Image src={fingerImg} size="big" alt="indicAI" />
                </Box>
            </Flyer>

            <Flyer background="orange">
                <Box>
                    <Image src={magnifierImg} size="big" alt="indicAI" />
                </Box>
                <Box>
                    <Text color="white" size="big">
                        Como o Brasil tem lidado com a pandemia?
                    </Text>
                </Box>
            </Flyer>

            <Flyer background="blue">
                <Title color="white">Um retrato do passado</Title>
                <Box>
                    <Image src={graph1Img} size="medium" alt="indicAI" />
                    <Text color="white" size="big">Casos subnotificados</Text>
                    <Text color="white" size="small">
                        Análises dos casos de internação por SRAG
                        apontam grande número de casos
                        subnotificados
                    </Text>
                </Box>
                <Box>
                    <Image src={graph2Img} size="medium" alt="indicAI" />
                    <Text color="white" size="big">Fila de exames</Text>
                    <Text color="white" size="small">
                        Milhares de exames esperando resultado
                    </Text>
                </Box>
            </Flyer>

            <Flyer background="blue">
                <Box>
                    <Image src={cartImg} size="big" alt="indicAI" />
                </Box>
                <Box>
                    <Text color="white" size="big">Testes rapidos</Text>
                    <Text color="white" size="small">
                        Como estratégia para evitar o avanço da
                        doença, o governo disponibilizou testes
                        rápidos para a população
                    </Text>
                </Box>
            </Flyer>

            <Flyer background="white">
                <Title color="black">Entretanto, testes rapidos apresentam
                baixa precisão em estagios iniciais
                </Title>
                <Box>
                    <Image src={p75Img} size="big" alt="indicAI" />
                    <Text color="black" size="medium">De chance de erro nos testes que apontam negativo,
                    ou seja, a pessoa pode estar com a doença mesmo com o resultado negativo
                    </Text>
                </Box>
                <Box>
                    <Image src={p14Img} size="big" alt="indicAI" />
                    <Text color="black" size="medium">De chance de erro nos testes positivos, aqueles em que a
                    pessoa possui a infecção
                    </Text>
                </Box>
                <Box>
                    <Image src={fingerSmallImg} size="big" alt="indicAI" />
                    <Text color="black" size="medium">Essa taxa de erro pode impactar consideravelmente o
                    panorama da infecção
                    </Text>
                </Box>
            </Flyer>

            <Flyer background="blue">
                <Box>
                    <Image src={lampImg} size="big" alt="indicAI" />
                </Box>
                <Box>
                    <Title color="white" size="big">Criação de outro indicador para
                    auxílio na decisão clínica
                    </Title>
                    <Text color="white" size="medium">
                        Uma vez que o teste rápido impõe limitações, surge a
                        possibilidade de se pensar em outros indicadores clínicos
                        para guiar os médicos e as estatísticas de notificação do vírus na população
                    </Text>
                </Box>
            </Flyer>

            <Flyer background="white">
                <Box>
                    <Image src={logoOrangeImg} size="big" alt="indicAI" />
                </Box>
                <Box>
                    <Text color="black" size="medium">
                        Assim, criamos o <b>IndicAI</b>. Uma ferramenta para o auxílio de
                        diagnóstico de coronavírus baseado em algoritmos inteligentes, que utiliza técnicas de
                        Aprendizado de Máquina para criar um indicador com base em dados clínicos
                    </Text>
                </Box>
            </Flyer>

            <Flyer background="orange">
                <Title color="white">Solução</Title>
                <Box>
                    <Image src={computerImg} size="big" alt="indicAI" />
                    <Text color="white" size="big">Plataforma Web</Text>
                    <Text size="medium">
                        Direcionada para os centros médicos, o
                        objetivo da plataforma é auxiliar no diagnótico e prognóstico dos
                        pacientes com suspeita de coronavírus
                    </Text>
                </Box>
                <Box>
                    <Image src={smartphoneImg} size="big" alt="indicAI" />
                    <Text color="white" size="big">Aplicativo</Text>
                    <Text size="medium">
                        Com foco no usuário final, o aplicativo visa
                        à realização de uma auto-triagem, disseminação de informações e dicas para
                        buscar ajuda e evitar o contágio
                    </Text>
                </Box>
            </Flyer>

            <Flyer background="blue">
                <Title color="white">Plataforma Web</Title>
                <Box>
                    <Image src={magnifierSmallImg} size="big" alt="indicAI" />
                    <Text color="white" size="big">Calculo do Indicador</Text>
                    <Text size="medium">
                        Através de informações clínicas e de exames
                        de imagem e laboratoriais, a plataforma
                        calcula um escore para ser utilizado nas
                        decisões médicas a serem tomadas para cada paciente
                    </Text>
                </Box>
                <Box>
                    <Image src={graph2Img} size="big" alt="indicAI" />
                    <Text color="white" size="big">Avaliação do Prognostico</Text>
                    <Text size="medium">
                        Após o cálculo do indicador, o centro médico pode
                        utilizar a plataforma para realizar a gestão deste
                        paciente. Com a avaliação de prognóstico, o
                        IndicAI calcula a probabilidade de utilização de
                        recursos hospitalares (e.g. leito de UTI) e permite uma gestão da unidade mais eficaz e assertiva
                    </Text>
                </Box>
            </Flyer>

            <Flyer background="orange">
                <Title color="white">Aplicativo</Title>
                <Box>
                    <Image src={fingerSmallBlueImg} size="big" alt="indicAI" />
                    <Text color="white" size="big">Auto-triagem</Text>
                    <Text size="medium">
                        Através do aplicativo, o usuário poderá realizar
                        uma auto-avaliação (seguindo fluxogramas estabelecidos pela comunidade científica)
                        e dessobrecarregar as unidades de saúde
                    </Text>
                </Box>
                <Box>
                    <Image src={speakerImg} size="big" alt="indicAI" />
                    <Text color="white" size="big">Informações</Text>
                    <Text size="medium">
                        Além disso, o aplicativo também pode atuar como
                        um canal de disseminação de informações importante no combate à
                        pandemia. Contando com notícias, dicas para prevenção e cuidados e alertas para a população
                    </Text>
                </Box>
            </Flyer>

            <Flyer background="blue">
                <Title color="white">Diferenciais e Vantagens</Title>
                <Box>
                    <Image src={xImg} size="small" alt="indicAI" />
                    <Text color="white" size="big">Sem dificuldade na logistica</Text>
                    <Text size="small">
                        Não existe nenhuma mudança logística necessária,
                        basta que a unidade de saúde se cadastre e comece a utilizar a plataforma
                    </Text>
                    <Text color="white" size="big">Sem limitações de escalabilidade</Text>
                    <Text size="small">
                        A IndicAI não possui nenhuma barreira no quesito
                        escalabilidade, ela tem total capacidade de
                        atender de centenas de pessoas até centenas de milhões
                    </Text>
                </Box>
                <Box>
                    <Image src={circleImg} size="small" alt="indicAI" />
                    <Text color="white" size="big">Custo zero</Text>
                    <Text size="small">
                        Os centros de saúde e os usuários não
                        precisam pagar nada para utilizar o IndicAI. Os únicos gastos são
                        relacionados a exames que o paciente já teria que fazer (e.g. hemograma ou CT)
                    </Text>
                    <Text color="white" size="big">Solução completa e integrada</Text>
                    <Text size="small">
                        A IndicAI é uma solução integrada e que
                        auxilia tanto o usuário como as unidades de saúde. Dessa forma, as informações dentro da
                        plataforma podem ser utilizadas para prover o melhor atendimento médico possível para o paciente
                    </Text>
                </Box>
            </Flyer>


            <Flyer background="white">
                <Title color="black">Impacto na sociedade</Title>
                <Box>
                    <Image src={graph2Img} size="big" alt="indicAI" />
                    <Text color="black" size="big">Redução na mortalidade e expansão da pandemia</Text>
                    <Text size="medium" color="black">
                        Ao fornecer um indicador de diagnóstico do
                        coronavírus, a IndicAI pode ajudar os médicos a detectarem pacientes doentes previamente,
                        adotando as devidas medidas de tratamento e isolamento
                    </Text>
                </Box>
                <Box>
                    <Image src={agendaImg} size="big" alt="indicAI" />
                    <Text color="black" size="big">Agilizar testes e diagnósticos</Text>
                    <Text size="medium" color="black">
                        Por dar um resultado imediato, e também
                        fornecer uma forma de auto-triagem, a solução apresentada reduz o tempo de
                        espera para realizar os devidos encaminhamentos
                    </Text>
                </Box>
                <Box>
                    <Image src={stairsImg} size="big" alt="indicAI" />
                    <Text color="black" size="big">Democratização dos testes</Text>
                    <Text size="medium" color="black">
                        Dada a alta escalabilidade, a
                        plataforma consegue democratizar o acesso aos testes, levando o indicador
                        para populações que não tenha infraestrutura e possibilidade de ser testada.
                        Além de disseminar informações importantes sobre o tema
                    </Text>
                </Box>
            </Flyer>

            <Flyer background="blue">
                <Title color="white">Parceiros</Title>
                <Box>
                    <Image src={barretosImg} size="small" alt="indicAI" />
                    <Text size="big" color="white">Parceiro médico-hospitalar</Text>
                    <Text size="medium" color="white">
                        Unidade responsável pelo enfrentamento do Covid-19 na cidade de Barretos
                    </Text>
                </Box>
                <Box>
                    <Image src={eldoradoImg} size="small" alt="indicAI" />
                    <Text size="big" color="white">Parceiro de produto e desenvolvimento</Text>
                    <Text size="medium" color="white">
                        O Instituto Eldorado é um dos maiores centros de P,D&I do país, referência em
                        pesquisa, desenvolvimento e inovação nas áreas de Software, Hardware, sistemas e processos
                    </Text>
                </Box>
                <Box>
                    <Image src={uspImg} size="small" alt="indicAI" />
                    <Text size="big" color="white">Parceiro tecnológico-científico</Text>
                    <Text size="medium" color="white">
                        O ICMC é considerado um dos mais importantes centros de formação nas áreas de
                        matemática, matemática aplicada, computação e estatística
                    </Text>
                </Box>
            </Flyer>
        </div>
    );
}