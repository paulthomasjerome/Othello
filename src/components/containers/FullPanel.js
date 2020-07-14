import React from 'react';
import styled from 'styled-components';

const FullPanelSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
`; 

const Outer = styled.div`
  background-color: black;
  padding: 4rem;
  margin: auto;
`;

const Inner = styled.div`
  background-color: red;
  padding: 2rem;
  margin: 1rem;
  border: solid 8px blue;
`;

const FullPanel = props => {
  return (
     <FullPanelSection className="full-panel">
       <Outer>
         <Inner>
           asdfasdfsasdfasdfkljalksjdflakjsdflkajsdf;lkjl;kajsdfl;kjsdaflkasjdfl;kjsdf adfasdf
         </Inner>
       </Outer>
     </FullPanelSection>
  );
}

export default FullPanel;