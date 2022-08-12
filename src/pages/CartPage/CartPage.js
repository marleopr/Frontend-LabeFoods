import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import * as s from './styled-CartPage';
import { BASE_URL } from "../../constants/BASE_URL";
import { goToFeedPage, goToProfilePage } from '../../routes/coordinator'
import img_home from "./../../assets/img/home.png";
import img_cart from "./../../assets/img/cart_green.png";
import img_perfil from "./../../assets/img/perfil.png";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./../../components/global/GlobalContext";
import CardCart from "./../../components/cardCart/CardCart";
import useProtectedPage from './../../hooks/useProtectedPage';

export default function CartPage() {
  useProtectedPage();
  const token = localStorage.getItem('token');
  const navigate = useNavigate()
  const { currentUser } = useContext(GlobalContext)
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  const [cart2, setCart2] = useState(true);
  const [metPag, setMetPag] = useState('money');
  const [currentOrder, setCurrentOrder] = useState(false);
  const [atualizar, setAtualizar] = useState(true);

  const placeOrder = (body) => {
    axios.post(`${BASE_URL}/restaurants/${cart[0].idRestaurant}/order`, body,
      {
        headers:
        {
          auth: token
        }
      })
      .then(res => {
        alert('Pedido realizado com sucesso!');
        setAtualizar(!atualizar);
        localStorage.setItem("cart", JSON.stringify([]));
      })
      .catch(err => {
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

  const changeCart = (name) => {
    setCart2(!cart2);
    let novoCarrinho = cart.filter(item => {
      return item.name !== name
    })
    cart = novoCarrinho;
    localStorage.setItem("cart", JSON.stringify(novoCarrinho));
  }

  let soma = 0;
  let arrayBody = [];
  cart.forEach((item, index) => {
    const newObj = {
      id: item.idProduct,
      quantity: item.qtd
    }
    arrayBody.push(newObj);
    soma = soma + item.qtd * item.price;
  })

  const onClickPay = () => {
    if (cart.length !== 0) {
      if (!currentOrder) {
        const body = {
          products: arrayBody,
          paymentMethod: metPag
        }
        placeOrder(body);
      } else {
        alert('Existem ordens abertas! Aguarde as mesmas finalizarem');
      }
    } else {
      alert('O carrinho está vazio!');
    }
  }

  const onChangeMetPag = (event) => {
    setMetPag(event.target.value);
  }

  useEffect(() => {
    if(token){
      axios.get(`${BASE_URL}/active-order`, {
        headers: {
          auth: token
        }
      })
        .then(res => {
          if (res.data.order === null) {
            setCurrentOrder(false);
          } else {
            setCurrentOrder(true);
          }
        })
        .catch(err => alert("Ocorreu um erro no servidor, tente novamente mais tarde"))
    }
  }, [])

  return (
    <s.General>
      <s.Grid>
        <s.Line1>
          <s.MyCart>Meu carrinho</s.MyCart>
        </s.Line1>
        <s.Line2>
          <s.Address>
            <s.Delivery>
              Endereço de entrega
            </s.Delivery>
            <s.Address2>
              {currentUser.address}
            </s.Address2>
          </s.Address>
        </s.Line2>

        <s.Line3>
          <s.Description>
            {cart.length === 0 ?
              <s.EmptyCart>
                <s.TextEmpty>Carrinho Vazio</s.TextEmpty>
              </s.EmptyCart>
              :
              <s.RestaurantDetails>
                <s.NameRestaurant>{cart[0].nameRestaurant}</s.NameRestaurant>
                <s.AddressRestaurant>{cart[0].addressRestaurant}</s.AddressRestaurant>
                <s.DeliveryTimeRestaurant>{cart[0].deliveryTimeRestaurant} min</s.DeliveryTimeRestaurant>
              </s.RestaurantDetails>
            }
          </s.Description>
        </s.Line3>

        <s.Line4>
          {
            cart.map(item => {
              return (
                <CardCart key={item.name}
                  name={item.name}
                  photo={item.photo}
                  qtd={item.qtd}
                  description={item.description}
                  price={item.price}
                  changeCart={changeCart}
                />
              )
            })
          }
        </s.Line4>

        <s.Line5>
          <s.Ship>Frete R$: {cart.length === 0 ? "" : cart[0].shippingRestaurant.toFixed(2)}</s.Ship>
          <s.Total>
            <p>SUBTOTAL</p>
            <s.TotalPrice>R$ {soma.toFixed(2)}</s.TotalPrice>
          </s.Total>
          <s.Payment onChange={onChangeMetPag}>
            <s.PaymentInt>Forma de pagamento
              <hr></hr>
            </s.PaymentInt>
            <s.Money>
              <input checked="checked" name="metPag" value="money" type="radio" /> Dinheiro
            </s.Money>
            <s.Credit>
              <input name="metPag" value="creditcard" type="radio" /> Cartão de Crédito
            </s.Credit>
          </s.Payment>
        </s.Line5>

        <s.Line6>
          <s.ButtonConfirmar qtd={cart.length} onClick={onClickPay}>Confirmar</s.ButtonConfirmar>
        </s.Line6>

        <s.Line7>
          <s.ImgFooter src={img_home} onClick={() => goToFeedPage(navigate)} alt="Home" />
          <s.ImgFooter src={img_cart} alt="Home" />
          <s.ImgFooter src={img_perfil} onClick={() => goToProfilePage(navigate)} alt="Home" />
        </s.Line7>
      </s.Grid>
    </s.General>
  )
}