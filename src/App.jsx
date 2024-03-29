
import { useContext } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextGlobal } from "./Components/utils/global.context";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";

function App() {
  const { state } = useContext( ContextGlobal )

  return (
      <div className={`app ${ state.theme === 'dark' ? 'dark' : '' }`}>
        <Navbar/>
        <Routes>
          <Route path="contacto" element={<Contact />}/>
          <Route path="odontologo/:id" element={<Detail />}/>
          <Route path="favoritos" element={<Favs />}/>
          <Route path="/*" element={<Home />}/>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
