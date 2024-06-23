import React from 'react';
import './PerfilPaciente.css';
import imgperfil2 from './imgspacient/perfilexemplo.jpeg';

function PerfilPaciente() {
  const paciente = {
    nomeCompleto: "Juan Caio",
    dataNascimento: "00/00/0000",
    celular: "(11) 12345-6789",
    nomeMae: "dasdas assadsa as assad",
    cpf: "123.456.789-00",
    email: "juan.caio@asdasda.com",
    rua: "Rua Exemplo",
    numero: "123",
    bairro: "Bairro Exemplo"
  };

  return (
    <div className="containerperfil">
      <div className="boxazulperfil">
        <div className="nomeefotoperfil">
          <img src={imgperfil2} alt="Profile" className="fotoperfil" />
          <div className="fotoperfildiv"></div>
          <div className="nomeperfildiv">
            <h1 className="nomeperfil">{paciente.nomeCompleto}</h1>
          </div>
        </div>
      </div>

      <div className="infosperfil">
        <h2 className="titlecadastro">Informações do Paciente</h2>
        <div className="dadosinfoperfil">
          <div className="linhastext">
            <div className="campoinfo">
              <label className='labelperfil' >Nome Completo:</label>
              <p>{paciente.nomeCompleto}</p>
            </div>
            <div className="campoinfo">
              <label className='labelperfil' >Data de Nascimento:</label>
              <p>{paciente.dataNascimento}</p>
            </div>
            <div className="campoinfo">
              <label className='labelperfil' >Número de Celular:</label>
              <p>{paciente.celular}</p>
            </div>
          </div>

          <div className="linhastext">
            <div className="campoinfo">
              <label className='labelperfil' >Nome completo da Mãe:</label>
              <p>{paciente.nomeMae}</p>
            </div>
            <div className="campoinfo">
              <label className='labelperfil' >CPF:</label>
              <p>{paciente.cpf}</p>
            </div>
            <div className="campoinfo">
              <label className='labelperfil' >Endereço de E-mail:</label>
              <p>{paciente.email}</p>
            </div>
          </div>

          <div className="linhastext">
            <div className="campoinfo">
              <label className='labelperfil'>Rua:</label>
              <p>{paciente.rua}</p>
            </div>
            <div className="campoinfo">
              <label className='labelperfil' >Número:</label>
              <p>{paciente.numero}</p>
            </div>
            <div className="campoinfo">
              <label className='labelperfil' >Bairro:</label>
              <p>{paciente.bairro}</p>
            </div>
          </div>
        </div>
        <button className="download-button">Baixar Documentos</button>
      </div>
    </div>
  );
}

export default PerfilPaciente;
