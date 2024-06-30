import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Wallet from './pages/Wallet'

function WalletComponent() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/wallet/:userId">
              <Wallet/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default WalletComponent;
