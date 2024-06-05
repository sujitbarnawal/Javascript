let randomNumber = parseInt(Math.random() * 100 + 1)

let submit = document.querySelector("#subt")
let userInput = document.querySelector("#guessField")
let guessSlot = document.querySelector(".guesses")
let remaining = document.querySelector(".lastResult")
let lowOrHi = document.querySelector(".lowOrHi")
let startOver = document.querySelector(".resultParas")

let p = document.createElement("p")

let preGuess = []
let numGuess = 1

let playGame = true


if (playGame) {
    submit.addEventListener("click", (e) => {
        e.preventDefault()
        let guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (guess <= 0) {
        alert("Please enter a number greater than or equal to 1")
    } else if (guess > 100) {
        alert("Please enter a number less than or equal to 100")
    }
    else if (isNaN(guess)) {
        alert("Please enter a valid number")
    } else {
        preGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game over.The random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}


function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("Your guess was right")
        endGame()
    } 
    else if (guess < randomNumber) {
        displayMessage("Your guess is lower")
    } 
    else{
        displayMessage("Your guess is higher")
    }
}

function displayGuess(guess) {
    userInput.value=""
    guessSlot.innerHTML+=`${guess} `
    numGuess++
    remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML=`<h3>${message}</h3>`
}


function endGame() {
    userInput.value=""
    userInput.setAttribute("disabled","")
    p.classList.add("button")
    p.innerHTML=`<h2 id="newgame">Start New Game</h2>`
    p.style.border="2px solid black"
    p.style.borderRadius="10px "
    p.style.textAlign="center"
    p.style.cursor="pointer"
    startOver.appendChild(p)
    playGame=false
    newGame()
}

function newGame() {
    let newGameButton=document.querySelector("#newgame")
    newGameButton.addEventListener("click",()=>{
        randomNumber = parseInt(Math.random() * 100 + 1)
        preGuess=[]
        numGuess=1
        guessSlot.innerHTML=""
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute("disabled")
        startOver.removeChild(p)
        lowOrHi.innerHTML=""
        playGame=true;
    })
}
