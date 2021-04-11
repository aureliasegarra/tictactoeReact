// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Score = ({ xScore = 0, oScore = 0 }) => (
  <div className="scores">
    <div className="score">
      <p className="score_player">X Score</p>
      <p className="points">{xScore}</p>
    </div>
    <div className="score">
      <p className="score_player">O Score</p>
      <p className="points">{oScore}</p>
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
