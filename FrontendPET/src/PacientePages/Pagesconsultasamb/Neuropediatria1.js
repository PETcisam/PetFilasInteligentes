import { FaUser, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';


import  imgperfil from '../imgspacient/perfilexemplo.jpg'

function Neuropediatria1(){

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
          <img src={usuario.fotoPerfil} alt="Profile" className="profile-image" />
          <span className="profile-name">{usuario.nome}</span>
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
      <div className='titulosamb'>
        <h1 className='title'>Neuropediatria - 1 Consulta</h1>
      </div>
      </div>
    )

}

export default Neuropediatria1;