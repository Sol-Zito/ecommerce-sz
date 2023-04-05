import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Form = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
  });

  const [error, setError] = useState({
    isActive: false,
    errorMessage: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const validEmail = (obj) => {
    const whitouthSpaces = obj.trim();
    if (whitouthSpaces.includes("@gmail.com") && whitouthSpaces.length > 11) {
      return true;
    } else {
      return false;
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isvalidName = userData.userName.trim().length > 5;
    const isValidEmail = validEmail(userData.email);
    if (isvalidName && isValidEmail) {
      Swal.fire(
        `Gracias ${userData.userName}, te contactaremos cuando antes vía mail`
      );
      setError({
        ...error,
        isActive: false,
      });
      navigate("/home");
    } else {
      setError({
        ...error,
        isActive: true,
        errorMessage: "Por favor verifique su información nuevamente",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {error.isActive && (
          <span style={{ color: "red", fontSize: "0.9rem" }}>
            {error.errorMessage}
          </span>
        )}
        <TextField
          variant="outlined"
          label="Nombre completo"
          name="userName"
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          variant="outlined"
          label="Email"
          name="email"
          onChange={handleChange}
          required
          fullWidth
        />
        <Button type="submit">Enviar</Button>
      </form>
    </>
  );
};

export default Form;
