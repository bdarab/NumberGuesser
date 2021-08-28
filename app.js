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
    // Disable Input
    guessInput.disabled = true
    // Set winning color
    guessInput.style.borderColor = 'green'
    // show winning message
    setMessage(`Congrats, you gussed the winning number ${winningNum}`, 'green')
  } else {
    // set losing color
    guessInput.style.borderColor = 'red'
    // show losing message
    setMessage(`Sorry, you guessed wrong, try again`, 'red')
    // Reset input for another try
    guessInput.value = ''
  }
})

// setMessage function
function setMessage (msg, color) {
  message.style.color = color
  message.textContent = msg
}