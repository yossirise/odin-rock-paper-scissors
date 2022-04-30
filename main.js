const OPTIONS = ["Rock", "Paper", "Scissors"],
  ROUNDS = 5;

(function game() {
  const scores = { computer: 0, player: 0, draw: 0 };

  console.log("Rock Paper Scissors!");

  for (let i = 0; i < ROUNDS; i++) {
    const roundSelections = playRound(scores);
    logStats(i, roundSelections, scores);
  }

  logFinalWinner(scores);
})();

function playRound(scores) {
  const computerSelection = computerPlay(),
    playerSelection = getPlayerSelection();

  const winner = ruleRoundWinner(computerSelection, playerSelection);
  scores[winner]++;

  return { computer: computerSelection, player: playerSelection };
}

function computerPlay() {
  return OPTIONS[Math.floor(Math.random() * 3)];
}

function getPlayerSelection() {
  const playerSelection = capitalize(
    prompt("Rock, Paper, or Scissors?").trim()
  );

  if (!OPTIONS.includes(playerSelection)) {
    throw new TypeError("illegal player selection");
  }

  return playerSelection;
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

function ruleRoundWinner(computerSelection, playerSelection) {
  const indexDiff =
    OPTIONS.indexOf(computerSelection) - OPTIONS.indexOf(playerSelection);

  if (indexDiff === -2 || indexDiff === 1) {
    return "computer";
  }

  if (indexDiff === -1 || indexDiff === 2) {
    return "player";
  }

  return "draw";
}

function logStats(round, roundSelections, scores) {
  console.log(`Round ${round + 1} of ${ROUNDS}
Player selection: ${roundSelections.player}
Computer selection: ${roundSelections.computer}
Scores: Player: ${scores.player} Computer: ${scores.computer}
Drawn rounds: ${scores.draw}`);
}

function logFinalWinner(scores) {
  if (scores.computer < scores.player) {
    console.log("Player wins");
  } else if (scores.computer > scores.player) {
    console.log("Computer wins");
  } else {
    console.log("Draw");
  }
}
