'use strict';
let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;

// // ------------------------------------
// //when Refresh Page
// //-------------------------------------
// document.querySelector('.again').addEventListener('click', function () {
//   window.location.reload();
//   document.querySelector('.again').textContent = 'Refresh';
//   document.querySelector('.again').style.backgroundColor = '#61FE4C';
// });
// Start Event Check BTN
document.querySelector('.input-btn').addEventListener('click', function () {
  const theNumber = Number(document.querySelector('.number-input-box').value);
  // ------------------------------------
  //when Not A number
  //-------------------------------------
  if (!theNumber) {
    document.querySelector('.input-text').textContent = `No Number Ditect!`;
  }
  // ------------------------------------
  //when Score Too Low
  //-------------------------------------
  else if (theNumber < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector(
        '.input-text'
      ).textContent = `The Number Is too Low.`;
      document.querySelector('.input-text').style.fontSize = '2rem';
    } else {
      document.querySelector('.input-text').textContent = `You Lost The Game`;
      document.querySelector('.score').textContent = 0;
      document.querySelector('.input-text').style.fontSize = '2rem';
      document.querySelector('body').style.backgroundColor = '#BA1500';
    }
  }
  // ------------------------------------
  //when Score Too High
  //-------------------------------------
  else if (theNumber > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector(
        '.input-text'
      ).textContent = `The Number Is Tow High.`;
      document.querySelector('.input-text').style.fontSize = '2rem';
    } else {
      document.querySelector('.input-text').textContent = `You Lost The Game`;
      document.querySelector('.score').textContent = 0;
      document.querySelector('.input-text').style.fontSize = '2rem';
      document.querySelector('body').style.backgroundColor = '#BA1500';
    }
  }
  // ------------------------------------
  //when Score Correct
  //-------------------------------------
  else if (theNumber === secretNumber) {
    // document.querySelector('.highScore').textContent = score;
    document.querySelector('.input-text').textContent = `The Number Mached.`;
    document.querySelector('.qusn-mark').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#61FE4C';
    document.querySelector('.input-text').style.fontSize = '2rem';
    document.querySelector('.banner-heading').textContent = 'Congratulation';
  }
});
// ------------------------------------
//when Play Again
//-------------------------------------
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20 + 1);
  let score = 20;
  // console.log(secretNumber);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input-box').value = '';
  document.querySelector('.input-text').textContent =
    'Start Guessing Number......';
  document.querySelector('.input-text').style.fontSize = '';
  document.querySelector('.qusn-mark').textContent = '?';
  document.querySelector('.banner-heading').textContent = 'Guess My Number';
  document.querySelector('body').style.backgroundColor = '';
  document.querySelector('body').style.backgroundColor = '';
  document.querySelector('body').style.backgroundColor = '';
});
