import React, { useState } from "react";
import Swal from "sweetalert2";

const Form = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log(userData);
  };

  const validEmail = (obj) => {
    const sinEspacios = obj.trim();
    const final = sinEspacios.split();
    if (final.some("@")) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = validEmail(userData.email);
    const isvalidName = userData.name.trim().lenght;
    if (isvalidName > 5 && isValidEmail) {
      //alert(`Gracias ${isvalidName}, te contactaremos cuando antes vía mail`);
      Swal.fire(
        `Gracias ${isvalidName}, te contactaremos cuando antes vía mail`
      );
    } else {
      alert(`Por favor verifique su información nuevamente`);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nombre completo"
          name="userName"
          onChange={handleChange}
          required
        />
        <input
          placeholder="Email"
          name="email"
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
