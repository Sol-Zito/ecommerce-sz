import React, { useContext } from "react";
import { ContextGlobal } from "../context/GlobalContext";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../../index.css";
import "../Layout/Layout.css";

const Layout = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={`${state.theme} main-container App`}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
