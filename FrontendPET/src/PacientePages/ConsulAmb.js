import { FaUser, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ConsulAmb.css'
import img4 from './examcirur.jpeg';
import img5 from './climaterio.jpg';
import img6 from './cirurgiageralginecologia.png';
import img7 from './dentistafop.jpg';
import img8 from './dentistacisam.jpg';
import img9 from './dermatologia.jpg';
import img10 from './endocrinologiaretorno.jpg';
import img11 from './examedeprevencao.jpg';
import img12 from './geneticistapediatra.jpg';
import img13 from './geneticistapediatraretorno.jpg';
import img14 from './ginecologiaendocrina.jpg';
import img15 from './ginecologiageral.jpg';
import img16 from './laqueaduratubaria.jpg';
import img17 from './mastologia.jpg';
import img18 from './neuropediatria.jpg';


function ConsulAmb(){

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
          <li><a href="#consul2">Contato</a></li>
          <li><a href="#consul3">Mensagem</a></li>
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
        {/* de 5 em 5 */}
            <div className="titulohomepdiv">
                <h1 className="titulohomep">Consultas Ambulatoriais</h1>
            </div>
            <div className="consuls-container">
                <div className="consul">
                    <Link to="#/page1">
                        <img src={img4} alt="Consultas Ambulatoriais" className="consul-image" />
                        <div className="consul-text">Aleitamento Materno</div>
                    </Link>
                </div>
                <div className="consul">
                    <Link to="#/page2">
                        <img src={img5} alt="Exames e Cirurgias" className="consul-image" />
                        <div className="consul-text">Climatério</div>
                    </Link>
                </div>
                <div className="consul">
                    <Link to="#/page2">
                        <img src={img6} alt="Exames e Cirurgias" className="consul-image" />
                        <div className="consul-text">Cirurgia Geral em Ginecologia - Preparatório</div>
                    </Link>
                </div>
                <div className="consul">
                    <Link to="#/page2">
                        <img src={img7} alt="Exames e Cirurgias" className="consul-image" />
                        <div className="consul-text">Dentista FOP</div>
                    </Link>
                </div>
                <div className="consul">
                    <Link to="#/page2">
                        <img src={img8} alt="Exames e Cirurgias" className="consul-image" />
                        <div className="consul-text">Dentista CISAM</div>
                    </Link>
                </div>
            </div>

            {/* segunda linha */}
            <div className="consuls2-container">
                <div className="consul">
                    <Link to="#/page1">
                        <img src={img9} alt="Consultas Ambulatoriais" className="consul-image" />
                        <div className="consul-text">Dermatologia</div>
                    </Link>
                </div>
                <div className="consul">
                    <Link to="#/page2">
                        <img src={img10} alt="Exames e Cirurgias" className="consul-image" />
                        <div className="consul-text">Endocrinologia  Retorno</div>
                    </Link>
                </div>
                <div className="consul">
                    <Link to="#/page2">
                        <img src={img11} alt="Exames e Cirurgias" className="consul-image" />
                        <div className="consul-text">Exame de Prevenção</div>
                    </Link>
                </div>
                <div className="consul">
                    <Link to="#/page2">
                        <img src={img12} alt="Exames e Cirurgias" className="consul-image" />
                        <div className="consul-text">Geneticista Pediatra 1* Consulta</div>
                    </Link>
                </div>
                <div className="consul">
                    <Link to="#/page2">
                        <img src={img13} alt="Exames e Cirurgias" className="consul-image" />
                        <div className="consul-text">Geneticista Pediatra Retorno</div>
                    </Link>
                </div>
            </div>

            {/* terceira coluna */}

            <div className="consuls3-container">
                <div className="consul">
                    <Link to="#/page1">
                        <img src={img14} alt="Consultas Ambulatoriais" className="consul-image" />
                        <div className="consul-text">Ginecologista Endócrina</div>
                    </Link>
                </div>
                <div className="consul">
                    <Link to="#/page2">
                        <img src={img15} alt="Exames e Cirurgias" className="consul-image" />
                        <div className="consul-text">Ginecologia Geral 1* Consulta</div>
                    </Link>
                </div>
                <div className="consul">
                    <Link to="#/page2">
                        <img src={img16} alt="Exames e Cirurgias" className="consul-image" />
                        <div className="consul-text">Laqueadura Tubária</div>
                    </Link>
                </div>
                <div className="consul">
                    <Link to="#/page2">
                        <img src={img17} alt="Exames e Cirurgias" className="consul-image" />
                        <div className="consul-text">Mastologia</div>
                    </Link>
                </div>
                <div className="consul">
                    <Link to="#/page2">
                        <img src={img18} alt="Exames e Cirurgias" className="consul-image" />
                        <div className="consul-text">Neuropediatria 1* Consulta</div>
                    </Link>
                </div>
            </div>
    

        </div>
    )
}

export default ConsulAmb