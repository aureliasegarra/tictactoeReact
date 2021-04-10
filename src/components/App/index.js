// == Import npm
import React, { useState } from 'react';

// == Import
import './styles.scss';

import Cells from 'src/components/Cells';

// == Composant
const App = () => {
  const [cells, setCells] = useState(['', '', '', '', '', '', '', '', '']);

  const handleOnClick = () => {

  };

  return (
    <div className="app">
      <h1 className="title">Tic Tac Toe</h1>
      <h2 className="subtitle">The Game 🤖</h2>
      <Cells cells={cells} onClick={handleOnClick} />
    </div>
  );
};

// == Export
export default App;
