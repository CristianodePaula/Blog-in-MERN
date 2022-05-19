import styled from 'styled-components'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-content: center;
  padding: 50px;
  background: gainsboro;
  ${mobile({
  gridTemplateColumns: '1fr',
  padding: '30px',
  gridGap: '0px'
})} 
`
export const LoadBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30vh;
`