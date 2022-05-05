import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import { dataSlider } from '../resources/Data'
import { mobile } from '../resources/Responsive'
import { motion } from 'framer-motion'
import { aboutTextAnimation, aboutImgAnimation } from '../resources/Animations'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  ${mobile({
  flexDirection: 'column',
})} 
`
const Cont1 = styled.div`
  display: flex;
  align-items: center;
  ${mobile({
  flexDirection: 'column',
  margin: '-10px',
})} 
`
const TextBox = styled(motion.div)`
  width: 600px;
  margin: 30px;
  ${mobile({
  width: '440px',
  margin: '5px'
})} 
`
const Title = styled.h1`
  font-size: 30px;
${mobile({
  fontSize: '18px'
})} 
`
const Text = styled.p`
  font-size: 22px;
  background: grey;
  padding: 20px;
  border-radius: 10px;
  ${mobile({
  fontSize: '15px',
  marginBottom: '30px'
})} 
`
const Image = styled(motion.img)`
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
export default function About() {

  return (
    <>
      <Container>
        <Cont1 style={{ marginTop: '10px' }}>
          <TextBox variants={aboutTextAnimation} initial='initial' animate='animate' >
            <Title>Quem somos</Title>
            <Text>
              Somos um blog voltado à divulgação de conhecimentos a respeito das ciências da computação.
              Temos colaboradores nas mais diversas áreas: Engenharia de Software. Ciência da Computação,
              Computação em Nuvem, Cibersegurança, Arquitetura de Dados, Ciência de Dados,  Sistemas de Informação,
              Análise e Desenvolvimento de Sistemas, Gestão da Tecnologia da Informação, Engenharia da Computação,
              Rede de Computadores, Banco de Dados dentre inúmeras outras.
            </Text>
          </TextBox>
          <Image src='https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?cs=srgb&dl=pexels-fauxels-3183150.jpg&fm=jpg'
            variants={aboutImgAnimation} initial='initial' animate='animate'
          />
        </Cont1>
        <Cont1>
          <Image src='https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            variants={aboutImgAnimation} initial='initial' animate='animate'
          />
          <TextBox variants={aboutTextAnimation} initial='initial' animate='animate'>
            <Title>Nosso Compromisso</Title>
            <Text>
              Nossos colaboradores trabalham arduamente para promover o melhor conteúdo disponível na língua portuguesa.
              Se você não conhece as áreas da tecnologia, saiba que os cursos de TI representam carreiras promissoras,
              com bons salários, além da possibilidade de trabalhar em casa. Assim, caso você se interesse pela área,
              não deixe de conhecer nossas publicações, compreenda este universo fantástico e encontre a área de
              atuação que tem mais a ver com o seu perfil. Torne-se também um de nossos colaboradores, ampliando
              ainda mais a comunidade de computação!
            </Text>
          </TextBox>
        </Cont1>
      </Container>
      <Slider slides={dataSlider} />
      <Footer />
    </>
  )
}
