import { useSignal } from "@preact/signals";
import { XCircle } from "lucide-react";
import "./navBar.css";

type Alert = {
  message: string;
  type: "Error" | "Success" | "Info" | "Warning";
};

export const AlertOfNavBar = ({ message, type }: Alert) => {
  const colorBackground = useSignal<string>("");
  const colorType = useSignal<string>("");

  if (type === "Error") {
    colorBackground.value = "#ffe7e6";
    colorType.value = "#ff5757";
  }
  if (type === "Success") {
    colorBackground.value = "#e4f8f0";
    colorType.value = "#1ea97c";
  }
  if (type === "Info") {
    colorBackground.value = "#e9e9ff";
    colorType.value = "#696cff";
  }
  if (type === "Warning") {
    colorBackground.value = "#696cff";
    colorType.value = "#cc8924";
  }
  return (
    <>
      <div
        style={{
          borderColor: colorType.value,
          background: colorBackground.value,
          color: colorType.value,
        }}
        //translate-x-[calc(50vw_+_12rem)]
        class={`navBar__alert--animation navBar__alert--border-left flex translate-x-[calc(50vw_+_12rem)] rounded-md  p-4 
        mb-4 text-sm text-white absolute `}
        role="alert"
      >
        <div className="min-w-[22rem] flex justify-start items-center gap-1">
          {/* <XCircle size={35} color={"#cc8924"} className="mr-1" /> */}
          {type === "Error" && <XCircle size={35} className={` mr-1`} />}
          <span class="font-medium">{type}</span> {message}
        </div>
      </div>
    </>
  );
};

export default AlertOfNavBar;
