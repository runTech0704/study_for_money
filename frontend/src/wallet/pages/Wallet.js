import React, { useEffect, useCallback, useRef } from 'react';
import useAuth from '../../hook/useAuth';
import { useUser } from '../../hook/userContext';

const Wallet = () => {
  const { user } = useUser();
  const { callApi, data, error, loading } = useAuth(user ? `${process.env.REACT_APP_API_URL}/user/wallet/${user.id}/` : null);
  const hasFetched = useRef(false);

  const fetchData = useCallback(() => {
    if (user && user.id && !hasFetched.current) {
      hasFetched.current = true;
      callApi();
    }
  }, [user, callApi]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (!user) return <p>User not found</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Wallet Balance</h1>
      {data ? <p>Current Balance: {data.wallet}</p> : <p>No data available</p>}
    </div>
  );
};

export default Wallet;
