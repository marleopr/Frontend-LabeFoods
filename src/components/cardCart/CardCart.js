import React from "react";
import * as s from './styled-CardCart';

export default function CardRestaurantDetail(props) {

  return (
    <s.CardInterno>
      <s.Left>
        <s.ImageFood src={props.photo} alt="Foto comida" />
      </s.Left>
      <s.Right>
        <s.LineTop>
          <s.Name>{props.name}</s.Name>
          <s.Quantidade>{props.qtd === 0 ? '' : props.qtd}</s.Quantidade>
        </s.LineTop>
        <s.LineMiddle>
          <s.Description>{props.description}</s.Description>
        </s.LineMiddle>
        <s.LineBottom>
          <s.Price>R${props.price}</s.Price>
          <s.ButtonAddRemove onClick={()=>props.changeCart(props.name)}>Remover</s.ButtonAddRemove>
        </s.LineBottom>
      </s.Right>
    </s.CardInterno>
  )
}