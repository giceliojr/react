import './index.css';
import Primeiro from './componentes/basicos/Primeiro';
import ComParametro from './componentes/basicos/ComParamentro';

import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro titulo="Situação do aluno(a)" aluno="Gicélio" nota={9.3} />
        <ComParametro titulo="Situação do aluno(a)" aluno="Nataline" nota={9.9}/>
    </div>,
    document.getElementById('root')
);