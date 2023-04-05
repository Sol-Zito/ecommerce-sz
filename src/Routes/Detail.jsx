import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentistSelect, setDentistsSelect] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const data = axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    data
      .then((res) => setDentistsSelect(res.data))
      .catch((err) => console.log("error", err));
  }, []);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className="detail-card">
        <img src="/images/doctor.jpg" alt="doctor placeholder" />
        <h2>Nombre: {dentistSelect.name}</h2>
        <h2> Email: {dentistSelect.email}</h2>
        <h3>Tel: {dentistSelect.phone}</h3>
        <h3>Website: {dentistSelect.website}</h3>

        <button className="favButton">Add fav</button>
      </div>
    </>
  );
};

export default Detail;
