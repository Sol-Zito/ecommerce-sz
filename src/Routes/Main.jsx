import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { Button } from "@mui/material";
import Footer from "../Components/Footer";

const Main = () => {
  return (
    <div style={{ backgroundColor: "bisque" }}>
      <main className="mainInit">
        <h1>Welcome to Dentist!!</h1>
        <p>Conozca a nuestros profesionales</p>
        <Link to="/home">
          <Button variant="contained">Conocer...</Button>
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
