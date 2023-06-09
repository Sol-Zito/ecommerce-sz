import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Tooltip from "@mui/material/Tooltip";

const HomeCard = ({ dentist, addFav, favs, theme }) => {
  const { name, username, id } = dentist;

  return (
    <>
      <Card
        sx={
          theme === "dark"
            ? {
                backgroundColor: "#12121296",
                color: "#fff",
                maxWidth: 200,
              }
            : { maxWidth: 200 }
        }
      >
        <CardMedia
          sx={{ with: 150, height: 140 }}
          image="images/doctor.jpg"
          title="doctor placeholder"
        />
        <CardContent sx={{ with: 150, height: 140 }}>
          <Typography
            gutterBottom
            variant="h5"
            component=""
            sx={{ with: 150, height: 70 }}
          >
            {name}
          </Typography>
          <Typography variant="body2" sx={{ with: 150, height: 70 }}>
            Username: {username}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/dentist/${id}`}>
            <Button variant="contained" size="small">
              More details...
            </Button>
          </Link>
          {favs.some((fav) => fav.id === id) ? (
            <Tooltip title="It's already in favs">
              <p>
                <Button disabled>
                  <FavoriteIcon />
                </Button>
              </p>
            </Tooltip>
          ) : (
            <Button onClick={() => addFav(dentist)} size="small">
              <FavoriteIcon />
            </Button>
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default HomeCard;
