/* eslint-disable no-multi-spaces */
import { deepCopy, processMove } from '../../../gameLogic/index';
import { MAKE_MOVE } from '../actions/actions';

// initial game state
const initialState = {
  boardState: [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null,    0,    1, null, null, null],
    [null, null, null,    1,    0, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
  ],
  player: 0,
  isGameOver: false,
};

// root reducer
function processMoveReducer(state = initialState, action) {
  if (action.type === MAKE_MOVE) {
    const newBoard = deepCopy(state.boardState);

    const { boardState, player, isGameOver } = processMove(
      action.payload.row,
      action.payload.col,
      state.player,
      newBoard,
    );

    return {
      ...state,
      boardState,
      player,
      isGameOver,
    };
  }

  return state;
}

export default processMoveReducer;
