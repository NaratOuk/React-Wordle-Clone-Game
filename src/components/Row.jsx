import './Row.css';
import Cell from './Cell';

function Row({ guess, solution, isSubmitted, isInvalid }) {
  const cells = [];
  
  // Calculate letter states correctly handling duplicates
  const letterStates = [];
  if (isSubmitted) {
    const solutionLetters = solution.split('');
    const guessLetters = guess.split('');
    
    // First pass: mark correct letters
    for (let i = 0; i < 5; i++) {
      if (guessLetters[i] === solutionLetters[i]) {
        letterStates[i] = 'correct';
        solutionLetters[i] = null; // Mark as used
      }
    }
    
    // Second pass: mark present letters
    for (let i = 0; i < 5; i++) {
      if (letterStates[i] !== 'correct') {
        const letter = guessLetters[i];
        const index = solutionLetters.indexOf(letter);
        if (index !== -1) {
          letterStates[i] = 'present';
          solutionLetters[index] = null; // Mark as used
        } else {
          letterStates[i] = 'absent';
        }
      }
    }
  }
  
  for (let i = 0; i < 5; i++) {
    const letter = guess[i] || '';
    const state = isSubmitted && letter ? letterStates[i] : '';
    
    cells.push(
      <Cell
        key={i}
        letter={letter}
        state={state}
        isInvalid={isInvalid}
      />
    );
  }
  
  return <div className="row">{cells}</div>;
}

export default Row;
