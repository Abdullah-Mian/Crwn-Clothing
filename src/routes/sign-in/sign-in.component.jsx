import { signInWithGooglePopup  } from "../../utils/firebase/firebase.utils";


const SignIn = () =>{
  const logGoogleUseer = async () => {
    const resopnse = await signInWithGooglePopup();
    console.log(resopnse);
  }


  return(
    <div>
      <button onClick={logGoogleUseer}>Sign In with Google</button>
    </div>
  )
}
export default SignIn;
