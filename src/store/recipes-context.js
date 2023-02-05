import React, { useState, useEffect } from "react";
import { initialMockedRecipes } from "../config";

const RecipesContext = React.createContext({
  recipes: [],
  onAddRecipe: (recipeData) => {},
  onRemoveRecipe: (recipeId) => {},
  onRemoveAllRecipes: () => {},
  activatedRecipe: null,
  onActivateRecipe: () => {},
  onAddYearFilter: () => {},
  onRemoveYearFilter: () => {},
  yearFilter: null,
});

export function RecipesContextProvider(props) {
  const [recipes, setRecipes] = useState([]);
  const [activatedRecipe, setActivatedRecipe] = useState(null);
  const [yearFilter, setYearFilter] = useState(null);

  function uploadUpdateRecipes(recipeArray) {
    localStorage.setItem("recipes", JSON.stringify(recipeArray));
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
      uploadUpdateRecipes(initialMockedRecipes);
      storedRecipes = retrieveRecipesHandler();
    }
    setRecipes(storedRecipes);
  }, []);

  function onAddRecipe(recipeData) {
    setRecipes((currRecipes) => {
      const newRecipeArray = [recipeData, ...currRecipes];
      uploadUpdateRecipes(newRecipeArray);
      return newRecipeArray;
    });
  }

  function onRemoveRecipe(recipeId) {
    setRecipes((currRecipes) => {
      const newRecipeArray = currRecipes.filter((rec) => rec.id !== recipeId);
      uploadUpdateRecipes(newRecipeArray);
      return newRecipeArray;
    });
  }

  function onRemoveAllRecipes() {
    setRecipes([]);
    localStorage.removeItem("recipes");
  }

  function onActivateRecipe(recipeId) {
    setActivatedRecipe(recipes.filter((rec) => rec.id === recipeId).at(0));
  }

  function onAddYearFilter(year) {
    setYearFilter(year);
  }

  function onRemoveYearFilter() {
    setYearFilter(null);
  }

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        onAddRecipe,
        onRemoveRecipe,
        onRemoveAllRecipes,
        activatedRecipe,
        onActivateRecipe,
        onAddYearFilter,
        onRemoveYearFilter,
        yearFilter,
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  );
}

export default RecipesContext;
