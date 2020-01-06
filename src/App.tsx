import React from 'react';
import history from './utils/history';
// import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Profile from './pages/Profile';

import { Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { useAuth0 } from './Auth0';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", "Hiragino Sans", Meiryo, sans-serif;
  }
`;

export const routes = [
  {
    index: '1',
    exact: true,
    label: 'Home',
    icon: 'pie-chart',
    path: '/',
    component: Home
  },
  {
    index: '2',
    label: 'Profile',
    icon: 'desktop',
    path: '/profile',
    component: Profile
  }
];

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Router history={history}>
        <Switch>
          {routes.map(route => (
            <Route key={route.index} path={route.path} exact={route.exact} component={route.component} />
          ))}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
