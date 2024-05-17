
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import Formulario from "./Formulario";
import Login from "./Login";
import Cadastro from "./Cadastro";


function App() {
  return (
    <Router>
      
      <Routes>
      <Route path="/" element={<Main/>} />
        <Route path="/form" element={<Formulario />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
     
    </Router>
  );
}

export default App