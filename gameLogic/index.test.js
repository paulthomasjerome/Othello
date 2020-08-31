/* eslint-disable array-bracket-spacing */
/* eslint-disable no-multi-spaces */
const gameLogic = require('./index.js');
// const flipPieces = gameLogic.flipPieces;
// const processMove = gameLogic.processMove;
const flipPiecesInOneDirection = gameLogic.flipPiecesInOneDirection;
const sortByArrayDepth = gameLogic.sortByArrayDepth;

describe('flipPiecesInOneDirection', () => {
  it('should flip pieces vertically if there are pieces to flip vertically', () => {
    const testBoardBefore = [
      [   0, null, null, null, null, null, null, null],
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

    const flipPiecesInOneDirectionResult = flipPiecesInOneDirection(testBoardBefore, endPieceData, 0, 0, 0);

    const testBoardAfter = [
      [   0, null, null, null, null, null, null, null],
      [   0, null, null, null, null, null, null, null],
      [   0, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    expect(flipPiecesInOneDirectionResult).toEqual(testBoardAfter);
  });

  it('should flip pieces horizontally if there are pieces to flip', () => {
    const testBoardBefore = [
      [   0,    1,    0, null, null, null, null, null],
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

    const flipPiecesInOneDirectionResult = flipPiecesInOneDirection(testBoardBefore, endPieceData, 0, 0, 0);

    const testBoardAfter = [
      [   0,    0,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    expect(flipPiecesInOneDirectionResult).toEqual(testBoardAfter);
  });

  it('should flip pieces diagonally if there are pieces to flip', () => {
    const testBoardBefore = [
      [   0, null, null, null, null, null, null, null],
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

    const flipPiecesInOneDirectionResult = flipPiecesInOneDirection(testBoardBefore, endPieceData, 0, 0, 0);

    const testBoardAfter = [
      [   0, null, null, null, null, null, null, null],
      [null,    0, null, null, null, null, null, null],
      [null, null,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    expect(flipPiecesInOneDirectionResult).toEqual(testBoardAfter);
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

    const endPieceData = {
      row: 0,
      column: 7,
    };

    const flipPiecesInOneDirectionResult = flipPiecesInOneDirection(testBoardBefore, endPieceData, 0, 0, 0);

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
    expect(flipPiecesInOneDirectionResult).toEqual(testBoardAfter);
  });
});

describe('sortByArrayDepth', () => {
  it('should fucking work for vertical', () => {
    const {startRow, startColumn, endRow, endColumn} = sortByArrayDepth(0,2,0,0);
    const test = {startRow, startColumn, endRow, endColumn};

    const control = { startRow: 0, startColumn: 0, endRow: 2, endColumn: 0};
    expect(test).toEqual(control);
  });
});

// it('should flip pieces ', () => {
//   const testBoardBefore = [
//     [null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null],
//   ];

//   const endPieceData = {
//     row: ,
//     column: ,
//   };

//   const testBoardAfter = [
//     [null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null, null],
//   ];

//   expect(flipPiecesInOneDirection(testBoardBefore, endPieceData, , ).toEqual(testBoardAfter));
// });
