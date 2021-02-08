import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from '../../routes';
import { asyncComponent } from './asyncComponent';

interface RoutesProps {}

export const RotuesComponent: React.FunctionComponent<RoutesProps> = () => {
  return (
    <Switch>
      {routes.publicRoutes.map((route, index) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        );
      })}
    </Switch>
  );
};
