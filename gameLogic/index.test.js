/* eslint-disable array-bracket-spacing */
/* eslint-disable no-multi-spaces */
const gameLogic = require('./index.js');
// const flipPieces = gameLogic.flipPieces;
const processMove = gameLogic.processMove;
const flipPiecesInOneDirection = gameLogic.flipPiecesInOneDirection;
const flipPiecesInAllDirections = gameLogic.flipPiecesInAllDirections;
const getEndPieceData = gameLogic.getEndPieceData;
const getValidMoves = gameLogic.getValidMoves;
const isValidMove = gameLogic.isValidMove;

// const board = [
//   [null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null],
// ];
// const boardAfter = [
//   [null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null],
// ];

describe('flipPiecesInOneDirection', () => {
  it('should flip pieces to the north', () => {
    const testBoardBefore = [
      [ null, null, null, null, null, null, null, null],
      [   1, null, null, null, null, null, null, null],
      [   0, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const endPieceData = {
      row: 2,
      column: 0,
    };

    const testBoardAfter = [
      [null, null, null, null, null, null, null, null],
      [   0, null, null, null, null, null, null, null],
      [   0, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    expect(flipPiecesInOneDirection(testBoardBefore, 0, endPieceData, 0, 0)).toEqual(testBoardAfter);
  });

  it('should flip pieces to the south', () => {
    const testBoardBefore = [
      [   0, null, null, null, null, null, null, null],
      [   1, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const endPieceData = {
      row: 0,
      column: 0,
    };

    const testBoardAfter = [
      [   0, null, null, null, null, null, null, null],
      [   0, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    expect(flipPiecesInOneDirection(testBoardBefore, 0, endPieceData, 2, 0)).toEqual(testBoardAfter);
  });

  it('should flip pieces to the east', () => {
    const testBoardBefore = [
      [null,    1,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const endPieceData = {
      row: 0,
      column: 2,
    };

    const testBoardAfter = [
      [null,    0,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    expect(flipPiecesInOneDirection(testBoardBefore, 0, endPieceData, 0, 0)).toEqual(testBoardAfter);
  });

  it('should flip pieces to the southeast', () => {
    const testBoardBefore = [
      [null, null, null, null, null, null, null, null],
      [null,    1, null, null, null, null, null, null],
      [null, null,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const endPieceData = {
      row: 2,
      column: 2,
    };

    const testBoardAfter = [
      [null, null, null, null, null, null, null, null],
      [null,    0, null, null, null, null, null, null],
      [null, null,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    expect(flipPiecesInOneDirection(testBoardBefore, 0, endPieceData, 0, 0)).toEqual(testBoardAfter);
  });

  it('should flip pieces to the northwest', () => {
    const testBoardBefore = [
      [   0, null, null, null, null, null, null, null],
      [null,    1, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const endPieceData = {
      row: 0,
      column: 0,
    };

    const testBoardAfter = [
      [   0, null, null, null, null, null, null, null],
      [null,    0, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    expect(flipPiecesInOneDirection(testBoardBefore, 0, endPieceData, 2, 2)).toEqual(testBoardAfter);
  });

  it('should flip pieces to the southwest', () => {
    const testBoardBefore = [
      [null, null, null, null, null, null, null, null],
      [null,    1, null, null, null, null, null, null],
      [   0, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const endPieceData = {
      row: 2,
      column: 0,
    };

    const testBoardAfter = [
      [null, null, null, null, null, null, null, null],
      [null,    0, null, null, null, null, null, null],
      [   0, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    expect(flipPiecesInOneDirection(testBoardBefore, 0, endPieceData, 0, 2)).toEqual(testBoardAfter);
  });

  it('should flip pieces to the northeast', () => {
    const testBoardBefore = [
      [null, null,    0, null, null, null, null, null],
      [null,    1, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const endPieceData = {
      row: 0,
      column: 2,
    };

    const testBoardAfter = [
      [null, null,    0, null, null, null, null, null],
      [null,    0, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    expect(flipPiecesInOneDirection(testBoardBefore, 0, endPieceData, 2, 0)).toEqual(testBoardAfter);
  });
  

  it('should flip multiple pieces in one direction', () => {
    const testBoardBefore = [
      [   0,    1,    1,    1,    1,    1,    1,    0],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const testBoardAfter = [
      [   0,    0,    0,    0,    0,    0,    0,    0],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    expect(flipPiecesInOneDirection(testBoardBefore, 0, {row: 0, column: 7}, 0, 0)).toEqual(testBoardAfter);
  });
});

describe('flipPiecesInAllDirections', () => {
  it('Should flip pieces in all directions if possible', () => {

    const board = [
      [null, null, null, null, null, null, null, null],
      [null,    0,    0,    0,    0,    0, null, null],
      [null,    0,    1,    1,    1,    0, null, null],
      [null,    0,    1, null,    1,    0, null, null],
      [null,    0,    1,    1,    1,    0, null, null],
      [null,    0,    0,    0,    0,    0, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null,    0,    0,    0,    0,    0, null, null],
      [null,    0,    0,    0,    0,    0, null, null],
      [null,    0,    0, null,    0,    0, null, null],
      [null,    0,    0,    0,    0,    0, null, null],
      [null,    0,    0,    0,    0,    0, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const flipPiecesResult = flipPiecesInAllDirections(3, 3, board, 0);

    expect(flipPiecesResult).toEqual(boardAfter);
  });

  it('Should handle flipping multiple pieces in the northwest corner', () => {
    const board = [
      [null,    1,    0, null, null, null, null, null],
      [   1,    1, null, null, null, null, null, null],
      [   0, null,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null,    0,    0, null, null, null, null, null],
      [   0,    0, null, null, null, null, null, null],
      [   0, null,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const flipPiecesResult = flipPiecesInAllDirections(0, 0, board, 0);
  
    expect(flipPiecesResult).toEqual(boardAfter);
  });

});

describe('processMove', () => {
  it('Should flip pieces in all directions if possible', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null,    0,    0,    0,    0,    0, null, null],
      [null,    0,    1,    1,    1,    0, null, null],
      [null,    0,    1, null,    1,    0, null, null],
      [null,    0,    1,    1,    1,    0, null, null],
      [null,    0,    0,    0,    0,    0, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null,    0,    0,    0,    0,    0, null, null],
      [null,    0,    0,    0,    0,    0, null, null],
      [null,    0,    0,    0,    0,    0, null, null],
      [null,    0,    0,    0,    0,    0, null, null],
      [null,    0,    0,    0,    0,    0, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const processMoveResult = processMove(3, 3, 0, board);

    expect(processMoveResult.boardState).toEqual(boardAfter);
  });

  it('Should handle moves on the east edge of the board', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null,    0,    1, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null,    0,    0,    0],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const processMoveResult = processMove(3, 7, 0, board);

    expect(processMoveResult.boardState).toEqual(boardAfter);
  });

  it('Should handle moves on the west edge of the board', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null,    1,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [   0,    0,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const processMoveResult = processMove(3, 0, 0, board);

    expect(processMoveResult.boardState).toEqual(boardAfter);
  });

  it('Should handle moves on the north edge of the board', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null,    1, null, null, null, null],
      [null, null, null,    0, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null,    0, null, null, null, null],
      [null, null, null,    0, null, null, null, null],
      [null, null, null,    0, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const processMoveResult = processMove(0, 3, 0, board);

    expect(processMoveResult.boardState).toEqual(boardAfter);
  });

  it('Should handle moves on the south edge of the board', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0, null, null, null, null],
      [null, null, null,    1, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0, null, null, null, null],
      [null, null, null,    0, null, null, null, null],
      [null, null, null,    0, null, null, null, null],
    ];

    const processMoveResult = processMove(7, 3, 0, board);

    expect(processMoveResult.boardState).toEqual(boardAfter);
  });

  it('Should flip pieces north and south simultaneously', () => {
    const board2 = [
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0, null, null, null, null],
      [null, null, null,    1, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    1, null, null, null, null],
      [null, null, null,    0, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0, null, null, null, null],
      [null, null, null,    0, null, null, null, null],
      [null, null, null,    0, null, null, null, null],
      [null, null, null,    0, null, null, null, null],
      [null, null, null,    0, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const processMoveResult = processMove(3, 3, 0, board2);

    expect(processMoveResult.boardState).toEqual(boardAfter);
  });

  it('Should end the game when a player has generated a stalemate', () => {
    const board2 = [
      [   0,    0,    0,    0,    0,    0,    0, null],
      [   0,    0,    0,    0,    0,    0,    0,    1],
      [   0,    0,    0,    0,    0,    0,    0,    0],
      [   0,    0,    0,    0,    0,    0,    0, null],
      [   0,    0,    0,    0,    0,    0, null, null],
      [   0,    0,    0,    0,    0,    0, null,    1],
      [   0,    0,    0,    0,    0,    0,    0, null],
      [   0,    0,    0,    0,    0,    0,    0,    0],
    ];

    const processMoveResult = processMove(0, 7, 0, board2);

    expect(processMoveResult.isGameOver).toBe(true);
  });
});

describe('getEndPieceData', () => {
  it('should return an end piece from the north', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null,    1, null, null, null, null],
      [null, null, null,    0, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const wouldFlipResult = getEndPieceData(board, 0, 0, 3, 1, 0);

    expect(wouldFlipResult.row).toEqual(2);
    expect(wouldFlipResult.column).toEqual(3);
  });

  it('should return an end piece from the south', () => {
    const board = [
      [null, null, null,    0, null, null, null, null],
      [null, null, null,    1, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const wouldFlipResult = getEndPieceData(board, 0, 2, 3, -1, 0);

    expect(wouldFlipResult.row).toEqual(0);
    expect(wouldFlipResult.column).toEqual(3);
  });

  it('should return an end piece from the west', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null,    0,    1, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const wouldFlipResult = getEndPieceData(board, 0, 1, 4, 0, -1);

    expect(wouldFlipResult.row).toEqual(1);
    expect(wouldFlipResult.column).toEqual(2);
  });

  it('should return an end piece from the east', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const wouldFlipResult = getEndPieceData(board, 0, 1, 2, 0, 1);

    expect(wouldFlipResult.row).toEqual(1);
    expect(wouldFlipResult.column).toEqual(4);
  });

  it('should return an endPiece from the southeast', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null,    1, null, null, null, null],
      [null, null, null, null,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const wouldFlipResult = getEndPieceData(board, 0, 0, 2, 1, 1);

    expect(wouldFlipResult.row).toEqual(2);
    expect(wouldFlipResult.column).toEqual(4);
  });

  it('should return an endPiece from the southwest', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null,    1, null, null, null, null],
      [null, null,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const wouldFlipResult = getEndPieceData(board, 0, 0, 4, 1, -1);

    expect(wouldFlipResult.row).toEqual(2);
    expect(wouldFlipResult.column).toEqual(2);
  });

  it('should return an endPiece from the northwest', () => {
    const board = [
      [null, null,    0, null, null, null, null, null],
      [null, null, null,    1, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const wouldFlipResult = getEndPieceData(board, 0, 2, 4, -1, -1);

    expect(wouldFlipResult.row).toEqual(0);
    expect(wouldFlipResult.column).toEqual(2);
  });

  it('should return an endPiece from the northeast', () => {
    const board = [
      [null, null, null, null,    0, null, null, null],
      [null, null, null,    1, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const wouldFlipResult = getEndPieceData(board, 0, 2, 2, -1, 1);

    expect(wouldFlipResult.row).toEqual(0);
    expect(wouldFlipResult.column).toEqual(4);
  });

  it('should handle the case where there is no trasnlation', () => {
    const board = [
      [null, null, null, null,    0, null, null, null],
      [null, null, null,    1, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const wouldFlipResult = getEndPieceData(board, 0, 2, 2, 0, 0);

    expect(wouldFlipResult.row).toEqual(null);
    expect(wouldFlipResult.column).toEqual(null);
  });

  it('should return diagonal endpiece in the northwest corner', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null,    1, null, null, null, null, null, null],
      [null, null,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const wouldFlipResult = getEndPieceData(board, 0, 0, 0, 1, 1);

    expect(wouldFlipResult.row).toEqual(2);
    expect(wouldFlipResult.column).toEqual(2);
  });

});

describe('getValidMoves', () => {
  it('should return false when there are no valid moves', () => {

    const board = [
      [null,    1, null,    1, null,    1, null, null],
      [null, null, null, null, null, null, null, null],
      [null,    1, null,    0, null,    1, null, null],
      [null, null, null, null, null, null, null, null],
      [null,    1, null,    1, null,    1, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    expect(getValidMoves(board, 0).isAnyValidMoves).toBe(false);
  });

  it('should return true when there is at least one valid move', () => {

    const board = [
      [null, null, null, null, null,    0,    1, null],
      [null, null, null, null, null,    0,    0,    0],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    expect(getValidMoves(board, 0).isAnyValidMoves).toBe(true);
  });

  it('should return true when there is multiple valid moves', () => {

    const board = [
      [null, null, null, null, null,    0,    1, null],
      [null, null, null, null, null,    0,    0,    0],
      [null, null, null, null, null, null,    1, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    expect(getValidMoves(board, 0).isAnyValidMoves).toBe(true);
  });
});