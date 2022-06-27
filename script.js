const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const computerScoreSpan = document.querySelector("[data-computer-score]");
const yourScoreSpan = document.querySelector("[data-your-score]");
const SELECTIONS = [
  {
    name: "rock",
    emoji: "✊🏻",
    beats: "scissors",
  },
  {
    name: "paper",
    emoji: "✋🏻",
    beats: "rock",
  },
  {
    name: "scissors",
    emoji: "✌🏻",
    beats: "paper",
  },
];

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );
    makeSelection(selection);
  });
});

function makeSelection(selection) {
  const computerSelection = randomSelection();
  const yourWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);
  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, yourWinner);

  if (yourWinner) incrementScore(yourScoreSpan);
  if (computerWinner) incrementScore(computerScoreSpan);
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function addSelectionResult(selection, winner) {
  const div = document.createElement("div");
  div.innerText = selection.emoji;
  div.classList.add("result-selection");
  if (winner) div.classList.add("winner");
  finalColumn.after(div);
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}

// const game = ["rock", "paper", "scrissors"];

// // faire apparaitre aléatoirement le rock paper scissors

// const getAIChoice = (game) => {
//   return parseInt(Math.random() * game.length);
// };

// for (let btn of document.getElementsByClassName("btn")) {
//   btn.addEventListener("click", function () {
//     let choice = game.indexOf(this.innerText);
//     console.log(choice);
//     // let aiChoice = getAIChoice(game);
//     // console.log({ player: game[choice], ai: game[aiChoice] });
//     // if ((aiChoice + 1) % 3 === choice) alert("You win");
//     // else if (aiChoice === choice) alert("Draw");
//     // else alert("You lose");
//   });
// }

// // // faire apparaitre aléatoirement le rock paper scissors

// // const computer = (aiChoice) => {
// //   aiChoice = (Math.random() * game.length) | 0;
// //   const result = game[aiChoice];
// //   console.log(result);
// // };

// // // création fonction user
// // function player(userChoice, aiChoice) {
// //   document.getElementById("btn").click();
// //   if (userChoice === "rock" && aiChoice === "rock") {
// //     alert("Il y a égalité");
// //   } else alert("ceci est un test");
// // }
// // player();
