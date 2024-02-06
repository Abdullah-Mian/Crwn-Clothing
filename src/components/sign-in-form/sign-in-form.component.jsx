import { useState } from "react";
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
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await creeatUserDocumentFromAuth(user);
  };

  const [formFields, setFormFields] = useState(defaultFormfields);
  const { email, password } = formFields;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log({ response });
      setFormFields(defaultFormfields); // clear form fields
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.error(err);
      }
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
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
          <Button buttonType={"google"} onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInFrom;
