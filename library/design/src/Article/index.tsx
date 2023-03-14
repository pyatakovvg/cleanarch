
import { Header, Text, Button } from '@library/kit';

import React from 'react';
import styled from 'styled-components';


const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  min-height: 150px;
  padding: 24px;
  text-decoration: none;
  background: ${props => props.theme.color.white};
  outline: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .05);
  overflow: hidden;
`;

const _Image = styled.div`
  display: block;
  width: 100%;
  height: 200px;
  margin: 16px 0 0;
  background: ${props => props.theme.color.primary};
`;

const _img = styled.img`
  display: block;
  height: 100%;
  margin: auto;
`;

const _Content = styled.div`
  display: block;
  margin: 24px 0 0;
`;

const _Title = styled.div`
  display: block;
`;

const _Control = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 0;
  align-items: center;
  margin: 24px 0 0;
`;


interface IProps {
  uuid: string;
  title: string;
  onReadMore(uuid: TUuid): void;
}


function TabBar(props: IProps) {
  function handleReadMore() {
    props.onReadMore(props.uuid);
  }

  return (
    <_Wrapper>
      <_Title>
        <Header level={2}>{props.title}</Header>
      </_Title>
      <_Image>

      </_Image>
      <_Content>
        <Text>Мы знаем что наш код выполняется сверху вниз, каждая следующая операция исполнится только после текущей -
          это называется синхронное программирование. Но довольно часто нам нужно выполнять “операции с ожиданием”,
          такие как, например, запрос в сеть, ведь запрос может быть удачным, а может быть не удачным (например статус
          код 404), и поэтому нам надо дождаться ответа от сервера, чтобы оповестить пользователя об успешности или
          неуспешности запроса. Проблема в том, что ожидание - это тоже операция, ведь нам надо будет непрерывно
          проверять не пришел ли нам ответ с сервера, а тк мы знаем, что одномоментно у нас может выполняться только
          одна задача, то, как вы понимаете, следующие задачи у нас не будут выполняться пока не придёт ответ с сервера,
          а ответ может приходить долго. Соответственно, из-за ожидания мы просто блокируем всю нашу систему.
        </Text>
      </_Content>
      <_Control>
        <Button mode={'primary'} onClick={handleReadMore}>Читать далее</Button>
      </_Control>
    </_Wrapper>
  );
}

export default TabBar;
