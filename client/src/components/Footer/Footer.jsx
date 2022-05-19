import React from 'react'
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube 
} from 'react-icons/fa'
import {
  Container,
  Desc,
  Welcome,
  Paragraph,
  Items,
  Title,
  Link,
  Icon
} from './FooterStyle'

export default function Footer() {

  return (
    <Container >
      <Desc>
        <Welcome> Bem vindo! </Welcome>
        <Paragraph>Falça parte de nossa comunidade!</Paragraph>
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
