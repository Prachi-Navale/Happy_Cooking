import React from 'react';
import './App.css';
import Header from './sections/Header/Header';
import Hero from './sections/Hero/Hero';
import RecipeCategories from './sections/RecipeCategories/RecipeCategories';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <RecipeCategories />
    </div>
  );
}

export default App;
