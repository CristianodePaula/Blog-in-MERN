import React, { useState, useEffect } from 'react'
import Posts from '../../components/Posts/Posts'
import Header from '../../components/Header/Header'
import Slider from '../../components/Slider/Slider'
import { dataSlider } from '../../data/Data'
import Footer from '../../components/Footer/Footer'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

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
      <Posts posts={posts}/>
      <Slider slides={dataSlider} />
      <Footer />
    </>
  )
}

