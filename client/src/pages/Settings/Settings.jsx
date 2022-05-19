
import React, { useState, useContext } from 'react'
import {
  Container,
  Wrapper,
  Box,
  Title,
  Text,
  Input,
  Button,
  UserImg,
  Label
} from './SettingsStyle'
import { Context } from '../../context/Context'
import axios from 'axios'
import { FaPlus } from 'react-icons/fa'

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
        <Box>
          <UserImg src={file ? URL.createObjectURL(file) : PF + user.profilePic} />
          <Label htmlFor="fileInput">
            <FaPlus /> Adicione uma imagem
          </Label>
          <Input
            style={{ display: 'none' }}
            type="file" id="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Text>Email</Text>
          <Input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Text>Senha</Text>
          <Input
            type="password"
            placeholder="digite a nova senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleSubmit} > Salvar </Button>
          {success && (
            <span style={{ color: "green", textAlign: "center", marginTop: "20px" }} >
              O perfil está sendo atualizado...
            </span>
          )
          }
        </Box>
      </Wrapper>
    </Container>
  )
}
