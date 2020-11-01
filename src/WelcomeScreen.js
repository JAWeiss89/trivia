import React, { useState } from 'react';

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
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="name" value={nameField} onChange={handleChange}></input>
                <button>start</button>
            </form>
        </div>
    )
}

export default WelcomeScreen;