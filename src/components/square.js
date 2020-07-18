import React from 'react';
import styled from 'styled-components';

//note that we stoped using float because we wanted the flexibility of changing the size of the discs 
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

const Square = props => {
  return (
     <SquareSection>
       {props.discColor == 'black' ? <BlackDisc/> : <WhiteDisc/>}
     </SquareSection>
  );
}

export default Square;