import './HomeMedico.css'
import { FaUser, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img3 from '../AdmPages/calendario.png';
import img4 from '../AdmPages/marcacoes.png'; 

function HomeMedico(){

    return(
        <div>
            {/* topbar */}
            <header className="header">
                <div className="logo">
                    {/* <img src={} alt="Logo" /> */}
                </div>
                <nav className="menu">
                    <ul>
                        <li><a href="/">Inicio</a></li>
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
                <h1 className="titulohomep">Inicio</h1>
            </div>

            <div className="options-container">

                <div className="option2">
                    <Link to="/medico/solicitacoesmedico">
                        <img src={img3} alt="Solicitações" className="option-image" />
                        <div className="option-text">Solicitações</div>
                    </Link>
                </div>

                <div className="option3">
                    <Link to="/medico/agendamedico">
                        <img src={img4} alt="Marcações" className="option-image" />
                        <div className="option-text">Agenda</div>
                    </Link>
                </div>

            </div>

        </div>


    )
}
export default HomeMedico