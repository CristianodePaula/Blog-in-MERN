import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 30px;
`
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background: white;
    border-radius: 30px;
    width: 550px;
    height: 500px;
    ${mobile({
    width: '400px',
    height: '450px'
})} 
`
export const Image = styled(motion.img)`
    height: 220px;
    width: 440px;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
       filter: invert(100%);
       transform: scale(1.05);
       transition: all 0.5s ease; 
    }
    ${mobile({
    width: '340px',
    height: '200px'
})} 
`
export const Info = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Title = styled.h1`
    font-size: 22px;
    font-weight: 900;
    color: black;
    text-decoration: none;
    margin-top: 30px;   
    ${mobile({
    fontSize: '15px'
})} 
`
export const Categ = styled.span`
    font-size: 15px;
    margin-bottom: 10px;
`
export const Date = styled.span`
    font-style: italic;
    font-size: 15px;
    color: black;
    margin-bottom: 10px;
    ${mobile({
    fontSize: '12px'
})} 
`
export const Desc = styled.div`
    width: 400px;
    overflow: hidden; 
    text-overflow: ellipsis; 
    display: -webkit-box;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical; 
    ${mobile({
    width: '340px',
    fontSize: '12px'
})} 
`
export const FullPost = styled(Link)`
    margin-top: 20px;
    color: darkred;
    text-decoration: underline;
    cursor: pointer;
    ${mobile({
    fontSize: '12px'
})} 
`