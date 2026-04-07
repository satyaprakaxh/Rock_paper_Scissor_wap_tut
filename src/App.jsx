import React from 'react';
import { useState } from 'react'

function App() {
  const [userMove, setUserMove] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [history, setHistory] = useState([]);
  const [streak, setStreak] = useState(0);

  const choices = ['rock', 'paper', 'scissors'];
  const emojis = { rock: '🪨', paper: '📄', scissors: '✂️' };

  const playGame = (choice) => {
    const compChoice = choices[Math.floor(Math.random() * 3)];
    setUserMove(choice);
    setComputerChoice(compChoice);
    let gameResult;
    if (choice === compChoice) {
      gameResult = 'It\'s a tie!';
    } else if (
      (choice === 'rock' && compChoice === 'scissors') ||
      (choice === 'paper' && compChoice === 'rock') ||
      (choice === 'scissors' && compChoice === 'paper')
    ) {
      gameResult = 'You win!';
      setUserScore(userScore + 1);
    } else {
      gameResult = 'Computer wins!';
      setComputerScore(computerScore + 1);
    }
    setResult(gameResult);
    setRounds(rounds + 1);
    setHistory([...history, {user: choice, computer: compChoice, result: gameResult}]);
    if (gameResult === 'You win!') {
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
  };

  const resetScores = () => {
    setUserScore(0);
    setComputerScore(0);
    setUserMove('');
    setComputerChoice('');
    setResult('');
    setRounds(0);
    setHistory([]);
    setStreak(0);
  };

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <div>
        <p>Your Score: {userScore}</p>
        <p>Computer Score: {computerScore}</p>
        <p>Rounds Played: {rounds}</p>
        <p>Current Streak: {streak}</p>
      </div>
      <div>
        <button onClick={() => playGame('rock')}>🪨</button>
        <button onClick={() => playGame('paper')}>📄</button>
        <button onClick={() => playGame('scissors')}>✂️ </button>
      </div>
      <button onClick={resetScores}>Reset Game</button>
      {userMove && (
        <div>
          <p>You chose: {emojis[userMove]}</p>
          <p>Computer chose: {emojis[computerChoice]}</p>
          <p>{result}</p>
        </div>
      )}
      {history.length > 0 && (
        <div>
          <h2>Move History</h2>
          <ul>
            {history.map((h, i) => (
              <li key={i}>Round {i+1}: You {emojis[h.user]} vs Computer {emojis[h.computer]} - {h.result}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App
