import './Cell.css';

function Cell({ letter, state, isInvalid }) {
  const className = `cell ${state} ${letter ? 'filled' : ''} ${isInvalid ? 'invalid' : ''}`;
  
  return (
    <div className={className}>
      {letter}
    </div>
  );
}

export default Cell;
