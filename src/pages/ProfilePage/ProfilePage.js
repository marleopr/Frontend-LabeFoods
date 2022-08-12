import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import * as s from './styled-ProfilePage';
import img_home from "./../../assets/img/home.png";
import img_cart from "./../../assets/img/cart.png";
import imgLogout from "./../../assets/img/logout.png";
import img_perfil from "./../../assets/img/perfil_green.png";
import img_edit from "./../../assets/img/edit.png"
import { useNavigate } from "react-router";
import { goToAddressPage, goToEditPage, goToFeedPage, goToCartPage, goToLoginPage } from "../../routes/coordinator";
import { GlobalContext } from "../../components/global/GlobalContext";
import useProtectedPage from './../../hooks/useProtectedPage';

export default function ProfilePage() {
  useProtectedPage();
  const navigate = useNavigate()
  const token = localStorage.getItem('token');
  const [ordersHistory, setOrdersHistory] = useState()
  const { currentUser } = useContext(GlobalContext)

  useEffect(() => {
    if(token){
      axios.get(`${BASE_URL}/orders/history`, {
        headers: {
          auth: token
        }
      })
      .then(res => setOrdersHistory(res.data.orders))
      .catch(err => alert("Ocorreu um erro no servidor, tente novamente mais tarde."))
    }
  }, [])

  const Logout = () => {
    localStorage.removeItem("token");
    goToLoginPage(navigate);
  }

  return (
    <s.General>
      <s.Grid>

        <s.Line1>
          <s.Left>
          </s.Left>
          <s.TitleLine1>Meu Perfil</s.TitleLine1>
          <s.Right>
            Olá, {currentUser.name}
            <s.BotaoLogout2 onClick={Logout} src={imgLogout} title="Logout" />
          </s.Right>
        </s.Line1>

        <s.Line2>
          <s.Line2Box>
            <s.LeftOne>
              <s.NomeProfile>{currentUser.name}</s.NomeProfile>
              <s.EmailProfile>{currentUser.email}</s.EmailProfile>
              <s.CpfProfile>{currentUser.cpf}</s.CpfProfile>
            </s.LeftOne>
            <s.Img_edit onClick={() => goToEditPage(navigate)} src={img_edit} alt="imagem-editar" title="Editar perfil"/>
          </s.Line2Box>
        </s.Line2>

        <s.Line3>
          <s.Line3Box>
            <s.LeftTwo>
              <s.AddressTitle>Endereço Cadastrado</s.AddressTitle>
              <s.AddressDiv>{currentUser.address}</s.AddressDiv>
            </s.LeftTwo>
            <s.Img_edit onClick={() => goToAddressPage(navigate)} src={img_edit} alt="imagem-editar" title="Editar endereço"/>
          </s.Line3Box>
        </s.Line3>

        <s.Line4>
          <s.Line4Box>
            <s.HistoryTitle>Histórico de Pedidos</s.HistoryTitle>
            <s.Line />
            {ordersHistory &&
              ordersHistory.map((order, index) => {
                let date = new Date(order.createdAt);
                return (
                  <s.History key={index}>
                    <s.RestaurantName>{order.restaurantName}</s.RestaurantName>
                    <s.RestaurantDeadline>{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</s.RestaurantDeadline>
                    <s.Subtotal>SUBTOTAL R${order.totalPrice.toFixed(2)}</s.Subtotal>
                  </s.History>
                )
              })
            }
          </s.Line4Box>
        </s.Line4>

        <s.Line5>
          <s.ImgFooter src={img_home} onClick={() => goToFeedPage(navigate)} alt="Home" title="Home"/>
          <s.ImgFooter src={img_cart} onClick={() => goToCartPage(navigate)} alt="Home" title="Carrinho" />
          <s.ImgFooter src={img_perfil} alt="Home" title="Perfil"/>
        </s.Line5>

      </s.Grid>
    </s.General>
  )
}