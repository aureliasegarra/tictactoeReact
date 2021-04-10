// == Import npm
import React, { useState } from 'react';

// == Import
import './styles.scss';

import Cells from 'src/components/Cells';
import Button from 'src/components/Button';

// == Composant
const App = () => {
  const [start, setStart] = useState(false);
  const [cells, setCells] = useState(['', '', '', '', '', '', '', '', '']);
  const [xTurn, setXTurn] = useState(true);

  const startTheGame = () => {
    setCells(Array(9).fill(null));
    setStart(true);
  };

  const handleOnClick = (i) => {
    const newCells = [...cells];
    // si la case est cochée d'un signe alors on arrête et on passe à l'autre joueur
    if (newCells[i]) return;
    newCells[i] = xTurn ? 'X' : 'O';
    setCells(newCells);
    setXTurn(!xTurn);
  };

  return (
    <div className="app">
      <h1 className="title">Tic Tac Toe</h1>
      <h2 className="subtitle">The Game 🤖</h2>
      <Button />
      <Cells cells={cells} onClick={handleOnClick} />
    </div>
  );
};

// == Export
export default App;
