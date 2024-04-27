import React from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import StudyLabelDeleteFetcher from '../hook/DeleteDataFetcher';
import StudyLabelDetailFetcher from '../hook/DetailDataFetcher';


const StudyLabelDetail = () => {
    const { id } = useParams();
    const history = useHistory();
    const { data, loading, error } = StudyLabelDetailFetcher(id);
    const { deleteEntity, isLoading: isDeleting, error: deleteError } = StudyLabelDeleteFetcher();

    const handleDelete = async () => {
        const confirmed = window.confirm('Are you sure you want to delete this entity?');
        if (confirmed) {
            const deleted = await deleteEntity(id);
            if (deleted) {
                history.push('/study-label');  // Redirect to home after delete
            } else {
                alert('Failed to delete the entity.');
            }
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>No entity found</div>;

    return (
        <div>
            <h1>{data.study_label_name}</h1>
            <Link to={`/study-label/${id}/edit`}>Edit</Link>
            <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white', marginLeft: '10px' }}>Delete</button>
            <br/>
            <Link to={`/study-label`}>一覧に戻る</Link>
        </div>
    );
};

export default StudyLabelDetail;
