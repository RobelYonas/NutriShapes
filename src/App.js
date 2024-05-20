import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";
import Pages from "./pages/Pages";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Search from "./components/Search";
import styled from "styled-components";
import { LuSalad } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import Logout from "./components/Logout";

function App() {
  const [user, setUser] = useState(localStorage.getItem('user'));

  const handleLogin = () => {
    setUser(localStorage.getItem('user'));
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(localStorage.getItem('user'));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

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
          </>
        )}
        <Routes>
          <Route path="/" element={user ? <Navigate to="/home" /> : <Navigate to="/login" />} />
          <Route path="/login" element={user ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
          <Route path="/register" element={user ? <Navigate to="/home" /> : <Register onRegister={handleLogin} />} />
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
                <Profile onLogout={handleLogout} />
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

export default App;
