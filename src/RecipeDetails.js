import React from "react";

function RecipeDetails(props) {
  return (
    <div>
      <h2>{props.recipe.name}</h2>
      <p>Ingredients: {props.recipe.ingredients}</p>
      <p>Instructions: {props.recipe.instructions}</p>
      <button onClick={props.onClose}>Close</button>
    </div>
  );
}

export default RecipeDetails;
