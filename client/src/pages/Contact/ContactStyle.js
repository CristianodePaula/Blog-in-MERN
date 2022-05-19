import styled from 'styled-components'
import { motion } from 'framer-motion'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
  height: 92vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url("https://images.pexels.com/photos/8353837/pexels-photo-8353837.jpeg?cs=srgb&dl=pexels-kampus-production-8353837.jpg&fm=jpg
  ");
  background-size: cover;
`
export const Form = styled(motion.form)`
  height: 450px;
  width: 400px;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mobile({
  height: '420px',
  width: '320px',
  fontSize: '12px'
})} 
`
export const Text = styled.h1`
  font-size: 22px;
  margin-bottom: 25px;
  ${mobile({
  fontSize: '18px'
})} 
`
export const Input = styled.input`
  height: 25px;
  width: 320px;
  background: #E6E6FA;
  border-radius: 5px;
  border: none;
  padding: 10px;
  margin-bottom: 25px;
  outline: 0px;
  ::placeholder {
    font-size: 16px;
  }
  ${mobile({
  width: '250px',
  marginBottom: '15px'
})} 
  `
export const TextArea = styled.textarea`
  height: 150px;
  width: 320px;
  background: #E6E6FA;
  border-radius: 5px;
  border: none;
  padding: 10px;
  resize: none;
  outline: 0px;
  ::placeholder {
    font-size: 18px;
  }
  ${mobile({
  width: '250px'
})} 
`
export const Button = styled.button`
  background: darkred;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  height: 30px;
  width: 120px;
  cursor: pointer;
  &:hover {
    background: red;
    color: white;
    transform: scale(1.05); 
    transition: all 0.5s ease;
  }
  ${mobile({
  padding: '7px',
  height: '28px',
  width: '80px',
  fontSize: '16px'
})}
`