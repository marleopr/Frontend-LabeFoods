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

export const Container = styled.div`
  width: 375px;
  height: 667px;
  display: grid;
  grid-template-rows: 60px 60px 80px 1fr;
  background-color: white;
  border: solid 1px lightgrey;
`

export const Header = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  border-bottom: solid 1px #b8b8b8;
`

export const ButtonBack = styled.img`
  width: 20px;
  margin: 0 0 0 20px;
  &:hover {
		cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
	}
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
`
export const Signup = styled.div`
  font-size: 19px;
`

export const DivLogo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`

export const ImgLogo = styled.img`
  width: 104px;
  height: 58px;
  margin: 24px 128px 16px;
  object-fit: contain;
`

export const Title2 = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 42px;
  margin: 40px 0 0;
  padding: 12px 32px;
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

export const ButtonSignUp = styled.button`
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

export const TitleFuture = styled.p`
  font-size: 34px;
`

export const TitleEats2 = styled.h1`
  font-size: 32px;
  color: #5CB646;
`