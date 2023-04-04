import React from "react";

const icon = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  gap: "1rem",
  filter: "brightness(0)",
};

const Footer = () => {
  return (
    <footer style={{ justifyContent: "space-around" }}>
      <p>Powered by</p>
      <img src="/images/DH.png" alt="DH-logo" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "1rem",
          filter: "brightness(0)",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <img
          src="/images/ico-facebook.png"
          alt="ícone do facebook"
          style={{ maxWidth: "2rem", height: "auto" }}
        />
        <img
          src="/images/ico-instagram.png"
          alt="ícone do instagram"
          style={{ maxWidth: "2rem", height: "auto" }}
        />
        <img
          src="/images/ico-whatsapp.png"
          alt="ícone do whatsapp"
          style={{ maxWidth: "2rem", height: "auto" }}
        />
        <img
          src="/images/ico-tiktok.png"
          alt="ícone do tiktok"
          style={{ maxWidth: "2rem", height: "auto" }}
        />
      </div>
    </footer>
  );
};

export default Footer;
