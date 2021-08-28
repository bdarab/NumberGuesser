/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable use-isnan */
/* eslint-disable radix */
/* eslint-disable prefer-const */

/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// CREATING VARIABLES

// Game values
let min = 1
let max = 10
let winningNum = 2
let guessesLeft = 3
    
// UI elements
const game = document.querySelector('#game')
const minNum = document.querySelector('.min-num')
const maxNum = document.querySelector('.max-num')
const guessBtn = document.querySelector('#guess-btn')
const guessInput = document.querySelector('#guess-input')
const message = document.querySelector('.message')

// Assign UI min & max
minNum.textContent = min
maxNum.textContent = max

// Listen for guess
guessBtn.addEventListener('click', () => {
  let guess = parseInt(guessInput.value)

  // validate
  if (isNaN(guess) || guess < min || guess > max) {
    // eslint-disable-next-line no-use-before-define
    setMessage(`Please enter a number between ${min} and ${max}`, 'red')
  }

  // Check if it is a winning number
  if (guess === winningNum) {
    // Game Over - won
    gameOver(true, `Congrats, you gussed the winning number ${winningNum}`)
  } else {
    // Minus one try
    guessesLeft -= 1
    if (guessesLeft === 0) {
     // Game Over - lost
      gameOver(false, `GAME OVER, you lost! winning number was ${winningNum}`, 'red')
    } else {
      // Game continues minus 1
      // set losing color
      guessInput.style.borderColor = 'red'
      // show losing message
      setMessage(`Sorry, you guessed wrong, ${guessesLeft} gusses left!`, 'red')
      // Reset input for another try
      guessInput.value = ''
    }
  }
})

// Game Over Function

function gameOver (won, msg) {
  // setting color
  let color
  // eslint-disable-next-line no-unused-expressions
  won === true ? color = 'green' : color = 'red'

  // Disable Input
  guessInput.disabled = true
  // set losing color
  guessInput.style.borderColor = color
  // set message color
  message.style.color = color
  // show losing message
  setMessage(msg)
}

// setMessage function
function setMessage (msg, color) {
  message.style.color = color
  message.textContent = msg
}