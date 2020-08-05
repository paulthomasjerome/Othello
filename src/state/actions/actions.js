/*
 * action types
 */

export const MAKE_MOVE = 'MAKE_MOVE';

/*
 * action creators
 */

export default function makeMove(moveRow, moveCol) {
  return {
    type: MAKE_MOVE,
    payload: {
      row: moveRow,
      col: moveCol,
    },
  };
}
