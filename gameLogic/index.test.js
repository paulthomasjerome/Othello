/* eslint-disable no-multi-spaces */
const gameLogic = require('./index.js');
const flipPieces = gameLogic.flipPieces;
const processMove = gameLogic.processMove;
const checkForValidMoves = gameLogic.checkForValidMoves;

describe('flipPieces', () => {
  it('Should flip pieces if there are pieces to flip', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(3, 5, 0, -1, 0, 1, board);

    expect(piecesFlipped.piecesFlipped).toBe(true);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });

  it('Should not flip pieces if there aren\'t any to flip', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(3, 5, 0, 1, 0, 1, board);

    expect(piecesFlipped.piecesFlipped).toBe(false);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });

  // Currently broken
  it('Should not flip pieces if the play doesn\'t sandwich the opponent', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,    0, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1,    1,    1, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,    0, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1,    1,    1, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(2, 5, 0, -1, 0, 1, board);

    expect(piecesFlipped.piecesFlipped).toBe(false);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });

  //it should not flip pieces if it encounters its own piece first
  it('Should not flip pieces from north to south if it encounters player piece before opponent', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null, null,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null, null,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(2, 4, 1, 0, 0, 1, board);

    expect(piecesFlipped.piecesFlipped).toBe(false);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });

  it('Should not flip pieces from south to north if it encounters player piece before opponent', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,    1, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,    1, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(5, 4, -1, 0, 1, 0, board);

    expect(piecesFlipped.piecesFlipped).toBe(false);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });

  it('Should not flip pieces from west to east if it encounters player piece before opponent ', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    1,    0,    1, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    1,    0,    1, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(3, 2, 0, 1, 1, 0, board);

    expect(piecesFlipped.piecesFlipped).toBe(false);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });

  it('Should not flip pieces from east to west if it encounters player piece before opponent ', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null,    0,    1,    0, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null,    0,    1,    0, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(3, 5, 0, -1, 0, 1, board);

    expect(piecesFlipped.piecesFlipped).toBe(false);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });
  
  it('Should not flip pieces from northwest to southeast if it encounters player piece before opponent', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null,    1, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null,    1, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(2, 2, 1, 1, 1, 0, board);
  
    expect(piecesFlipped.piecesFlipped).toBe(false);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });
  
  it('Should not flip pieces from southeast to northwest if it encounters player piece before opponent', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null,    1, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null,    1, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(5, 5, -1, -1, 1, 0, board);

    expect(piecesFlipped.piecesFlipped).toBe(false);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });

  it('Should not flip pieces from northeast to southwest if it encounters player piece before opponent', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(2, 5, 1, -1, 0, 1, board);
  
    expect(piecesFlipped.piecesFlipped).toBe(false);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });
  
  it('Should not flip pieces from southwest to northeast if it encounters player piece before opponent', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null,    0, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null,    0, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const piecesFlipped = flipPieces(5, 2, -1, 1, 0, 1, board);
  
    expect(piecesFlipped.piecesFlipped).toBe(false);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });

  //it should flip pieces in each direction
  it('Should flip pieces from north to south', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(2, 4, 1, 0, 0, 1, board);

    expect(piecesFlipped.piecesFlipped).toBe(true);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });

  it('Should flip pieces from south to north', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(5, 4, -1, 0, 1, 0, board);

    expect(piecesFlipped.piecesFlipped).toBe(true);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });

  it('Should flip pieces from west to east', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(3, 2, 0, 1, 1, 0, board);

    expect(piecesFlipped.piecesFlipped).toBe(true);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });

  it('Should flip pieces from east to west', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(3, 5, 0, -1, 0, 1, board);

    expect(piecesFlipped.piecesFlipped).toBe(true);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });

  it('Should flip pieces from northwest to southeast', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(2, 2, 1, 1, 1, 0, board);
  
    expect(piecesFlipped.piecesFlipped).toBe(true);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });

  it('Should flip pieces from southeast to northwest', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(5, 5, -1, -1, 1, 0, board);

    expect(piecesFlipped.piecesFlipped).toBe(true);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });

  it('Should flip pieces from northeast to southwest', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(2, 5, 1, -1, 0, 1, board);
  
    expect(piecesFlipped.piecesFlipped).toBe(true);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });

  it('Should flip pieces from southwest to northeast', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(5, 2, -1, 1, 0, 1, board);
  
    expect(piecesFlipped.piecesFlipped).toBe(true);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });

  //it should not flip pieces if it encounters null first
  it('Should not flip pieces from north to south if it encounters null first', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0, null, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null, null,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0, null, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null, null,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(2, 4, 1, 0, 0, 1, board);

    expect(piecesFlipped.piecesFlipped).toBe(false);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });
  
  it('Should not flip pieces from south to north if it encounters null first', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,    1, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,    1, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(5, 4, -1, 0, 1, 0, board);

    expect(piecesFlipped.piecesFlipped).toBe(false);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });
  
  it('Should not flip pieces from west to east if it encounters null first', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,    0,    1, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,    0,    1, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(3, 2, 0, 1, 1, 0, board);

    expect(piecesFlipped.piecesFlipped).toBe(false);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });
  
  it('Should not flip pieces from east to west if it encounters null first', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null,    0,    1, null, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null,    0,    1, null, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(3, 5, 0, -1, 0, 1, board);

    expect(piecesFlipped.piecesFlipped).toBe(false);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });
  
  it('Should not flip pieces from northwest to southeast if it encounters null first', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null,    1, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null,    1, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(2, 2, 1, 1, 1, 0, board);
  
    expect(piecesFlipped.piecesFlipped).toBe(false);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });
  
  it('Should not flip pieces from southeast to northwest if it encounters null first', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null,    1, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null,    1, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(5, 5, -1, -1, 1, 0, board);

    expect(piecesFlipped.piecesFlipped).toBe(false);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });
  
  it('Should not flip pieces from northeast to southwest if it encounters null first', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0, null, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0, null, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(2, 5, 1, -1, 0, 1, board);
  
    expect(piecesFlipped.piecesFlipped).toBe(false);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });
  
  it('Should not flip pieces from southwest to northeast if it encounters null first', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null,    0, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null, null,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null,    0, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null, null,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(5, 2, -1, 1, 0, 1, board);
  
    expect(piecesFlipped.piecesFlipped).toBe(false);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });
  
  it('Should handle the edge of the board at cartesian quadrant I from north to south', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null,    1],
      [null, null, null, null, null, null, null,    0],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null,    0],
      [null, null, null, null, null, null, null,    0],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(0, 7, 1, 0, 0, 1, board);
  
    expect(piecesFlipped.piecesFlipped).toBe(true);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });

  it('Should handle the edge of the board at cartesian quadrant I from east to west', () => {
    const board = [
      [null, null, null, null, null,    0,    1, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null,    0,    0, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(0, 7, 0, -1, 0, 1, board);
  
    expect(piecesFlipped.piecesFlipped).toBe(true);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });

  it('Should handle the edge of the board at cartesian quadrant I from northeast to southwest', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null,    1, null],
      [null, null, null, null, null,    0, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null,    0, null],
      [null, null, null, null, null,    0, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(0, 7, 1, -1, 0, 1, board);
  
    expect(piecesFlipped.piecesFlipped).toBe(true);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });

  it('Should handle the edge of the board at cartesian quadrant II from north to south', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [   1, null, null, null, null, null, null, null],
      [   0, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [   0, null, null, null, null, null, null, null],
      [   0, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(0, 0, 1, 0, 0, 1, board);
  
    expect(piecesFlipped.piecesFlipped).toBe(true);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  
  });

  it('Should handle the edge of the board at cartesian quadrant II from west to east', () => {
    const board = [
      [null,    1,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null,    0,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(0, 0, 0, 1, 0, 1, board);
  
    expect(piecesFlipped.piecesFlipped).toBe(true);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });

  it('Should handle the edge of the board at cartesian quadrant II from northwest to southeast', () => {
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
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null,    0, null, null, null, null, null, null],
      [null, null,    0, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(0, 0, 1, 1, 0, 1, board);
  
    expect(piecesFlipped.piecesFlipped).toBe(true);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });

  it('Should handle the edge of the board at quadrant III from south to north', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [   0, null, null, null, null, null, null, null],
      [   1, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [   0, null, null, null, null, null, null, null],
      [   0, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(7, 0, -1, 0, 0, 1, board);
  
    expect(piecesFlipped.piecesFlipped).toBe(true);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });

  it('Should handle the edge of the board at quadrant III from west to east', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null,    1,    0, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null,    0,    0, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(7, 0, 0, 1, 0, 1, board);
  
    expect(piecesFlipped.piecesFlipped).toBe(true);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });

  it('Should handle the edge of the board at quadrant III from southwest to northeast', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null,    0, null, null, null, null, null],
      [null,    1, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null,    0, null, null, null, null, null],
      [null,    0, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(7, 0, -1, 1, 0, 1, board);
  
    expect(piecesFlipped.piecesFlipped).toBe(true);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });

  it('Should handle the edge of the board at quadrant IV from south to north', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null,    0],
      [null, null, null, null, null, null, null,    1],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null,    0],
      [null, null, null, null, null, null, null,    0],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(7, 7, -1, 0, 0, 1, board);
  
    expect(piecesFlipped.piecesFlipped).toBe(true);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });

  it('Should handle the edge of the board at quadrant IV from east to west', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null,    0,    1, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null,    0,    0, null],
    ];

    const piecesFlipped = flipPieces(7, 7, 0, -1, 0, 1, board);
  
    expect(piecesFlipped.piecesFlipped).toBe(true);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });

  it('Should handle the edge of the board at quadrant IV from southeast to northwest', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null,    0, null, null],
      [null, null, null, null, null, null,    1, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null,    0, null, null],
      [null, null, null, null, null, null,    0, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(7, 7, -1, -1, 0, 1, board);
  
    expect(piecesFlipped.piecesFlipped).toBe(true);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  });
  
  it('Should flip multiple pieces at once', () => {
    const board = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,    0, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1,    1, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];
    const boardAfter = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null,    0, null, null, null],
      [null, null, null,    0,    0, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    const piecesFlipped = flipPieces(5, 4, -1, 0, 0, 1, board);
  
    expect(piecesFlipped.piecesFlipped).toBe(true);
    expect(piecesFlipped.boardState).toEqual(boardAfter);
  
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
});

