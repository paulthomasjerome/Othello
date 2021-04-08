/**
 * setOpponent
 *
 * Set the value of the opponent to be the oppisite of the player and
 * return that value
 *
 * @param {number} player - the current player, either 0 or 1
 *
 * @return {number} opponent - opponent which is opposite of the passed in player
 */
const setOpponent = (player) => {
  // set opponent to be the oppoiste value of player
  const opponent = (player === 0) ? 1 : 0;

  // return opponent
  return opponent;
};

/**
 * countScore
 *
 * Counts the score at the end of the game and returns a message to the user informing
 * them of which player won the game and by how much, it will also tell the user
 * if there is a stalemate
 *
 * @param {array[][]} gameOverBoard - the board at the point when the game ends
 *
 * @returns {string} - a message to the user to inform them of the end game score or
 * if there was a stalemate
 */
const countScore = (gameOverBoard) => {
  // instantiate scoreForBlack
  let scoreForBlack = 0;

  // instantiate scoreForWHite
  let scoreForWhite = 0;

  // for each row on the gameOverBoard
  gameOverBoard.forEach((row, rowIndex) => {
    // for each column on the gameOverBoard
    row.forEach((column, columnIndex) => {
      // if black is at the current rowIndex and columnIndex
      if (gameOverBoard[rowIndex][columnIndex] === 0) {
        // increment blacks score by 1
        scoreForBlack++;
      }
      // if black is at the current rowIndex and columnIndex
      if (gameOverBoard[rowIndex][columnIndex] === 1) {
        // increment whites score by 1
        scoreForWhite++;
      }
    });
  });

  // if black has a higher score than white
  if (scoreForBlack > scoreForWhite) {
    // let the user know and by how much
    return `Black Wins By ${scoreForBlack - scoreForWhite} Points!`;
  }

  // if white has a higher score than black
  if (scoreForWhite > scoreForBlack) {
    // let the user know and by how much
    return `White Wins By ${scoreForWhite - scoreForBlack} Points!`;
  }

  // black and white have the same score
  return 'Stalemate';
};

/**
 * deepCopy
 *
 * Creates a deep copy of the inputArray and returns the copy
 *
 * @param {array[][]} inputArray - a 2 dimensional array
 * 
 * @returns {array[][]} outputArray - a 2 dimensional array that is a deep copy
 * of the inputArray
 */
const deepCopy = (inputArray) => {
  // instantiate the outputArray
  const outputArray = [];

  // for each subarray in the inputArray
  for (let index = 0; index < inputArray.length; index++) {
    /*
    * store a shallow copy of the inputArray at this index in the
    * output array at this index
    */
    outputArray[index] = inputArray[index].slice();
  }

  // return the filled outputArray
  return outputArray;
};

/**
 * flipPieces
 *
 * Flip pieces on the board if possible and record whether or not
 * pieces were flipped
 *
 *
 * @param {number} startRow the row index of the first position to check for an opponents piece
 * @param {number} startColumn the column index of the first position to check for the players piece
 * @param {number} vertical helper to translate the row index when checking for the players piece
 * @param {number} horizontal helper to translate the column index when checking for the players piece
 * @param {number} player the current player
 * @param {number} opponent the current opponent
 * @param {array[][]} board the current board state
 *
 * @returns {Object} - whether or not pieces are flipped and (if pieces are flipped) the
 * updated board state
 */
