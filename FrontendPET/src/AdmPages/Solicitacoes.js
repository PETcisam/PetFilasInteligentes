import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaHeart, FaSyringe, FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import "./Solicitacoes.css";

function Solicitacoes() {
  const [data, setData] = useState([
    { prontuario: "12345", nome: "Maria Silva", cpf: "111.222.333-44", status: "Vermelho", prioridade: "Alta", data: "2024-06-01", solicitacao: "Cirurgia Geral", telefone: "(11) 98765-4321", email: "maria.silva@example.com" },
    { prontuario: "67890", nome: "João Pereira", cpf: "555.666.777-88", status: "Azul", prioridade: "Média", data: "2024-06-15", solicitacao: "Histeroscopia Cirúrgica", telefone: "(21) 91234-5678", email: "joao.pereira@example.com" },
    { prontuario: "11223", nome: "Ana Costa", cpf: "999.888.777-66", status: "Amarelo", prioridade: "Baixa", data: "2024-06-20", solicitacao: "Cirurgia Laqueadura Tubária", telefone: "(31) 99876-5432", email: "ana.costa@example.com" },
    { prontuario: "22334", nome: "Carlos Mendes", cpf: "222.333.444-55", status: "Vermelho", prioridade: "Alta", data: "2024-06-05", solicitacao: "Cirurgia Geral", telefone: "(41) 91234-5678", email: "carlos.mendes@example.com" },
    { prontuario: "33445", nome: "Fernanda Lima", cpf: "333.444.555-66", status: "Azul", prioridade: "Média", data: "2024-06-10", solicitacao: "Histeroscopia Cirúrgica", telefone: "(51) 98765-4321", email: "fernanda.lima@example.com" },
    { prontuario: "44556", nome: "Gustavo Nunes", cpf: "444.555.666-77", status: "Amarelo", prioridade: "Baixa", data: "2024-06-18", solicitacao: "Cirurgia Laqueadura Tubária", telefone: "(61) 99876-5432", email: "gustavo.nunes@example.com" },
    { prontuario: "55667", nome: "Heloisa Santos", cpf: "555.666.777-88", status: "Vermelho", prioridade: "Alta", data: "2024-06-22", solicitacao: "Cirurgia Geral", telefone: "(71) 91234-5678", email: "heloisa.santos@example.com" },
    { prontuario: "66778", nome: "Igor Rocha", cpf: "666.777.888-99", status: "Azul", prioridade: "Média", data: "2024-06-25", solicitacao: "Histeroscopia Cirúrgica", telefone: "(81) 98765-4321", email: "igor.rocha@example.com" },
    { prontuario: "77889", nome: "Julia Carvalho", cpf: "777.888.999-00", status: "Amarelo", prioridade: "Baixa", data: "2024-06-28", solicitacao: "Cirurgia Laqueadura Tubária", telefone: "(91) 99876-5432", email: "julia.carvalho@example.com" },
    { prontuario: "88990", nome: "Leonardo Almeida", cpf: "888.999.000-11", status: "Vermelho", prioridade: "Alta", data: "2024-06-30", solicitacao: "Cirurgia Geral", telefone: "(31) 91234-5678", email: "leonardo.almeida@example.com" },
    { prontuario: "99001", nome: "Marina Souza", cpf: "999.000.111-22", status: "Azul", prioridade: "Média", data: "2024-07-01", solicitacao: "Histeroscopia Cirúrgica", telefone: "(41) 98765-4321", email: "marina.souza@example.com" },
    { prontuario: "10112", nome: "Nicolas Costa", cpf: "000.111.222-33", status: "Amarelo", prioridade: "Baixa", data: "2024-07-03", solicitacao: "Cirurgia Laqueadura Tubária", telefone: "(51) 99876-5432", email: "nicolas.costa@example.com" },
    { prontuario: "11223", nome: "Olivia Barros", cpf: "111.222.333-44", status: "Vermelho", prioridade: "Alta", data: "2024-07-05", solicitacao: "Cirurgia Geral", telefone: "(61) 91234-5678", email: "olivia.barros@example.com" },
    { prontuario: "12334", nome: "Pedro Silva", cpf: "222.333.444-55", status: "Azul", prioridade: "Média", data: "2024-07-07", solicitacao: "Histeroscopia Cirúrgica", telefone: "(71) 98765-4321", email: "pedro.silva@example.com" },
    { prontuario: "13445", nome: "Quelia Dias", cpf: "333.444.555-66", status: "Amarelo", prioridade: "Baixa", data: "2024-07-09", solicitacao: "Cirurgia Laqueadura Tubária", telefone: "(81) 99876-5432", email: "quelia.dias@example.com" },
    { prontuario: "14556", nome: "Rafael Gomes", cpf: "444.555.666-77", status: "Vermelho", prioridade: "Alta", data: "2024-07-11", solicitacao: "Cirurgia Geral", telefone: "(91) 91234-5678", email: "rafael.gomes@example.com" },
    { prontuario: "15667", nome: "Sofia Martins", cpf: "555.666.777-88", status: "Azul", prioridade: "Média", data: "2024-07-13", solicitacao: "Histeroscopia Cirúrgica", telefone: "(31) 98765-4321", email: "sofia.martins@example.com" },
    { prontuario: "16778", nome: "Thiago Araújo", cpf: "666.777.888-99", status: "Amarelo", prioridade: "Baixa", data: "2024-07-15", solicitacao: "Cirurgia Laqueadura Tubária", telefone: "(41) 99876-5432", email: "thiago.araujo@example.com" },
    { prontuario: "17889", nome: "Ursula Fernandes", cpf: "777.888.999-00", status: "Vermelho", prioridade: "Alta", data: "2024-07-17", solicitacao: "Cirurgia Geral", telefone: "(51) 91234-5678", email: "ursula.fernandes@example.com" },
    { prontuario: "18990", nome: "Vinicius Castro", cpf: "888.999.000-11", status: "Azul", prioridade: "Média", data: "2024-07-19", solicitacao: "Histeroscopia Cirúrgica", telefone: "(61) 98765-4321", email: "vinicius.castro@example.com" },
    { prontuario: "20001", nome: "Wellington Lima", cpf: "999.000.111-22", status: "Amarelo", prioridade: "Baixa", data: "2024-07-21", solicitacao: "Cirurgia Laqueadura Tubária", telefone: "(71) 99876-5432", email: "wellington.lima@example.com" }
  ]);
  
  

  return (
    <div className="home-adm">
      {/* sidebar */}
      <div className="sidebar2">
      
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
