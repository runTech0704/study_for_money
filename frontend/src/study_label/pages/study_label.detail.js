import React from 'react';
import { useParams, Link } from 'react-router-dom';
import StudyLabelDetailFetcher from '../DetailDataFetcher';

const StudyLabelDetail = () => {
    const { id } = useParams();
    const { data, loading, error } = StudyLabelDetailFetcher(id);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>No entity found</div>;

    const deleteEntity = () => {
        fetch(`http://localhost:8000/study-label/label/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            alert('Entity deleted');
            window.location = '/';
        })
        .catch(error => alert('Error deleting entity: ' + error.message));
    };

    return (
        <div>
            <h1>{data.study_label_name}</h1>
            <Link to={`/study-label/${id}/edit`}>Edit</Link>
            <button onClick={deleteEntity}>Delete</button>
            <br/>
            <Link to={`/study-label`}>一覧に戻る</Link>
        </div>
    );
};

export default StudyLabelDetail;
