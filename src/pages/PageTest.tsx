import { Link, useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider, //el proveedor de autenticacion
  signInWithPopup, //redirige a una ventana para autenticar
  signOut,
  onAuthStateChanged, //verifica el estado de nuestra autenticacion
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useEffect, useState } from "react";
import { logOut, sigIn } from "../utils/firebaseConfig";

const PageTest = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  console.log("PageTest Render");
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  // const logOut = () => {
  //   signOut(auth);
  // };

  const iniciarSesion = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   if (user != null) {
  //     navigate("/");
  //   }
  // }, [user]);

  return (
    <>
      <div className="mt-20">
        <h2>PAGINA 1</h2>
        <Link to={"/test2"}>
          <button className="bg-red-500">Page 222222</button>
        </Link>
        <Link to={"/test3"}>
          <button className="bg-blue-600">Page 33333</button>
        </Link>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
        cumque dolor velit laudantium atque sunt repudiandae dolorem possimus
        iure magni suscipit dignissimos amet eaque ad reiciendis doloribus
        facilis voluptate. Sed. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Dolores, cumque dolor velit laudantium atque sunt
        repudiandae dolorem possimus iure magni suscipit dignissimos amet eaque
        ad reiciendis doloribus facilis voluptate. Sed. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Dolores, cumque dolor velit
        laudantium atque sunt repudiandae dolorem possimus iure magni suscipit
        dignissimos amet eaque ad reiciendis doloribus facilis voluptate. Sed.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
        cumque dolor velit laudantium atque sunt repudiandae dolorem possimus
        iure magni suscipit dignissimos amet eaque ad reiciendis doloribus
        facilis voluptate. Sed. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Dolores, cumque dolor velit laudantium atque sunt
        repudiandae dolorem possimus iure magni suscipit dignissimos amet eaque
        ad reiciendis doloribus facilis voluptate. Sed. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Dolores, cumque dolor velit
        laudantium atque sunt repudiandae dolorem possimus iure magni suscipit
        dignissimos amet eaque ad reiciendis doloribus facilis voluptate. Sed.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
        cumque dolor velit laudantium atque sunt repudiandae dolorem possimus
        iure magni suscipit dignissimos amet eaque ad reiciendis doloribus
        facilis voluptate. Sed. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Dolores, cumque dolor velit laudantium atque sunt
        repudiandae dolorem possimus iure magni suscipit dignissimos amet eaque
        ad reiciendis doloribus facilis voluptate. Sed. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Dolores, cumque dolor velit
        laudantium atque sunt repudiandae dolorem possimus iure magni suscipit
        dignissimos amet eaque ad reiciendis doloribus facilis voluptate. Sed.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
        cumque dolor velit laudantium atque sunt repudiandae dolorem possimus
        iure magni suscipit dignissimos amet eaque ad reiciendis doloribus
        facilis voluptate. Sed. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Dolores, cumque dolor velit laudantium atque sunt
        repudiandae dolorem possimus iure magni suscipit dignissimos amet eaque
        ad reiciendis doloribus facilis voluptate. Sed. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Dolores, cumque dolor velit
        laudantium atque sunt repudiandae dolorem possimus iure magni suscipit
        dignissimos amet eaque ad reiciendis doloribus facilis voluptate. Sed.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
        cumque dolor velit laudantium atque sunt repudiandae dolorem possimus
        iure magni suscipit dignissimos amet eaque ad reiciendis doloribus
        facilis voluptate. Sed. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Dolores, cumque dolor velit laudantium atque sunt
        repudiandae dolorem possimus iure magni suscipit dignissimos amet eaque
        ad reiciendis doloribus facilis voluptate. Sed. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Dolores, cumque dolor velit
        laudantium atque sunt repudiandae dolorem possimus iure magni suscipit
        dignissimos amet eaque ad reiciendis doloribus facilis voluptate. Sed.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
        cumque dolor velit laudantium atque sunt repudiandae dolorem possimus
        iure magni suscipit dignissimos amet eaque ad reiciendis doloribus
        facilis voluptate. Sed.Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Dolores, cumque dolor velit laudantium atque sunt
        repudiandae dolorem possimus iure magni suscipit dignissimos amet eaque
        ad reiciendis doloribus facilis voluptate. Sed. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Dolores, cumque dolor velit
        laudantium atque sunt repudiandae dolorem possimus iure magni suscipit
        dignissimos amet eaque ad reiciendis doloribus facilis voluptate. Sed.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
        cumque dolor velit laudantium atque sunt repudiandae dolorem possimus
        iure magni suscipit dignissimos amet eaque ad reiciendis doloribus
        facilis voluptate. Sed. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Dolores, cumque dolor velit laudantium atque sunt
        repudiandae dolorem possimus iure magni suscipit dignissimos amet eaque
        ad reiciendis doloribus facilis voluptate. Sed. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Dolores, cumque dolor velit
        laudantium atque sunt repudiandae dolorem possimus iure magni suscipit
        dignissimos amet eaque ad reiciendis doloribus facilis voluptate. Sed.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
        cumque dolor velit laudantium atque sunt repudiandae dolorem possimus
        iure magni suscipit dignissimos amet eaque ad reiciendis doloribus
        facilis voluptate. Sed. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Dolores, cumque dolor velit laudantium atque sunt
        repudiandae dolorem possimus iure magni suscipit dignissimos amet eaque
        ad reiciendis doloribus facilis voluptate. Sed. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Dolores, cumque dolor velit
        laudantium atque sunt repudiandae dolorem possimus iure magni suscipit
        dignissimos amet eaque ad reiciendis doloribus facilis voluptate. Sed.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
        cumque dolor velit laudantium atque sunt repudiandae dolorem possimus
        iure magni suscipit dignissimos amet eaque ad reiciendis doloribus
        facilis voluptate. Sed. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Dolores, cumque dolor velit laudantium atque sunt
        repudiandae dolorem possimus iure magni suscipit dignissimos amet eaque
        ad reiciendis doloribus facilis voluptate. Sed. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Dolores, cumque dolor velit
        laudantium atque sunt repudiandae dolorem possimus iure magni suscipit
        dignissimos amet eaque ad reiciendis doloribus facilis voluptate. Sed.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
        cumque dolor velit laudantium atque sunt repudiandae dolorem possimus
        iure magni suscipit dignissimos amet eaque ad reiciendis doloribus
        facilis voluptate. Sed. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Dolores, cumque dolor velit laudantium atque sunt
        repudiandae dolorem possimus iure magni suscipit dignissimos amet eaque
        ad reiciendis doloribus facilis voluptate. Sed. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Dolores, cumque dolor velit
        laudantium atque sunt repudiandae dolorem possimus iure magni suscipit
        dignissimos amet eaque ad reiciendis doloribus facilis voluptate. Sed.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
        cumque dolor velit laudantium atque sunt repudiandae dolorem possimus
        iure magni suscipit dignissimos amet eaque ad reiciendis doloribus
        facilis voluptate. Sed. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Dolores, cumque dolor velit laudantium atque sunt
        repudiandae dolorem possimus iure magni suscipit dignissimos amet eaque
        ad reiciendis doloribus facilis voluptate. Sed. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Dolores, cumque dolor velit
        laudantium atque sunt repudiandae dolorem possimus iure magni suscipit
        dignissimos amet eaque ad reiciendis doloribus facilis voluptate. Sed.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
        cumque dolor velit laudantium atque sunt repudiandae dolorem possimus
        iure magni suscipit dignissimos amet eaque ad reiciendis doloribus
        facilis voluptate. Sed.
      </div>
    </>
  );
};

export default PageTest;
