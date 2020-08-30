/* eslint-disable array-bracket-spacing */
/* eslint-disable no-multi-spaces */
const gameLogic = require('./index.js');
// const flipPieces = gameLogic.flipPieces;
// const processMove = gameLogic.processMove;
const flipPiecesInOneDirection = gameLogic.flipPiecesInOneDirection;

// describe('flipPieces', () => {
//   it('Should flip pieces if there are pieces to flip', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0,    1, null, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0,    0, null, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(3, 4, 0, -1, 0, 1, board);

//     expect(piecesFlipped.piecesFlipped).toBe(true);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   it('Should not flip pieces if there aren\'t any to flip', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0,    1, null, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0,    1, null, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(3, 5, 0, 1, 0, 1, board);

//     expect(piecesFlipped.piecesFlipped).toBe(false);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   // Currently broken
//   it('Should not flip pieces if the play doesn\'t sandwich the opponent', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null,    0, null, null, null],
//       [null, null, null,    0,    0, null, null, null],
//       [null, null, null,    1,    1,    1, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null,    0, null, null, null],
//       [null, null, null,    0,    0, null, null, null],
//       [null, null, null,    1,    1,    1, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(2, 5, 0, -1, 0, 1, board);

//     expect(piecesFlipped.piecesFlipped).toBe(false);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   //it should not flip pieces if it encounters its own piece first
//   it('Should not flip pieces from north to south if it encounters player piece before opponent', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0,    0, null, null, null],
//       [null, null, null,    1,    1, null, null, null],
//       [null, null, null, null,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0,    0, null, null, null],
//       [null, null, null,    1,    1, null, null, null],
//       [null, null, null, null,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(2, 4, 1, 0, 0, 1, board);

//     expect(piecesFlipped.piecesFlipped).toBe(false);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   it('Should not flip pieces from south to north if it encounters player piece before opponent', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null,    1, null, null, null],
//       [null, null, null,    0,    0, null, null, null],
//       [null, null, null,    1,    1, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null,    1, null, null, null],
//       [null, null, null,    0,    0, null, null, null],
//       [null, null, null,    1,    1, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(5, 4, -1, 0, 1, 0, board);

//     expect(piecesFlipped.piecesFlipped).toBe(false);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   it('Should not flip pieces from west to east if it encounters player piece before opponent ', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    1,    0,    1, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    1,    0,    1, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(3, 2, 0, 1, 1, 0, board);

//     expect(piecesFlipped.piecesFlipped).toBe(false);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   it('Should not flip pieces from east to west if it encounters player piece before opponent ', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null,    0,    1,    0, null, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null,    0,    1,    0, null, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(3, 5, 0, -1, 0, 1, board);

//     expect(piecesFlipped.piecesFlipped).toBe(false);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });
  
//   it('Should not flip pieces from northwest to southeast if it encounters player piece before opponent', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    1,    1, null, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null, null, null, null,    1, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    1,    1, null, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null, null, null, null,    1, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(2, 2, 1, 1, 1, 0, board);
  
//     expect(piecesFlipped.piecesFlipped).toBe(false);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });
  
//   it('Should not flip pieces from southeast to northwest if it encounters player piece before opponent', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null,    1, null, null, null, null, null],
//       [null, null, null,    0,    1, null, null, null],
//       [null, null, null,    1,    1, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null,    1, null, null, null, null, null],
//       [null, null, null,    0,    1, null, null, null],
//       [null, null, null,    1,    1, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(5, 5, -1, -1, 1, 0, board);

//     expect(piecesFlipped.piecesFlipped).toBe(false);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   it('Should not flip pieces from northeast to southwest if it encounters player piece before opponent', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0,    0, null, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null,    0, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0,    0, null, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null,    0, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(2, 5, 1, -1, 0, 1, board);
  
//     expect(piecesFlipped.piecesFlipped).toBe(false);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });
  
