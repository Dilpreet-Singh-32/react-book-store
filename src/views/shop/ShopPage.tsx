import React from 'react';

import { Header, Footer, Banner } from '../shared/components';
import { SideBar, Toolbar, ShopGrid, ShopList } from './components';

interface ShopPageProps {}

const ShopPage: React.FunctionComponent<ShopPageProps> = () => {
  return (
    <div className="wrapper" id="wrapper">
      <Header />
      <Banner title="Shop Page" />
      <div className="page-shop-sidebar left--sidebar bg--white section-padding--lg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12 order-2 order-lg-1 md-mt-40 sm-mt-40">
              <SideBar />
            </div>
            <div className="col-lg-9 col-12 order-1 order-lg-2">
              <Toolbar />
              <div className="tab__container">
                <ShopGrid />
                <ShopList />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShopPage;
