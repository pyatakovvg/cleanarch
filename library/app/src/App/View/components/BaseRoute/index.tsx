
import IRoute from '@typing/IRoute';

import React from 'react';

import Splash from '../Splash';
import context from '../../../context';

function Module(props: Omit<IRoute, 'path'>) {
  if (props.module) {
    return <props.module />
  }
  return null;
}


function PublicRoute(props: Omit<IRoute, 'path'>) {
  const { wrappers } = React.useContext(context);
  const Wrapper: any = wrappers ? wrappers[props?.wrapper ?? 'default'] : null;

  if (Wrapper) {
    return (
      <Wrapper>
        <React.Suspense fallback={<Splash />}>
          <Module {...props} />
        </React.Suspense>
      </Wrapper>
    );
  }
  return (
    <React.Suspense fallback={<Splash />}>
      <Module {...props} />
    </React.Suspense>
  );
}

export default PublicRoute;
