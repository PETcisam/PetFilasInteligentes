import GlobalStyle from "./styles/global.js";
import styled from "styled-components";
import Form from "./compoForm/form.js";
import Menu from "./compoForm/menu.js";
import { Link } from 'react-router-dom';

//usado para manter o layout dentro dele
//ajuda a manter o conteudo organizado
const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function Formulario() {


  return (
  <>   
      <Menu/>
      <Title>FORMULARIO</Title>
      <Form/>
      {/* <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} /> */}
    

    {/* <GlobalStyle /> */}
  </>
  );
}

export default Formulario;
