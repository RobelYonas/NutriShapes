import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";
import styled from "styled-components";
import { LuSalad } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import Pages from "./pages/Pages";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Search from "./components/Search";
import Logout from "./components/Logout";
import AdminDashboard from "./components/AdminDashboard";
import LandingPage from './pages/LandingPage';
import Category from "./components/Category"; // Make sure to import Category component

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      if (storedUser.role === 'admin') {
        setIsAdmin(true);
      }
    }
  }, []);

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
    if (user && user.role === 'admin') {
      setIsAdmin(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    setIsAdmin(false);
  };

  return (
    <div className="App">
      <Router>
        {user && (
          <>
            <Nav>
              <div>
                <LuSalad />
                <Logo to="/home">Nutrishape</Logo>
              </div>
              <div>
                <ProfileButton to="/profile"><FiUser /></ProfileButton>
                <Logout onLogout={handleLogout} />
              </div>
            </Nav>
            <Search />
            <Category /> {/* Include Category component */}
            {isAdmin && <AdminButton to="/admin">Admin Dashboard</AdminButton>}
          </>
        )}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onRegister={handleLogin} />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Pages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

const ProfileButton = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #f3f3f3;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e1e1e1;
  }
`;

const AdminButton = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: #007bff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin-top: 1rem;
  display: inline-block;

  &:hover {
    background-color: #0056b3;
  }
`;

export default App;
