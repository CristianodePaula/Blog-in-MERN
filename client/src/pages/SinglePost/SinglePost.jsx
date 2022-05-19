import React, { useState, useEffect, useContext } from 'react'
import {
  Container,
  Post,
  Update,
  Image,
  Text,
  Input,
  TextArea,
  BtnEdit,
  Icon,
  BtnUpdate,
  TopPublication,
  Title,
  User,
  UserInfo,
  Desc,
  Label,
  LoadBar
} from './SinglePostStyle'
import { FaPlus, FaEdit, FaRegTrashAlt } from 'react-icons/fa'
import ReactLoading from "react-loading"

import { singlePostAnimation } from '../../resources/Animations'
import { useLocation } from "react-router"
import { Link } from 'react-router-dom'
import { Context } from "../../context/Context"
import axios from 'axios'

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
      window.location.replace("/publications");
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
          <Update>
            {file && (
              <Image src={URL.createObjectURL(file)} />
            )}
            <Label htmlFor="fileInput"><FaPlus /> Altere a imagem </Label>
            <Input
              style={{ display: "none" }}
              type='file' id='fileInput'
              onChange={(e) => setFile(e.target.files[0])}
            />
            <Text>Título</Text>
            <Input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Text>Categoria</Text>
            <Input
              type='text'
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
            />
            <Text>Artigo</Text>
            <TextArea
              type='text'
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <div style={{ display: 'flex', marginRight: '40px' }}>
              <BtnUpdate onClick={handleUpdate}
              > Atualizar </BtnUpdate>
              <BtnUpdate
                style={{ background: 'blue' }}
                onClick={refreshPage}
              >Voltar</BtnUpdate>
            </div>
          </Update>
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
                  <Image
                    src={PF + post.photo}
                    variants={singlePostAnimation}
                    initial='initial'
                    animate='animate'
                  />
                )}
                <Title>{title}</Title>
                <User>
                  <UserInfo>
                    <Text>
                      <Link to={`/?user=${post.username}`}>
                        Autor: <b style={{ color: 'brown' }}>
                          {post.username}</b>
                      </Link>
                    </Text>
                    <Text>
                      Categoria: <b style={{ color: 'brown', marginLeft: '5px' }}>
                        {post.categories}</b>
                    </Text>
                    <Text>
                      Data: <b style={{ color: 'brown', marginLeft: '5px' }}>
                        {new Date(post.createdAt).toLocaleDateString()} </b>
                    </Text>
                  </UserInfo>
                  <BtnEdit>
                    {post.username === user?.username && (
                      <>
                        <Icon>
                          <FaEdit 
                          style={{fontColor: 'red'}}
                          onClick={setUpdateMode} />
                        </Icon>
                        <Icon>
                          <FaRegTrashAlt onClick={handleDelete} />
                        </Icon>
                      </>
                    )}
                  </BtnEdit>
                </User>
                <Desc> {desc} </Desc>
              </TopPublication>
            )}
          </>
        )}
      </Post>
    </Container>
  )
}
