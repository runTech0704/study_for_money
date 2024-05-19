import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/user/${userId}/`);
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>User Detail</h2>
      {user && (
        <div>
          <p>User ID: {user.user_id}</p>
          <p>Username: {user.username}</p>
          <p>Wallet: {user.wallet}</p>
          <p>Is Author: {user.is_author ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetail;
