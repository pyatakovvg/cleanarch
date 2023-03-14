
import { Skeleton } from '@library/design';
import pageController from '@controllers/PageController';

import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import Articles from './Articles';


const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  padding: 24px 0 128px;
`;


function View() {
  if (pageController.inProcess) {
    return (
      <Skeleton />
    );
  }

  return (
    <_Wrapper>
      <Articles />
    </_Wrapper>
  );
}

export default observer(View);
