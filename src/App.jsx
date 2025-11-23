import { v4 as uuid } from 'uuid';
import './App.css'
import React from 'react';
import Dice from './components/Dice.jsx';


function App() {
  const number = Math.floor(Math.random(1) * 6);
  return (
    <>
      <p>Hello from the App!</p>
      <div>
        <Dice value={number}/>
      </div>
    </>
  );
}

export default App
