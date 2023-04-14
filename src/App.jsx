import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Favs from "./Components/Favs/Favs";
import { ContextProvider } from "./Components/context/GlobalContext";
import HomeContainer from "./Components/Home/HomeContainer";
import DetailContainer from "./Components/Details/DetailContainer";
import Main from "./Components/Main";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<HomeContainer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dentist/:id" element={<DetailContainer />} />
            <Route path="/favs" element={<Favs />} />
          </Route>
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
