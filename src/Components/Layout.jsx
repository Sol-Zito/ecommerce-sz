import React, { useContext } from "react";
import { ContextGlobal } from "./utils/GlobalContext";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "../index.css";

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
