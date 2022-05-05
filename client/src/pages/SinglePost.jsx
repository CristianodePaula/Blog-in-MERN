import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { FaPlus, FaEdit, FaRegTrashAlt } from 'react-icons/fa'
import ReactLoading from "react-loading"
import { motion } from 'framer-motion'
import { singlePostAnimation } from '../resources/Animations'
import { mobile } from '../resources/Responsive'
import { useLocation } from "react-router"
import { Link } from 'react-router-dom'
import { Context } from "../context/Context"
import axios from 'axios'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: gainsboro;
`
const Post = styled.div`
  ${mobile({
  marginLeft: '-50px'
})}
`
const UpdatePost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
  ${mobile({
  marginLeft: '40px'
})}
`
const Image = styled(motion.img)` 
  width: 80vw;
  height: 350px;
  border-radius: 5px;
  object-fit: cover;
  margin-bottom: 20px;
    ${mobile({
  width: '90vw',
  height: '200px'
})}
`
const Text = styled.span`
  margin-left: 20px;
  font-size: 20px;
  margin: 5px;    
  display: flex;
  justify-content: left;
  margin-bottom: 20px;
  ${mobile({
  fontSize: '15px',
  justifyContent: 'center'
})}
`
const Input = styled.input`  
  color: #666;
  font-size: 20px;
  width: 67vw;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: none;
  ${mobile({
  height: '0px',
  fontSize: '15px'
})}
`
const TextArea = styled.textarea`
  color: #666;
  font-size: 18px;
  line-height: 25px;
  width: 67vw;
  min-height: 400px;
  padding: 28px;  
  border-radius: 5px;
  border: none;
  ${mobile({
  fontSize: '15px',
})}
`
const BtnEdit = styled.div`
  display: flex;
  font-size: 16px;
`
const Icon = styled.a`
  font-size: 25px;
  margin-left: 20px;
  cursor: pointer;
`
const BtnUpdate = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 150px;
  color: white;
  background-color: red;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 50px;
  margin-top: 20px;
  margin-bottom: 30px;
  ${mobile({
  fontSize: '12px',
  width: '100px',
  height: '30px'

})}
`
const TopPublication = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  justify-content: space-between;
  display: flex;
`
const Title = styled.h1`
  font-size: 30px;
  width: 70vw;
`
const UserInfo = styled.div`
  max-width: 70vw;
  display: flex;
  text-align: center;
  justify-content: space-between;
`
const InfoUser = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`
const Desc = styled.div`
  color: #666;
  font-size: 18px;
  line-height: 25px;
  width: 80vw;
  color: black;
  min-height: 200px;
  border-radius: 10px;
  background: azure;
  padding: 50px;
`
const Label = styled.label`
  font-size: 20px;
  margin: 20px;
  ${mobile({
  fontSize: "15px",
  margin: '5px'
})}
`
const LoadBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30vh;
  ${mobile({
})} 
`
export default function SinglePost() {

  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCategories] = useState("");
  const [loading, setLoading] = useState(false)
  const [updateMode, setUpdateMode] = useState(false);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setCategories(res.data.categories);
      setDesc(res.data.desc);
      setLoading(true)
    };
    getPost();
  }, [path]);

  useEffect(() => {
    axios.get('http://localhost:3000/publications')
      .then(res => {
        setPost(res.data)
        setLoading(true)
      })
  }, [])

  const handleUpdate = async (e) => {
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
      const res = await axios.put(`/posts/${post._id}`, newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) { }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) { }
  };

  function refreshPage(e) {
    e.preventDefault();
    window.location.reload(false);
  }

  return (
    <Container>
      <Post>
        {updateMode ? (
          <UpdatePost>
            {file && (
              <Image src={URL.createObjectURL(file)} />
            )}
            <Label htmlFor="fileInput"><FaPlus /> Altere a imagem </Label>
            <Input style={{ display: "none" }} type='file' id='fileInput' onChange={(e) => setFile(e.target.files[0])} />
            <Text>Título</Text>
            <Input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
            <Text>Categoria</Text>
            <Input type='text' value={categories} onChange={(e) => setCategories(e.target.value)} />
            <Text>Artigo</Text>
            <TextArea type='text' value={desc} onChange={(e) => setDesc(e.target.value)} />
            <div style={{ display: 'flex', marginRight: '40px' }}>
              <BtnUpdate onClick={handleUpdate}> Atualizar </BtnUpdate>
              <BtnUpdate style={{ background: 'blue' }} onClick={refreshPage}>Voltar</BtnUpdate>
            </div>
          </UpdatePost>
        ) : (
          <>
            {!loading ? (
              <LoadBar>
                <ReactLoading
                  type={"spin"}
                  color={"grey"}
                  height={100}
                  width={100} />
              </LoadBar>
            ) : (
              <TopPublication>
                {post.photo && (
                  <Image src={PF + post.photo} variants={singlePostAnimation} initial='initial' animate='animate' />
                )}
                <Title>{title}</Title>
                <UserInfo>
                  <InfoUser>
                    <Text>
                      <Link to={`/?user=${post.username}`}>
                        Autor: <b style={{ color: 'brown' }}>{post.username}</b>
                      </Link>
                    </Text>
                    <Text>
                      Categoria: <b style={{ color: 'brown', marginLeft: '5px' }}>{post.categories}</b>
                    </Text>
                    <Text>
                      Data: <b style={{ color: 'brown', marginLeft: '5px' }}>  {new Date(post.createdAt).toLocaleDateString()} </b>
                    </Text>
                  </InfoUser>
                  <BtnEdit>
                    {post.username === user?.username && (
                      <>
                        <Icon>
                          <FaEdit onClick={setUpdateMode} />
                        </Icon>
                        <Icon>
                          <FaRegTrashAlt onClick={handleDelete} />
                        </Icon>
                      </>
                    )}
                  </BtnEdit>
                </UserInfo>
                <Desc> {desc} </Desc>
              </TopPublication>
            )}
          </>
        )}
      </Post>
    </Container>
  )
}
