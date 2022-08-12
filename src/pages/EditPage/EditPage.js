import React, { useContext } from "react";
import * as s from './styled-EditPage';
import useForm from "./../../hooks/useForm";
import axios from "axios";
import { GlobalContext } from "../../components/global/GlobalContext";
import { BASE_URL } from "../../constants/BASE_URL";
import img_buttonBack from "./../../assets/img/buttomBack.png";
import { useNavigate } from "react-router-dom";
import { goToProfilePage } from "../../routes/coordinator";
import useProtectedPage from './../../hooks/useProtectedPage';

export default function EditPage() {
  useProtectedPage();
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const { currentUser, setCurrentUser } = useContext(GlobalContext)

  const { form, onChange, cleanFields } = useForm({
    name: "",
    email: "",
    cpf: "",
  })

  const updateProfile = (body) => {
    axios.put(`${BASE_URL}/profile`, body, 
    {
      headers: {
        auth: token
      }
    })
    .then( res => {
      setCurrentUser(res.data.user);
      alert('Dados alterados com sucesso!');
      goToProfilePage(navigate);
    })
    .catch( err =>{
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
    updateProfile(form);
    setCurrentUser({
      name: form.name,
      email: form.email,
      cpf: form.cpf,
    })
  }

  return (
    <s.General>
      <s.Container>

        <s.Line1>
          <s.BoxImg>
            <s.ButtonBack src={img_buttonBack} onClick={() => goToProfilePage(navigate)} alt="Botão voltar" />
          </s.BoxImg>
          <s.Title>Editar</s.Title>
        </s.Line1>

        {
          Object.keys(currentUser).length !== 0 ?

            <s.Form onSubmit={register}>
              <s.Field>
                <s.Legend>Nome*</s.Legend>
                <s.Input
                  name={"name"}
                  value={form.name === "" ? form.name = currentUser.name : form.name}
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
                  value={form.email === "" ? form.email = currentUser.email : form.email}
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
                  value={form.cpf === "" ? form.cpf = currentUser.cpf : form.cpf}
                  onChange={onChange}
                  placeholder="CPF"
                  required
                  type={"text"}
                />
              </s.Field>

              <s.ButtonSave type={'submit'}>Salvar</s.ButtonSave>
            </s.Form>

            : <p>Carregando...</p>
        }
      </s.Container>
    </s.General >
  )
}