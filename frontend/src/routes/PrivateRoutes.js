// PrivateRoutes.js
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  if (!currentUser) {
    // Redirect to the login page if not authenticated
    navigate('/login', { replace: true });
    return null;
  }

  return <Route {...rest} element={children} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
