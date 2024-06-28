import './Marcacoes.css';
import React, { useState } from 'react';
import { FaClock } from 'react-icons/fa'; // Import the clock icon from react-icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

function Marcacoes() {
    const dadosPacientes = [
        { prontuario: "13579", nome: "Maria Silva", data: "2024-06-03", hora: "8:00", profissional: "Dr. A", especialidade: "Cardiologia" },
        { prontuario: "24680", nome: "João Souza", data: "2024-06-03", hora: "8:30", profissional: "Dr. B", especialidade: "Dermatologia" },
        { prontuario: "11223", nome: "Ana Pereira", data: "2024-06-03", hora: "9:00", profissional: "Dr. A", especialidade: "Cardiologia" },
        { prontuario: "33445", nome: "Carlos Oliveira", data: "2024-06-03", hora: "9:30", profissional: "Dr. B", especialidade: "Dermatologia" },
        { prontuario: "55667", nome: "Fernanda Lima", data: "2024-06-03", hora: "10:00", profissional: "Dr. A", especialidade: "Cardiologia" },
        { prontuario: "77889", nome: "Ricardo Alves", data: "2024-06-03", hora: "10:30", profissional: "Dr. B", especialidade: "Dermatologia" },
        { prontuario: "99001", nome: "Paula Gonçalves", data: "2024-06-03", hora: "11:00", profissional: "Dr. A", especialidade: "Cardiologia" },
        { prontuario: "12345", nome: "Marcos Silva", data: "2024-06-03", hora: "11:30", profissional: "Dr. B", especialidade: "Dermatologia" },
        { prontuario: "54321", nome: "Luciana Costa", data: "2024-06-03", hora: "12:00", profissional: "Dr. A", especialidade: "Cardiologia" },
        { prontuario: "67890", nome: "Juliana Mendes", data: "2024-06-03", hora: "12:30", profissional: "Dr. B", especialidade: "Dermatologia" },
        { prontuario: "98765", nome: "Rodrigo Silva", data: "2024-06-03", hora: "13:00", profissional: "Dr. A", especialidade: "Cardiologia" },
        { prontuario: "11234", nome: "Bruna Rocha", data: "2024-06-03", hora: "13:30", profissional: "Dr. B", especialidade: "Dermatologia" },
        { prontuario: "56789", nome: "Tiago Santos", data: "2024-06-03", hora: "14:00", profissional: "Dr. A", especialidade: "Cardiologia" }
    ];

    const listaProfissionais = ["Todos", "Dr. A", "Dr. B"];
    const listaEspecialidades = ["Todos", "Cardiologia", "Dermatologia"];
    const [profissionalSelecionado, setProfissionalSelecionado] = useState(listaProfissionais[0]);
    const [especialidadeSelecionada, setEspecialidadeSelecionada] = useState(listaEspecialidades[0]);
    const [dataSelecionada, setDataSelecionada] = useState("2024-06-03");
    const [popUpVisible, setPopUpVisible] = useState(false);
    const [popUpContent, setPopUpContent] = useState(null);

    const navigate = useNavigate(); // Initialize useNavigate hook

    const horariosDisponiveis = [
        "8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30",
        "12:00", "12:30", "13:00", "13:30", "14:00"
    ];

    const handleIconClick = (paciente) => {
        setPopUpContent(paciente);
        setPopUpVisible(true);
    };

    const closePopUp = () => {
        setPopUpVisible(false);
        setPopUpContent(null);
    };

    const handleClockIconClick = () => {
        navigate("/adm/agendamento"); // Redirect to /adm/agendamento
    };

    const agendaDiaria = horariosDisponiveis.map((hora, index) => {
        const paciente = dadosPacientes.find(d => 
            d.hora === hora && 
            d.data === dataSelecionada &&
            (profissionalSelecionado === "Todos" || d.profissional === profissionalSelecionado) &&
            (especialidadeSelecionada === "Todos" || d.especialidade === especialidadeSelecionada)
        );
        return (
            <div key={index} className="linha-marcacao">
                <FaClock className="icone-relogio" onClick={handleClockIconClick} />
                <div className="hora-marcacao">{hora}</div>
                <div 
                    className="nome-marcacao"
                    onClick={() => handleIconClick(paciente)}
                >
                    {paciente ? paciente.nome : ""}
                </div>
                <div className="especialidade-marcacao">{paciente ? paciente.especialidade : ""}</div>
            </div>
        );
    });

    return (
        <div className="pagina-marcacoes">
            <div className="barra-fixa-marcacoes">
                <p className='titulo-pagina-marcacoes'>Agenda Diária</p>
            </div>
            <div className="barra-lateral-marcacoes">
                <div className="filtro-marcacoes">
                    <label htmlFor="profissional">Profissional:</label>
                    <select 
                        id="profissional" 
                        value={profissionalSelecionado} 
                        onChange={(e) => setProfissionalSelecionado(e.target.value)}
                    >
                        {listaProfissionais.map((prof, index) => (
                            <option key={index} value={prof}>{prof}</option>
                        ))}
                    </select>

                    <label htmlFor="especialidade">Especialidade:</label>
                    <select 
                        id="especialidade" 
                        value={especialidadeSelecionada} 
                        onChange={(e) => setEspecialidadeSelecionada(e.target.value)}
                    >
                        {listaEspecialidades.map((esp, index) => (
                            <option key={index} value={esp}>{esp}</option>
                        ))}
                    </select>
                </div>
                <div className="filtro-marcacoes">
                    <label htmlFor="data">Data:</label>
                    <input 
                        type="date" 
                        id="data" 
                        value={dataSelecionada} 
                        onChange={(e) => setDataSelecionada(e.target.value)}
                    />
                </div>
            </div>
            <div className="container-agenda">
                {agendaDiaria}
            </div>
            {popUpVisible && (
                <div className="popup-marcacao">
                    <div className="popup-content">
                        <span className="close-button" onClick={closePopUp}>&times;</span>
                        {popUpContent ? (
                <div className='infospopup'>
                  <h1 className='titlepopupdet'>Detalhe sobre o Paciente:</h1>
                  <div className='infospopup'>

                    <p className='infopopup'>{popUpContent.nome}</p>
                    <p className='infopopup'>{popUpContent.especialidade}</p>
                    <p className='infopopup'>{popUpContent.data}</p>
                    <p className='infopopup'>{popUpContent.hora}</p>

                  </div>
                </div>
                        ) : (
                            <p>Horário disponível</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Marcacoes;
