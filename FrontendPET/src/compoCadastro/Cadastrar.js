import React from "react";
import "./Cadastrar.css";
import Axios from "axios"; //lib pra fzr requisições http
import * as yup from "yup"; //validação do formulario
import { Formik, Form, Field, ErrorMessage } from "formik"; //lib pra gerenciar formularios

const Cadastrar = () => {
  const handleRegister = (values) => {
    console.log("Form values:", values); 
    Axios.post("http://localhost:8800/register", {
      email: values.email,
      cpf: values.cpf,
      password: values.password,
      nome: values.nome,
    })
      .then((response) => {
        console.log("Response:", response);
        alert(response.data.msg);
      })
      .catch((error) => { //em caso de erro
        console.error("ERRO DE REGISTRO!", error);
        alert("ERRO NO REGISTRO"); 
      });
  };

  const validationsRegister = yup.object().shape({ //uso do yup pra validações do form
    email: yup.string().email("Email inválido").required("O email é obrigatório"),
    nome: yup.string().required("O nome é obrigatório"),
    password: yup.string().min(8, "A senha deve ter pelo menos 8 caracteres").required("A senha é obrigatória"),
    cpf: yup.string().length(11, "CPF inválido").required("O CPF é obrigatório"),
  });

  return (
    <div className="container2">
      <Formik 
        initialValues={{ nome: "", email: "", cpf: "", password: "" }}
        validationSchema={validationsRegister}
        onSubmit={handleRegister}
      >
        {() => (
          <Form>
            <h1>Cadastro</h1>
            
            <div className="input-cads">
              <Field type="text" name="nome" placeholder="Nome Completo" />
              <ErrorMessage name="nome" component="div" className="error-message" />
              
              <Field type="text" name="cpf" placeholder="CPF" />
              <ErrorMessage name="cpf" component="div" className="error-message" />
              
              <Field type="password" name="password" placeholder="Senha" />
              <ErrorMessage name="password" component="div" className="error-message" />
              
              <Field type="text" name="email" placeholder="E-mail" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            
            <div className="recall-forget"></div>
            <button type="submit">Cadastrar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Cadastrar;
