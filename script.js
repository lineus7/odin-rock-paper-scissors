function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)

    if (randomNumber === 0) {
        return `Rock`
    }
    if (randomNumber === 1) {
        return `Scissor`
    }
    if (randomNumber === 2) {
        return `Paper`
    }
}

function playRound (playerChoice,computerChoice) {
    playerChoice = playerChoice.toUpperCase()
    computerChoice = computerChoice.toUpperCase()
    
    if (playerChoice === computerChoice) {
        console.log(`Tie! Both are ${playerChoice}`)
        return;
    }
    if ((playerChoice === `PAPER` && computerChoice === `ROCK`) ||
    (playerChoice === `ROCK` && computerChoice === `SCISSOR`) ||
    (playerChoice === `SCISSOR` && computerChoice === `PAPER`)) {
        console.log(`You Won! ${playerChoice} beats ${computerChoice}`)
        return 1
    }

    console.log(`You Lose ! ${playerChoice} are beaten by ${computerChoice}`)
    return 0
}

function game () {
    let playerScore = 0
    let computerScore = 0

    while (playerScore < 5 && computerScore < 5) {
        let computerChoice = getComputerChoice()
        let playerChoice = prompt("Rock, Paper, or Scissor?")
        let roundResult = playRound(playerChoice,computerChoice)
        if (roundResult) playerScore++
        if (!roundResult) computerScore++
        console.log(`You : Computer\n${playerScore} : ${computerScore}`)
    }
}

game()
