import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
export const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/dentista/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
