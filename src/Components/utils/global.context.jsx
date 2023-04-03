import { createContext, useMemo, useReducer } from "react";

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
  const providerValue = useMemo(() => ({ themesReducer, initialState }), []);
  const [state, dispatch] = useReducer(themesReducer, initialState);
  return (
    <ContextGlobal.Provider value={{ state, dispatch, providerValue }}>
      {children}
    </ContextGlobal.Provider>
  );

  {
    /* <div>
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const changeUser = (user) => setUser(user);

  const getUserFromStorage = () => {
    const localData = localStorage.getItem("user");
    return localData ? JSON.parse(localData) : [];
  };

  const [user, setUser] = useState(getUserFromStorage());

  const setUserInStorage = (user) =>
    localStorage.setItem("user", JSON.stringify(user));

  useEffect(() => {
    setUserInStorage(user);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, changeUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
</div> */
  }
};
