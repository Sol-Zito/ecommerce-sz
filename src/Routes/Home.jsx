import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentistsData, setDentistsData] = useState([]);

  useEffect(() => {
    const data = axios.get("https://jsonplaceholder.typicode.com/users");
    data
      .then((res) => setDentistsData(res.data))
      .catch((err) => console.log("error", err));
  }, []);

  return (
    <main>
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {dentistsData.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;
