
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Grid from "./Grid";
import HomePaciente from "./PacientePages/HomePaciente";
import HomeAdm from "./AdmPages/HomeAdm";
import HomeMedico from "./MedicoPages/HomeMedico";

function App() {
  return (
    <Router>
      
      <Routes>
      <Route path="/" element={<Main/>} />
        <Route path="/paciente/home" element={<HomePaciente/>} />
        <Route path="/medico/home" element={<HomeMedico/>} />
        <Route path="/adm/home" element={<HomeAdm/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/grid" element={<Grid />} />
      </Routes>
     
    </Router>
  );
}

export default App