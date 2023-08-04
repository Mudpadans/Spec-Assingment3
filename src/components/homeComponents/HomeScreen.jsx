import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AdBanner from './AdBanner'
import RecipeCard from '../RecipeCard/RecipeCard';

const HomeScreen = () => { 
  const [recipes, setRecipes] = useState([])

  const [search, setSearch] = useState([])
  
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
    <div>
      <AdBanner />
      <span>
        {/* <BiSearchAlt2 size="2em" color="#DA7635" /> */}
        <input 
          type="text"
          value={search}
          onChange={(e) => setSearch}
        />
      </span>
    </div>
  )
}

export default HomeScreen