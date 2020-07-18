import React, {useState} from 'react';
import styled from 'styled-components';
import Square from './square.js';

const BoardSection = styled.div`
  width: 75vh;
  height: 75vh;
  background: orange;
`; 

const Board = props => {
  
  const [boardState, setBoardState] = useState(
    [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null,    0,    1, null, null, null],
      [null, null, null,    1,    0, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null]
    ]
  );

  return (
    <BoardSection>
      {
        boardState.map( row => row.map((column, columnIndex) => <Square discColor={row[columnIndex]}/>))
      }
    </BoardSection>
  );
}

export default Board;