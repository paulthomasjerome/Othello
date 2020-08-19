import { processMove } from '../../../gameLogic/index';
import { MAKE_MOVE } from '../actions/actions';

const initialState = {
  boardState: [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, 0, 1, null, null, null],
    [null, null, null, 1, 0, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
  ],
  player: 0,
};

const deepCopy = (currentArray) => {
  let updated = [];

  for (let i = 0; i < currentArray.length; i++) {
    updated[i] = currentArray[i].slice();
  }

  return updated;
};

function processMoveReducer(state = initialState, action) {
  if (action.type === MAKE_MOVE) {
    const newBoard = deepCopy(state.boardState);

    const { boardState, player } = processMove(
      action.payload.row,
      action.payload.col,
      state.player,
      newBoard,
    );

    return {
      ...state,
      boardState,
      player,
    };
  }

  return state;
}

export default processMoveReducer;
