// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Score = ({ xScore = 0, oScore = 0 }) => (
  <div className="scores">
    <div className="score">
      <p>X Score</p>
      <p>Point(s)</p>
    </div>
    <div className="score">
      <p>O Score</p>
      <p>Point(s)</p>
    </div>
  </div>
);

Score.propTypes = {
  xScore: PropTypes.number,
  oScore: PropTypes.number,
};

Score.defaultProps = {
  xScore: 0,
  oScore: 0,
};

// == Export
export default Score;
