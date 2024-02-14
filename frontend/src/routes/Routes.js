import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext.js';

import DashboardLayout from '../layout/DashboardLayout.js';
import Dashboard from '../pages/Dashboard.jsx';
import Login from '../pages/Login.jsx';
import PageNotFound from '../pages/PageNotFound.jsx';

const AppRoutes = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Routes>
      <Route
        path="/"
        element={
          currentUser ? (
            <Navigate to="/dashboard" replace key="navigate-dashboard" />
          ) : (
            <Navigate to="/login" replace key="navigate-login" />
          )
        }
      />
      <Route
        path="/dashboard"
        element={<DashboardLayout key="dashboard-layout" />}
      >
        <Route
          index
          element={<Dashboard userdata={currentUser} key="dashboard-content" />}
        />
      </Route>
      <Route path="/login" element={<Login key="login-content" />} />
      <Route path="*" element={<PageNotFound key="not-found-content" />} />
    </Routes>
  );
};

export default AppRoutes;
