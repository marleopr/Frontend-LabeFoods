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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 375px;
  height: 667px;
  background-color: white;
  border: solid 1px lightgrey;
`

export const Title = styled.div`
  margin: 80px 0 20px 0;
`
export const TitleLogin = styled.div`
 font-size: 19px;
`

export const Title1 = styled.p`
  font-size: 34px;
`

export const Title2 = styled.h1`
font-size: 32px;
  color: #5cb646;
`

export const Title3 = styled.div`
  margin: 20px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Field = styled.fieldset`
  width: 328px;
  height: 56px;
  border: solid 1px #b8b8b8;
  margin: 10px 0;
`

export const Legend = styled.legend`
  color: #b8b8b8;
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
    color: #b8b8b8;
  }
`

export const ButtonLogin = styled.button`
  width: 328px;
  height: 42px;
  margin: 10px 0;
  border: none;
  font-weight: bold;
  background-color: #5cb646;
  &:hover {
		cursor: pointer;
    transform: scale(1.01);
    transition: transform .2s;
	}
`

export const Cadastro = styled.div`
  display: flex;
  margin: 20px;
`

export const Text = styled.div`
  font-weight: bold;
`

export const DivCadastro = styled.div`
  margin: 0 2px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
		cursor: pointer;
    transform: scale(1.02);
    transition: transform .1s;
	}
`