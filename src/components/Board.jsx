import './Board.css';
import Row from './Row';

function Board({ guesses, currentGuess, currentAttempt, solution, invalidWord }) {
  return (
    <div className="board">
      {guesses.map((guess, index) => (
        <Row
          key={index}
          guess={index === currentAttempt ? currentGuess : guess}
          solution={solution}
          isSubmitted={index < currentAttempt}
          isInvalid={index === currentAttempt && invalidWord}
        />
      ))}
    </div>
  );
}

export default Board;
