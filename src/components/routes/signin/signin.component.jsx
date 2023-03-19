import { async } from "@firebase/util";
import React, { useContext, useState } from "react";
import {
  createUserDocumentFromAuth,
  signInUserEmailAndPassword,
  signInWithGooglePopup,
} from "../../../utils/firebase.utils";
import ButtonComponent from "../../button/button.component";
import { UserContext } from "../../context/user.context";
import FormInput from "../../form-input/form-input.component";
import "./signin.styles.scss";

const SignInComponent = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };

  const { setCurrentUser } = useContext(UserContext);

  const inputVerification = (error) => {
    switch (error) {
      case "auth/user-not-found":
        alert("Incorrect email!");
        break;

      case "auth/wrong-password":
        alert("Incorrect password!");
        break;
    }
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInUserEmailAndPassword(email, password);
      resetFields();
      alert("logged in");
    } catch (err) {
      console.log(err);
      inputVerification(err.code);
    }
  };

  return (
    <div className="sign-up-container">
      <h1>Already have an account?</h1>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />
        <div className="buttons-container">
          <ButtonComponent buttonType="inverted" type="submit">
            Sign In
          </ButtonComponent>
          <ButtonComponent buttonType="google" onChange={signInWithGoogle}>
            Google Sign In
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default SignInComponent;
