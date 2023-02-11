
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./index";
import {Login} from "./Home/Login";
import {Menu} from "./SideMenu/Menu";
import { About } from "./Page/About";
import "./style/index.css";
import SobreNosotros from "./Page/SobreNosotros"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route Route path="/" element={<Login />} />
        <Route Route path="/index" element={<Index />} />
        <Route Route path="/menu" element={<Menu />} />
        <Route Route path="/About" element={<About />} />
        <Route Route path="/SobreNosotros" element={<SobreNosotros />} />
      </Routes>
    </BrowserRouter>
  );
 }

export default App;
