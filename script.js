// factory function to create players
const newPlayer = (name, marker) => {
    return {name, marker};
}

//gameBoard object - module
const gameBoard = (() => {

    //Create board array
    let board = [];
    for (i = 0; i < 9; i++) {
        board.push("");
    }

    //Create square div for each array item
    let boardSquares = document.querySelector(".boardSquares");

    board.forEach((item, index) => {
        const square = document.createElement('div');
        square.className = 'square';
        boardSquares.appendChild(square);
    })

    //Add event listeners to each square
    Array.from(boardSquares.children).forEach((square, index) => {
        square.addEventListener('click', () => {
            //show current player marker
            square.classList.add(game.currentPlayer.marker);
            square.setAttribute('data', game.currentPlayer.marker);
            //update array
            board[index] = game.currentPlayer.marker;
            //remove event listener from marked square
            square.getElementsByClassName.pointerEvents = "none";
            //update emptySquares
            game.emptySquares -= 1;
            //check winner
            game.checkWinner();
            //check emptySquares
            if (game.gameWon == false) {
                if (game.emptySquares > 0) {
                    game.alertNext();
                    game.nextPlayer();
                } else if (game.emptySquares == 0) {
                    game.alertTie();
                }
            }
        })
    });
    return {
        board
    };
})();

    

//game object - module
const game = (() => {

    //Declare players
    const playerOne = newPlayer("Player One", "X");
    const playerTwo = newPlayer("Player Two", "O");

    //Starting point
    let currentPlayer = playerOne;
    let emptySquares = 9;
    let gameWon = false;

    //Selectors

    let infoBox = document.querySelector(".infoBox");
    let playerName = document.querySelector(".playerName");

    //Winning conditions (Array of arrays)

    const winning = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    //Check winner
    function checkWinner() {
        winning.forEach((item, index) => {
            if (gameBoard.board[item[0]] === this.currentPlayer.marker && gameBoard.board[item[1]] === this.currentPlayer.marker && gameBoard.board[item[2]] === this.currentPlayer.marker) {
                infoBox.innerHTML = `${this.currentPlayer.name} wins!!!`;
                this.gameWon = true;
            }
        })
    }
    //Alert next player
    function alertNext () {
        this.currentPlayer === playerOne ? playerName.textContent = "Player Two" : playerName.textContent = "Player 1";
    }

    //Next player
    function nextPlayer() {
        this.currentPlayer === playerOne ? this.currentPlayer = playerTwo : this.currentPlayer = playerOne;
        console.log("Current player: " + currentPlayer.name);
    }

    //Declare tie
    function alertTie() {
        infoBox.innerHTML = "The game is a tie!!";
    }

    //Return
    return {
        currentPlayer,
        emptySquares,
        checkWinner,
        alertNext,
        nextPlayer,
        alertTie,
        gameWon
    };
})();