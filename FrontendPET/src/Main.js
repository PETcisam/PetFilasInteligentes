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
          <li><a href="/login">Entrar</a></li>
          <li><a href="/cadastro">Registre-se</a></li>
        </ul>
      </nav>
    </header>
    <div className="titlebox">
        <h1 className="title">Agendamento de Consulta</h1>
        <li className="registre"> <a href="/cadastro">Registre-se</a></li>
    </div>

    <div className="rodape">
                <div className="rodape-content">
                    <div className="contact-info">
                        <h2>FALE CONOSCO</h2>
                        <p>Telefone: (00) 0000-000</p>
                        <p>Email: contato@hospital.com</p>
                        <p>Endereço: R. Visconde de Mamanguape, SN, Encruzilhada, Recife – PE, 52030-010</p>
                    </div>
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.241720089055!2d-34.8912446!3d-8.0372026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18f58c75ebe1%3A0x18062e2f3e1f50e7!2sCISAM%20-%20UPE%20-%20Unidade%20Hospitalar!5e0!3m2!1sen!2sbr!4v1620249200103!5m2!1sen!2sbr"
                            width="400"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps"
                        ></iframe>
                    </div>
                </div>
            </div>

    </div>

    );
}

export default Main;