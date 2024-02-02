import { signInWithGooglePopup,creeatUserDocumentFromAuth  } from "../../utils/firebase/firebase.utils";


const SignIn = () =>{
  const logGoogleUseer = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await creeatUserDocumentFromAuth(user);
  }


  return(
    <div>
      <button onClick={logGoogleUseer}>Sign In with Google</button>
    </div>
  )
}
export default SignIn;
