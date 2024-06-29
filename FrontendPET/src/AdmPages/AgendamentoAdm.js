import './AgendamentoAdm.css';
import React, { useState } from 'react';

function AgendamentoAdm() {

    return (
        <div className="pagina-agendamento">
            <div className="barra-superior">
                <p className='titulo-pagina'>Agendamento</p>
            </div>
            <div className="barra-lateral">

            </div>

            <div className="formularioAgendamentoNovo">
                <div className="dadosPessoaisNovo">
                    <h3 className="subtituloFormulario">Dados Pessoais</h3>

                    <div className="linhaInputs">
                        <div className="campoNovo">
                            <label>Nome Completo:</label>
                            <input type="text" />
                        </div>
                        <div className="campoNovo">
                            <label>Data de Nascimento:</label>
                            <input type="text" />
                        </div>
                        <div className="campoNovo">
                            <label>Número de Celular:</label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="linhaInputs">
                        <div className="campoNovo">
                            <label>Nome completo da Mãe:</label>
                            <input type="text" />
                        </div>
                        <div className="campoNovo">
                            <label>CPF:</label>
                            <input type="text" />
                        </div>
                        <div className="campoNovo">
                            <label>Endereço de E-mail:</label>
                            <input type="text" />
                        </div>
                    </div>
                </div>

                <div className="dadosEnderecoNovo">
                    <h3 className="subtituloFormulario">Dados de Endereço</h3>

                    <div className="linhaInputs">
                        <div className="campoNovo">
                            <label>Rua:</label>
                            <input type="text" />
                        </div>
                        <div className="campoNovo">
                            <label>Número:</label>
                            <input type="text" />
                        </div>
                        <div className="campoNovo">
                            <label>Bairro:</label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="linhaInputs">
                        <div className="campoNovo">
                            <label>Cidade:</label>
                            <input type="text" />
                        </div>
                        <div className="campoNovo">
                            <label>Estado:</label>
                            <input type="text" />
                        </div>
                        <div className="campoNovo">
                            <label>CEP:</label>
                            <input type="text" />
                        </div>
                    </div>
                </div>

                <div className="dadosComplementaresNovo">
                    <h3 className="subtituloFormulario">Dados Complementares</h3>

                    <div className="linhaInputs">
                        <div className="campoNovo">
                            <label>Profissão:</label>
                            <input className="complementar" type="text" />
                        </div>
                        <div className="campoNovo">
                            <label>Escolaridade:</label>
                            <input className="complementar" type="text" />
                        </div>
                        <div className="campoNovo">
                            <label>Estado Civil:</label>
                            <input className="complementar" type="text" />
                        </div>
                    </div>
                </div>

                <button className="btnEnviar">Agendar</button>
            </div>

        </div>
    );
}

export default AgendamentoAdm