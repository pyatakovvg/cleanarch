
import appController from '@controllers/AppController';

import React from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';

import View from './View';
import Splash from './View/components/Splash';


interface IProps {
  children?: React.ReactNode;
}


function Bootstrap(props: IProps) {
  React.useEffect(() => {
    (async () => {
      await appController.checkAuth();
    })();
  }, []);

  if ( ! appController.isInit) {
    return <Splash />;
  }

  return (
    <BrowserRouter>
      { props?.children ?? <View /> }
    </BrowserRouter>
  );
}

export default observer(Bootstrap);
