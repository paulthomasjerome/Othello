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
const processMove = (moveRow, moveColumn, playerState, boardState) => {
  // make local copy of the player state
  let player = playerState;

  // make local copy of the board state
  let board = deepCopy(boardState);

  // make local copy of the isGameOver state
  let isGameOver = false;

  // instantiate opponent
  const opponent = setOpponent(player);

  // instantiate piecesFlipped
  let piecesFlipped = false;

  // instantiate tryFlip
  let tryFlip = {};

  // instantiate adjacentRow
  let adjacentRow = 0;

  // instantiate adjacentColumn
  let adjacentColumn = 0;

  // for each distinct vertical translation we can apply
  for (let vertical = -1; vertical <= 1; vertical++) {
    // for each distinct horizontal translation we can apply
    for (let horizontal = -1; horizontal <= 1; horizontal++) {
      // store the value of the adjacent row index
      adjacentRow = moveRow + vertical;

      // store the value of the adjacent column index
      adjacentColumn = moveColumn + horizontal;

      // try to flip pieces
      tryFlip = flipPieces(
        adjacentRow,
        adjacentColumn,
        vertical,
        horizontal,
        player,
        opponent,
        board,
      );

      // if pieces were flipped
      if (tryFlip.piecesFlipped) {
        // update the boardState by replacing its contents with the contents of tryFlip.boardState
        board = deepCopy(tryFlip.boardState);

        // set piecesFlipped to true
        piecesFlipped = true;
      }
    }
  }

  // if pieces were flipped
  if (piecesFlipped) {
    // place the players piece in the spot they have chosen to play
    board[moveRow][moveColumn] = player;

    // set player value to the value of opponent if the opponent has at least one valid move to make
    player = checkForValidMoves(board, opponent);

    // if player is the player that just played, and that same player has no valid moves
    if (player === board[moveRow][moveColumn] && checkForValidMoves(board, player) === opponent) {
      // set isGameOver to true
      isGameOver = true;
    }

    // return the updated boardState, the appropriate player, and whether or not the game is over
    return {
      boardState: board,
      player,
      isGameOver,
    };
  }

  // no pieces were flipped, return the same game state values that were passed in
  return {
    boardState: board,
    player,
    isGameOver,
  };
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

  // moving out in the given direction
  for (let rowIndex = adjacentRow; rowIndex < 8; rowIndex += verticalTranslation) {
    for (let columnIndex = adjacentColumn; columnIndex < 8; columnIndex += horizontalTranslation) {
      // if we hit null
      if (boardState[rowIndex][columnIndex] === null) {
        // return returnObject
        return returnObject;
      }

      // if we hit our own piece
      if (boardState[rowIndex][columnIndex] === player) {
        // record the position of the piece we just hit in the return object
        returnObject.row = rowIndex;
        returnObject.column = columnIndex;

        // return the postion of the piece we just hit
        return returnObject;
      }
    }
  }

  // we hit the edge of the board, return returnObject
  return returnObject;
};
// initialize returnObject
// if the adjacent place in the given direction is not the opponent
  // return returnObject
// moving out in the given direction
  // if we hit the edge of the board
// return returnObject
  // if we hit null
// return returnObject
  // if we hit our own piece
// return the postion of the piece we just hit
//----------------------------------------------------------------------------------------------------------------------
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
      )) {
        // return true
        return true;
      }
    }
  }

  // return false
  return false;
};

// check if this move is on the board
// check if this move flips pieces
// for each direction extending from where the move was made
// if it would flip pieces
// return true
// return false

//----------------------------------------------------------------------------------------------------------------------

/**
 * getValidMoves
 *
 * takes in a board and a player and returns a boardState updated
 * with the positions of valid moves marked and a boolean of whether or not 
 * there is any
 */
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
// for each direction starting from the move
// check if pieces can be flipped in current direction
// if pieces can be flipped
// flip them
// return the new boardState
//----------------------------------------------------------------------------------------------------------------------
/**
 * sortByArrayDepth 
 * 
 * sorts two sets of indices by their relative depth in a matrix
 * @param {*} boardState 
 * @param {*} endPieceData 
 * @param {*} moveRow 
 * @param {*} moveColumn 
 */
const sortByArrayDepth = (row1, row2, column1, column2) => {
  if (row1 > row2 || column1 > column2) {
    return {
      shallowRow: row1,
      shallowColumn: column1,
      deepRow: row2,
      deepColumn: column2,
    };
  }
  if (row1 < row2 || column1 < column2) {
    return {
      shallowRow: row2,
      shallowColumn: column2,
      deepRow: row1,
      deepColumn: column1,
    };
  }
  return null;
};




/**
 * flipPiecesInOneDirection
 *
 * takes in the endPieces object and the players moveRow and moveColumn
 * for this turn and the boardStae and flips the pieces in a straight line
 * between them, returns the updated boardState
 *
 * @param {array[][]} boardState - the board state
 * @param {Object} endPieceData - Object containing the row and column index of the end piece
 * @param {number} moveRow - row index of the start piece
 * @param {number} moveColumn - column index of the start piece
 * 
 * @return {array[][]} board - the board after pieces have been flipped 
 */
const flipPiecesInOneDirection = (boardState, endPieceData, moveRow, moveColumn) => {
  let numberOfPiecesToFlip = 0;

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
    numberOfPiecesToFlip = endRow - startRow;
  } else {
    // record the number of pieces flipped for each column
    numberOfPiecesToFlip = endColumn - startColumn;
  }

  for (let index = 1; index <= numberOfPiecesToFlip; index++) {
  // console.log(board[startRow][startColumn]);
  // console.log(board[startRow + index][startColumn]);
  console.log(board[startRow][startColumn + index]);
  // console.log(board[startRow + index][startColumn + index]);

  // determine direction from coordinates
  // if the difference of hoizontals and difference of verticals is not 0
    if ((moveRow - endPieceData.row) !== 0 && (moveColumn - endPieceData.column !== 0)) {
    // this flip is diagonal
      // if this piece belongs to white
      if (board[startRow + index][startColumn + index] === 1) {
        // flip to black
        board[startRow + index][startColumn + index] = 0;
        // otherwise
      } else {
        // flip to white
        board[startRow + index][startColumn + index] = 1;
      }
    }
    // if the difference of horizontals is 0
    if (moveColumn - endPieceData.column === 0) {
    // this flip is vertical
      // if this piece belongs to white
      if (board[startRow + index][startColumn] === 1) {
        // flip to black
        board[startRow + index][startColumn] = 0;
        // otherwise
      } else {
        // flip to white
        board[startRow + index][startColumn] = 1;
      }
    }
    // if the difference of verticals is 0
    if (moveRow - endPieceData.row === 0) {
    // this flip is horizontal
      // if this piece belongs to white
      if (board[startRow][startColumn + index] === 1) {
        // flip to black
        board[startRow][startColumn + index] = 0;
      // otherwise
      } else {
        // flip to white
        board[startRow][startColumn + index] = 1;
      }
    }
  }
  // return the updated board
  return board;
};


//
//----------------------------------------------------------------------------------------------------------------------
/**
 * forEveryDirection
 * 
 * takes in a function and runs that function for every direction
 */
// for each direction
// run callback function


// export functions needed in other files
exports.flipPieces = flipPieces;
exports.processMove = processMove;
exports.deepCopy = deepCopy;
exports.checkForValidMoves = checkForValidMoves;
exports.countScore = countScore;
exports.flipPiecesInOneDirection = flipPiecesInOneDirection;