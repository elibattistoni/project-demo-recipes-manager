import Card from "../UI/Card";
import classes from "./RecipeItem.module.css";

export default function RecipeItem(props) {
  return (
    <Card className={classes.recipeCard}>
      <header className={`${props.color}-lighter`}>{props.title}</header>
      <main>
        <img src={props.image} alt={props.title} />
      </main>
    </Card>
  );
}
