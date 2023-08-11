import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import DetailBanner from './DetailBanner';
import Footer from '../Footer/Footer';
import styles from './DetailScreen.module.css'

const DetailScreen = () => {  
  const { id } = useParams()
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    axios
      .get(`https://recipes.devmountain.com/recipes/${id}`)
      .then((res) => {
        setRecipe(res.data)
      })
  })

  return (
    <section>
      <DetailBanner image={recipe.image_url} title={recipe.recipe_name}/>
      <div className={styles.container}>
        <div className={styles.info}>
            <h3>Recipe</h3>
              <p>Prep time: {recipe.prep_time}</p>
              <p>Cook time: {recipe.cook_time}s</p>
              <p>Serves: {recipe.serves}</p>
            <h3>Ingredients</h3>
              {recipe.ingredients && recipe.ingredients
              .map((ing, index) => {
                return <h4>
                  {ing.quantity} 
                  {ing.ingredient}
                </h4>
              })}
        </div>
        <div className={styles.instructions}>
          <h3>Instructions</h3>
          <br/>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default DetailScreen;
