import styled from 'styled-components'
import { motion } from 'framer-motion'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: gainsboro;
`
export const Post = styled.div`
  margin-bottom: 30px;
`
export const Update = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  ${mobile({
  marginLeft: '40px'
})}
`
export const Image = styled(motion.img)` 
  width: 80vw;
  height: 350px;
  border-radius: 5px;
  object-fit: cover;
  margin-bottom: 20px;
    ${mobile({
  height: '180px',
})}
`
export const Text = styled.span`
  margin-left: 20px;
  font-size: 20px;
  margin: 5px;    
  display: flex;
  justify-content: left;
  margin-bottom: 20px;
  ${mobile({
  fontSize: '16px',
})}
`
export const Input = styled.input`  
  color: #666;
  font-size: 20px;
  width: 67vw;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: none;
  outline: 0px;
  ${mobile({
  height: '0px',
  fontSize: '15px'
})}
`
export const TextArea = styled.textarea`
  color: #666;  
  font-size: 20px;
  line-height: 25px;
  width: 67vw;
  min-height: 400px;
  padding: 28px;  
  border-radius: 5px;
  border: none;
  resize: none;
  outline: 0px;
  ${mobile({
  fontSize: '15px',
})}
`
export const BtnEdit = styled.div`
  display: flex;
  margin-Left: 200px;
`
export const Icon = styled.a`
  font-size: 25px;
  margin-left: 20px;
  cursor: pointer;
  ${mobile({
  fontSize: "20px",
  marginLeft: '10px'
})}
`
export const BtnUpdate = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 150px;
  color: white;
  background-color: red;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  margin: 30px 20px 0px 20px;
  cursor: pointer;
  ${mobile({
  fontSize: '12px',
  width: '100px',
  height: '30px',
  margin: ''
})}
`
export const TopPublication = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  justify-content: space-between;
  display: flex;
`
export const Title = styled.h1`
  font-size: 30px;
  width: 70vw;
`
export const User = styled.div`
  max-width: 80vw;
  display: flex;
  text-align: center;
  justify-content: space-between;
`
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`
export const Desc = styled.div`
  color: #666;
  font-size: 20px;
  line-height: 25px;
  width: 80vw;
  color: black;
  min-height: 200px;
  border-radius: 10px;
  background: azure;
  padding: 20px;
  ${mobile({
  fontSize: "16px",
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
export const LoadBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30vh;
  ${mobile({
})} 
`