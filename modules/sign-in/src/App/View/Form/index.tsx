
import pageController from '@controllers/PageController';

import { useApp } from '@library/app';
import { Input, Button } from '@library/kit';

import React from 'react';
import { observer } from 'mobx-react';
import styled from "styled-components";
import { useNavigate, useLocation } from 'react-router-dom';


const _Form = styled.form`
  display: inline-flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: 100%;
  background: ${props => props.theme.color.white};
  padding: 32px;
  box-sizing: border-box;
`;

const _Row = styled.div`
  display: block;
  
  & + & {
    margin: 8px 0 0;
  }
`;


function Form() {
  const app = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const user = await pageController.login(login, password);

    if (user) {
      await app.setAuth(user);
      navigate(process.env.PUBLIC_URL + (location.state?.referer ?? '/'));
    }
  }

  return (
    <_Form onSubmit={handleSubmit}>
      <_Row>
        <label>
          <span>Name</span>
          <Input
            type="email"
            name="email"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            autoFocus
          />
        </label>
      </_Row>
      <_Row>
        <label>
          <span>Email</span>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </_Row>
      <_Row>
        <Button type="submit" disabled={pageController.inProcess}>
          {pageController.inProcess ? "Trying to login..." : "Login"}
        </Button>
      </_Row>
    </_Form>
  );
}

export default observer(Form);
