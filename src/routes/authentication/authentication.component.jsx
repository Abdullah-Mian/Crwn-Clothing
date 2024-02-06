// import { useEffect } from "react";
// import { getRedirectResult} from "firebase/auth";

import SignUpFrom from "../../components/sign-up-form/sign-up-form.component";
import SignInFrom from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";
const Authentication = () => {

  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if(response){
  //     const userDocRef = await creeatUserDocumentFromAuth(response.user);
  //   }
  // },[]);

  // nothing gets logged cuz webPage unmounts and forgets everything
  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log({ user });

  // }

  return (
    <div className="authentication-container">
      <SignInFrom />
      <SignUpFrom />
      {/* <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button> */}
    </div>
  );
};
export default Authentication;
