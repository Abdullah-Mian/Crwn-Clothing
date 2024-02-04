// import { useEffect } from "react";
// import { getRedirectResult} from "firebase/auth";

import {
  // auth,
  // signInWithGoogleRedirect,
  signInWithGooglePopup,
  creeatUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpFrom from "../../components/sign-up-form/sign-up-form.component";
const SignIn = () => {

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

  const logGoogleUseer = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await creeatUserDocumentFromAuth(user);
  };

  // }

  return (
    <div>
      <button onClick={logGoogleUseer}>Sign In with Google</button>
      {/* <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button> */}
      <SignUpFrom />
    </div>
  );
};
export default SignIn;
