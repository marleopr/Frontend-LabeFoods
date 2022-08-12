import styled from 'styled-components';

export const General = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  box-sizing: border-box;
`

export const Grid = styled.div`
  width: 375px;
  height: 667px;
  display: grid;
  grid-template-rows: 60px 120px 100px 1fr 60px;
  border: 1px solid lightgray;
  box-sizing: border-box;
`

export const Line1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-bottom: solid 1px #b8b8b8;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const Texto = styled.div`
  font-size: 16px;
  text-align: center;
  width: 100%;
`

export const Selecionar = styled.select`
  margin: 20px 0 0 0 ;
  width: 100%;
  height: 40px;
`

export const Option = styled.option`
`

export const Add = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`

export const Adicionar = styled.div`
  margin: 30px 0 0 0;
  color: #5cb646;
  font-size: 16px;
  text-align: center;
  :hover{
    cursor: pointer;
  }
  :active{
    color: #3b722e;
  }
`

export const BoxImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 5%;
`

export const ButtonBack = styled.img`
  width: 20px;
  margin: 0 0 0 10px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 95%;
  height: 100%;
  font-size: 19px;
`

export const Line2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`

export const Search = styled.input`
`

export const TituloLinha3 = styled.div`
  color: #5cb646;
  font-size: 16px;
`

export const Line3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  overflow-x: auto;
  color: #b8b8b8;
  padding: 7px 10px;
`

export const Category = styled.div`
  margin: 0 10px;
`

export const Line4 = styled.div`
  overflow-y: auto;
  ::-webkit-scrollbar {
      width: 2px
  }
  ::-webkit-scrollbar-thumb {
  background-color: lightgrey;
  border-radius: 3px;
  } 
`

export const Img_edit = styled.img`
  width: 100%;
  height: 120px;
  margin: 5px 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

export const ShippingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
`

export const Line5 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-top: solid 1px #eeeeee;
`

export const ImgFooter = styled.img`
  width: 30px;
  &:hover {
		cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
	}
`