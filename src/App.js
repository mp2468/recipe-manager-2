import React, { useState } from "react";
import RecipeInput from "./RecipeInput";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import "./index.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  function handleAddRecipe(recipe) {
    setRecipes([...recipes, recipe]);
  }

  function handleRecipeClick(recipe) {
    setSelectedRecipe(recipe);
  }

  function handleCloseRecipe() {
    setSelectedRecipe(null);
  }

  return (
    <div>
      <h1>My Recipe App</h1>
      <RecipeInput onAddRecipe={handleAddRecipe} />
      <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
      {selectedRecipe && (
        <RecipeDetails recipe={selectedRecipe} onClose={handleCloseRecipe} />
      )}
    </div>
  );
}

export default App;