const flipPieces = (startRow, startColumn, vertical, horizontal, player, opponent, inBoard) => {
  const board = deepCopy(inBoard);
  const returnObject = { boardState: board, piecesFlipped: false };
  // instantiate flipPositions
  const flipPositions = [];

  // store the first space we need to check in the "passed in" direction (i.e. vertical/horizontal)
  let row = startRow;
  let column = startColumn;

  // if the current move is not on the inBoard
  if (!isOnBoard(row, column)) {
    // return initial returnObject
    return returnObject;
  }

  // if the adjacent piece belongs to the current player
  if (board[row][column] === player) {
    // return initial returnObject
    return returnObject;
  }

  // while we have not seen the current players piece
  while (board[row][column] !== player) {
    // if we have not seen the opponents piece before we see a blank space
    if (board[row][column] === null) {
      // return: we cannot flip pieces in the passed in direction and the boardState is unchanged
      return returnObject;
    }

    // if we see the opponents piece
    if (board[row][column] === opponent) {
      // record the current position for our output
      flipPositions.push({
        row,
        column,
      });
    }

    // update the row index we are checking
    row += vertical;
    // update the column index we are checking
    column += horizontal;

    // if we go off the board after we update the indices we are checking
    if (row > 7 || column > 7 || row < 0 || column < 0) {
      // return we cannot flip pieces in this direction and the boardState is unchanged
      return returnObject;
    }
  }

  // for each of the positions we need to flip at
  for (let index = 0; index < flipPositions.length; index++) {
    // flip the pieces to the current players color
    returnObject.boardState[flipPositions[index].row][flipPositions[index].column] = player;
  }

  // record that we were able to flip pieces
  returnObject.piecesFlipped = true;

  // return that pieces were flipped and return the updated board state
  return returnObject;
};

/**
 * checkForValidMoves
 *
 * checks null squares untill it finds a valid move,if it finds a valid
 * move it returns the passed in boardState/player, if it iterates
 * through the whole boardState but does not find a valid move it returns
 * the boardState and the oppisite player
 *
 * @param {array[][]} boardState - the updated board state
 * @param {boolean} player - the next player
 *
 * @returns {Object} - the board state and the correct player
 */
const checkForValidMoves = (boardState, player) => {
  // set the value of the players opponent
  const opponent = setOpponent(player);

  // for each row on the board
  for (let row = 0; row <= 7; row++) {
    // for each column on the board
    for (let column = 0; column <= 7; column++) {
      // if the space we are currently checking is EMPTY
      if (boardState[row][column] === null) {
        // for each distinct vertical translation we can apply
        for (let vertical = -1; vertical <= 1; vertical++) {
          // for each distinct horizontal translation we can apply
          for (let horizontal = -1; horizontal <= 1; horizontal++) {
            // if pieces were flipped in any particular direction
            if (flipPieces(
              row + vertical,
              column + horizontal,
              vertical,
              horizontal,
              player,
              opponent,
              boardState,
            ).piecesFlipped) {
              // return the passed in player because they have at least one valid move
              return player;
            }
          }
        }
      }
    }
  }

  // player has no valid moves, return this players opponent
  return opponent;
};

/**
 * processMove
 *
 * The purpose of this function is to determine if the player has made a valid move, and if
 * the move is indeed valid, it will implement that move and transfer control to the appropriate
 * player. If the players move is not valid, it forces the original player to try again
 *
 * @param {number} moveRow the row position of the space chosen by the current player
 * @param {number} moveColumn the column position of the space chosen by the current player
 * @param {number} playerState the current player state
 * @param {array[][]} boardState the current board state
 *
 * @returns {Object} the next player, boardState, and isGameOver status
 */
// const processMove = (moveRow, moveColumn, playerState, boardState) => {
//   // make local copy of the player state
//   let player = playerState;

//   // make local copy of the board state
//   let board = deepCopy(boardState);

//   // make local copy of the isGameOver state
//   let isGameOver = false;

//   // instantiate opponent
//   const opponent = setOpponent(player);

//   // instantiate piecesFlipped
//   let piecesFlipped = false;

//   // instantiate tryFlip
//   let tryFlip = {};

//   // instantiate adjacentRow
//   let adjacentRow = 0;

//   // instantiate adjacentColumn
//   let adjacentColumn = 0;

//   // for each distinct vertical translation we can apply
//   for (let vertical = -1; vertical <= 1; vertical++) {
//     // for each distinct horizontal translation we can apply
//     for (let horizontal = -1; horizontal <= 1; horizontal++) {
//       // store the value of the adjacent row index
//       adjacentRow = moveRow + vertical;

