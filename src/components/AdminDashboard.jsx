import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0% 20%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/users`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
                setError('Error fetching users');
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (userId) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`${process.env.REACT_APP_API_URL}/api/auth/users/${userId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUsers(users.filter(user => user._id !== userId));
        } catch (error) {
            console.error('Error deleting user:', error);
            setError('Error deleting user');
        }
    };

    return (
        <DashboardContainer>
            <GlobalStyle />
            <h1>Admin Dashboard</h1>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <UserTable>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <DeleteButton onClick={() => handleDelete(user._id)}>Delete</DeleteButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </UserTable>
        </DashboardContainer>
    );
};

export default AdminDashboard;

// Styled components
const DashboardContainer = styled.div`
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
`;

const ErrorMessage = styled.p`
    color: red;
    font-weight: bold;
`;

const UserTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;

    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th {
        background-color: #f4f4f4;
    }

    tr:nth-child(even) {
        background-color: #f9f9f9;
    }

    tr:hover {
        background-color: #f1f1f1;
    }
`;

const DeleteButton = styled.button`
    background-color: #ff4d4d;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #ff1a1a;
    }
`;
