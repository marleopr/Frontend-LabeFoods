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
  grid-template-rows: 60px 70px 42px 1fr auto;
  background-color: white;
  box-sizing: border-box;
  border: solid 1px lightgray
`

export const Line1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px lightgrey;
`

export const ProjectName = styled.div`
  font-size: 19px;
`

export const Line2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Search = styled.input`
  width: 90%;
  height: 54px;
  border: solid 1px #b8b8b8;
  padding: 0 10px;
  font-size: 18px;
  ::placeholder{
    color: #b8b8b8;
    font-size: 18px;
  }
`

export const Line3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow-x: auto;
`

export const Category = styled.div`
  margin: 0 10px;
  font-size: 18px;
  color: ${props => props.value === props.category ? "#5cb646" : "black"};
  &:hover {
		cursor: pointer;
    transform: scale(1.05);
    transition: transform .1s;
	}
`

export const BoxLine3 = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  width: 90%;
  ::-webkit-scrollbar {
    width: 10px
  }
`

export const Line4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  width: 100%;
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: lightgrey;
    border-radius: 3px;
  }
`

export const CardFeed = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 188px;
  margin: 0 0 20px 0;
  border-radius: 10px;
  border: solid 1px #b8b8b8;
  &:hover {
		cursor: pointer;
    transform: scale(1.01);
    transition: transform .2s;
	}
`

export const RestaurantPhoto = styled.img`
  width: 100%;
  height: 120px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

export const RestaurantName = styled.div`
  margin: 10px 0 5px 20px;
  color: #5cb646;
  font-size: 18px;
`

export const LastLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px 10px 20px;
  font-size: 18px;
`

export const RestaurantTime = styled.div`
  color: #b8b8b8;
`

export const RestaurantShipping = styled.div`
  color: #b8b8b8;
`

export const Ultima = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Espaco2 = styled.div`
  display: flex;
  width: 100%;
  background-color: #5cb646;
`

export const Line5 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  border-top: 1px solid lightgray
`

export const ImgFooter = styled.img`
  width: 30px;
  &:hover {
		cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
	}
`

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 30%;
`

export const Relogio = styled.img`
  width: 30px
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 70%;
`

export const Div1 = styled.div`
  margin: 10px 0;
  color: white;
`

export const Div2 = styled.div`
  font-weight: bold;
`

export const Div3 = styled.div`
  margin: 10px 0;
  font-weight: bold;
`