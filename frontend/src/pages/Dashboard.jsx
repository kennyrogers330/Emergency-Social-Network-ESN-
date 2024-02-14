import React, { useContext } from 'react';

import Chat from '../components/Dashboard/Chat.jsx';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/AuthServices.js';
import { UserContext } from '../context/UserContext.js';
import Button from './../components/Button.jsx';
import Input from '../components/Input.jsx';

function Dashboard() {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      setCurrentUser(null);
      navigate('/login', { replace: true });
    } catch (e) {
      console.error('Error during logout:', e);
    }
  };

  return (
    <div className="flex justify-center px-3 h-full">
      <div className="w-1/4 border-r-2">
        Messages
        <h1>Start of the project.</h1>
        <Button>Button</Button>
        <Button
          size="large"
          backgroundColor={`bg-colorBluePrimary`}
          hoverBackgroundColor={`bg-red-100`}
          textColor={`text-red-300`}
        >
          Large Button
        </Button>
        <Button size="small">Small Button</Button>
        <Button onClick={handleLogout}>Click to Logout</Button>
        <Input
          label="Label"
          details="details"
          placeholder="Placeholder"
          error="something wrong"
        />
      </div>
      <div className="w-1/2">
        <Chat />
      </div>
      <div className="w-1/4 border-l-2">Group Directory</div>
    </div>
  );
}

export default Dashboard;
