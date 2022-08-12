import React, { useState, useContext } from "react";
import * as s from './styled-AddressPage';
import useForm from "./../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import { GlobalContext } from "../../components/global/GlobalContext";
import img_buttonBack from "./../../assets/img/buttomBack.png"
import { goToFeedPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import useProtectedPage from './../../hooks/useProtectedPage';

export default function AddressPage() {
  useProtectedPage();
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const { currentUser, setCurrentUser } = useContext(GlobalContext)
  const [currentAddress, setCurrentAddress] = useState({})
  const [entrar, setEntrar] = useState(true)
  const [atualizar, setAtualizar] = useState(true)

  let { form, onChange} = useForm({
    street: "",
    number: "",
    complement: "",
    neighbourhood: "",
    city: "",
    state: "",
  })

  if (Object.keys(currentUser).length !== 0) {
    if (currentUser.hasAddress && entrar) {
      axios.get(`${BASE_URL}/profile/address`,
        {
          headers:
          {
            auth: token
          }
        })
        .then(res => {
          setCurrentAddress(res.data.address)
          setEntrar(false)
        })
        .catch(err => {
            alert("Ocorreu um erro no servidor tente novamente mais tarde")
          
        })
    }
  }

  const addAddress = (body) => {
    axios.put(`${BASE_URL}/address`, body, {
      headers: {
        auth: token
      }
    })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        setCurrentUser(res.data.user);
        alert('Dados de endereço enviados com sucesso!');
        goToFeedPage(navigate);
      })
      .catch(err => {
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
    addAddress(form)
    setAtualizar(!atualizar);
  }

  return (
    <s.General>
      <s.Container>

        <s.Line1>
          <s.BoxImg>
            <s.ButtonBack src={img_buttonBack} onClick={() => goToFeedPage(navigate)} alt="Botão voltar" />
          </s.BoxImg>
          <s.Title>Endereço</s.Title>
        </s.Line1>

        {Object.keys(currentUser).length !== 0 && (currentUser.hasAddress === true ? Object.keys(currentAddress).length !== 0 : true) ?
          <s.Form onSubmit={register}>
            <s.Field>
              <s.Legend>Logradouro*</s.Legend>
              <s.Input
                name={"street"}
                value={
                  currentUser.hasAddress === false ?
                    form.street
                    :
                    (
                      form.street === "" ?
                        form.street = currentAddress.street
                        :
                        form.street
                    )
                }
                onChange={onChange}
                placeholder="Logradouro"
                required
                type={"text"}
              />
            </s.Field>
            <s.Field>
              <s.Legend>Número*</s.Legend>
              <s.Input
                name={"number"}
                value={
                  currentUser.hasAddress === false ?
                    form.number
                    :
                    (
                      form.number === "" ?
                        form.number = currentAddress.number
                        :
                        form.number
                    )
                }
                onChange={onChange}
                placeholder="Número"
                required
                type={"number"}
              />
            </s.Field>
            <s.Field>
              <s.Legend>Complemento</s.Legend>
              <s.Input
                name={"complement"}
                value={
                  currentUser.hasAddress === false ?
                    form.complement
                    :
                    (
                      form.complement === "" ?
                        form.complement = currentAddress.complement
                        :
                        form.complement
                    )
                }
                onChange={onChange}
                placeholder="Complemento"
                type={"text"}
              />
            </s.Field>
            <s.Field>
              <s.Legend>Bairro*</s.Legend>
              <s.Input
                name={"neighbourhood"}
                value={
                  currentUser.hasAddress === false ?
                    form.neighbourhood
                    :
                    (
                      form.neighbourhood === "" ?
                        form.neighbourhood = currentAddress.neighbourhood
                        :
                        form.neighbourhood
                    )
                }
                onChange={onChange}
                placeholder="Bairro"
                required
                type={"text"}
              />
            </s.Field>
            <s.Field>
              <s.Legend>Cidade*</s.Legend>
              <s.Input
                name={"city"}
                value={
                  currentUser.hasAddress === false ?
                    form.city
                    :
                    (
                      form.city === "" ?
                        form.city = currentAddress.city
                        :
                        form.city
                    )
                }
                onChange={onChange}
                placeholder="Cidade"
                required
                type={"text"}
              />
            </s.Field>
            <s.Field>
              <s.Legend>Estado*</s.Legend>
              <s.Input
                name={"state"}
                value={
                  currentUser.hasAddress === false ?
                    form.state
                    :
                    (
                      form.state === "" ?
                        form.state = currentAddress.state
                        :
                        form.state
                    )
                }
                onChange={onChange}
                placeholder="Estado"
                required
                type={"text"}
              />
            </s.Field>
            <s.ButtonSave type={'submit'}>Salvar</s.ButtonSave>
          </s.Form>
          :
          <p>Carregando</p>
        }

      </s.Container>
    </s.General>
  )
}