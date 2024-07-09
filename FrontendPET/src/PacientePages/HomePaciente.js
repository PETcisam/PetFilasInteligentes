import "./HomePaciente1.css"
import { FaUser, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import img1 from './imgspacient/consulamb.jpeg';
import img2 from './imgspacient/examcirur.jpeg';
import  imgperfil from './imgspacient/perfilexemplo.jpg'

function HomePaciente(){

  // SIMULANDO UM LOGIN
  const usuario  = {
    nome: 'JUAN CAIO',
    fotoPerfil: imgperfil
  };
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
            <li><a href="/">Sair</a></li>
          </ul>
        </nav>
        <div className="profile">
        <Link className='perfilpacientelink' to="/paciente/perfil">
          <img src={usuario.fotoPerfil} alt="Profile" className="profile-image" />
          <span className="profile-name">{usuario.nome}</span>
        </Link>
        </div>
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
            <Link to="/paciente/consultas">
              <img src={img1} alt="Consultas Ambulatoriais" className="option-image" />
              <div className="option-text">Consultas Ambulatoriais</div>
            </Link>
          </div>
          <div className="option">
            <Link to="/paciente/exames">
              <img src={img2} alt="Exames e Cirurgias" className="option-image" />
              <div className="option-text">Exames e Cirurgias</div>
            </Link>
          </div>
        </div>
        {/* rodapé */}
    </div>
    );
}
export default HomePaciente;