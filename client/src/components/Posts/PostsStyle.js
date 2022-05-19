import styled from 'styled-components'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-content: center;
  padding: 50px;
  background: black;
  ::-webkit-scrollbar {
    width: 1px;    
    color: red;        
  }
  ${mobile({
  gridTemplateColumns: '1fr'
})} 
`