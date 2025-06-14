import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
import Add from './pages/Add/Add';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "https://tomato-backend-97bx.onrender.com";

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          {/* Redirect root "/" to "/orders" */}
          <Route path="/" element={<Navigate to="/orders" />} />

          {/* Defined routes */}
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />

          {/* Catch-all route for unmatched URLs */}
          <Route path="*" element={<h2 style={{ margin: '20px' }}>404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
