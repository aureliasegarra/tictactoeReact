// == Import npm
import React, { useState, useEffect } from 'react';

// == Import
import './styles.scss';

import Cells from 'src/components/Cells';
import Button from 'src/components/Button';
import Score from 'src/components/Score';
import Message from 'src/components/Message';

import { checkWinner } from '../../selectors/winnerPlayer';

// == Composant
const App = () => {
  const [start, setStart] = useState(false);
  const [cells, setCells] = useState(['', '', '', '', '', '', '', '', '']);
  const [xTurn, setXTurn] = useState(true);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const winner = checkWinner(cells);

  const startTheGame = () => {
    setCells(Array(9).fill(null));
    setStart(true);
  };

  const handleOnClick = (i) => {
    const newCells = [...cells];
    if (newCells[i]) return;
    newCells[i] = xTurn ? 'X' : 'O';
    setCells(newCells);
    setXTurn(!xTurn);
  };

  const winPlayer = () => {
    if (winner) {
      if (winner === 'X') {
        const newXScore = xScore + 1;
        setXScore(newXScore);
        setStart(false);
      }
      else if (winner === 'O') {
        const newOScore = oScore + 1;
        setOScore(newOScore);
        setStart(false);
      }
    }
  };

  useEffect(() => {
    winPlayer();
  }, [cells]);

  return (
    <div className="app">
      <h1 className="title">Tic Tac Toe</h1>
      <h2 className="subtitle">The Game 🤖</h2>
      {!start && (
        <Button onClick={startTheGame} />
      )}
      <Score xScore={xScore} oScore={oScore} />
      <Cells cells={cells} onClick={handleOnClick} />
      {winner && (
        <Message />
      )}
    </div>
  );
};

// == Export
export default App;
