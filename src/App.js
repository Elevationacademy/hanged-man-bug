import './App.css';
import Letters from './components/Letters';
import Solution from './components/Solution';
import Score from './components/Score';
import EndGame from './components/EndGame';
import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super()
        this.state = {
            letterStatus: this.getAZLetters(),
            solution: "REACT",
            hint: "some kind of hint",
            score: 100
        }
    }

    getAZLetters() {
        let status = {}
        for (let i = 65; i < 91; i++) {
            status[String.fromCharCode(i)] = false
        }
        return status
    }

    updateLetter = (letter) => {
        let newState = {}

        newState.letterStatus = Object.assign({}, this.state.letterStatus)
        newState.letterStatus.letter = true

        const isLetterInSolution = this.state.solution.toUpperCase().includes(letter)
        let newScore = this.state.score
        newScore += isLetterInSolution ? 5 : -20
        newState.score = newScore

        this.setState(newState)
    }

    didUserGuessWord = () => {
        return this.state.solution.split("")
            .every(letter => this.state.letterStatus[letter])
    }

    isGameOver() {
        return this.state.score <= 0 || this.didUserGuessWord()
    }

    render() {
        return (
            <div className="App">
                <Score value={this.state.score}></Score>
                <Solution
                    status={this.state.letterStatus}
                    word={this.state.solution}
                    hint={this.state.hint}>
                </Solution>
                <Letters
                    status={this.state.letterStatus}
                    updateLetter={this.updateLetter}>
                </Letters>
                <EndGame
                    solution={this.state.solution}
                    didWin={this.didUserGuessWord}
                    isGameOver={this.isGameOver()}>
                </EndGame>
            </div>
        );
    }
}

export default App;
