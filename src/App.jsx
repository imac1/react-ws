import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import './App.css'
import React from 'react';
import Dice from './components/Dice.jsx';
import DiceRoller from './components/DiceRoller.jsx';



function App() {
  const [roll, setRoll] = useState(null);

  const handleRoll = (value) => {
    console.log("Rolled number:", value);
    setRoll(value);
  }
  
  return (
    <>
      <p>Hello from the App!</p>
      <div>
        <Dice value={roll}/>
        <DiceRoller onRoll={handleRoll}/>
      </div>
    </>
  );
}

export default App
