import StudyLabelList from './study_label/pages/study_label.list'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateLabel from './study_label/CreateDataFetcher'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/study-label/:id">
            <CreateLabel />
          </Route>
          <Route path="/study-label">
            <StudyLabelList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
