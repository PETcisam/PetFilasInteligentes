import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaHeart, FaSyringe, FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import "./SolicitacoesMedico.css";

function SolicitacoesMedico() {
  const [solicitacoes, setSolicitacoes] = useState([]);

  useEffect(() => {
    // Definindo dados de exemplo
    const exemplos = [
        { prontuario: "12345", nome: "João Silva", data: "2023-06-01", solicitacao: "Cirurgia Geral" },
        { prontuario: "67890", nome: "Maria Santos", data: "2023-06-02", solicitacao: "Histeroscopia Cirúrgica" },
        { prontuario: "11223", nome: "Carlos Lima", data: "2023-06-03", solicitacao: "Cirurgia Laqueadura Tubária" },
        { prontuario: "54321", nome: "Ana Souza", data: "2023-06-04", solicitacao: "Cirurgia Geral" },
        { prontuario: "09876", nome: "Pedro Oliveira", data: "2023-06-05", solicitacao: "Histeroscopia Cirúrgica" },
        { prontuario: "45678", nome: "Mariana Costa", data: "2023-06-06", solicitacao: "Cirurgia Laqueadura Tubária" },
        { prontuario: "78901", nome: "Rafael Santos", data: "2023-06-07", solicitacao: "Cirurgia Geral" },
        { prontuario: "23456", nome: "Carla Rodrigues", data: "2023-06-08", solicitacao: "Histeroscopia Cirúrgica" },
        { prontuario: "87654", nome: "Paulo Mendes", data: "2023-06-09", solicitacao: "Cirurgia Laqueadura Tubária" },
        { prontuario: "32109", nome: "Camila Almeida", data: "2023-06-10", solicitacao: "Cirurgia Geral" },
        { prontuario: "65432", nome: "Fernando Pereira", data: "2023-06-11", solicitacao: "Histeroscopia Cirúrgica" },
        { prontuario: "21098", nome: "Larissa Silva", data: "2023-06-12", solicitacao: "Cirurgia Laqueadura Tubária" },
        { prontuario: "98765", nome: "Lucas Oliveira", data: "2023-06-13", solicitacao: "Cirurgia Geral" },
        { prontuario: "56789", nome: "Juliana Costa", data: "2023-06-14", solicitacao: "Histeroscopia Cirúrgica" },
        { prontuario: "54321", nome: "Mateus Santos", data: "2023-06-15", solicitacao: "Cirurgia Laqueadura Tubária" },
        { prontuario: "87654", nome: "Isabela Lima", data: "2023-06-16", solicitacao: "Cirurgia Geral" },
        { prontuario: "23456", nome: "Gabriel Almeida", data: "2023-06-17", solicitacao: "Histeroscopia Cirúrgica" },
        { prontuario: "78901", nome: "Eduarda Rodrigues", data: "2023-06-18", solicitacao: "Cirurgia Laqueadura Tubária" },
        { prontuario: "32109", nome: "Marcos Mendes", data: "2023-06-19", solicitacao: "Cirurgia Geral" },
        { prontuario: "65432", nome: "Renata Alves", data: "2023-06-20", solicitacao: "Histeroscopia Cirúrgica" }
      ];
      
    setSolicitacoes(exemplos);
  }, []);

  return (
    <div className="medico-home">
      {/* sidebar */}
      <div className="medico-sidebar">
        <h2 className="medico-titlepage">Solicitações</h2>
        <h3 className="medico-subtitle">Cirurgias</h3>
        <ul className="medico-menu-list">
          <li className="medico-menu-item">
            <Link to="/cirurgia-geral" className="medico-menu-link">
              <FaSyringe className="medico-menu-icon" />
              <span className="medico-listitem">Cirurgia Geral</span>
            </Link>
          </li>
          <li className="medico-menu-item">
            <Link to="/histeroscopia-cirurgica" className="medico-menu-link">
              <FaHeart className="medico-menu-icon" />
              <span className="medico-listitem">Histeroscopia Cirúrgica</span>
            </Link>
          </li>
          <li className="medico-menu-item">
            <Link to="/cirurgia-laqueadura-tubaria" className="medico-menu-link">
              <FaUser className="medico-menu-icon" />
              <span className="medico-listitem">Cirurgia Laqueadura Tubária</span>
            </Link>
          </li>
        </ul>
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
                <th className="medico-col">Prontuário</th>
                <th className="medico-col">Nome</th>
                <th className="medico-col">Data</th>
                <th className="medico-col">Solicitação</th>
                <th className="medico-col"></th>
              </tr>
            </thead>
            <tbody>
              {solicitacoes.map((item, index) => (
                <tr key={index}>
                  <td className="medico-info">{item.prontuario}</td>
                  <td className="medico-info">{item.nome}</td>
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
