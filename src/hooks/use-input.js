import { useState } from "react";

// create a custom hook to manage some things about the input: value, touch state, validity (combined with touch state)
// the concrete validation logic should be passed as input argument to this function

export default function useInput(validateFn) {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateFn(value);
  const hasError = !isValid && isTouched;

  function valueChangeHandler(e) {
    setValue(e.target.value);
  }

  function inputBlurHandler() {
    setIsTouched(true);
  }

  function clearField() {
    setValue("");
    setIsTouched(false);
  }

  return {
    value,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    clearField,
  };
}
