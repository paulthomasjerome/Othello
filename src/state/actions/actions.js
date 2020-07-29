/*
 * action types
 */

// import { processMove } from "../../../gameLogic";

export const MAKE_MOVE = 'MAKE_MOVE';

/*
 * action creators
 */

export function makeMove(moveRow, moveCol, currentPlayer, lastBoard) {
  return {
    type: MAKE_MOVE,
    payload: {
      row: moveRow,
      col: moveCol,
      player: currentPlayer,
      board: lastBoard,
    },
  };
}
