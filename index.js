import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import HelloWorld from './state-drills/HelloWorld';
// import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';

import './index.css';

console.clear();

ReactDOM.render(
  // <App />, 
  // <HelloWorld />,
  // <Bomb />,
  <RouletteGun bulletInChamber={8} />,
  document.querySelector('#root')
);
