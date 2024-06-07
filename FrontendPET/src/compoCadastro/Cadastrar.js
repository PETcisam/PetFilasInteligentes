import React from "react";
import "./Cadastrar.css";
import Axios from "axios"; //lib pra fzr requisições http
import * as yup from "yup"; //validação do formulario
import { Formik, Form, Field, ErrorMessage } from "formik"; //lib pra gerenciar formularios

const Cadastrar = () => {
  const handleRegister = (values) => {
    console.log("Form values:", values);
    Axios.post("http://localhost:8800/register", values)
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
    nome: yup.string().required("O nome é obrigatório"),
    bairro: yup.string().required("O bairro é obrigatório"),
    nomeMae: yup.string().required("O nome da mãe é obrigatório"),
    cidade: yup.string().required("A cidade é obrigatória"),
    dataNascimento: yup.date().required("A data de nascimento é obrigatória"),
    numeroCNS: yup.string().required("O número da carteira nacional de saúde é obrigatório"),
    numeroProntuario: yup.string().required("O número de prontuário é obrigatório"),
    email: yup.string().email("Email inválido").required("O email é obrigatório"),
    cep: yup.string().required("O CEP é obrigatório"),
    cpf: yup.string().length(11, "CPF inválido").required("O CPF é obrigatório"),
    ruaResidencia: yup.string().required("A rua da residência é obrigatória"),
    numeroCelular: yup.string().required("O número de celular é obrigatório"),
    numeroResidencia: yup.string().required("O número da residência é obrigatório"),
    password: yup.string().min(8, "A senha deve ter pelo menos 8 caracteres").required("A senha é obrigatória"),
    complemento: yup.string().required("O complemento é obrigatório"),
  });

  // falta colocar quebra na coluna, a cada 6 começa outra coluna
  return (
    <div className="container2">
      <Formik
        initialValues={{
          nome: "", bairro: "", nomeMae: "", cidade: "", dataNascimento: "", numeroCNS: "", numeroProntuario: "",
          email: "", cep: "", cpf: "", ruaResidencia: "", numeroCelular: "", numeroResidencia: "", password: "", complemento: ""
        }}
        validationSchema={validationsRegister}
        onSubmit={handleRegister}
      >
        {() => (


          
            <Form>

            <div className="componentecadastro">

            <h1>Cadastro</h1>

            <div className="input-cads">
              <Field type="text" name="nome" placeholder="Insira seu nome aqui" />
              <ErrorMessage name="nome" component="div" className="error-message" />

              <Field type="text" name="bairro" placeholder="Insira o bairro" />
              <ErrorMessage name="bairro" component="div" className="error-message" />

              <Field type="text" name="nomeMae" placeholder="Insira o nome de sua mãe" />
              <ErrorMessage name="nomeMae" component="div" className="error-message" />

              <Field type="text" name="cidade" placeholder="Insira a cidade" />
              <ErrorMessage name="cidade" component="div" className="error-message" />

              <Field type="date" name="dataNascimento" placeholder="Data de nascimento" />
              <ErrorMessage name="dataNascimento" component="div" className="error-message" />

              <Field type="text" name="numeroCNS" placeholder="Número da carteira nacional de saúde" />
              <ErrorMessage name="numeroCNS" component="div" className="error-message" />

              <Field type="text" name="numeroProntuario" placeholder="Número de prontuário" />
              <ErrorMessage name="numeroProntuario" component="div" className="error-message" />

              <Field type="email" name="email" placeholder="E-mail" />
              <ErrorMessage name="email" component="div" className="error-message" />

              <Field type="text" name="cep" placeholder="CEP" />
              <ErrorMessage name="cep" component="div" className="error-message" />

              <Field type="text" name="cpf" placeholder="CPF" />
              <ErrorMessage name="cpf" component="div" className="error-message" />

              <Field type="text" name="ruaResidencia" placeholder="Rua da residência" />
              <ErrorMessage name="ruaResidencia" component="div" className="error-message" />

              <Field type="text" name="numeroCelular" placeholder="Número de celular" />
              <ErrorMessage name="numeroCelular" component="div" className="error-message" />

              <Field type="text" name="numeroResidencia" placeholder="Insira o número da residência" />
              <ErrorMessage name="numeroResidencia" component="div" className="error-message" />

              <Field type="password" name="password" placeholder="Insira uma senha" />
              <ErrorMessage name="password" component="div" className="error-message" />

              <Field type="text" name="complemento" placeholder="Casa, nº do apartamento e etc" />
              <ErrorMessage name="complemento" component="div" className="error-message" />
            </div>

            <div className="recall-forget"></div>
            <button type="submit">Cadastrar</button>
          </div>
        </Form>
      )}
    </Formik>
  </div>

  );
};

export default Cadastrar;
