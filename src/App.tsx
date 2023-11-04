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
import { useEffectOnce, useLocalStorage } from "react-use";
import { onAuthStateChanged } from "firebase/auth";
import { GoogleData } from "./types/userType";
import { setGoogleAccount } from "./redux/slices/currentUserSlice";
import { auth } from "./utils/firebaseConfig";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import { lazy, Suspense } from "preact/compat";
import {} from "react";
import Sidebar from "./components/sidebar/SideBar";
import axios, { Axios } from "axios";

export function App() {
  const googleAccount = useAppSelector((state) => state.user.googleAccount);
  const dispatch = useAppDispatch();
  const [token, setToken, removeToken] = useLocalStorage("token");
  console.log("render app", googleAccount);

  useEffectOnce(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser);

        const userData: GoogleData = {
          email: currentUser.email,
          emailVerified: currentUser.emailVerified,
          photoURL: currentUser.photoURL,
        };
        dispatch(setGoogleAccount(userData));
      } else {
        dispatch(setGoogleAccount(currentUser));
      }
    });
  });

  useEffectOnce(() => {
    const verifyToken = async () => {
      console.log("soy token", token);
      try {
        if (token) {
          const response = await axios(
            `http://localhost:8080/user/auth-token`,
            { params: { token: token } }
          );
          console.log(response.data);
        }
        verifyToken();
      } catch (error) {}
    };
  });
  return (
    <>
      <NavBar />

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
