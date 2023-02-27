import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./index";
import  Login  from "./Home/Login";
import { Menu } from "./SideMenu/Menu";
import { About } from "./Page/About";
import "./style/index.css";
import SobreNosotros from "./Page/SobreNosotros";
import { Principal } from "./SideMenu/principal";
import Registrate from "./Home/registrar";




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Route path="/" element={<Principal />} />
        <Route Route path="/login" element={<Login />} />
        <Route Route path="/index" element={<Index />} />
        <Route Route path="/menu" element={<Menu />} />
        <Route Route path="/About" element={<About />} />
        <Route Route path="/SobreNosotros" element={<SobreNosotros />} />
        <Route Route path="/Registrate" element={<Registrate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
