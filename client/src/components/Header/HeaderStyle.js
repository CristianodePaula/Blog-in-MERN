import styled from 'styled-components'
import { motion } from 'framer-motion'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
  background: black;
`
export const Title = styled(motion.h2)`
  font-size: 45px;
  color: white;
  font-family: 'Arapey', serif;
  ${mobile({
  fontSize: '35px',
})} 
`