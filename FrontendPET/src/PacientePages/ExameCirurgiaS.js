
import { FaUser, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';


import  imgperfil from './imgspacient/perfilexemplo.jpg'

export function HDiagnostica(){

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
      {/* esse title é universal, temos que criar uma div universal para o titulo tb =, ajustando margem e etc */}
      <div className='titulosamb'>
        <h1 className='title'>Histeroscopia Diagnóstica</h1>
      </div>
      </div>
    )

}

export function HCirurgica(){

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
      {/* esse title é universal, temos que criar uma div universal para o titulo tb =, ajustando margem e etc */}
      <div className='titulosamb'>
        <h1 className='title'>Histeroscopia Cirúrgica</h1>
      </div>
      </div>
    )

}

export function CirurLaq(){

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
      {/* esse title é universal, temos que criar uma div universal para o titulo tb =, ajustando margem e etc */}
      <div className='titulosamb'>
        <h1 className='title'>Cirurgia Laqueadura Tubária</h1>
      </div>
      </div>
    )

}

export function GinecoGeral(){

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
      {/* esse title é universal, temos que criar uma div universal para o titulo tb =, ajustando margem e etc */}
      <div className='titulosamb'>
        <h1 className='title'>Cirurgia Ginecologia Geral</h1>
      </div>
      </div>
    )

}
