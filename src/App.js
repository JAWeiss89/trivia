import React, {useState} from 'react';
import TriviaGame from './TriviaGame';
import WelcomeScreen from './WelcomeScreen';
import './styles/App.css';

function App() {
  let [beginGame, setBeginGame] = useState(false);
  let [name, setName] = useState(null);

  return (
    <div className="App">
      {beginGame 
      ? <>
        <h2><span className="tandem">tandem</span>trivia</h2>
        <TriviaGame name={name}/>
        </>
      : <WelcomeScreen setName={setName} setBeginGame={setBeginGame}/>
      }
      <p className="credits">Designed & Developed by <a href="https://www.JorgeWeiss.com">Jorge Weiss</a></p>
    </div>
  );
}

export default App;
