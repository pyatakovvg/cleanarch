
import React from 'react';


const routes: any[] = [
  {
    path: '/',
    module: React.lazy(() => import(/* webpackChunkName: "module.main" */'@module/main')),
  },
  {
    path: '/articles/:uuid',
    module: React.lazy(() => import(/* webpackChunkName: "module.article" */'@module/article')),
  },
  {
    path: '/sign-in',
    wrapper: 'empty',
    module: React.lazy(() => import(/* webpackChunkName: "module.sign-in" */'@module/sign-in')),
  },
];

export default routes;
