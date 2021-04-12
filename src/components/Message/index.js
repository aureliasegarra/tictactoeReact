// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Composant
const Message = () => (
  <div className="winning-message">
    <p>You won 🥳</p>
    <button type="button" id="restartButton">Start again 💪</button>
  </div>
);

// == Export
export default Message;
