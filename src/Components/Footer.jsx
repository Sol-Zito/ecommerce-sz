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
      <p>Powered by</p>
      <img src="/images/DH.png" alt="DH-logo" />
      <ul className="list-footer">
        <li>
          <img src="/images/ico-facebook.png" alt="ícone do facebook" />
        </li>
        <li>
          <img src="/images/ico-instagram.png" alt="ícone do instagram" />
        </li>
        <li>
          <img src="/images/ico-whatsapp.png" alt="ícone do whatsapp" />
        </li>

        <li>
          <img src="/images/ico-tiktok.png" alt="ícone do tiktok" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
