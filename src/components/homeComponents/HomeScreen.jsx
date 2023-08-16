import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AdBanner from './AdBanner';
import RecipeContainer from './RecipeContainer';
import styles from './Home.module.css'


const HomeScreen = () => { 
  const [recipes, setRecipes] = useState([]);
  
  const getRecipes = () => {
    axios 
      .get("https://recipes.devmountain.com/recipes")
      .then((res) => {
        setRecipes(res.data)
        console.log(res.data)
      })
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div className={styles.homescreen}>
      <AdBanner />
      <RecipeContainer recipes={recipes} />
      <div style={{ height: '13000px' }}></div> 
    </div>
  )
}

export default HomeScreen

