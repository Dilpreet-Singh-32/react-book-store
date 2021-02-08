import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Loading } from './views/shared/components';
import { RotuesComponent } from './views/shared/routes';

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <RotuesComponent />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
