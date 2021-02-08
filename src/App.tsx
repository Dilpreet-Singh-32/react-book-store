import React from 'react';

import './App.css';
import { HomePage } from './views/home';

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  return <HomePage />;
};

export default App;
