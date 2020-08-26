/* eslint-disable react/prop-types */
/* eslint-disable no-multi-spaces */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// eslint-disable-next-line import/extensions
import Square from './square.jsx';

const BoardSection = styled.div`
  width: 75vh;
  height: 75vh;
  background: orange;
`;

const Board = ({
  boardState,
  makeMoveCallback,
}) => (
  <BoardSection>
    {
      boardState.map(
        (row, rowIndex) => row.map(
          (column, columnIndex) => (
            <Square
              makeMoveCallback={makeMoveCallback}
              // eslint-disable-next-line react/no-array-index-key
              key={`${columnIndex}-${rowIndex}-${row[columnIndex]}`}
              discColor={row[columnIndex]}
              rowIndex={rowIndex}
              columnIndex={columnIndex}
            />
          ),
        ),
      )
    }
  </BoardSection>
);

Board.propTypes = {
  boardState: PropTypes.arrayOf(PropTypes.array).isRequired,
  makeMoveCallback: PropTypes.func.isRequired,
};

export default Board;
