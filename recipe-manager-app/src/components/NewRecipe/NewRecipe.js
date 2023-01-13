import classes from "./NewRecipe.module.css";
import Card from "../UI/Card";
import { useState } from "react";
import RecipeForm from "./RecipeForm";

const NewRecipe = (props) => {
  // state for managing the form
  const [wantsToAdd, setWantsToAdd] = useState(false);

  // handler for showing the form (change the state)
  const showFormHandler = () => setWantsToAdd(true);

  // handler for hiding the form (change the state)
  const hideFormHandler = () => setWantsToAdd(false);

  // handler for adding the recipe
  const addRecipeHandler = (recipeData) => {
    console.log(recipeData);
  };

  return (
    <Card className={classes["card--new-recipe"]}>
      {!wantsToAdd && (
        <button
          className={classes["btn--new-recipe"]}
          onClick={showFormHandler}
        >
          Add New Recipe
        </button>
      )}
      {wantsToAdd && <RecipeForm />}
    </Card>
  );
};

export default NewRecipe;
