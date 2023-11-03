import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth ,signInWithRedirect, signOut} from "firebase/auth";//signInWithPopup

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
export const sigIn = async ()=>{
  const result = await signInWithRedirect(auth, provider)
  
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log("soy token",token);
    // The signed-in user info.
    //const user = result.user;
    //console.log("soy user token",user);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  

}
  export const logOut = async() => {
    console.log("me deslogie");
    await signOut(auth)
  console.log("me deslogie2");
  }

  
  
