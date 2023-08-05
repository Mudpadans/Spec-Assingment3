import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AdBanner from './AdBanner'
import RecipeCard from '../RecipeCard/RecipeCard';

const HomeScreen = () => { 
  const [recipes, setRecipes] = useState([])

  const [search, setSearch] = useState('')
  
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

  const recipeDisplay = recipes 
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase()
      let searchParams = search.toLowerCase()
      return title.includes(searchParams) 
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe}/>
    })

  return (
    <div>
      <AdBanner />
      <span style={{ 
        display: "flex", 
        justifyContent: "center",
        margin: "20px"
      }}>
        {/* <BiSearchAlt2 size="2em" color="#DA7635" /> */}
        <input 
          type="text"
          value={search}
          onChange={(e) => setSearch}
          placeholder='Search for a recipe'
          style={{
            textAlign: "center"
          }}
        />
        {recipeDisplay}
      </span>
    </div>
  )
}

export default HomeScreen