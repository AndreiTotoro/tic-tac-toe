const playerFactory = (playerName, marker) => {
    return {playerName, marker}
}

const squareCreator = (sqNr, sqControl = "free") => {
    return {sqNr, sqControl}
}

const gameManagerCreator = (score1 = 0, score2 = 0, round = 1) => {
    return {score1, score2, round}
}


const player1 = playerFactory("Andrei", "X")

const player2 = playerFactory("Bob", "O")

const gameBoard = [
    squareCreator(1),
    squareCreator(2),
    squareCreator(3),
    squareCreator(4),
    squareCreator(5),
    squareCreator(6),
    squareCreator(7),
    squareCreator(8),
    squareCreator(9)
]

const gameManager = gameManagerCreator();

const board = document.querySelector('#board')

gameBoard.forEach((obj) => {
    let squares = document.createElement('div')
    board.appendChild(squares)
    squares.classList.add('squares')
    squares.textContent = "X"
})






