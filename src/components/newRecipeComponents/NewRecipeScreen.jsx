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
          <Form onSubmit={handleSubmit}>
            <label for="radio-buttons">
              <label for="cook">Cook
                <Field type="radio" name="type" value="cook"/>
              </label>
              <label for="bake">Bake
                <Field type="radio" name="type" value="bake"/>
              </label>
              <label for="drink">Drink
                <Field type="radio" name="type" value="drink"/>
              </label>
            </label>
            <label>Recipe Name</label>
            <Field 
              placeholder="Title your Recipe!" 
              value={values.recipeName}
              onChange={handleChange}
              name="recipeName"
            />
            <label>Image URL</label>
            <Field 
              placeholder="Place your Image"
              value={values.imageURL}
              onChange={handleChange}
              name="imageURL"
            />
            <label>Prep Time</label>
            <input 
              placeholder="Place your Prep Time"
              value={values.prepTime}
              onChange={handleChange}
              name="prepTime"
            />
            <label>Cook Time</label>
            <input 
              placeholder="Place your Cook Time"
              value={values.cookTime}
              onChange={handleChange}
              name="cookTime"
            />
            <label>Number of People Served</label>
            <input 
              placeholder="Place your Amount of People Served"
              value={values.serves}
              onChange={handleChange}
              name="serves"
            />
            <label>Ingredients</label>
            <input 
              placeholder="Place your Ingredients"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Quantity</label>
            <input 
              placeholder="Place your Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <ul>{ingredientDisplay}</ul>
            <button
              type="button"
              className="orange-btn"
              onClick={addIngredient}
            >Add Ingredients</button>
            <label>Instructions</label>
            <Field 
              as="textarea" 
              rows={6}
              value={values.instructions}
              onChange={handleChange}
              name="instructions"
            ></Field>
            <button type="submit" className="blue-btn">
              Submit
            </button>
          </Form>
          )}
        </Formik>
    </section>
  );
};

export default NewRecipeScreen;
