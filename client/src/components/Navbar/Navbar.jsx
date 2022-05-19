import React, { useContext } from 'react'
import {
    Container,
    Left,
    Center,
    Menu,
    Right,
    MenuLink,
    Logout,
    LoginLogout,
    Button,
    UserImg,
    Sidebar
} from './NavbarStyle'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'


export default function Navbar({ open, alternate }) {

    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <Container>
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
                                <Button>Entrar</Button>
                            </Link>
                            <Link to='/register'>
                                <Button>Registrar</Button>
                            </Link>
                        </LoginLogout>
                    )}
                </Right>
            </Center>
            <Sidebar open={open} onClick={alternate}> <FaBars /> </Sidebar>
        </Container>
    )
}
