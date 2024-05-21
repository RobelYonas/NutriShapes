// src/pages/Home.jsx
import { motion } from "framer-motion";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Global Styles
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

// Motion Div styled component
const MotionDiv = styled(motion.div)`
  // Add any additional styles for the motion div if needed
`;

function Home() {
  return (
    <>
      <GlobalStyle />
      <MotionDiv
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Veggie />
        <Popular />
      </MotionDiv>
    </>
  );
}

export default Home;
