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

  const nameIsValid = (string) => {
    let regexName = /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]*$/;
    if (string.length > 5 && regexName.test(string)) {
      const arr = string.split(" ");
      const newName = arr
        .map((el) => (el.length ? el[0].toUpperCase() + el.substring(1) : null))
        .filter((el) => el !== null)
        .join(" ");
      return newName;
    } else {
      return "";
    }
  };

  const validEmail = (obj) => {
    let reMedio =
      /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    if (reMedio.test(obj) && obj.length > 5) {
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
    const isValidEmail = validEmail(email);
    const nameUpper = nameIsValid(name);
    console.log("nameUpper", nameUpper);
    if (nameUpper.length && isValidEmail) {
      Swal.fire(
        `Thanks ${nameUpper}, we will contact you via email as soon as possible`
      );
      setError({
        ...error,
        isActive: false,
      });
      e.target.reset();
    } else {
      setError({
        ...error,
        isActive: true,
        errorMessage: "**Please verify your information again**",
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
