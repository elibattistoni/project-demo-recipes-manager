import classes from "./NewRecipe.module.css";
import { useState } from "react";
import RecipeForm from "./RecipeForm";

export default function NewRecipe(props) {
  // state for managing the form
  const [wantsToAdd, setWantsToAdd] = useState(false);

  // handler for showing the form (change the state)
  const toggleFormHandler = () =>
    setWantsToAdd((currentState) => !currentState);

  // handler for hiding the form (change the state)
  const hideFormHandler = () => setWantsToAdd(false);

  return (
    <section className={classes["new-recipe__card"]}>
      <button
        className={classes["new-recipe__btn"]}
        onClick={toggleFormHandler}
      >
        Add New Recipe
      </button>
      {wantsToAdd && <RecipeForm onClose={hideFormHandler} />}
    </section>
  );
}
