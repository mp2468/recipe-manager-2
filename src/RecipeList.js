import React from "react";

function RecipeList(props) {
  return (
    <ul>
      {props.recipes.map((recipe) => (
        <li key={recipe.name}>
          {recipe.name}
          <button onClick={() => props.onRecipeClick(recipe)}>View</button>
        </li>
      ))}
    </ul>
  );
}

export default RecipeList;
