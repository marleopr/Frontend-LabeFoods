import styled from 'styled-components';

export const Card = styled.div`
  margin: 10px 10px;  
`

export const Title = styled.div`
  border-bottom: solid 1px black;
`
export const CardInterno = styled.div`
  display: flex;
  height: 120px;
  margin: 10px 0;
  border: solid 1px black;
  border-radius: 10px;
`

export const Left = styled.div`
`

export const ImageFood = styled.img`
  width: 80px;
  height: 100%;
  margin-right: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  object-fit: contain;
  object-fit: fill;
  object-fit: scale-down;
  object-fit: cover;
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

export const LineTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Name = styled.div`
  font-size: 16px;
  color: #5cb646;
  margin-top: 12px;
`

export const Quantidade = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #5cb646;
  font-size: 16px;
  width: 33px;
  height: 33px;
  border: ${props => props.qtd === 0 ? "#FFFFFF" : "solid 1px #5cb646"};
  border-radius: 0px 8px 0px 8px;

`

export const Description = styled.p`
  font-size: 12px;
`
export const LineMiddle = styled.div`
  color: #b8b8b8;
`

export const LineBottom = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Price = styled.div`
  font-size: 16px;
  font-weight: bold;
`

export const ButtonAddRemove = styled.div`
  width: 90px;
  height: 31px;
  margin: 7px 0 0 8px;
  padding: 8px 20.5px 9px 21.5px;
  border-radius: 8px 0px 8px 0px;
  color: ${props => props.qtd === 0 ? "#5cb646" : "#e02020"};
  border: ${props => props.qtd === 0 ? "solid 1px #5cb646" : "solid 1px #e02020"};
  :hover{
    cursor: pointer;
  }
  :active{
    color: white;
    background-color: ${props => props.qtd === 0 ? "#5cb646" : "#e02020"};
  }
`