
import React from 'react';
import styled from 'styled-components';


const _Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  flex: 1 0;
`;


function StartScreen() {
  return (
    <_Wrapper>
      <div>Loading...</div>
    </_Wrapper>
  );
}

export default StartScreen;
