import styled from 'styled-components'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
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
export const Image = styled.img`
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;    
    object-fit: cover;
`
export const Title = styled.div`
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