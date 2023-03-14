
import React from 'react';

import context from '../context';


interface IUseConfig {
  navigate: any[];
}


function useConfig(): IUseConfig {
  const { navigate } = React.useContext(context);

  return {
    navigate
  }
}

export default useConfig;
