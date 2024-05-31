// Assuming pacmanIndex is a global variable that tracks the position of Pacman
let pacmanIndex;
let score = 0;

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

function movePacman(gameArray, direction) {
    const newPosition = pacmanIndex + direction;
    if (newPosition >= 0 && newPosition < gameArray.length) {
      if (gameArray[newPosition] === '.') {
        score++; // Increment score for eating a pellet
      }
      gameArray[pacmanIndex] = '_'; // Clear Pacman's old position
      pacmanIndex = newPosition; // Update Pacman's position
      gameArray[pacmanIndex] = 'C'; // Place Pacman in the new position
    }
  }

function moveLeft(gameArray) {
    movePacman(gameArray, -1);
}

function moveRight(gameArray) {
    movePacman(gameArray, 1);
}

// Example usage:
const game = createGame(10);
console.log('Initial game:', game);
moveLeft(game);
console.log('After moving left:', game);
console.log('Score:', score);
moveRight(game);
console.log('After moving right:', game);
console.log('Score:', score);

  
  function renderGame(game) {
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = ''; // Clear the game board
    game.forEach(piece => {
      const pieceElement = document.createElement('div');
      pieceElement.textContent = piece;
      pieceElement.classList.add('game-piece');
      gameBoard.appendChild(pieceElement);
    });
    scoreText = document.getElementById('score');
    scoreText.innerHTML = "Score: " + score;
  }
  
  // Render the game with 10 pieces
  renderGame(game);
  