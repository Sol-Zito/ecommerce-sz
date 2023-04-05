import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {
  ContextGlobal,
  ContextProvider,
} from "./Components/utils/GlobalContext";
import { useContext } from "react";

export const Layout = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={`${state.theme} App`}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/dentista/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
          </Route>
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
