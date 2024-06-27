import React, { useState } from 'react';
import "./Marcacoes.css";
import { FaClock } from 'react-icons/fa'; // Import the clock icon from react-icons

function Marcacoes() {
  const pacientes = [
    { prontuario: "13579", nome: "Maria Silva", data: "2024-06-03", hora: "8:00", profissional: "Dr. A" },
    { prontuario: "24680", nome: "João Souza", data: "2024-06-03", hora: "8:30", profissional: "Dr. B" },
    { prontuario: "11223", nome: "Ana Pereira", data: "2024-06-03", hora: "9:00", profissional: "Dr. A" },
    { prontuario: "33445", nome: "Carlos Oliveira", data: "2024-06-03", hora: "9:30", profissional: "Dr. B" },
    { prontuario: "55667", nome: "Fernanda Lima", data: "2024-06-03", hora: "10:00", profissional: "Dr. A" },
    { prontuario: "77889", nome: "Ricardo Alves", data: "2024-06-03", hora: "10:30", profissional: "Dr. B" },
    { prontuario: "99001", nome: "Paula Gonçalves", data: "2024-06-03", hora: "11:00", profissional: "Dr. A" },
    { prontuario: "12345", nome: "Marcos Silva", data: "2024-06-03", hora: "11:30", profissional: "Dr. B" },
    { prontuario: "54321", nome: "Luciana Costa", data: "2024-06-03", hora: "12:00", profissional: "Dr. A" },
    { prontuario: "67890", nome: "Juliana Mendes", data: "2024-06-03", hora: "12:30", profissional: "Dr. B" },
    { prontuario: "98765", nome: "Rodrigo Silva", data: "2024-06-03", hora: "13:00", profissional: "Dr. A" },
    { prontuario: "11234", nome: "Bruna Rocha", data: "2024-06-03", hora: "13:30", profissional: "Dr. B" },
    { prontuario: "56789", nome: "Tiago Santos", data: "2024-06-03", hora: "14:00", profissional: "Dr. A" }
  ];

  const profissionaisDisponiveis = ["Dr. A", "Dr. B"];

  const [profissionalAtual, setProfissionalAtual] = useState(profissionaisDisponiveis[0]);
  const [dataAtual, setDataAtual] = useState("2024-06-03");

  const horariosDisponiveis = [
    "8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00"
  ];

  const listaAgenda = horariosDisponiveis.map((hora, index) => {
    const paciente = pacientes.find(d => d.hora === hora && d.profissional === profissionalAtual && d.data === dataAtual);
    return (
      <div key={index} className="linha-agendamento">
        <div className="hora-agendamento">{hora}</div>
        <div className="nome-agendamento">{paciente ? paciente.nome : ""}</div>
      </div>
    );
  });

  return (
    <div className="pagina-agendamentos">
      <div className="barra-superior-agendamentos">
        <p className='titulo-pagina-agendamentos'>Agenda Diária</p>
      </div>
      <div className="barra-lateral-agendamentos">
        <div className="filtro-agendamentos">
          <label htmlFor="profissional">Profissional:</label>
          <select 
            id="profissional" 
            value={profissionalAtual} 
            onChange={(e) => setProfissionalAtual(e.target.value)}
          >
            {profissionaisDisponiveis.map((prof, index) => (
              <option key={index} value={prof}>{prof}</option>
            ))}
          </select>
        </div>
        <div className="filtro-agendamentos">
          <label htmlFor="data">Data:</label>
          <input 
            type="date" 
            id="data" 
            value={dataAtual} 
            onChange={(e) => setDataAtual(e.target.value)}
          />
        </div>
      </div>
      <div className="container-agenda-agendamentos">
        {listaAgenda}
      </div>
    </div>
  );
}

export default Marcacoes;
