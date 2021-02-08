import React from 'react';

import { HomePage } from '../views/home';
import { ShopPage } from '../views/shop';

interface Route {
  path: string;
  exact?: boolean;
  component: React.ComponentType<any>;
}

const publicRoutes: Route[] = [
  { path: '/', exact: true, component: HomePage },
  { path: '/shop', exact: true, component: ShopPage },
];

export default { publicRoutes };
