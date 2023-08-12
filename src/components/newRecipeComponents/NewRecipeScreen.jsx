import React from "react";

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

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
        <form>
          <label for="radio-buttons">
            <label for="cook">Cook
              <input type="radio" name="cook"></input>
            </label>
            <label for="bake">Bake
              <input type="radio" name="bake"></input>
            </label>
            <label for="drink">Drink
              <input type="radio" name="drink"></input>
            </label>
          </label>
          <label>Recipe Name</label>
          <input />
          <label>Image URL</label>
          <input />
          <label>Prep Time</label>
          <input />
          <label>Cook Time</label>
          <input />
          <label>Number of People Served</label>
          <input />
          <label>Ingredients</label>
          <input />
          <label>Quantity</label>
          <input />
          <label>Instructions</label>
          <textarea></textarea>
          <button>Submit</button>
        </form>
    </section>
  );
};

export default NewRecipeScreen;
