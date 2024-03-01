// src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './CardComponent.js';
import Button from './ButtonComponent.js';
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Button, null, "Press Me")));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));