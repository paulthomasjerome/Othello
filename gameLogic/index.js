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

/**
  * wouldFlipPiecesInGivenDirection
  *
  * if a move on a board and one direciton would flip pieces in that direction
  *
  * given a boardstate, player, move, and direction
  *
  * return true if pieces would be flipped, false otherwise
  * @param {array[][]} boardState
  * @param {number} player
  * @param {number} moveRow
  * @param {number} moveColumn
  * @param {number} verticalTranslation
  * @param {number} horizontalTranslation
  * 
  * @return {Object} - the row and column of the piece that completes the flip or the initial returnObject
  */
const wouldFlipPiecesInGivenDirection = (
  boardState,
  player,
  moveRow,
  moveColumn,
  verticalTranslation,
  horizontalTranslation,
) => {

  // set the value of the opponent
  const opponent = setOpponent(player);

  // store value indices of the adjacent piece
  const adjacentRow = moveRow + verticalTranslation;
  const adjacentColumn = moveColumn + horizontalTranslation;

  // initialize returnObject
  const returnObject = {
    row: null,
    col: null,
  };

  // if the adjacent place in the given direction is not the opponent
  if (boardState[adjacentRow][adjacentColumn] !== opponent) {
    // return returnObject
    return returnObject;
  }
  //TODO fix the problem where we have infinite loop because verticalTranslation and horizontalTranslation can be zero or negative


  let nextRow = moveRow + verticalTranslation;
  let nextColumn = moveColumn + horizontalTranslation;

  // while the row and collumn we are checking are on the board and don't contain the players piece
  while (isOnBoard(nextRow, nextColumn) && boardState[nextRow][nextColumn] !== player) {
    // if we hit null
    if (boardState[nextRow][nextColumn] === null) {
      // return returnObject
      return returnObject;
    }

    // update the row and column we are checking
    nextRow += verticalTranslation;
    nextColumn += horizontalTranslation;
  }

  // record the row and column we hit last
  returnObject.row = nextRow;
  returnObject.column = nextColumn;

  // return updated returnObject
  return returnObject;
};

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
  // check if this move is on the board
  if (!isOnBoard(moveRow, moveColumn)) {
    return false;
  }
  // check if this move flips pieces
  // for each direction extending from where the move was made
  for (let verticalTranslation = -1; verticalTranslation <= 1; verticalTranslation++) {
    for (let horizontalTranslation = -1; horizontalTranslation <= 1; horizontalTranslation++) {
      // if it would flip pieces
      if (wouldFlipPiecesInGivenDirection(
        boardState,
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
 * 
 * @param {Array[][]} - the current boardState
 * @param {number} - player
 */
const getValidMoves = (boardState, player) => {
  let flag = false;
  const board = deepCopy(resetValidMoves(boardState));

  // for each index on the board
  board.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      // if this space is empty
      if (board[rowIndex][columnIndex] === null) {
        // if this is a valid move for the current player
        if (isValidMove(boardState, player, rowIndex, columnIndex)) {
          // set flag to true
          flag = true;
          // set this space to valid
          board[rowIndex][columnIndex] = 'valid';

          // return the boardState and the flag
          return { boardState: board, isAtLeastOneValidMove: flag };
        }
      }
    });
  });
  return { boardState: board, isAtLeastOneValidMove: flag };
};

/**
 * resetValidMoves
 *
 * takes in a boardState and returns a board with every valid 
 * move space reset to a null space and return the updated boardstate
 *
 * @param {Array[][]} boardState - the board we want to reset valid moves in
 *
 * @returns {array[][]} the updated boardState with each 'valid' space set to null
 */
const resetValidMoves = (boardState) => {
  const board = deepCopy(boardState);

  // for every space on the board
  board.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      // if this space has been marked as valid
      if (board[rowIndex][columnIndex] === 'valid') {
        // reset space to null
        board[rowIndex][columnIndex] = null;
      }
    });
  });
  return board;
};

/**
 * flipPiecesInAllDirections
 *
 * takes in the starting move, boardState, the player and uses that information
 * to return the updated boardState
 * 
 * @param {Array[][]} boardState - the current boardState
 * @param {number} player - the current player
 * @param {number} moveRow - the row index of the players move
 * @param {number} moveColumn - the column index of the players move
 */
const flipPiecesInAllDirections = (boardState, player, moveRow, moveColumn) => {
  // make local copy of boardState
  let board = deepCopy(boardState);

  // for each direction starting from the move
  for (let verticalTranslation = -1; verticalTranslation <= 1; verticalTranslation++) {
    for (let horizontalTranslation = -1; horizontalTranslation <= 1; horizontalTranslation++) {
      // if it exists, find the endPiece in this direction
      const endPieceData = wouldFlipPiecesInGivenDirection(boardState, player, moveRow, moveColumn, verticalTranslation, horizontalTranslation);

      // if pieces can be flipped in the current direction
      if (endPieceData.row && endPieceData.column) {
        // flip them
        board = deepCopy(flipPiecesInOneDirection(boardState, endPieceData, moveRow, moveColumn));
      }
    }
  }
  // return the new boardState
  return board;
};

