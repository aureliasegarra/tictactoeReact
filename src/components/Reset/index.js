// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Reset = ({ onClick }) => (
  <button
    type="button"
    className="btn"
    onClick={() => onClick()}
  >
    Reset
  </button>
);

Reset.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// == Export
export default Reset;
