import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Sequencer from './features/sequencer/Sequencer';

function App() {
  return (
    <div className="App">
      <article className="friendly-text">
      </article>
      <Sequencer />
    </div>
  );
}

export default App;
