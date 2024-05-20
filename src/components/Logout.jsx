import React from 'react';
import styled from 'styled-components';

const Logout = ({ onLogout }) => {
  return (
    <StyledButton onClick={onLogout}>Logout</StyledButton>
  );
};

const StyledButton = styled.button`
  display: inline-block;
  padding: 0.2rem 0.8rem; /* Adjusted padding */
  font-size: 14px; /* Adjusted font size */
  font-weight: 700;
  color: black;
  border: 2px solid rgb(252, 70, 100); /* Adjusted border size */
  cursor: pointer;
  position: relative;
  background-color: transparent;
  text-decoration: none;
  overflow: hidden;
  z-index: 1;
  font-family: inherit;
  transition: color 0.3s;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(252, 70, 100);
    transform: translateX(-100%);
    transition: all 0.3s;
    z-index: -1;
  }

  &:hover::before {
    transform: translateX(0);
  }

  &:hover {
    color: white;
  }
`;

export default Logout;
