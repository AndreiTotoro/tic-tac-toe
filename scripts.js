let sqClicked = 0;

const squareCreator = (sqNr, sqControl = "") => {
    return {sqNr, sqControl}
}

const gameManagerCreator = (currentPlayer = "player1", currentMarker = "X") => {
    return {currentPlayer, currentMarker}
}

function squareChanger(obj, squares, marker, nextPlayer){
    obj.sqControl = marker
    squares.textContent = obj.sqControl
    gameManager.currentPlayer = nextPlayer
}

function newGame(){
    sqClicked = 0
    gameBoard.forEach((obj) => {
        obj.sqControl = ""
    items.forEach((item) => {
        item.textContent = ""
        gameManager.currentPlayer = "player1"
    })
})
}

function winConditionPlayer1(sq1, sq2, sq3){
   return gameBoard[sq1].sqControl == "X" && gameBoard[sq2].sqControl == "X" && gameBoard[sq3].sqControl == "X"
}

function winConditionPlayer2(sq1, sq2, sq3){
    return gameBoard[sq1].sqControl == "O" && gameBoard[sq2].sqControl == "O" && gameBoard[sq3].sqControl == "O"
 }

 function winner(win){
     alert(win + " is the winner!")
     newGame()
 }

 function turnDisplay(){
     if (gameManager.currentPlayer == "player1") {
        turn.textContent = "It's X's turn to move!"
     }else if (gameManager.currentPlayer == "player2") {
        turn.textContent = "It's O's turn to move!"
     }
 }

 function squareIncrease(){
     sqClicked += 1
 }

 function markerChanger(newMarker){
    return gameManager.currentMarker = newMarker
 }


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

const turn = document.querySelector('#turn') 




gameBoard.forEach((obj) => {
    let squares = document.createElement('div')
    board.appendChild(squares)
    squares.classList.add('squares')
    
        squares.addEventListener('mouseover', () => {
            if (obj.sqControl == ""){
                squares.textContent = gameManager.currentMarker
            }
        })

        squares.addEventListener('mouseleave', () => {
            if (obj.sqControl == ""){
                squares.textContent = ""
            }
        })

    squares.addEventListener("click", () => {
        
        if (obj.sqControl == ""){
            if (gameManager.currentPlayer == "player1"){
                squareChanger(obj, squares, "X", "player2")
                turnDisplay()
                squareIncrease()
                markerChanger("O")
            }
            else if (gameManager.currentPlayer == "player2"){
                squareChanger(obj, squares, "O", "player1")
                turnDisplay()
                squareIncrease()
                markerChanger("X")
            }
        }
        if (winConditionPlayer1(0, 1, 2))  {
            winner("X")
        } else if (winConditionPlayer2(0, 1, 2)){
            winner("O")
        } else if (winConditionPlayer1(0, 3, 6))  {
            winner("X")
        } else if (winConditionPlayer2(0, 3, 6)){
            winner("O")
        }else if (winConditionPlayer1(2, 5, 8))  {
            winner("X")
        } else if (winConditionPlayer2(2, 5, 8)){
            winner("O")
        }else if (winConditionPlayer1(6, 7, 8))  {
            winner("X")
        } else if (winConditionPlayer2(6, 7, 8)){
            winner("O")
        }else if (winConditionPlayer1(3, 4, 5))  {
            winner("X")
        } else if (winConditionPlayer2(3, 4, 5)){
            winner("O")
        }else if (winConditionPlayer1(1, 4, 7))  {
            winner("X")
        } else if (winConditionPlayer2(1, 4, 7)){
            winner("O")
        }else if (winConditionPlayer1(0, 4, 8))  {
            winner("X")
        } else if (winConditionPlayer2(0, 4, 8)){
            winner("O")
        }else if (winConditionPlayer1(2, 4, 6))  {
            winner("X")
        } else if (winConditionPlayer2(2, 4, 6)){
            winner("O")
        } else if (sqClicked == 9){
            alert("It's a tie!")
            newGame()
        }
    })
})

const items = document.querySelectorAll('.squares')

const reset = document.querySelector('#reset')


reset.addEventListener("click", () => {
    newGame()
})