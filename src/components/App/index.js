// == Import npm
import React, { useState } from 'react';

// == Import
import './styles.scss';

import Cells from 'src/components/Cells';
import Button from 'src/components/Button';

import { checkWinner } from '../../selectors/winnerPlayer';

// == Composant
const App = () => {
  const [start, setStart] = useState(false);
  const [cells, setCells] = useState(['', '', '', '', '', '', '', '', '']);
  const [xTurn, setXTurn] = useState(true);
  const winner = checkWinner(cells);

  const startTheGame = () => {
    console.log('je commence une partie');
    setCells(Array(9).fill(null));
    setStart(true);
  };

  const handleOnClick = (i) => {
    const newCells = [...cells];
    // If the box is checked with a sign so we stop and we go to the other player
    if (newCells[i]) return;
    newCells[i] = xTurn ? 'X' : 'O';
    setCells(newCells);
    setXTurn(!xTurn);
  };

  return (
    <div className="app">
      <h1 className="title">Tic Tac Toe</h1>
      <h2 className="subtitle">The Game 🤖</h2>
      <Button onClick={startTheGame} />
      <Cells cells={cells} onClick={handleOnClick} />
    </div>
  );
};

// == Export
export default App;
