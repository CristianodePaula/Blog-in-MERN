import React, { useState, useContext, useRef } from 'react'
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  Button,
  Error
} from './LoginStyle'
import axios from "axios"
import { Context } from "../../context/Context"

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
        <Input
          type="text"
          placeholder="Nome de usuário..."
          ref={userRef}
        />
        <Label>Senha</Label>
        <Input
          type="password"
          placeholder="Digite sua senha..."
          ref={passwordRef}
        />
        <Button type="submit" disabled={isFetching}>Entrar</Button>
        {error && <Error style={{ color: "red", marginTop: "10px" }}>Ocorreu um erro!</Error>}
      </Form>
    </Container>
  )
}