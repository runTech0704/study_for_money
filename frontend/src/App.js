import StudyLabelListDataFetcher from './study_label/ListDataFetcher'
import CreateLabel from './study_label/CreateDataFetcher'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StudyLabelListDataFetcher />
        <CreateLabel />
      </header>
    </div>
  );
}

export default App;
