import React from "react";

const CardFavs = ({ dentist }) => {
  const { name, username, phone, website } = dentist;
  return (
    <div className="detail-card">
      <img
        className="card-img-top"
        src="/images/doctor.jpg"
        alt="doctor placeholder"
        width="150px"
      />
      <h2>Name: {name}</h2>
      <h3>Username: {username}</h3>
      <h3>Phone: {phone}</h3>
      <h3>Website: {website}</h3>
      {/* <button>Remove fav</button> */}
    </div>
  );
};

export default CardFavs;
