import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/AuthServices';
import Button from '../Button.jsx';
import { UserContext } from '../../context/UserContext';

function Member() {
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
    <>
      <div className="flex flex-row mt-2">
        <img
          className="object-cover h-10 rounded-lg m-2"
          src={require('./../../Images/leo.jpg')}
          alt="profile"
        />

        <div className="w-full flex justify-between">
          <div className="flex flex-col ml-4">
            <div className="font-bold">Florancio Dorrance</div>
            <div className="font-thin">+250781885227</div>
          </div>
          {/* <div className="mr-2">online</div> */}
          <Button onClick={handleLogout}> Logout</Button>
        </div>
      </div>
    </>
  );
}
export default Member;
