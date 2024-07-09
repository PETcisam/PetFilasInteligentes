import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import "./Cadastrar2.css";

function Cadastrar2() {
  const formik = useFormik({
    initialValues: {
      nomeCompleto: '',
      dataNascimento: '',
      numeroCelular: '',
      nomeCompletoMae: '',
      cpf: '',
      email: '',
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
      cep: '',
      Senha: '',
      Nprontuario: '',
      Ncns: '',
    },
    onSubmit: values => {
      axios.post('http://localhost:8083/register', values)
        .then(response => {
          console.log(response.data);
          alert('Usuário registrado com sucesso!');
        })
        .catch(error => {
          console.error('Erro ao registrar usuário:', error);
          alert('Erro ao registrar usuário. Tente novamente.');
        });
    },
  });

  return (
    <div className="containercadastro">
      <div className="boxazul">
        <div className="textosbox">
          <h2 className="bemvindo">Bem-Vindo!</h2>
          <h3 className="bemvindorodape">
            Termine seu cadastro para agendar uma consulta no cisam
          </h3>
        </div>
      </div>

      <div className="formulariocadastro">
        <div className="compontitlecads">
          <h1 className="titlecadastro">Cadastre-se aqui!</h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="dadospessoais">
            <h3 className="subtitleform">Dados Pessoais</h3>
            <div className="linhainputs">
              <div className="campo">
                <label>Nome Completo:</label>
                <input
                  type="text"
                  name="nomeCompleto"
                  onChange={formik.handleChange}
                  value={formik.values.nomeCompleto}
                />
              </div>
              <div className="campo">
                <label>Data de Nascimento:</label>
                <input
                  type="text"
                  name="dataNascimento"
                  onChange={formik.handleChange}
                  value={formik.values.dataNascimento}
                />
              </div>
              <div className="campo">
                <label>Número de Celular:</label>
                <input
                  type="text"
                  name="numeroCelular"
                  onChange={formik.handleChange}
                  value={formik.values.numeroCelular}
                />
              </div>
            </div>

            <div className="linhainputs">
              <div className="campo">
                <label>Nome completo da Mãe:</label>
                <input
                  type="text"
                  name="nomeCompletoMae"
                  onChange={formik.handleChange}
                  value={formik.values.nomeCompletoMae}
                />
              </div>
              <div className="campo">
                <label>CPF:</label>
                <input
                  type="text"
                  name="cpf"
                  onChange={formik.handleChange}
                  value={formik.values.cpf}
                />
              </div>
              <div className="campo">
                <label>Endereço de E-mail:</label>
                <input
                  type="text"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </div>
            </div>
          </div>

          <div className="dadosendereco">
            <h3 className="subtitleform">Dados de Endereço</h3>

            <div className="linhainputs">
              <div className="campo">
                <label>Rua:</label>
                <input
                  type="text"
                  name="rua"
                  onChange={formik.handleChange}
                  value={formik.values.rua}
                />
              </div>
              <div className="campo">
                <label>Número:</label>
                <input
                  type="text"
                  name="numero"
                  onChange={formik.handleChange}
                  value={formik.values.numero}
                />
              </div>
              <div className="campo">
                <label>Bairro:</label>
                <input
                  type="text"
                  name="bairro"
                  onChange={formik.handleChange}
                  value={formik.values.bairro}
                />
              </div>
            </div>

            <div className="linhainputs">
              <div className="campo">
                <label>Cidade:</label>
                <input
                  type="text"
                  name="cidade"
                  onChange={formik.handleChange}
                  value={formik.values.cidade}
                />
              </div>
              <div className="campo">
                <label>Estado:</label>
                <input
                  type="text"
                  name="estado"
                  onChange={formik.handleChange}
                  value={formik.values.estado}
                />
              </div>
              <div className="campo">
                <label>CEP:</label>
                <input
                  type="text"
                  name="cep"
                  onChange={formik.handleChange}
                  value={formik.values.cep}
                />
              </div>
            </div>
          </div>

          <div className="dadoscomplementares">
            <h3 className="subtitleform">Dados Complementares</h3>

            <div className="linhainputs">
              <div className="campo">
                <label>Numero do Prontuário:</label>
                <input
                  className="complemen1"
                  type="text"
                  name="Nprontuario"
                  onChange={formik.handleChange}
                  value={formik.values.Nprontuario}
                />
              </div>
              <div className="campo">
                <label> Nº da Carteira Nacional da Saude</label>
                <input
                  className="complemen1"
                  type="text"
                  name="Ncns"
                  onChange={formik.handleChange}
                  value={formik.values.Ncns}
                />
              </div>
              </div>

              <div className="linhainputs">

              <div className="campo">
                <label>Senha:</label>
                <input
                  className="complemen1"
                  type="text"
                  name="Senha"
                  onChange={formik.handleChange}
                  value={formik.values.Senha}
                />
              </div>
              <div className="campo">
                <label>Confirmar Senha:</label>
                <input
                  className="complemen1"
                  type="text"
                  name="escolaridade"
                />
              </div>
            
            </div>
          </div>

          <div className="documentosnecessarios">
            <h3 className="subtitleform">Documentos Necessários</h3>

            <div className="linhainputs">
              <div className="campo">
                <label>RG FRENTE:</label>
                <input type="file" />
              </div>
              <div className="campo">
                <label>RG VERSO:</label>
                <input type="file" />
              </div>
              <div className="campo">
                <label>Comprovante de Residência:</label>
                <input type="file" />
              </div>
              <div className="campo" id="campodoc">
                <label>CNS FRENTE:</label>
                <input type="file" />
              </div>
              <div className="campo" id="campodoc">
                <label>CNS VERSO:</label>
                <input type="file" />
              </div>

              <button className="btnEnviar" type="submit">Enviar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastrar2;