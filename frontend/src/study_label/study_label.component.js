import StudyLabelList from './pages/study_label.list'
import StudyLabelDetail from './pages/study_label.detail'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateLabel from './hook/CreateDataFetcher';
import StudyLabelEdit from './pages/study_label.edit';

function StudyLabelComponent() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/study-label/:id/edit">
            <StudyLabelEdit />
          </Route>
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

export default StudyLabelComponent;
