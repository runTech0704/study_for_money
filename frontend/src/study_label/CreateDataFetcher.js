import React, { useState } from 'react';
import './CreateDataFetcher.css'

function CreateLabel() {
  const [study_label_name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage('');

    // 以下のURLは実際のAPIエンドポイントに置き換えてください
    fetch('http://localhost:8000/api/study-label/label/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ study_label_name }),
    })
    .then(response => response.json())
    .then(data => {
      setIsLoading(false);
      setMessage('Entity created successfully!');
      console.log('Success:', data);
    })
    .catch((error) => {
      setIsLoading(false);
      setMessage('Error creating entity');
      console.error('Error:', error);
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
    </div>
  );
}

export default CreateLabel;
