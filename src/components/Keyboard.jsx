import './Keyboard.css';

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']
];

function Keyboard({ onKeyPress, onDelete, onSubmit, letterStates, disabled }) {
  const handleClick = (key) => {
    if (disabled) return;
    
    if (key === 'ENTER') {
      onSubmit();
    } else if (key === '⌫') {
      onDelete();
    } else {
      onKeyPress(key);
    }
  };

  return (
    <div className="keyboard">
      {KEYBOARD_ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key) => {
            const state = letterStates[key] || '';
            const isSpecial = key === 'ENTER' || key === '⌫';
            
            return (
              <button
                key={key}
                className={`key ${state} ${isSpecial ? 'special' : ''}`}
                onClick={() => handleClick(key)}
                disabled={disabled}
              >
                {key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
