import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const UserRegister = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { callApi, data, error, loading } = useAuth(`${process.env.REACT_APP_API_URL}/user/register/`, 'POST');
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    await callApi({ username, password });
  };

  useEffect(() => {
    if (data && data.user_id) {
      history.push(`/user/${data.user_id}/detail`);
    }
  }, [data, history]);

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      {error && <p>{error}</p>}
      {data && <p>Registered Successfully!</p>}
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit" disabled={loading}>{loading ? 'Loading...' : 'Register'}</button>
    </form>
  );
};

export default UserRegister;
