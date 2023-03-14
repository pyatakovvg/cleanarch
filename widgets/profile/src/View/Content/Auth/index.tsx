
import { useApp } from '@library/app';
import { Text, Button } from '@library/kit';

import React from 'react';
import styled from "styled-components";


const _Wrapper = styled.div`
  display: block;
`;

const _Col = styled.div`
  display: block;
  
  & + & {
    margin: 4px 0 0;
  }
`;


function Auth() {
  const app = useApp();

  async function handleLogout() {
    await app.resetAuth();
  }

  return (
    <_Wrapper>
      <_Col>
        <Text>{ app.user.name }</Text>
      </_Col>
      <_Col>
        <Text>{ app.user.email }</Text>
      </_Col>
      <_Col>
        <Button mode={'danger'} onClick={handleLogout}>Выйти</Button>
      </_Col>
    </_Wrapper>
  );
}

export default Auth;
