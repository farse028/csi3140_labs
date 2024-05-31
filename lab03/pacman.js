// Assuming pacmanIndex is a global variable that tracks the position of Pacman
let pacmanIndex;

function createGame(n) {
  const gameArray = new Array(n).fill('.');
  pacmanIndex = Math.floor(Math.random() * n);
  gameArray[pacmanIndex] = 'C';

  // Place Ghost and Fruit in random positions
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

  return gameArray;
}

function moveLeft(gameArray) {
  if (pacmanIndex > 0) {
    gameArray[pacmanIndex] = '.';
    pacmanIndex -= 1;
    gameArray[pacmanIndex] = 'C';
  }
  return gameArray;
}

function moveRight(gameArray) {
  if (pacmanIndex < gameArray.length - 1) {
    gameArray[pacmanIndex] = '.';
    pacmanIndex += 1;
    gameArray[pacmanIndex] = 'C';
  }
  return gameArray;
}

// Example usage:
const game = createGame(10);
console.log('Initial game:', game);
console.log('After moving left:', moveLeft(game));
console.log('After moving right:', moveRight(game));

  
  function renderGame(game) {
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = ''; // Clear the game board
    game.forEach(piece => {
      const pieceElement = document.createElement('div');
      pieceElement.textContent = piece;
      pieceElement.classList.add('game-piece');
      gameBoard.appendChild(pieceElement);
    });
  }
  
  // Render the game with 10 pieces
  renderGame(game);
  