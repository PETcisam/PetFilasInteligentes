//A tabela é mapeada com os dados do estado rows, preenchendo cada linha com as informações correspondentes dos usuários.
//utilizamos o useEffect para fazer uma requisição à rota /usuarios assim que o componente for montado.
//Os dados recebidos são armazenados no estado rows e renderizados na tabela.
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import Axios from 'axios'; // Importando Axios para fazer requisições HTTP

const ariaLabel = { 'aria-label': 'description' };

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    whiteSpace: 'nowrap',
    textAlign: 'center',
    padding: '8px 25px ',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    whiteSpace: 'nowrap',
    textAlign: 'center',
    padding: '8px 16px',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const CenteredBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

export default function Gridstyle() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8800/usuarios")
      .then((response) => {
        setRows(response.data);
      })
      .catch((error) => {
        console.error("ERRO AO OBTER USUÁRIOS!", error);
      });
  }, []);

  return (
    <>
      <CenteredBox>
        <TableContainer component={Paper} sx={{ maxWidth: 1200, width: '100%' }}>
          {/* ajeitar esse filtro */}
          <div>
            <Input defaultValue="filtro" inputProps={ariaLabel} />
            <button>Aplicar Filtros</button>
          </div>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Nome Completo</StyledTableCell>
                <StyledTableCell>Data de Nascimento</StyledTableCell>
                <StyledTableCell>Celular</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>CPF</StyledTableCell>
                <StyledTableCell>Nome da Mãe</StyledTableCell>
                <StyledTableCell>CEP</StyledTableCell>
                <StyledTableCell>Rua</StyledTableCell>
                <StyledTableCell>Número</StyledTableCell>
                <StyledTableCell>Complemento</StyledTableCell>
                <StyledTableCell>Bairro</StyledTableCell>
                <StyledTableCell>Cidade</StyledTableCell>
                <StyledTableCell>Estado</StyledTableCell>
                <StyledTableCell>CNS</StyledTableCell>
                <StyledTableCell>Semanas de Gestação</StyledTableCell>
                <StyledTableCell>Data da Última Ultrassonografia</StyledTableCell>
                <StyledTableCell>Motivo da Consulta</StyledTableCell>
                <StyledTableCell>Restrição de Data e Hora da Consulta</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.id}> {/* Assumindo que cada usuário tem um campo 'id' único */}
                  <StyledTableCell component="th" scope="row">
                    {row.nome}
                  </StyledTableCell>
                  <StyledTableCell>{row.dataNascimento}</StyledTableCell>
                  <StyledTableCell>{row.numeroCelular}</StyledTableCell>
                  <StyledTableCell>{row.email}</StyledTableCell>
                  <StyledTableCell>{row.cpf}</StyledTableCell>
                  <StyledTableCell>{row.nomeMae}</StyledTableCell>
                  <StyledTableCell>{row.cep}</StyledTableCell>
                  <StyledTableCell>{row.ruaResidencia}</StyledTableCell>
                  <StyledTableCell>{row.numeroResidencia}</StyledTableCell>
                  <StyledTableCell>{row.complemento}</StyledTableCell>
                  <StyledTableCell>{row.bairro}</StyledTableCell>
                  <StyledTableCell>{row.cidade}</StyledTableCell>
                  <StyledTableCell>{row.estado}</StyledTableCell>
                  <StyledTableCell>{row.numeroCNS}</StyledTableCell>
                  <StyledTableCell>{row.semanasGestacao}</StyledTableCell>
                  <StyledTableCell>{row.dataUltimaUltrassonografia}</StyledTableCell>
                  <StyledTableCell>{row.motivoConsulta}</StyledTableCell>
                  <StyledTableCell>{row.restricaoDataHoraConsulta}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CenteredBox>
    </>
  );
}

