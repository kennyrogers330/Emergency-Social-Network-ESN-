import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/AuthServices.js';
import { UserContext } from '../../context/UserContext.jsx';
import Input from '../../components/Input.jsx';
import Button from '../../components/Button.jsx';
import { toast } from 'react-hot-toast';
import { existingUsers } from '../../services/AuthServices.js';
import Popup from '../../components/Popup.jsx';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { setCurrentUser } = useContext(UserContext);

  console.log(existingUsers)
  // const [existingUsers, setExistingUsers] = useState(null);

  // useEffect(() => {
  //   const users = getExistingUsers()
  //   setExistingUsers(users)
  // })

  const navigate = useNavigate();

  const tryLogin = () => {    
    if (username.length < 3 || password.length < 4) {
      return;
    }
    console.log(existingUsers)
    if (existingUsers.usernames.includes(username)) {
      return setIsVisible(true)
    }
    const handleLogin = async () => {    
      setSubmitted(true);
      try {
        
        const userData = await login(username, password);
        if (userData) {
          setCurrentUser(userData);
          toast.success('Logged in successfully');
          navigate('/dashboard', { replace: true });
          console.log('User logged in:', userData);
        } else {
          toast.error('Login failed');
          throw new Error('Login failed');
        }
      } catch (err) {
        console.error('Error during login:', err);
        if (!err.message || !err.message.includes('Login failed')) {
          if (err.response) {
            toast.error(
              `Login failed: ${err.response.status} ${err.response.statusText}`,
            );
          } else {
            toast.error('Login failed');
          }
        }
      }  
    }
    handleLogin() 
  }

  const handleYesClick = () => {
    setIsVisible(false);
    const handleLogin = async () => {    
      setSubmitted(true);
      try {
        
        const userData = await login(username, password);
        if (userData) {
          setCurrentUser(userData);
          toast.success('Logged in successfully');
          navigate('/dashboard', { replace: true });
          console.log('User logged in:', userData);
        } else {
          toast.error('Login failed');
          throw new Error('Login failed');
        }
      } catch (err) {
        console.error('Error during login:', err);
        if (!err.message || !err.message.includes('Login failed')) {
          if (err.response) {
            toast.error(
              `Login failed: ${err.response.status} ${err.response.statusText}`,
            );
          } else {
            toast.error('Login failed');
          }
        }
      }  
    }
    handleLogin()
  };
  const handleNoClick = () => {
    setIsVisible(false);
    navigate('/login', { replace: true });
  };  

  
  return (
    <>
      <div className="flex flex-col justify-between w-full">
        <Popup 
          clickYes={handleYesClick}
          clickNo={handleNoClick}
          visibility={isVisible}
        />
        <Input
          placeholder="Enter Username"
          label="Username"
          error={
            submitted && (!username || username.length < 3)
              ? 'Username must be at least 3 characters'
              : ''
          }
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <Input
          placeholder="Enter Password"
          label="Password"
          error={
            submitted && (!password || password.length < 4)
              ? 'Please enter a valid password'
              : ''
          }
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <div className="items-center w-full mt-12">
        <Button
          size="large"
          backgroundColor={`bg-colorBluePrimary`}
          textColor={`text-white`}
          onClick={tryLogin}
        >
          Login
        </Button>
      </div>
    </>
  );
};

export default LoginForm;
