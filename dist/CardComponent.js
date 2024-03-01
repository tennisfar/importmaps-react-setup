// src/CardComponent.js
import React from 'react';
const Card = ({
  children
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '5px'
  }
}, children);
export default Card;