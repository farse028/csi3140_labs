// Assuming pacmanIndex is a global variable that tracks the position of Pacman
let pacmanIndex;
let score = 0;
let level = 1;
let gameArray;
let gameBoard;

function createGame(n) {
  gameArray = new Array(n).fill('.');
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

function checkLevelCompletion(gameArray) {
    // Check if all pellets have been eaten
    if (!gameArray.includes('.')) {
      level++; // Advance to the next level
      score += 10; // Bonus score for completing the level
      alert('Level ' + level + ' completed! Score: ' + score);
      // Reset the game for the next level
      gameArray = createGame(gameArray.length);
      console.log(gameArray);
      renderGame(gameArray);
    }
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
      checkLevelCompletion(gameArray);
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
// console.log('Initial game:', game);
// moveLeft(game);
// console.log('After moving left:', game);
// console.log('Score:', score);
// moveRight(game);
// console.log('After moving right:', game);
// console.log('Score:', score);

  
  function renderGame(game) {
    gameBoard = document.getElementById('gameBoard');
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

  function handleKeyPress(event) {
    gameBoard = document.getElementById('gameBoard');
    gameArray = gameBoard.textContent.split('');
  
    if (event.key === 'ArrowLeft') {
      moveLeft(gameArray);
    } else if (event.key === 'ArrowRight') {
      moveRight(gameArray);
    }
    console.log('Array: ', gameArray);
    console.log('Score: ', score);
  
    renderGame(gameArray); // Re-render the game board after moving Pacman
  }
  
  // Add an event listener for keydown to the document
  document.addEventListener('keydown', handleKeyPress);
  
  // Render the game with 10 pieces
  renderGame(game);
  