import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/GlobalContext";
import CardFavs from "../Components/CardFavs";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const favsDentists = state.data;
  console.log("state en fav", favsDentists);

  console.log("favsDentists", favsDentists);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favsDentists.map((dentista) => (
          <CardFavs key={dentista.id} dentista={dentista} />
        ))}
      </div>
    </>
  );
};

export default Favs;
