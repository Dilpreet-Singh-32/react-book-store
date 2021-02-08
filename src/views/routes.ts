import { lazy } from 'react';

const HomePage = lazy(() => import('./home'));
const ShopPage = lazy(() => import('./shop'));

interface Route {
  path: string;
  exact?: boolean;
  component: any;
}

const publicRoutes: Route[] = [
  { path: '/', exact: true, component: HomePage },
  { path: '/shop', exact: true, component: ShopPage },
];

export default { publicRoutes };
