import styled from 'styled-components'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url("https://images.pexels.com/photos/6893329/pexels-photo-6893329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
`
export const Title = styled.h1`
  font-size: 50px;
  color: white;
  text-shadow: 3px 3px 4px black;
  ${mobile({
  fontSize: '35px'
})}
`
export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`
export const Label = styled.div` 
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 10px 0;
  font-size: 20px;
  font-weight: 400;
  color: white;
  text-shadow: 3px 3px 4px black;
`
export const Input = styled.input`
  padding: 10px;
  background-color: white;
  border: none;
  border-radius: 10px;
  outline: none;
`
export const Button = styled.button`
  margin-top: 20px;
  text-align: center;
  background-color: darkgreen;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`