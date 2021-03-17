import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';

import Index from '../pages/Index';
import Login from '../pages/Login';
import Update from '../pages/Update';

const Routes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/index" />
      </Route>
      <Route path="/index">
        {isAuthenticated() ? <Index /> : <Redirect to="/login" />}
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/update/:id">
        {isAuthenticated() ? <Update /> : <Redirect to="/login" />}
      </Route>
    </Switch>
  );
};

export default Routes;
