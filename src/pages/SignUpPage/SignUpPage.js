import React, { useContext } from "react";
import * as s from './styled-SignUpPage';
import useForm from "./../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import { goToAddressPage, goToLoginPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom"
import img_buttonBack from "./../../assets/img/buttomBack.png"
import { GlobalContext } from "../../components/global/GlobalContext";

export default function SignUpPage() {
  const navigate = useNavigate()
  const { setCurrentUser } = useContext(GlobalContext)

  const { form, onChange, cleanFields } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
  })

  const signUp = (body) => {
    axios.post(`${BASE_URL}/signup`, body)
      .then((res) => {
       alert("Conta criada com sucesso!")
       alert("Preencha seus dados de endereço a seguir.")
        setCurrentUser(res.data)
        localStorage.setItem("token", res.data.token)
        goToAddressPage(navigate)
      })
      .catch((err) => {
        const returnErr = err.response.status
        if(returnErr >= 400 && returnErr <= 500){
          alert("Ocorreu um erro, verifique os dados inseridos e tente novamente")
        } else if(returnErr >= 500 && returnErr <= 600){
          alert("Ocorreu um erro no servidor, tente novamente mais tarde")
        } else {
          alert("Ocorreu um erro, tente novamente mais tarde")
        }
      })
  }

  const register = (event) => {
    event.preventDefault();
    if(form.password === form.confirmPassword) {
      signUp(form);
    } else {
      alert('Erro! Os campos senha e confirmar devem ser iguais!')
    }
  }

  return (
    <s.General>
      <s.Container>
        <s.Header>
          <s.ButtonBack src={img_buttonBack} onClick={() => goToLoginPage(navigate)} alt="Botão voltar" />
        </s.Header>

        <s.DivLogo>
          <div>
            <s.TitleFuture>Future</s.TitleFuture>
            <s.TitleEats2>Eats</s.TitleEats2>
          </div>
        </s.DivLogo>

        <s.Title2>
          <s.Signup>Cadastrar</s.Signup>
        </s.Title2>
        <s.Form onSubmit={register}>
          <s.Field>
            <s.Legend>Nome*</s.Legend>
            <s.Input
              name={"name"}
              value={form.name}
              onChange={onChange}
              placeholder="Nome"
              required
              type={"text"}
            />
          </s.Field>
          <s.Field>
            <s.Legend>E-mail*</s.Legend>
            <s.Input
              name={"email"}
              value={form.email}
              onChange={onChange}
              placeholder="E-mail"
              required
              type={"email"}
            />
          </s.Field>
          <s.Field>
            <s.Legend>CPF*</s.Legend>
            <s.Input
              name={"cpf"}
              value={form.cpf}
              onChange={onChange}
              placeholder="000.000.000.00 (Somente números)"
              pattern={"^.{11,}"}
              type={"text"}
              required
              title={"Esperado onze caracteres"}
            />
          </s.Field>
          <s.Field>
            <s.Legend>Senha*</s.Legend>
            <s.Input
              name={"password"}
              value={form.password}
              onChange={onChange}
              placeholder="Senha"
              required
              type={"password"}
              pattern={"^.{6,}"}
              title={"Mínimo seis caracteres"}
            />
          </s.Field>
          <s.Field>
            <s.Legend>Confirmar Senha*</s.Legend>
            <s.Input
              name={"confirmPassword"}
              value={form.confirmPassword}
              onChange={onChange}
              placeholder="Confirmar Senha"
              required
              type={"password"}
              pattern={"^.{6,}"}
              title={"Mínimo seis caracteres"}
            />
          </s.Field>
          <s.ButtonSignUp type={'submit'}>Criar</s.ButtonSignUp>
        </s.Form>

      </s.Container>
    </s.General>
  )
}