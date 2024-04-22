import React from 'react';
import { Link } from 'react-router-dom';
import StudyLabelListFetcher from '../hook/ListDataFetcher';

const StudyLabelList = () => {
    const { data, loading, error } = StudyLabelListFetcher();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Entities</h2>
            <ul>
                {data.map(entity => (
                    <li key={entity.study_label_id}>
                        <Link to={`/study-label/${entity.study_label_id}`}>{entity.study_label_name}</Link>
                    </li>
                ))}
            </ul>
            <Link to={`/study-label/create`}>create</Link>
        </div>
    );
};

export default StudyLabelList;
