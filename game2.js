let playerScore = 0;
let compScore = 0;
let drawScore = 0;
let playerChoice = 0;
let computerChoice = 0;
    
game();


/* The main function that calls on other functions to play the game
 */
function game(){ 
    for (i= 0; i < 5; i++) { 
        playerChoice = playerSelection();
        computerChoice = computerPlay();
        playRound(playerChoice, computerChoice);
    }
        console.log("Wins: " + playerScore);
        console.log("Loses: " + compScore);
        console.log("Ties: " + drawScore);
}

/* Function that gets the user's input via prompt. The coverts it to lowercase.
 * @Returns playerChoice
 */
function playerSelection() {
    let playerChoice = prompt("Rock paper scissors?");
    return playerChoice.toLowerCase();
}
    
/* Function that chooses a random element in a list of strings for the computer's choice.
 * @Returns computerChoice
 */
function computerPlay () {
    let select = ["rock", "paper", "scissors"];
    let computerChoice = select[Math.floor(Math.random()*select.length)];
    return computerChoice;
}

/* The logic of the game. Compares the player's choice with the computer's choice
 * Prints out the results of total win,s loses, and ties.
 * Takes two Strings a paramaters. 
 */
function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        console.log("Draw!")
        drawScore++;
    } else if (playerChoice == "rock" && computerChoice == "scissors"){
        console.log("You Win!")
        playerScore++;
    } else if (playerChoice == "paper" && computerChoice == "rock"){
        console.log("You Win!")
        playerScore++;
    } else if (playerChoice == "scissors" && computerChoice == "paper"){
        console.log("You Win!")
        playerScore++;
    } else {
        console.log("You Lose!")
        compScore++;
    }
}