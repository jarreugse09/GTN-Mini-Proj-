'use strict';

let mySecretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let myScore = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setRetroBackground = function () {
  document.querySelector('body').style.backgroundColor = '#222b2f';
};

document.querySelector('.again').addEventListener('click', function () {
  myScore = 20;
  document.querySelector('.score').textContent = myScore;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  setRetroBackground();
  document.querySelector('.number').style.width = '15rem';
  mySecretNumber = Math.trunc(Math.random() * 20) + 1;
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No Number!');
  } else if (guess === mySecretNumber) {
    document.querySelector('.number').textContent = mySecretNumber;
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#39ff14';
    document.querySelector('.number').style.width = '30rem';
    if (myScore > highscore) {
      highscore = myScore;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    if (myScore > 1) {
      displayMessage(guess < mySecretNumber ? '📈 Too Low!' : '📉 Too High!');
      myScore--;
      document.querySelector('.score').textContent = myScore;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
