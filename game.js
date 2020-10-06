let i = 0; 
let playerScore = 0;
let compScore = 0;
   
function game(){

    for (i; i < 5; i++) {
        function playerSelection() {
            let playerChoice = prompt("Rock paper scissors?");
            return playerChoice;
            }
        

            function computerPlay () {
                let select = ["rock", "paper", "scissors"];
                let computerChoice = select[Math.floor(Math.random()*select.length)];
                return computerChoice;
            }

        playRound();

        function playRound(playerChoice, computerChoice) {
            let playerScore = 0;
            let compScore = 0;

            playerChoice = playerSelection();
            computerChoice = computerPlay();

            if (playerChoice == computerChoice) {
                console.log("Draw!")
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
            console.log(playerScore);
            console.log(compScore);
            return;
            }
          
    }

}

game();






