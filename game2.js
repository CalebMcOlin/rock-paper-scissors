game();

function game(){

    let playerScore = 0;
    let compScore = 0;
    let drawScore = 0;
    let playerChoice = 0;
    let computerChoice = 0;
    
    let i = 0; 
    for (i; i < 5; i++) { 
        playerChoice = playerSelection();
        computerChoice = computerPlay();
        
        playRound(playerChoice, computerChoice);
        
        function playerSelection() {
            let playerChoice = prompt("Rock paper scissors?");
            return playerChoice.toLowerCase();
        }
        

        function computerPlay () {
            let select = ["rock", "paper", "scissors"];
            let computerChoice = select[Math.floor(Math.random()*select.length)];
            return computerChoice;
        }
        
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
    }
        console.log("Wins: " + playerScore);
        console.log("Loses: " + compScore);
        console.log("Ties: " + drawScore);
}