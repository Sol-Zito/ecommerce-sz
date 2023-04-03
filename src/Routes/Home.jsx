import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const dentistasData = [];
  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {dentistasData.map((dentista) => (
          <Card key={1} dentista />
        ))}
      </div>
    </main>
  );
};

export default Home;