# React Wordle Clone Game

A fully functional Wordle clone game built with React and Vite, following a YouTube tutorial practice project.

![Wordle Clone](https://github.com/user-attachments/assets/66dd39c9-bf38-49c6-aede-4b298158d8b0)

## Features

- 🎮 **Classic Wordle Gameplay**: Guess the 5-letter word in 6 attempts
- 🎨 **Color-Coded Feedback**: 
  - 🟩 Green: Letter is in the correct position
  - 🟨 Yellow: Letter is in the word but wrong position
  - ⬜ Gray: Letter is not in the word
- ⌨️ **Interactive Keyboard**: Both on-screen and physical keyboard support
- ✅ **Word Validation**: Validates guesses against a dictionary of valid words
- 🎯 **Game States**: Win/lose detection with play again functionality
- 📱 **Responsive Design**: Clean, modern interface matching Wordle aesthetics

## Screenshots

### Gameplay Example
![Gameplay with color feedback](https://github.com/user-attachments/assets/134da2ec-996b-4440-b0ba-bdcb196e72e6)

The game shows color-coded feedback after each guess, helping players narrow down the correct word.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/NaratOuk/React-Wordle-Clone-Game.git
cd React-Wordle-Clone-Game
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## How to Play

1. Enter a 5-letter word using your keyboard or the on-screen keyboard
2. Press ENTER to submit your guess
3. After each guess, the color of the tiles will change:
   - **Green**: The letter is in the word and in the correct position
   - **Yellow**: The letter is in the word but in the wrong position
   - **Gray**: The letter is not in the word
4. You have 6 attempts to guess the correct word
5. Click "Play Again" to start a new game with a different word

## Technologies Used

- **React 19**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **CSS3**: Custom styling with animations
- **JavaScript ES6+**: Modern JavaScript features

## Project Structure

```
React-Wordle-Clone-Game/
├── src/
│   ├── components/
│   │   ├── Board.jsx       # Game board container
│   │   ├── Board.css
│   │   ├── Row.jsx         # Single row of cells
│   │   ├── Row.css
│   │   ├── Cell.jsx        # Individual letter cell
│   │   ├── Cell.css
│   │   ├── Keyboard.jsx    # On-screen keyboard
│   │   └── Keyboard.css
│   ├── App.jsx             # Main game logic
│   ├── App.css
│   ├── main.jsx            # React entry point
│   ├── index.css           # Global styles
│   └── words.js            # Word dictionary
├── index.html
├── vite.config.js
└── package.json
```

## License

ISC

## Acknowledgments

This project was created as a practice exercise following a YouTube tutorial to learn React development and game logic implementation.