//   it('Should not flip pieces from southwest to northeast if it encounters player piece before opponent', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null,    0, null, null],
//       [null, null, null,    0,    1, null, null, null],
//       [null, null, null,    0,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null,    0, null, null],
//       [null, null, null,    0,    1, null, null, null],
//       [null, null, null,    0,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const piecesFlipped = flipPieces(5, 2, -1, 1, 0, 1, board);
  
//     expect(piecesFlipped.piecesFlipped).toBe(false);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   //it should flip pieces in each direction
//   it('Should flip pieces from north to south', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0,    1, null, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0,    0, null, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(3, 4, 1, 0, 0, 1, board);

//     expect(piecesFlipped.piecesFlipped).toBe(true);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   it('Should flip pieces from south to north', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0,    1, null, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0,    1, null, null, null],
//       [null, null, null,    1,    1, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(4, 4, -1, 0, 1, 0, board);

//     expect(piecesFlipped.piecesFlipped).toBe(true);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   it('Should flip pieces from west to east', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0,    1, null, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    1,    1, null, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(3, 3, 0, 1, 1, 0, board);

//     expect(piecesFlipped.piecesFlipped).toBe(true);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   it('Should flip pieces from east to west', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0,    1, null, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0,    0, null, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(3, 4, 0, -1, 0, 1, board);

//     expect(piecesFlipped.piecesFlipped).toBe(true);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   it('Should flip pieces from northwest to southeast', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0,    1, null, null, null],
//       [null, null, null,    1,    1, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    1,    1, null, null, null],
//       [null, null, null,    1,    1, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(3, 3, 1, 1, 1, 0, board);
  
//     expect(piecesFlipped.piecesFlipped).toBe(true);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   it('Should flip pieces from southeast to northwest', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    1,    1, null, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    1,    1, null, null, null],
//       [null, null, null,    1,    1, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(4, 4, -1, -1, 1, 0, board);

//     expect(piecesFlipped.piecesFlipped).toBe(true);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   it('Should flip pieces from northeast to southwest', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0,    1, null, null, null],
//       [null, null, null,    0,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0,    0, null, null, null],
//       [null, null, null,    0,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(3, 4, 1, -1, 0, 1, board);
  
//     expect(piecesFlipped.piecesFlipped).toBe(true);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   it('Should flip pieces from southwest to northeast', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0,    0, null, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0,    0, null, null, null],
//       [null, null, null,    0,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(4, 3, -1, 1, 0, 1, board);

//     expect(piecesFlipped.piecesFlipped).toBe(true);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   // it should not flip pieces if it encounters null first
//   it('Should not flip pieces from north to south if it encounters null first', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0, null, null, null, null],
//       [null, null, null,    1,    1, null, null, null],
//       [null, null, null, null,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0, null, null, null, null],
//       [null, null, null,    1,    1, null, null, null],
//       [null, null, null, null,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(2, 4, 1, 0, 0, 1, board);

//     expect(piecesFlipped.piecesFlipped).toBe(false);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   it('Should not flip pieces from south to north if it encounters null first', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null,    1, null, null, null],
//       [null, null, null,    0,    0, null, null, null],
//       [null, null, null,    1, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null,    1, null, null, null],
//       [null, null, null,    0,    0, null, null, null],
//       [null, null, null,    1, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(5, 4, -1, 0, 1, 0, board);

//     expect(piecesFlipped.piecesFlipped).toBe(false);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });
  
//   it('Should not flip pieces from west to east if it encounters null first', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null,    0,    1, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null,    0,    1, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(3, 2, 0, 1, 1, 0, board);

//     expect(piecesFlipped.piecesFlipped).toBe(false);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });
  
//   it('Should not flip pieces from east to west if it encounters null first', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null,    0,    1, null, null, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null,    0,    1, null, null, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(3, 5, 0, -1, 0, 1, board);

