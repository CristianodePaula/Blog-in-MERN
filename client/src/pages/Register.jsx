import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { mobile } from '../resources/Responsive'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url("https://images.pexels.com/photos/6893329/pexels-photo-6893329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
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
  margin-top: 20px;
  display: flex;
  flex-direction: column;
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
  padding: 10px;
  background-color: white;
  border: none;
  border-radius: 10px;
`
const RegButton = styled.button`
  margin-top: 20px;
  text-align: center;
  background-color: darkgreen;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`
export default function Register() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Container>
      <Title>Registar</Title>
      <Form onSubmit={handleSubmit}>
        <Label>Nome</Label>
        <Input type="text" placeholder="Insira seu nome..." onChange={(e) => setUsername(e.target.value)} />
        <Label>Email</Label>
        <Input type="email" placeholder="Insira seu email..." onChange={(e) => setEmail(e.target.value)} />
        <Label>Senha</Label>
        <Input type="password" placeholder="Insira sua senha..." onChange={(e) => setPassword(e.target.value)} />
        <RegButton type="submit"> Registrar </RegButton>
        {error && <span style={{ color: "red", marginTop: "10px" }}>Algo está errado!</span>}
      </Form>
    </Container>
  )
}
