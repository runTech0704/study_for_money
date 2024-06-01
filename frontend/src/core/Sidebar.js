import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

import { useUser } from '../hook/userContext';

const Sidebar = () => {
  const { user } = useUser(); // ユーザーIDを取得

  console.log(user)
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/study">記録する</Link>
        </li>
        <li>
          <Link to={`/wallet/${user?.id}`}>お財布</Link>
        </li>
        <li>
          <Link to={`/history/${user?.id}`}>履歴</Link>
        </li>
        <li>
          <Link to={`/user/${user?.id}/detail`}>ユーザー情報</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
