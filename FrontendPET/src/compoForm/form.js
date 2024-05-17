import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function RedBar() {
    return (
      <Box
        sx={{
          height: 30,
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? 'transparent'
              : 'transparent',
        }}
      />
    );
  }

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        // backgroundColor: "#1d69b1",
        width: 500,
        maxWidth: '100%',
      }}
      noValidate
      autoComplete="off"
    >
    <div>
  <RedBar />
  <TextField 
    fullWidth
    required
    id="nomecompleto"
    label="Nome Completo"
  />
  <RedBar />

  <TextField
    fullWidth
    id="outlined-required-dataNascimento"
    label="Data de Nascimento (DD/MM/AAAA)"
  />
  <RedBar />

  <TextField
    fullWidth
    id="outlined-required-celular"
    label="Celular (99) 99999-9999"
  />

  <RedBar />

  <TextField
    fullWidth
    id="outlined-disabled-email"
    label="Email"
  />
  
  <RedBar />

  <TextField
    fullWidth 
    id="outlined-disabled-cpf"
    label="CPF"
  />

<RedBar />

  <TextField
    fullWidth
    id="outlined-disabled-nomeMae"
    label="Nome da Mãe"
  />

  <RedBar />

  <TextField
    fullWidth
    id="outlined-required-cep"
    label="CEP"
  />

<RedBar />

  <TextField
    fullWidth
    id="outlined-required-rua"
    label="Rua"
  />

<RedBar />

  <TextField
    fullWidth
    id="outlined-required-numero"
    label="Número"
  />

  <RedBar />

  <TextField
    fullWidth
    id="outlined-required-complemento"
    label="Complemento"
  />

<RedBar />

  <TextField
    fullWidth
    id="outlined-required-bairro"
    label="Bairro"
  />

<RedBar />

  <TextField
    fullWidth
    id="outlined-required-cidade"
    label="Cidade"
  />

<RedBar />
  
  <TextField
    fullWidth
    id="outlined-required-estado"
    label="Estado"
  />

<RedBar />

  <TextField
    fullWidth
    id="outlined-required-cns"
    label="CNS"
  />

<RedBar />

  <TextField
    fullWidth
    id="outlined-required-semanasGestacao"
    label="Semanas de Gestação"
  />

<RedBar />

  
  <TextField
    fullWidth
    id="outlined-required-dataUltimaUltrassonografia"
    label="Data da Última Ultrassonografia (DD/MM/AAAA)"
  />

<RedBar />

  <TextField
    fullWidth
    id="outlined-required-motivoConsulta"
    label="Motivo da Consulta"
  />

<RedBar />

  <TextField
    fullWidth
    id="outlined-required-restricaoDataHoraConsulta"
    label="Restrição de Data e Hora da Consulta"
  />
</div>

    </Box>
  );
}
