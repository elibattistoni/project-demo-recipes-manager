import classes from "./RecipeForm.module.css";

const RecipeForm = (props) => {
  const categorySelectHandler = (e) => {
    console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const recipeData = {
      title: "todo-recipe-title",
      category: "todo-recipe-category",
      imageUrl: "todo-recipe-image-url",
      date: "todo-recipe-date",
      ingredients: "todo-recipe-ingredients",
      instructions: "todo-recipe-instructions",
    };

    props.onSubmitForm(recipeData);
  };

  return (
    <form onSubmit={submitHandler} className={classes["new-recipe__form"]}>
      <div className={classes["new-recipe__controls"]}>
        <div
          className={`${classes["new-recipe__control"]} ${classes["control--title"]}`}
        >
          <label>Title</label>
          <input type="text" maxLength={30} required />
          {/* <span>{30 - numCharsTitle}</span> */}
        </div>
        <div
          className={`${classes["new-recipe__control"]} ${classes["control--category"]}`}
        >
          <label>Category</label>
          <select onChange={categorySelectHandler} defaultValue="">
            <option value="" disabled>
              ...
            </option>
            <option value="risottoPasta">Risotto & Pasta</option>
            <option value="meatFish">Meat & Fish</option>
            <option value="veggies&Sides">Veggies & Sides</option>
            <option value="Desserts">Desserts</option>
          </select>
        </div>
        <div
          className={`${classes["new-recipe__control"]} ${classes["control--url"]}`}
        >
          <label>Image URL</label>
          <input type="text" maxLength={30} required />
        </div>
        <div
          className={`${classes["new-recipe__control"]} ${classes["control--ingredients"]}`}
        >
          <label>Ingredients</label>
          <textarea
            placeholder="Ingredient 1, quantity; Ingredient 2, quantity; ..."
            maxLength={100}
            required
          ></textarea>
        </div>
        <div
          className={`${classes["new-recipe__control"]} ${classes["control--instructions"]}`}
        >
          <label>Instructions</label>
          <textarea
            placeholder="Write directions for the recipe..."
            maxLength={300}
            rows={5}
            required
          ></textarea>
        </div>
      </div>
      <div className={classes["new-recipe__actions"]}>
        <button
          className={classes["new-recipe__actions__button"]}
          type="button"
          onClick={props.onClose}
        >
          Cancel
        </button>
        <button
          className={classes["new-recipe__actions__button"]}
          type="submit"
        >
          Add Recipe
        </button>
      </div>
    </form>
  );
};

export default RecipeForm;