//       // store the value of the adjacent column index
//       adjacentColumn = moveColumn + horizontal;

//       // try to flip pieces
//       tryFlip = flipPieces(
//         adjacentRow,
//         adjacentColumn,
//         vertical,
//         horizontal,
//         player,
//         opponent,
//         board,
//       );

//       // if pieces were flipped
//       if (tryFlip.piecesFlipped) {
//         // update the boardState by replacing its contents with the contents of tryFlip.boardState
//         board = deepCopy(tryFlip.boardState);

//         // set piecesFlipped to true
//         piecesFlipped = true;
//       }
//     }
//   }

//   // if pieces were flipped
//   if (piecesFlipped) {
//     // place the players piece in the spot they have chosen to play
//     board[moveRow][moveColumn] = player;

//     // set player value to the value of opponent if the opponent has at least one valid move to make
//     player = checkForValidMoves(board, opponent);

//     // if player is the player that just played, and that same player has no valid moves
//     if (player === board[moveRow][moveColumn] && checkForValidMoves(board, player) === opponent) {
//       // set isGameOver to true
//       isGameOver = true;
//     }

//     // return the updated boardState, the appropriate player, and whether or not the game is over
//     return {
//       boardState: board,
//       player,
//       isGameOver,
//     };
//   }

//   // no pieces were flipped, return the same game state values that were passed in
//   return {
//     boardState: board,
//     player,
//     isGameOver,
//   };
// };


/**
 * isOnBoard
 *
 * @param {number} moveRow,
 * @param {number} moveColumn,
 *
 * @returns {boolean} - true if the moveRow index or the moveCol index are on
 * the board, false otherwise
 */
const isOnBoard = (moveRow, moveColumn) => {
  return !(moveRow >= 8 || moveColumn >= 8 || moveRow <= -1 || moveColumn <= -1);
};

const processMove = (moveRow, moveColumn, playerState, boardState) => {
  let player = playerState;

  let board = deepCopy(boardState);

  let isGameOver = false;

  const opponent = setOpponent(player);

  if(isValidMove(board, player, moveRow, moveColumn)) {
    board[moveRow][moveColumn] = player;
    board = deepCopy(flipPiecesInAllDirections(moveRow, moveColumn, board, player));
    player = opponent;
    return {
      boardState: board,
      player,
      isGameOver,
    }
  }
}

/**
  * getEndPieceData - takes in the board, current player, player move indices,
  * and direction to check for an end piece and returns an object containing
  * the indices of the players end piece in that given direction
  *
  * @param {array[][]} boardState the current state of the board at the time the function is called
  * @param {number} player the current player
  * @param {number} moveRow the row index of the players move
  * @param {number} moveColumn the column index of the players move
  * @param {number} verticalTranslation used to determine vertical direction
  * @param {number} horizontalTranslation used to determine horizontal direction
  * 
  * @return {Object} - the row and column of the piece that completes the flip or the initial returnObject
  */
const getEndPieceData = (
  boardState,
  player,
  moveRow,
  moveColumn,
  verticalTranslation,
  horizontalTranslation,
) => {

  // initialize endPieceData 
  const endPieceData = {
    row: null,
    column: null
  }

  // make a clean copy of the board
  let board = deepCopy(boardState);
  
  // store the next indices in the given direction
  let nextRow = moveRow + verticalTranslation;
  let nextColumn = moveColumn + horizontalTranslation;

  // store the identity of the opponent 
  const opponent = setOpponent(player);
  // if the adjacent piece does not belong to opponent
  if (board[nextRow][nextColumn] !== opponent) {
    return endPieceData;
  }

  // while we have not seen a valid end piece
  while (board[nextRow][nextColumn] !== player) {

    // if we hit an empty space or move past the edge of the board
    if (board[nextRow][nextColumn] === null) {
      // return that no end piece was found
      return endPieceData;
    }

    // move indices to the next row/column in this direction
    nextRow += verticalTranslation;
    nextColumn += horizontalTranslation;
  }

  // store and return the players end piece
  endPieceData.row = nextRow;
  endPieceData.column = nextColumn;
  return endPieceData;
}

