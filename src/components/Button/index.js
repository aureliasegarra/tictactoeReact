// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Button = ({ onClick }) => (
  <button
    type="button"
    className="btn"
    onClick={() => onClick()}
  >
    Start
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// == Export
export default Button;
