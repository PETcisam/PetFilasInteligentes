import './AgendamentoAdm.css';
import React, { useState } from 'react';
import imgtestrg from './imgtestrg.jpg';
import imgtestrg2 from './imgtestrg2.jpg';

function AgendamentoAdm() {
    const [popupVisible, setPopupVisible] = useState(false);
    const [documentoAtual, setDocumentoAtual] = useState(null);
    const [statusDocumentos, setStatusDocumentos] = useState({});

    const usuarioFake = {
        nomeCompleto: "João da Silva",
        dataNascimento: "01/01/1980",
        numeroCelular: "(11) 99999-9999",
        nomeMae: "Maria da Silva",
        cpf: "123.456.789-00",
        email: "joao.silva@example.com",
        endereco: {
            rua: "Rua das Flores",
            numero: "123",
            bairro: "Jardim das Acácias",
            cidade: "São Paulo",
            estado: "SP",
            cep: "01234-567"
        },
        dadosComplementares: {
            profissao: "Engenheiro",
            escolaridade: "Superior Completo",
            estadoCivil: "Solteiro"
        }
    };

    const documentos = [
        { id: "documentobox1", img: imgtestrg, img2: imgtestrg2, nome: "RG" },
        { id: "documentobox2", nome: "Comprovante de Residência" },
        { id: "documentobox3", nome: "CNS" }
    ];

    const abrirPopup = (documento) => {
        setDocumentoAtual(documento);
        setPopupVisible(true);
    };

    const fecharPopup = () => {
        setPopupVisible(false);
        setDocumentoAtual(null);
    };

    const handleAprovar = () => {
        setStatusDocumentos(prevStatus => ({
            ...prevStatus,
            [documentoAtual.id]: 'aprovado'
        }));
        fecharPopup();
    };

    const handleRejeitar = () => {
        setStatusDocumentos(prevStatus => ({
            ...prevStatus,
            [documentoAtual.id]: 'rejeitado'
        }));
        fecharPopup();
    };

    const getStatusClass = (id) => {
        if (statusDocumentos[id] === 'aprovado') {
            return 'aprovado';
        } else if (statusDocumentos[id] === 'rejeitado') {
            return 'rejeitado';
        }
        return '';
    };

    return (
        <div className="pagina-agendamento">
            <div className="barra-superior">
                <p className='titulo-pagina'>Agendamento</p>
            </div>
            <div className="barra-lateral">
                {/* Conteúdo da barra lateral */}
            </div>

            <div className="formularioAgendamentoNovo">
                <div className="dadosPessoaisNovo">
                    <h3 className="subtituloFormulario">Dados Pessoais</h3>

                    <div className="linhaInputs">
                        <div className="campoNovo">
                            <label>Nome Completo:</label>
                            <p>{usuarioFake.nomeCompleto}</p>
                        </div>
                        <div className="campoNovo">
                            <label>Data de Nascimento:</label>
                            <p>{usuarioFake.dataNascimento}</p>
                        </div>
                        <div className="campoNovo">
                            <label>Número de Celular:</label>
                            <p>{usuarioFake.numeroCelular}</p>
                        </div>
                    </div>

                    <div className="linhaInputs">
                        <div className="campoNovo">
                            <label>Nome completo da Mãe:</label>
                            <p>{usuarioFake.nomeMae}</p>
                        </div>
                        <div className="campoNovo">
                            <label>CPF:</label>
                            <p>{usuarioFake.cpf}</p>
                        </div>
                        <div className="campoNovo">
                            <label>Endereço de E-mail:</label>
                            <p>{usuarioFake.email}</p>
                        </div>
                    </div>
                </div>

                <div className="dadosEnderecoNovo">
                    <h3 className="subtituloFormulario">Dados de Endereço</h3>

                    <div className="linhaInputs">
                        <div className="campoNovo">
                            <label>Rua:</label>
                            <p>{usuarioFake.endereco.rua}</p>
                        </div>
                        <div className="campoNovo">
                            <label>Número:</label>
                            <p>{usuarioFake.endereco.numero}</p>
                        </div>
                        <div className="campoNovo">
                            <label>Bairro:</label>
                            <p>{usuarioFake.endereco.bairro}</p>
                        </div>
                    </div>

                    <div className="linhaInputs">
                        <div className="campoNovo">
                            <label>Cidade:</label>
                            <p>{usuarioFake.endereco.cidade}</p>
                        </div>
                        <div className="campoNovo">
                            <label>Estado:</label>
                            <p>{usuarioFake.endereco.estado}</p>
                        </div>
                        <div className="campoNovo">
                            <label>CEP:</label>
                            <p>{usuarioFake.endereco.cep}</p>
                        </div>
                    </div>
                </div>

                <div className="dadosComplementaresNovo">
                    <h3 className="subtituloFormulario">Dados Complementares</h3>

                    <div className="linhaInputs">
                        <div className="campoNovo">
                            <label>Profissão:</label>
                            <p className="complementar">{usuarioFake.dadosComplementares.profissao}</p>
                        </div>
                        <div className="campoNovo">
                            <label>Escolaridade:</label>
                            <p className="complementar">{usuarioFake.dadosComplementares.escolaridade}</p>
                        </div>
                        <div className="campoNovo">
                            <label>Estado Civil:</label>
                            <p className="complementar">{usuarioFake.dadosComplementares.estadoCivil}</p>
                        </div>
                    </div>
                </div>
                <div className="DocumentosContainer">
                    <h3 className="subtituloFormulario">Documentos:</h3>

                    <div className="linhaInputs">
                        {documentos.map(doc => (
                            <div key={doc.id} className='campoNovo' id={`${getStatusClass(doc.id)}`} onClick={() => abrirPopup(doc)}>
                                <p className="complementar" id={doc.id}>{doc.nome}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="btnEnviar">Agendar</button>

                {popupVisible && documentoAtual && (
                    <div className="popup">
                        <div className="popup-inner">
                            <h3>{documentoAtual.nome}</h3>
                            <div className='containerdocumentospopup'>
                                {documentoAtual.img && <img src={documentoAtual.img} alt={documentoAtual.nome} className='imgdoc1' />}
                                {documentoAtual.img2 && <img src={documentoAtual.img2} alt={documentoAtual.nome} className='imgdoc1' />}
                            </div>
                            <div className='butoeesrejapro'>
                                <button className='btnEnviar' id='botaoaprovar' onClick={handleAprovar}>APROVAR</button>
                                <button className='btnEnviar' id='botaorejeitar' onClick={handleRejeitar}>REJEITAR</button>
                            </div>
                            <button onClick={fecharPopup}>Fechar</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AgendamentoAdm;
