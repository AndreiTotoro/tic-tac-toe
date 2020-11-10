const playerFactory = (playerName, marker) => {
    return {playerName}
}

const squareCreator = (sqNr, sqControl = "") => {
    return {sqNr, sqControl}
}

const gameManagerCreator = (currentPlayer = "player1", score1 = 0, score2 = 0, round = 1) => {
    return {currentPlayer, score1, score2, round}
}


const player1 = playerFactory("Andrei")

const player2 = playerFactory("Bob")

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

const reset = document.querySelector('#reset')


gameBoard.forEach((obj) => {
    let squares = document.createElement('div')
    board.appendChild(squares)
    squares.classList.add('squares')
    squares.addEventListener("click", () => {
        if (obj.sqControl == ""){
            if (gameManager.currentPlayer == "player1"){
                obj.sqControl = "X"
                squares.textContent = obj.sqControl
                gameManager.currentPlayer = "player2"
            }
            else if (gameManager.currentPlayer == "player2"){
                obj.sqControl = "O"
                squares.textContent = obj.sqControl
                gameManager.currentPlayer = "player1"
            }
        }  
    })
})


const items = document.querySelectorAll('.squares')

reset.addEventListener("click", () => {
    gameBoard.forEach((obj) => {
        obj.sqControl = ""
        items.forEach((item) => {
            item.textContent = ""
            gameManager.currentPlayer = "player1"
        })
    })
})