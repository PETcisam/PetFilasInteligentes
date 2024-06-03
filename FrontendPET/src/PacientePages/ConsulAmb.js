import { FaUser, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ConsulAmb.css'
import img4 from './examcirur.jpeg';


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
                        <div className="consul-text">Consultas Ambulatoriais</div>
                    </Link>
                </div>
                <div className="consul">
                    <Link to="#/page2">
                        <img src={img4} alt="Exames e Cirurgias" className="consul-image" />
                        <div className="consul-text">Exames e Cirurgias</div>
                    </Link>
                </div>
                <div className="consul">
                    <Link to="#/page2">
                        <img src={img4} alt="Exames e Cirurgias" className="consul-image" />
                        <div className="consul-text">Exames e Cirurgias</div>
                    </Link>
                </div>
                <div className="consul">
                    <Link to="#/page2">
                        <img src={img4} alt="Exames e Cirurgias" className="consul-image" />
                        <div className="consul-text">Exames e Cirurgias</div>
                    </Link>
                </div>
                <div className="consul">
                    <Link to="#/page2">
                        <img src={img4} alt="Exames e Cirurgias" className="consul-image" />
                        <div className="consul-text">Exames e Cirurgias</div>
                    </Link>
                </div>
            </div>

            {/* segunda linha */}
            <div className="consuls2-container">
                <div className="consul">
                    <Link to="#/page1">
                        <img src={img4} alt="Consultas Ambulatoriais" className="consul-image" />
                        <div className="consul-text">Consultas Ambulatoriais</div>
                    </Link>
                </div>
                <div className="consul">
                    <Link to="#/page2">
                        <img src={img4} alt="Exames e Cirurgias" className="consul-image" />
                        <div className="consul-text">Exames e Cirurgias</div>
                    </Link>
                </div>
                <div className="consul">
                    <Link to="#/page2">
                        <img src={img4} alt="Exames e Cirurgias" className="consul-image" />
                        <div className="consul-text">Exames e Cirurgias</div>
                    </Link>
                </div>
                <div className="consul">
                    <Link to="#/page2">
                        <img src={img4} alt="Exames e Cirurgias" className="consul-image" />
                        <div className="consul-text">Exames e Cirurgias</div>
                    </Link>
                </div>
                <div className="consul">
                    <Link to="#/page2">
                        <img src={img4} alt="Exames e Cirurgias" className="consul-image" />
                        <div className="consul-text">Exames e Cirurgias</div>
                    </Link>
                </div>
            </div>

            {/* terceira coluna */}

            <div className="consuls3-container">
                <div className="consul">
                    <Link to="#/page1">
                        <img src={img4} alt="Consultas Ambulatoriais" className="consul-image" />
                        <div className="consul-text">Consultas Ambulatoriais</div>
                    </Link>
                </div>
                <div className="consul">
                    <Link to="#/page2">
                        <img src={img4} alt="Exames e Cirurgias" className="consul-image" />
                        <div className="consul-text">Exames e Cirurgias</div>
                    </Link>
                </div>
                <div className="consul">
                    <Link to="#/page2">
                        <img src={img4} alt="Exames e Cirurgias" className="consul-image" />
                        <div className="consul-text">Exames e Cirurgias</div>
                    </Link>
                </div>
                <div className="consul">
                    <Link to="#/page2">
                        <img src={img4} alt="Exames e Cirurgias" className="consul-image" />
                        <div className="consul-text">Exames e Cirurgias</div>
                    </Link>
                </div>
                <div className="consul">
                    <Link to="#/page2">
                        <img src={img4} alt="Exames e Cirurgias" className="consul-image" />
                        <div className="consul-text">Exames e Cirurgias</div>
                    </Link>
                </div>
            </div>
    

        </div>
    )
}

export default ConsulAmb