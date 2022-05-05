import React, { useContext } from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'
import { mobile } from '../resources/Responsive'

const NavContainer = styled.div`
    background: white;
    display: flex;
    width: 100%;
    height: 60px;
    position: sticky;
    top: 0;
    align-items: center;
    position: sticky;
    z-index: 1;
`
const Left = styled.div`
    flex: 2; 
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 50px;
    font-size: 20px;
`
const Center = styled.div`
    flex: 5;
    display: flex;
    color: black;
`
const Right = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 40px;
`
const Menu = styled.div`
    display: flex;  
    justify-content: center;
    margin-right: 200px;
    ${mobile({ display: 'none' })}
`
const MenuLink = styled.li`
    display: flex;
    margin: 25px;
    font-size: 20px;
    cursor: pointer;
    align-items: center;
    text-align: center;
`
const Logout = styled.span`
    color: red;
    cursor: pointer; 
    ${mobile({ display: 'none' })}
`
const LoginLogout = styled.div`
    display: flex;
    justify-content: space-around;
    ${mobile({ marginRight: '130px' })}   
`
const LLButton = styled.div`
    margin-left: 20px;
    font-size: 15px;
`
const UserImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    transition: all .4s ease-in-out;
    filter: grayscale(70%);
    &:hover { 
        filter: grayscale(0);
        transform: rotate(30deg);
        transition: all 0.5s ease; 
    }
    ${mobile({
    width: '30px',
    height: '30px',
    marginLeft: '-300px',
})}
`
const ButtonS = styled.a`
    display: none;
    color: black;
    cursor: pointer; 
    font-size: 25px;
    ${mobile({ display: 'fixed' })}
`
export default function Navbar({ open, alternate }) {

    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <NavContainer>
            <Left>
            </Left>
            <Center>
                <Menu>
                    <MenuLink>
                        <Link to='/'>Inicial</Link>
                    </MenuLink>
                    <MenuLink>
                        <Link to='/publications'>Publicações</Link>
                    </MenuLink>
                    {user ? (
                        <MenuLink>
                            <Link to='/write'>Escrever</Link>
                        </MenuLink>
                    ) : (<></>)}
                    <MenuLink>
                        <Link to='/about'>Sobre</Link>
                    </MenuLink>
                    <MenuLink>
                        <Link to='/contact'>Contatos</Link>
                    </MenuLink>
                </Menu>
                <Right>
                    {user ? (
                        <>
                            <Logout onClick={handleLogout}>{user && "Sair"}</Logout>
                            <Link to='/settings'>
                                <UserImg src={PF + user.profilePic} alt='' />
                            </Link>
                        </>
                    ) : (
                        <LoginLogout>
                            <Link to='/login'>
                                <LLButton>Entrar</LLButton>
                            </Link>
                            <Link to='/register'>
                                <LLButton>Registrar</LLButton>
                            </Link>
                        </LoginLogout>
                    )}
                </Right>
            </Center>
            <ButtonS open={open} onClick={alternate} ><FaBars /></ButtonS>
        </NavContainer>
    )
}
