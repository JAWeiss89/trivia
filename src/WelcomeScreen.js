import React, { useState } from 'react';
import './styles/WelcomeScreen.css';

const WelcomeScreen = ({setName, setBeginGame}) => {
    const [nameField, setNameField] = useState("");
    const handleChange = (e) => {
        setNameField(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setName(nameField);
        setBeginGame(true);
    }
    return (
        
        <div className="WelcomeScreen">
            <h1><span className="tandem">tandem</span>trivia</h1>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="name" value={nameField} onChange={handleChange}></input>
                <button className={nameField ? "active":"none" }>start</button>
            </form>
        </div>
    )
}

export default WelcomeScreen;