import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import { Toaster } from 'react-hot-toast';
import DashboardLayout from './layout/DashboardLayout.js';
// import io from 'socket.io-client';
import React from 'react';
import ChatUI from './components/Socket/chatPublicly.js';

function App() {
  // useEffect(() => {
  //   const socket = io.connect('http://localhost:8000');
  //   socket.on('Data', (data) => {
  //     console.log('Message from server:', data);
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route
            key="key__dashboard"
            path="/dashboard"
            element={<DashboardLayout />}
          >
            <Route index element={<Dashboard />} />
          </Route>
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="/public/:username" element={<ChatUI />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          className: 'text-base max-w-md py-4 px-6 bg-gray-50 text-gray-700',
        }}
      />
    </>
  );
}

export default App;