/**
 * sortByArrayDepth
 *
 * sorts two sets of indices by their relative depth in a matrix, 
 * where [0][0] is considered the most shallow and [7][7] is the 
 * most deep
 *
 * @param {array[][]} boardState - the board state
 * @param {Object} endPieceData - Object containing the row and column index of the end piece
 * @param {number} moveRow - row index of the start piece
 * @param {number} moveColumn - column index of the start piece
 */
const sortByArrayDepth = (row1, row2, column1, column2) => {
  // if the first indices are less than the second indices
  if (row1 < row2 || column1 < column2) {
    // indices are in correct order
    return {
      startRow: row1,
      startColumn: column1,
      endRow: row2,
      endColumn: column2,
    };
  }
  // if the first indices are greater than the second indices
  if (row1 > row2 || column1 > column2) {
    // swap indices
    return {
      startRow: row2,
      startColumn: column2,
      deepRow: row1,
      deepColumn: column1,
    };
  }
  // error
  return {};
};

/**
 * flipPiecesInOneDirection
 *
 * takes in the endPieces object containing the endPiece row/column that we use to determine 
 * which direction to flip pieces, the players moveRow/moveColumn for this turn, and the 
 * boardState and flips the pieces in a straight linebetween them, returns the updated boardState
 *
 * @param {array[][]} boardState - the board state
 * @param {Object} endPieceData - Object containing the row and column index of the end piece
 * @param {number} moveRow - row index of the start piece
 * @param {number} moveColumn - column index of the start piece
 * 
 * @return {array[][]} board - the board after pieces have been flipped 
 */
const flipPiecesInOneDirection = (boardState, endPieceData, moveRow, moveColumn, player) => {
  // initialize helper variables
  let numberOfPiecesToFlip = 0;
  let rowIncrementScalar = 0;
  let columnIncrementScalar = 0;

  // set value of opponent
  const opponent = setOpponent(player);

  // make a local copy of the boardState
  const board = deepCopy(boardState);

  // determine which piece to start counting from and end on
  const {
    startRow,
    endRow,
    startColumn,
    endColumn,
  } = sortByArrayDepth(moveRow, endPieceData.row, moveColumn, endPieceData.column);

  // if this flip is vertical
  if (endColumn - startColumn === 0) {
    // record the number of pieces flipped from each row
    numberOfPiecesToFlip = (endRow - startRow - 1);
    // set row scalar to 1
    rowIncrementScalar = 1;
    // set column scalar to 0
    columnIncrementScalar = 0;
  }

  // if this flip is horizontal
  if (endRow - startRow === 0) {
    // record the number of pieces flipped for each column
    numberOfPiecesToFlip = (endColumn - startColumn - 1);
    // set row scalar to 0
    rowIncrementScalar = 0;
    // set column scalar to 1
    columnIncrementScalar = 1;
  }

  // if this flip is diagonal
  if (endRow - startRow !== 0 && endColumn - startColumn !== 0) {
    // record number of pieces flipped for each column or row
    numberOfPiecesToFlip = (endColumn - startColumn - 1);
    // set row scalar to 1
    rowIncrementScalar = 1;
    // set column scalar to 1
    columnIncrementScalar = 1;
  }

  // for each piece we need to flip
  for (let index = 0; index <= numberOfPiecesToFlip; index++) {
    if (board[startRow + (index * rowIncrementScalar)][startColumn + (index * columnIncrementScalar)] === opponent) {
      // flip to the players color
      board[startRow + (index * rowIncrementScalar)][startColumn + (index * columnIncrementScalar)] = player;
    }
  }
  // return the updated board
  return board;
};

/**
 * forEveryDirection
 * 
 * takes in a function and runs that function for every direction
 * 
 * @param {function} callback1 - the callback function we run for every direction
 */
const forEveryDirection = (callback) => {
  for (let verticalTranslation = -1; verticalTranslation <= 1; verticalTranslation++) {
    for (let horizontalTranslation = -1; horizontalTranslation <= 1; horizontalTranslation++) {
      // run callback function
      callback();
    }
  }
};

// export functions needed in other files
exports.deepCopy = deepCopy;
exports.countScore = countScore;
exports.flipPiecesInOneDirection = flipPiecesInOneDirection;
exports.sortByArrayDepth = sortByArrayDepth;
exports.flipPiecesInAllDirections = flipPiecesInAllDirections;
exports.wouldFlipPiecesInGivenDirection = wouldFlipPiecesInGivenDirection;
