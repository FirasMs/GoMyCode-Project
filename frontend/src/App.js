import Content from "../src/components/Content/Content";
import Footer from "./components/Footer/Footer";
import FormPost from "./components/formPost/FormPost";
import Navigation from "./components/navbar/Navigation";

import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
function App() {
  const [user, setUser] = useState({})
  const [userDecode, setUserDecode] = useState({});
  const token = localStorage.getItem("token");
  if (token) {
    setUser(token)
    const userDecoded = jwtDecode(token);
    setUserDecode(userDecoded)
  }



  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Content userDecode={userDecode} />
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
