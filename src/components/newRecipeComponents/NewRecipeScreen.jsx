import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import styles from "./NewRecipeScreen.module.css";

const NewRecipeScreen = () => {
  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const [ingredients, setIngredients] = useState([])
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName('');
    setQuantity('');
  }

  const postRecipes = (values) => {
    axios
      .post(`https://recipes.devmountain.com/recipes`, values)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    postRecipes(values);
    console.log(values);
  }

  const ingredientDisplay = ingredients.map((ing) => {
    return (
      <li>
        {ing.quantity} {ing.name}
      </li>
    )
  })

  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.input_container}>
              <input 
                placeholder="Title" 
                value={values.recipeName}
                onChange={handleChange}
                name="recipeName"
              />
              <input 
                placeholder="URL"
                value={values.imageURL}
                onChange={handleChange}
                name="imageURL"
              />
            </div>
            <div className={styles.radio_container}>
              <label for="radio-buttons">
                <label for="cook">Cook
                  <input type="radio" name="type" value="cook"/>
                </label>
                <label for="bake">Bake
                  <input type="radio" name="type" value="bake"/>
                </label>
                <label for="drink">Drink
                  <input type="radio" name="type" value="drink"/>
                </label>
              </label>
            </div>
            <div className={styles.input_container}>
              <input 
                placeholder="Prep Time"
                value={values.prepTime}
                onChange={handleChange}
                name="prepTime"
              />
              <input 
                placeholder="Cook Time"
                value={values.cookTime}
                onChange={handleChange}
                name="cookTime"
              />
              <input 
                placeholder="People Served"
                value={values.serves}
                onChange={handleChange}
                name="serves"
              />
            </div>
            <h3>New Ingredients</h3>
              <div className={styles.input_container}>
                <div className={styles.ingredient_inputs}>
                  <input 
                    placeholder="Ingredients"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input 
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <ul>{ingredientDisplay}</ul>
              </div>
            <button
              type="button"
              className={styles.orange_btn}
              onClick={addIngredient}
            >Add Ingredients</button>
            <label>Instructions</label>
            <textarea 
              rows={6}
              value={values.instructions}
              onChange={handleChange}
              name="instructions"
            ></textarea>
            <button type="submit" className={styles.blue_btn}>
              Submit
            </button>
          </form>
          )}
        </Formik>
    </section>
  );
};

export default NewRecipeScreen;
