require('../css/style.css');

let a = require('./a');

import modB from './b';

let oHw = document.getElementById('hw');
oHw.innerHTML = '<h1>Hello Webpack</h1>'+a+(modB.a+modB.b);

import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock.js';

ReactDOM.render(
  <Clock/>,
  document.getElementById('app')
);
