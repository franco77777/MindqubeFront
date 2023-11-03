import { useSignal } from "@preact/signals";
import Log from "./Log";
import { useEffectOnce } from "react-use";
import "./index.css";

const NavBar = () => {
  const active = useSignal<boolean>(true);
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
      <nav className="fixed top-0 w-full h-20 overflow-hidden bg-white ">
        <div className="w-full h-full flex flex-row justify-between items-center px-12">
          <div className={` text-red-700  `}>soy el navbar</div>
          <Log />
        </div>
        <div
          className={`w-full h-20 bg-black absolute z-[-10] transition-all duration-500 ${
            active.value ? "top-0" : "top-[-5rem]"
          } `}
        ></div>
      </nav>
    </>
  );
};

export default NavBar;
