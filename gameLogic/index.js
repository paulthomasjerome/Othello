// instantiate the first player's color, black is 0 and white is 1
// let currentPlayer = 0;

/**
 * The purpose of this function is to determine if the player has made a valid move, and if
 * the move is indeed valid, it will implement that move
 *
 * @param {number} moveRow the row position of the space chosen by the current player
 * @param {number} moveCol the column position of the space chosen by the current player
 * @param {number} player the current player
 * @param {array[][]} board the current board state
 */
const processMove = (moveRow, moveCol, player, board, totalValidMoves) => {
  // set the current opponent
  const opponent = setOpponent(player);

  let piecesFlipped = false;

  let tryFlip = {};

  // check all directions
  for (let vertical = -1; vertical <= 1; vertical++) {
    for (let horizontal = -1; horizontal <= 1; horizontal++) {
      // get the state of the 
      tryFlip = flipPieces(moveRow, moveCol, vertical, horizontal, player, opponent, board);

      // if we find any valid flips
      if (tryFlip.piecesFlipped) {
        board = deepCopy(tryFlip.boardState);
        piecesFlipped = true;
      }
    }
  }

  // if pieces were flipped
  if (piecesFlipped) {
    // this move is valid and the piece can be placed where the player has chosen
    board[moveRow][moveCol] = player;

    totalValidMoves++;

    player = checkForValidMoves(board, opponent);
    console.log('total valid moves: ' + totalValidMoves);

    return { boardState: board, player, totalValidMoves };

  // if no pieces were flipped
  } else {
    return { boardState: board, player, totalValidMoves };
  }
};

/**
 * The purpose of this function is flip pieces on the board if possible and inform the client
 * or user that the pieces were flipped
 *
 * It starts at the position the player places at, then moves out in one direction looking for:
 *  - The current players piece, in which place is stops looking
 *  - The opponents piece, in which case it records it to flip if it's a valid move
 *  - A blank space/the edge of the board, in which case it also stops looking
 *
 * @param {number} startRow the row index of the first position to check for an opponents piece
 * @param {number} startCol the column index of the first position to check for the players piece
 * @param {number} vertical helper to translate the row index when checking for the players piece
 * @param {number} horizontal helper to translate the column index when checking for the players piece
 * @param {number} player the current player
 * @param {number} opponent the current opponent
 * @param {array[][]} board the current board state
 *
 * @return {boolean} Return true if pieces are flipped and false otherwise
 */
const flipPieces = (startRow, startCol, vertical, horizontal, player, opponent, inBoard) => {
  const board = deepCopy(inBoard);
  const returnObject = { boardState: board, piecesFlipped: false };
  // instantiate flipPositions
  const flipPositions = [];

  // store the first space we need to check in the "passed in" direction (i.e. vertical/horizontal)
  let row = startRow + vertical;
  let col = startCol + horizontal;

  // if the current move is not on the inBoard
  if (row === 8 || col === 8 || row === -1 || col === -1) {
    return returnObject;
  }

  // if the adjacent piece belongs to the current player
  if (board[row][col] === player) {
    return returnObject;
  }

  // while we have not seen the players color
  while (board[row][col] !== player) {
    // if we have not seen the opponents piece before we see a blank space
    if (board[row][col] === null) {
      // we cannot flip pieces in the passed in direction and the boardState is unchanged
      return returnObject;
    }

    // if we see the opponents piece
    if (board[row][col] === opponent) {
      // record the current position for our output
      flipPositions.push({
        row: row,
        col: col
      });
    }

    // update the position we are checking
    row += vertical;
    col += horizontal;

    if (row > 7 || col > 7 || row < 0 || col < 0) {
      return returnObject;
    }
  }

  returnObject.piecesFlipped = true;

  // for each of the positions we need to flip at
  for (let i = 0; i < flipPositions.length; i++) {
    // flip the pieces to the current players color
    returnObject.boardState[flipPositions[i].row][flipPositions[i].col] = player;
  }

  return returnObject;
};

const deepCopy = (inputArray) => {
  const outputArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    outputArray[i] = inputArray[i].slice();
  }

  return outputArray;
};

/**
 * checkForValidMoves
 * 
 * checks null squares untill it finds a valid move,
 * if it finds a valid move it returns the passed in boardState
 * and the player that was passed in, if it iterates through the
 * whole boardState but does not find a valid move it returns the
 * boardState and the oppisite player
 * 
 * @param {array[][]} boardState - the updated board state
 * @param {bool} player - the next player
 * 
 * @returns {Object} - the board state and the correct player
 */
const checkForValidMoves = (boardState, player) => {
  const opponent = setOpponent(player);

  for (let row = 0; row <= 7; row++) {
    for (let col = 0; col <= 7; col++) {
      if (boardState[row][col] === null) {
        for (let vertical = -1; vertical <= 1; vertical++) {
          for (let horizontal = -1; horizontal <= 1; horizontal++) {
            if (flipPieces(row, col, vertical, horizontal, player, opponent, boardState).piecesFlipped) {
              return player;
            }
          }
        }
      }
    }
  }

  return opponent;
};

const setOpponent = (player) => {
  const opponent = (player === 0) ? 1 : 0;

  return opponent;
};

const countScore = (gameOverBoard) => {
  let scoreForBlack = 0;
  let scoreForWhite = 0;

  gameOverBoard.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if (gameOverBoard[rowIndex][columnIndex] === 0) {
        scoreForBlack++;
      }
      if (gameOverBoard[rowIndex][columnIndex] === 1) {
        scoreForWhite++;
      }
    });
  });

  if (scoreForBlack > scoreForWhite) {
    return 'Black Wins!';
  }

  if (scoreForWhite > scoreForBlack) {
    return 'White Wins';
  }

  return 'Stalemate';
};

// module.exports = processMove;
exports.flipPieces = flipPieces;
exports.processMove = processMove;
exports.deepCopy = deepCopy;
exports.checkForValidMoves = checkForValidMoves;
exports.countScore = countScore;