/**
 * isValidMove
 *
 * figure out if a certain move is valid for a given player and 
 * a given boardState
 *
 * @param {array[][]} boardState
 * @param {number} player
 * @param {number} moveRow
 * @param {number} moveColumn
 * 
 * @return {boolean}
 */
const isValidMove = (boardState, player, moveRow, moveColumn) => {
  let board = deepCopy(boardState);
  // check if this move is on the board
  if (!isOnBoard(moveRow, moveColumn)) {
    return false;
  }
  // check if this move flips pieces
  // for each direction extending from where the move was made
  for (let verticalTranslation = -1; verticalTranslation <= 1; verticalTranslation++) {
    for (let horizontalTranslation = -1; horizontalTranslation <= 1; horizontalTranslation++) {
      // if it would flip pieces
      if (getEndPieceData(
        board,
        player,
        moveRow,
        moveColumn,
        verticalTranslation,
        horizontalTranslation,
      ).row) {
        // return true
        return true;
      }
    }
  }

  // return false
  return false;
};

/**
 * getValidMoves
 *
 * takes in a board and a player and returns a boardState updated
 * with the positions of valid moves marked and a boolean of whether or not 
 * there is any
 */
const getValidMoves = (boardState, player) => {
  // make a copy of the boardState
  let board = deepCopy(boardState);

  // initialize valid moves flag
  let isAnyValidMoves = false;

  // for every space on the board
  for(let row = 0; row < 8; row++) {
    for(let column = 0; column < 8; column++) {
      // if this space is empty
      if(board[row][column] === null) {
        // if this is a valid move for the current player
        if(isValidMove(board, player, row, column)) {
          // mark space as valid and set flag to true
          board[row][column] = 2;
          isAnyValidMoves = true;
        }
      }
    }
  }
  // return the updated board and whether or not there were valid moves
  return {
    board,
    isAnyValidMoves
  }
}
// make a clean copy of the board
// initialize a flag to indicate if there are any valid moves
// for every space on the board
// if this space is empty
// if this is a valid move for the current player
// mark this space as valid
// set flag to be true
// return the boardstate and the flag
//----------------------------------------------------------------------------------------------------------------------
/**
 * flipPiecesInAllDirections
 *
 * takes in the starting move, boardState, the player and uses that information
 * to return the updated boardState
 */
const flipPiecesInAllDirections = (moveRow, moveColumn, boardState, player) => {
    let board = deepCopy(boardState);
    let endPieceData = {};
    // for each distinct vertical translation we can apply
    for (let vertical = -1; vertical <= 1; vertical++) {
      // for each distinct horizontal translation we can apply
      for (let horizontal = -1; horizontal <= 1; horizontal++) {
        console.log(board);
        
        endPieceData = getEndPieceData(board, player, moveRow, moveColumn, vertical, horizontal);

        if(endPieceData.row) {
          board = deepCopy(flipPiecesInOneDirection(board, player, endPieceData, moveRow, moveColumn));
        }
      }
    }
    return board;
}

/**
 * flipPiecesInOneDirection - takes in the endPieces object, the players moveRow and moveColumn
 * for this turn, and the boardState and flips the pieces in a straight line
 * between them, returns the updated boardState
 *
 * @param {array[][]} boardState - the board state
 * @param {Object} endPieceData - Object containing the row and column index of the end piece
 * @param {number} moveRow - row index of the start piece
 * @param {number} moveColumn - column index of the start piece
 * 
 * @return {array[][]} board - the board after pieces have been flipped 
 */
