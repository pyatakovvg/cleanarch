
import pageController from "@controllers/PageController";

import React from 'react';

import View from './View';


function App() {
  React.useEffect(() => {
    (async () => {
      pageController.processState(true);
      await pageController.getAll();
      pageController.processState(false);
    })();

  }, []);

  // return null;
  return (
    <View />
  );
}

export default App;
