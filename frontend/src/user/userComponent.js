import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
          <Route path="/user/:id/settings">
            <UserSettings />
          </Route>
          <Route path="/user/login">
            <UserLogin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default UserComponent;
