import { useEffectOnce } from "react-use";
import { useAppSelector } from "../../utils/hooks";
import { logOut, sigIn } from "../../utils/firebaseConfig";
import { X } from "lucide-react";
import { useSignal } from "@preact/signals";

const Log = () => {
  const currentUser = useAppSelector((state) => state.user.googleAccount);
  const showLog = useSignal<boolean>(false);
  useEffectOnce(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.code === "Escape") {
        showLog.value = false;
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  });

  if (currentUser?.emailVerified) {
    return (
      <>
        <button className="text-red-500" onClick={logOut}>
          Log Out
        </button>
      </>
    );
  }
  return (
    <>
      <button
        className="text-red-500"
        onClick={() => (showLog.value = !showLog.value)}
      >
        Sign In
      </button>
      <div
        className={`${
          showLog.value ? "fixed" : "absolute"
        }  top-1/2 left-1/2 h-96 w-96  translate-x-[-50%] translate-y-[-50%] transition-all duration-300  `}
      >
        <div
          className={` bg-red-700 rounded-lg ${
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
                  type="text"
                  id="outlined_success"
                  aria-describedby="outlined_success_help"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="outlined_success"
                  className="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  User
                </label>
              </div>
            </section>
            <section className="w-full">
              <div className="relative">
                <input
                  type="text"
                  id="outlined_success"
                  aria-describedby="outlined_success_help"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
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
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Crear Cuenta
            </button>
            <section className="w-max">
              <button
                onClick={sigIn}
                className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700
                 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300
                  hover:shadow transition duration-150 "
              >
                <img
                  className="w-6 h-6"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  //loading="lazy"
                  alt="google logo"
                />
                <span>Login with Google</span>
              </button>
            </section>
          </article>
        </div>
      </div>
    </>
  );
};

export default Log;
