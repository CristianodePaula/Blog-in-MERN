import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import { FaPlus } from 'react-icons/fa'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { writeAnimation } from '../resources/Animations'
import { Context } from '../context/Context'
import { mobile } from '../resources/Responsive'
import axios from 'axios'

const Container = styled.div`   
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?cs=srgb&dl=pexels-jessica-lewis-creative-606541.jpg&fm=jpg");
  background-size: cover;
`
const Wrapper = styled(motion.div)`
  margin-top: 50px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 30px;
  background: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
  ${mobile({ 
    width: '320px'
})}
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Image = styled.img`
  margin-top: 20px;
  width: 73vw;
  height: 200px;
  object-fit: cover; 
  display: flex;
  margin-bottom: 20px; 
  ${mobile({ 
    marginTop: '5px',
    width: '320px',
    height: '100px'
})}
`
const Label = styled.label`
  font-size: 20px;
  margin: 20px;
  ${mobile({ 
   fontSize: "15px",
   margin: '5px'
})}
`
const FileInput = styled.input`
  display: none;
`
const TextInput = styled.input`
  margin: 10px;
  width: 70vw;
  height: 0px;
  font-size: 18px;
  border: none;
  padding: 20px; 
  background: #e9e9e9;
    ::placeholder { 
      color: rgb(189, 185, 185); 
      font-size: 15px;
      font-weight: 400; 
      top: 0 
    }
    ${mobile({ 
    margin: '5px',
     width: '55vw',
     height: '-0px'
   })}
`
const WriteInput = styled.textarea`
  width: 70vw;
  height: 32vh;
  border: none;
  padding: 10px;
  background: #e9e9e9;;
  font-family: inherit;
  font-size: 18px;
  margin-top: 5px;
  display: flex;
    ::placeholder { 
      color: rgb(189, 185, 185); 
      font-size: 15px;
      font-weight: 400; 
      top: 0 
    }
    ${mobile({ 
      margin: '5px',
      width: '59vw',
      height: '240px'
    })}
`
const Button = styled.button`
  top: 20px;
  width: 150px;
  display: flex;
  justify-content: center;
  text-align: center;
  right: 50px;
  color: white;
  margin-top: 20px;
  background-color:red;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
`
export default function Write() {

  const [title, setTitle] = useState("");
  const [categories, setCategories ] = useState("");
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
      const data =new FormData();  
      const filename = Date.now() + file.name; 
      data.append("name", filename); 
      data.append("file", file); 
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return (
    <>
     <Container >
      <Wrapper variants={writeAnimation} initial='initial' animate='animate'>
          {file && (
            <Image src={URL.createObjectURL(file)}/>
          )}
          <Label htmlFor="fileInput">
            <FaPlus/> Adicione uma imagem  
          </Label>
          <Form onSubmit={handleSubmit}>
            <FileInput type='file' id='fileInput' onChange={(e)=>setFile(e.target.files[0])}/>
            <TextInput type='text' placeholder='Título' autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
            <TextInput type='text' placeholder='Categoria' autoFocus={true} onChange={e=>setCategories(e.target.value)}/>
            <WriteInput type="text" placeholder="Escreva sua história"  autoFocus={true} onChange={e=>setDesc(e.target.value)}/> 
           <Button type="submit"> Publicar </Button>    
        </Form>
      </Wrapper>
    </Container>
    <Footer />
    </>
  )
}
