const p1scoreButton = document.querySelector('#addP1Socre');
const p2scoreButton = document.querySelector('#addP2Socre');
const p1ScoreDisplay = document.querySelector('#p1ScoreDisplay');
const p2ScoreDisplay = document.querySelector('#p2ScoreDisplay');
const resetBtn = document.querySelector('#reset');
const winScoreSelect = document.querySelector('#winScoreSelect');


winScoreSelect.addEventListener('change', () =>{
    winningScore = parseInt( winScoreSelect.value);
})

let winningScore = 3;
let p1Score=0;
let p2Score=0;

let isGameOver = false;
p1scoreButton.addEventListener('click', (e) =>{
    if(!isGameOver){
        p1Score+=1;
        if(p1Score===winningScore){
            isGameOver=true;
            p1ScoreDisplay.setAttribute('class', 'winner')
            p2ScoreDisplay.setAttribute('class', 'loser')
        }
        p1ScoreDisplay.textContent = p1Score;
    }
})

p2scoreButton.addEventListener('click', (e) =>{
    if(!isGameOver){
        p2Score+=1;
        if(p2Score===winningScore){
            isGameOver=true;
            p2ScoreDisplay.setAttribute('class', 'winner')
            p1ScoreDisplay.setAttribute('class', 'loser')
        }
        p2ScoreDisplay.textContent = p2Score;
    }
})
function reset (){
    isGameOver=false;
    p1Score=0;
    p2Score=0;
    p2ScoreDisplay.textContent=0;
    p1ScoreDisplay.textContent=0;
    p1ScoreDisplay.removeAttribute('class','winner','loser');
    p2ScoreDisplay.removeAttribute('class','winner','loser');
}

resetBtn.addEventListener('click', reset);
    


