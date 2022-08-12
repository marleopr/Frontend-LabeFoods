import React, {useContext} from "react";
import * as s from './styled-LoginPage';
import useForm from "./../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import { goToAddressPage, goToFeedPage, goToSignUpPage } from "../../routes/coordinator";
import {useNavigate} from "react-router-dom"
import useUnprotectedPage from './../../hooks/useUnprotectedPage';
import { GlobalContext } from "../../components/global/GlobalContext";

export default function LoginPage() {
  useUnprotectedPage();
  const navigate = useNavigate()
  const { setCurrentUser } = useContext(GlobalContext)

  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  })

  const login = (body) => {
    axios.post(`${BASE_URL}/login`, body)
    .then((res)=>{
      setCurrentUser(res.data)
      localStorage.setItem("token", res.data.token)
      if (res.data.user.hasAddress) {
        goToFeedPage(navigate)
      } else {
        goToAddressPage(navigate)
      }
    })
    .catch((err)=>{
      const returnErr = err.response.status
        if (returnErr >= 400 && returnErr <= 500) {
          alert("Ocorreu um erro, verifique os dados inseridos e tente novamente")
        } else if (returnErr >= 500 && returnErr <= 600) {
          alert("Ocorreu um erro no servidor, tente novamente mais tarde")
        } else {
          alert("Ocorreu um erro, tente novamente mais tarde")
        }
    })
  }

  const register = (event) => {
    event.preventDefault();
    login(form)
  }

  return (
    <s.General>
      <s.Container>
        <s.Title>
          <s.Title1>Future</s.Title1>
          <s.Title2>Eats</s.Title2>
        </s.Title>

        <s.Title3>
          <s.TitleLogin>Entrar</s.TitleLogin>
        </s.Title3>

        <s.Form onSubmit={register}>
          <s.Field>
            <s.Legend>E-mail*</s.Legend>
            <s.Input
              name={"email"}
              value={form.email}
              onChange={onChange}
              placeholder="email@email.com"
              required
              type={"email"}
              />
          </s.Field>
          <s.Field>
            <s.Legend>Senha*</s.Legend>
            <s.Input
              name={"password"}
              value={form.password}
              onChange={onChange}
              placeholder="Mínimo 6 caracteres"
              required
              type={"password"}
              pattern={"^.{6,}"}
              title={"A senha deve possuir no mínimo 6 dígitos"}
            />
          </s.Field>
          <s.ButtonLogin type={'submit'}>Entrar</s.ButtonLogin>
        </s.Form>

        <s.Cadastro>
          <s.Text>
            Não possui cadastro? 
          </s.Text>
          <s.DivCadastro onClick={()=>goToSignUpPage(navigate)}>
            Clique aqui
          </s.DivCadastro>
        </s.Cadastro>
      </s.Container>
    </s.General>
  )
}