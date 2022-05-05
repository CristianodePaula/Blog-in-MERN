import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'
import { mobile } from '../resources/Responsive'

const Container = styled.div`
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
const Menu = styled.ul`
    display: grid;
    margin-left: -40px;
`
const MenuLink = styled(Link)`
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
const BtnLogout = styled.span`
    display: none;
    color: black;
    cursor: pointer; 
    font-size: 20px;
    color: red;
    margin-top: 15px;
    margin-Right: 40px;
    ${mobile({ display: 'fixed' })}
`
export default function NavbarMobile({ open, alternate }) {

    const { user, dispatch } = useContext(Context);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <Container open={open} alternate={alternate} onClick={alternate}>
            <Menu>
                <MenuLink onClick={alternate} to='/' > Inicial </MenuLink>
                <MenuLink onClick={alternate} to='/publications' > Publicações </MenuLink>
                {user ? (
                    <MenuLink onClick={alternate} to='/write'> Escrever </MenuLink>
                ) : (
                    <></>
                )}
                <MenuLink onClick={alternate} to='/About'> Sobre </MenuLink>
                <MenuLink onClick={alternate} to='/contact'> Contato </MenuLink>
            </Menu>
            <BtnLogout onClick={handleLogout}>{user && "Sair"}</BtnLogout>
        </Container>
    )
}

