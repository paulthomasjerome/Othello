/* eslint-disable no-multi-spaces */
import React from 'react';
import styled from 'styled-components';
import Square from './square.js';
import { makeMove } from '../state/actions/actions.js';
import store from '../state/store.js';

const BoardSection = styled.div`
  width: 75vh;
  height: 75vh;
  background: orange;
`;

console.log(store.getState());
store.dispatch(makeMove(4,2,0,store.getState().board));
console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

const boardState = [
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null,    0,    1, null, null, null],
  [null, null, null,    1,    0, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
];

const Board = props => {
  return (
    <BoardSection>
      {
        boardState.map((row, rowIndex) => row.map((_column, columnIndex) => <Square discColor={row[columnIndex]} rowIndex={rowIndex} columnIndex={columnIndex} />))
      }
    </BoardSection>
  );
};

unsubscribe();

export default Board;
//onClick={store.dispatch(makeMove(this.rowIndex, this.columnIndex, 0, store.getState().board))}
