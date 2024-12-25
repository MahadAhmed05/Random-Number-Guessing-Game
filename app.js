const correctNum = 7;
let liveCount = 3;
let remainingGuesses = 3;
let restart = document.getElementById("restart");

function NumberGuess() {
  let lives = document.getElementById("lives");
  let input = document.getElementById("input");
  let remainingGuess = document.getElementById("remainingGuess");
  let para = document.getElementById("para");

  if (Number(input.value) === 7) {
    remainingGuess.innerHTML = "Correct Guess";
    restart.style.display = "block";
    para.innerHTML = "";
  } else {
    liveCount--;
    remainingGuesses--;

    let hearts = "❤️".repeat(liveCount);
    lives.innerHTML = `Lives : ${hearts}`;

    remainingGuess.innerHTML = `You have ${remainingGuesses} remaining guesses`;

    if (liveCount === 0) {
      remainingGuess.innerHTML = "Game Over";
      guessBtn.style.display = "none";
      restart.style.display = "block";
    }
  }
}

let guessBtn = document.getElementById("guessBTN");
guessBtn.addEventListener("click", NumberGuess);
restart.addEventListener("click", () => {
  location.reload();
});
//   if (Number(input.value) !== 7) {
//     lives.innerHTML = "Lives : ❤️❤️";
//     remainingGuess.innerHTML = "You have 2 remaining guesses";
//   } else if (Number(input.value) === 7) {
//     console.log("everything is fine");
//   } else {
//     console.log("Please provide correct number");
//   }
