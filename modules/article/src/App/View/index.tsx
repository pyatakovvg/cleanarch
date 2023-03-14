
import pageController from '@controllers/PageController';

import { Scrollable } from '@library/kit';
import { NoContent, Skeleton } from '@library/design';

import React from 'react';
import { observer } from 'mobx-react';
import styled from "styled-components";

import Content from './Content';


const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  padding: 32px 0 72px;
`;


function View() {
  if (pageController.inProcess) {
    return <Skeleton />;
  }

  if (pageController.isNotFound) {
    return <NoContent />;
  }

  return (
    <_Wrapper>
      <Scrollable>
        <Content />
      </Scrollable>
    </_Wrapper>
  );
}

export default observer(View);
