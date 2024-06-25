import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaHeart, FaSyringe, FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import "./Solicitacoes.css";

function Solicitacoes() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem('accessToken'); // Supondo que o token seja armazenado no localStorage

  useEffect(() => {
    axios.get("http://localhost:8800/solicitacoes", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, [token]);

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
          <h1 className="titlegrid">Solicitações</h1>
          <input className="campofiltro" placeholder="Pesquisa..." />
          <button className="botaofiltrar"><i className="fas fa-filter"></i> Filtrar</button>
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

export default Solicitacoes;
