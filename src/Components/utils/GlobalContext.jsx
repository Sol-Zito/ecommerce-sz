import { createContext, useEffect, useMemo, useReducer } from "react";

const getDentistFromStorage = () => {
  const localData = localStorage.getItem("listDentist");
  return localData ? JSON.parse(localData) : [];
};

const getThemeFromStorage = () => {
  const localData = localStorage.getItem("theme");
  return localData ? localData : "";
};

const setDentistInStorage = (dentist) => {
  const array = getDentistFromStorage();
  array.push(dentist);
  return localStorage.setItem("listDentist", JSON.stringify(array));
};

export const initialState = {
  theme: getThemeFromStorage(),
  data: getDentistFromStorage(),
};

export const ContextGlobal = createContext();

function themesReducer(state, action) {
  switch (action.type) {
    case "MOD_LIGHT":
      localStorage.setItem("theme", "light");
      return { ...state, theme: "light" };
    case "MOD_DARK":
      localStorage.setItem("theme", "dark");
      return { ...state, theme: "dark" };
    case "ADD_FAV":
      let exist = state.data.some(
        (elemento) => elemento.id === action.payload.id
      );
      if (exist) {
        alert(`${action.payload.name} existe`);
      } else {
        let newDentist = { ...action.payload, isfav: true };
        setDentistInStorage({ ...newDentist });
        alert(`${action.payload.name} fue agregado con exito`);
      }
      return { ...state, data: getDentistFromStorage() };

    default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const providerValue = useMemo(() => ({ themesReducer }), [initialState]);
  const [state, dispatch] = useReducer(themesReducer, initialState);

  useEffect(() => {}, [providerValue]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch, providerValue }}>
      {children}
    </ContextGlobal.Provider>
  );
};
