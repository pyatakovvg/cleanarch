
import { useApp } from '@library/app';

import React from 'react';
import { observer } from 'mobx-react';
import { Navigate } from 'react-router-dom';

import View from './View';


function App() {
  const { isAuth } = useApp();

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <View />
  );
}

export default observer(App);
