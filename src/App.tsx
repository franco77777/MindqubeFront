import { render } from "preact";

import "./style.css";
import NavBar from "./components/navbar/NavBar";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const PageTest = lazy(() => import("./pages/PageTest"));
const PageTest2 = lazy(() => import("./pages/PageTest2"));
const PageTest3 = lazy(() => import("./pages/PageTest3"));
// import PageTest2 from "./pages/PageTest2.js";
// import PageTest from "./pages/PageTest.js";
// import PageTest3 from "./pages/PageTest3.js";
import { useAppDispatch, useAppSelector } from "./utils/hooks";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import { lazy, Suspense, useEffect } from "preact/compat";
import Sidebar from "./components/sidebar/SideBar";
import Alert from "./components/others/Alert";
import axios from "axios";
import { setAlert } from "./redux/slices/utils";
import { setUser } from "./redux/slices/currentUserSlice";
import { UserDatabaseResponse } from "./types/userType";

export function App() {
  const googleAccount = useAppSelector((state) => state.user.googleAccount);
  const dispatch = useAppDispatch();
  console.log("render app", googleAccount);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const verifyToken = async () => {
          const response: UserDatabaseResponse = (
            await axios(`http://localhost:8080/user/auth-token`, {
              params: { token: token },
            })
          ).data;
          if (response) {
            console.log("logged whit token", response);

            dispatch(
              setAlert({
                message: `Welcome ${response}`,
                type: "Success",
              })
            );
            dispatch(setUser(response));
          }
        };
        verifyToken();
      } catch (error) {
        if (axios.isAxiosError(error)) {
          dispatch(
            setAlert({
              message: error.response
                ? error.response.data.message
                : error.message,
              type: "Error",
            })
          );
          throw error;
        } else {
          throw new Error("different error than axios");
        }
      }
    }
  }, []);
  return (
    <>
      <NavBar />
      <Alert />
      <main className={"flex items-baseline pr-6 mt-20"}>
        <Sidebar />
        <div className={"pl-6"}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route path="/" element={<PageTest />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/test2" element={<PageTest2 />} />
                <Route path="/test3" element={<PageTest3 />} />
              </Route>
            </Routes>
          </Suspense>
        </div>
      </main>
    </>
  );
}

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")!
);
