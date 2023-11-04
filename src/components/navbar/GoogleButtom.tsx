import { sigIn } from "../../utils/firebaseConfig";

const GoogleButton = () => {
  return (
    <>
      <button
        onClick={sigIn}
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
        <span>Login with Google</span>
      </button>
    </>
  );
};

export default GoogleButton;
