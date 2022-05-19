import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: white;
    transition: 0.3s ease-in-out;
    opacity: ${({ open }) => (open ? '100%' : '0')}; 
    top: ${({ open }) => (open ? '0%' : '-100%')}; 
`
export const Menu = styled.ul`
    display: grid;
`
export const MenuLink = styled(Link)`
    margin: 15px;
    color: black; 
    font-size: 20px;
    cursor: pointer;
    &:hover { 
        color: grey 
    }
    &.active {
        border-bottom: 2px solid red 
    }
`
export const BtnLogout = styled.span`
    display: none;
    color: black;
    cursor: pointer; 
    font-size: 20px;
    color: red;
    margin-top: 15px;
    ${mobile({
    display: 'fixed'
})}
`