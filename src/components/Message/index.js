// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Message = ({ onClick }) => (
  <div className="winning-message">
    <p>You won 🥳</p>
    <button
      type="button"
      id="restartButton"
      onClick={() => onClick()}
    >Start again 💪
    </button>
  </div>
);

Message.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// == Export
export default Message;
