import { Navigate, Outlet } from "react-router-dom";
import { ReactNode } from "react";
import { useAppSelector } from "./hooks";
//import { useLocalStorage } from "react-use";

type props = {
  isAllowed?: boolean;
  redirectTo?: string;
  children?: ReactNode;
};

export const ProtectedRoute = ({
  isAllowed,
  redirectTo = "/",
  children,
}: props) => {
  const currentUser = useAppSelector((state) => state.user);
  //const [token,setToken] = useLocalStorage("token")
  // if (!currentUser.googleAccount?.emailVerified) {
  //   return <Navigate to={redirectTo} replace />;
  // }

  return <>{children ? children : <Outlet />}</>; //las rutas
};
