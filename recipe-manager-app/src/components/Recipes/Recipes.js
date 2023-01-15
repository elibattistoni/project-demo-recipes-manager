import classes from "./Recipes.module.css";
import RecipesCategoryItem from "./RecipesCategoryItem";
import { foodCategories } from "../../config";

export default function Recipes(props) {
  return (
    <section className={classes.recipesContainer}>
      {foodCategories.map((cat) => (
        <RecipesCategoryItem category={cat.value} key={cat.key} />
      ))}
    </section>
  );
}
