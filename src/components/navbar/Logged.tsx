import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import profile from "../../assets/profile.png";
import { googleLogout } from "../../utils/firebaseConfig";
import { setUser } from "../../redux/slices/currentUserSlice";
import { setAlert } from "../../redux/slices/utils";

const Logged = () => {
  const userLogged = useAppSelector((state) => state.user.googleAccount);
  const alertObserver = useAppSelector((state) => state.utils.alertHandler);
  const dispatch = useAppDispatch();

  const test = () => {
    if (alertObserver) {
      dispatch(setAlert(null));
    } else {
      dispatch(setAlert({ type: "Error", message: "" }));
    }
    console.log("soy alertobervable", alertObserver);
  };
  const removeUserLogged = () => {
    localStorage.removeItem("token");
    googleLogout();
    dispatch(setUser(null));
  };

  return (
    <>
      <div className=" group hover:cursor-pointer relative">
        <img
          src={userLogged?.photoURL ? userLogged.photoURL : profile}
          alt=""
          className="rounded-full w-14 h-14 bg-blue-500 "
        />

        <ul
          className="hover:cursor-pointer  h-32 group-hover:left-[-6rem] opacity-0 group-hover:opacity-100 absolute  bg-white
           text-red-500 top-full w-52 left-28 flex flex-col items-center justify-center gap-3 transition-all 
           duration-300 none"
        >
          <li className="   cursor-default ">{userLogged?.email}</li>
          <li onClick={removeUserLogged} className=" ">
            Log Out
          </li>
          <li className=" cursor-pointer  " onClick={test}>
            tesing3
          </li>
        </ul>
      </div>
    </>
  );
};

export default Logged;
