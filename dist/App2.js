// src/App2.js
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './CardComponent.js';
import Button from './ButtonComponent.js';
function App2() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Button, null, "Button in App 2")));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App2, null), document.getElementById('app2'));