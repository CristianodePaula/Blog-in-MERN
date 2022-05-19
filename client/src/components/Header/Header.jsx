import React, { useRef } from 'react'
import {
    Container,
    Title
} from './HeaderStyle'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import back01 from '../../images/back01.jpg'
import back04 from '../../images/back02.jpg'
import { headerAnimation } from '../../resources/Animations'

export default function Header() {

    const ref = useRef()

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
                    <Title
                        variants={headerAnimation}
                        initial='initial'
                        animate='animate'
                    >Bem vindo ao blog Desenvolvedores BR!</Title>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1.2}
                    speed={1}
                    onClick={() => ref.current.scrollTo(0)}
                >
                    <Title> Cadastre-se e nos ajude a criar conteúdo! </Title>
                </ParallaxLayer>
            </Parallax>
        </Container>
    )
}
