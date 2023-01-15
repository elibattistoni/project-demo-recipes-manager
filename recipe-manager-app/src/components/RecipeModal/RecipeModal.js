import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./RecipeModal.module.css";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onCloseModal}></div>;
}

function Overlay(props) {
  const recipe = props.recipe;
  return <div className={classes.modal}>{recipe.title}</div>;
}

const portalElement = document.getElementById("overlay");

export default function RecipeModal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(<Overlay recipe={props.recipe} />, portalElement)}
    </Fragment>
  );
}
