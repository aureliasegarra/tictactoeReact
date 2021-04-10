// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Cell = ({ value, onClick }) => (
  <div className="cell" onClick={onClick}>
    {value}
  </div>
);

Cell.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

// == Export
export default Cell;
