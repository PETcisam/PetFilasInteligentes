import React, { useState } from 'react';
import "./Marcacoes.css";
import { FaClock } from 'react-icons/fa'; // Import the clock icon from react-icons

function Marcacoes() {
  const dados = [
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

  const profissionais = ["Dr. A", "Dr. B"];

  const [profissionalSelecionado, setProfissionalSelecionado] = useState(profissionais[0]);
  const [dataSelecionada, setDataSelecionada] = useState("2024-06-03");

  const horarios = [
    "8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00"
  ];

  const agenda = horarios.map((hora, index) => {
    const paciente = dados.find(d => d.hora === hora && d.profissional === profissionalSelecionado && d.data === dataSelecionada);
    return (
      <div key={index} className="linha-agenda">
        <div className="hora-agenda">{hora}</div>
        <div className="nome-agenda">{paciente ? paciente.nome : ""}</div>
      </div>
    );
  });

  return (
    <div className="pagina-marcacoes">
      <div className="barra-fixa-marcacoes">
        <p className='titlepagemarcacoes'>Agenda Diária</p>
      </div>
      <div className="barra-lateral-marcacoes">
        <div className="filtro">
          <label htmlFor="profissional">Profissional:</label>
          <select 
            id="profissional" 
            value={profissionalSelecionado} 
            onChange={(e) => setProfissionalSelecionado(e.target.value)}
          >
            {profissionais.map((prof, index) => (
              <option key={index} value={prof}>{prof}</option>
            ))}
          </select>
        </div>
        <div className="filtro">
          <label htmlFor="data">Data:</label>
          <input 
            type="date" 
            id="data" 
            value={dataSelecionada} 
            onChange={(e) => setDataSelecionada(e.target.value)}
          />
        </div>
      </div>
      <div className="agenda-container">
        {agenda}
      </div>
    </div>
  );
}

export default Marcacoes;
