import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { RotuesComponent } from './views/shared/routes';

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <BrowserRouter>
      <RotuesComponent />
    </BrowserRouter>
  );
};

export default App;
