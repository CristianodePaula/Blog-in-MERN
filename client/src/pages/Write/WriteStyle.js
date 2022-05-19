import styled from 'styled-components'
import { motion } from 'framer-motion'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`   
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?cs=srgb&dl=pexels-jessica-lewis-creative-606541.jpg&fm=jpg");
  background-size: cover;
`
export const Wrapper = styled(motion.div)`
  margin-top: 50px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 30px;
  background: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
  ${mobile({
  width: '400px'
})}
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
export const Image = styled.img`
  margin-top: 20px;
  width: 73vw;
  height: 200px;
  object-fit: cover; 
  display: flex;
  margin-bottom: 20px; 
  ${mobile({
  marginTop: '5px',
  width: '320px',
  height: '100px'
})}
`
export const Label = styled.label`
  font-size: 20px;
  margin: 20px;
  ${mobile({
  fontSize: "18px",
  margin: '5px'
})}
`
export const FileInput = styled.input`
  display: none;
  outline: 0px;
`
export const TextInput = styled.input`
  margin: 10px;
  width: 70vw;
  height: 0px;
  font-size: 18px;
  border: none;
  padding: 20px; 
  background: #e9e9e9;
  outline: 0px;
    ::placeholder { 
      color: rgb(189, 185, 185); 
      font-size: 20px;
      font-weight: 400; 
      top: 0 
    }
    ${mobile({
  margin: '5px',
  width: '65vw',
  padding: '15px'
})}
`
export const WriteInput = styled.textarea`
  width: 70vw;
  height: 32vh;
  border: none;  
  padding: 20px; 
  background: #e9e9e9;;
  font-family: inherit;
  font-size: 18px;
  margin-top: 5px;
  display: flex;
  resize: none;
  outline: 0px;
    ::placeholder { 
      color: rgb(189, 185, 185); 
      font-size: 20px;
      font-weight: 400; 
      top: 0 
    }
    ${mobile({
  margin: '5px',
  width: '65vw',
  padding: '15px'
})}
`
export const Button = styled.button`
  top: 20px;
  width: 150px;
  display: flex;
  justify-content: center;
  text-align: center;
  right: 50px;
  color: white;
  margin-top: 20px;
  background-color: darkred;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background: red;
    color: white;
    transform: scale(1.05); 
    transition: all 0.5s ease;
  }
  ${mobile({
    marginTop: '15px',
    width: '100px',
    height: '30px'
  })}
`