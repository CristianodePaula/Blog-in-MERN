import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { dataSlider } from '../resources/Data'
import { mobile } from '../resources/Responsive'

const Container = styled.div`
    height: 66vh;
    display: flex;
    justify-content: center;
    background: #000;
    overflow: hidden;
    display: flex;
    .slide { 
        opacity: 0; 
        transition-duration: 2s ease 
    }
    .slide.active { 
        opacity: 1; 
        transition-duration: 4s; 
        transform: scale(1.08) 
    }
    ${mobile({
    height: '50vh',
    left: '10%'
})} 
`
const Image = styled.img`
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;    
    object-fit: cover;
`
const H1 = styled.div`
    position: absolute;
    font-size: 50px;
    color: white;
    text-shadow: 3px 3px 4px black;
    left: 43%;
    top: 40%;
    ${mobile({
    fontSize: '30px',
    left: '38%'
})} 
`
export default function Slider({ slides }) {

    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    useEffect(
        () => {
            const nextSlide = () => {
                setCurrent(current => (current === length - 1 ? 0 : current + 1))
            }
            timeout.current = setTimeout(nextSlide, 3000)

            return function () {
                if (timeout.current) {
                    clearTimeout(timeout.current)
                }
            }
        }, [current, length])

    return (
        <Container>
            {dataSlider.map((slide, index) => (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (
                        <div>
                            <Image src={slide.url} />
                            <H1>{slide.title}</H1>
                        </div>
                    )}
                </div>
            ))}
        </Container>
    )
}