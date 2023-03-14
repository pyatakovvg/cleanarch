
import IRoute from '@typing/IRoute';
import { TWrapper } from '@typing/IWrapper';

import React from 'react';

import context from './context';
import Bootstrap from './bootstrap';

import GlobalStyles from './styles/global';


interface IProps {
  navigate: any[];
  publicRoutes: IRoute[];
  privateRoutes: IRoute[];
  children?: React.ReactNode;
  wrappers?: TWrapper;
}


function App(props: IProps) {
  return (
    <context.Provider value={{
      navigate: props.navigate,
      wrappers: props.wrappers,
      publicRoutes: props.publicRoutes,
      privateRoutes: props.privateRoutes,
    }}>
      <GlobalStyles />
      <Bootstrap>
        { props?.children }
      </Bootstrap>
    </context.Provider>
  );
}

export default App;
