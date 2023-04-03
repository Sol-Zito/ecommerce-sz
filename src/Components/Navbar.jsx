import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  function ChageTheme() {
    if (state.theme === "light") {
      dispatch({ type: "MOD_DARK" });
    } else if (state.theme === "dark") {
      dispatch({ type: "MOD_LIGHT" });
    }
  }

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={ChageTheme()}>Change theme</button>
    </nav>
  );
};

export default Navbar;
