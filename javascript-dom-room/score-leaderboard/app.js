const p1Button = document.querySelector('#p1-button');
const p2Button = document.querySelector('#p2-button');
const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');
const resetButton = document.querySelector('#reset');
const WinnerPointOption = document.querySelector('#WinnerPointMax');

let p1Score = 0;
let p2Score = 0;
let WinnerPointLimit = 5;
let isGameFinish = false; 

function reset() {
    isGameFinish = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
};

p1Button.addEventListener('click', function() {
    if (!isGameFinish){
        p1Score += 1;
        if(p1Score === WinnerPointLimit){
            isGameFinish = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener('click', function() {
    if (!isGameFinish){
        p2Score += 1;
        if(p2Score === WinnerPointLimit){
            isGameFinish = true;
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener('click', reset);
WinnerPointOption.addEventListener('change', function(){
    WinnerPointLimit = parseInt(this.value);
    reset();
});