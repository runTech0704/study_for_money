import React, { useState } from 'react';
import useAuth from '../../hook/useAuth';

const UserSettings = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { callApi, data, error, loading } = useAuth('/api/users/update/', 'PUT');

  const handleUpdate = async (e) => {
    e.preventDefault();
    await callApi({ email, password });
  };

  return (
    <form onSubmit={handleUpdate}>
      <h2>Settings</h2>
      {error && <p>{error}</p>}
      {data && <p>Updated Successfully!</p>}
      <input type="email" placeholder="New Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="New Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit" disabled={loading}>{loading ? 'Updating...' : 'Update'}</button>
    </form>
  );
};

export default UserSettings;
