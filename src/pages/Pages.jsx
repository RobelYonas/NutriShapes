import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Meal from './Meal';
import Searched from './Searched';
import Recipe from './Recipe';
import CalorieTracker from './CalorieTracker';
import { AnimatePresence } from 'framer-motion';
import styles from '../style/Pages.module.css';

function Pages() {
  const location = useLocation();
  return (
    <div className={styles.pages}>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/meal/:type' element={<Meal />} />
          <Route path='/recipe/:id' element={<Recipe />} />
          <Route path='/searched/:query' element={<Searched />} />
          <Route path='/tracker' element={<CalorieTracker />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default Pages;
