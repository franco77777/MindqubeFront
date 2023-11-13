import { Link, useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider, //el proveedor de autenticacion
  signInWithPopup, //redirige a una ventana para autenticar
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useEffect, useState } from "preact/hooks";
import { useSignal } from "@preact/signals";
//import SockJS from "sockjs-client";
//import { over } from "stompjs";
// import * as Stomp from 'stompjs';
//const Stomp = require("stompjs");

import SockJS from "sockjs-client";

import Stomp, { over } from "stompjs";
//const SockJS = require("sockjs-client")

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

  // const socketMessate = useSignal("");

  // let socket = new WebSocket("ws://localhost:8080/chat");
  // socket.onmessage = (event) => {
  //   console.log(event.data);
  //   socketMessate.value = "probando si realmente funciona";
  // };

  // const sendMessage = (e: any) => {
  //   socket.send("enviar");
  // };

  return (
    <>
      <div className="">
        <h2>PAGINA 1</h2>
        <div>
          <span className="">soy socket value : {socketMessages.value}</span>
          <input type="text" name="" id="" />
          <button onClick={connect}></button>
        </div>
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
