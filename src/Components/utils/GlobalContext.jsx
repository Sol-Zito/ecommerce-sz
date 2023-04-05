import { createContext, useEffect, useMemo, useReducer } from "react";

const getDentistFavFromStorage = () => {
  const localData = localStorage.getItem("listDentist");
  return localData ? JSON.parse(localData) : [];
};

const getThemeFromStorage = () => {
  const localData = localStorage.getItem("theme");
  return localData ? localData : "light";
};

const setDentistInStorage = (dentist) => {
  const array = getDentistFavFromStorage();
  array.push(dentist);
  return localStorage.setItem("listDentist", JSON.stringify(array));
};

export const initialState = {
  theme: getThemeFromStorage(),
  users: [],
  favs: getDentistFavFromStorage(),
};

export const ContextGlobal = createContext();

function globalReducer(state, action) {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    case "MOD_LIGHT":
      localStorage.setItem("theme", "light");
      return { ...state, theme: "light" };
    case "MOD_DARK":
      localStorage.setItem("theme", "dark");
      return { ...state, theme: "dark" };
    case "ADD_FAV":
      let exist = state.favs.some(
        (element) => element.id === action.payload.id
      );
      if (exist) {
        alert(`${action.payload.name} existe`);
      } else {
        let newDentist = { ...action.payload, isfav: true };
        setDentistInStorage({ ...newDentist });
        alert(`${action.payload.name} fue agregado con exito`);
      }
      return { ...state, favs: getDentistFavFromStorage() };

    default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const providerValue = useMemo(() => ({ globalReducer }), [initialState]);
  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {}, [providerValue]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch, providerValue }}>
      {children}
    </ContextGlobal.Provider>
  );
};
