import React from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../../utils/firebase.utils";
import SignUpComponent from "../../signup/signup.component";
import SignInComponent from "../signin/signin.component";
import "./authentication.styles.scss";

const AuthenticationComponent = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const user = await createUserDocumentFromAuth(response.user);
  };
  return (
    <div className="authentication-container">
      <SignInComponent />
      <SignUpComponent />
    </div>
  );
};

export default AuthenticationComponent;
