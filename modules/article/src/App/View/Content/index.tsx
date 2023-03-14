
import pageController from '@controllers/PageController';

import { Text, Header } from '@library/kit';

import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';


const _Wrapper = styled.div`
  display: block;
  padding: 24px 16px;
  background: ${props => props.theme.color.white};
`;

const _Block = styled.div`
  display: block;
  
  & + & {
    margin: 32px 0 0;
  }
`;


function Content() {
  return (
    <_Wrapper>
      <_Block>
        <Header>{ pageController.article.title }</Header>
      </_Block>
      <_Block>
        <Text>{ pageController.article.content }</Text>
      </_Block>
    </_Wrapper>
  );
}

export default observer(Content);
