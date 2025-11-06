import './Row.css';
import Cell from './Cell';

function Row({ guess, solution, isSubmitted, isInvalid }) {
  const cells = [];
  
  for (let i = 0; i < 5; i++) {
    const letter = guess[i] || '';
    let state = '';
    
    if (isSubmitted && letter) {
      if (solution[i] === letter) {
        state = 'correct';
      } else if (solution.includes(letter)) {
        state = 'present';
      } else {
        state = 'absent';
      }
    }
    
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
