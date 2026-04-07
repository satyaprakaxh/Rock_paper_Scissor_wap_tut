import React from 'react';
import { useState } from 'react'

function App() {
  const [userMove, setUserMove] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const choices = ['rock', 'paper', 'scissors'];
  const emojis = { rock: '🪨', paper: '📄', scissors: '✂️' };

  const playGame = (choice) => {
    const compChoice = choices[Math.floor(Math.random() * 3)];
    setUserMove(choice);
    setComputerChoice(compChoice);
    if (choice === compChoice) {
      setResult('It\'s a tie!');
    } else if (
      (choice === 'rock' && compChoice === 'scissors') ||
      (choice === 'paper' && compChoice === 'rock') ||
      (choice === 'scissors' && compChoice === 'paper')
    ) {
      setResult('You win!');
      setUserScore(userScore + 1);
    } else {
      setResult('Computer wins!');
      setComputerScore(computerScore + 1);
    }
  };

  const resetScores = () => {
    setUserScore(0);
    setComputerScore(0);
    setUserMove('');
    setComputerChoice('');
    setResult('');
  };

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <div>
        <p>Your Score: {userScore}</p>
        <p>Computer Score: {computerScore}</p>
      </div>
      <div>
        <button onClick={() => playGame('rock')}>🪨</button>
        <button onClick={() => playGame('paper')}>📄</button>
        <button onClick={() => playGame('scissors')}>✂️ </button>
      </div>
      <button onClick={resetScores}>Reset Scores</button>
      {userMove && (
        <div>
          <p>You chose: {emojis[userMove]}</p>
          <p>Computer chose: {emojis[computerChoice]}</p>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default App
