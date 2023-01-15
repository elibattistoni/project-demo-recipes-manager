import { Fragment } from "react";
import NewRecipe from "./components/NewRecipe/NewRecipe";
import Recipes from "./components/Recipes/Recipes";

export default function App() {
  return (
    <Fragment>
      <NewRecipe />
      <Recipes />
    </Fragment>
  );
}
