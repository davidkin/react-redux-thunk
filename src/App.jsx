import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import history from './history';
import './index.scss'
import Home from './Pages/Home/Home';

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route 
          exact
          path="/"
          component={Home}
        />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;

// exact - строгое равенсто роутeрoв