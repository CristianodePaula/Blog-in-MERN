import React, { useState, useContext } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Context } from './context/Context'
import { Navigate } from 'react-router-dom'
import Navbar from '././components/Navbar/Navbar'
import Sidebar from '././components/Sidebar/Sidebar'
import Home from '././pages/Home/Home'
import Publications from '././pages/Publications/Publications'
import About from '././pages/About/About'
import Contact from '././pages/Contact/Contact'
import Register from '././pages/Register/Register'
import Login from '././pages/Login/Login'
import Write from '././pages/Write/Write'
import SinglePost from '././pages/SinglePost/SinglePost'
import Settings from '././pages/Settings/Settings'

function App() {

  const { user } = useContext(Context)
  const [open, setOpen] = useState(false)
  const alternate = () => {
    setOpen(!open)
  }

  return (
    <BrowserRouter>
      <Navbar alternate={alternate} />
      <Sidebar open={open} alternate={alternate} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/publications' element={<Publications />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/post/:postId" element={user ? <SinglePost /> : <Navigate to='/register' />} />
        <Route path="/register" element={user ? <Navigate to='/' /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to='/' /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Navigate to='/register' />} />
        <Route path="/settings" element={user ? <Settings /> : <Navigate to='/home' />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App