// Asigning variables
let totalGames = 5;

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

function playerChoice() {
  playerRock.addEventListener("click", () => {
    return "rock";
  });

  playerPaper.addEventListener("click", () => {
    return "paper";
  });

  playerScissor.addEventListener("click", () => {
    return "scissor";
  });
}

// Game loop
const player = playerChoice;
const computer = setInterval(compChoice, 3000);

function checkWinner(p1, pc) {
  let gameRound = 0;

  console.log("Entering game loop");
  while (totalGames > 0 && gameRound > 1) {
    if (gameRound % 2 === 0) {
      console.log("Players turn:");
      p1;
      console.log("Player plays");
    } else {
      pc;
      console.log("Computer plays");
    }

    gameRound++;
    totalGames--;
  }
  console.log(gameRound);
  console.log("Working fine");
}

checkWinner(player, computer);