//     expect(piecesFlipped.piecesFlipped).toBe(false);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });
  
//   it('Should not flip pieces from northwest to southeast if it encounters null first', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null,    1, null, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null, null, null, null,    1, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null,    1, null, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null, null, null, null,    1, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(2, 2, 1, 1, 1, 0, board);
  
//     expect(piecesFlipped.piecesFlipped).toBe(false);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });
  
//   it('Should not flip pieces from southeast to northwest if it encounters null first', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null,    1, null, null, null, null, null],
//       [null, null, null,    0,    1, null, null, null],
//       [null, null, null,    1, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null,    1, null, null, null, null, null],
//       [null, null, null,    0,    1, null, null, null],
//       [null, null, null,    1, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(5, 5, -1, -1, 1, 0, board);

//     expect(piecesFlipped.piecesFlipped).toBe(false);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });
  
//   it('Should not flip pieces from northeast to southwest if it encounters null first', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0, null, null, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null,    0, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null,    0, null, null, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null,    0, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(2, 5, 1, -1, 0, 1, board);
  
//     expect(piecesFlipped.piecesFlipped).toBe(false);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });
  
//   it('Should not flip pieces from southwest to northeast if it encounters null first', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null,    0, null, null],
//       [null, null, null,    0,    1, null, null, null],
//       [null, null, null, null,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null,    0, null, null],
//       [null, null, null,    0,    1, null, null, null],
//       [null, null, null, null,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(5, 2, -1, 1, 0, 1, board);
  
//     expect(piecesFlipped.piecesFlipped).toBe(false);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });
  
//   it('Should handle the edge of the board at cartesian quadrant I from north to south', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null,    1],
//       [null, null, null, null, null, null, null,    0],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null,    0],
//       [null, null, null, null, null, null, null,    0],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(1, 7, 1, 0, 0, 1, board);
  
//     expect(piecesFlipped.piecesFlipped).toBe(true);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   it('Should handle the edge of the board at cartesian quadrant I from east to west', () => {
//     const board = [
//       [null, null, null, null, null,    0,    1, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null,    0,    0, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(0, 6, 0, -1, 0, 1, board);
  
//     expect(piecesFlipped.piecesFlipped).toBe(true);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   it('Should handle the edge of the board at cartesian quadrant I from northeast to southwest', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null,    1, null],
//       [null, null, null, null, null,    0, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null,    0, null],
//       [null, null, null, null, null,    0, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(1, 6, 1, -1, 0, 1, board);
  
//     expect(piecesFlipped.piecesFlipped).toBe(true);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   it('Should handle the edge of the board at cartesian quadrant II from north to south', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [   1, null, null, null, null, null, null, null],
//       [   0, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [   0, null, null, null, null, null, null, null],
//       [   0, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(1, 0, 1, 0, 0, 1, board);
  
//     expect(piecesFlipped.piecesFlipped).toBe(true);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
  
//   });

//   it('Should handle the edge of the board at cartesian quadrant II from west to east', () => {
//     const board = [
//       [null,    1,    0, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null,    0,    0, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(0, 1, 0, 1, 0, 1, board);
  
//     expect(piecesFlipped.piecesFlipped).toBe(true);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   it('Should handle the edge of the board at cartesian quadrant II from northwest to southeast', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null,    1, null, null, null, null, null, null],
//       [null, null,    0, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null,    0, null, null, null, null, null, null],
//       [null, null,    0, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(1, 1, 1, 1, 0, 1, board);
  
//     expect(piecesFlipped.piecesFlipped).toBe(true);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   it('Should handle the edge of the board at quadrant III from south to north', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [   0, null, null, null, null, null, null, null],
//       [   1, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [   0, null, null, null, null, null, null, null],
//       [   0, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(6, 0, -1, 0, 0, 1, board);
  
