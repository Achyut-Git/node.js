let input = document.getElementById("input");
let range = document.getElementById("range");
let numGuessed = document.querySelector("#nGuessed");
let guessesRemaining = document.querySelector("#guessesRemaining");
let button = document.getElementById("btn")
let randomNumber = Math.round(Math.random()*100);
let startAgain = document.querySelector("h1");
startAgain.onclick = function(){
    startOver();
}

button.onclick = function(){  startGame();  }

let count = "";
let guesses = 10;
let play = true;
button.disabled = true;

input.onkeyup = function(){
button.disabled= false;
if(input.value.length ===0){
    button.disabled = true;
}
}

if(play){
    function startGame(){
        console.log("game started")
        if(input.value != randomNumber){
            guesses--
             document.querySelectorAll("p")[1].innerHTML = `Guesses Remaining ${guesses}`
        }
        validateGame()
        input.value = ""
    }
}

function validateGame(){
    console.log(randomNumber)
    if(isNaN(input.value)){
      alert("Write a valid number")
      return;
    }
   if(input.value > randomNumber){
        range.innerHTML = "Number is too High!"
    }
    else if(input.value < randomNumber){
        range.innerHTML = "Number is too Low!"
    }
    else if(input.value == randomNumber){
        endGame()
        range.innerHTML = "You guessed it Right!"
        document.querySelectorAll("p")[1].innerHTML = `<h3>you guessed it in ${11-guesses} chances</h3>`

    }

    score();
}

function score(){
    count += `${input.value}|`
    console.log(count)
    numGuessed.innerHTML = count
    if(guesses==0){
        endGame()
        range.innerHTML = '';
    }
}

function endGame(){
   button.classList.add("endGame")
   startAgain.style.display = 'block';

}

function startOver(){
    startGame()
    button.disabled = true
    range.innerHTML = '';
    play = true;
    guesses ="10";
    document.querySelectorAll("p")[1].innerHTML = `Guesses Remaining ${guesses}`
    count = '';
    numGuessed.innerHTML = count;
    randomNumber = Math.round(Math.random()*100);
    button.classList.remove("endGame")
    startAgain.style.display = 'none';
}