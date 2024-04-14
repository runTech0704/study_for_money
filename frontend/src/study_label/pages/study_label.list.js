import React from 'react';
import { Link } from 'react-router-dom'; // react-router-domがインストールされている必要があります
import StudyLabelListFetcher from '../ListDataFetcher';

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
        </div>
    );
};

export default StudyLabelList;
