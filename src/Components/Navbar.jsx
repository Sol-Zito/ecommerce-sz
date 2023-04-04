import React, { useContext, useEffect } from "react";
import { ContextGlobal } from "./utils/GlobalContext";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  function ChageTheme() {
    if (state.theme === "light") {
      dispatch({ type: "MOD_DARK" });
      console.log(state.theme);
    } else if (state.theme === "dark") {
      dispatch({ type: "MOD_LIGHT" });
    }
  }
  useEffect(() => {
    console.log("new color", state.theme);
  }, [state.theme]);
  return (
    <nav style={{ justifyContent: "flex-end" }}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <ul
        style={{
          fontSize: "large",
          listStyleType: "none",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "2px",
          margin: "16px 19px",
        }}
      >
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contacto">Login</Link>
        </li>
        <li>
          <Link to="/favs">Favs</Link>
        </li>
        <li>
          {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
          <button onClick={ChageTheme}>☀ 🌙</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