const flipPiecesInOneDirection = (boardState, player, endPieceData, moveRow, moveColumn) => {
  // make a local copy of the boardState
  let board = deepCopy(boardState);

  // get and store the direction to flip pieces in
  const flipDirection = getFlipDirecion(moveRow, moveColumn, endPieceData.row, endPieceData.column);

  // get and store the number of pieces to flip
  const numberOfPiecesToFlip = getNumberOfPiecesToFlip(moveRow, moveColumn, endPieceData.row, endPieceData.column);

  // for all pieces that need to be flipped
  for(let index = 1; index <= numberOfPiecesToFlip; index++) {
    // flip in the appropriate direction 
    switch(flipDirection) {
      case 'south': 
        board[moveRow + index][moveColumn] = player;
        break;
      case 'north':
        board[moveRow - index][moveColumn] = player;
        break;
      case 'east':
        board[moveRow][moveColumn + index] = player;
        break;
      case 'west':
        board[moveRow][moveColumn - index] = player;
        break;
      case 'northeast':
        board[moveRow - index][moveColumn + index] = player;
        break;
      case 'northwest':
        board[moveRow - index][moveColumn - index] = player;
        break;
      case 'southeast':
        board[moveRow + index][moveColumn + index] = player;
        break;
      case 'southwest':
        board[moveRow + index][moveColumn - index] = player;
        break;
      default:
        break;
    }
  }
  // return the updated board
  return board;
}

/**
 * getFlipDirection - get the direction to flip pieces from the indices of the end pieces
 * that make it flippable
 * @param {*} moveRow 
 * @param {*} moveColumn 
 * @param {*} endPieceRow 
 * @param {*} endPieceColumn 
 * @returns 
 */
const getFlipDirecion = (moveRow, moveColumn, endPieceRow, endPieceColumn) => {
  // if this flip is vertical
  if (moveColumn === endPieceColumn) {
    // if this flip is south
    if (moveRow < endPieceRow) {
      return 'south';
    }
    // if this flip is north
    if (moveRow > endPieceRow) {
      return 'north';
    }
  }
  // if this flip is horizontal
  else if (moveRow === endPieceRow) {
    // if this flip is east
    if (moveColumn < endPieceColumn) {
      return 'east';
    }
    // if this flip is west
    else if (moveColumn > endPieceColumn) {
      return 'west';
    }
  }
  // if this move is diagonal
  else if(moveRow !== endPieceRow && moveColumn !== endPieceColumn) {
    // if this flip is northeast
    if (moveRow > endPieceRow && moveColumn < endPieceColumn) {
      return 'northeast';
    }
    // if this flip is northwest
    else if (moveRow > endPieceRow && moveColumn > endPieceColumn) {
      return 'northwest';
    }
    // if this flip is southeast
    else if (moveRow < endPieceRow && moveColumn < endPieceColumn) {
      return 'southeast';
    }
    // if this flip is southwest
    else if (moveRow < endPieceRow && moveColumn > endPieceColumn) {
      return 'southwest';
    }
  }
}

/**
 * getNumberOfPiecesToFlip - get the number of flippable pieces from the difference in end piece
 * indices
 * 
 * @param {*} moveRow 
 * @param {*} moveColumn 
 * @param {*} endPieceRow 
 * @param {*} endPieceColumn 
 * @returns 
 */
const getNumberOfPiecesToFlip = (moveRow, moveColumn, endPieceRow, endPieceColumn) => {
  // find the magnitude of the difference in row index
  const rowDifferenceMagnitude = Math.abs(moveRow - endPieceRow);
  const columnDifferenceMagnitude = Math.abs(moveColumn - endPieceColumn);

  // find the greater of the index difference magnitudes and subtract 1 to get number of pieces to flip
  const numberOfPiecesToFlip = Math.max(rowDifferenceMagnitude, columnDifferenceMagnitude) - 1;
  
  // return the number of pieces to flip
  return numberOfPiecesToFlip;

}

// export functions needed in other files
exports.flipPieces = flipPieces;
exports.processMove = processMove;
exports.deepCopy = deepCopy;
exports.checkForValidMoves = checkForValidMoves;
exports.countScore = countScore;
exports.flipPiecesInOneDirection = flipPiecesInOneDirection;
exports.flipPiecesInAllDirections = flipPiecesInAllDirections;
exports.isValidMove = isValidMove;
exports.getEndPieceData = getEndPieceData;
exports.getFlipDirecion = getFlipDirecion;