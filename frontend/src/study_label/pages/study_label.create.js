import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import CreateDataFetcher from '../hook/CreateDataFetcher';

function StudyLabelCreate() {
  const [study_label_name, setName] = useState('');
  const { createLabel, isLoading, message } = CreateDataFetcher();
  const history = useHistory();  // useHistory フックを使用

  const handleSubmit = (event) => {
    event.preventDefault();
    createLabel(study_label_name)
      .then((data) => {
        // データ作成後に /entities に移動
        history.push('/study-label');
      })
      .catch((error) => {
        console.error('Creation failed:', error);
      });
  };

  return (
    <div>
      <h2>Create New Entity</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Label Name:
            <input
              type="text"
              value={study_label_name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Creating...' : 'Create'}
        </button>
      </form>
      {message && <p>{message}</p>}
      <Link to={`/study-label/`}>back</Link>
    </div>
  );
}

export default StudyLabelCreate;
