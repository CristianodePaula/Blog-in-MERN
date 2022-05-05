import React, { useState } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import axios from 'axios'
import { mobile } from '../resources/Responsive'
import { motion } from 'framer-motion'
import { contactFormAnimation } from '../resources/Animations'

const Container = styled.div`
  height: 92vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url("https://images.pexels.com/photos/8353837/pexels-photo-8353837.jpeg?cs=srgb&dl=pexels-kampus-production-8353837.jpg&fm=jpg
  ");
  background-size: cover;
`
const Form = styled(motion.form)`
  height: 450px;
  width: 400px;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mobile({
  height: '450px',
  width: '350px',
  fontSize: '12px'
})} 
`
const Text = styled.h1`
  font-size: 15px;
  margin-bottom: 25px;
  ${mobile({
  fontSize: '12px   '
})} 
`
const Input = styled.input`
  height: 25px;
  width: 320px;
  border-radius: 5px;
  border: none;
  background: #E6E6FA;
  margin-bottom: 25px;
  ${mobile({
  width: '250px'
})} 
  `
const TextArea = styled.textarea`
  height: 150px;
  width: 320px;
  border-radius: 5px;
  border: none;
  background: #E6E6FA;
  ${mobile({
  width: '250px'
})} 
`
const Button = styled.button`
  background: darkred;
  border-radius: 10px;
  padding: 10px;
  color: white;
  margin-top: 20px;
  height: 40px;
  width: 150px;
  ${mobile({
  padding: '7px',
  height: '30px',
  width: '100px',
  fontSize: '12px'
})}
`
export default function Contact() {

  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/contact", {
        name,
        occupation,
        email,
        message,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit} variants={contactFormAnimation} initial='initial' animate='animate'>
          <Text> Entre em Contato </Text>
          <Input type="text" placeholder="Nome..." onChange={(e) => setName(e.target.value)}></Input>
          <Input type="text" placeholder="Ocupação..." onChange={(e) => setOccupation(e.target.value)}></Input>
          <Input type="email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)}></Input>
          <TextArea type="textarea" placeholder="Menssage..." onChange={(e) => setMessage(e.target.value)}></TextArea>
          <Button type="submit">Enviar</Button>
        </Form>
        {error && <span style={{ color: "red", marginTop: "10px" }}>Algo está errado!</span>}
      </Container>
      <Footer />
    </>
  )
}






