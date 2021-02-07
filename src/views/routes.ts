interface Route {
  path: string;
  exact?: boolean;
  component: Promise<any>;
}

const publicRoutes: Route[] = [
  { path: '/', exact: true, component: import('./home') },
];

export default { publicRoutes };
