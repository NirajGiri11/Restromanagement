// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AdminPanel from './components/AdminPanel'; // Ensure this matches the file name exactly

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (admin = false) => {
    setIsLoggedIn(true);
    setIsAdmin(admin);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? (isAdmin ? <Navigate to="/admin" /> : <Navigate to="/dashboard" />) : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/dashboard"
          element={isLoggedIn && !isAdmin ? <Dashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/admin"
          element={isLoggedIn && isAdmin ? <AdminPanel /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
