import React from "react";
import "./App.css";

import Primeiro from './componentes/basicos/Primeiro';
import ComParametro from './componentes/basicos/ComParamentro';
import Fragmento from './componentes/basicos/Fragmento';
import Aleatorio from "./componentes/basicos/Aleatorio";
import Card from "./componentes/layout/Card";

export default () =>

    <div className="App">
        <header className="Cabecalho">
            <h1>Fundamentos React</h1>
        </header>
        <div className="Cards">
            <Card titulo="#4 Desafio Aleatório" color="#080">
                <Aleatorio min={1} max={60} />
            </Card>
            <Card titulo="#3 Fragmento" color="#DAA520">
                <Fragmento />
            </Card>
            <Card titulo="#2 Com Parâmetro" color="#9400D3">
                <ComParametro titulo="Situação do aluno(a)" aluno="Gicélio" nota={9.3} />
            </Card>
            <Card titulo="#1 Primeiro Componente" color="#FF69B4">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>

