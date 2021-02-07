import React from 'react';

import './App.css';
import { Home } from './views/home';

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  return <Home />;
};

export default App;
