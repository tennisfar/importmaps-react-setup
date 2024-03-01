// src/ButtonComponent.js
import React from 'react';

const Button = ({ children = 'Click me' }) => (
  <button style={{ padding: '10px 15px', cursor: 'pointer' }}>
    {children}
  </button>
);

export default Button;
