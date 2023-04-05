import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";
import { ContextGlobal } from "../Components/utils/GlobalContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    const data = axios.get("https://jsonplaceholder.typicode.com/users");
    data
      .then((res) => dispatch({ type: "GET_USERS", payload: res.data }))
      .catch((err) => console.log("error", err));
  }, []);

  return (
    <main>
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {state.users.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;
