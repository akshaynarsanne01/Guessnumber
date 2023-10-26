'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent = 'No Number';
    }
    else if (guess === secretNumber) {
        displayMessage('Correct Number');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.check').disabled = true;
        document.querySelector('.number').textContent = secretNumber;
        if(highScore<score){
            highScore = score;
        }
    }
    else if (guess !== secretNumber ){
        score--;
        guess>secretNumber ? displayMessage('Too High') : displayMessage('Too Low');
    }
    document.querySelector('.score').textContent = score;
    if(score <=0 ){
        displayMessage('Game Over');
        document.querySelector('.check').disabled = true;
        document.querySelector('body').style.backgroundColor = '#cc4429';
    }
    document.querySelector('.highscore').textContent = highScore;
});

document.querySelector('.again').addEventListener('click',function() {
    score=20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222222';
    document.querySelector('.check').disabled = false;
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highScore;
});