import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const SquareSection = styled.div`
  background-color: green;
  box-sizing: border-box;
  border: solid 1px black;
  float: left;
  height: 12.5%;
  width: 12.5%;
`;

const NoDisc = styled.div`
  background-color: transparent;
  box-sizing: border-box;
  border-radius: 50%;
  height: 100%;
  width: 100%;
`;

const BlackDisc = styled(NoDisc)`
  background-color: #000;
`;

const WhiteDisc = styled(NoDisc)`
  background-color: #FFF;
`;

const Square = ({
  makeMoveCallback,
  discColor,
  rowIndex,
  columnIndex,
}) => {
  let discType = null;

  switch (discColor) {
    case 0:
      discType = <BlackDisc />;
      break;
    case 1:
      discType = <WhiteDisc />;
      break;
    default:
      discType = <NoDisc />;
      break;
  }

  return (
    <SquareSection onClick={() => makeMoveCallback(rowIndex, columnIndex)}>
      {discType}
    </SquareSection>
  );
};

Square.propTypes = {
  makeMoveCallback: PropTypes.func.isRequired,
  discColor: PropTypes.number.isRequired,
  rowIndex: PropTypes.number.isRequired,
  columnIndex: PropTypes.number.isRequired,
};

export default Square;
