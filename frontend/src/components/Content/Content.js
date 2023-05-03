import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../login/Login";
import SignUp from "../login/SignUp";
import Enter from "../Enter/Enter";
import Enterlogin from "../Enterlogin/enterlogin";
import Babysitter from "../babysitter/Babysitter";
import Grandpacare from "../grandpacare/Grandpacare";
import Formulaire from "../formulaire/Formulaire";
import FormPost from "../formPost/FormPost";
const Content = ({userDecode}) => {
  return (
    <div class="container">
      <Routes>
        <Route path={"/Login"} element={<Login />} />
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/formulaire"} element={<Formulaire />} />
        <Route path={"/enter"} element={<Enter />} />
        <Route path={"/"} element={<Enterlogin />} />
        <Route path={"/babysitter"} element={<Babysitter userDecode={userDecode} />} />
        <Route path={"/grandpacare"} element={<Grandpacare  userDecode={userDecode}/>} />
        <Route path={"/formpost"} element={<FormPost />} />
      </Routes>
    </div>
  );
};

export default Content;
