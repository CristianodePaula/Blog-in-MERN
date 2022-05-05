import React, { useState, useEffect } from 'react'
import Posts from '../components/Posts'
import Footer from '../components/Footer'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Slider from '../components/Slider'
import { dataSlider } from '../resources/Data'

export default function Home() {

  const [posts, setPosts] = useState([])
  const { search } = useLocation()

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search)
      setPosts(res.data)
    }
    fetchPosts()
  }, [search])

  return (
    <>
      <Header />
      <Posts posts={posts} />
      <Slider slides={dataSlider} />
      <Footer />
    </>
  )
}

