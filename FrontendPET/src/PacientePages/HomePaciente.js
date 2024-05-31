import "./HomePaciente1.css"
import { FaUser, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import img1 from './consulamb.jpeg';
import img2 from './examcirur.jpeg';

function HomePaciente(){

    return(
    <div>
      {/* topbar    */}
    <header className="header">
      <div className="logo">
        {/* <img src={} alt="Logo" /> */}
      </div>
      <nav className="menu">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="#option2">Contato</a></li>
          <li><a href="#option3">Mensagem</a></li>
          <li><a href="/">Sair</a></li>
        </ul>
      </nav>
    </header>

        {/* barra lateral */}
        <div className="sidebar">
        <div className="icon profile-icon">
          <FaUser />
        </div>
        <div className="spacer"></div>
        <div className="icon settings-icon">
          <FaCog />
        </div>
      </div>

      {/* objeto central */}
      <div className="titulohomepdiv">
      <h1 className="titulohomep">Central de Agendamento</h1>
      </div>
      <div className="options-container">
      <div className="option">
        <Link to="#/page1">
          <img src={img1} alt="Consultas Ambulatoriais" className="option-image" />
          <div className="option-text">Consultas Ambulatoriais</div>
        </Link>
      </div>
      <div className="option">
        <Link to="#/page2">
          <img src={img2} alt="Exames e Cirurgias" className="option-image" />
          <div className="option-text">Exames e Cirurgias</div>
        </Link>
      </div>
    </div>
    
    </div>

    );
}

export default HomePaciente;