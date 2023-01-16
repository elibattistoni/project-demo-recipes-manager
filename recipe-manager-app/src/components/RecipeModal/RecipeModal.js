import { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import { FaTrash } from "react-icons/fa";
import { foodCategories } from "../../config";
import RecipesContext from "../../store/recipes-context";
import classes from "./RecipeModal.module.css";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onCloseModal}></div>;
}

function Overlay(props) {
  const ctx = useContext(RecipesContext);

  const recipe = props.recipe;

  const { primaryColor: currentCategoryColor } = foodCategories
    .filter((cat) => cat.value === recipe.category)
    .at(0);

  function removeRecipeHandler() {
    ctx.onRemoveRecipe(recipe.id);
    props.onCloseModal();
  }

  return (
    <div className={classes.modal}>
      <header className={`${classes.modalHeader} ${currentCategoryColor}`}>
        <h1>{recipe.title}</h1>
        <span>{recipe.date}</span>
      </header>
      <main className={classes.modalMain}>
        <img src={recipe.imageUrl} alt={recipe.title} />
        <div className={classes.modalIngredients}>
          <h2>Ingredients</h2>
          <span>{recipe.ingredients}</span>
        </div>
        <div className={classes.modalInstructions}>
          <h2>Instructions</h2>
          <span>{recipe.instructions}</span>
        </div>
      </main>
      <footer>
        <button
          type="button"
          className={classes.trashBtn}
          onClick={removeRecipeHandler}
        >
          <FaTrash className={classes.trashIcon} />
        </button>
      </footer>
    </div>
  );
}

const portalElement = document.getElementById("overlay");

export default function RecipeModal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Overlay recipe={props.recipe} onCloseModal={props.onCloseModal} />,
        portalElement
      )}
    </Fragment>
  );
}
