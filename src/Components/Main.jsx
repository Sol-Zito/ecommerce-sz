import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { Button } from "@mui/material";
import Footer from "../Components/Layout/Footer";
import Diversity1Icon from "@mui/icons-material/Diversity1";

const Main = () => {
  return (
    <div className="div-main">
      <h1>Welcome to Dentist!!</h1>
      <div>
        <h2>
          Meet our professionals..
          <Diversity1Icon />
        </h2>
        <Link to="/home">
          <Button variant="contained">Let's go...</Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
