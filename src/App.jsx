import { useState, useEffect, useCallback } from 'react';
import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { getRandomWord, isValidWord } from './words';

const WORD_LENGTH = 5;
const MAX_ATTEMPTS = 6;

function App() {
  const [solution, setSolution] = useState('');
  const [guesses, setGuesses] = useState(Array(MAX_ATTEMPTS).fill(''));
  const [currentGuess, setCurrentGuess] = useState('');
  const [currentAttempt, setCurrentAttempt] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [invalidWord, setInvalidWord] = useState(false);

  useEffect(() => {
    setSolution(getRandomWord());
  }, []);

  const handleKeyPress = useCallback((key) => {
    if (currentGuess.length < WORD_LENGTH) {
      setCurrentGuess(prev => prev + key);
      setInvalidWord(false);
    }
  }, [currentGuess.length]);

  const handleDelete = useCallback(() => {
    setCurrentGuess(prev => prev.slice(0, -1));
    setInvalidWord(false);
  }, []);

  const handleSubmit = useCallback(() => {
    if (currentGuess.length !== WORD_LENGTH) return;

    if (!isValidWord(currentGuess)) {
      setInvalidWord(true);
      setTimeout(() => setInvalidWord(false), 500);
      return;
    }

    const newGuesses = [...guesses];
    newGuesses[currentAttempt] = currentGuess;
    setGuesses(newGuesses);

    if (currentGuess === solution) {
      setGameWon(true);
      setGameOver(true);
      return;
    }

    if (currentAttempt === MAX_ATTEMPTS - 1) {
      setGameOver(true);
      return;
    }

    setCurrentAttempt(prev => prev + 1);
    setCurrentGuess('');
  }, [currentGuess, currentAttempt, guesses, solution]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameOver) return;

      if (e.key === 'Enter') {
        handleSubmit();
      } else if (e.key === 'Backspace') {
        handleDelete();
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        handleKeyPress(e.key.toUpperCase());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameOver, handleSubmit, handleDelete, handleKeyPress]);

  const resetGame = () => {
    setSolution(getRandomWord());
    setGuesses(Array(MAX_ATTEMPTS).fill(''));
    setCurrentGuess('');
    setCurrentAttempt(0);
    setGameOver(false);
    setGameWon(false);
    setInvalidWord(false);
  };

  const getLetterStates = useCallback(() => {
    const states = {};
    
    guesses.forEach((guess, index) => {
      if (guess && index < currentAttempt) {
        const solutionLetters = solution.split('');
        const guessLetters = guess.split('');
        
        // First pass: mark correct letters
        const letterStates = [];
        for (let i = 0; i < guessLetters.length; i++) {
          if (guessLetters[i] === solutionLetters[i]) {
            letterStates[i] = 'correct';
            solutionLetters[i] = null;
          }
        }
        
        // Second pass: mark present letters
        for (let i = 0; i < guessLetters.length; i++) {
          if (letterStates[i] !== 'correct') {
            const letter = guessLetters[i];
            const solutionIndex = solutionLetters.indexOf(letter);
            if (solutionIndex !== -1) {
              letterStates[i] = 'present';
              solutionLetters[solutionIndex] = null;
            } else {
              letterStates[i] = 'absent';
            }
          }
        }
        
        // Update keyboard states (prioritize: correct > present > absent)
        for (let i = 0; i < guessLetters.length; i++) {
          const letter = guessLetters[i];
          const currentState = states[letter];
          const newState = letterStates[i];
          
          if (!currentState || 
              (currentState === 'absent' && newState !== 'absent') ||
              (currentState === 'present' && newState === 'correct')) {
            states[letter] = newState;
          }
        }
      }
    });

    return states;
  }, [guesses, currentAttempt, solution]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wordle Clone</h1>
      </header>
      
      <main className="App-main">
        <Board
          guesses={guesses}
          currentGuess={currentGuess}
          currentAttempt={currentAttempt}
          solution={solution}
          invalidWord={invalidWord}
        />
        
        {gameOver && (
          <div className="game-over">
            <div className="game-over-message">
              {gameWon ? (
                <p className="win-message">🎉 Congratulations! You won!</p>
              ) : (
                <p className="lose-message">
                  Game Over! The word was <strong>{solution}</strong>
                </p>
              )}
              <button onClick={resetGame} className="reset-button">
                Play Again
              </button>
            </div>
          </div>
        )}

        <Keyboard
          onKeyPress={handleKeyPress}
          onDelete={handleDelete}
          onSubmit={handleSubmit}
          letterStates={getLetterStates()}
          disabled={gameOver}
        />
      </main>
    </div>
  );
}

export default App;
