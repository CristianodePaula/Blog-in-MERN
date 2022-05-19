import React, { useState, useContext } from 'react'
import {
  Container,
  Wrapper,
  Form,
  Image,
  Label,
  FileInput,
  TextInput,
  WriteInput,
  Button
} from './WriteStyle'
import { FaPlus } from 'react-icons/fa'
import Footer from '../../components/Footer/Footer'
import { writeAnimation } from '../../resources/Animations'
import { Context } from '../../context/Context'
import axios from 'axios'

export default function Write() {

  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      categories,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) { }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) { }
  };

  return (
    <>
      <Container >
        <Wrapper
          variants={writeAnimation}
          initial='initial'
          animate='animate'
        >
          {file && (
            <Image src={URL.createObjectURL(file)} />
          )}
          <Label htmlFor="fileInput">
            <FaPlus /> Adicione uma imagem
          </Label>
          <Form onSubmit={handleSubmit}>
            <FileInput
              type='file'
              id='fileInput'
              onChange={(e) => setFile(e.target.files[0])}
            />
            <TextInput
              type='text'
              placeholder='Título'
              autoFocus={true}
              onChange={e => setTitle(e.target.value)}
            />
            <TextInput
              type='text'
              placeholder='Categoria'
              autoFocus={true}
              onChange={e => setCategories(e.target.value)}
            />
            <WriteInput
              type="text"
              placeholder="Escreva sua história"
              autoFocus={true}
              onChange={e => setDesc(e.target.value)}
            />
            <Button type="submit"> Publicar </Button>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </>
  )
}
