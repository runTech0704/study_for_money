import React, { useState } from 'react';
import useAuth from '../../hook/useAuth';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { callApi, data, error, loading } = useAuth('/api/users/login/', 'POST');

  const handleLogin = async (e) => {
    e.preventDefault();
    await callApi({ email, password });
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      {data && <p>Login Successful!</p>}
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit" disabled={loading}>{loading ? 'Loading...' : 'Login'}</button>
    </form>
  );
};

export default UserLogin;
