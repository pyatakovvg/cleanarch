
import React from 'react';
import styled from "styled-components";


const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  font-size: 20px;
  color: ${props => props.theme.color.white};
`;


function Search() {
  return (
    <_Wrapper>
      <i className="fa-solid fa-magnifying-glass" />
    </_Wrapper>
  );
}

export default Search;
