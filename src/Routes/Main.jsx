import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { Button } from "@mui/material";

const Main = () => {
  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Welcome to Dentist! </h1>
      <p>Conozca a nuestros profesionales</p>
      <Link to="/home">
        <Button variant="contained">...Conocer...</Button>
      </Link>
    </div>
  );
};

export default Main;
