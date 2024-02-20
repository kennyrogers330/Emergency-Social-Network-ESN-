/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/AuthServices';
import Button from '../../components/Button';
import leoImage from './../../assets/images/leo.jpg';

function Member({toggleMember, visibility}) {
  console.log(visibility)
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
      <div className={`flex flex-row mt-2 ${visibility ? '' : 'hidden'}`}>
        <img
          className="object-cover h-10 rounded-lg m-2"
          src={leoImage}
          alt="profile"
        />

        <div className="w-full flex justify-between">
          <div className="flex flex-col ml-4">
            <div className="font-bold">Florancio Dorrance</div>
            <div className="font-thin">+250781885227</div>
          </div>
        </div>
      </div>
  );
}
export default Member;
