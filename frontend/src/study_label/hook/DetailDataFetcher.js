import { useState, useEffect } from 'react';
import StudyLabelDetails from '../pages/study_label.detail';

const StudyLabelDetailFetcher = (id) => {
    const [data, setEntity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/study-label/${id}/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setEntity(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [id]);

    return { data, loading, error };
};

export default StudyLabelDetailFetcher;
