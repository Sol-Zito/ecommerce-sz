import React, { useContext, useEffect } from "react";
import HomeCard from "./HomeCard";
import { ContextGlobal } from "../context/GlobalContext";
import { getDentists } from "../../services/dentistsServices";
import Swal from "sweetalert2";
import "../Home/Home.css";

const HomeContainer = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    const data = getDentists();
    data
      .then((res) => dispatch({ type: "GET_USERS", payload: res.data }))
      .catch((err) => console.log("error", err));
  }, []);

  const addFav = (obj) => {
    dispatch({ type: "ADD_FAV", payload: obj });
    Swal.fire("Good job!", `${obj.name}, was successfully added`, "success");
  };

  return (
    <main>
      <h1>Dentists:</h1>
      <br></br>
      <div className="card-grid">
        {state.users.map((dentist) => (
          <HomeCard
            key={dentist.id}
            dentist={dentist}
            addFav={addFav}
            favs={state.favs}
            theme={state.theme}
          />
        ))}
      </div>
    </main>
  );
};

export default HomeContainer;
