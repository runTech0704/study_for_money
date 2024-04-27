import { useState } from 'react';

const StudyLabelUpdateFetcher = () => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateEntity = async (id, data) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8000/api/study-label/${id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            setLoading(false);
            return await response.json();
        } catch (err) {
            setError(err.message);
            setLoading(false);
            return null;
        }
    };

    return { updateEntity, isLoading, error };
};

export default StudyLabelUpdateFetcher;
