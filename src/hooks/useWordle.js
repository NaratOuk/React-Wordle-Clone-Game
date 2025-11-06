import { useState } from 'react';

const useWordle = () => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) // each guess is an array
    const [history, setHistory] = useState([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)


    // format a guess into an array of letter objects
    // e.g [{key: 'a', color: 'yellow'}]
    const formatGuess = () => {

    }

    //add a new guess to the guessing state
    //update the isCoorect state if the guess is correct 
    // add one to the turn state
    const addNewGuess = () => {
        
    }

    //handle a keyup event and track current guess
    //if user presses enter, add the new guess
    const handleKeyup = () => {

    }
    // we dont it to call those 2(formatGuess, addNewGuess) functions outside of the hook
    // we only going to call it inside the handleKeyup function
    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
 }

export default useWordle;