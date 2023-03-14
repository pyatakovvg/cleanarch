
import { RouteNotFound } from '@library/design';

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AppContext from '../context';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';


function Content() {
  const context = React.useContext(AppContext);

  return (
    <Routes>
      {context.publicRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={process.env['PUBLIC_URL'] + route.path.replace('^\/', '')}
            element={(
              <PublicRoute
                module={route.module}
                wrapper={route.wrapper}
              />
            )}
          />
        )
      })}
      {context.privateRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={process.env['PUBLIC_URL'] + route.path.replace('^\/', '')}
            element={(
              <PrivateRoute
                module={route.module}
                wrapper={route.wrapper}
              />
            )}
          />
        )
      })}
      <Route
        key={'other-routes'}
        path={'*'}
        element={<RouteNotFound />}
      />
    </Routes>
  );
}

export default Content;
