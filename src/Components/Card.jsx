import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/GlobalContext";

const Card = ({ dentist }) => {
  const { name, username, id } = dentist;
  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {}, [state.data, localStorage]);

  const addFav = () => {
    dispatch({ type: "ADD_FAV", payload: dentist });
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
      <h2>Name: {name}</h2>
      <h2>Username: {username}</h2>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link to={`/dentista/${id}`}>
        <button>..More details..</button>
      </Link>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
