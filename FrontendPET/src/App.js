
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Cadastro from "./Cadastro";

import HomePaciente from "./PacientePages/HomePaciente";
import ConsulAmb from "./PacientePages/ConsulAmb";
import PerfilPaciente from "./PacientePages/PerfilPaciente";
import PerfilMedico from "./MedicoPages/PerfilMedico";
import ExameCirurgia from "./PacientePages/ExameCirurgia";

import { AlMaterno, CirurgiaGineco, Climaterio, DentistaCisam, DentistaFop, Dermatologia, EndocrinoRetorno, ExamePrevencao, GeneticistaPri, GeneticistaVolta, GinecoEndo, GinecoGeral1, GinecoGeralVolta, LaqueaduraTuba, Mastologia, MetodosContra, Neuropediatria1, NeuropediatriaVolta, OdontoP, OftalmoP, ReproHumana, ReversaoLaque } from './PacientePages/ConsultasAmbs';
import { HDiagnostica , HCirurgica , CirurLaq , GinecoGeral } from "./PacientePages/ExameCirurgiaS";

import LoginAdm from "./AdmPages/LoginAdm";
import HomeAdm from "./AdmPages/HomeAdm";
import Solicitacoes from "./AdmPages/Solicitacoes";
import AgendamentoAdm from "./AdmPages/AgendamentoAdm";
import Marcacoes from "./AdmPages/Marcacoes";
import HomeMedico from "./MedicoPages/HomeMedico";
import AgendaMensalMedico from "./MedicoPages/AgendaMensalMedico";
import AgendaMedico from "./MedicoPages/AgendaMedico";
import SolicitacoesMedico from "./MedicoPages/SolicitacoesMedico";

function App() {
  return (
    <Router>
      
      <Routes>
      <Route path="/" element={<Main/>} />
        {/* pacientes */}
        <Route path="/paciente/home" element={<HomePaciente/>} />
        <Route path="/paciente/exames" element={<ExameCirurgia/>} />
        <Route path="/paciente/consultas" element={<ConsulAmb/>} />
        <Route path="/paciente/perfil" element={<PerfilPaciente/>} />
        

                {/* consultas ambulatoriais */}

                <Route path="/paciente/consultas/almaterno" element={<AlMaterno />} />
                <Route path="/paciente/consultas/cirurgiagineco" element={<CirurgiaGineco />} />
                <Route path="/paciente/consultas/climaterio" element={<Climaterio />} />
                <Route path="/paciente/consultas/dentistacisam" element={<DentistaCisam />} />
                <Route path="/paciente/consultas/dentistafop" element={<DentistaFop />} />
                <Route path="/paciente/consultas/dermatologia" element={<Dermatologia />} />
                <Route path="/paciente/consultas/endocrinoretorno" element={<EndocrinoRetorno />} />
                <Route path="/paciente/consultas/exameprevencao" element={<ExamePrevencao />} />
                <Route path="/paciente/consultas/geneticistapri" element={<GeneticistaPri />} />
                <Route path="/paciente/consultas/geneticistavolta" element={<GeneticistaVolta />} />
                <Route path="/paciente/consultas/ginecoendo" element={<GinecoEndo />} />
                <Route path="/paciente/consultas/ginecogeral1" element={<GinecoGeral1 />} />
                <Route path="/paciente/consultas/ginecogeralvolta" element={<GinecoGeralVolta />} />
                <Route path="/paciente/consultas/laqueaduratuba" element={<LaqueaduraTuba />} />
                <Route path="/paciente/consultas/mastologia" element={<Mastologia />} />
                <Route path="/paciente/consultas/metodoscontra" element={<MetodosContra />} />
                <Route path="/paciente/consultas/neuropediatria1" element={<Neuropediatria1 />} />
                <Route path="/paciente/consultas/neuropediatriavolta" element={<NeuropediatriaVolta />} />
                <Route path="/paciente/consultas/odontop" element={<OdontoP />} />
                <Route path="/paciente/consultas/oftalmoP" element={<OftalmoP />} />
                <Route path="/paciente/consultas/reprohumana" element={<ReproHumana />} />
                <Route path="/paciente/consultas/reversaolaque" element={<ReversaoLaque />} />


                {/* Exames e Cirurgias */}
                <Route path="/paciente/exames/histerodiag" element={<HDiagnostica />} />
                <Route path="/paciente/exames/histerocir" element={<HCirurgica />} />
                <Route path="/paciente/exames/cirgurglaque" element={<CirurLaq />} />
                <Route path="/paciente/exames/cirurgiaginec" element={<GinecoGeral />} />


        {/* medicos */}
        <Route path="/medico/home" element={<HomeMedico/>} />
        <Route path="/medico/Agendamensalmedico" element={<AgendaMensalMedico/>} />
        <Route path="/medico/agendamedico" element={<AgendaMedico/>} />
        <Route path="/medico/perfil" element={<PerfilMedico/>} />
        <Route path="/medico/solicitacoesmedico" element={<SolicitacoesMedico/>} />

        {/* adm */}
        <Route path="/adm/login" element={<LoginAdm/>} />

        <Route path="/adm/home" element={<HomeAdm/>} />
        <Route path="/adm/marcacoes" element={<Marcacoes/>} />
        <Route path="/adm/solicitacoes" element={<Solicitacoes/>} />
        <Route path="/adm/agendamento" element={<AgendamentoAdm/>} />

        {/* gerais */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App