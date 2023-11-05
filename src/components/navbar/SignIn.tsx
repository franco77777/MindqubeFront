import { useEffectOnce, useLocalStorage } from "react-use";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

import { X } from "lucide-react";
import { useSignal } from "@preact/signals";
import React from "react";
import GoogleButton from "./GoogleButtom";
import AlertOfNavBar from "./AlertOfNavBar";
import axios from "axios";
import { Alert } from "../../types/othersType";
import { UserDatabaseResponse } from "../../types/userType";
import { setUser } from "../../redux/slices/currentUserSlice";

type Props = {
  email: string;
  password: string;
};

const Log = () => {
  const currentUser = useAppSelector((state) => state.user.googleAccount);
  const showLog = useSignal<boolean>(false);
  const userData = useSignal<Props>({ email: "", password: "" });
  const alert = useSignal<Alert | null>(null);
  const dispatch = useAppDispatch();
  const regular = new RegExp(
    "[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}"
  );
  const [token, setToken, removeToken] = useLocalStorage("token");
  const disableButtomSubmit = useSignal<boolean>(true);
  const handleUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    userData.value = {
      ...userData.value,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    const result = regular.test(userData.value.email);

    result && userData.value.password
      ? (disableButtomSubmit.value = false)
      : (disableButtomSubmit.value = true);

    console.log(userData.value);
  };

  const registerData = async () => {
    try {
      const result: UserDatabaseResponse = (
        await axios.post("http://localhost:8080/user/sign-in", userData.value)
      ).data;
      if (result) {
        setToken(result.token);
        dispatch(setUser(result));
        showLog.value = !showLog.value;
        alert.value = { message: `Welcome ${result.email}`, type: "Success" };
      }
      setTimeout(() => {
        alert.value = null;
      }, 3500);
      console.log(result);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert.value = {
          message: error.response ? error.response.data.message : error.message,
          type: "Error",
        };
        setTimeout(() => {
          alert.value = null;
        }, 3500);
        throw error;
      } else {
        throw new Error("different error than axios");
      }
    }
  };
  useEffectOnce(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.code === "Escape") {
        showLog.value = false;
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  });
  console.log("render sigin");

  return (
    <>
      <button
        className="text-red-500"
        onClick={() => (showLog.value = !showLog.value)}
      >
        Sign In
      </button>
      {alert.value && (
        <AlertOfNavBar message={alert.value.message} type={alert.value.type} />
      )}
      <div
        className={`${
          showLog.value ? "fixed" : "absolute"
        }  top-1/2 left-1/2 h-96 w-96  translate-x-[-50%] translate-y-[-50%] transition-all duration-300  `}
      >
        <div
          className={` bg-[#1f2937] rounded-lg ${
            showLog.value ? " opacity-100  zoomAnimation" : " opacity-0 "
          }`}
        >
          <button
            type="button"
            className="absolute right-0 cursor-pointer w-10 h-10 m-2 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1.5
               text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          >
            <X size={44} onClick={() => (showLog.value = false)} className="" />
          </button>

          <article className="flex flex-col gap-8  justify-center items-center p-12">
            <section className="w-full">
              <div className="relative">
                <input
                  value={userData.value.email}
                  onChange={handleUserData}
                  name="email"
                  type="text"
                  id="outlined_success"
                  aria-describedby="outlined_success_help"
                  className="block px-2.5 pb-2.5 pt-4 w-full border-solid text-sm text-white bg-transparent rounded-lg border-1 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="outlined_success"
                  className="absolute text-sm  text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Email
                </label>
              </div>
            </section>
            <section className="w-full">
              <div className="relative">
                <input
                  value={userData.value.password}
                  onChange={handleUserData}
                  name="password"
                  type="text"
                  id="outlined_success"
                  aria-describedby="outlined_success_help"
                  className="block px-2.5 pb-2.5 pt-4 w-full border-solid text-sm text-white bg-transparent rounded-lg border-1 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="outlined_success"
                  className="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Password
                </label>
              </div>
            </section>
            <button
              disabled={disableButtomSubmit.value}
              onClick={registerData}
              type="button"
              className={`
              ${
                disableButtomSubmit.value
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100"
              }
              text-white   bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
            >
              Crear Cuenta
            </button>

            <GoogleButton />
          </article>
        </div>
      </div>
    </>
  );
};

export default Log;
