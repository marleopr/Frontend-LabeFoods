import React from "react";
import * as s from './styled-CardRestaurantDetail';

export default function CardRestaurantDetail(props) {
  let cart = JSON.parse(localStorage.getItem("cart")) || []

  const list = props.restDet.filter(item => {
    return item.category === props.cat
  })

  if (cart) {
    for (let i = 0; i < list.length; i++) {
      list[i].qtd = 0
      if (cart.length === 0) {
        list[i].qtd = 0
      } else {
        for (let j = 0; j < cart.length; j++) {
          if (list[i].name === cart[j].name) {
            list[i].qtd = cart[j].qtd
          }
        }
      }
    }
  }

  return (
    <s.Card>
      <s.Title><h3>{props.cat}</h3></s.Title>
      {list.map((item, index) => {
        return (
          <s.CardInterno key={index}>
            <s.Left>
              <s.ImageFood src={item.photoUrl} alt="Foto comida" />
            </s.Left>
            <s.Right>
              <s.LineTop>
                <s.Name>{item.name}</s.Name>
                <s.Quantidade qtd={item.qtd}>{item.qtd === 0 ? '' : item.qtd}</s.Quantidade>
              </s.LineTop>
              <s.LineMiddle>
                <s.Description>{item.description}</s.Description>
              </s.LineMiddle>
              <s.LineBottom>
                <s.Price>R${item.price.toFixed(2)}</s.Price>
                <s.ButtonAddRemove onClick={() => props.handleOpenModal(item, props.idRestaurant)} qtd={item.qtd} >{item.qtd === 0 ? 'adicionar' : 'remover'}</s.ButtonAddRemove>
              </s.LineBottom>
            </s.Right>
          </s.CardInterno>
        )
      })}
    </s.Card>
  )
}