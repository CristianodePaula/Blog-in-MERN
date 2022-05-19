import React, { useContext } from 'react'
import {
    Container,
    Menu,
    MenuLink,
    BtnLogout
} from './SidebarStyle'
import { Context } from '../../context/Context'


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

