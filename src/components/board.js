/* eslint-disable no-multi-spaces */
import React from 'react';
// import makeMove from '../state/slices/boardSlice.js'
// import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Square from './square.js';

const BoardSection = styled.div`
  width: 75vh;
  height: 75vh;
  background: orange;
`;

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

export default Board;
