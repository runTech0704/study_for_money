import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UserDetail from './pages/userDetail'
import UserRegister from './pages/userRegister'
import UserLogin from './pages/userLogin'
import UserSettings from './pages/userSettings'

function UserComponent() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/user/register">
            <UserRegister />
          </Route>
          <Route path="/user/:userId/settings">
            <UserSettings />
          </Route>
          <Route path="/user/login">
            <UserLogin />
          </Route>
          <Route path="/user/:userId/detail">
            <UserDetail/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default UserComponent;
