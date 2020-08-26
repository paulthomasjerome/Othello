import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { countScore } from '../../gameLogic/index';

const TurnTrackerSection = styled.div`
  background-color: grey;
  box-sizing: border-box;
  padding: 3rem;
  color: black;
`;

const TurnTracker = ({
  player,
  boardState,
  isGameOver,
}) => {
  let message = '';

  switch (player) {
    case 0:
      message = 'Black\'s Turn';
      break;
    case 1:
      message = 'White\'s Turn';
      break;
    default:
      message = 'Something is wrong';
      break;
  }

  if (isGameOver) {
    message = countScore(boardState);
  }

  return (
    <TurnTrackerSection>
      { message }
    </TurnTrackerSection>
  );
};

TurnTracker.propTypes = {
  player: PropTypes.number.isRequired,
  boardState: PropTypes.arrayOf(PropTypes.array).isRequired,
  isGameOver: PropTypes.bool.isRequired,
};

export default TurnTracker;
