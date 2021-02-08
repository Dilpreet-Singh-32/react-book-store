interface Route {
  path: string;
  exact?: boolean;
  component: any;
}

const publicRoutes: Route[] = [
  { path: '/', exact: true, component: () => import('./home') },
  { path: '/shop', exact: true, component: () => import('./shop') },
];

export default { publicRoutes };
