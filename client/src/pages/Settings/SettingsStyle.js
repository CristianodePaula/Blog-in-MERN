import styled from 'styled-components'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
  height: 90.8vh;
  width: 100vw;
  background: #DCDCDC;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Wrapper = styled.div`
  height: 550px;
  width: 700px;
  background: #F8F8FF;
  border-radius: 20px;   
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mobile({
  height: '500px',
  width: '420px'
})}
`
export const Box = styled.div`
  display: flex;
  height: 440px;
  width: 500px;
  background: #DCDCDC;
  border-radius: 20px; 
  justity-content: center;
  align-items: center;
  flex-direction: column;
  ${mobile({
  height: '400px',
  width: '350px'
})}
`
export const Title = styled.h1`
  font-size: 30px;
  ${mobile({
  fontSize: '25px'
})}
`
export const Text = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
`
export const Input = styled.input`
  height: 30px;
  width: 250px;
  border-radius: 5px;
  border: none;
  text-align: center;
  margin-bottom: 15px;
  outline: 0px;
  ::placeholder {
    font-size: 18px;
  }
  ${mobile({
  width: '200px'
})}
`
export const Button = styled.button`
  margin-top: 10px;
  height: 30px;
  width: 100px;
  border: 1px solid black;
  border-radius: 10px;
  background: darkred;
  color: white;
  cursor: pointer;
  &:hover {
    background: red;
    color: white;
    transform: scale(1.05); 
    transition: all 0.5s ease;
  }
`
export const UserImg = styled.img`
  margin-top: 30px;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  transition: all .4s ease-in-out;
  filter: grayscale(70%);
  &:hover { 
    filter: grayscale(0);
    transform: rotate(30deg);
    transition: all 0.5s ease; 
}
${mobile({
  width: '100px',
  height: '100px'
})}
`
export const Label = styled.label`
  font-size: 15px;
  margin: 20px;
`