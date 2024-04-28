// useDeleteEntity.js
import { useState } from 'react';

const StudyLabelDeleteFetcher = () => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteEntity = async (id) => {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/study-label/${id}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            setLoading(false);
            return true;  // Return true on successful deletion
        } catch (err) {
            setError(err.message);
            setLoading(false);
            return false;  // Return false on failure
        }
    };

    return { deleteEntity, isLoading, error };
};

export default StudyLabelDeleteFetcher;
