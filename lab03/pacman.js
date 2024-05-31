function createGame(n) {
    const gameArray = new Array(n).fill('.');
    const pacmanIndex = Math.floor(Math.random() * n);
    gameArray[pacmanIndex] = 'C';
    let ghostIndex;
    do {
      ghostIndex = Math.floor(Math.random() * n);
    } while (ghostIndex === pacmanIndex);
    gameArray[ghostIndex] = '^';
    let fruitIndex;
    do {
      fruitIndex = Math.floor(Math.random() * n);
    } while (fruitIndex === pacmanIndex || fruitIndex === ghostIndex);
    gameArray[fruitIndex] = '@';
    console.log(gameArray);
    return gameArray;
  }
  
  function renderGame(gameArray) {
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = ''; // Clear the game board
    gameArray.forEach(piece => {
      const pieceElement = document.createElement('div');
      pieceElement.textContent = piece;
      pieceElement.classList.add('game-piece');
      gameBoard.appendChild(pieceElement);
    });
  }
  
  // Render the game with 10 pieces
  renderGame(createGame(10));
  