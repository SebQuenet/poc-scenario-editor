import React from 'react';

import { Route } from 'react-router-dom';

import routesConfig from './config';

const renderRoutes = () => 
  routesConfig.map(routeData => <Route
    key={routeData.path}
    exact={routeData.exact}
    path={routeData.path}
    component={routeData.component}
  />);

export default renderRoutes;