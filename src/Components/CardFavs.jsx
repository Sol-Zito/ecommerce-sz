import React from "react";

const CardFavs = ({ dentista }) => {
  const { name, username, phone, website } = dentista;
  return (
    <div className="detail-card">
      <img
        className="card-img-top"
        src="/images/doctor.jpg"
        alt="doctor placeholder"
        width="150px"
      />
      <h2>Nombre: {name}</h2>
      <h2> Usuario: {username}</h2>
      <h3>Tel: {phone}</h3>
      <h3>Website: {website}</h3>
      {/* <button>Remove fav</button> */}
    </div>
  );
};

export default CardFavs;
