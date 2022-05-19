import styled from 'styled-components'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
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
export const Left = styled.div`
    flex: 2; 
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 50px;
    font-size: 20px;
`
export const Center = styled.div`
    flex: 5;
    display: flex;
    color: black;
`
export const Right = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 40px;
`
export const Menu = styled.div`
    display: flex;  
    justify-content: center;
    margin-right: 200px;
    ${mobile({ display: 'none' })}
`
export const MenuLink = styled.li`
    display: flex;
    margin: 25px;
    font-size: 22px;
    cursor: pointer;
    align-items: center;
    text-align: center;
`
export const Logout = styled.span`
    color: red;
    cursor: pointer; 
    ${mobile({ display: 'none' })}
`
export const LoginLogout = styled.div`
    display: flex;
    justify-content: space-around;
    ${mobile({ 
        marginRight: '150px'
    })}   
`
export const Button = styled.div`
    margin-left: 20px;
    font-size: 15px;
`
export const UserImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    transition: all .4s ease-in-out;
    filter: grayscale(70%);
    display: flex;
    align-items: center;
    &:hover { 
        filter: grayscale(0);
        transform: rotate(30deg);
        transition: all 0.5s ease; 
    }
    ${mobile({
    width: '30px',
    height: '30px',
    marginLeft: '-340px',
})}
`
export const Sidebar = styled.a`
    display: none;
    font-size: 25px;
    padding: 10px;
    cursor: pointer; 
    ${mobile({ 
        display: 'fixed',

    })}
`