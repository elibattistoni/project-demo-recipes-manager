import { useContext, useState } from "react";
import RecipesContext from "../../store/recipes-context";
import classes from "./RecipeFilter.module.css";

export default function RecipeFilter(props) {
  const [filteredYear, setFilteredYear] = useState(null);

  const ctx = useContext(RecipesContext);
  const availableYears = [
    ...new Set(
      ctx.recipes.map((rec) => new Date(rec.date)).map((dt) => dt.getFullYear())
    ),
  ];
  availableYears.sort((a, b) => a - b);

  function onFilterHandler(e) {
    setFilteredYear(e.target.textContent);
  }

  function onClearFilter() {
    setFilteredYear(null);
  }

  return (
    <section className={classes.filterContainer}>
      <div className={classes.filterButtons}>
        {availableYears.map((el, idx) => (
          <button
            key={idx}
            className={`${classes.filterBtn} ${
              el.toString() === filteredYear ? classes.active : classes.inactive
            }`}
            onClick={onFilterHandler}
          >
            {el}
          </button>
        ))}
        <button className={classes.btnClear} onClick={onClearFilter}>
          Clear
        </button>
      </div>
    </section>
  );
}
