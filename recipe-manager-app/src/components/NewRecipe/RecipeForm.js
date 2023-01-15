import useInput from "../../hooks/use-input";
import { foodCategories } from "../../config";
import classes from "./RecipeForm.module.css";
import { useContext } from "react";
import RecipesContext from "../../store/recipes-context";

function isValidHttpUrl(str) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$", // fragment locator
    "i"
  );
  return pattern.test(str);
}

export default function RecipeForm(props) {
  //| access context to add recipe
  const ctx = useContext(RecipesContext);

  //| title
  const {
    value: inputTitle,
    isValid: isTitleValid,
    hasError: hasTitleError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    clearField: clearTitle,
  } = useInput((value) => value.trim() !== "");

  //| category
  const {
    value: inputCategory,
    isValid: isCategoryValid,
    hasError: hasCategoryError,
    valueChangeHandler: categoryChangeHandler,
    inputBlurHandler: categoryBlurHandler,
    clearField: clearCategory,
  } = useInput((cat) => foodCategories.some((el) => el.value === cat));

  //| image url
  const {
    value: inputUrl,
    isValid: isUrlValid,
    hasError: hasUrlError,
    valueChangeHandler: urlChangeHandler,
    inputBlurHandler: urlBlurHandler,
    clearField: clearUrl,
  } = useInput((url) => isValidHttpUrl(url));

  //| ingredients
  const {
    value: inputIngredients,
    isValid: isIngredientsValid,
    hasError: hasIngredientsError,
    valueChangeHandler: ingredientsChangeHandler,
    inputBlurHandler: ingredientsBlurHandler,
    clearField: clearIngredients,
  } = useInput((text) =>
    text.includes(";") && text.includes(",") ? true : false
  );

  //| instructions
  const {
    value: inputInstructions,
    isValid: isInstructionsValid,
    hasError: hasInstructionsError,
    valueChangeHandler: instructionsChangeHandler,
    inputBlurHandler: instructionsBlurHandler,
    clearField: clearInstructions,
  } = useInput((value) => value.trim() !== "");

  //| check form validity before submission
  let formIsValid = false;
  if (
    isTitleValid &&
    isCategoryValid &&
    isUrlValid &&
    isIngredientsValid &&
    isInstructionsValid
  )
    formIsValid = true;

  //| submit
  const submitHandler = (e) => {
    //| prevent default of sending http request
    e.preventDefault();

    //| do not submit if form not valid
    if (!formIsValid) return;

    const recipeData = {
      id: Date.now().toString(),
      title: inputTitle,
      category: inputCategory,
      imageUrl: inputUrl,
      date: new Date().toLocaleDateString(),
      ingredients: inputIngredients,
      instructions: inputInstructions,
    };

    ctx.onAddRecipe(recipeData);

    clearTitle();
    clearCategory();
    clearUrl();
    clearIngredients();
    clearInstructions();

    props.onClose();
  };

  // css classes
  const classesTitle = `${classes.inputField} ${
    hasTitleError && classes.invalid
  }`;
  const classesCategory = `${classes.inputField} ${
    hasCategoryError && classes.invalid
  }`;
  const classesUrl = `${classes.inputField} ${classes.inputFieldUrl} ${
    hasUrlError && classes.invalid
  }`;
  const classesIngredients = `${classes.inputField} ${
    classes.inputFieldIngredients
  } ${hasIngredientsError && classes.invalid}`;
  const classesInstructions = `${classes.inputField} ${
    classes.inputFieldInstructions
  } ${hasInstructionsError && classes.invalid}`;

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.inputFields}>
        <div className={classesTitle}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            maxLength={40}
            onChange={titleChangeHandler}
            onBlur={titleBlurHandler}
            value={inputTitle}
          />
          {hasTitleError && (
            <p className={classes.error}>Title must not be empty</p>
          )}
          {/* <span>{30 - numCharsTitle}</span> */}
        </div>

        <div className={classesCategory}>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            onChange={categoryChangeHandler}
            onBlur={categoryBlurHandler}
            defaultValue=""
          >
            <option value="" disabled>
              ...
            </option>
            {foodCategories.map((cat) => (
              <option value={cat.value} key={cat.key}>
                {cat.label}
              </option>
            ))}
          </select>
          {hasCategoryError && (
            <p className={classes.error}>Category must not be empty</p>
          )}
        </div>

        <div className={classesUrl}>
          <label htmlFor="url">Image URL</label>
          <input
            id="url"
            type="text"
            onChange={urlChangeHandler}
            onBlur={urlBlurHandler}
            value={inputUrl}
          />
          {hasUrlError && <p className={classes.error}>URL must be valid</p>}
        </div>

        <div className={classesIngredients}>
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            id="ingredients"
            placeholder="Ingredient 1, quantity; Ingredient 2, quantity; ..."
            maxLength={100}
            onChange={ingredientsChangeHandler}
            onBlur={ingredientsBlurHandler}
            value={inputIngredients}
          ></textarea>
          {hasIngredientsError && (
            <p className={classes.error}>
              At least one ingredient is required in format: Apple, 1;
            </p>
          )}
        </div>

        <div className={classesInstructions}>
          <label htmlFor="instructions">Instructions</label>
          <textarea
            id="instructions"
            placeholder="Write directions for the recipe..."
            maxLength={300}
            rows={5}
            value={inputInstructions}
            onChange={instructionsChangeHandler}
            onBlur={instructionsBlurHandler}
          ></textarea>
          {hasInstructionsError && (
            <p className={classes.error}>Instructions must not be empty</p>
          )}
        </div>
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button type="submit" disabled={!formIsValid}>
          Add Recipe
        </button>
      </div>
    </form>
  );
}
