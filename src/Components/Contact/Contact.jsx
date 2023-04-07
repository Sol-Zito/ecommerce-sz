import React, { useState } from "react";
import Form from "./Form";
import Swal from "sweetalert2";
import "./Contact.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
  });

  const [error, setError] = useState({
    isActive: false,
    errorMessage: "",
  });

  const nameMessage = (string) => {
    const arr = string.split(" ");
    const newName = arr
      .map((el) => (el.length ? el[0].toUpperCase() + el.substring(1) : null))
      .filter((el) => el !== null)
      .join(" ");
    return newName;
  };

  const validEmail = (obj) => {
    if (obj.includes("@") && obj.includes(".com") && obj.length > 11) {
      return true;
    } else {
      return false;
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = userData.userName;
    const email = userData.email;
    const isvalidName = name.length > 5;
    const isValidEmail = validEmail(email);
    const nameUpper = nameMessage(name);
    if (isvalidName && isValidEmail) {
      Swal.fire(`Gracias ${nameUpper}, te contactaremos cuanto antes vía mail`);
      setError({
        ...error,
        isActive: false,
      });
      e.target.reset();
    } else {
      setError({
        ...error,
        isActive: true,
        errorMessage: "Por favor verifique su información nuevamente",
      });
    }
  };
  return (
    <Form
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      error={error}
    />
  );
};

export default Contact;
