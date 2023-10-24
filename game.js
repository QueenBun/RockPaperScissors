
// Function to generate random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
 
let win = 0;
let lose = 0;
let tie = 0;
let round =0; 
let i = 0;
// Function call
const computerMove = randomNumber(1, 3);
console.log(computerMove);

alert("Let's play 5 rounds of rock, paper, scissors");

function playRound() {
    alert("Round " + (round+1) + " of 5");
    let playerInput = prompt("Enter rock, paper, or scissors:");

    if (playerInput.toLowerCase() == "rock" && computerMove ==1) {
        alert("The computer also chooses rock.  It's a tie!");
        console.log("The computer also chooses rock.  It's a tie!");
        tie++;
        round++;
    } else if (playerInput.toLowerCase() == "rock" && computerMove ==2) {
        alert("The computer chooses scissors.  You win!");
        console.log("The computer chooses scissors.  You win!");
        win++;
        round++;
    } else if (playerInput.toLowerCase() =="rock" && computerMove ==3){
        alert("The computer chooses paper.  You lose!");
        console.log("The computer chooses paper.  You lose!");
        lose++;
        round++;
    }

    if (playerInput.toLowerCase() == "scissors" && computerMove ==1) {
        alert("The computer chooses rock.  You lose!");
        console.log("The computer chooses rock.  You lose!");
        lose++;
        round++;
    } else if (playerInput.toLowerCase() == "scissors" && computerMove ==2) {
        alert("The computer also chooses scissors.  It's a tie!");
        console.log("The computer also chooses scissors.  It's a tie!");
        tie++;
        round++;
    } else if (playerInput.toLowerCase() =="scissors" && computerMove ==3){
        alert("The computer chooses paper.  You win!");
        console.log("The computer chooses paper.  You win!");
        win++;
        round++;
    }


    if (playerInput.toLowerCase() == "paper" && computerMove ==1) {
        alert("The computer chooses rock.  You win!");
        console.log("The computer chooses rock.  You win!");
        win++;
        round++;
    } else if (playerInput.toLowerCase() == "paper" && computerMove ==2) {
        alert("The computer chooses scissors.  You lose!");
        console.log("The computer chooses scissors.  You lose!");
        lose++;
        round++;
    } else if (playerInput.toLowerCase() =="paper" && computerMove ==3){
        alert("The computer also chooses paper.  It's a tie!");
        console.log("The computer also chooses paper.  It's a tie!");
        tie++;
        round++;
    }

    if (playerInput.toLowerCase() !== "paper" && playerInput.toLowerCase() !== "rock" && playerInput.toLowerCase() !==  "scissors") {
        alert("Invalid input. Try again.");
        console.log("Invalid input. Game ends.");
        playRound();
    }

}

while(i<5) {
    playRound();
    i++;
}


alert("Wins: "+ win + " Loses: "+ lose + " Ties: " + tie);
//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));