// src/CardComponent.js
import React from 'react';

const Card = ({ children }) => (
  <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
    {children}
  </div>
);

export default Card;
