import { useSignal } from "@preact/signals";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { setSideBar } from "../../redux/slices/utils";
import "./navBar.css";

const SidebarButton = () => {
  const sideBarIsEnabled = useAppSelector(
    (state) => state.utils.sideBarIsEnabled
  );
  const active = useSignal<Boolean>(true);
  const dispatch = useAppDispatch();
  const setShowSideBar = () => {
    active.value = !active.value;
    dispatch(setSideBar(!sideBarIsEnabled));
  };
  console.log("render SidebarButton");

  return (
    <>
      <button
        onClick={() => setShowSideBar()}
        className={`animation cursor-pointer transition-transform duration-500 overflow-hidden relative w-[3rem] h-12 bg-none 
         ease-in-out  hover:scale-105 rounded-full border-0 ${
           active.value ? "active" : ""
         } `}
      >
        <span className="rounded-md w-7 bg-[#3b82f6] absolute h-1 top-3.5 left-3.5 transition-transform duration-500"></span>
        <span className="rounded-md w-4 bg-[#3b82f6] absolute h-1 left-3.5  top-[24px] transition-transform duration-500"></span>
        <span className="rounded-md w-7 bg-[#3b82f6]  absolute h-1  left-3.5  top-[34px] transition-transform duration-500"></span>
      </button>
    </>
  );
};

export default SidebarButton;
