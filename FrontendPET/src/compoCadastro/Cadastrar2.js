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
          <h1 className="title">Cadastre-se aqui!</h1>
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
              <label>text:</label>
              <input type="text" />
            </div>

          </div>
         
        </div>

        <div className="dadosendereco">
          <h3 className="subtitleform" >Dados de Endereço</h3>

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
              <label>text:</label>
              <input type="text" />
            </div>

          </div>
        </div>

        <div className="dadoscomplementares">
          <h3 className="subtitleform" >Dados Complementares</h3>

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
              <label>Email:</label>
              <input type="text" />
            </div>

          </div>
        </div>

        <div className="documentosnecessarios">
          <h3 className="subtitleform" >Documentos Necessários</h3>
          <div className="campo">
            <label>RG:</label>
            <input type="text" />
          </div>
          <div className="campo">
            <label>CPF:</label>
            <input type="text" />
          </div>
          {/* Outros documentos necessários */}
        </div>

      </div>
    </div>
  );
}

export default Cadastrar2;
