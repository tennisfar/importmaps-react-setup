// src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './CardComponent.js';
import Button from './ButtonComponent.js';
function App1() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Button, null, "Button in App 1")));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App1, null), document.getElementById('app1'));