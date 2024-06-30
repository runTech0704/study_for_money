import { useState } from 'react';

const getCookie = (name) => {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
};

const useAuth = (url, method = 'GET') => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const callApi = async (body) => {
    setLoading(true);
    const token = localStorage.getItem('jwt');
    const csrfToken = getCookie('csrftoken');
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
          ...(csrfToken ? { 'X-CSRFToken': csrfToken } : {})
        },
        credentials: 'include',
        body: JSON.stringify(body)
      });
      if (!response.ok) throw new Error('API call failed');
      const result = await response.json();
      if (result.refresh && result.access) { // Handle login and refresh tokens
        localStorage.setItem('jwt', result.access);
        localStorage.setItem('refreshToken', result.refresh);
      }
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { callApi, data, error, loading };
};

export default useAuth;
