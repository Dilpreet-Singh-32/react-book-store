import React, { Fragment } from 'react';

import { Header, Footer } from '../shared/components';

interface HomeProps {}

export const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <Fragment>
      <Header />
      <Footer />
    </Fragment>
  );
};
