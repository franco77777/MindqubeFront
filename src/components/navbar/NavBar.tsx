import { useSignal } from "@preact/signals";
import SignUp from "./SignUp";
import "./navBar.css";
import SidebarButton from "./SidebarButton";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import Logged from "./Logged";
import { setAlert } from "../../redux/slices/utils";
import { useEffect } from "preact/hooks";

const NavBar = () => {
  const userLoggedGoogle = useAppSelector((state) => state.user.googleAccount);
  const userLogged = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const active = useSignal<boolean>(false);
  const changeBackground = () => {
    if (window.scrollY < 90) {
      active.value = false;
    }
    if (window.scrollY >= 90) {
      active.value = true;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  // const element = useRef();
  // useEffect(() => {
  //   const elemento = element.current;
  //   const observador = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       console.log(entry);
  //     });
  //   });
  //   if (elemento) {
  //     observador.observe(elemento);
  //   }
  // }, []);
  const alertObserver = useAppSelector((state) => state.utils.alertHandler);

  const test = () => {
    dispatch(setAlert({ type: "Success", message: "testendo" }));

    console.log("soy alertobervable", alertObserver);
  };

  console.log("render NavBar");
  return (
    <>
      <nav className="fixed top-0 w-full h-20  bg-white z-10">
        <div className="w-full h-full flex flex-row justify-between items-center px-12">
          <SidebarButton />
          <div className={` text-red-700  `} onClick={test}>
            soy el navbar
          </div>
          {userLoggedGoogle || userLogged ? <Logged /> : <SignUp />}
        </div>
        <div
          className={`w-full h-20 bg-black absolute z-[-10] transition-all duration-300 ${
            active.value ? "top-0" : "top-[-5rem]"
          } `}
        ></div>
      </nav>
    </>
  );
};

export default NavBar;
