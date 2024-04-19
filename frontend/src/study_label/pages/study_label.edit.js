// EntityEdit.js
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import StudyLabelUpdateFetcher from '../hook/UpdateDataFetcher';
import StudyLabelDetailFetcher from '../hook/DetailDataFetcher';

const StudyLabelEdit = () => {
    const { id } = useParams();
    const history = useHistory();
    const { updateEntity, isLoading: isUpdating, error: updateError } = StudyLabelUpdateFetcher();
    const { entity, loading: isLoading, error } = StudyLabelDetailFetcher(id);
    const [formData, setFormData] = useState({});

    // When entity loads, update formData state
    useEffect(() => {
        if (entity) {
            setFormData({ study_label_name: entity.study_label_name|| '' });
        }
    }, [entity]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const updatedEntity = await updateEntity(id, formData);
        if (updatedEntity) {
            history.push(`/study-label/${id}`);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    if (isLoading || isUpdating) return <p>Loading...</p>;
    if (error || updateError) return <p>Error: {error || updateError}</p>;

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="study_label_name" value={formData.study_label_name} onChange={handleChange} required />
            </label>
            <button type="submit">Update Entity</button>
        </form>
    );
};

export default StudyLabelEdit;
