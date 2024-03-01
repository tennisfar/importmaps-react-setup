// src/ButtonComponent.js
import React from 'react';
const Button = ({
  children = 'Click me'
}) => /*#__PURE__*/React.createElement("button", {
  style: {
    padding: '10px 15px',
    cursor: 'pointer'
  }
}, children);
export default Button;