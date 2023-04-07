import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../utils/GlobalContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { getDentistById } from "../../services/dentistsServices";
import "../../index.css";
import "../Details/Detail.css";
import { Button } from "@mui/material";
import DetailCard from "./DetailCard";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const DetailContainer = () => {
  const [dentistSelect, setDentistsSelect] = useState({});
  const { state, dispatch } = useContext(ContextGlobal);

  const { id } = useParams();

  useEffect(() => {
    const data = getDentistById(id);
    data
      .then((res) => setDentistsSelect(res.data))
      .catch((err) => console.log("error", err));
  }, [state.favs]);

  const addFav = (obj) => {
    dispatch({ type: "ADD_FAV", payload: obj });
  };

  return (
    <DetailCard
      dentistSelect={dentistSelect}
      addFav={addFav}
      favs={state.favs}
    />
  );
};

export default DetailContainer;
