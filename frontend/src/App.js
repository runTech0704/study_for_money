import StudyLabelList from './study_label/pages/study_label.list'
import StudyLabelDetail from './study_label/pages/study_label.detail'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateLabel from './study_label/CreateDataFetcher';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/study-label/:id">
            <StudyLabelDetail />
          </Route>
          <Route path="/study-label">
            <StudyLabelList />
            <CreateLabel />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
