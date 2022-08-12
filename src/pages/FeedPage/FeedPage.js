import React, { useEffect, useState } from "react";
import * as s from './styled-FeedPage';
import img_home from "./../../assets/img/home_green.png";
import img_cart from "./../../assets/img/cart.png";
import img_perfil from "./../../assets/img/perfil.png";
import img_relogio from "./../../assets/img/relogio.png"
import axios from 'axios'
import { BASE_URL } from '../../constants/BASE_URL'
import { goToRestaurantDetailsPage, goToCartPage, goToProfilePage } from '../../routes/coordinator'
import { useNavigate } from "react-router-dom";
import useProtectedPage from './../../hooks/useProtectedPage';

export default function FeedPage() {
  useProtectedPage();
  const token = localStorage.getItem('token')
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  const [list, setList] = useState([])
  const [category, setCategory] = useState("Todos")
  const [search, setSearch] = useState("")
  const [currentOrder, setCurrentOrder] = useState(false)
  const [openOrder, setOpenOrder] = useState()

  const navigate = useNavigate()

  const openFeed = () => {
    axios.get(`${BASE_URL}/restaurants`, {
      headers: {
        auth: token
      }
    })
      .then(res => {
        setList(res.data.restaurants)
      })
      .catch(err => alert("Ocorreu um erro no servidor, tente novamente mais tarde"))
  }

  const getActiveOrder = () => {
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
          setOpenOrder(res.data.order)
        }
      })
      .catch(err => {
        const returnErr = err.response.status
        if (returnErr >= 400 && returnErr <= 500) {
          alert("Ocorreu um erro, verificar se existe pedido em andamento")
        } else if (returnErr >= 500 && returnErr <= 600) {
          alert("Ocorreu um erro no servidor, tente novamente mais tarde")
        } else {
          alert("Ocorreu um erro, tente novamente mais tarde")
        }
      })
  }

  useEffect(() => {
    if(token){
      openFeed()
      getActiveOrder()
    }
  }, [])

  const newList = list
    .filter(element => {
      if (category === "Todos") {
        return true
      } else {
        return element.category === category
      }
    })
    .filter(element => {
      return element.name.toLowerCase().includes(search.toLowerCase())
    })
    .map(element => {
      return (
        <s.CardFeed onClick={() => goToRestaurantDetailsPage(navigate, element.id)} key={element.name}>
          <s.RestaurantPhoto src={element.logoUrl} />
          <s.RestaurantName>{element.name}</s.RestaurantName>
          <s.LastLine>
            <s.RestaurantTime>{element.deliveryTime} min</s.RestaurantTime>
            <s.RestaurantShipping>Frete R${element.shipping.toFixed(2)}</s.RestaurantShipping>
          </s.LastLine>
        </s.CardFeed>
      )
    })

  const onChangeCategory = (value) => {
    setCategory(value)
  }

  const onChangeSearch = (event) => {
    setSearch(event.target.value)
  }

  let soma = 0;
  cart.forEach(item => {
    soma = soma + item.qtd * item.price;
  })

  return (
    <s.General>
      <s.Grid currentOrder={currentOrder}>
        <s.Line1>
          <s.ProjectName>FutureEats</s.ProjectName>
        </s.Line1>

        <s.Line2>
          <s.Search onChange={onChangeSearch} placeholder="Restaurante"></s.Search>
        </s.Line2>

        <s.Line3>
          <s.BoxLine3>
            <s.Category category={category} value="Todos" onClick={() => onChangeCategory("Todos")}>Todos</s.Category>
            <s.Category category={category} value="Árabe" onClick={() => onChangeCategory("Árabe")}>Árabe</s.Category>
            <s.Category category={category} value="Asiática" onClick={() => onChangeCategory("Asiática")}>Asiática</s.Category>
            <s.Category category={category} value="Hamburguer" onClick={() => onChangeCategory("Hamburguer")}>Hamburguer</s.Category>
            <s.Category category={category} value="Italiana" onClick={() => onChangeCategory("Italiana")}>Italiana</s.Category>
            <s.Category category={category} value="Sorvetes" onClick={() => onChangeCategory("Sorvetes")}>Sorvetes</s.Category>
            <s.Category category={category} value="Carnes" onClick={() => onChangeCategory("Carnes")}>Carnes</s.Category>
            <s.Category category={category} value="Baiana" onClick={() => onChangeCategory("Baiana")}>Baiana</s.Category>
            <s.Category category={category} value="Petiscos" onClick={() => onChangeCategory("Petiscos")}>Petiscos</s.Category>
            <s.Category category={category} value="Mexicana" onClick={() => onChangeCategory("Mexicana")}>Mexicana</s.Category>
          </s.BoxLine3>
        </s.Line3>

        <s.Line4>
          {newList}
        </s.Line4>

        <s.Ultima>
          <s.Espaco2>
            {
              currentOrder === true ?
                <>
                  <s.Left>
                    <s.Relogio src={img_relogio} alt="Relógio" />
                  </s.Left>
                  <s.Right>
                    <s.Div1>
                      Pedido em andamento
                    </s.Div1>
                    <s.Div2>
                      {openOrder.restaurantName}
                    </s.Div2>
                    <s.Div3>
                      SUBTOTAL R${openOrder.totalPrice.toFixed(2)}
                    </s.Div3>
                  </s.Right>
                </>
                :
                null
            }
          </s.Espaco2>
          <s.Line5>
            <s.ImgFooter src={img_home} alt="Home" />
            <s.ImgFooter src={img_cart} onClick={() => goToCartPage(navigate)} alt="Home" />
            <s.ImgFooter src={img_perfil} onClick={() => goToProfilePage(navigate)} alt="Home" />
          </s.Line5>
        </s.Ultima>

      </s.Grid>
    </s.General>
  )
}