import React, { useState } from 'react';
import RecipeCard from "../RecipeCard/RecipeCard";
import styles from './Home.module.css';
import { BiSearchAlt2 } from 'react-icons/bi';

const RecipeContainer = ({recipes}) => {
    const [search, setSearch] = useState("");

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
        <span style={{ 
          display: "flex", 
          justifyContent: "center",
          margin: "20px"
        }}>
          <BiSearchAlt2 size="2em" color="#DA7635" />
          <input 
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search for a recipe'
            style={{
              textAlign: "center"
            }}
          />
          {recipeDisplay}
        </span>
      )
  }