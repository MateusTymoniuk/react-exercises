import React from 'react';
import ReactDOM from 'react-dom';
import Familia from './components/Familia';
import Membro from './components/Membro';

const elemento = document.getElementById('root');
ReactDOM.render(
  <div>
    <Familia sobrenome="Pereira">
      <Membro nome="André" />
      <Membro nome="Juliana" />
    </Familia>
  </div>
  , elemento);
