import { useState } from 'react';

function CreateDataFetcher() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const createLabel = (study_label_name) => {
      setIsLoading(true);
      setMessage('');
      // fetch() の Promise を直接 return する
      return fetch('http://localhost:8000/api/study-label/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ study_label_name })
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          setIsLoading(false);
          setMessage('Entity created successfully!');
          console.log('Success:', data);
          return data;  // data を return して then() チェーンを可能にする
      })
      .catch((error) => {
          setIsLoading(false);
          setMessage('Error creating entity');
          console.error('Error:', error);
          throw error;  // エラーを再スローして catch() チェーンを可能にする
      });
  };

  return { createLabel, isLoading, message };
}

export default CreateDataFetcher;
