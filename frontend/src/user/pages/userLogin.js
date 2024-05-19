import React, { useState } from 'react';
import useAuth from '../../hook/useAuth';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { callApi, data, error, loading } = useAuth(`${process.env.REACT_APP_API_URL}/user/login/`, 'POST');

  const handleLogin = async (e) => {
    e.preventDefault();
    await callApi({ username, password });
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      {data && <p>Login Successful!</p>}
      <input type="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit" disabled={loading}>{loading ? 'Loading...' : 'Login'}</button>
    </form>
  );
};

export default UserLogin;
