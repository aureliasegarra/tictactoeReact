// == Import npm
import React from 'react';
import Board from 'src/components/Board';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <h1 className="title">Tic Tac Toe</h1>
    <h2 className="subtitle">The Game 🤖</h2>
    <Board />
  </div>
);

// == Export
export default App;
