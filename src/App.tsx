import React, {useState} from 'react';
import './App.css';
import {Card} from './Card';
import Button from './Button';


function generate(): (number | null)[][] {
  const generateArray: (number | null)[][] = Array.from(new Array(3), () => Array.from(new Array(9), () => null));
  const numbersUsed: number[] = [];

  for (let i = 0; i < 15; i += 1) {
    let i = Math.round(Math.random() * 2);
    let j = Math.round(Math.random() * 8);

    while (generateArray[i][j]) {
      i = Math.round(Math.random() * 2);
      j = Math.round(Math.random() * 8);
    }

    let min = j * 10 + 1;
    let max = j * 10 + 9;

    let numGenerated = min + Math.round(Math.random() * (max - min));
    while (numbersUsed.includes(numGenerated)) {
      numGenerated = min + Math.round(Math.random() * (max - min));
    }

    numbersUsed.push(numGenerated);
    generateArray[i][j] = numGenerated;
  }

  return generateArray;
}

function App() {
  const [generatedArray, setGenerated] = useState(generate());

  const update = () => {
    setGenerated(generate());
  }

  return (
    <div className="App">
      <Card items={generatedArray}/>
      <Button onClick={update}/>
    </div>
  );
}

export default App;
