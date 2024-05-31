import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import  { useState } from 'react';
import Input from '@mui/material/Input';

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

function createData(nome, dataNascimento, celular, email, cpf, nomeMae, cep, rua, numero, complemento, bairro, cidade ,estado, cns, semanasGestacao, dataUltimaUltrassonografia, motivoConsulta, restricaoDataHoraConsulta ) {
  return { nome, dataNascimento, celular, email, cpf, nomeMae, cep, rua, numero, complemento, bairro, cidade ,estado, cns, semanasGestacao, dataUltimaUltrassonografia, motivoConsulta, restricaoDataHoraConsulta };
}

const rows = [
    createData('João Silva', '01/01/1980', '(11) 99999-9999', 'joao@gmail.com', '123.456.789-00', 'Maria Silva', '12345-678', 'Rua A', '123', 'Apto 1', 'Centro', 'São Paulo', 'SP', '123456789012345', '20', '01/05/2023', 'Consulta de rotina', 'Nenhuma'),
    createData('Maria Souza', '15/03/1975', '(21) 88888-8888', 'maria@gmail.com', '987.654.321-00', 'José Souza', '54321-876', 'Rua B', '456', 'Casa 2', 'Bairro X', 'Rio de Janeiro', 'RJ', '987654321098765', '25', '15/06/2023', 'Exame de sangue', 'Nenhuma'),
    createData('Carlos Oliveira', '10/07/1992', '(31) 77777-7777', 'carlos@gmail.com', '234.567.890-00', 'Ana Oliveira', '98765-432', 'Rua C', '789', 'Bloco 3', 'Bairro Y', 'Belo Horizonte', 'MG', '234567890123456', '30', '10/08/2023', 'Consulta dermatológica', 'Nenhuma'),
    // Adicione mais linhas conforme necessário
  ];
  

export default function Gridstyle() {



  return (
    <>
    <CenteredBox>
      <TableContainer component={Paper} sx={{ maxWidth: 1200, width: '100%' }}>
        {/* ajeitar esse filtro */}
      <div>
        <Input defaultValue="filtro" inputProps={ariaLabel} />
        <button >Aplicar Filtros</button>
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
              <StyledTableRow key={row.nome}>
                <StyledTableCell component="th" scope="row">
                  {row.nome}
                </StyledTableCell>
                <StyledTableCell>{row.dataNascimento}</StyledTableCell>
                <StyledTableCell>{row.celular}</StyledTableCell>
                <StyledTableCell>{row.email}</StyledTableCell>
                <StyledTableCell>{row.cpf}</StyledTableCell>
                <StyledTableCell>{row.nomeMae}</StyledTableCell>
                <StyledTableCell>{row.cep}</StyledTableCell>
                <StyledTableCell>{row.rua}</StyledTableCell>
                <StyledTableCell>{row.numero}</StyledTableCell>
                <StyledTableCell>{row.complemento}</StyledTableCell>
                <StyledTableCell>{row.bairro}</StyledTableCell>
                <StyledTableCell>{row.cidade}</StyledTableCell>
                <StyledTableCell>{row.estado}</StyledTableCell>
                <StyledTableCell>{row.cns}</StyledTableCell>
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
