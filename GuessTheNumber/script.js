let input = document.getElementById("input");
let range = document.getElementById("range");
let numGuessed = document.querySelector("#nGuessed");
let guessesRemaining = document.querySelector("#guessesRemaining");
let button = document.getElementById("btn")
let randomNumber = Math.round(Math.random()*100 +1);
button.onclick = function(){  startGame();  }

let count = 0;
let guesses = 10;
let play = true;

if(play){
    function startGame(){
        console.log("game started")
        if(input.value != randomNumber){
            guesses--
            guessesRemaining.innerHTML = guesses;
        }
        validateGame()
        input.value = ""
    }
}

function validateGame(){
    console.log(randomNumber)
    if(input.value > randomNumber){
        range.innerHTML = "Number is too High!"
    }
    else if(input.value < randomNumber){
        range.innerHTML = "Number is too low!"
    }
    else if(input.value == randomNumber){
        range.innerHTML = "You guessed it right!"
    }
}

function score(){
    //
}

function endGame(){
    play = false;
}

function startOver(){
    //
}