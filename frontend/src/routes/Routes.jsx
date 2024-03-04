import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";

import DashboardLayout from "../layout/DashboardLayout.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Login from "../pages/Login.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
import SpeedTestInterface from "../pages/SpeedTestInterface.jsx";




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
            <Navigate to="/welcome" replace key="welcome-content" />
          )
        }
      />
      <Route element={<PrivateRoutes />}>
        <Route
          path="/dashboard"
          element={<DashboardLayout key="dashboard-layout" />}
        >
          <Route
            index
            element={
              <Dashboard userdata={currentUser} key="dashboard-content" />
            }
          />
        </Route>
      </Route>
      <Route path="/speed-test-interface" element={<SpeedTestInterface />} />
      <Route path="/welcome" element={<LandingPage key="welcome-content" />} />
      <Route
        path="/login"
        element={
          currentUser ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Login key="login-content" />
          )
        }
      />
      <Route path="*" element={<PageNotFound key="not-found-content" />} />
    </Routes>
  );
};

export default AppRoutes;
