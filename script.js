// Define constants for the game
const lowerBound = 1;
const upperBound = 100;
let numberToGuess;
let numberOfTries = 0;
let hasGuessedCorrectly = false;

// Get HTML elements
const guessInput = document.getElementById("guess");
const guessButton = document.getElementById("guess-btn");
const messageElement = document.querySelector(".message");

// Function to generate a random number within the specified range
function generateRandomNumber() {
    return Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
}

// Function to provide feedback based on the user's guess
function provideFeedback(userGuess) {
    numberOfTries++;
    if (userGuess < numberToGuess) {
        messageElement.textContent = "Too low! Try again.";
    } else if (userGuess > numberToGuess) {
        messageElement.textContent = "Too high! Try again.";
    } else {
        messageElement.textContent = `Congratulations! You've guessed the number ${numberToGuess} in ${numberOfTries} tries.`;
        hasGuessedCorrectly = true;
        guessInput.disabled = true;
        guessButton.disabled = true;
    }
}

// Event listener for the guess button
guessButton.addEventListener("click", function() {
    if (!hasGuessedCorrectly) {
        const userGuess = parseInt(guessInput.value);

        if (userGuess < lowerBound || userGuess > upperBound || isNaN(userGuess)) {
            messageElement.textContent = "Please enter a valid number within the range.";
        } else {
            provideFeedback(userGuess);
        }
    }
});

// Initialize the game
document.addEventListener("DOMContentLoaded", function() {
    numberToGuess = generateRandomNumber();
    console.log(numberToGuess); // For debugging purposes
});
