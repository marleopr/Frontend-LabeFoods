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
  grid-template-rows: 60px 90px 90px 1fr 60px;
  box-sizing: border-box;
  border: solid 1px lightgray;
`

export const Line1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-bottom: solid 1px lightgrey;
`

export const TitleLine1 = styled.div`
  font-size: 19px;
`

export const Left = styled.div`
  width: 125px;
  height: 50px;
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 125px;
  height: 50px;
`

export const BotaoLogout2 = styled.img`
  width: 20px;
  margin: 5px 0 0 0;
  &:hover {
		cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
	}
`

export const Line2 = styled.div`
  display: flex;  
  justify-content: center;   
  background-color: white; 
  width: 100%;   
`

export const Line3 = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: auto;
  background-color: #eeeeee;
  border: none; 
  width: 100%; 
`

export const Line4 = styled.div`
  display: flex;
  justify-content: center;   
  background-color: white; 
  overflow-y: auto;
  width: 100%;
  ::-webkit-scrollbar {
     width: 2px
  }
  ::-webkit-scrollbar-thumb {
    background-color: lightgrey;
    border-radius: 3px;
  }   
`

export const Line4Box = styled.div`
  display: flex;  
  flex-direction: column;
  width: 90%;    
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

export const NomeProfile = styled.p`
  font-size: 16px;
  margin: 5px 0 0 0;
`

export const EmailProfile = styled.p`
  font-size: 16px;
`

export const CpfProfile = styled.p`
  font-size: 16px;
  margin: 0 0 5px 0;
`

export const LeftOne = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-between;   
  margin: 10px 0 10px 0;
  height: 90%;
`

export const LeftTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 10px 0 10px 0;
  height: 90%;
`

export const Img_edit = styled.img`
  width: 20px;
  &:hover {
		cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
	}
`

export const History = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 102px;
  margin: 0 0 10px 0;
  justify-content: space-between;
  padding: 16px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;  
`

export const RestaurantName = styled.div`
  color: #5cb646;
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 10px 0;
`

export const RestaurantDeadline = styled.div`
  font-size: 12px;
  margin: 0 0 10px 0;
`

export const Subtotal = styled.div`
  font-size: 16px;
  font-weight: bold;
`

export const AddressTitle = styled.div`
  font-size: 16px;
  color: #b8b8b8;
`

export const AddressDiv = styled.div`
  font-size:16px;
`

export const Line2Box = styled.div`
  display: flex;  
  width: 90%;
  justify-content: space-between;
  align-items: center;
`

export const Line3Box = styled.div`
  display: flex;  
  width: 90%;
  justify-content: space-between;
  align-items: center;
`

export const HistoryTitle = styled.h3`
  font-size: 16px;
  letter-spacing: -0.39px;
  margin: 10px 0 0 0;
`

export const Line = styled.hr`
  color: rgba(0, 0, 0, 0.65);
  width: 100%;
  margin: 5px 0;
`