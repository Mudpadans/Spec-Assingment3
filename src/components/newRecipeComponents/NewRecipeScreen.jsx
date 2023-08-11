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

  

  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
        <form>
          <label></label>
          <input />
          <label></label>
          <input />
          <label></label>
          <input />
          <label></label>
          <input />
          <label></label>
          <input />
          <label></label>
          <input />
          <label></label>
          <input />
          <button type="radio"></button>
          <button type="radio"></button>
          <button type="radio"></button>
          <textarea></textarea>
        </form>
    </section>
  );
};

export default NewRecipeScreen;
