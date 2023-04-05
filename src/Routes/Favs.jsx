import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/GlobalContext";
import CardFavs from "../Components/CardFavs";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  const favsDentists = state.favs;

  return (
    <>
      <h1>Dentists Favs: </h1>
      <div className="card-grid">
        {favsDentists.map((dentist) => (
          <CardFavs key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </>
  );
};

export default Favs;
