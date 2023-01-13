import classes from "./Card.module.css";

// component for a wrapping card element
const Card = (props) => {
  // any className defined when instantiating this component will be added to the card class in Card.module.css
  const styles = `${classes.card} ${props.className}`;

  return <div className={styles}>{props.children}</div>;
};

export default Card;
