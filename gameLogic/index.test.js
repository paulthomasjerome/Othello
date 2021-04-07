/* eslint-disable array-bracket-spacing */
/* eslint-disable no-multi-spaces */
const gameLogic = require('./index.js');
// const flipPieces = gameLogic.flipPieces;
const processMove = gameLogic.processMove;
const flipPiecesInOneDirection = gameLogic.flipPiecesInOneDirection;
const flipPiecesInAllDirections = gameLogic.flipPiecesInAllDirections;
const wouldFlipPiecesInGivenDirection = gameLogic.wouldFlipPiecesInGivenDirection;

// describe('flipPiecesInOneDirection', () => {
//   it('should flip pieces vertically if there are pieces to flip vertically', () => {
//     const testBoardBefore = [
//       [   0, null, null, null, null, null, null, null],
//       [   1, null, null, null, null, null, null, null],
//       [   0, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const endPieceData = {
//       row: 2,
//       column: 0,
//     };

//     const testBoardAfter = [
//       [   0, null, null, null, null, null, null, null],
//       [   0, null, null, null, null, null, null, null],
//       [   0, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     expect(flipPiecesInOneDirection(testBoardBefore, endPieceData, 0, 0)).toEqual(testBoardAfter);
//   });

//   it('should flip pieces horizontally if there are pieces to flip', () => {
//     const testBoardBefore = [
//       [   0,    1,    0, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const endPieceData = {
//       row: 0,
//       column: 2,
//     };

//     const flipPiecesInOneDirectionResult = flipPiecesInOneDirection(testBoardBefore, endPieceData, 0, 0);
//     const testBoardAfter = [
//       [   0,    0,    0, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     expect(flipPiecesInOneDirectionResult).toEqual(testBoardAfter);
//   });

//   it('should flip pieces diagonally if there are pieces to flip', () => {
//     const testBoardBefore = [
//       [   0, null, null, null, null, null, null, null],
//       [null,    1, null, null, null, null, null, null],
//       [null, null,    0, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const endPieceData = {
//       row: 2,
//       column: 2,
//     };

//     const testBoardAfter = [
//       [   0, null, null, null, null, null, null, null],
//       [null,    0, null, null, null, null, null, null],
//       [null, null,    0, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     expect(flipPiecesInOneDirection(testBoardBefore, endPieceData, 0, 0)).toEqual(testBoardAfter);
//   });

//   it('should flip multiple pieces in one direction', () => {
//     const testBoardBefore = [
//       [   0,    1,    1,    1,    1,    1,    1,    0],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const endPieceData = {
//       row: 0,
//       column: 7,
//     };

//     const testBoardAfter = [
//       [   0,    0,    0,    0,    0,    0,    0,    0],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     expect(flipPiecesInOneDirection(testBoardBefore, endPieceData, 0, 0)).toEqual(testBoardAfter);
//   });
// });

// describe('flipPiecesInAllDirections', () => {
//   console.log(";alskdj;alksdfj");
//   it('Should flip pieces in all directions if possible', () => {

//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null,    0,    0,    0,    0,    0, null, null],
//       [null,    0,    1,    1,    1,    0, null, null],
//       [null,    0,    1, null,    1,    0, null, null],
//       [null,    0,    1,    1,    1,    0, null, null],
//       [null,    0,    0,    0,    0,    0, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null,    0,    0,    0,    0,    0, null, null],
//       [null,    0,    0,    0,    0,    0, null, null],
//       [null,    0,    0,    0,    0,    0, null, null],
//       [null,    0,    0,    0,    0,    0, null, null],
//       [null,    0,    0,    0,    0,    0, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const flipPiecesResult = flipPiecesInAllDirections(3, 3, board, 0);

//     expect(flipPiecesResult).toEqual(boardAfter);
//   });

//   it('Should handle moves on the east edge of the board', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null,    0,    1, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null,    0,    0,    0],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const flipPiecesResult = flipPiecesInAllDirections(3, 7, board, 0);

//     expect(flipPiecesResult).toEqual(boardAfter);
//   });

//   it('Should handle moves on the west edge of the board', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null,    1,    0, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [   0,    0,    0, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const flipPiecesResult = processMove(3, 0, 0, board);

//     expect(flipPiecesResult).toEqual(boardAfter);
//   });

//   it('Should handle moves on the north edge of the board', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    1, null, null, null, null],
//       [null, null, null,    0, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null,    0, null, null, null, null],
//       [null, null, null,    0, null, null, null, null],
//       [null, null, null,    0, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const flipPiecesResult = processMove(0, 3, 0, board);

//     expect(flipPiecesResult).toEqual(boardAfter);
//   });

//   it('Should handle moves on the south edge of the board', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0, null, null, null, null],
//       [null, null, null,    1, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0, null, null, null, null],
//       [null, null, null,    0, null, null, null, null],
//       [null, null, null,    0, null, null, null, null],
//     ];

//     const flipPiecesResult = processMove(7, 3, 0, board);

//     expect(flipPiecesResult).toEqual(boardAfter);
//   });

//   it('Should flip pieces north and south simultaneously', () => {
//     const board2 = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0, null, null, null, null],
//       [null, null, null,    1, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    1, null, null, null, null],
//       [null, null, null,    0, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0, null, null, null, null],
//       [null, null, null,    0, null, null, null, null],
//       [null, null, null,    0, null, null, null, null],
//       [null, null, null,    0, null, null, null, null],
//       [null, null, null,    0, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const flipPiecesResult = processMove(3, 3, 0, board2);

//     expect(flipPiecesResult).toEqual(boardAfter);
//   });

//   it('Should end the game when a player has generated a stalemate', () => {
//     const board2 = [
//       [   0,    0,    0,    0,    0,    0,    0, null],
//       [   0,    0,    0,    0,    0,    0,    0,    1],
//       [   0,    0,    0,    0,    0,    0,    0,    0],
//       [   0,    0,    0,    0,    0,    0,    0, null],
//       [   0,    0,    0,    0,    0,    0, null, null],
//       [   0,    0,    0,    0,    0,    0, null,    1],
//       [   0,    0,    0,    0,    0,    0,    0, null],
//       [   0,    0,    0,    0,    0,    0,    0,    0],
//     ];

//     const flipPiecesResult = processMove(0, 7, 0, board2);

//     expect(flipPiecesResult.isGameOver).toBe(true);
//   });
// });

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

// describe('wouldFlipPiecesInGivenDirection', () => {
//   it('should return null if it hits the edge of the board', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    1, null, null, null, null],
//       [null, null, null,    0, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const wouldFlipResult = wouldFlipPiecesInGivenDirection(board, 0, 0, 3, 1, 0);

//     expect(wouldFlipResult.row).toEqual(0);
//   });
// });