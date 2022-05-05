import React from 'react'
import styled from 'styled-components'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { mobile } from '../resources/Responsive'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 15px;
  background: grey;
  ${mobile({
  gridTemplateColumns: 'repeat(2, 1fr)',
})} 
`
const Desc = styled.div`
  padding: 0 2rem;
  ${mobile({
  marginLeft: '15px',
  marginBottom: '20px'
})} 
`
const H1 = styled.h1`
  font-size: 30px;
  ${mobile({
  marginTop: '-5px',
  marginBotton: '-25px',
  fontSize: '20px'
})} 
`
const P = styled.p`
  font-size: 15px;
  margin-top: 20px;
  ${mobile({
  fontSize: '15px'
})} 
`
const Items = styled(motion.div)`
  display: flex; 
  flex-direction: column;
  align-item: flex-start;
  padding: 0 2rem;
  margin-bottom: 5px;
  ${mobile({
  padding: '0 3rem'
})}  
`
const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 1rem;
  ${mobile({
  fontSize: '12px'
})}
`
const Link = styled.div`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 15px;
  cursor: pointer;
  &:hover { 
    color:  darkred
  }
  ${mobile({
  fontSize: '12px'
})} 
`
const Icon = styled.a`
  font-size: 20px;
  cursor: pointer;    
  &:hover { 
    color:  red 
  }
  ${mobile({
  fontSize: '15px'
})}
`
export default function Footer() {

  return (
    <Container >
      <Desc>
        <H1> Bem vindo! </H1>
        <P>Falça parte de nossa comunidade!</P>
      </Desc>
      <Items>
        <Title >Contate-nos</Title>
        <Link to='/'>Contato</Link>
        <Link to='/'>Suporte</Link>
        <Link to='/'>Comunidade</Link>
        <Link to='/'>Premiações</Link>
      </Items>
      <Items>
        <Title>Parcerias</Title>
        <Link to='/'>Blog Programadores</Link>
        <Link to='/'>Comunidade Softweb</Link>
        <Link to='/'>Programmer X</Link>
        <Link to='/'>MegaTech</Link>
      </Items>
      <Items>
        <Title>Redes Sociais</Title>
        <Icon><FaFacebook /></Icon>
        <Icon><FaInstagram /></Icon>
        <Icon><FaTwitter /></Icon>
        <Icon><FaYoutube /></Icon>
      </Items>
    </Container>
  )
}
