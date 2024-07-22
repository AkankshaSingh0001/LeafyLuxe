// Alert.js
import React from 'react';
import './Alert.css';

const Alert = ({ message, type, onClose }) => {
  return (
    <div className='alert'>
      <span>{message}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="close" onClick={onClose}>&times;</button>
    </div>
  );
};

export default Alert;