describe('checkValidMoves', () => {
  it('should not swap players if the next player has valid moves', () => {
    const noValidMoveFor0 = [
      [null, null, null, null, null, null, null, null],
      [null, null, null,    1, null, null, null, null],
      [null, null, null,    0, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0, null, null, null, null],
      [null, null, null,    1, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    //if it should be zero's turn next but they can't make a move than it is 1's turn again
    expect(checkForValidMoves(noValidMoveFor0, 1)).toEqual(1);
  });

  it('should swap players if the next player has no valid moves', () => {
    const noValidMoveFor1 = [
      [   1,    1,    1,    1,    1,    1,    1,    0],
      [   1,    1,    1,    1,    1,    1,    0,    0],
      [   1,    1,    1,    0,    0,    0,    1,    0],
      [   0,    1,    1,    0,    0,    1,    0,    0],
      [   0,    1,    1,    1,    1,    1,    1,    0],
      [   0,    1,    1,    1,    1,    0,    1,    0],
      [   1,    1,    1,    1,    1,    1,    0,    0],
      [null, null, null, null, null,    0,    0,    0],
    ];

    //if it should be zero's turn next but they can't make a move than it is 1's turn again
    expect(checkForValidMoves(noValidMoveFor1, 1)).toEqual(0);
  });
});
