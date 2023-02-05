import classes from "./NewRecipe.module.css";
import { useState } from "react";
import RecipeForm from "./RecipeForm";
import { FaPlus } from "react-icons/fa";

export default function NewRecipe() {
  // state for managing the form
  const [wantsToAdd, setWantsToAdd] = useState(false);

  // handler for showing the form (change the state)
  const toggleFormHandler = () =>
    setWantsToAdd((currentState) => !currentState);

  // handler for hiding the form (change the state)
  const hideFormHandler = () => setWantsToAdd(false);

  return (
    <section className={classes.newRecipeCard}>
      <button className={classes.newRecipeBtn} onClick={toggleFormHandler}>
        <FaPlus className={classes.icon} />
        <span className={classes.btnLabel}>Add New Recipe</span>
      </button>
      {wantsToAdd && <RecipeForm onClose={hideFormHandler} />}
    </section>
  );
}
