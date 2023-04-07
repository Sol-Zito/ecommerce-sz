import React from "react";
import "../../index.css";
import "../Details/Detail.css";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const DetailCard = ({ dentistSelect, addFav, favs }) => {
  return (
    <div className="container">
      <h1>Detail Dentist {dentistSelect.id}: </h1>

      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
        <tr>
          <td>{dentistSelect.name}</td>
          <td>{dentistSelect.email}</td>
          <td>{dentistSelect.phone}</td>
          <td>{dentistSelect.website}</td>
        </tr>
      </table>

      <Button
        onClick={() => addFav(dentistSelect)}
        size="small"
        variant="contained"
        disabled={
          favs.some((fav) => fav.id === dentistSelect.id) ? true : false
        }
      >
        <FavoriteIcon />
        Add fav
      </Button>
    </div>
  );
};

export default DetailCard;
