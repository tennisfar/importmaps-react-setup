// src/App2.js
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './CardComponent.js';
import Button from './ButtonComponent.js';

function App2() {
  return (
    <div>
      <Card>
        <Button>Button in App 2</Button>
      </Card>
    </div>
  );
}

ReactDOM.render(<App2 />, document.getElementById('app2'));
