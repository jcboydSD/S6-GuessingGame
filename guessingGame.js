// declarations
const form = document.querySelector('.user-guess');
const previousGuesses = document.querySelector('#previousGuesses');
const result = document.querySelector('#result');
let randomNumber = Math.floor(Math.random() * 100) + 1;
let userGuess;
let count = 0;

console.log(randomNumber); //del

const checkGuess = function(){
    result.classList.remove('justRight', 'tooBig', 'tooSmall', 'tooMany');

    if(userGuess == randomNumber){
        result.innerHTML = 'Congratulations! You got it right!';
        result.classList.add('justRight');
        gameOver();
    }
    else if(count == 10){
        result.innerHTML = '!!! Too many attempts, GAME OVER !!!';
        result.classList.add('tooMany');
        gameOver();
    }    
    else {
        if(userGuess > randomNumber){
            result.innerHTML = 'WRONG, that guess was too BIG';
            result.classList.add('tooBig');
        }
        else {
            result.innerHTML = 'Wrong, that guess was too small';
            result.classList.add('tooSmall');
        }
    }
};

const gameOver = function(){
    document.getElementById('guess').disabled = true;
    document.querySelector('div').innerHTML = '<button>Start new game</button>'
    document.querySelector('button').focus();
    document.querySelector('button').addEventListener('click', () => {
        reset();  
    });  
};

const reset = function(){
    let resetButton = document.querySelector('button');
    resetButton.parentNode.removeChild(resetButton);
    count = 0;
    previousGuesses.innerHTML = 'Previous guesses: ';
    result.innerHTML = '';
    result.classList.remove('justRight', 'tooMany');
    document.getElementById('guess').disabled = false;
    document.querySelector('#guess').focus();
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
};

form.addEventListener('submit', e => {
    e.preventDefault();
    count ++;
    userGuess = Number(form.guess.value);
    form.guess.value = '';
    previousGuesses.innerHTML += (userGuess + '  ');
    checkGuess();
});

