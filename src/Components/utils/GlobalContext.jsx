import { createContext, useEffect, useReducer } from "react";

const getDentistFromStorage = () => {
  const localData = localStorage.getItem("listDentist");
  console.log("localData", localData);
  return localData ? JSON.parse(localData) : [];
};

const setDentistInStorage = (dentist) => {
  const array = getDentistFromStorage();

  array.push(dentist);

  return localStorage.setItem("listDentist", JSON.stringify(array));
};

export const initialState = { theme: "light", data: getDentistFromStorage() };

export const ContextGlobal = createContext();

function themesReducer(state, action) {
  switch (action.type) {
    case "MOD_LIGHT":
      return { ...state, theme: "light" };
    case "MOD_DARK":
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
    // case "REMOVE_FAV":
    //removeItem()
    //   let exist1 = state.data.some(
    //     (element) => element.id === action.payload.id
    //   );
    //   if (exist1) {
    //     let newArr = state.data.map((element) => {
    //       if (element.id === action.payload.id) {
    //         return {
    //           ...element,
    //           isfav: false,
    //         };
    //       } else {
    //         return element;
    //       }
    //     });}
    //  return { ...state, data: newArr}
    default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  //const providerValue = useMemo(() => ({ themesReducer, initialState }), []);
  const [state, dispatch] = useReducer(themesReducer, initialState);

  useEffect(() => {}, [state.data]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
