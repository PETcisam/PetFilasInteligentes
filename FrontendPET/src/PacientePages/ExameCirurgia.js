import { FaUser, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import  imgperfil from './imgspacient/perfilexemplo.jpg'

import './ExameCirurgia.css'

import img26 from './imgspacient/histerodiagex.jpeg';
import img27 from './imgspacient/histerocex.jpeg';
import img28 from './imgspacient/laqueaex.jpeg';
import img29 from './imgspacient/cirurgiaginecoex.jpeg';

function ExameCirurgia(){


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
            <li><a href="#option3">Mensagem</a></li>
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
      
     <div className='grid-container2'>
          <div class="linhaex">
            <div className='consulimgdiv'>
            <Link to="/paciente/exames/histerodiag">
              <img src={img26} alt="Exames e Cirurgias" className="consul-image2" />
              <div className="consul-text2">Histeroscopia Diagnóstica</div>
            </Link>
            </div>

            <div className='consulimgdiv' >
            <Link to="/paciente/exames/histerocir">
              <img src={img27} alt="Exames e Cirurgias" className="consul-image2" />
              <div className="consul-text2">Histeroscopia Cirúrgica</div>
            </Link>
            </div>

          </div>

          <div class="linhaex">

            <div className='consulimgdiv'>
            <Link to="/paciente/exames/cirgurglaque">
              <img src={img28} alt="Exames e Cirurgias" className="consul-image2" />
              <div className="consul-text2">Cirurgia Laqueadura Tubária</div>
            </Link>
            </div>

            <div className='consulimgdiv'>
            <Link to="/paciente/exames/cirurgiaginec">
              <img src={img29} alt="Exames e Cirurgias" className="consul-image2" />
              <div className="consul-text2">Cirurgia Ginecologia Geral</div>
            </Link>
            </div>

          </div>
     </div>
      </div>
    )
}

export default ExameCirurgia;