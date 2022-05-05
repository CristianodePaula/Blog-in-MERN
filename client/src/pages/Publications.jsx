import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Post from '../components/Post'
import Footer from '../components/Footer'
import axios from 'axios'
import { mobile } from '../resources/Responsive'
import ReactLoading from "react-loading"

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: gainsboro;
  ${mobile({
  gridTemplateColumns: '1fr'
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
export default function Publications() {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:3000/publications')
      .then(res => {
        setPosts(res.data)
        setLoading(true)
      })

  }, [])

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("/posts")
      setPosts(res.data)
      setLoading(true)
    }
    getPosts()
  }, [])

  return (
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
        <>
          <PostsContainer>
            {posts.map((p, index) => (
              <Post key={index} post={p} />
            ))}
          </PostsContainer>
          <Footer />
        </>
      )}
    </>
  )
}