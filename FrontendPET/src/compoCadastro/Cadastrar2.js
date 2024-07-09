import "./Cadastrar2.css";

function Cadastrar2() {
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
        <div className="dadospessoais">
          <h3 className="subtitleform">Dados Pessoais</h3>
         
          <div className="linhainputs">
            <div className="campo">
              <label>Nome Completo:</label>
              <input type="text" />
            </div>
            <div className="campo">
              <label>Data de Nascimento:</label>
              <input type="text" />
            </div>
            <div className="campo">
              <label>Número de Celular:</label>
              <input type="text" />
            </div>
          </div>

          <div className="linhainputs">
            <div className="campo">
              <label>Nome completo da Mãe:</label>
              <input type="text" />
            </div>
            <div className="campo">
              <label>CPF:</label>
              <input type="text" />
            </div>
            <div className="campo">
              <label>Endereço de E-mail:</label>
              <input type="text" />
            </div>
          </div>
        </div>

        <div className="dadosendereco">
          <h3 className="subtitleform" >Dados de Endereço</h3>

          <div className="linhainputs">
            <div className="campo">
              <label>Rua:</label>
              <input type="text" />
            </div>
            <div className="campo">
              <label>Número:</label>
              <input type="text" />
            </div>
            <div className="campo">
              <label>Bairro:</label>
              <input type="text" />
            </div>
          </div>

          <div className="linhainputs">
            <div className="campo">
              <label>Cidade:</label>
              <input type="text" />
            </div>
            <div className="campo">
              <label>Estado:</label>
              <input type="text" />
            </div>
            <div className="campo">
              <label>CEP:</label>
              <input type="text" />
            </div>
          </div>
        </div>

        <div className="dadoscomplementares">
          <h3 className="subtitleform" >Dados Complementares</h3>

          <div className="linhainputs">
            <div className="campo">
              <label>Profissão:</label>
              <input className="complemen1" type="text" />
            </div>
            <div className="campo">
              <label>Escolaridade:</label>
              <input className="complemen1" type="text" />
            </div>
            <div className="campo">
              <label>Estado Civil:</label>
              <input className="complemen1" type="text" />
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
            <div className="campo"  id="campodoc">
              <label>CNS VERSO:</label>
              <input type="file" />
            </div>

            <button className="btnEnviar">Enviar</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Cadastrar2;
