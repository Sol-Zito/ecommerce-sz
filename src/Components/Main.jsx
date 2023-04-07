import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { Button } from "@mui/material";
import Footer from "../Components/Layout/Footer";

const Main = () => {
  return (
    <div style={{ backgroundColor: "bisque" }}>
      <main className="mainInit">
        <h1>Welcome to Dentist!!</h1>
        <p>Meet our professionals</p>
        <Link to="/home">
          <Button variant="contained">Let's go...</Button>
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
