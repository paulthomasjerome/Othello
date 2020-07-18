import React from 'react';
import styled from 'styled-components';
import Square from './square.js';

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

const BoardSection = styled.div`
  width: 50vh;
  height: 50vh;
  background: black;
`; 

const Board = props => {
  return (
    <BoardSection>
      {board.map(row => row.map(column => <Square/>))}
    </BoardSection>
  );
}

export default Board;