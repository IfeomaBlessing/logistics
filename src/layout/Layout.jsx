import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
// import './App.css'
import Hero from '../Components/hero/Hero'
import Navbar from '../Components/navbar/Navbar'
import Service from '../Components/service/Service'
import Contact from '../Components/contact/Contact'
import Footer from '../Components/footer/Footer'
import About from "../Components/about/About"

const Layout=()=> {
    const [scroll, setScroll] = useState(false)
     
    const handleNavbar =()=>{
      if(window.scrollY > 0){
        setScroll(true)
      }else{
        setScroll(false)
      }
    }
    window.addEventListener("scroll", handleNavbar)
  return (
    <>
    <Navbar scroll={scroll}/>
      
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

   
       <Contact/>
      <Footer/>
    </>
  )
}

export default Layout
