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
import img16 from './ginecologistageralretorno.jpg';
import img17 from './laqueaduratubaria.jpg';
import img18 from './mastologia.jpg';
import img19 from './neuropediatria.jpg';
import img20 from './neuropediatriaretorno.jpg';
import img21 from './odontologiapediatrica.jpg';
import img22 from './oftalmologistapediatrico.jpg';
import img23 from './metodoscontraceptivos.jpg';
import img24 from './reproducaohumana.jpg';
import img25 from './reversaodalaqueadura.jpg';

function ConsulAmb() {

    return (
        <div>
            {/* topbar    */}
            <header className="header d-flex justify-content-end">
                <nav className="menu">
                    <div className="logo">
                        {/* <img src={} alt="Logo" /> */}
                    </div>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="#consul2">Contato</a></li>
                        <li><a href="#consul3">Mensagem</a></li>
                        <li><a href="/">Sair</a></li>
                    </ul>
                </nav>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
                <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
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

            {/* primeira linha */}

            <div id="gridConsul" class='d-flex contaneir'>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <Link to="#/page2">
                                <img src={img4} alt="Exames e Cirurgias" className="consul-image" />
                                <div className="consul-text">Aleitamento Materno</div>
                            </Link>
                        </div>
                        <div class="col">
                            <Link to="#/page2">
                                <img src={img5} alt="Exames e Cirurgias" className="consul-image" />
                                <div className="consul-text">Climatério</div>
                            </Link>
                        </div>
                        <div class="col">
                            <Link to="#/page2">
                                <img src={img6} alt="Exames e Cirurgias" className="consul-image" />
                                <div className="consul-text">Cirurgia Geral em Ginecologia - Preparatório</div>
                            </Link>
                        </div>                        <div class="col">
                            <Link to="#/page2">
                                <img src={img7} alt="Exames e Cirurgias" className="consul-image" />
                                <div className="consul-text">Dentista FOP</div>
                            </Link>
                        </div>                        <div class="col">
                            <Link to="#/page2">
                                <img src={img8} alt="Exames e Cirurgias" className="consul-image" />
                                <div className="consul-text">Dentista CISAM</div>
                            </Link>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <Link to="#/page2">
                                <img src={img9} alt="Exames e Cirurgias" className="consul-image" />
                                <div className="consul-text">Dermatologia</div>
                            </Link>
                        </div>
                        <div class="col">
                            <Link to="#/page2">
                                <img src={img10} alt="Exames e Cirurgias" className="consul-image" />
                                <div className="consul-text">Endocrinologista Retorno</div>
                            </Link>
                        </div>                        <div class="col">
                            <Link to="#/page2">
                                <img src={img11} alt="Exames e Cirurgias" className="consul-image" />
                                <div className="consul-text">Exame de Prevenção</div>
                            </Link>
                        </div>
                        <div class="col">
                            <Link to="#/page2">
                                <img src={img12} alt="Exames e Cirurgias" className="consul-image" />
                                <div className="consul-text">Geneticista Pediatra 1* Consulta</div>
                            </Link>
                        </div>
                        <div class="col">
                            <Link to="#/page2">
                                <img src={img13} alt="Exames e Cirurgias" className="consul-image" />
                                <div className="consul-text">Geneticista Pediatra Retorno</div>
                            </Link>
                        </div>
                    </div>                    <div class="row">
                        <div class="col">
                            <Link to="#/page2">
                                <img src={img14} alt="Exames e Cirurgias" className="consul-image" />
                                <div className="consul-text">Ginecologista Endócrina</div>
                            </Link>
                        </div>
                        <div class="col">
                            <Link to="#/page2">
                                <img src={img15} alt="Exames e Cirurgias" className="consul-image" />
                                <div className="consul-text">Ginecologista Geral 1* Consulta</div>
                            </Link>
                        </div>                        <div class="col">
                            <Link to="#/page2">
                                <img src={img16} alt="Exames e Cirurgias" className="consul-image" />
                                <div className="consul-text">Ginecologista Geral Retorno</div>
                            </Link>
                        </div>
                        <div class="col">
                            <Link to="#/page2">
                                <img src={img17} alt="Exames e Cirurgias" className="consul-image" />
                                <div className="consul-text">Laqueadura Tubária</div>
                            </Link>
                        </div>
                        <div class="col">
                            <Link to="#/page2">
                                <img src={img18} alt="Exames e Cirurgias" className="consul-image" />
                                <div className="consul-text">Mastologia</div>
                            </Link>
                        </div>
                    </div>                    <div class="row">
                        <div class="col">
                            <Link to="#/page2">
                                <img src={img19} alt="Exames e Cirurgias" className="consul-image" />
                                <div className="consul-text">Neuropediatria 1* Consulta</div>
                            </Link>
                        </div>
                        <div class="col">
                            <Link to="#/page2">
                                <img src={img20} alt="Exames e Cirurgias" className="consul-image" />
                                <div className="consul-text">Neuropediatria Retorno</div>
                            </Link>
                        </div>
                        <div class="col">
                            <Link to="#/page2">
                                <img src={img21} alt="Exames e Cirurgias" className="consul-image" />
                                <div className="consul-text">Odonotologia Pediátrica</div>
                            </Link>
                        </div>
                        <div class="col">
                            <Link to="#/page2">
                                <img src={img22} alt="Exames e Cirurgias" className="consul-image" />
                                <div className="consul-text">Oftalmologista Pediátrica</div>
                            </Link>
                        </div>
                        <div class="col">
                            <Link to="#/page2">
                                <img src={img23} alt="Exames e Cirurgias" className="consul-image" />
                                <div className="consul-text">Métodos Contraceptivos</div>
                            </Link>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <Link to="#/page2">
                                <img src={img24} alt="Exames e Cirurgias" className="consul-image" />
                                <div className="consul-text">Reprodução Humana</div>
                            </Link>
                        </div>
                        <div class="col">
                            <Link to="#/page2">
                                <img src={img25} alt="Exames e Cirurgias" className="consul-image" />
                                <div className="consul-text">Reversão da Lqueadura</div>
                            </Link>
                        </div>
                        <div class="col">
                            {/* <Link to="#/page2">
                                <img src={img4} alt="Exames e Cirurgias" className="consul-image" />
                                <div className="consul-text">Aleitamento Materno</div>
                            </Link> */}
                        </div>
                        <div class="col">
                            {/* <Link to="#/page2">
                                <img src={img4} alt="Exames e Cirurgias" className="consul-image" />
                                <div className="consul-text">Aleitamento Materno</div>
                            </Link> */}
                        </div>
                        <div class="col">
                            {/* <Link to="#/page2">
                                <img src={img4} alt="Exames e Cirurgias" className="consul-image" />
                                <div className="consul-text">Aleitamento Materno</div>
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ConsulAmb