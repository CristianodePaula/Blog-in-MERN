import React, { useRef } from 'react'
import styled from 'styled-components';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import back01 from '../img/back01.jpg'
import back04 from '../img/back04.jpg'
import { mobile } from '../resources/Responsive'
import { motion } from 'framer-motion';
import { headerAnimation } from '../resources/Animations'

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
  background: black;
`
const H2 = styled(motion.h2)`
  font-size: 45px;
  color: white;
  ${mobile({
    fontSize: '35px'
})} 
`
export default function Header() {

    const ref = useRef();

    return (
        <Container>
            <Parallax pages={2} ref={ref}>
                <ParallaxLayer
                    offset={0}
                    speed={0.5}
                    factor={1}
                    style={{
                        backgroundImage: `url(${back04}`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                    }}
                />
                <ParallaxLayer
                    offset={1}
                    speed={3}
                    factor={1}
                    style={{
                        backgroundImage: `url(${back01})`,
                        backgroundSize: 'cover',
                    }}
                />
                <ParallaxLayer
                    offset={0.1}
                    speed={1}
                    onClick={() => ref.current.scrollTo(3)}
                >
                    <H2 variants={headerAnimation} initial='initial' animate='animate'>Bem vindo ao blog Desenvolvedores BR!</H2>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1.2}
                    speed={1}
                    onClick={() => ref.current.scrollTo(0)}
                >
                    <H2> Cadastre-se e nos ajude a criar conteúdo! </H2>
                </ParallaxLayer>
            </Parallax>
        </Container>
    )
}
