import useSecondInput from "../hooks/use-second";
const BasicForm = (props) => {
  //Firstname
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useSecondInput((value) => value.trim() !== "");
  //Lastname
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useSecondInput((value) => value.trim() !== "");

  //Email
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useSecondInput((value) => value.includes("@"));
  //Mobile Number
  const {
    value: enteredMobileNumber,
    isValid: enteredMobileNumberIsValid,
    hasError: mobileNumberInputHasError,
    valueChangeHandler: mobileNumberChangedHandler,
    inputBlurHandler: mobileNumberBlurHandler,
    reset: resetMobileNumberInput,
  } = useSecondInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid &&
    enteredMobileNumberIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      !enteredFirstNameIsValid &&
      !enteredLastNameIsValid &&
      !enteredEmailIsValid &&
      !enteredMobileNumberIsValid
    ) {
      return;
    }
    const data = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      mobileNumber: enteredMobileNumber,
    };
    console.log(data);
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetMobileNumberInput();
  };

  const firstNameInputClasses = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  const mobileNumberInputClasses = mobileNumberInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <h1>Sign Up-Form</h1>
      </div>

      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameInputHasError && (
            <p className="error-text">Please Enter First Name</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameInputHasError && (
            <p className="error-text">Please Enter Last Name</p>
          )}
        </div>
      </div>
      <div className="control-group">
        <div className={emailInputClasses}>
          <label htmlFor="name">E-Mail Address</label>
          <input
            type="email"
            id="email"
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailInputHasError && (
            <p className="error-text">Enter Valid E-mail Address</p>
          )}
        </div>
        <div className={mobileNumberInputClasses}>
          <label htmlFor="name">Mobile Number</label>
          <input
            type="text"
            id="mobileNumber"
            onChange={mobileNumberChangedHandler}
            onBlur={mobileNumberBlurHandler}
            value={enteredMobileNumber}
          />
          {mobileNumberInputHasError && (
            <p className="error-text">Please Enter Mobile Number</p>
          )}
        </div>
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Sign up</button>
      </div>
    </form>
  );
};

export default BasicForm;
