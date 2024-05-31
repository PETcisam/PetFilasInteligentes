//pagina home
import Maincomp from "./compoMain/Maincomp.css";
import logo from './compoMain/logocisam.jpg';

function Main(){

    return(

    <div>
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="menu">
        <ul>
          <li><a href="#option1">Inicio</a></li>
          <li><a href="#option2">Contato</a></li>
          <li><a href="#option3">Entrar</a></li>
          <li><a href="#option4">Registre-se</a></li>
        </ul>
      </nav>
    </header>
    <div className="titlebox">
        <h1 className="title">Agendamento de Consulta</h1>
        <li className="registre"> <a href="/cadastro">Registre-se</a></li>
    </div>

    </div>

    );
}

export default Main;