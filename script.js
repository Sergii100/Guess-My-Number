'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  // console.log(guess, typeof guess);

  document.querySelector(`.again`).addEventListener(`click`, function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector(`.number`).textContent = `?`;
    document.querySelector(`.number`).style.width = `15rem`;

    document.querySelector(`body`).style.backgroundColor = `#222`;

    displayMessage(`Start guessing...`);

    document.querySelector(`.score`).textContent = score;

    document.querySelector(`.guess`).value = ``;
  });

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = `No number:(`;
    displayMessage(`No number:(`);
  }

  //When player wins
  else if (guess === secretNumber) {
    document.querySelector(`.number`).textContent = secretNumber;

    displayMessage(`Correct number:)`);

    document.querySelector(`body`).style.backgroundColor = `#60b347`;

    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  }

  //When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `Too high!` : `Too low!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`You are a LOOSER!`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
});
