
import IRoute from '@typing/IRoute';

import React from 'react';

import BaseRoute from '../../components/BaseRoute';


function ProtectedRoute(props: Omit<IRoute, 'path'>) {
  return <BaseRoute {...props} />;
}

export default ProtectedRoute;
