import React, { useState, useContext, useRef } from 'react'
import styled from 'styled-components'
import axios from "axios"
import { Context } from "../context/Context"
import { mobile } from '../resources/Responsive'

const Container = styled.div` 
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
`
const Title = styled.h1`
  font-size: 50px;
  color: white;
  text-shadow: 3px 3px 4px black;
  ${mobile({
  fontSize: '35px'
})}
`
const Form = styled.form`
  display: flex;
  text-align: center;
  flex-direction: column;
  margin-top: 0px;
`
const Label = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 10px 0;
  font-size: 20px;
  font-weight: 400;
  color: white;
  text-shadow: 3px 3px 4px black;
`
const Input = styled.input`
  background-color: white;
  border: none;
  padding: 10px; 
  border-radius: 10px;
`
const Button = styled.button`
  margin-top: 20px;
  background-color: darkred;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
`
const Error = styled.div`
  font-size: 20px;
  font-weight: 600;
  ${mobile({
  fontSize: '15px'
})}
`
export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError(true);
    }
  };

  console.log(user)

  return (
    <Container>
      <Title>Entrar</Title>
      <Form onSubmit={handleSubmit}>
        <Label>Usuário</Label>
        <Input type="text" placeholder="Nome de usuário..." ref={userRef} />
        <Label>Senha</Label>
        <Input type="password" placeholder="Digite sua senha..." ref={passwordRef} />
        <Button type="submit" disabled={isFetching}>Entrar</Button>
        {error && <Error style={{ color: "red", marginTop: "10px" }}>Ocorreu um erro!</Error>}
      </Form>
    </Container>
  )
}