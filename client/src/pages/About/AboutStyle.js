import styled from 'styled-components'
import { motion } from 'framer-motion'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mobile({
  flexDirection: 'column',
})} 
`
export const Box = styled.div`
  display: flex;
  align-items: center;
  ${mobile({
  flexDirection: 'column',
  margin: '-10px',
})} 
`
export const TextBox = styled(motion.div)`
  margin: 30px;
  width: 600px;
  ${mobile({
  width: '440px',
  margin: '5px'
})} 
`
export const Title = styled.h1`
  font-size: 30px;
${mobile({
  fontSize: '18px'
})} 
`
export const Text = styled.p`
  font-size: 22px;
  background: grey;
  padding: 20px;
  border-radius: 10px;
  ${mobile({
  fontSize: '18px',
  marginBottom: '30px'
})} 
`
export const Image = styled(motion.img)`
  height: 350px;
  width:: 380px;
  object-fit: cover;
  ${mobile({
  height: '200px',
  width: '380px',
  margin: '10px',
  marginBottom: '30px'
})} 
`