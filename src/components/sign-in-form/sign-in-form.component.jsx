import { useState, useContext } from "react";
// import { UserContext } from "../../contexts/user.context";
import FormInput from "../form-input/form-input.component";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  creeatUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";
import Button from "../button/button.component";

const defaultFormfields = {
  email: "",
  password: "",
};

const SignInFrom = () => {
  // const {setCurrentUser} = useContext(UserContext);

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const [formFields, setFormFields] = useState(defaultFormfields);
  const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      // setCurrentUser(user);
      setFormFields(defaultFormfields); // clear form fields
    } catch (err) {
      if (err.code === "auth/invalid-credential") {
        alert("Invalid Email or Password");
      } else {
        console.log("Error signing in", err);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>I do have an account</h2>
      <span>Sign in With Email and Password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={"google"}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInFrom;
