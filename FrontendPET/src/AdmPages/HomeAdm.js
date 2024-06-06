import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaHeart, FaSyringe, FaEdit, FaTrash } from "react-icons/fa";
import "./HomeAdm.css";

function HomeAdm() {
  const data = [
    {
      prontuario: "13579",
      nome: "Maria Silva",
      cpf: "111.222.333-44",
      status: "yellow",
      prioridade: "medium",
      data: "2024-06-03",
      solicitacao: "Vacinação",
      telefone: "(77) 8888-9999",
      email: "maria.silva@example.com"
    },
    {
      prontuario: "24680",
      nome: "Carlos Oliveira",
      cpf: "555.666.777-88",
      status: "green",
      prioridade: "high",
      data: "2024-06-04",
      solicitacao: "Consulta",
      telefone: "(11) 2222-3333",
      email: "carlos.oliveira@example.com"
    },
    {
      prontuario: "98765",
      nome: "Ana Souza",
      cpf: "999.888.777-66",
      status: "red",
      prioridade: "low",
      data: "2024-06-05",
      solicitacao: "Exame",
      telefone: "(44) 5555-6666",
      email: "ana.souza@example.com"
    },
    {
      prontuario: "54321",
      nome: "Pedro Santos",
      cpf: "333.222.111-00",
      status: "green",
      prioridade: "high",
      data: "2024-06-06",
      solicitacao: "Consulta",
      telefone: "(55) 4444-3333",
      email: "pedro.santos@example.com"
    },
    {
      prontuario: "112233",
      nome: "Mariana Lima",
      cpf: "777.888.999-00",
      status: "yellow",
      prioridade: "medium",
      data: "2024-06-07",
      solicitacao: "Vacinação",
      telefone: "(66) 7777-8888",
      email: "mariana.lima@example.com"
    },
    {
      prontuario: "445566",
      nome: "Fernando Pereira",
      cpf: "222.333.444-55",
      status: "green",
      prioridade: "high",
      data: "2024-06-08",
      solicitacao: "Consulta",
      telefone: "(33) 6666-7777",
      email: "fernando.pereira@example.com"
    },
    {
      prontuario: "778899",
      nome: "Cristina Costa",
      cpf: "666.555.444-33",
      status: "red",
      prioridade: "low",
      data: "2024-06-09",
      solicitacao: "Exame",
      telefone: "(22) 7777-8888",
      email: "cristina.costa@example.com"
    },
    {
      prontuario: "990011",
      nome: "Lucas Carvalho",
      cpf: "111.333.555-77",
      status: "green",
      prioridade: "high",
      data: "2024-06-10",
      solicitacao: "Consulta",
      telefone: "(99) 0000-1111",
      email: "lucas.carvalho@example.com"
    },
    {
      prontuario: "223344",
      nome: "Patricia Santos",
      cpf: "888.999.000-11",
      status: "yellow",
      prioridade: "medium",
      data: "2024-06-11",
      solicitacao: "Vacinação",
      telefone: "(88) 2222-3333",
      email: "patricia.santos@example.com"
    },
    {
      prontuario: "556677",
      nome: "Roberto Oliveira",
      cpf: "444.333.222-11",
      status: "green",
      prioridade: "high",
      data: "2024-06-12",
      solicitacao: "Consulta",
      telefone: "(77) 5555-6666",
      email: "roberto.oliveira@example.com"
    },
    {
      prontuario: "778899",
      nome: "Aline Pereira",
      cpf: "333.444.555-66",
      status: "red",
      prioridade: "low",
      data: "2024-06-13",
      solicitacao: "Exame",
      telefone: "(66) 7777-8888",
      email: "aline.pereira@example.com"
    },
    {
      prontuario: "112233",
      nome: "Rafaela Costa",
      cpf: "222.555.888-99",
      status: "green",
      prioridade: "high",
      data: "2024-06-14",
      solicitacao: "Consulta",
      telefone: "(55) 2222-3333",
      email: "rafaela.costa@example.com"
    },
    {
      prontuario: "445566",
      nome: "Gustavo Silva",
      cpf: "999.888.777-66",
      status: "red",
      prioridade: "low",
      data: "2024-06-15",
      solicitacao: "Exame",
      telefone: "(44) 9999-8888",
      email: "gustavo.silva@example.com"
    }
  ];



  return (
    <div className="home-adm">
      {/* sidebar */}
      <div className="sidebar2">
        <h2 className="titlegridpage">Solicitações</h2>
        <h3 className="subtitle">Cirurgias</h3>
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="/cirurgia-geral" className="menu-link">
              <FaSyringe className="menu-icon" />
              <span className="listitem">Cirurgia Geral</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/histeroscopia-cirurgica" className="menu-link">
              <FaHeart className="menu-icon" />
              <span className="listitem">Histeroscopia Cirúrgica</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/cirurgia-laqueadura-tubaria" className="menu-link">
              <FaUser className="menu-icon" />
              <span className="listitem">Cirurgia Laqueadura Tubária</span>
            </Link>
          </li>
        </ul>
        <div className="menu-item agendar-consulta">
          <Link to="/agendar-consulta" className="menu-link">
            <FaCalendarAlt className="menu-icon" />
            <span className="listitem">Agendar Consulta</span>
          </Link>
        </div>
      </div>




      {/* grid */}
      <div className="grid-section">

        {/* filtro */}

        <div className="filtrosgrid">
          <h1 className="titlegrid">Cirurgia XXXX</h1>
          <input className="campofiltro" placeholder="Pesquisa..." />
          <button className="botaofiltrar"><i class="fas fa-filter"></i> Filtrar</button>
        </div>


        <div className="grid-container">
          <table className="grid-table">
            <thead>
              <tr>
                <th className="colgrid">Prontuário</th>
                <th className="colgrid">Nome</th>
                <th className="colgrid">CPF</th>
                <th className="colgrid">Status</th>
                <th className="colgrid">Prioridade</th>
                <th className="colgrid">Data</th>
                <th className="colgrid">Solicitação</th>
                <th className="colgrid">Telefone</th>
                <th className="colgrid">Email</th>
                <th className="colgrid"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="infogrid">{item.prontuario}</td>
                  <td className="infogrid">{item.nome}</td>
                  <td className="infogrid">{item.cpf}</td>
                  <td className="infogrid">{item.status}</td>
                  <td className="infogrid">{item.prioridade}</td>
                  <td className="infogrid">{item.data}</td>
                  <td className="infogrid">{item.solicitacao}</td>
                  <td className="infogrid">{item.telefone}</td>
                  <td className="infogrid">{item.email}</td>
                  <td>
                    <FaEdit className="action-icon" />
                    <FaTrash className="action-icon" />
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

export default HomeAdm;

