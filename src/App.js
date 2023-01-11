import React, { useState } from 'react';
import './App.css';
import Letters from './components/Letters';
import Solution from './components/Solution';
import Score from './components/Score';
import EndGame from './components/EndGame';

function App() {
    const solution = "REACT";
    const hint = "some kind of hint";
    let [letterStatus, setLetterStatus] = useState(getAZLetters());
    let [score, setScore] = useState(100);

    function getAZLetters() {
        let status = {}
        for (let i = 65; i < 91; i++) {
            status[String.fromCharCode(i)] = false
        }
        return status
    }

    const updateLetter = (letter) => {
        let newState = {}

        newState = Object.assign({}, letterStatus)
        newState[letter] = true

        const isLetterInSolution = solution.toUpperCase().includes(letter)
        score += isLetterInSolution ? 5 : -20
        setLetterStatus(newState)
    }

    const didUserGuessWord = () => {
        return solution.split("")
            .every(letter => letterStatus[letter])
    }

    const isGameOver = () => {
        return score <= 0 || didUserGuessWord()
    }

    return (
        <div className="App">
            <Score value={score}></Score>
            <Solution
                status={letterStatus}
                word={solution}
                hint={hint}>
            </Solution>
            <Letters
                status={letterStatus}
                updateLetter={updateLetter}>
            </Letters>
            <EndGame
                solution={solution}
                didWin={didUserGuessWord}
                isGameOver={isGameOver()}>
            </EndGame>
        </div>
    );
}

export default App;
