let submit = document.getElementById("number-submit");
let restart = document.getElementById("restart-game");
let correctNumber = getRandomNumner();
let result = document.getElementById("result");
let history = document.getElementById("history");
console.log(correctNumber);
let guesses = [];

window.onload = function () {
  submit.addEventListener("click", playGame);
  restart.addEventListener("click", initGame);
};

function playGame() {
  let numberGuess = document.getElementById("number-guess").value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
}

function displayResult(numberGuess) {
  if (numberGuess > correctNumber) {
    showNumberAbove();
  } else if (numberGuess < correctNumber) {
    showNumberBelow();
  } else {
    showYouWon();
  }
}

function initGame() {
  correctNumber = getRandomNumner();
  guesses = [];
  result.innerHTML = "";
  displayHistory();
  document.getElementById("number-guess").value = "";
}

function getDialog(type, text) {
  let dialog;
  switch (type) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon() {
  const text = "Awesome job, you got it!";
  let dialog = getDialog("won", text);
  result.innerHTML = dialog;
}
function showNumberAbove() {
  const text = "Your guess is too high!.";
  let dialog = getDialog("warning", text);
  result.innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Your guess is too low!.";
  let dialog = getDialog("warning", text);
  result.innerHTML = dialog;
}

function getRandomNumner() {
  let randomNumber = Math.random() * 100;
  return Math.floor(randomNumber) + 1;
}

function saveGuessHistory(guess) {
  guesses.push(guess);
}

function displayHistory() {
  let index = guesses.length - 1;
  let list = "<ul class='list-group'>";
  while (index >= 0) {
    list +=
      "<li class='list-group-item'>" + "you guessed" + guesses[index] + "</li>";
    index--;
  }
  list += "</ul>";
  history.innerHTML = list;
}
