import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux';
import counterReducers from './counterReducers';
import Field from './Field';

const reducers = combineReducers({
  counter: counterReducers
})

const elemento = document.getElementById('root');
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Field />
  </Provider>
, elemento);
