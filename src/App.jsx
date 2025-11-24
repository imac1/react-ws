import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import './App.css'
import React from 'react';
import Dice from './components/Dice.jsx';
import DiceRoller from './components/DiceRoller.jsx';
import DiceHistory from './components/DiceHistory.jsx';



function App() {
  
  const [rolls, setRolls] = useState([])

  const handleRoll = (value) => {
    console.log("Rolled number:", value);
    setRolls(prevRolls => [...prevRolls, value])
  }
  
  return (
    <>
      <p>Hello from the App!</p>
      <div>
        <Dice value={rolls[rolls.length-1] > 0 ? rolls[rolls.length-1] : null}/>
        <DiceRoller onRoll={handleRoll}/>
        <DiceHistory rolls={rolls} />
      </div>
    </>
  );
}

export default App
