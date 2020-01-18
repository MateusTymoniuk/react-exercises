import React from 'react';
import ReactDOM from 'react-dom';
import { CompA, CompB } from './components/DoisComponentes';

const elemento = document.getElementById('root');
ReactDOM.render(
  <div>
    <CompA valor="Eu sou A" />
    <CompB valor="E eu B" />
  </div>
  , elemento);
