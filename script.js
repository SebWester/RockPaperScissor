// Assigning variables
const showPlayerPoints = document.getElementById("playerPoints");
const showComputerPoints = document.getElementById("computerPoints");
const showWinner = document.getElementById("showWinner");
const logLeft = document.getElementById("logLeft");
const logRight = document.getElementById("logRight");
const resetBtn = document.getElementById("reset");

let totalGames = 5;
let gameRound = 0;
let playerPoints = 0;
let computerPoints = 0;

// Computer choice
function compChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  let newLogR = document.createElement("p");

  switch (randomNum) {
    case 0:
      newLogR.innerText = "Rock";
      logRight.appendChild(newLogR);
      return "rock";
    case 1:
      newLogR.innerText = "Paper";
      logRight.appendChild(newLogR);
      return "paper";
    case 2:
      newLogR.innerText = "Scissor";
      logRight.appendChild(newLogR);
      return "scissor";
  }
}

// Player choice
const playerRock = document.getElementById("rock");
const playerPaper = document.getElementById("paper");
const playerScissor = document.getElementById("scissor");

let playerMove;

function handleRockClick() {
  playerMove = "rock";
  let newLogL = document.createElement("p");
  newLogL.innerText = "Rock";
  logLeft.appendChild(newLogL);
  console.log(playerMove, gameRound);
  gameRound++;
  playRound();
}

function handlePaperClick() {
  playerMove = "paper";
  let newLogL = document.createElement("p");
  newLogL.innerText = "Paper";
  logLeft.appendChild(newLogL);
  console.log(playerMove, gameRound);
  gameRound++;
  playRound();
}

function handleScissorClick() {
  playerMove = "scissor";
  let newLogL = document.createElement("p");
  newLogL.innerText = "Scissor";
  logLeft.appendChild(newLogL);
  console.log(playerMove, gameRound);
  gameRound++;
  playRound();
}

function playerChoice() {
  playerRock.addEventListener("click", handleRockClick);
  playerPaper.addEventListener("click", handlePaperClick);
  playerScissor.addEventListener("click", handleScissorClick);
}

function removePlayerClicks() {
  playerRock.removeEventListener("click", handleRockClick);
  playerPaper.removeEventListener("click", handlePaperClick);
  playerScissor.removeEventListener("click", handleScissorClick);
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
    resetBtn.style.display = "block";

    if (playerPoints === computerPoints) {
      showWinner.innerText = "Tied!";
    } else if (playerPoints > computerPoints) {
      showWinner.innerText = "You win!";
    } else {
      showWinner.innerText = "Computer wins!";
    }

    removePlayerClicks();
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

function resetGame() {
  resetBtn.addEventListener("click", () => {
    showWinner.style.display = "none";
    resetBtn.style.display = "none";
    totalGames = 5;
    // Reseting all points
    playerPoints = 0;
    computerPoints = 0;
    showPlayerPoints.innerText = `Points: ${playerPoints}`;
    showComputerPoints.innerText = `Points: ${computerPoints}`;
    // Reseting log window
    logLeft.innerText = "";
    let newHeaderL = document.createElement("h4");
    newHeaderL.innerText = "Players move:";
    logLeft.appendChild(newHeaderL);

    logRight.innerText = "";
    let newHeaderR = document.createElement("h4");
    newHeaderR.innerText = "Computers move:";
    logRight.appendChild(newHeaderR);

    // Reseting player click events
    playerChoice();
  });
}

showPlayerPoints.innerText = `Points: ${playerPoints}`;
showComputerPoints.innerText = `Points: ${computerPoints}`;
playerChoice();
resetGame();
