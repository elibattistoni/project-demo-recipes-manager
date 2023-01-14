import classes from "./NewRecipe.module.css";
import Card from "../UI/Card";
import { useState } from "react";
import RecipeForm from "./RecipeForm";

const NewRecipe = (props) => {
  // state for managing the form
  const [wantsToAdd, setWantsToAdd] = useState(false);

  // handler for showing the form (change the state)
  const toggleFormHandler = () =>
    setWantsToAdd((currentState) => !currentState);

  // handler for hiding the form (change the state)
  const hideFormHandler = () => setWantsToAdd(false);

  // handler for adding the recipe
  const addRecipeHandler = (recipeData) => {
    console.log("recipeData", recipeData);
    //TODO send request to db
    setWantsToAdd(false);
  };

  return (
    <Card className={classes["new-recipe__card"]}>
      <button
        className={classes["new-recipe__btn"]}
        onClick={toggleFormHandler}
      >
        Add New Recipe
      </button>
      {wantsToAdd && (
        <RecipeForm onClose={hideFormHandler} onSubmitForm={addRecipeHandler} />
      )}
    </Card>
  );
};

export default NewRecipe;
