import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import Chat from '../components/Dashboard/Chat.jsx';
import Member from '../components/Dashboard/MembersDirectory.jsx';
import Messages from '../components/Dashboard/Messages.jsx';
import { UserContext } from '../context/UserContext.js';
import { logout } from '../services/AuthServices.js';

function Dashboard() {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  // const handleLogout = async () => {
  //   try {
  //     await logout();
  //     setCurrentUser(null);
  //     navigate('/login', { replace: true });
  //   } catch (e) {
  //     console.error('Error during logout:', e);
  //   }
  // };

  return (
    <div className="flex justify-center px-3 h-full max-h-full">
      <div className="w-1/4 border-r-2">
        <Messages></Messages>
      </div>
      <div className="w-1/2 max-h-[100vh]">
        <Chat />
      </div>
      <div className="w-1/4 border-l-2">
        <Member />
      </div>
    </div>
  );
}

export default Dashboard;
