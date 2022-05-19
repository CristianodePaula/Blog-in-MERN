import React, { useState } from 'react'
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  Button
} from './RegisterStyle'
import axios from 'axios'


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
        <Input
          type="text"
          placeholder="Insira seu nome..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="Insira seu email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label>Senha</Label>
        <Input
          type="password"
          placeholder="Insira sua senha..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit"> Registrar </Button>
        {error && <span style={{ color: "red", marginTop: "10px" }}>Algo está errado!</span>}
      </Form>
    </Container>
  )
}
