import { useAppSelector } from "../../utils/hooks";
import profile from "../../assets/profile.png";
import { logOut } from "../../utils/firebaseConfig";

const Logged = () => {
  const userLogged = useAppSelector((state) => state.user.googleAccount);

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
          <li onClick={logOut} className=" ">
            Log Out
          </li>
          <li className="   ">tesing3</li>
        </ul>
      </div>
    </>
  );
};

export default Logged;
