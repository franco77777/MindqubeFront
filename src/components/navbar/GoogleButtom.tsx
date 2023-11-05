import { useEffectOnce, useLocalStorage } from "react-use";
import { auth, googleLogin } from "../../utils/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { GoogleData, UserDatabaseResponse } from "../../types/userType";
import { setGoogleAccount, setUser } from "../../redux/slices/currentUserSlice";
import { useAppDispatch } from "../../utils/hooks";
import axios from "axios";
import { useSignal } from "@preact/signals";
import { AlertType } from "../../types/othersType";

import { setAlert } from "../../redux/slices/utils";

const GoogleButton = () => {
  const alert = useSignal<AlertType | null>(null);
  const dispatch = useAppDispatch();
  const [token, setToken, removeToken] = useLocalStorage("token");

  const SigInGoogle = async () => {
    event?.preventDefault();
    const googleLogged = await googleLogin();
    if (googleLogged) {
      try {
        const result: UserDatabaseResponse = (
          await axios.post("http://localhost:8080/user/google-sign-in", {
            email: googleLogged.email,
          })
        ).data;
        console.log("soy result de todo", result);
        console.log("soy google logged", googleLogged);
        if (result) {
          dispatch(
            setAlert({ message: `Welcome ${result.email}`, type: "Success" })
          );
          setToken(result.token); //
          dispatch(setUser(result));
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          dispatch(
            setAlert({
              message: error.response
                ? error.response.data.message
                : error.message,
              type: "Error",
            })
          );

          throw error;
        } else {
          throw new Error("different error than axios");
        }
      }
    }
  };

  // useEffectOnce(() => {
  //   onAuthStateChanged(auth, async (currentUser) => {
  //     if (currentUser) {
  //       // const validEmail = axios.post("http://localhost:8080/user/google-log-in",{email:currentUser.email});
  //       console.log(currentUser);

  //       const userData: GoogleData = {
  //         email: currentUser.email,
  //         emailVerified: currentUser.emailVerified,
  //         photoURL: currentUser.photoURL,
  //       };
  //       dispatch(setGoogleAccount(userData));
  //     } else {
  //       dispatch(setGoogleAccount(currentUser));
  //     }
  //   });
  // });

  return (
    <>
      <button
        onClick={SigInGoogle}
        //text-slate-700
        className="w-max px-4 py-2 border border-solid flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg 
                 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300
                  hover:shadow transition duration-150 text-white "
      >
        <img
          className="w-6 h-6"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          //loading="lazy"
          alt="google logo"
        />
        <span>Sign Up with Google</span>
      </button>
    </>
  );
};

export default GoogleButton;
