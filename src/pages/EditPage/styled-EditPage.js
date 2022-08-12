import styled from 'styled-components';

export const General = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  box-sizing: border-box;
  background-color: #FFFFFF;
`

export const Container = styled.div`
  width: 375px;
  height: 667px;
  display: grid;
  grid-template-rows: 60px 1fr;
  box-sizing: border-box;
  border: solid 1px lightgray;
`

export const Line1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-size: 16px;
  border-bottom: solid 1px #b8b8b8;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Field = styled.fieldset`
  width: 328px;
  height: 56px;
  margin: 10px 0;
  border: solid 1px #b8b8b8;
`

export const Legend = styled.legend`
  color: gray;
  margin: 0 10px;
  padding: 0 10px;
  font-size: 12px;
`

export const Input = styled.input`
  width: 328px;
  height: 25px;
  border: none;
  margin: 5px 0;
  padding: 0 20px;
  font-size: 16px;
  ::placeholder{
    color:  #b8b8b8;
  }
`

export const ButtonSave = styled.button`
  width: 328px;
  height: 42px;
  padding: 12px 16px;
  border-radius: 2px;
  background-color: #65B153;
  border: none;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  &:hover {
		cursor: pointer;
    transform: scale(1.01);
    transition: transform .2s;
	}
`