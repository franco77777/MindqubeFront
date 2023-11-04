import { useSignal } from "@preact/signals";
import LogIn from "./SignIn";
import { useEffectOnce } from "react-use";
import "./sidebar.css";
import SidebarButton from "./SidebarButton";
import { useAppSelector } from "../../utils/hooks";
import Logged from "./Logged";

const NavBar = () => {
  const userGoogle = useAppSelector((state) => state.user.googleAccount);
  const active = useSignal<boolean>(false);
  const changeBackground = () => {
    if (window.scrollY < 90) {
      active.value = false;
    }
    if (window.scrollY >= 90) {
      active.value = true;
    }
  };
  useEffectOnce(() => {
    window.addEventListener("scroll", changeBackground);
  });

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

  console.log("render NavBar");
  return (
    <>
      <nav className="fixed top-0 w-full h-20  bg-white ">
        <div className="w-full h-full flex flex-row justify-between items-center px-12">
          <SidebarButton />
          <div className={` text-red-700  `}>soy el navbar</div>
          {userGoogle ? <Logged /> : <LogIn />}
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
