import { useState, useEffect } from 'react';

const StudyLabelListFetcher = () => {
    const [data, setEntities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/api/study-label/label/')  // Django APIエンドポイント
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setEntities(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    return { data, loading, error };
};

export default StudyLabelListFetcher;
