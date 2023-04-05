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
    <footer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          flexDirection: "row",
          width: "80%",
        }}
      >
        <p>Powered by</p>
        <img src="/images/DH.png" alt="DH-logo" />
      </div>
      <ul className="list-footer" style={{ width: "calc(100% / 3)" }}>
        <li>
          <img src="/images/ico-facebook.png" alt="icon facebook" />
        </li>
        <li>
          <img src="/images/ico-instagram.png" alt="icon instagram" />
        </li>
        <li>
          <img src="/images/ico-whatsapp.png" alt="icon whatsapp" />
        </li>

        <li>
          <img src="/images/ico-tiktok.png" alt="icon tiktok" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
