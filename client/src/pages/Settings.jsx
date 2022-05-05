
import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../context/Context'
import axios from 'axios'
import { FaPlus } from 'react-icons/fa'
import { mobile } from '../resources/Responsive'

const Container = styled.div`
  height: 90.8vh;
  width: 100vw;
  background: #DCDCDC;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  height: 550px;
  width: 700px;
  background: #F8F8FF;
  border-radius: 20px;   
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mobile({
  height: '500px',
  width: '420px'
})}
`
const BoxUser = styled.div`
  display: flex;
  height: 440px;
  width: 500px;
  background: #DCDCDC;
  border-radius: 20px; 
  justity-content: center;
  align-items: center;
  flex-direction: column;
  ${mobile({
  height: '400px',
  width: '350px'
})}
`
const Title = styled.h1`
  font-size: 35px;
  ${mobile({
  fontSize: '25px'
})}
`
const Text = styled.h2`
  font-size: 15px;
  margin-bottom: 15px;
`
const InputUser = styled.input`
  height: 30px;
  width: 250px;
  border-radius: 5px;
  border: none;
  text-align: center;
  margin-bottom: 15px;
  ${mobile({
  width: '200px'
})}
`
const Button = styled.button`
  margin-top: 10px;
  height: 30px;
  width: 100px;
  border-radius: 10px;
  background: darkred;
  color: white;
`
const UserImg = styled.img`
  margin-top: 30px;
  width: 130px;
  height: 130px;
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
  width: '100px',
  height: '100px'
})}
`
const Label = styled.label`
  font-size: 15px;
  margin: 20px;
`
export default function Settings() {

  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      email,
      password,
    };
    if (!email || !password)
      return alert("Preecha todos os campos")
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) { }
    }
    try {
      const res = await axios.put(`/users/${user._id}`, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      window.location.reload()
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Atualize seu Usuário</Title>
        <BoxUser>
          <UserImg src={file ? URL.createObjectURL(file) : PF + user.profilePic} />
          <Label htmlFor="fileInput">
            <FaPlus /> Adicione uma imagem
          </Label>
          <InputUser style={{ display: 'none' }} type="file" id="fileInput" onChange={(e) => setFile(e.target.files[0])} />
          <Text>Email</Text>
          <InputUser type="email" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} />
          <Text>Senha</Text>
          <InputUser type="password" placeholder="digite a nova senha" onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={handleSubmit} > Salvar </Button>
          {success && (
            <span style={{ color: "green", textAlign: "center", marginTop: "20px" }} >
              O perfil está sendo atualizado...
            </span>
          )
          }
        </BoxUser>
      </Wrapper>
    </Container>
  )
}
