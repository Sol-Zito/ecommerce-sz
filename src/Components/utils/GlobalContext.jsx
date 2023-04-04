import { createContext, useReducer } from "react";

export const initialState = { theme: "light", data: [] };

export const ContextGlobal = createContext();

function themesReducer(state, action) {
  switch (action.type) {
    case "MOD_LIGHT":
      return { ...state, theme: "light" };
    case "MOD_DARK":
      return { ...state, theme: "dark" };
    default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  //const providerValue = useMemo(() => ({ themesReducer, initialState }), []);
  const [state, dispatch] = useReducer(themesReducer, initialState);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
