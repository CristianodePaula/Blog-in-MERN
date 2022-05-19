import styled from 'styled-components'
import { motion } from 'framer-motion'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 15px;
  background: grey;
  ${mobile({
  gridTemplateColumns: 'repeat(2, 1fr)',
})} 
`
export const Desc = styled.div`
  padding: 0 2rem;
  ${mobile({
  marginLeft: '15px',
  marginBottom: '20px'
})} 
`
export const Welcome = styled.h1`
  font-size: 30px;
  ${mobile({
  marginTop: '-5px',
  marginBotton: '-25px',
  fontSize: '20px'
})} 
`
export const Paragraph = styled.p`
  font-size: 15px;
  margin-top: 20px;
  ${mobile({
  fontSize: '15px'
})} 
`
export const Items = styled(motion.div)`
  display: flex; 
  flex-direction: column;
  align-item: flex-start;
  padding: 0 2rem;
  margin-bottom: 5px;
  ${mobile({
  padding: '0 3rem'
})}  
`
export const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 1rem;
  ${mobile({
  fontSize: '12px'
})}
`
export const Link = styled.div`
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
export const Icon = styled.a`
  font-size: 20px;
  cursor: pointer;    
  &:hover { 
    color:  red 
  }
  ${mobile({
  fontSize: '15px'
})}
`