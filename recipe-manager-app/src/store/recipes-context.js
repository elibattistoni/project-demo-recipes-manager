import React, { useState, useEffect } from "react";
import { initialMockedRecipes } from "../config";

const RecipesContext = React.createContext({
  recipes: [],
  onAddRecipe: (recipeData) => {},
  onRemoveRecipe: (recipeId) => {},
  onRemoveAllRecipes: () => {},
});

export function RecipesContextProvider(props) {
  const [recipes, setRecipes] = useState([]);

  function uploadInitialRecipes() {
    localStorage.setItem("recipes", JSON.stringify(initialMockedRecipes));
  }

  function retrieveRecipesHandler() {
    const storage = localStorage.getItem("recipes");
    return JSON.parse(storage);
  }

  // when rendering initially, load recipes from local storage
  useEffect(() => {
    let storedRecipes;
    storedRecipes = retrieveRecipesHandler();
    if (!storedRecipes) {
      uploadInitialRecipes();
      storedRecipes = retrieveRecipesHandler();
    }
    setRecipes(storedRecipes);
  }, []);

  function onAddRecipe(recipeData) {
    // NB TODO CHECK
    setRecipes((currRecipes) => {
      return [recipeData, ...currRecipes];
    });
  }

  function onRemoveRecipe(recipeId) {
    // NB TODO CHECK
    setRecipes((currRecipes) =>
      currRecipes.filter((rec) => rec.id !== recipeId)
    );
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }

  function onRemoveAllRecipes() {
    // NB TODO check
    localStorage.removeItem("recipes");
  }

  return (
    <RecipesContext.Provider
      value={{ recipes, onAddRecipe, onRemoveRecipe, onRemoveAllRecipes }}
    >
      {props.children}
    </RecipesContext.Provider>
  );
}

export default RecipesContext;
