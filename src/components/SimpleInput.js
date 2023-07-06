import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const nameInputRef = useRef();
  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    setEnteredName("");
  };
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name Cannot be Empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
