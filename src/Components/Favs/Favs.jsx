import React, { useContext } from "react";
import { ContextGlobal } from "../context/GlobalContext";
import { Button } from "@mui/material";
import FavCard from "./FavCard";
import Swal from "sweetalert2";
import "../Favs/Fav.css";

const Favs = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const favsDentists = state.favs;

  const removeFav = (obj) => {
    Swal.fire({
      title: "Are you sure you want to delete dentist?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Dentist was removed from favorites.", "success");
        dispatch({ type: "REMOVE_FAV", payload: obj });
      }
    });
  };

  const clearFavs = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Dentists have been removed", "success");
        dispatch({ type: "CLEAR_FAV" });
      }
    });
  };

  return (
    <>
      <h1>Featured Dentists: </h1>
      <div className="containerBtn">
        {favsDentists.length ? (
          <Button onClick={clearFavs} variant="contained">
            Clear Favs
          </Button>
        ) : (
          <h2>Not have featured dentists yet</h2>
        )}
      </div>
      <div className="card-grid">
        {favsDentists.map((dentist) => (
          <FavCard
            key={dentist.id}
            dentist={dentist}
            removeFav={removeFav}
            state={state}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;
