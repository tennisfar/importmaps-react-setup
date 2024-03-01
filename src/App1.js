// src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './CardComponent.js';
import Button from './ButtonComponent.js';

function App1() {
  return (
    <div>
      <Card>
        <Button>Button in App 1</Button>
      </Card>
    </div>
  );
}

ReactDOM.render(<App1 />, document.getElementById('app1'));
