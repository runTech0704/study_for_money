import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from './core/Sidebar';
import Study from './study/Study';
import History from './history/History';
import Components from './Components';
import UserComponent from './user/userComponent';
import { UserProvider } from './hook/userContext';
import Wallet from './wallet/pages/Wallet';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="app">
          <Sidebar />
          <div className="content">
            <Switch>
              <Route path="/study" component={Study} />
              <Route path="/wallet/:userId" component={Wallet} />
              <Route path="/history/:userId" component={History} />
              <Route path="/user/:userId/detail" component={UserComponent} />
            </Switch>
          </div>
        </div>
      </Router>
      <Components />
    </UserProvider>
  );
};

export default App;
