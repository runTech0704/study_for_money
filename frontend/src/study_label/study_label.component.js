import StudyLabelList from './pages/study_label.list'
import StudyLabelDetail from './pages/study_label.detail'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudyLabelEdit from './pages/study_label.edit';
import StudyLabelCreate from './pages/study_label.create';
import './study_label.component.css';

function StudyLabelComponent() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/study-label/create">
            <StudyLabelCreate/>
          </Route>
          <Route path="/study-label/:id/edit">
            <StudyLabelEdit />
          </Route>
          <Route path="/study-label/:id">
            <StudyLabelDetail />
          </Route>
          <Route path="/study-label">
            <StudyLabelList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default StudyLabelComponent;
