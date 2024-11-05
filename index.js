// Define the minimum and maximum numbers for the guessing range
const minNum = 1;
const maxNum = 100;

// Line 8 generates a random number for the answer const within the specified range
// Math.random() generates a number between 0 and 1, which we scale from the maxNum to the minNum range
// Math.floor rounds down to ensure it's an integer within the range and not a decimal
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// Initialize attempts to track guessing attempts and the user's guesses, and the running controls the loop state
let attempts = 0;
let guess;
let running = true;

//This while loop will continues until the user guesses correctly
while (running) {
    // Prompt the user on the webpage to guess a number between minNum and maxNum
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    
    // Convert the user input into a number
    guess = Number(guess);

    // Check if the input is not a number
    if (isNaN(guess)) {
        window.alert('Please enter a valid number'); // Alert if input is not a valid number
    }
    // Check if the input is out of the specified range either too low or too high
    else if (guess < minNum || guess > maxNum) {
        window.alert(`Please enter a number between ${minNum} and ${maxNum}`); // Alert if input is out of range
    } 
    else {
        // Increment attempts each time a valid guess is made. This is helpful for the user to know how many attempts they made
        attempts++;
        
        // Check if the guess is too low
        if (guess < answer) {
            window.alert('Too low! Try again.');
        }
        // Check if the guess is too high
        else if (guess > answer) {
            window.alert('Too high! Try again.');
        }
        // If the guess is correct
        else {
            // Congratulate the user and display the number of attempts and the correct answer
            window.alert(`Congratulations! The answer was ${answer}. You guessed the number in ${attempts} attempts.`);
            
            // End the loop since the correct answer was found
            running = false;
        }
    }
}

    
