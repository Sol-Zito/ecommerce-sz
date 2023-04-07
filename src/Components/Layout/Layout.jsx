import React, { useContext } from "react";
import { ContextGlobal } from "../utils/GlobalContext";
import { Outlet } from "react-router-dom";
import "../../index.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={`${state.theme} App`}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
