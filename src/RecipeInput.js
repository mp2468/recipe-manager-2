import React, { useState } from "react";

function RecipeInput(props) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const recipe = { name, ingredients, instructions };
    props.onAddRecipe(recipe);
    setName("");
    setIngredients("");
    setInstructions("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Ingredients:
        <textarea
          value={ingredients}
          onChange={(event) => setIngredients(event.target.value)}
        />
      </label>
      <br />
      <label>
        Instructions:
        <textarea
          value={instructions}
          onChange={(event) => setInstructions(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default RecipeInput;
