import React from "react";
import Axios from "axios";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import "./Logar.css";

const Logar = () => {
  const handleLogin = (values) => {
    console.log("Form values:", values);
    Axios.post("http://localhost:8800/login", {
      email: values.email,
      password: values.password,
    })
      .then((response) => {
        console.log("Response:", response);
        alert(response.data.msg);
        if (response.status === 200) {
          // Redireciona para a página inicial ou dashboard após login bem-sucedido
          window.location.href = "/dashboard";
        }
      })
      .catch((error) => {
        console.error("ERRO DE LOGIN!", error);
        alert("ERRO NO LOGIN");
      });
  };

  const validationsLogin = yup.object().shape({
    email: yup.string().email("Email inválido").required("O email é obrigatório"),
    password: yup.string().required("A senha é obrigatória"),
  });

  return (
    <div className="container">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationsLogin}
        onSubmit={handleLogin}
      >
        {() => (
          <Form>
            <h1>Acesse o sistema</h1>
            <div className="input-field">
              <Field type="text" name="email" placeholder="E-mail" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div className="input-field">
              <Field type="password" name="password" placeholder="Senha" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            <div className="recall-forget">
              <label>
                <Field type="checkbox" name="remember" />
                Lembre de mim
              </label>
              <a href="#">Esqueceu sua senha?</a>
            </div>
            <button type="submit">Login</button>
            <div className="signup-link">
              <p>
                Não tem uma conta?{" "}
                <Link to="/register">
                  Registar
                </Link>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Logar;
