import React, { useEffect, useState } from "react";
import * as s from './styled-RestaurantDetailsPage';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';
import CardRestaurantDetail from "../../components/cardRestaurantDetail/CardRestaurantDetail";
import img_buttonBack from "./../../assets/img/buttomBack.png";
import { goToFeedPage, goToProfilePage, goToCartPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import useProtectedPage from './../../hooks/useProtectedPage';
import img_home from "./../../assets/img/home.png";
import img_cart from "./../../assets/img/cart.png";
import img_perfil from "./../../assets/img/perfil.png";
import Modal from 'react-modal';

export default function RestaurantDetailsPage() {
  useProtectedPage();
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const params = useParams()
  const [restaurantDetails, setRestaurantDetails] = useState({})
  const [valueSelect, setValueSelect] = useState(1)
  const [currentProduct, setCurrentProdut] = useState()
  const [updatecar, setUpdateCar] = useState(true)
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  const [modalIsOpen, setIsOpen] = useState(false)
  function handleOpenModal(item, id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    setCurrentProdut(item);

    let restRep = false;
    for (let i = 0; i < cart.length; i++) {
      if (id !== cart[i].idRestaurant) {
        restRep = true;
      }
    }

    if (restRep === false) {
      if (item.qtd === 0) {
        setIsOpen(true);
      } else {
        setUpdateCar(!updatecar)
        const novoCarrinho = cart.filter((carr) => {
          return carr.name !== item.name
        })
        cart = novoCarrinho;
        localStorage.setItem("cart", JSON.stringify(novoCarrinho))
      }
    } else {
      alert('Não é possível adicionar produtos de restaurantes diferentes');
    }
  }

  function handleCloseModal() {
    setIsOpen(false);
  }
  //------------------------------

  const getRestaurantDetails = () => {
    axios.get(`${BASE_URL}/restaurants/${params.id}`, {
      headers: {
        auth: token
      }
    })
      .then(res => {
        setRestaurantDetails(res.data.restaurant)
      })
      .catch(err => alert("Ocorreu um erro no servidor, tente novamente mais tarde."))
  }

  useEffect(() => {
  if(token){
    getRestaurantDetails()
  }
  }, [])

  const restDet = restaurantDetails.products;
  const categoryDif = []
  if (restDet) {
    for (let i = 0; i < restDet.length; i++) {
      if (categoryDif.length === 0) {
        categoryDif.push(restDet[i].category)
      } else {
        let add = true;
        for (let j = 0; j < categoryDif.length; j++) {
          if (restDet[i].category === categoryDif[j]) {
            add = false;
          }
        }
        if (add === true) {
          categoryDif.push(restDet[i].category)
        }
      }
    }
  }

  for (let i = 0; i < categoryDif.length; i++) {
    <h2>{categoryDif[i]}</h2>
    for (let j = 0; j < restDet.length; j++) {
      if (categoryDif[i] === restDet[j].category) {
        <p>{restDet.name}</p>
      }
    }
  }

  const customStyles = {
    content: {
      width: '352px',
      height: '200px',
      left: 'calc(50% - 177px)',
      top: 'calc(50% - 100px)',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      outline: 'none',
    }
  };

  const updateCart = () => {
    const novoProduto = {
      photo: currentProduct.photoUrl,
      name: currentProduct.name,
      description: currentProduct.description,
      price: currentProduct.price,
      qtd: valueSelect,
      idRestaurant: Number(params.id),
      nameRestaurant: restaurantDetails.name,
      shippingRestaurant: restaurantDetails.shipping,
      deliveryTimeRestaurant: restaurantDetails.deliveryTime,
      addressRestaurant: restaurantDetails.address,
      idProduct: currentProduct.id,
    }
    const novoCarrinho = [...cart, novoProduto]
    localStorage.setItem("cart", JSON.stringify(novoCarrinho));
    setValueSelect(1);
    handleCloseModal();
  }

  const onChangeSelect = (event) => {
    setValueSelect(Number(event.target.value));
  }

  return (
    <s.General>
      <s.Grid>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          style={customStyles}
        >
          <s.Box>
            <s.Texto>
              Selecione a quantidade desejada
            </s.Texto>
            <s.Selecionar onChange={onChangeSelect}>
              <option default>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </s.Selecionar>
            <s.Add>
              <s.Adicionar onClick={updateCart}>ADICIONAR AO CARRINHO</s.Adicionar>
            </s.Add>
          </s.Box>
        </Modal>

        <s.Line1>
          <s.BoxImg>
            <s.ButtonBack src={img_buttonBack} onClick={() => goToFeedPage(navigate)} alt="Botão voltar" />
          </s.BoxImg>
          <s.Title>Restaurante</s.Title>
        </s.Line1>

        <s.Line2>
          <s.Img_edit src={restaurantDetails.logoUrl} alt="imagem-editar" />
        </s.Line2>

        <s.Line3>
          <s.TituloLinha3>
            {restaurantDetails.name}
          </s.TituloLinha3>
          <p>{restaurantDetails.category}</p>
          <s.ShippingDiv>
            <p>{restaurantDetails.deliveryTime} min</p>
            <p>Frete R${restaurantDetails.shipping}</p>
          </s.ShippingDiv>
          <p>{restaurantDetails.address}</p>
        </s.Line3>

        <s.Line4>
          {
            categoryDif.map(cat => {
              return (
                <CardRestaurantDetail
                  key={cat}
                  cat={cat}
                  restDet={restDet}
                  handleOpenModal={handleOpenModal}
                  idRestaurant={Number(params.id)}
                />
              )
            })
          }
        </s.Line4>

        <s.Line5>
          <s.ImgFooter src={img_home} onClick={() => goToFeedPage(navigate)} alt="Home" />
          <s.ImgFooter src={img_cart} onClick={() => goToCartPage(navigate)} alt="Home" />
          <s.ImgFooter src={img_perfil} onClick={() => goToProfilePage(navigate)} alt="Home" />
        </s.Line5>

      </s.Grid>
    </s.General>
  )
}