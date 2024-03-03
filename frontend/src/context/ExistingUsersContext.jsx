
import PropTypes from 'prop-types'
import { createContext, useState, useEffect } from 'react';
import { getExistingUsers } from '../services/AuthServices';

const ExistingUsersContext = createContext();

export const ExistingUsersProvider = ({ children }) => {
  const [existingUsers, setExistingUsers] = useState([]);

  useEffect(() => {
    const fetchExistingUsers = async () => {
      try {
        const users = await getExistingUsers();
        setExistingUsers(users.citizens)
      } catch (error) {
        console.error('Error fetching existing users:', error);
      }
    };

    fetchExistingUsers();
  }, []);

  const updateUserHealthStatus = async (username, newHealthStatus) => {
    const updatedUsers =  existingUsers?.map((user) =>
      user.username === username ? { ...user, healthStatus: newHealthStatus } : user
    )

    setExistingUsers(updatedUsers)
  }

  return (
    <ExistingUsersContext.Provider value={{ existingUsers,updateUserHealthStatus }}>
      {children}
    </ExistingUsersContext.Provider>
  );
};

export default ExistingUsersContext;


ExistingUsersProvider.propTypes = {
  children: PropTypes.node.isRequired,
}