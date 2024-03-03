
import PropTypes from 'prop-types'
import { createContext, useState, useEffect } from 'react';
import { getExistingUsers } from '../services/AuthServices';

const ExistingUsersContext = createContext();

export const ExistingUsersProvider = ({ children }) => {
  const [existingUsers, setExistingUsers] = useState([]);
  const [existingUsername, setExistingUsername] = useState([])

    useEffect(() => {
      fetchExistingUsers()
    }, [])
    const fetchExistingUsers = async () => {
      try {
        const users = await getExistingUsers();
        setExistingUsers(users.citizens)
        setExistingUsername(users.usernames)
      } catch (error) {
        console.error('Error fetching existing users:', error);
      }
    };

  const updateUserHealthStatus = async (username, newHealthStatus) => {
    const updatedUsers = existingUsers?.map((user) =>
      user.username === username
        ? {
            ...user,
            healthStatus: newHealthStatus,
            healthStatusTimestamp: Date.now(),
          }
        : user
    )

    setExistingUsers(updatedUsers)
  }

  return (
    <ExistingUsersContext.Provider
      value={{ existingUsers, existingUsername, updateUserHealthStatus,fetchExistingUsers }}
    >
      {children}
    </ExistingUsersContext.Provider>
  )
};

export default ExistingUsersContext;


ExistingUsersProvider.propTypes = {
  children: PropTypes.node.isRequired,
}