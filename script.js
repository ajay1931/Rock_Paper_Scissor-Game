let userChoice = document.getElementById("userChoice");
let computerChoice = document.getElementById("computerChoice");
let score = document.getElementById("score")
let totalScore = 5


let choice = ["Rock", "Paper", "Scissor"];

document.getElementById("rock").addEventListener("click", function () {
    playGame("Rock");
});

document.getElementById("paper").addEventListener("click", function () {
    playGame("Paper");
});

document.getElementById("scissor").addEventListener("click", function () {
    playGame("Scissor");
});

function playGame(userSelection) {
    userChoice.textContent = userSelection

    let random = Math.floor(Math.random() * choice.length)
    let computerSelection = choice[random];
    computerChoice.textContent = computerSelection;


    if (userSelection === computerSelection) {
        alert("YOU WON...")
    } else {
        totalScore = totalScore - 1
        score.textContent = "Score:" + totalScore
        alert("YOU LOST...")
    }
    if (totalScore <= 0) {
        alert("GAME OVER...")
        location.reload()
    }
}