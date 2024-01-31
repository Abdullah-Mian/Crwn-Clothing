// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY7QsGNqYbS3AWSn9mZ5IfKUZj-ggDQZQ",
  authDomain: "crwn-clothing-db-6684a.firebaseapp.com",
  projectId: "crwn-clothing-db-6684a",
  storageBucket: "crwn-clothing-db-6684a.appspot.com",
  messagingSenderId: "793941641367",
  appId: "1:793941641367:web:9a597ead7f7866f276c1d2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// export const db = getFirestore();

// export const createUserDocumentFromAuth = async (userAuth) => {
//   const userDocRef = doc(db, "users", userAuth.uid);

//   const userSnapshot = await getDoc(userDocRef);

//   if (!userSnapshot.exists()) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();

//     try {
//       await setDoc(userDocRef, {
//         displayName,
//         email,
//         createdAt,
//       });
//     } catch (error) {
//       console.log("error creating the user", error.message);
//     }
//   }

//   return userDocRef;
// };
