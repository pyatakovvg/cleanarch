
import App from '@library/app';
import { ThemeProvider } from '@library/kit';
import { DefaultWrapper, EmptyWrapper } from "@library/design";

import React from 'react';
import { configure } from 'mobx';
import ReactDom from 'react-dom/client';

import publicRoutes from './configs/routes/public';
import privateRoutes from './configs/routes/private';


configure({
  enforceActions: "never",
});


const root = ReactDom.createRoot(document.querySelector('#root') ! );

root.render(
  <ThemeProvider defaultTheme={'light'}>
    <App
      navigate={[]}
      publicRoutes={publicRoutes}
      privateRoutes={privateRoutes}
      wrappers={{
        'empty': EmptyWrapper,
        'default': DefaultWrapper,
      }}
    />
  </ThemeProvider>
);
