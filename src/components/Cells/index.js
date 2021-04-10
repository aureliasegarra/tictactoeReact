// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import Cell from './cell';

// == Composant
const Cells = ({ cells, onClick }) => (
  <div className="board">
    {cells.map((cell, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Cell key={i} value={cell} onClick={() => onClick(i)} />
    ))}
  </div>
);

Cells.propTypes = {
  cells: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

// == Export
export default Cells;
