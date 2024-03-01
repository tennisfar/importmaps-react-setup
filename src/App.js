// src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './CardComponent.js';
import Button from './ButtonComponent.js';

function App() {
  return (
    <div>
      <Card>
        <Button>Press Me</Button>
      </Card>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
