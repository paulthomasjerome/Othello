import React from 'react';
import styled from 'styled-components';
import { countScore } from '../../gameLogic/index';

const TurnTrackerSection = styled.div`
  background-color: grey;
  box-sizing: border-box;
  padding: 3rem;
  color: black;
`;

const TurnTracker = ({ player, boardState, totalValidMoves }) => {
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
  };

  if (totalValidMoves >= 60) {
    message = countScore(boardState);
  }

  return (
    <TurnTrackerSection>
      { message }
    </TurnTrackerSection>
  );
};

export default TurnTracker;
