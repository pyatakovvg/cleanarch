
import pageController from '@controllers/PageController';

import React from 'react';
import { useParams } from 'react-router-dom';

import View from './View';


function App() {
  const { uuid } = useParams();

  React.useEffect(() => {
    (async () => {
      pageController.processState(true);
      await pageController.getByUuid(uuid ! );
      pageController.processState(false);
    })();
  }, []);

  return (
    <View />
  );
}

export default App;
