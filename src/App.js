import React, {useState} from 'react';
import TriviaGame from './TriviaGame';
import WelcomeScreen from './WelcomeScreen';
import './App.css';

function App() {
  let [beginGame, setBeginGame] = useState(false);
  let [name, setName] = useState(null);

  return (
    <div className="App">
      {beginGame 
      ? <TriviaGame name={name}/>
      : <WelcomeScreen setName={setName} setBeginGame={setBeginGame}/>
      }
    </div>
  );
}

export default App;
