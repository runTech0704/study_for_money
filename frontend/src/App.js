import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from './core/Sidebar';
import Study from './study/Study';
import Wallet from './wallet/Wallet';
import History from './history/History';
import StudyLabelComponent from './study_label/study_label.component';
import UserComponent from './user/userComponent';
import {UserProvider} from './hook/userContext'

const App = () => {
  const userId = '123'; // 実際のユーザーIDに置き換えてください

  return (
    <UserProvider>
        <Router>
            <div className="app">
                <Sidebar userId={userId} />
                <div className="content">
                <Switch>
                    <Route path="/study" element={<Study />} />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/user" element={<UserComponent />} />
                </Switch>
                </div>
            </div>
        </Router>
        <StudyLabelComponent />
        <UserComponent />
    </UserProvider>
  );
};

export default App;
