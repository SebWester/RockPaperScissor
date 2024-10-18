// Asigning variables
const showPlayerPoints = document.getElementById("playerPoints");
const showComputerPoints = document.getElementById("computerPoints");
const showWinner = document.getElementById("showWinner");

let totalGames = 5;
let gameRound = 0;
let playerPoints = 0;
let computerPoints = 0;

// Computer choice
function compChoice() {
  let randomNum = Math.floor(Math.random() * 3);

  switch (randomNum) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
  }
}

// Player choice
const playerRock = document.getElementById("rock");
const playerPaper = document.getElementById("paper");
const playerScissor = document.getElementById("scissor");
let playerMove;

function playerChoice() {
  playerRock.addEventListener("click", () => {
    playerMove = "rock";
    console.log(playerMove, gameRound);
    gameRound++;
    playRound();
  });

  playerPaper.addEventListener("click", () => {
    playerMove = "paper";
    console.log(playerMove, gameRound);
    gameRound++;
    playRound();
  });

  playerScissor.addEventListener("click", () => {
    playerMove = "scissor";
    console.log(playerMove, gameRound);
    gameRound++;
    playRound();
  });
}

// Play a round and check winner
function playRound() {
  const computerMove = compChoice();
  console.log(`Computer chose: ${computerMove}`);

  checkWinner(playerMove, computerMove);

  totalGames--;
  if (totalGames === 0) {
    console.log("Game over!");
    showWinner.style.display = "block";

    if (playerPoints === computerPoints) {
      showWinner.innerText = "Tied!";
    } else if (playerPoints > computerPoints) {
      showWinner.innerText = "You win!";
    } else {
      showWinner.innerText = "Computer wins!";
    }
  }
}

function checkWinner(player, computer) {
  if (player === computer) {
    console.log("It's a tie");
  } else if (
    (player === "rock" && computer === "scissor") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissor" && computer === "paper")
  ) {
    console.log("Player wins!");
    playerPoints++;
    showPlayerPoints.innerText = `Points: ${playerPoints}`;
  } else {
    console.log("Computer wins!");
    computerPoints++;
    showComputerPoints.innerText = `Points: ${computerPoints}`;
  }
}

showPlayerPoints.innerText = `Points: ${playerPoints}`;
showComputerPoints.innerText = `Points: ${computerPoints}`;
playerChoice();
