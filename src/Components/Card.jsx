import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/GlobalContext";

const Card = ({ dentista }) => {
  const { name, username, id } = dentista;
  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {}, [state.data, localStorage]);

  const addFav = () => {
    dispatch({ type: "ADD_FAV", payload: dentista });
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <img
        className="card-img-top"
        src="/images/doctor.jpg"
        alt="doctor placeholder"
        width="150px"
      />
      <h2>Nombre: {name}</h2>
      <h2> Usuario: {username}</h2>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link to={`/dentista/${id}`}>
        <button>Ver detalles</button>
      </Link>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
