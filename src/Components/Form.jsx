import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  //    Nombre completo (con longitud mayor a 5)
  // - Email (con formato correcto de email)
  // - En caso de haber un error mostrar el siguiente mensaje de error: **Por favor verifique su información nuevamente**
  // - Una vez "enviado"( no se envía a ningún servidor pero podemos mostrar por consola los datos submiteados) el formulario
  // deberán mostrar un mensaje de éxito que contenga el siguiente formato: **Gracias _[nombre del usuario]_, te contactaremos cuando antes vía mail**

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
      alert(`Gracias ${isvalidName}, te contactaremos cuando antes vía mail`);
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
        />
        <input placeholder="Email" name="email" onChange={handleChange} />
        <button type="Submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
