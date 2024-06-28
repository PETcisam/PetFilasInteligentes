import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaHeart, FaSyringe, FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import "./SolicitacoesMedico.css";

function SolicitacoesMedico() {
  const [solicitacoes, setSolicitacoes] = useState([]);
  const [filtro, setFiltro] = useState("Todos");

  useEffect(() => {
    // Definindo dados de exemplo
    const exemplos = [
      { hora: "08:00", prontuario: "12345", nome: "João Silva", cpf: "123.456.789-00", especialidade: "Cirurgia Geral", telefone: "(11) 98765-4321", email: "joao.silva@example.com", data: "2023-06-01", solicitacao: "Cirurgia Geral" },
      { hora: "08:30", prontuario: "67890", nome: "Maria Santos", cpf: "987.654.321-00", especialidade: "Ginecologia", telefone: "(11) 98765-4322", email: "maria.santos@example.com", data: "2023-06-02", solicitacao: "Histeroscopia Cirúrgica" },
      { hora: "09:00", prontuario: "11223", nome: "Carlos Lima", cpf: "456.789.123-00", especialidade: "Cirurgia Geral", telefone: "(11) 98765-4323", email: "carlos.lima@example.com", data: "2023-06-03", solicitacao: "Cirurgia Laqueadura Tubária" },
      // Adicione mais exemplos conforme necessário
    ];
      
    setSolicitacoes(exemplos);
  }, []);

  const handleFiltroChange = (event) => {
    setFiltro(event.target.value);
  };

  const solicitacoesFiltradas = filtro === "Todos" ? solicitacoes : solicitacoes.filter(solicitacao => solicitacao.solicitacao === filtro);

  return (
    <div className="medico-home">
      {/* sidebar */}
      <div className="medico-sidebar">
        <h2 className="medico-titlepage">Especialidade</h2>
        
        <select value={filtro} onChange={handleFiltroChange} className="medico-select-filtro">
          <option className="opcoesfiltro" value="Todos">Todos</option>
          <option className="opcoesfiltro" value="Cirurgia Geral">Cirurgia Geral</option>
          <option className="opcoesfiltro" value="Histeroscopia Cirúrgica">Histeroscopia Cirúrgica</option>
          <option className="opcoesfiltro" value="Cirurgia Laqueadura Tubária">Cirurgia Laqueadura Tubária</option>
          {/* Adicione mais opções conforme necessário */}
        </select>
       
        <div className="medico-menu-item medico-agendar-consulta">
          <Link to="/agendar-consulta" className="medico-menu-link">
            <FaCalendarAlt className="medico-menu-icon" />
            <span className="medico-listitem">Agendar Consulta</span>
          </Link>
        </div>
      </div>

      {/* grid */}
      <div className="medico-grid-section">
        {/* filtro */}
        <div className="medico-filtros">
          <h1 className="medico-title">Solicitações</h1>
          <input className="medico-filtro-campo" placeholder="Pesquisa..." />
          <button className="medico-filtro-botao"><i className="fas fa-filter"></i> Filtrar</button>
        </div>

        <div className="medico-grid-container">
          <table className="medico-grid-table">
            <thead>
              <tr>
                <th className="medico-col">Hora</th>
                <th className="medico-col">Prontuário</th>
                <th className="medico-col">Nome</th>
                <th className="medico-col">CPF</th>
                <th className="medico-col">Especialidade</th>
                <th className="medico-col">Telefone</th>
                <th className="medico-col">Email</th>
                <th className="medico-col">Data</th>
                <th className="medico-col">Solicitação</th>
                <th className="medico-col"></th>
              </tr>
            </thead>
            <tbody>
              {solicitacoesFiltradas.map((item, index) => (
                <tr key={index}>
                  <td className="medico-info">{item.hora}</td>
                  <td className="medico-info">{item.prontuario}</td>
                  <td className="medico-info">{item.nome}</td>
                  <td className="medico-info">{item.cpf}</td>
                  <td className="medico-info">{item.especialidade}</td>
                  <td className="medico-info">{item.telefone}</td>
                  <td className="medico-info">{item.email}</td>
                  <td className="medico-info">{item.data}</td>
                  <td className="medico-info">{item.solicitacao}</td>
                  <td>
                    <FaEdit className="medico-action-icon" />
                    <FaTrash className="medico-action-icon" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SolicitacoesMedico;