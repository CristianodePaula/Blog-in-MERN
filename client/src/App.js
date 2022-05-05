import React, { useState, useContext } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Context } from './context/Context'
import { Navigate  } from 'react-router-dom'
import Navbar from './components/Navbar'
import NavbarMobile from './components/NavbarMobile'
import Home from './pages/Home'
import Publications from './pages/Publications'
import About from './pages/About'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import Write from './pages/Write'
import SinglePost from './pages/SinglePost'
import Settings from './pages/Settings'

function App() {

  const { user } = useContext(Context)
  const [open, setOpen] = useState(false)
  const alternate = () => {
      setOpen(!open)
  }

  return ( 
    <BrowserRouter> 
      <Navbar alternate={alternate} />
      <NavbarMobile open={open} alternate={alternate}/>  
      <Routes>    
        <Route path='/' element={<Home/>} />  
        <Route path='/publications' element={<Publications/>} />  
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />  
        <Route path="/post/:postId" element={user ?  <SinglePost/> : <Navigate to='/register'/>} />
        <Route path="/register" element={user ? <Navigate to='/'/> : <Register/>} />
        <Route path="/login" element={user ? <Navigate to='/'/> : <Login/>} />
        <Route path="/write" element={user ?  <Write/> : <Navigate to='/register'/>} />
        <Route path="/settings" element={user ?  <Settings/> : <Navigate to='/home'/>} />      
      </Routes>
    </BrowserRouter>
  )
}
export default App