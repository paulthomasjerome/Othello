import React from 'react';
import styled from 'styled-components';

const TurnTrackerSection = styled.div`
  background-color: grey;
  box-sizing: border-box;
  padding: 3rem;
  color: black;
`;

const TurnTracker = (props) => {

  return (
    <TurnTrackerSection>
      {props.player}
    </TurnTrackerSection>
  );
};

export default TurnTracker;
