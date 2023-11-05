import { useSignal } from "@preact/signals";
import {
  AlertCircle,
  AlertTriangle,
  CheckCheck,
  Info,
  XCircle,
} from "lucide-react";

import { AlertType } from "../../types/othersType";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { useEffectOnce } from "react-use";
import { setAlert } from "../../redux/slices/utils";
import { useEffect } from "preact/hooks";
import "./others.css";

export const Alert = () => {
  const alertObserver = useAppSelector((state) => state.utils.alertHandler);

  const dispatch = useAppDispatch();
  const colorBackground = useSignal<string>("");
  const colorType = useSignal<string>("");

  if (alertObserver?.type === "Error") {
    colorBackground.value = "#ffe7e6";
    colorType.value = "#ff5757";
  }
  if (alertObserver?.type === "Success") {
    colorBackground.value = "#e4f8f0";
    colorType.value = "#1ea97c";
  }
  if (alertObserver?.type === "Info") {
    colorBackground.value = "#e9e9ff";
    colorType.value = "#696cff";
  }
  if (alertObserver?.type === "Warning") {
    colorBackground.value = "#696cff";
    colorType.value = "#cc8924";
  }
  useEffect(() => {
    if (alertObserver) {
      const enableAlert = setTimeout(() => {
        dispatch(setAlert(null));
      }, 3500);
      return () => {
        clearTimeout(enableAlert);
      };
    }
  }, [alertObserver]);

  return (
    <>
      {alertObserver && (
        <div
          style={{
            borderColor: colorType.value,
            background: colorBackground.value,
            color: colorType.value,
          }}
          //translate-x-[calc(50vw_+_12rem)]
          class={`alert__animation alert__border--left flex rounded-md  p-4 
    mb-4 text-sm text-white absolute `}
          role="alert"
        >
          <div className="min-w-[22rem] flex justify-start items-center gap-1">
            {alertObserver.type === "Error" && (
              <XCircle size={35} className={` mr-1`} />
            )}
            {alertObserver.type === "Success" && (
              <CheckCheck size={35} className={` mr-1`} />
            )}
            {alertObserver.type === "Warning" && (
              <AlertTriangle size={35} className={` mr-1`} />
            )}
            {alertObserver?.type === "Info" && (
              <Info size={35} className={` mr-1`} />
            )}
            <span class="font-medium">{alertObserver.type}</span>{" "}
            {alertObserver.message}
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
