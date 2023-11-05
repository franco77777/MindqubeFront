import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth ,signInWithRedirect,signInWithPopup, signOut} from "firebase/auth";//signInWithPopup
import { GoogleData } from "../types/userType";

const firebaseConfig = {
  apiKey: "AIzaSyD-neJuXncqg1eKXfk9EnANxKPL52GB0D8",
  authDomain: "mindqube-bff44.firebaseapp.com",
  projectId: "mindqube-bff44",
  storageBucket: "mindqube-bff44.appspot.com",
  messagingSenderId: "914029476715",
  appId: "1:914029476715:web:1a851a9f897b4bebf6aa2e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

//const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
//const auth = getAuth(app);
export const googleLogin = async ()=>{
  const result = await signInWithPopup(auth, provider)
  
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    //console.log("soy token",token);
    //The signed-in user info.
    const user = result.user;
    //console.log("soy user token",user);
   const googleResponse:GoogleData = {
   email: user.email,
    emailVerified: user.emailVerified,
    photoURL: user.photoURL}
  return googleResponse;

}
  export const googleLogout = async() => {
    
    await signOut(auth)
  
  }

  
  