//     expect(piecesFlipped.piecesFlipped).toBe(true);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   it('Should handle the edge of the board at quadrant III from west to east', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null,    1,    0, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null,    0,    0, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(7, 1, 0, 1, 0, 1, board);
  
//     expect(piecesFlipped.piecesFlipped).toBe(true);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   it('Should handle the edge of the board at quadrant III from southwest to northeast', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null,    0, null, null, null, null, null],
//       [null,    1, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null,    0, null, null, null, null, null],
//       [null,    0, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(6, 1, -1, 1, 0, 1, board);
  
//     expect(piecesFlipped.piecesFlipped).toBe(true);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   it('Should handle the edge of the board at quadrant IV from south to north', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null,    0],
//       [null, null, null, null, null, null, null,    1],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null,    0],
//       [null, null, null, null, null, null, null,    0],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(6, 7, -1, 0, 0, 1, board);
  
//     expect(piecesFlipped.piecesFlipped).toBe(true);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   it('Should handle the edge of the board at quadrant IV from east to west', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null,    0,    1, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null,    0,    0, null],
//     ];

//     const piecesFlipped = flipPieces(7, 6, 0, -1, 0, 1, board);

//     expect(piecesFlipped.piecesFlipped).toBe(true);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });

//   it('Should handle the edge of the board at quadrant IV from southeast to northwest', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null,    0, null, null],
//       [null, null, null, null, null, null,    1, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null,    0, null, null],
//       [null, null, null, null, null, null,    0, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(6, 6, -1, -1, 0, 1, board);
  
//     expect(piecesFlipped.piecesFlipped).toBe(true);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
//   });
  
//   it('Should flip multiple pieces at once', () => {
//     const board = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null,    0, null, null, null],
//       [null, null, null,    0,    1, null, null, null],
//       [null, null, null,    1,    1, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];
//     const boardAfter = [
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null,    0, null, null, null],
//       [null, null, null,    0,    0, null, null, null],
//       [null, null, null,    1,    0, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//       [null, null, null, null, null, null, null, null],
//     ];

//     const piecesFlipped = flipPieces(4, 4, -1, 0, 0, 1, board);
  
//     expect(piecesFlipped.piecesFlipped).toBe(true);
//     expect(piecesFlipped.boardState).toEqual(boardAfter);
  
//   });
// });

// describe('processMove', () => {
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

//     const processMoveResult = processMove(3, 3, 0, board);

//     expect(processMoveResult.boardState).toEqual(boardAfter);
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

//     const processMoveResult = processMove(3, 7, 0, board);
  
//     expect(processMoveResult.boardState).toEqual(boardAfter);
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

//     const processMoveResult = processMove(3, 0, 0, board);
  
//     expect(processMoveResult.boardState).toEqual(boardAfter);
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

//     const processMoveResult = processMove(0, 3, 0, board);
  
//     expect(processMoveResult.boardState).toEqual(boardAfter);
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

//     const processMoveResult = processMove(7, 3, 0, board);

//     expect(processMoveResult.boardState).toEqual(boardAfter);
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

//     const processMoveResult = processMove(3, 3, 0, board2);

//     expect(processMoveResult.boardState).toEqual(boardAfter);
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

//     const processMoveResult = processMove(0, 7, 0, board2);

//     expect(processMoveResult.isGameOver).toBe(true);
//   });
// });

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

    expect(flipPiecesInOneDirection(testBoardBefore, endPieceData, 0, 0)).toEqual(testBoardAfter);
  });

  it.only('should flip pieces horizontally if there are pieces to flip', () => {
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

    const flipPiecesInOneDirectionResult = flipPiecesInOneDirection(testBoardBefore, endPieceData, 0, 0);

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
    expect(flipPiecesInOneDirection(testBoardBefore, endPieceData, 0, 0)).toEqual(testBoardAfter);
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
    expect(flipPiecesInOneDirection(testBoardBefore, endPieceData, 0, 0)).toEqual(testBoardAfter);
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
