
import { FaUser, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';


import  imgperfil from './imgspacient/perfilexemplo.jpg'


//todos os componentes das paginas estarao nesse arquivo:

export function AlMaterno(){

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
        <h1 className='title'>Aleitamento Materno</h1>
      </div>
      </div>
    )

}

export  function CirurgiaGineco(){

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
      <div className='titulosamb'>
        <h1 className='title'>Cirurgia Geral em Ginecologia</h1>
      </div>
      </div>
    )

}

export function Climaterio(){

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
    <div className='titulosamb'>
      <h1 className='title'>Climatério</h1>
    </div>
    </div>
  )

}

export function DentistaCisam(){

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
    <div className='titulosamb'>
      <h1 className='title'>Dentista CISAM</h1>
    </div>
    </div>
  )

}


 export function DentistaFop(){

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
    <div className='titulosamb'>
      <h1 className='title'>Dentista FOP</h1>
    </div>
    </div>
  )

}

export function Dermatologia(){


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
    <div className='titulosamb'>
      <h1 className='title'>Dermatologia</h1>
    </div>
    </div>
  )

}

export function EndocrinoRetorno(){

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
    <div className='titulosamb'>
      <h1 className='title'>Endrocrinologista - Retorno</h1>
    </div>
    </div>
  )

}

export function ExamePrevencao(){

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
    <div className='titulosamb'>
      <h1 className='title'>Exame de Prevenção</h1>
    </div>
    </div>
  )

}

export function GeneticistaPri(){

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
    <div className='titulosamb'>
      <h1 className='title'>Geneticista Pediatrica - 1 Consulta</h1>
    </div>
    </div>
  )

}

export function GeneticistaVolta(){

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
    <div className='titulosamb'>
      <h1 className='title'>Geneticista Pediatrica - Retorno</h1>
    </div>
    </div>
  )

}

export function GinecoEndo(){

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
    <div className='titulosamb'>
      <h1 className='title'>Ginecologista Endócrina</h1>
    </div>
    </div>
  )

}

export function GinecoGeral1(){

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
    <div className='titulosamb'>
      <h1 className='title'>Ginecologista Geral - 1 Consulta</h1>
    </div>
    </div>
  )

}

export function GinecoGeralVolta(){

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
    <div className='titulosamb'>
      <h1 className='title'>Ginecologista Geral - Retorno</h1>
    </div>
    </div>
  )

}

export function LaqueaduraTuba(){


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
    <div className='titulosamb'>
      <h1 className='title'>Laqueadura Tubária</h1>
    </div>
    </div>
  )

}

export function Mastologia(){

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
    <div className='titulosamb'>
      <h1 className='title'>Mastologia</h1>
    </div>
    </div>
  )

}

export function MetodosContra(){

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
    <div className='titulosamb'>
      <h1 className='title'>Métodos Contraceptivos</h1>
    </div>
    </div>
  )

}

export function Neuropediatria1(){

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
    <div className='titulosamb'>
      <h1 className='title'>Neuropediatria - 1 Consulta</h1>
    </div>
    </div>
  )

}

export function NeuropediatriaVolta(){

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
    <div className='titulosamb'>
      <h1 className='title'>Neuropediatria - Retorno</h1>
    </div>
    </div>
  )

}

export function OdontoP(){

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
    <div className='titulosamb'>
      <h1 className='title'>Odontologia Pediátrica</h1>
    </div>
    </div>
  )

}

export function OftalmoP(){

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
    <div className='titulosamb'>
      <h1 className='title'>Oftalmologia Pediátrica</h1>
    </div>
    </div>
  )

}

export function ReproHumana(){

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
    <div className='titulosamb'>
      <h1 className='title'>Reprodução Humana</h1>
    </div>
    </div>
  )

}

export function ReversaoLaque(){

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
    <div className='titulosamb'>
      <h1 className='title'>Reversão da Laqueadura</h1>
    </div>
    </div>
  )

}