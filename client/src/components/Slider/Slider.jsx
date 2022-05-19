import React, { useState, useEffect, useRef } from 'react'
import {
    Container,
    Image,
    Title
} from './SliderStyle'
import { dataSlider } from '../../data/Data'

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
                            <Title>{slide.title}</Title>
                        </div>
                    )}
                </div>
            ))}
        </Container>
    )
}